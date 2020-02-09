import React from "react";
import { Box, makeStyles, InputLabel, Theme } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import CustomTextField from "../../components/Custom/CustomTextField";

type TypeInputChat = {
  value: string;
  onChange: Function;
  error?: boolean;
  helperText?: string;
  label: string;
};

export default function InputUser({ value, label, onChange, error, helperText }: TypeInputChat) {
  const useStyles = makeStyles((theme: Theme) => ({
    label: {
      fontSize: 14,
      color: theme.palette.primary.main,
      marginBottom: 3,
      marginLeft: 4
    },
    input: {
      padding: 5
    }
  }));

  const classes = useStyles();

  return (
    <Box width="100%">
      <InputLabel className={classes.label}>{label}</InputLabel>
      <CustomTextField
        onChange={event => onChange(event)}
        className={classes.input}
        error={error}
        value={value}
        fullWidth
        helperText={
          <Box component="span" color={pink[800]}>
            {helperText}{" "}
          </Box>
        }
      ></CustomTextField>
    </Box>
  );
}
