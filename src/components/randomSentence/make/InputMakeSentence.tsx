import React from "react";
import { Box, InputBase, Button } from "@material-ui/core";

type TypeInputMakeSentence = {
  onKeyUp: Function;
  inputValue: string;
  onChange: Function;
  onClick: Function;
  classes: Record<"inputBase" | "button", string>;
};

export default function InputMakeSentence({
  onKeyUp,
  inputValue,
  onChange,
  onClick,
  classes
}: TypeInputMakeSentence) {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Box width="100%">
        <InputBase
          onKeyUp={event => onKeyUp(event)}
          color="primary"
          className={classes.inputBase}
          fullWidth
          value={inputValue}
          onChange={event => onChange(event)}
          placeholder="sentence..."
        />
      </Box>
      <Button onClick={() => onClick()} className={classes.button} color="primary">
        Add
      </Button>
    </Box>
  );
}
