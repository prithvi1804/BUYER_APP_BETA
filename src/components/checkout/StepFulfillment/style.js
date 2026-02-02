import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formControlLabelAlign: {
    // marginLeft: "0px !important",
  },
  fulfillment: {
    marginBottom: "20px !important",
  },
  nameLabelTypo: {
    marginTop: "4px !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    color: "#686868 !important",
    lineHeight: "18px !important",
  },
  userLabelTypo: {
    display: "flex",
    flexDirection: "column",
  },
  userActionContainer: {
    marginTop: "30px !important",
    marginLeft: "34px !important",
    "@media (max-width: 768px)": {
      marginLeft: "0px !important",
      marginTop: "20px !important",
    },
  },
});

export default useStyles;
