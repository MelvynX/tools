import React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}
interface Props extends SwitchProps {
  classes: Styles;
}
export const CustomSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 60,
      height: 30,
      padding: 0,
      margin: theme.spacing(1)
    },
    switchBase: {
      padding: 1,
      color: theme.palette.primary.main,
      "&$checked": {
        transform: "translateX(35px)",
        color: theme.palette.secondary.main,
        backgroundColor: "none",
        "& + $track": {
          backgroundColor: theme.palette.primary.light,
          opacity: 1,
          border: `1px solid ${theme.palette.primary.main}`
        }
      },
      "&$focusVisible $thumb": {
        color: "orange",
        border: "6px solid red",
        boxShadow: "none"
      }
    },
    thumb: {
      width: 20,
      height: 20,
      marginTop: 4,
      marginLeft: 2
    },
    track: {
      borderRadius: 10 / 2,
      border: `1px solid ${theme.palette.secondary.light}`,
      backgroundColor: theme.palette.secondary.main,
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"])
    },
    checked: {
      backgroundColor: "none",
      color: "red"
    },
    focusVisible: {
      color: "red"
    }
  })
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});
