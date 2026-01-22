import { makeStyles } from "@mui/styles";
import colors from "../../../utils/Theme/colors";

const moreImageContainer = (size, borderColor) => ({
  height: size,
  width: size,
  border: "1px solid",
  borderColor: borderColor,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const useStyles = makeStyles({
  headingContainer: {
    backgroundColor: "#ffffff",
    height: 80,
    width: "100%",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    "@media (max-width: 768px)": {
      padding: "0 20px",
      height: "auto",
    },
  },
  heading: {
    textTransform: "none !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    fontFamily: "var(--font-body-fontFamily) !important",
  },
  cartContainer: {
    padding: "40px",
    "@media (max-width: 768px)": {
      padding: "20px",
      paddingBottom: "120px", // space for sticky footer
    },
  },
  tableHead: {
    fontWeight: "700 !important",
    color: "#686868",
    fontSize: "14px !important",
  },
  moreImages: {
    ...moreImageContainer(110, "lightgrey"),
    marginRight: "14px",
    borderRadius: 10,
    padding: 4,
    backgroundColor: "#ffffff",
    "@media (max-width: 768px)": {
      ...moreImageContainer(80, "lightgrey"),
    },
  },
  greyContainer: {
    ...moreImageContainer("100%", "#e7e7e7"),
    backgroundColor: "#e7e7e7",
    borderRadius: 8,
    position: "relative",
  },
  moreImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  logoContainer: {
    height: 25,
    width: 25,
    marginRight: 4,
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  qtyContainer: {
    border: "1px solid #E8E8E8",
    borderRadius: 6,
    height: 35,
    maxWidth: 64,
    minWidth: 64,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyArrowUp: {
    position: "absolute",
    top: 0,
    right: 2,
    color: "#A2A6B0",
    fontSize: "18px !important",
    cursor: "pointer",
  },
  qtyArrowDown: {
    position: "absolute",
    bottom: 0,
    right: 2,
    color: "#A2A6B0",
    fontSize: "18px !important",
    cursor: "pointer",
  },
  summaryCard: {
    padding: "32px",
    borderRadius: "20px !important",
    boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.05) !important",
    border: "1px solid #f0f0f0 !important",
    flexDirection: "column",
    backgroundColor: "#ffffff !important",
    "@media (max-width: 768px)": {
      display: "none !important",
    },
  },
  mobileSummary: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#ffffff",
      padding: "20px",
      boxShadow: "0px -10px 20px rgba(0,0,0,0.05)",
      zIndex: 1000,
      borderTop: "1px solid #eee",
    },
  },
  checkoutBtn: {
    width: "100%",
    height: "50px",
    fontSize: "16px !important",
    fontWeight: "600 !important",
    borderRadius: "12px !important",
    textTransform: "none !important",
    marginTop: "20px !important",
    "@media (max-width: 768px)": {
      marginTop: "10px !important",
    },
  },
  hideOnMobile: {
    "@media (max-width: 768px)": {
      display: "none !important",
    },
  },
  showOnMobile: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block !important",
    },
  },
  summaryTypo: {
    fontFamily: "var(--font-body-fontFamily) !important",
    fontWeight: "700 !important",
    fontSize: "1.25rem !important",
    marginBottom: "10px",
  },
  summaryLabel: {
    fontSize: "13px !important",
    fontWeight: "600 !important",
  },
  emptyCartScreen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#F9F9F9",
    height: "60vh",
    textAlign: "center",
    padding: "0 20px",
  },
  emptyCartMsg: {
    fontFamily: "var(--font-body-fontFamily) !important",
    fontWeight: "700 !important",
    textTransform: "none",
    fontSize: "2.5rem !important",
    "@media (max-width: 768px)": {
      fontSize: "24px !important",
    },
  },
  emptyCartSubMsg: {
    marginTop: "16px !important",
    marginBottom: "16px !important",
    "@media (max-width: 768px)": {
      fontSize: "14px !important",
    },
  },
  emptyCartIcon: {
    fontSize: "90px !important",
    marginBottom: "16px !important",
    "@media (max-width: 768px)": {
      fontSize: "60px !important",
    },
  },
  infoBox: {
    borderRadius: "8px",
    background: "rgba(249, 197, 28, 0.17)",
    padding: "8px 16px",
    width: "max-content",
    marginTop: "20px",
  },
  infoText: {
    fontFamily: "var(--font-body-fontFamily) !important",
    fontSize: 14,
    fontWeight: "500 !important",
    color: "#C89A04",
  },
  loadingContainer: {
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  updateBtn: {
    position: "absolute !important",
    right: 12,
    bottom: 7,
  },
  square: {
    backgroundColor: "#ffffff",
    border: "1px solid #008001",
    width: 14,
    height: 15,
    marginRight: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#008001",
    borderRadius: "50%",
    height: "9px",
    width: "9px",
  },
  tagContainer: {
    position: "absolute",
    top: 4,
    left: 4,
  },
});

export default useStyles;
