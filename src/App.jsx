import React, { useEffect } from 'react';
import styles from "./styles/globalStyles.module.scss";
import OndcRoutes from "./router";
import "./api/firebase-init";

import { ThemeProvider } from '@emotion/react';
import theme from "./utils/Theme";
import colors from "./utils/Theme/colors";
import typographyStyles from "./utils/Theme/typographyStyles";

function App() {
    useEffect(() => {
        const flattenTheme = (themeObj, prefix) => {
            Object.keys(themeObj).forEach(key => {
                const value = themeObj[key];
                const name = `${prefix}-${key}`;
                if (typeof value === 'object' && value !== null) {
                    flattenTheme(value, name);
                } else {
                    document.documentElement.style.setProperty(`--${name}`, value);
                }
            });
        };

        flattenTheme(colors, 'color');
        // For typography, mapped names might need adjustment, but 'font-body-fontFamily' works.
        // Or I can manual map important ones if needed, but 'font' prefix is fine.
        flattenTheme(typographyStyles, 'font');
    }, [colors, typographyStyles]);

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.background}>
                <OndcRoutes/>
            </div>
        </ThemeProvider>
    );
}

export default App;
