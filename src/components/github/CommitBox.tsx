import React, { useState, useEffect } from "react";
import { Box, Link, Typography } from "@material-ui/core";

type TypeCommitBox = {
  value: any;
  index: number;
};

export default function CommitBox({ value, index }: TypeCommitBox) {
  const [htmlUrl, setHtmlUrl] = useState<string>("");

  const findLinkAPI = () => {
    let urlHTMLURL = "";
    let headers = new Headers();
    const username = "melvynx";
    const key = "d09dbf81caeeaeb7e59ba874f8e809ddcf912c35";

    headers.set("Authorization", "Basic " + btoa(username + ":" + key));

    fetch(value.url, {
      method: "GET",
      headers: headers
      //credentials: 'user:passwd'
    }).then(function(reponse) {
      if (reponse.status !== 200) {
        console.log("error, commit doesn't load.");
        return "error";
      }
      reponse.json().then(function(url) {
        setHtmlUrl(url.html_url);
        return url.html_url;
      });
    });
    return urlHTMLURL;
  };

  useEffect(() => {
    if (htmlUrl.length < 1) {
      findLinkAPI();
    }
  });

  return (
    <Box>
      <Link href={htmlUrl} className="removeUnderline customHoverLink" target="_blank">
        <Box borderBottom={1} borderColor="info" m={1.5} p={0}>
          <Typography noWrap variant="body1" className="customHoverLink">
            {value.commit.message}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
