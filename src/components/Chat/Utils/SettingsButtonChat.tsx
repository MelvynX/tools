import React from "react";
import { Box, Button } from "@material-ui/core";

type TypeSettingsButton = {
  onReset: Function;
  onCreate: Function;
};

export default function SettingsButtonChat({ onReset, onCreate }: TypeSettingsButton) {
  return (
    <Box display="flex" justifyContent="flex-end" m={1}>
      <Box mr={3}>
        <Button variant="text" onClick={() => onReset()} color="primary">
          Reset
        </Button>
      </Box>

      <Button variant="contained" color="primary" onClick={() => onCreate()}>
        Create
      </Button>
    </Box>
  );
}