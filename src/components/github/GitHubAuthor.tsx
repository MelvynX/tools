/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import GitHubAuthorInformation from "./GitHubAuthorInformation";
import GitHubAuthorFollow from "./GitHubAuthorFollow";

type TypeGitHubAuthor = {
  api: any;
};

type GithuhAuthorType = {
  login: string;
  company: string;
  avatar_url: string;
  location: string;
  followers: number;
  following: number;
};

export default function GitHubAuthor({ api }: TypeGitHubAuthor) {
  const [author, setAuthor] = useState<GithuhAuthorType>();
  const [loading, setLoading] = useState<Boolean>(false);
  console.log(api);
  const findApiAuthor = () => {
    let headers = new Headers();

    const username = "melvynx";
    const key = "cb15fc5496778827637f265238600794d28f3e07";

    headers.set("Authorization", "Basic " + btoa(username + ":" + key));

    setLoading(true);
    fetch(api[0].owner.url, {
      method: "GET",
      headers: headers
      //credentials: 'user:passwd'
    })
      .then(function(reponse) {
        if (reponse.status !== 200) {
          console.warn("The api have problem.");
          return;
        }

        reponse.json().then(function(author) {
          console.log(author);
          setAuthor(author);
          return;
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!author && !loading && api.length > 1) {
      findApiAuthor();
    }
  }, [author, loading, api]);

  return (
    <Box m={2}>
      {author ? (
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width={100} mr={4} height={100} border={2} borderColor="primary">
              <img
                src={author.avatar_url}
                width={100}
                height={100}
                alt={"profil picture of " + author.login}
              />
            </Box>
            <Typography color="textSecondary" variant="h3">
              {author.login}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={3}>
            <GitHubAuthorInformation label="Company">{author.company}</GitHubAuthorInformation>

            <GitHubAuthorInformation label="Location">{author.location}</GitHubAuthorInformation>

            <GitHubAuthorFollow followers={author.followers} following={author.following} />
          </Box>
        </Box>
      ) : (
        <Box m={5}>"GitHub api has problem."</Box>
      )}
    </Box>
  );
}