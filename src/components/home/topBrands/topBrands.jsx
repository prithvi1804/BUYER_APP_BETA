import React, { useContext, useEffect, useState } from "react";
import useStyles from "./style";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router-dom";
import { getAllBrandsRequest } from "../../../api/brand.api";
import { getAllOffersRequest } from "../../../api/offer.api";
import useCancellablePromise from "../../../api/cancelRequest";
import no_image_found from "../../../assets/images/no_image_found.png";
import { ToastContext } from "../../../context/toastContext";
import { toast_actions, toast_types } from "../../shared/toast/utils/toast";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import IconButton from "@mui/material/IconButton";
import PreviousIcon from "../../../assets/images/previous.svg?react";
import NextIcon from "../../../assets/images/next.svg?react";

import Loading from "../../shared/loading/loading";
import Offers from "../../common/Offers/Offers";

import { AddCookie, getValueFromCookie } from "../../../utils/cookies";

const BrandCard = ({ data, index, onMouseOver }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id, descriptor } = data;
  const { name: brand_name, symbol } = descriptor;

  return (
    <>
      <Tooltip title={brand_name}>
        <Card
          className={classes.brandCard}
          onMouseOver={onMouseOver}
          onClick={() => navigate(`/application/brand?brandId=${id}`)}
        >
          <img
            className={classes.brandImage}
            src={symbol ? symbol : no_image_found}
            alt={`brand-${index}`}
          />
        </Card>
      </Tooltip>
    </>
  );
};

const TopBrands = () => {
  const classes = useStyles();
  const [activeBrandIndex, setActiveBrandIndex] = useState(1);
  const [brands, setBrands] = useState([]);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const dispatch = useContext(ToastContext);

  function handleResize() {
    const width = window.innerWidth;
    setScreenWidth(width);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  // HOOKS
  const { cancellablePromise } = useCancellablePromise();

  const getAllBrands = async (searchName) => {
    setIsLoading(true);
    try {
      const data = await cancellablePromise(getAllBrandsRequest());
      setBrands(data.data);
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

  const getAllOffers = async () => {
    setIsLoading(true);
    try {
      let latLongInfo = getValueFromCookie("LatLongInfo");
      try {
        latLongInfo = latLongInfo ? JSON.parse(latLongInfo) : { lat: 12.9, lng: 77.7 };
      } catch (e) {
        latLongInfo = { lat: 12.9, lng: 77.7 };
      }
      console.log("LAT", latLongInfo);
      const lat = latLongInfo.lat;
      const lng = latLongInfo.lng;
      const data = await cancellablePromise(getAllOffersRequest("", lat, lng));
      setOffers(data);
    } catch (err) {
      console.error("Error fetching offers", err);
      // dispatch({
      //   type: toast_actions.ADD_TOAST,
      //   payload: {
      //     id: Math.floor(Math.random() * 100),
      //     type: toast_types.error,
      //     message: err?.response?.data?.error?.message || "Failed to fetch offers",
      //   },
      // });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllBrands();
    getAllOffers();
  }, []);

  const getRowsPerPage = () => {
    if (screenWidth < 600) return 2;
    if (screenWidth < 900) return 3;
    if (screenWidth < 1200) return 4;
    if (screenWidth < 1536) return 6;
    return 8;
  };
  const rowsPerPage = getRowsPerPage();
  const totalPageCount = Math.ceil(brands.length / rowsPerPage);
  return (
    <>
      {offers && offers.length > 0 && <Offers offersList={offers} />}
      <Grid container spacing={3} className={classes.topBrandsContainer}>
        {/* Heading removed to be managed by parent */}
        {isLoading ? (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.brandsContainer}
          >
            <Loading />
          </Grid>
        ) : (
          <>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.brandsContainer}
            >
              <IconButton
                color="inherit"
                className={classes.actionButton}
                onClick={() => {
                  setPage(page - 1);
                }}
                disabled={page === 0}
              >
                <PreviousIcon />
              </IconButton>

              {brands
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((brand, brandIndex) => (
                  <BrandCard
                    key={`btand-index-${brandIndex}`}
                    data={brand}
                    index={brandIndex}
                    onMouseOver={() => {
                      setActiveBrandIndex(brandIndex);
                    }}
                  />
                ))}

              <IconButton
                color="inherit"
                className={classes.actionButton}
                onClick={() => {
                  setPage(page + 1);
                }}
                disabled={page === totalPageCount - 1}
              >
                <NextIcon />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};
export default TopBrands;
