import { makeStyles } from '@mui/styles';
import palette from "../../../utils/Theme/palette";

const useStyles = makeStyles({
    categoriesContainer: {
        background: '#F9F9F9',
        display: 'flex',
        gap: '29px',
        padding: '16px !important',
        justifyContent: 'center'
    },
    categoryItem: {
        textAlign: 'center',
        cursor: 'pointer'
    },
    categoryItemImageContainer: {
        height: '108px',
        width: '108px',
        borderRadius: '12px',
        background: '#E7E7E7',
        display: 'flex',
        margin: 'auto'
    },
    categoryImage: {
        height: '80%',
        width: '80%',
        margin: 'auto',
        objectFit: 'contain'
    },
    categoryNameTypo: {
        fontWeight: '600 !important',
        marginTop: '5px !important'
    },
    selectedCategory: {
        background: '#BED9FD !important',
        border: `2px solid ${palette.primary.main}`
    }
});

export default useStyles;