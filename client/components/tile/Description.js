import React from "react";
import { CircularProgress, Typography } from "@mui/material";

function Line({ line, cls = "" }) {
  return (
    <Typography
      component="li"
      variant="subtitle1"
      align="center"
      className={"tile-description " + (cls || "light")}
    >
      {line}
    </Typography>
  );
}

function Description({ description = [], cls }) {
  return (
    <ul>
      {description.length ? (
        typeof description === "string" ? (
          <Line line={description} cls={cls} />
        ) : (
          description.map((line, index) => (
            <Line line={line} cls={cls} key={"description_" + index} />
          ))
        )
      ) : (
        <CircularProgress />
      )}
    </ul>
  );
}

export default Description;
