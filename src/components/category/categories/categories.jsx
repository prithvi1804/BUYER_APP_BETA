import React from 'react';
import useStyles from './style';
import {useNavigate, useLocation} from "react-router-dom";
import {categoryList as Categories} from "../../../constants/categories";
import Typography from "@mui/material/Typography";

const SingleCategory = ({data, index}) => {
    // let { categoryName } = useParams();
    const navigate = useNavigate();
    const classes = useStyles();
    const locationData = useLocation();
    const useQuery = () => {
        const { search } = locationData;
        return React.useMemo(() => new URLSearchParams(search), [search]);
    };
    let query = useQuery();
    const categoryName = query.get("c");
    const updateSearchParams = () => {
        const params = new URLSearchParams({['c']: `${data.routeName}` });
        navigate({ pathname: locationData.pathname, search: params.toString() }, { replace: true });
    };
    return (
        <div className={classes.categoryItem} onClick={() => updateSearchParams()}>
            <div className={`${classes.categoryItemImageContainer} ${categoryName === data.routeName?classes.selectedCategory: ""}`}>
                <img className={classes.categoryImage} src={data.imageUrl} alt={`category-img-${index}`} />
            </div>
            <Typography variant="body1" className={classes.categoryNameTypo}>
                {data.name}
            </Typography>
        </div>
    )
};

const CategoriesComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.categoriesContainer}>
            {
                Categories.map((category, index) => (
                    <SingleCategory
                        key={`single-category-${index}`}
                        data={category}
                        index={index}
                    />
                ))
            }
        </div>
    )

};

export default CategoriesComponent;