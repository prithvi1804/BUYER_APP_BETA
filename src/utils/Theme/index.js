import { createTheme } from '@mui/material';
import typography from "./typographyStyles";
import palette from "./palette";
import components from './components';
const theme = createTheme({
    typography,
    palette,
    components
});

export default theme;