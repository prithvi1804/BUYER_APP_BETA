import { makeStyles } from '@mui/styles';
import palette from "../../../utils/Theme/palette";
import colors from "../../../utils/Theme/colors";
import typographyStyles from "../../../utils/Theme/typographyStyles";

const useStyles = makeStyles({
    categoriesRootContainer: {
        background: colors.grey.cardBackground,
    },

    categoryItem: {
        cursor: 'pointer',
        minWidth: '130px', // Ensure enough width for the card look
        height: '100% !important',
        borderRadius: '24px !important',
        background:`${colors.common.white} !important`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '16px',
        marginRight: '16px', // Add spacing between items since grid spacing isn't used here
        '&:hover': {
            background: `${colors.secondary.lightHover} !important`,
        }
    },
    categoryNameTypo: {
        fontWeight: `${typographyStyles.subtitle1.fontWeight} !important`,
        textAlign: 'center',
        color: colors.common.black,
        fontSize: `${typographyStyles.subtitle1.fontSize} !important`,
        lineHeight: `${typographyStyles.subtitle1.lineHeight} !important`, 
        maxWidth: '120px',
    },
    selectedCategory: {
        background: `${colors.secondary.light} !important`,
        border: `2px solid ${colors.secondary.main}`,
    },

    subCatContainer: {
        display: 'flex',
        gap: '4px',
        overflowX: 'auto',
        overflowY: 'hidden',
        flexWrap: 'nowrap',
        width: 'fit-content',
        margin: '0 auto',
        maxWidth: '100%',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '16px',
        paddingBottom: '16px',
        "&::-webkit-scrollbar": {
            height: "6px",
        },
        "&::-webkit-scrollbar-track": {
            background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            background: colors.grey.scrollbar,
            borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: colors.grey.scrollbarHover,
        },
        "@media (max-width: 1024px)": {
            padding: "4px 16px !important",
        },
        "@media (max-width: 768px)": {
            marginTop: "4px !important",
        },
    },
    subCategoryIcon: {
        width: '28px',
        height: '28px',
        color: colors.common.black,
        display: 'block',
        margin: '0 auto',
        marginBottom: '12px !important'
    }
});

export default useStyles;