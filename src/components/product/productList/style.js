import { makeStyles } from "@mui/styles";
import colors from "../../../utils/Theme/colors";

const useStyles = makeStyles({
  productContainer: {
    padding: "20px 40px 40px 40px !important",
    "@media (max-width: 768px)": {
      padding: "20px 20px 20px 20px !important",
    },
  },
  productItemContainer: {
    cursor: "pointer",
  },
  productCard: {
    boxShadow: "none !important",
    background: "#F5F5F5 !important",
    display: "flex",
    flexDirection: "column",
    height: "100% !important",
    borderRadius: "16px !important",
    padding: "10px",
    position: "relative !important",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      background: "#EBEBEB !important",
    },
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "100%", // 1:1 Aspect Ratio
    marginBottom: "8px",
  },
  productImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "20px",
  },
  productNameTypo: {
    fontWeight: "600 !important",
    fontSize: "0.875rem !important",
    color: "#333",
    marginBottom: "4px !important",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    height: "2.8em",
    lineHeight: "1.4em",
  },
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
    gap: "8px",
    marginBottom: "12px !important",
  },
  priceTypo: {
    fontWeight: "700 !important",
    fontSize: "1rem !important",
    color: "#000",
  },
  originalPriceTypo: {
    fontSize: "0.8rem !important",
    color: "#888",
    textDecoration: "line-through",
  },
  addToCartBtn: {
    width: "100%",
    backgroundColor: colors.primary.lightHover + " !important",
    color: colors.primary.main + " !important",
    fontWeight: "700 !important",
    borderRadius: "12px !important",
    textTransform: "none !important",
    padding: "8px !important",
    fontSize: "0.875rem !important",
    "&:hover": {
      backgroundColor: colors.primary.lightActive + " !important",
    },
  },
  quantitySelector: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.primary.lightHover + " !important",
    borderRadius: "12px !important",
    padding: "4px !important",
  },
  quantityButton: {
    minWidth: "32px !important",
    height: "32px !important",
    color: colors.primary.main + " !important",
    fontSize: "1.2rem !important",
    fontWeight: "700 !important",
  },
  quantityCount: {
    fontWeight: "700 !important",
    fontSize: "1rem !important",
    color: colors.primary.main + " !important",
  },



  paginationContainer: {
    marginTop: "24px !important",
    marginBottom: "24px !important",
  },
  pagination: {
    "& ul": {
      justifyContent: "center !important",
    },
  },
  filterSidebar: {
    borderRight: "1px solid #EDEDED",
    paddingRight: "20px !important",
    "@media (max-width: 768px)": {
      display: "none !important",
    },
  },
  filterSectionTitle: {
    fontWeight: "700 !important",
    fontSize: "1.1rem !important",
    marginBottom: "16px !important",
    color: "#333",
  },
  mobileActionSheet: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60px",
    background: "#fff",
    display: "none",
    boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  mobileActionButton: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontWeight: "600 !important",
    fontSize: "0.9rem !important",
    color: "#333",
    border: "none",
    background: "none",
    padding: "0",
    "&:first-child": {
      borderRight: "1px solid #EDEDED",
    },
  },
  sortContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  sortLabel: {
    fontSize: "0.9rem !important",
    color: "#666",
    marginRight: "8px !important",
  },
  sortSelect: {
    fontSize: "0.9rem !important",
    fontWeight: "600 !important",
    cursor: "pointer",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "4px 12px",
    background: "#fff",
  },
});

export default useStyles;
