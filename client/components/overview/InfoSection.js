import React from "react";
import { Card, Grid } from "@mui/material";

function InfoSection({
  title,
  subtitle = "",
  img = null,
  display_img = "left",
  description = "",
  footer = "",
  icons = [],
}) {
  let i = 0;
  return (
    <div component="main" className={"info-section"}>
      {icons.length ? (
        <div>
          <div className="info-section-title">{title}</div>
          <div className="info-section-subtitle">{subtitle}</div>
          <Grid container spacing={0} alignItems="flex-end">
            <Grid item xs={0} sm={2} md={2} />
            {icons.map((icon) => {
              return (
                <Grid key={"icon_" + i++} item xs={12} sm={2} md={2}>
                  <Card className={"sectionCard"}>
                    <div className={"centered"}>
                      <img src={icon.src} alt={icon.title} className="icon" />
                    </div>
                    <div className="info-section-card-title bold">
                      {icon.title}
                    </div>
                  </Card>
                </Grid>
              );
            })}
            <Grid item xs={0} sm={2} md={2} />
          </Grid>
          <div className="info-section-footer light">{footer}</div>
        </div>
      ) : (
        <div>
          <div
            className="info-section-title bold centered"
            style={{ marginBottom: 8 }}
          >
            {title}
          </div>
          {img ? (
            <div
              className={display_img === "left" ? "floatLeft" : "floatRight"}
            >
              <img
                alt={title}
                src={img}
                style={{ height: 160, padding: "0 20px" }}
              />
            </div>
          ) : null}
          <div className={"light bit-smaller"}>
            {description.map((elem) => {
              return <p key={"p_" + i++}>{elem}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoSection;
