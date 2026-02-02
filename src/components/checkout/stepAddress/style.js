import { makeStyles } from '@mui/styles';
import palette from "../../../utils/Theme/palette";

const useStyles = makeStyles({
    addressFormLabelTypo: {
        fontWeight: '600 !important',
        lineHeight: '20px !important',
    },
    formLabel: {
        fontWeight: '600 !important',
        lineHeight: '20px !important',
        marginBottom: '32px !important'
    },

    selectAddressRadioContainer: {
        // display: 'flex !important'
        marginTop: '12px !important',
        marginLeft: '0px !important',
        padding: '12px 20px !important',
        border: `1px solid ${palette.primary.main}`,
        background: `${palette.common.white} !important`,
        borderRadius: '8px !important',
        "@media (max-width: 768px)": {
            marginLeft: '0px !important',
            padding: '10px 12px !important',
        },
    },
    formControlLabel: {
        width: '100% !important',
        alignItems: 'center !important',
        marginLeft: '0px !important',
        "& .MuiFormControlLabel-label": {
            marginLeft: '12px !important',
            "&.MuiTypography-root": {
                flex: 1
            }
        },
        "& .MuiRadio-root": {
            padding: '4px !important',
            width: '20px !important'
        }
    },
    addressTypoContainer: {
        display: 'flex',
        gap: '13px',
        "@media (max-width: 768px)": {
            flexDirection: 'column',
            gap: '4px',
        },
    },
    addressNameTypo: {
        fontSize: '16px !important',
        fontWeight: '600 !important',
        lineHeight: '20px !important',
        display: 'flex',
        alignItems: 'center !important',
        width: '100px',
        "@media (max-width: 768px)": {
            width: '100%',
            fontSize: '14px !important',
        },
    },
    addressTypo: {
        flex: 1,
        "@media (max-width: 768px)": {
            fontSize: '13px !important',
        },
    },
    addressActionContainer: {
        width: '100px',
        margin: 'auto',
        textAlign: 'right',
        "@media (max-width: 768px)": {
            width: '100%',
            textAlign: 'left',
            marginTop: '8px',
        },
    },
    addressActionIcon: {
        height: "20px",
        width: "20px",
        color: palette.primary.main,
        cursor: "pointer"
    },
    addAddress: {
        border: `1px dashed ${palette.primary.main} !important`,
        background: `${palette.primary.light} !important`,
        marginTop: '12px !important',
        marginLeft: '0px !important',
        borderRadius: '8px',
        padding: '16px !important',
        "@media (max-width: 768px)": {
            marginLeft: '0px !important',
            padding: '12px !important',
        },
    },
    addAddressTypo: {
        textAlign: 'center',
        fontSize: '16px !important',
        fontWeight: '600 !important',
        lineHeight: '24px !important',
    },
    addAddressIcon: {
        marginRight: '8px !important',
        height: '20px !important',
        width: '20px !important',
    },
    pickupBillingAddress: {
        marginTop: '20px !important',
        marginBottom: '20px !important',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        "@media (max-width: 768px)": {
            flexDirection: 'column',
        },
    },
    billingTypo: {
        marginLeft: '8px !important'
    },




    editAddress: {
        marginLeft: 'auto !important'
    },
    labelTypo: {
        fontWeight: '600 !important',
        lineHeight: '20px !important',
    },
    addressHeaderTypo: {
        marginTop: '24px !important',
        marginBottom: '16px !important',
        fontSize: '16px !important',
        fontWeight: '600 !important',
        lineHeight: '20px !important',
    },
    addressTextTypo: {
        marginBottom: '3px !important',
        fontSize: '16px !important',
        fontWeight: '400 !important',
        lineHeight: '20px !important',
    },
});

export default useStyles;