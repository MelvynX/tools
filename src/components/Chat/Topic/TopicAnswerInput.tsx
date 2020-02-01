import React, { useState } from "react";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import InputChat from "../Utils/InputChat";
import SettingsButtonChat from "../Utils/SettingsButtonChat";
import { firebaseHelper } from "../../utils/firebaseHelper";

const useStyles = makeStyles((theme: Theme) => ({
  mainBox: {
    backgroundColor: theme.palette.background.paper
  }
}));

type TypeTopicAnswerInput = {
  topicID?: string;
};

export default function TopicAnswerInput({ topicID }: TypeTopicAnswerInput) {
  const [user, setUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { push } = firebaseHelper("chat/topic/" + topicID + "/answer");

  const classes = useStyles();

  const reset = () => {
    setUser("");
    setMessage("");
  };

  const createAnswer = () => {
    push({ user: user, message: message });
    reset();
  };

  return (
    <Box mt={1} boxShadow={100} className={classes.mainBox} borderRadius={5} p={2}>
      <Typography variant="h4" color="textPrimary">
        Donnez son avis :
      </Typography>
      <InputChat
        label="Username"
        value={user}
        onChange={(event: any) => setUser(event.target.value)}
      />
      <InputChat
        multiline
        label="Message"
        value={message}
        onChange={(event: any) => setMessage(event.target.value)}
      />
      <SettingsButtonChat onCreate={createAnswer} onReset={reset} />
    </Box>
  );
}
