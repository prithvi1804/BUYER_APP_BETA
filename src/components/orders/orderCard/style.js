import { makeStyles } from '@mui/styles';
import palette from "../../../utils/Theme/palette";
import colors from "../../../utils/Theme/colors";
import typographyStyles from "../../../utils/Theme/typographyStyles";

const useStyles = makeStyles({
    orderItemContainer: {
        border: `1px solid ${palette.divider}`,
        borderRadius: '12px !important',
    },
    orderCard: {
        boxShadow: "none !important",
        background: `${colors.grey.cardBackground} !important`,
        display: 'flex',
        minHeight: '250px !important',
        // width: '314px !important',
        width: '300px !important',
        height: '300px !important',
        borderRadius: '12px 0px 0px 12px !important'
    },
    orderImage: {
        margin: 'auto !important',
        maxHeight: '100%',
        maxWidth: '100%',
    },
    orderDetailsTypo: {
        padding: '37px 16px 26px 16px',
        position: 'relative'
    },
    deliveryTimeTypo: {
        marginLeft: '6px !important',
        color: `${palette.text.disabled} !important`,
        fontWeight: `${typographyStyles.h6.fontWeight} !important`,
        lineHeight: `${typographyStyles.body1.lineHeight} !important`,
    },
    deliveryTimeTypoValue: {
        fontWeight: `${typographyStyles.h6.fontWeight} !important`,
        lineHeight: `${typographyStyles.body1.lineHeight} !important`,
    },
    statusChip: {
        float: 'right'
    },
    addressTypo: {
        marginTop: '12px !important',
        fontWeight: `${typographyStyles.h6.fontWeight} !important`,
        color: `${palette.text.disabled} !important`,
        lineHeight: `${typographyStyles.body1.lineHeight} !important`
    },
    itemNameTypo: {
        marginTop: '10px !important',
        fontWeight: `${typographyStyles.h6.fontWeight} !important`,
        lineHeight: `${typographyStyles.h6.lineHeight} !important`
    },
    vegNonVegIcon: {
        marginRight: '5px !important',
        // marginLeft: '10px !important',
        height: '16px !important',
        width: '16px !important',
    },
    itemTypo: {
        marginRight: '16px !important',
    },
    priceTypo: {
        marginTop: '16px !important'
    },
    priceTypoLabel: {
        marginTop: '12px !important',
        fontWeight: `${typographyStyles.h6.fontWeight} !important`,
        color: `${palette.text.disabled} !important`,
        lineHeight: `${typographyStyles.body1.lineHeight} !important`
    },
    orderDateTime: {
        marginTop: '14px !important',
        fontWeight: `${typographyStyles.h6.fontWeight} !important`,
        color: `${palette.text.disabled} !important`,
        lineHeight: `${typographyStyles.body1.lineHeight} !important`
    },
    viewSummaryButton: {
        float: 'right',
    },
    trackOrderButton: {
        float: 'right',
        marginLeft: '16px !important'
    },
    downloadInvoiceButton: {
        float: 'right',
        marginLeft: '16px !important'
    }
});

export default useStyles;