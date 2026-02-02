import React from "react";
import useStyles from "../style";

import Typography from "@mui/material/Typography";

const StepPaymentLabel = () => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.labelTypo} component="div">
      Payment
    </Typography>
  );
};

export default StepPaymentLabel;
