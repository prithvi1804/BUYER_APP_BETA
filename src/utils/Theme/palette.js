import colors from './colors';

const palette = {
    common: {
        black: colors.common.black,
        white: colors.common.white,
        fontColor: colors.text.primary,
        disableColor: colors.grey.disable,
    },
    text: {
      // primary: '#fff',
      // secondary: '#fff',
        success: colors.success.main,
        disabled: colors.text.disabled,
    },
    primary: {
        main: colors.primary.main,
        light: colors.primary.light,
        dark: colors.primary.dark,
        contrastText: colors.primary.contrastText,
    },
    secondary: {
        main: colors.secondary.main,
        light: colors.secondary.light,
        dark: colors.secondary.dark,
        contrastText: colors.secondary.contrastText,
    },
    success: {
        main: colors.success.main,
        light: colors.success.light,
        dark: colors.success.dark,
        contrastText: colors.success.contrastText,
    },
    warning: {
        main: colors.warning.main,
        light: colors.warning.light,
        dark: colors.warning.dark,
        contrastText: colors.warning.contrastText,
    },
    error: {
        main: colors.error.main,
        light: colors.error.light,
        dark: colors.error.dark,
        contrastText: colors.error.contrastText,
    },
    background: {
        default: '#fff',
        paper: "#fff",
    },
    action: {
        disabled: colors.grey.disable,
        active: colors.text.link,
    },
    divider: colors.grey.divider
};

export default palette;