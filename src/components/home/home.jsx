import React, { useState } from "react";
import useStyles from "./style";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";

import { PRODUCT_SUBCATEGORY } from "../../constants/categories";
import { PRODUCTS } from "../../constants/mock-data";
import no_image_found from "../../assets/images/no_image_found.png";
import TopBrands from "./topBrands/topBrands";
import ProductList from "../product/productList/productList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import iconMap from "../../utils/iconMapping";
import typographyStyles from "../../utils/Theme/typographyStyles";

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const locationData = useLocation();

  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  const getItemsPerRow = () => {
    if (isXl) return 8;
    if (isLg) return 6;
    if (isMd) return 6;
    if (isSm) return 4;
    return 3;
  };

  const itemsPerRow = getItemsPerRow();
  const collapsedItemsCount = itemsPerRow * 2;

  const availableCategories = new Set(PRODUCTS.map(p => p.item_details.category_id));

  const allSubCategories = Object.entries(PRODUCT_SUBCATEGORY).flatMap(
    ([category, subCategories]) =>
      subCategories.map((sub) => ({ ...sub, category }))
  ).filter(sub => availableCategories.has(sub.value));

  const visibleSubCategories = isExpanded
    ? allSubCategories
    : allSubCategories.slice(0, collapsedItemsCount);

  const updateSubCategoryParams = (catName, subCatName) => {
    const params = new URLSearchParams({});
    params.set("c", catName);
    params.set("sc", subCatName);
    navigate({
      pathname: "/application/products",
      search: params.toString(),
    });
  };

  return (
    <Box className={classes.homeContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: typographyStyles.h4.fontWeight }}>
          Categories
        </Typography>
        {allSubCategories.length > collapsedItemsCount && (
          <Button
            id="view-all-categories-btn"
            variant="text"
            color="primary"
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{ fontWeight: typographyStyles.h6.fontWeight, textTransform: "none", fontSize: typographyStyles.subtitle1.fontSize }}
          >
            {isExpanded ? "View Less" : "View All"}
          </Button>
        )}
      </Box>
      <Grid container spacing={3}>
        {visibleSubCategories.map((subCat, index) => {
           const Icon = subCat.icon ? iconMap[subCat.icon] : null;

           return (
            <Grid
              item
              xs={4}
              sm={3}
              md={2}
              lg={2}
              xl={1.5}
              key={`subcat-${index}`}
            >
              <Card
                className={classes.subCatCard}
                onClick={() =>
                  updateSubCategoryParams(subCat.category, subCat.value)
                }
              >
                {Icon ? (
                  <Icon className={classes.subCategoryIcon} />
                ) : (
                  <img
                    src={subCat.imageUrl || no_image_found}
                    alt={subCat.value}
                    className={classes.subCatImage}
                  />
                )}
                <Typography className={classes.subCatNameTypo}>
                  {subCat.value}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {isExpanded && (
        <Box className={classes.viewAllLessButtonContainer}>
          <Button
            id="view-less-categories-btn-bottom"
            variant="text"
            color="primary"
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            sx={{ fontWeight: typographyStyles.h6.fontWeight, textTransform: "none", fontSize: typographyStyles.subtitle1.fontSize }}
          >
            View Less
          </Button>
        </Box>
      )}

      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: typographyStyles.h4.fontWeight, mb: 3, ml: 1 }}>
          Top Brands
        </Typography>
        <TopBrands />
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: typographyStyles.h4.fontWeight, mb: 2, ml: 1 }}>
          Products
        </Typography>
        <ProductList isOnHomePage={true} />
      </Box>
    </Box>
  );
};

export default Home;
