import React, { useState, useEffect, useContext } from "react";
import useStyles from "./style";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CartIcon from "../../../assets/icons/fontawesome/solid/cart-shopping.svg?react";
import no_image_found from "../../../assets/images/no_image_found.png";
import { useNavigate } from "react-router-dom";
import { postCall } from "../../../api/client";
import { getValueFromCookie } from "../../../utils/cookies";
import { Button } from "@mui/material";
import { CartContext } from "../../../context/cartContext";

const ProductGridView = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    product,
    productId,
    price,
    bpp_id,
    location_id,
    bpp_provider_id,
    bpp_provider_descriptor,
    show_quantity_button = true,
    onUpdateCart = () => { },
    handleAddToCart = () => { },
    getProductDetails,
    productLoading,
  } = props;

  const { cartItems, addItem, updateItem } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === productId);

  const { id, descriptor, provider_details } = product || {};
  const { name: product_name, images, symbol } = descriptor || {};

  const onAddtoCartPressed = (e) => {
    e.stopPropagation();
    // For dummy implementation, we add directly using context
    const itemToAdd = {
      id: productId,
      item_details: product,
      price: price,
      provider_details: { descriptor: bpp_provider_descriptor, id: bpp_provider_id },
      bpp_details: { bpp_id },
      location_details: { id: location_id }
    };
    addItem(itemToAdd);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    updateItem(productId, cartItem.quantity.count + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    updateItem(productId, cartItem.quantity.count - 1);
  };

  return (
    <div
      className={classes.productItemContainer}
      onClick={() => navigate(`/application/products?productId=${productId}`)}
    >
      <Card className={classes.productCard}>
        <Box className={classes.imageContainer}>
          <img
            className={classes.productImage}
            src={symbol ? symbol : no_image_found}
            alt={product_name}
          />
        </Box>

        <Typography component="div" className={classes.productNameTypo}>
          {product_name}
        </Typography>

        <Box className={classes.priceContainer}>
          <Typography className={classes.priceTypo}>
            ₹{Number(price?.value).toLocaleString("en-IN")}
          </Typography>
          {price?.maximum_value && (
            <Typography className={classes.originalPriceTypo}>
              ₹{Number(price?.maximum_value).toLocaleString("en-IN")}
            </Typography>
          )}
        </Box>

        {cartItem ? (
          <Box className={classes.quantitySelector}>
            <Button className={classes.quantityButton} onClick={handleDecrement}>
              -
            </Button>
            <Typography className={classes.quantityCount}>
              {cartItem.quantity.count}
            </Typography>
            <Button className={classes.quantityButton} onClick={handleIncrement}>
              +
            </Button>
          </Box>
        ) : (
          <Button
            fullWidth
            className={classes.addToCartBtn}
            variant="contained"
            onClick={onAddtoCartPressed}
            disabled={productLoading}
          >
            Add to cart
          </Button>
        )}
      </Card>
    </div>
  );
};

export default ProductGridView;
