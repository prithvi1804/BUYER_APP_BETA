import React, { useEffect, useState } from "react";

import SubCategoriesHeader from "../product/subCategories/subCategories";
import ProductList from "../product/productList/productList";

import Home from "../home/home";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { PRODUCT_SUBCATEGORY } from "../../constants/categories";

const Products = () => {
  const locationData = useLocation();
  const navigate = useNavigate();
  const useQuery = () => {
    const { search } = locationData;
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();
  const [isCatAvailable, setIsCatAvailable] = useState(false);
  const [isSubCatAvailable, setIsSubCatAvailable] = useState(false);
  const [isSearchAvailable, setIsSearchAvailable] = useState(false);

  useEffect(() => {
    if (locationData) {
      const cat = query.get("c");
      const subCat = query.get("sc");
      const product = query.get("s");

      if (cat && !subCat && !product) {
        const subCats = PRODUCT_SUBCATEGORY[cat];
        if (subCats && subCats.length > 0) {
          const defaultSubCat = subCats[0].value;
          const params = new URLSearchParams(locationData.search);
          params.set("sc", defaultSubCat);
          navigate({ pathname: locationData.pathname, search: params.toString() }, { replace: true });
          return;
        }
      }

      if (cat) {
        setIsCatAvailable(true);
      } else {
        setIsCatAvailable(false);
      }
      if (subCat) {
        setIsSubCatAvailable(true);
      } else {
        setIsSubCatAvailable(false);
      }
      if (product) {
        setIsSearchAvailable(true);
      } else {
        setIsSearchAvailable(false);
      }
    }
  }, [locationData]);

  if (isSearchAvailable && isSubCatAvailable && isCatAvailable) {
    return (
      <>
        <Box sx={{ padding: "20px 20px 20px 20px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink
              component={Link}
              underline="hover"
              color="inherit"
              to="/application/products"
            >
              Home
            </MuiLink>
            {(query.get("sc") || query.get("s")) && (
              <Typography color="text.primary">
                {query.get("sc") || query.get("s")}
              </Typography>
            )}
          </Breadcrumbs>
        </Box>
        <SubCategoriesHeader />
        <ProductList />
      </>
    );
  } else if (!isSearchAvailable && isSubCatAvailable && isCatAvailable) {
    return (
      <>
        <Box sx={{ padding: "20px 20px 20px 20px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink
              component={Link}
              underline="hover"
              color="inherit"
              to="/application/products"
            >
              Home
            </MuiLink>
            {(query.get("sc") || query.get("s")) && (
              <Typography color="text.primary">
                {query.get("sc") || query.get("s")}
              </Typography>
            )}
          </Breadcrumbs>
        </Box>
        <SubCategoriesHeader />
        <ProductList />
      </>
    );

  } else if (isSearchAvailable && !isSubCatAvailable && !isCatAvailable) {
    return (
      <>
        <ProductList />
      </>
    );
  } else if (isSearchAvailable && !isSubCatAvailable && isCatAvailable) {
    return (
      <>
        <ProductList />
      </>
    );
  } else {
    return <Home />;
  }
};

export default Products;
