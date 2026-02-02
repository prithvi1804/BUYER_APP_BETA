import { makeStyles } from "@mui/styles";
import palette from "../../utils/Theme/palette";

const useStyles = makeStyles({
  header: {
    background: palette.common.white,
    padding: "20px 40px 15px 40px !important",
    "@media (max-width: 1024px)": {
      padding: "20px 30px 15px 30px !important",
    },
    "@media (max-width: 768px)": {
      padding: "12px 16px 10px 16px !important",
    },
  },
  headerTypo: {
    fontWeight: "600 !important",
    lineHeight: "18px !important",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    "@media (max-width: 768px)": {
      fontSize: "14px !important",
    },
  },
  bodyContainer: {
    background: "#F9F9F9 !important",
    padding: "20px 40px !important",
    "@media (max-width: 1024px)": {
      padding: "20px 30px !important",
    },
    "@media (max-width: 768px)": {
      padding: "16px 12px !important",
    },
  },
  stepRoot: {
    marginTop: "24px !important",
    borderBottom: "1px solid #C8C8C8",
    "@media (max-width: 768px)": {
      marginTop: "16px !important",
    },
  },
  stepContent: {
    borderLeft: "none !important",
    padding: "32px !important",
    marginLeft: "16px !important",
    "@media (max-width: 768px)": {
      padding: "16px !important",
      marginLeft: "32px !important",
    },
  },
  stepContentHidden: {
    borderLeft: "none !important",
    padding: "16px !important",
    marginLeft: "16px !important",
    "@media (max-width: 768px)": {
      padding: "12px 16px !important",
      marginLeft: "32px !important",
    },
  },
  stepLabel: {
    padding: "0px !important",
    alignItems: "flex-start !important",
    "& .MuiStepLabel-labelContainer": {
      padding: "0px !important",
      marginLeft: "16px !important",
      flex: "1 !important",
      "@media (max-width: 768px)": {
        marginLeft: "8px !important",
      },
    },
    "& .MuiStepLabel-iconContainer": {
      padding: "0px !important",
      display: "flex !important",
      alignItems: "center !important",
      height: "32px !important",
      "@media (max-width: 768px)": {
        height: "24px !important",
      },
    },
    "& .MuiStepLabel-label": {
      display: "flex !important",
      width: "100%",
    },
  },
  labelTypo: {
    fontWeight: "600 !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    lineHeight: "32px !important",
    "@media (max-width: 768px)": {
      fontSize: "14px !important",
      lineHeight: "24px !important",
    },
  },

  summaryCard: {
    borderRadius: "16px !important",
    background: `${palette.common.white} !important`,
    boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 6px 13px 0px rgba(0, 0, 0, 0.05), 0px 24px 24px 0px rgba(0, 0, 0, 0.04), 0px 54px 33px 0px rgba(0, 0, 0, 0.03), 0px 97px 39px 0px rgba(0, 0, 0, 0.01), 0px 151px 42px 0px rgba(0, 0, 0, 0.00) !important`,
    padding: "16px 20px !important",
    "@media (max-width: 768px)": {
      padding: "12px 14px !important",
      borderRadius: "12px !important",
    },
  },
  summaryItemContainer: {
    display: "flex",
    marginBottom: "10px",
    flexWrap: "wrap",
  },
  summaryDeliveryItemContainer: {
    display: "flex",
    marginBottom: "10px",
    flexWrap: "wrap",
  },
  summaryQuoteItemContainer: {
    display: "flex",
    marginBottom: "3px",
    flexWrap: "wrap",
  },
  summaryItemLabel: {
    flex: 1,
    fontSize: "13px !important",
    fontWeight: "600 !important",
    marginTop: "20px !important",
    minWidth: "150px",
    "@media (max-width: 768px)": {
      fontSize: "12px !important",
      marginTop: "12px !important",
    },
  },
  summaryDeliveryLabel: {
    flex: 1,
    fontSize: "13px !important",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      fontSize: "12px !important",
    },
  },
  summaryOfferLabel: {
    flex: 1,
    fontSize: "13px !important",
    fontWeight: "600 !important",
    color: "blue !important",
    "@media (max-width: 768px)": {
      fontSize: "12px !important",
    },
  },
  summaryCustomizationLabel: {
    flex: 1,
    color: "#A2A6B0 !important",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "20px !important",
    "@media (max-width: 768px)": {
      marginLeft: "10px !important",
      fontSize: "11px !important",
    },
  },
  summaryItemPriceLabel: {
    flex: 1,
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "10px !important",
    "@media (max-width: 768px)": {
      fontSize: "11px !important",
      marginLeft: "5px !important",
    },
  },
  summaryItemDiscountLabel: {
    flex: 1,
    color: "green",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "10px !important",
    "@media (max-width: 768px)": {
      fontSize: "11px !important",
      marginLeft: "5px !important",
    },
  },
  summaryCustomizationDiscountLabel: {
    flex: 1,
    color: "#b1e3b1",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "10px !important",
  },
  summaryItemTaxLabel: {
    flex: 1,
    color: "red",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "10px !important",
  },
  summaryItemOfferLabel: {
    flex: 1,
    color: "blue",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "10px !important",
  },
  summaryCustomizationTaxLabel: {
    flex: 1,
    color: "#eb9494",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "30px !important",
    "@media (max-width: 768px)": {
      marginLeft: "15px !important",
    },
  },
  summaryCustomizationPriceLabel: {
    flex: 1,
    color: "#A2A6B0 !important",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    marginLeft: "30px !important",
    "@media (max-width: 768px)": {
      marginLeft: "15px !important",
    },
  },
  summaryItemPriceValue: {
    width: "100px !important",
    textAlign: "right",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      width: "70px !important",
      fontSize: "11px !important",
    },
  },
  summaryItemQuantityLabel: {
    flex: 1,
    fontSize: "12px !important",
    fontWeight: "600 !important",
  },
  summaryItemQuantityValue: {
    width: "120px !important",
    textAlign: "right",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      width: "80px !important",
    },
  },
  marginBottom10: {
    marginBottom: "10px !important",
  },
  marginTop10: {
    marginTop: "10px !important",
  },
  marginTop20: {
    marginTop: "20px !important",
  },
  summaryCustomizationPriceValue: {
    color: "#A2A6B0 !important",
    width: "100px !important",
    textAlign: "right",
    fontSize: "12px !important",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      width: "70px !important",
    },
  },
  summaryItemValue: {
    width: "100px !important",
    textAlign: "right",
    fontSize: "13px !important",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      width: "auto !important",
      minWidth: "60px !important",
      fontSize: "12px !important",
    },
  },
  customizationValue: {
    width: "100px !important",
    textAlign: "right",
    color: "#A2A6B0 !important",
    "@media (max-width: 768px)": {
      width: "70px !important",
    },
  },
  summaryItemLabelDescription: {
    color: "#A2A6B0 !important",
    marginTop: "2px !important",
    flex: 1,
  },
  subTotalLabel: {
    flex: 1,
    fontWeight: "600 !important",
  },
  summarySubtotalContainer: {
    display: "flex",
    marginBottom: "0px !important",
    marginTop: "20px !important",
    "@media (max-width: 768px)": {
      marginTop: "12px !important",
    },
  },
  subTotalValue: {
    width: "100px !important",
    textAlign: "right",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      width: "70px !important",
    },
  },
  totalLabel: {
    flex: 1,
    fontSize: "16px !important",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      fontSize: "14px !important",
    },
  },
  totalValue: {
    width: "100px !important",
    textAlign: "right",
    fontWeight: "600 !important",
    "@media (max-width: 768px)": {
      width: "80px !important",
    },
  },
  outOfStockDivider: {
    height: "1px",
    backgroundColor: "#CACDD8 !important",
    marginTop: "20px",
    marginBottom: "20px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#CACDD8 !important",
    marginTop: "20px",
  },
  orderTotalDivider: {
    height: "1px",
    backgroundColor: "#CACDD8 !important",
    marginTop: "20px",
    marginBottom: "15px",
  },
  proceedToBuy: {
    marginTop: "8px !important",
  },
});

export default useStyles;

