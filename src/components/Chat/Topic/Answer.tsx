import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import Content from "../Utils/Content";
import Userdate from "./Userdate";

type TypeAnswer = {
  reponse?: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  textPaper: {
    fontStyle: "italic"
  },
  mainBox: {
    backgroundColor: theme.palette.background.paper
  },
  userBox: {
    backgroundColor: theme.palette.divider
  },
  paper: {
    paddingLeft: 8,
    backgroundColor: theme.palette.divider
  }
}));
export default function Answer({ reponse }: TypeAnswer) {
  const classes = useStyles();
  return (
    <Box>
      {reponse ? (
        <Box>
          {Object.keys(reponse).map((keyName: string, index) => (
            <Box
              mt={1}
              boxShadow={100}
              className={classes.mainBox}
              borderRadius={5}
              p={2}
              key={keyName}
            >
              <Box className={classes.userBox} p={1} pl={2} borderRadius={8}>
                <Userdate user={reponse[keyName].user} date={reponse[keyName].date} />
              </Box>
              <Box p={2}>
                <Content>{reponse[keyName].message}</Content>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <div></div>
      )}
    </Box>
  );
}

/*
Object.keys(machin).map((keyName: any, index) => (
      <Box
        border={1}
        mt={1}
        boxShadow={100}
        borderColor="primary"
        className={classes.mainBox}
        borderRadius={5}
        p={2}
      >
        <Box className={classes.infoBox} borderBottom={1} mb={3}>
          <Paper className={classes.infoPaper}>
            <Typography className={classes.user} variant="h6" color="textSecondary">
              Posted by {machin[keyName].user} at 5 Januar 2020
            </Typography>
          </Paper>
        </Box>
        <Box>
          <Content>{machin[keyName].message}</Content>
        </Box>
      </Box>
    ))
    */
