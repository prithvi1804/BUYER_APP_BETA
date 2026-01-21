import { makeStyles } from "@mui/styles";
import colors from "../../../utils/Theme/colors";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    padding: "12px 40px !important",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    "@media (max-width: 1024px)": {
      padding: "12px 40px !important",
    },
    "@media (max-width: 768px)": {
      marginTop: "16px !important",
      padding: "12px 20px !important",
      gap: "8px",
    },
  },
  appLogo: {
    height: "20px !important",
    width: "20px !important",
    cursor: "pointer",
    fill: colors.common.white,
    "@media (max-width: 768px)": {
      height: "20px !important",
      width: "20px !important",
    },
  },
  locationIcon: {
    height: "20px",
    width: "30px",
    fill: colors.common.white,
  },
  cartIcon: {
    height: "20px",
    width: "20px",
    fill: colors.common.white,
  },
  userIcon: {
    height: "18px",
    width: "18px",
    fill: colors.common.white,
  },
  AddressDownIcon: {
    height: "12px",
    width: "12px",
    fill: colors.common.white,
  },
  addressContainer: {
    cursor: "pointer",
    display: "flex",
    marginLeft: "20px !important",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      marginLeft: "10px !important",
    },
    "@media (max-width: 768px)": {
      marginLeft: "8px !important",
      order: 2,
      flex: "0 0 auto",
    },
  },
  addressTypo: {
    marginLeft: "4px !important",
    marginRight: "6px !important",
    whiteSpace: "nowrap",
    // "@media (max-width: 768px)": {
    //   display: "none",
    // },
  },
  inputContainer: {
    flex: 1,
    marginLeft: "14px !important",
    marginRight: "80px !important",
    minWidth: "200px",
    "@media (max-width: 1024px)": {
      marginRight: "20px !important",
    },
    "@media (max-width: 768px)": {
      marginTop: "16px !important",
      order: 5,
      flex: "1 1 100%",
      marginLeft: "0 !important",
      marginRight: "0 !important",
      marginTop: "8px",
    },
  },
  inputForm: {
    padding: "2px 4px !important",
    display: "flex !important",
    alignItems: "center !important",
    borderRadius: "12px !important",
    height: "40px !important",
    boxShadow: "none !important",
    "@media (max-width: 768px)": {
      height: "40px !important",
    },
  },
  searchIcon: {
    padding: "10px !important",
    fill: colors.primary.dark,
    height: "36px !important",
    width: "36px !important",
    "@media (max-width: 768px)": {
      padding: "8px !important",
    },
  },
  inputBase: {
    flex: 1,
  },
  listIcon: {
    padding: "10px !important",
    fill: colors.primary.dark,
    height: "36px !important",
    width: "36px !important",
    "@media (max-width: 768px)": {
      padding: "8px !important",
    },
  },
  favourite: {
    display: "flex !important",
    // alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none !important",
    },
  },
  favouriteTypo: {
    marginLeft: "5px !important",
    marginTop: "3px !important",
  },
  cart: {
    display: "flex !important",
    marginLeft: "22px !important",
    marginRight: "22px !important",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      marginLeft: "12px !important",
      marginRight: "12px !important",
    },
    "@media (max-width: 768px)": {
      marginLeft: "auto !important",
      marginRight: "8px !important",
      order: 3,
    },
  },
  cartTypo: {
    marginLeft: "8px !important",
    display: "inline-block !important",
    color: colors.common.white,
    "@media (max-width: 768px)": {
      display: "none !important",
    },
  },
  user: {
    display: "flex !important",
    cursor: "pointer",
    gap: "5px",
    // alignItems: "center",
    "@media (max-width: 768px)": {
      order: 4,
      marginLeft: "16px !important",
    },
  },
  userMenu: {
    "& .MuiPaper-root": {
      minWidth: "180px !important",
      top: "65px !important",
      borderRadius: "8px !important",
      border: `1px solid ${colors.grey.divider} !important`,
      boxShadow: "0px 10px 22px 0px rgba(45, 77, 108, 0.15) !important",
    },
  },
  userTypo: {
    alignItems: "center !important",
    verticalAlign: "middle !important",
    "@media (max-width: 768px)": {
      display: "none !important",
    },
  },
}));

export default useStyles;

