import React, { useState } from "react";
import useStyles from "./style";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";

import { PRODUCT_SUBCATEGORY } from "../../constants/categories";
import no_image_found from "../../assets/images/no_image_found.png";
import TopBrands from "./topBrands/topBrands";

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const locationData = useLocation();

  const allSubCategories = Object.entries(PRODUCT_SUBCATEGORY).flatMap(
    ([category, subCategories]) =>
      subCategories.map((sub) => ({ ...sub, category }))
  );

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
      <Grid container spacing={3}>
        {allSubCategories.map((subCat, index) => (
          <Grid item xs={4} sm={3} md={2} lg={2} xl={1.5} key={`subcat-${index}`}>
            <Card
              className={classes.subCatCard}
              onClick={() => updateSubCategoryParams(subCat.category, subCat.value)}
            >
              <img
                src={subCat.imageUrl || no_image_found}
                alt={subCat.value}
                className={classes.subCatImage}
              />
              <Typography className={classes.subCatNameTypo}>
                {subCat.value}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <TopBrands />
    </Box>
  );
};

export default Home;
