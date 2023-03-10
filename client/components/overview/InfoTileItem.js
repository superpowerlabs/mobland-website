import React from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";

function InfoTileItem({ cls = "", alt, title, img, description, where }) {
  let i = 0;
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
            <div className={"info-tile-title bold mulish"}>{title}</div>
          </Box>
          <ul style={{ paddingLeft: 0 }}>
            <Typography
              variant="subtitle1"
              className={"info-tile-description light"}
            >
              {description}
            </Typography>
            {where ? (
              <div className="bold mulish">
                <span>Where to get:</span>
                {where.map((icon) => {
                  return (
                    <a href={icon.link} key={"icon" + i++}>
                      {icon.src ? (
                        <CardMedia
                          key={"icon" + i++}
                          style={{
                            width: "5%",
                          }}
                          component="img"
                          image={icon.src}
                        />
                      ) : null}
                      {icon.title ? (
                        <span className={"iconText"}> {icon.title}</span>
                      ) : null}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoTileItem;
