import React, { useState, useEffect, useContext, useRef } from "react";
import useStyles from "./style";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CloseIcon from "@mui/icons-material/Close";

import ProductGridView from "./productGridView";
import ProductListView from "./productListView";
import MultiSelctFilter from "../../common/Filters/MultiSelctFilter";

import ListViewIcon from "../../../assets/icons/fontawesome/solid/list.svg?react";
import GridViewIcon from "../../../assets/icons/fontawesome/solid/table-cells.svg?react";

import useCancellablePromise from "../../../api/cancelRequest";
import {
  getAllProductRequest,
  getAllFiltersRequest,
  getAllFilterValuesRequest,
} from "../../../api/product.api";
import { getCall, postCall } from "../../../api/client";
import { getValueFromCookie } from "../../../utils/cookies";
import { ToastContext } from "../../../context/toastContext";
import { toast_actions, toast_types } from "../../shared/toast/utils/toast";
import {
  formatCustomizationGroups,
  formatCustomizations,
  initializeCustomizationState,
} from "../../application/product-list/product-details/utils";
import { CartContext } from "../../../context/cartContext";
import { SearchContext } from "../../../context/searchContext";
import Loading from "../../shared/loading/loading";

const ProductList = ({ isOnHomePage = false }) => {
  const classes = useStyles();
  const locationData = useLocation();
  const navigate = useNavigate();
  const { locationData: deliveryAddressLocation } = useContext(SearchContext);

  const { fetchCartItems } = useContext(CartContext);
  const [productPayload, setProductPayload] = useState(null);
  const [customization_state, setCustomizationState] = useState({});
  const [productLoading, setProductLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 18,
    searchData: [],
  });
  const dispatch = useContext(ToastContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [sortBy, setSortBy] = useState("relevance");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // HOOKS
  const { cancellablePromise } = useCancellablePromise();

  const useQuery = () => {
    const { search } = locationData;
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  const categoryName = query.get("c");
  const subCategoryName = query.get("sc");
  const searchProductName = query.get("s");

  const getAllProducts = async (searchName) => {
    setIsLoading(true);
    try {
      let paginationData = Object.assign(
        {},
        JSON.parse(JSON.stringify(paginationModel))
      );
      paginationData.searchData = paginationData.searchData.filter(
        (item) => item.selectedValues.length > 0
      );
      paginationData.searchData = paginationData.searchData.reduce(function (
        r,
        e
      ) {
        r[e.code] = e.selectedValues.join();
        return r;
      },
        {});
      paginationData.searchData.pageNumber = paginationData.page;
      paginationData.searchData.limit = paginationData.pageSize;
      if (searchName) {
        paginationData.searchData.name = searchName || "";
      } else {
      }
      if (subCategoryName) {
        paginationData.searchData.categoryIds = subCategoryName || "";
      } else {
      }
      const data = await cancellablePromise(
        getAllProductRequest(paginationData.searchData)
      );
      if (paginationData.pageNumber > 1) {
        setProducts((prev) => [...prev, ...data.data]);
      } else {
        setProducts(data.data);
      }
      setTotalProductCount(data.count);
    } catch (err) {
      dispatch({
        type: toast_actions.ADD_TOAST,
        payload: {
          id: Math.floor(Math.random() * 100),
          type: toast_types.error,
          message: err?.response?.data?.error?.message,
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getSortedProducts = () => {
    let sorted = [...products];
    if (sortBy === "price_low_high") {
      sorted.sort((a, b) => (a.item_details?.price?.value || 0) - (b.item_details?.price?.value || 0));
    } else if (sortBy === "price_high_low") {
      sorted.sort((a, b) => (b.item_details?.price?.value || 0) - (a.item_details?.price?.value || 0));
    }
    return sorted;
  };

  const sortedProducts = getSortedProducts();

  const getFilterValues = async (attributeCode) => {
    try {
      const data = await cancellablePromise(
        getAllFilterValuesRequest(attributeCode, subCategoryName)
      );
      let filterValues = data.data;
      filterValues = filterValues.map((value) => {
        const createObj = {
          id: value,
          name: value,
        };
        return createObj;
      });
      return filterValues;
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  const getAllFilters = async () => {
    setIsLoading(true);
    try {
      const data = await cancellablePromise(
        getAllFiltersRequest(subCategoryName)
      );
      let filtersData = data.data;
      filtersData = filtersData.filter((item) => item.code !== "size_chart");
      filtersData = Object.values(
        filtersData.reduce((acc, obj) => ({ ...acc, [obj.code]: obj }), {})
      );

      for (let filter of filtersData) {
        const values = await getFilterValues(filter.code);
        const findIndex = filtersData.findIndex(
          (item) => item.code === filter.code
        );
        if (findIndex > -1) {
          filtersData[findIndex].options = values;
          filtersData[findIndex].selectedValues = [];
        }
      }
      let paginationData = Object.assign(
        JSON.parse(JSON.stringify(paginationModel))
      );
      paginationData.searchData = filtersData;
      if (JSON.stringify(paginationModel) !== JSON.stringify(paginationData)) {
        setPaginationModel(paginationData);
      }
    } catch (err) {
      dispatch({
        type: toast_actions.ADD_TOAST,
        payload: {
          id: Math.floor(Math.random() * 100),
          type: toast_types.error,
          message: err?.response?.data?.error?.message,
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (subCategoryName) {
      // getAllProducts();
      getAllFilters();
    }
  }, [subCategoryName]);

  useEffect(() => {
    if (locationData) {
      const searchName = query.get("s");
      getAllProducts(searchName);
    }
  }, [paginationModel]);

  useEffect(() => {
    // Reset page to 1 if location/category changes
    if (locationData) {
      setPaginationModel((prev) => ({ ...prev, page: 1 }));
    }
  }, [locationData, deliveryAddressLocation]);

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && products.length < totalProductCount) {
          setPaginationModel((prev) => ({ ...prev, page: prev.page + 1 }));
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [isLoading, products.length, totalProductCount]);

  const handleChangeFilter = (filterIndex, value) => {
    const data = Object.assign({}, JSON.parse(JSON.stringify(paginationModel)));
    data.searchData[filterIndex].selectedValues = value;
    data.page = 1;
    data.pageSize = 10;
    if (JSON.stringify(paginationModel) !== JSON.stringify(data)) {
      setPaginationModel(data);
    }
  };

  //   const getProductDetails = async (productId) => {
  //     try {
  //       setProductLoading(true);
  //       const data = await cancellablePromise(getCall(`/clientApis/v2/items/${productId}`));
  //       setProductPayload(data.response);
  //       return data.response;
  //     } catch (error) {
  //       console.error("Error fetching product details:", error);
  //     } finally {
  //       setProductLoading(false);
  //     }
  //   };

  const getProductDetails = async (productId) => {
    try {
      setProductLoading(true);
      // Mock return
      return new Promise((resolve) => setTimeout(() => resolve({}), 500));
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setProductLoading(false);
    }
  };

  const calculateSubtotal = () => {
    let subtotal = 0;

    for (const level in customization_state) {
      const selectedOptions = customization_state[level].selected;
      if (selectedOptions.length > 0) {
        subtotal += selectedOptions.reduce(
          (acc, option) => acc + option.price,
          0
        );
      }
    }
    return subtotal;
  };

  const getCustomizations = async (productPayload, customization_state) => {
    const { customisation_items } = productPayload;
    const customizations = [];
    const levels = Object.keys(customization_state);

    for (const level of levels) {
      const selectedItems = customization_state[level].selected;

      for (const selectedItem of selectedItems) {
        let customization = customisation_items.find(
          (item) => item.local_id === selectedItem.id
        );

        if (customization) {
          customization = {
            ...customization,
            quantity: {
              count: 1,
            },
          };
          customizations.push(customization);
        }
      }
    }

    return customizations;
  };

  const addToCart = async (
    productPayload,
    isDefault = false,
    navigate = false
  ) => {
    setProductLoading(true);
    const user = JSON.parse(getValueFromCookie("user"));
    const url = `/clientApis/v2/cart/${user.id}`;

    const subtotal =
      productPayload?.item_details?.price?.value + calculateSubtotal();

    const groups = await formatCustomizationGroups(
      productPayload.customisation_groups
    );
    const cus = await formatCustomizations(productPayload.customisation_items);
    const newState = await initializeCustomizationState(
      groups,
      cus,
      customization_state
    );

    getCustomizations(
      productPayload,
      isDefault ? newState : customization_state
    ).then((customisations) => {
      const payload = {
        id: productPayload.id,
        local_id: productPayload.local_id,
        bpp_id: productPayload.bpp_details.bpp_id,
        bpp_uri: productPayload.context.bpp_uri,
        domain: productPayload.context.domain,
        quantity: {
          count: 1,
        },
        provider: {
          id: productPayload.bpp_details.bpp_id,
          locations: productPayload.locations,
          ...productPayload.provider_details,
        },
        product: {
          id: productPayload.id,
          subtotal,
          ...productPayload.item_details,
        },
        hasCustomisations:
          productPayload.hasOwnProperty("customisation_groups") &&
          productPayload.customisation_groups.length > 0,
      };

      if (customisations.length > 0) {
        payload.customisations = customisations;
      }

      // Mock successful API call
      new Promise((resolve) => setTimeout(resolve, 500))
        .then(() => {
          fetchCartItems();
          setCustomizationState({});
          setProductLoading(false);
          if (navigate) navigate("/application/cart");
        })
        .catch((error) => {
          console.log(error);
          setProductLoading(false);
        });
    });
  };

  const updateQueryParams = () => {
    const params = new URLSearchParams({});
    if (searchProductName) {
      params.set("s", searchProductName);
    }
    if (categoryName) {
      params.set("c", categoryName);
    } else {
    }
    navigate({
      pathname: `/application/products`,
      search: params.toString(),
    }, { replace: true });
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        className={classes.productContainer}
        sx={{ padding: isOnHomePage ? "0px !important" : undefined }}
      >
        {/* Desktop Sidebar */}
        {!isOnHomePage && !isMobile && (
          <Grid item md={3} lg={2.5} className={classes.filterSidebar}>
            <Typography className={classes.filterSectionTitle}>Filters</Typography>
            {paginationModel.searchData &&
              paginationModel.searchData.length > 0 ? (
              paginationModel.searchData.map((filter, filterIndex) => {
                return (
                  <Box key={`filter-${filter.code}-${filterIndex}`} sx={{ mb: 2 }}>
                    <MultiSelctFilter
                      arrayList={filter?.options || []}
                      filterName={filter.code}
                      title={filter.code}
                      filterOn="id"
                      saveButtonText="Apply"
                      value={filter?.selectedValues || []}
                      onChangeFilter={(value) =>
                        handleChangeFilter(filterIndex, value)
                      }
                      clearButtonText="Clear"
                      disabled={false}
                    />
                  </Box>
                );
              })
            ) : (
              <Typography variant="body2" color="textSecondary">No filters available</Typography>
            )}
          </Grid>
        )}

        <Grid item xs={12} md={isOnHomePage ? 12 : 9} lg={isOnHomePage ? 12 : 9.5}>
          <Box className={classes.sortContainer}>
            <Typography className={classes.sortLabel}>Sort by:</Typography>
            <select
              className={classes.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
            </select>
          </Box>

          <Grid container spacing={2}>
            {isLoading && paginationModel.page === 1 ? (
              <Grid item xs={12}>
                <Loading />
              </Grid>
            ) : (
              <>
                {sortedProducts.length > 0 ? (
                  <>
                    {sortedProducts.map((productItem, ind) => {
                      return (
                        <Grid
                          key={`product-item-${ind}`}
                          item
                          xs={6}
                          sm={4}
                          md={2}
                          lg={2}
                          xl={2}
                        >
                          <ProductGridView
                            product={productItem?.item_details}
                            productId={productItem.id}
                            price={productItem?.item_details?.price}
                            bpp_provider_descriptor={
                              productItem?.provider_details?.descriptor
                            }
                            bpp_id={productItem?.bpp_details?.bpp_id}
                            location_id={
                              productItem?.location_details
                                ? productItem.location_details?.id
                                : ""
                            }
                            bpp_provider_id={productItem?.provider_details?.id}
                            getProductDetails={getProductDetails}
                            handleAddToCart={addToCart}
                            productLoading={productLoading}
                          />
                        </Grid>
                      );
                    })}
                  </>
                ) : (
                  <Grid item xs={12}>
                    <Typography variant="body1">No Products available</Typography>
                  </Grid>
                )}
                {products.length > 0 && products.length < totalProductCount && (
                  <Grid item xs={12} ref={observerTarget} sx={{ height: "20px" }}></Grid>
                )}
                {isLoading && paginationModel.page > 1 && (
                  <Grid item xs={12}>
                    <Loading />
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </Grid>

      </Grid>

      {/* Mobile Sticky Footer */}
      {!isOnHomePage && (
        <Box className={classes.mobileActionSheet}>
          <button className={classes.mobileActionButton} onClick={() => setIsSortOpen(true)}>
            <SwapVertIcon /> Sort
          </button>
          <button className={classes.mobileActionButton} onClick={() => setIsFilterOpen(true)}>
            <FilterListIcon /> Filter
          </button>
        </Box>
      )}

      {/* Mobile Sort Drawer */}
      <Drawer
        anchor="bottom"
        open={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        PaperProps={{
          sx: { borderTopLeftRadius: "20px", borderTopRightRadius: "20px", padding: "20px" }
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="700">Sort By</Typography>
          <IconButton onClick={() => setIsSortOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <List>
          {[
            { label: "Relevance", value: "relevance" },
            { label: "Price: Low to High", value: "price_low_high" },
            { label: "Price: High to Low", value: "price_high_low" }
          ].map((item) => (
            <ListItem
              button
              key={item.value}
              onClick={() => {
                setSortBy(item.value);
                setIsSortOpen(false);
              }}
              sx={{
                background: sortBy === item.value ? "#f0f7ff" : "transparent",
                borderRadius: "8px",
                mb: 1
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: sortBy === item.value ? "700" : "500",
                  color: sortBy === item.value ? "#007AFF" : "inherit"
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Mobile Filter Drawer (Placeholder) */}
      <Drawer
        anchor="bottom"
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        PaperProps={{
          sx: { borderTopLeftRadius: "20px", borderTopRightRadius: "20px", padding: "20px", height: "80vh" }
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="700">Filters</Typography>
          <IconButton onClick={() => setIsFilterOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <Divider />
        <Box sx={{ py: 4, textAlign: "center" }}>
          <Typography color="textSecondary">Filter options placeholder</Typography>
        </Box>
        {/* You can map the actual filters here too similar to desktop sidebar */}
      </Drawer>
    </>
  );
};

export default ProductList;
