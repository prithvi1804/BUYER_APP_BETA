import React, { useContext, useEffect, useState } from "react";
import useStyles from "./style";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { PRODUCT_SUBCATEGORY } from "../../../constants/categories";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { SearchContext } from "../../../context/searchContext";

const SingleCategory = ({ data, index }) => {
  // let { categoryName, subCategoryName } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const locationData = useLocation();
  const useQuery = () => {
    const { search } = locationData;
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();
  const categoryName = query.get("c");
  const subCategoryName = query.get("sc");
  const updateSearchParams = () => {
    const params = new URLSearchParams({ ["c"]: data.category, ["sc"]: data.value });
    navigate({ pathname: locationData.pathname, search: params.toString() }, { replace: true });
  };

  return (
    <div className={classes.categoryItem} onClick={() => updateSearchParams()}>
      <div
        className={`${classes.categoryItemImageContainer} ${subCategoryName === data.value ? classes.selectedCategory : ""
          }`}
      >
        <img className={classes.categoryImage} src={data.imageUrl} alt={`sub-category-img-${index}`} />
      </div>
      <Typography variant="body1" className={classes.categoryNameTypo}>
        {data.value}
      </Typography>
    </div>
  );
};

const CategoriesComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [subCatList, setSubCatList] = useState([]);

  const locationData = useLocation();
  const { locationData: deliveryAddressLocation } = useContext(SearchContext);
  const useQuery = () => {
    const { search } = locationData;
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();
  const categoryName = query.get("c");
  const subCategoryName = query.get("sc");
  const searchProductName = query.get("s");



  useEffect(() => {
    const allOptions = Object.entries(PRODUCT_SUBCATEGORY).flatMap(
      ([category, subCategories]) =>
        subCategories.map((sub) => ({ ...sub, category }))
    );
    setSubCatList(allOptions);
  }, [locationData, deliveryAddressLocation]);




  return (
    <Grid container className={classes.categoriesRootContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className={classes.subCatContainer}>
          {
            subCatList.map((subCat, subCatIndex) => (
              <SingleCategory data={subCat} index={subCatIndex} key={subCatIndex} />
            ))
          }
        </div>
      </Grid>
    </Grid>
  );
};

export default CategoriesComponent;
