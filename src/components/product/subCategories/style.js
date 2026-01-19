import { makeStyles } from '@mui/styles';
import palette from "../../../utils/Theme/palette";

const useStyles = makeStyles({
    categoriesRootContainer: {
        background: '#F9F9F9',
    },

    categoryItem: {
        textAlign: 'center',
        cursor: 'pointer'
    },
    categoryItemImageContainer: {
        height: '108px',
        width: '108px',
        borderRadius: '108px',
        background: '#E7E7E7',
        display: 'flex',
        margin: 'auto',
        "@media (max-width: 600px)": {
            height: '80px',
            width: '80px',
            borderRadius: '80px',
        }
    },
    categoryImage: {
        height: '102px',
        maxWidth: '102px',
        minWidth: '42px',
        margin: 'auto',
        borderRadius: '50%',
        "@media (max-width: 600px)": {
            height: '74px',
            maxWidth: '74px',
        }
    },
    categoryNameTypo: {
        fontWeight: '600 !important',
        marginTop: '5px !important',
        maxWidth: '120px',
        height: '40px !important',
        "@media (max-width: 600px)": {
            fontSize: '12px !important',
            maxWidth: '80px',
            lineHeight: '1.2 !important'
        }
    },
    selectedCategory: {
        background: '#EBEBEB !important',
        border: `2px solid ${palette.secondary.main}`,
        '& $categoryImage': {
            height: '98px',
            maxWidth: '98px',
            "@media (max-width: 600px)": {
                height: '70px',
                maxWidth: '70px',
            }
        }
    },

    subCatContainer: {
        display: 'flex',
        gap: '25px',
        overflowX: 'auto',
        overflowY: 'hidden',
        flexWrap: 'nowrap',
        width: 'fit-content',
        margin: '0 auto',
        maxWidth: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        "&::-webkit-scrollbar": {
            height: "6px",
        },
        "&::-webkit-scrollbar-track": {
            background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "#D3D3D3",
            borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: "#A9A9A9",
        },
        "@media (max-width: 1024px)": {
            padding: "12px 16px !important",
        },
        "@media (max-width: 768px)": {
            marginTop: "10px !important",
        },
    }
});

export default useStyles;