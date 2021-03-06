import React from "react";
import {
  TextField,
  makeStyles,
  fade,
  TextFieldProps,
  OutlinedInputProps,
  createStyles,
  Theme
} from "@material-ui/core";

const useStylesReddit = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid " + theme.palette.primary.dark,
      color: theme.palette.text.primary,
      padding: 1.5,
      paddingLeft: 6,
      borderRadius: 3,
      fontSize: 18,
      minHeight: 38,
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        boxShadow: `${fade(theme.palette.primary.main, 0.15)} 1px 1px 0 2px`
      },
      "&$focused": {
        boxShadow: `${fade(theme.palette.primary.main, 0.5)} 0 0 0 2px`,
        borderColor: theme.palette.primary.dark
      }
    },
    focused: {}
  })
);

export default function CustomTextField(props: TextFieldProps) {
  const classes = useStylesReddit();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
}
