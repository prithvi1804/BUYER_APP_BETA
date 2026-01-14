import { makeStyles } from "@mui/styles";
import colors from "../../utils/Theme/colors";

const useStyles = makeStyles({
  homeContainer: {
    padding: "16px 16px",
    "@media (max-width: 1024px)": {
      padding: "16px 16px",
    },
    "@media (max-width: 768px)": {
      marginTop: "32px !important",
      padding: "16px 16px",
    },
  },
  fashionCategory: {
    borderRadius: "8px !important",
    background: `${colors.categories.fashion.background} !important`,
    paddingTop: "33px !important",
    paddingBottom: "23px !important",
    boxShadow: "none !important",
    minHeight: "317px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "200px !important",
      paddingTop: "20px !important",
      paddingBottom: "16px !important",
    },
  },
  // fashionImages: {
  //   textAlign: "center",
  // },
  // categoryTypo: {
  //   color: colors.text.secondary,
  //   textAlign: "center",
  //   marginTop: "24px !important",
  //   "@media (max-width: 768px)": {
  //     marginTop: "16px !important",
  //     fontSize: "14px !important",
  //   },
  // },
  // fashionImage2: {
  //   marginLeft: "-30px",
  //   "@media (max-width: 768px)": {
  //     marginLeft: "-15px",
  //   },
  // },
  electronicsCategory: {
    borderRadius: "16px !important",
    background: `${colors.categories.electronics.background} 100% !important`,
    paddingTop: "24px !important",
    paddingBottom: "24px !important",
    boxShadow: "none !important",
    minHeight: "14px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "140px !important",
      paddingTop: "16px !important",
      paddingBottom: "16px !important",
    },
  },
  electronicsImages: {
    textAlign: "center",
  },
  electronicsImage: {
    verticalAlign: "unset",
    "@media (max-width: 768px)": {
      maxWidth: "90%",
    },
  },
  // tvImage: {
  //   // marginLeft: "-20px",
  //   "@media (max-width: 768px)": {
  //     // marginLeft: "-10px",
  //     maxWidth: "45%",
  //   },
  // },
  // mobileImage: {
  //   marginLeft: "-70px",
  //   "@media (max-width: 768px)": {
  //     marginLeft: "-30px",
  //     maxWidth: "35%",
  //   },
  // },
  // tabImage: {
  //   marginLeft: "2px",
  // },
  typoContainer: {
    display: "flex",
  },
  electronicsTypo: {
    margin: "auto !important",
    marginLeft: "0px !important",
  },

  groceryCategory: {
    borderRadius: "8px !important",
    background: `${colors.categories.grocery.background} !important`,
    paddingTop: "33px !important",
    paddingBottom: "23px !important",
    boxShadow: "none !important",
    minHeight: "210px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "160px !important",
      paddingTop: "20px !important",
      paddingBottom: "16px !important",
    },
  },
  groceryImages: {
    textAlign: "center",
  },
  groceryImage: {
    verticalAlign: "unset",
    "@media (max-width: 768px)": {
      maxWidth: "90%",
    },
  },
  groceryTypo: {
    margin: "auto !important",
    marginLeft: "0px !important",
  },

  foodCategory: {
    borderRadius: "8px !important",
    background: `${colors.categories.food.background} !important`,
    paddingTop: "33px !important",
    paddingBottom: "23px !important",
    boxShadow: "none !important",
    minHeight: "288px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "180px !important",
      paddingTop: "20px !important",
      paddingBottom: "16px !important",
    },
  },
  foodImages: {
    textAlign: "center",
  },

  healthCategory: {
    borderRadius: "8px !important",
    background: `${colors.categories.health.background} !important`,
    paddingTop: "33px !important",
    paddingBottom: "23px !important",
    boxShadow: "none !important",
    minHeight: "210px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "160px !important",
      paddingTop: "20px !important",
      paddingBottom: "16px !important",
    },
  },
  healthImages: {
    textAlign: "center",
  },
  healthImage2: {
    // marginLeft: '-30px'
  },

  healthTypo: {
    marginTop: "30px !important",
    "@media (max-width: 768px)": {
      marginTop: "16px !important",
    },
  },

  homeCategory: {
    borderRadius: "8px !important",
    background: `${colors.categories.home.background} !important`,
    paddingTop: "33px !important",
    paddingBottom: "23px !important",
    boxShadow: "none !important",
    minHeight: "317px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "200px !important",
      paddingTop: "20px !important",
      paddingBottom: "16px !important",
    },
  },
  homeImages: {
    textAlign: "center",
    height: "70%",
    "@media (max-width: 768px)": {
      height: "auto",
    },
  },
  homeImage1: {
    width: "200px",
    "@media (max-width: 768px)": {
      width: "140px",
    },
  },
  homeImage2: {
    // marginLeft: '-30px'
    // width: "35%",
  },

  bpcCategory: {
    borderRadius: "8px !important",
    background: `${colors.categories.bpc.background} !important`,
    paddingTop: "15px !important",
    paddingBottom: "23px !important",
    boxShadow: "none !important",
    minHeight: "177px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "140px !important",
      paddingTop: "12px !important",
      paddingBottom: "16px !important",
    },
  },
  bpcImages: {
    textAlign: "center",
  },
  bpcImage: {
    verticalAlign: "unset",
    "@media (max-width: 768px)": {
      maxWidth: "90%",
    },
  },
  bpcTypo: {
    margin: "auto !important",
    marginLeft: "0px !important",
  },
  textAlignLeft: {
    textAlign: "left",
  },
  agricultureCategory: {
    borderRadius: "8px !important",
    background: `${colors.categories.agriculture.background} !important`,
    paddingTop: "33px !important",
    paddingBottom: "23px !important",
    boxShadow: "none !important",
    minHeight: "288px !important",
    height: "auto !important",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      minHeight: "180px !important",
      paddingTop: "20px !important",
      paddingBottom: "16px !important",
    },
  },
  agricultureImages: {
    textAlign: "center",
  },
  agricultureImage: {
    height: "230px",
    "@media (max-width: 768px)": {
      height: "140px",
    },
  },
  agricultureCategoryTypo: {
    color: colors.text.secondary,
    textAlign: "center",
    marginTop: "-10px !important",
  },
  viewAllLessButtonContainer: {
    textAlign: "center",
    marginTop: "16px !important",
  },
  subCatCard: {
    cursor: 'pointer',
    height: '100% !important',
    width: '100% !important',
    borderRadius: '24px !important',
    background: colors.grey.cardBackground,
    // background: '#F5F5F5 !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: "none !important",
    padding: '16px',
    '&:hover': {
      background: `${colors.grey.cardBackgroundHover} !important`,
    }
  },
  subCatImage: {
    maxHeight: '120px',
    maxWidth: '120px',
    borderRadius: '24px !important',
    objectFit: 'contain',
    marginBottom: '12px'
  },
  subCatNameTypo: {
    fontWeight: '600 !important',
    textAlign: 'center',
    color: colors.grey.text333,
    fontSize: '0.8rem !important'
  },
});

export default useStyles;

