import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const StepCartLabel = ({ activeStep, onUpdateActiveStep }) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.labelTypo} component="div">
      Cart
      {(activeStep !== 0 && activeStep < 3) && (
        <Button
          className={classes.editAddress}
          variant="text"
          color="primary"
          onClick={() => onUpdateActiveStep()}
        >
          EDIT
        </Button>
      )}
    </Typography>
  );
};

export default StepCartLabel;
