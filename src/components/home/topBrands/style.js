import { makeStyles } from '@mui/styles';
import palette from "../../../utils/Theme/palette";

const useStyles = makeStyles({
    topBrandsContainer: {
        marginTop: '32px !important',
        overflow: 'hidden'
    },
    brandsContainer: {
        display: 'flex',
        gap: '25px',
        overflow: 'hidden',
        paddingBottom: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        "@media (max-width: 600px)": {
            gap: '10px',
        }
    },
    paginationActionContainer: {
        display: 'flex',
        gap: '25px',
    },
    brandCard: {
        cursor: 'pointer',
        height: '171px !important',
        width: '171px !important',
        minWidth: '171px !important',
        borderRadius: '24.5px !important',
        background: '#F5F5F5 !important',
        display: 'flex',
        boxShadow: "none !important",
        "@media (max-width: 600px)": {
            height: '120px !important',
            width: '120px !important',
            minWidth: '120px !important',
            borderRadius: '16px !important',
        }
    },
    brandImage: {
        margin: 'auto !important',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        padding: '10px'
    },
    dotsContainer: {
        textAlign: 'center'
    },
    dot: {
        height: '10px',
        width: '10px',
        backgroundColor: '#D9D9D9',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '5px'
    },
    selectedDot: {
        height: '10px',
        width: '20px',
        backgroundColor: palette.primary.main,
        borderRadius: '10px',
        display: 'inline-block',
        marginLeft: '5px'
    },
    categoriesContainer: {
        "& ul": {
            overflow: 'auto',
            display: 'flex',
            gap: '10px',
            // padding: '16px !important',
            justifyContent: 'center',
            "& li:has(.MuiPaginationItem-ellipsis)": {
                background: 'red !important',
                display: 'none'
            }
        },
        textAlign: 'center',
        // margin: 'auto'
    },
    isActive: {
        border: `2px solid ${palette.primary.main}`
    }
});

export default useStyles;