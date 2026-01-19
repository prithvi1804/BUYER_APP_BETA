import { makeStyles } from '@mui/styles';
import palette from "../../utils/Theme/palette";

const useStyles = makeStyles({
    ordersContainer: {
        padding: "20px 40px 40px 40px !important",
        "@media (max-width: 600px)": {
            padding: "20px 20px 20px 20px !important",
        },
    },
    orderHistoryTypo: {
        fontSize: '32px !important'
    },
    tabTanelContainer: {
        marginTop: '16px !important'
    }
});

export default useStyles;