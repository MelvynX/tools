import React, { useState, useEffect } from "react";
import { Card, Typography, Box, CardContent, Button, Link, makeStyles } from "@material-ui/core";
import CommitGitHub from "./CommitGitHub";
import { GITHUB_KEY, GITHUB_NAME } from "../../utils/constante";

type TypeCardGItHubRepos = {
  api: any;
};

const useStyles = makeStyles(theme => ({
  card: {}
}));

export default function CardGitHubRepos({ api }: TypeCardGItHubRepos) {
  const [apiCommit, setApiCommit] = useState([]);

  const classes = useStyles();

  const fetchApiCommit = () => {
    let commitsURL = "";
    if (api.commits_url) {
      commitsURL = api.commits_url.replace("{/sha}", "");
    } else {
      return;
    }

    let headers = new Headers();

    headers.set("Authorization", "Basic " + btoa(GITHUB_NAME + ":" + GITHUB_KEY));

    fetch(commitsURL, {
      method: "GET"
      //headers: headers
      //credentials: 'user:passwd'
    }).then(function(reponse) {
      if (reponse.status !== 200) {
        console.warn("GitHub api has problem.(on card repos)");
        return;
      }

      reponse.json().then(function(commits) {
        setApiCommit(commits);
        return;
      });
    });
  };

  useEffect(() => {
    if (apiCommit.length < 1) {
      fetchApiCommit();
    }
  });

  return (
    <Box width="100%" maxWidth={350}>
      <Card className={classes.card}>
        <CardContent>
          <Typography color="textPrimary" align="center" variant="h4">
            {api.name}
          </Typography>

          <Typography color="textSecondary" variant="subtitle2" align="center">
            Created at {api.created_at}
          </Typography>
        </CardContent>

        <CommitGitHub apiCommit={apiCommit}></CommitGitHub>

        <Link href={api.html_url} target="_blank" className="removeUnderline">
          <Box display="flex" justifyContent="right" m={1}>
            <Button color="secondary" size="small" variant="text">
              Open repository
            </Button>
          </Box>
        </Link>
      </Card>
    </Box>
  );
}
