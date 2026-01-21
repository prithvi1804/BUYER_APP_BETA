import { makeStyles } from "@mui/styles";
import palette from "../../../utils/Theme/palette";
import colors from "../../../utils/Theme/colors";
import typographyStyles from "../../../utils/Theme/typographyStyles";

const useStyles = makeStyles({
  orderDetailsContainer: {
    padding: "45px 52px",
  },
  divider: {
    height: "1px",
    backgroundColor: `${palette.divider} !important`,
    marginTop: "20px",
    marginBottom: "20px",
  },
  statusChip: {
    float: "right",
    marginRight: "5px !important",
  },

  marginBottom12: {
    marginBottom: "12px !important",
  },

  marginBottom0: {
    marginBottom: "0px !important",
  },

  orderSummaryCard: {
    padding: "26px 16px !Important",
    borderRadius: "16px !important",
    boxShadow:
      "0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 6px 13px 0px rgba(0, 0, 0, 0.05), 0px 24px 24px 0px rgba(0, 0, 0, 0.04), 0px 54px 33px 0px rgba(0, 0, 0, 0.03), 0px 97px 39px 0px rgba(0, 0, 0, 0.01), 0px 151px 42px 0px rgba(0, 0, 0, 0.00) !Important",
  },
  ratingsCard: {
    padding: "10px 26px !Important",
    borderRadius: "16px !important",
    marginTop: "15px",
    boxShadow:
      "0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 6px 13px 0px rgba(0, 0, 0, 0.05), 0px 24px 24px 0px rgba(0, 0, 0, 0.04), 0px 54px 33px 0px rgba(0, 0, 0, 0.03), 0px 97px 39px 0px rgba(0, 0, 0, 0.01), 0px 151px 42px 0px rgba(0, 0, 0, 0.00) !Important",
  },
  ratingsCardRatings: {
    marginTop: "5px",
  },
  orderNumberTypo: {
    fontWeight: `${typographyStyles.body1.fontWeight} !important`,
    lineHeight: `${typographyStyles.h6.lineHeight} !important`,
  },
  orderNumberTypoBold: {
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  orderOnTypo: {
    color: palette.text.disabled,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginTop: "7px !important",
  },
  orderSummaryDivider: {
    height: "1px",
    backgroundColor: `${palette.divider} !important`,
    marginTop: "16px",
    marginBottom: "26px",
  },
  timelineDot: {
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    margin: "7px 0px !important",
  },
  timelineIcon: {
    height: "20px !important",
    width: "20px !important",
  },
  dottedConnector: {
    borderLeft: "2px dashed rgba(0, 0, 0, 0.10) !important",
    background: "#fff !important",
  },
  timelineContentHeaderTypo: {
    fontSize: `${typographyStyles.body.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  timelineContentHeaderTimeTypo: {
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginLeft: "8px !important",
    color: `${palette.text.disabled} !important`,
  },

  map: {
    width: "100% !important",
    height: "483px !important",
    borderRadius: "10px !important",
  },

  customerDetailsTypo: {
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  summaryItemValue: {
    width: "150px !important",
    textAlign: "right",
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  summaryItemLabelDescription: {
    color: `${palette.text.disabled} !important`,
    marginTop: "2px !important",
    maxWidth: "300px !important",
    flex: 1,
  },
  itemSummaryHeaderContainer: {
    display: "flex",
    marginBottom: "17px !important",
  },
  itemSummaryHeaderLabel: {
    flex: 1,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    color: `${palette.text.disabled} !important`,
  },
  itemSummaryHeaderValue: {
    width: "150px !important",
    textAlign: "right",
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  itemContainer: {
    display: "flex",
    marginBottom: "17px !important",
  },
  itemLabel: {
    flex: 1,
    fontSize: `${typographyStyles.body1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    color: `${palette.text.disabled} !important`,
  },
  itemValue: {
    width: "150px !important",
    textAlign: "right",
    color: `${palette.primary.main} !important`,
    fontSize: `${typographyStyles.body1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },

  customerDetailsLabel: {
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    lineHeight: `${typographyStyles.h6.lineHeight} !important`,
    marginBottom: "8px !important",
  },
  customerDetailsValue: {
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.body1.fontWeight} !important`,
    lineHeight: `${typographyStyles.body1.lineHeight} !important`,
  },
  downloadInvoiceButton: {
    marginRight: "12px !important",
  },
  summaryItemActionContainer: {
    marginTop: "30px !important",
    display: "flex",
    gap: "10px !important",
    marginBottom: "17px !important",
  },
  helpButton: {
    flex: 1,
  },
  cancelOrderButton: {
    flex: 1,
  },
  customizationValue: {
    width: "100px !important",
    textAlign: "right",
    color: `${palette.text.disabled} !important`,
  },
  customizationLabel: {
    color: `${palette.text.disabled} !important`,
    marginTop: "2px !important",
    flex: 1,
  },
  totalLabel: {
    flex: 1,
    fontSize: `${typographyStyles.body.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  totalValue: {
    width: "100px !important",
    textAlign: "right",
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  actionButtons: {
    float: "right",
    marginLeft: "12px !important",
    border: "1px solid rgba(0, 0, 0, 0.22) !important",
  },

  summaryCard: {
    borderRadius: "16px !important",
    background: `${palette.common.white} !important`,
    boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 6px 13px 0px rgba(0, 0, 0, 0.05), 0px 24px 24px 0px rgba(0, 0, 0, 0.04), 0px 54px 33px 0px rgba(0, 0, 0, 0.03), 0px 97px 39px 0px rgba(0, 0, 0, 0.01), 0px 151px 42px 0px rgba(0, 0, 0, 0.00) !important`,
    padding: "16px 20px !important",
  },
  summaryItemContainer: {
    display: "flex",
    marginBottom: "10px",
  },
  summaryDeliveryItemContainer: {
    display: "flex",
    marginBottom: "10px",
  },
  summaryQuoteItemContainer: {
    display: "flex",
    marginBottom: "3px",
  },
  summaryItemLabel: {
    flex: 1,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginTop: "20px !important",
  },
  summaryDeliveryLabel: {
    flex: 1,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  summaryCustomizationLabel: {
    flex: 1,
    color: `${palette.text.disabled} !important`,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    lineHeight: `${typographyStyles.h6.lineHeight} !important`,
  },
  summaryItemPriceLabel: {
    flex: 1,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginLeft: "10px !important",
  },
  summaryItemDiscountLabel: {
    flex: 1,
    color: palette.success.main,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginLeft: "10px !important",
  },
  summaryCustomizationDiscountLabel: {
    flex: 1,
    color: palette.success.dark,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginLeft: "10px !important",
  },
  summaryItemTaxLabel: {
    flex: 1,
    color: palette.error.main,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginLeft: "10px !important",
  },
  summaryCustomizationTaxLabel: {
    flex: 1,
    color: palette.error.dark,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginLeft: "30px !important",
  },
  summaryCustomizationPriceLabel: {
    flex: 1,
    color: `${palette.text.disabled} !important`,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    marginLeft: "30px !important",
  },
  summaryItemPriceValue: {
    width: "100px !important",
    textAlign: "right",
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  summaryCustomizationPriceValue: {
    color: `${palette.text.disabled} !important`,
    width: "100px !important",
    textAlign: "right",
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  subTotalLabel: {
    flex: 1,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  summarySubtotalContainer: {
    display: "flex",
    marginBottom: "0px !important",
    marginTop: "20px !important",
  },
  subTotalValue: {
    width: "100px !important",
    textAlign: "right",
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
  },
  orderTotalDivider: {
    height: "1px",
    backgroundColor: `${palette.divider} !important`,
    marginTop: "20px",
    marginBottom: "15px",
  },
  proceedToBuy: {
    marginTop: "8px !important",
  },
  summaryOfferLabel: {
    flex: 1,
    fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
    fontWeight: `${typographyStyles.h6.fontWeight} !important`,
    color: `${palette.primary.main} !important`,
  },
});

export default useStyles;
