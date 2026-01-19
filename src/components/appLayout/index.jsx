import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavBar from "./navbar/navbar";
import Footer from "./footer/footer";

import { makeStyles } from '@mui/styles';
import palette from "../../utils/Theme/palette";

const useStyles = makeStyles({
    allLayoutContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden'
    },
    mainContainer: {
        flexGrow: 1,
        overflowY: 'auto',
        width: '100%',
        backgroundColor: '#F9F9F9',
    },
});

const AppLayout = ({ pageTitle, children, isCheckout = false }) => {
    const classes = useStyles();

    useEffect(() => {
        const mainContent = document.getElementById("main-content-area");
        if (mainContent) {
            mainContent.scrollTo(0, 0);
        }
    }, [])
    return (
        <Box className={classes.allLayoutContainer}>
            <NavBar isCheckout={isCheckout} />
            <Box
                component="main"
                className={classes.mainContainer}
                id="main-content-area"
            >
                {children}
            </Box>
            {/* <Footer /> */}
        </Box>
    )

}

export default AppLayout;