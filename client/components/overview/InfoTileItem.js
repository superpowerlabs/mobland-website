import React from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";

function InfoTileItem({ cls = "", alt, title, img, description }) {
  return (
    <div component="main" className={"info-tile-base"}>
      <Card>
        <CardMedia component="img" alt={alt || title} image={img} />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignContent: "left",
              justifyContent: "left",
              mb: 2,
            }}
          >
            <div className={"info-tile-title bold"}>{title.toUpperCase()}</div>
          </Box>
          <ul style={{ paddingLeft: 0 }}>
            <Typography
              variant="subtitle1"
              className={"info-tile-description light"}
            >
              {description}
            </Typography>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoTileItem;
