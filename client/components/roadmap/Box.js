// eslint-disable-next-line no-undef
import React from "react";
import Base from "../Base";
import { Grid } from "@material-ui/core";
import { isMobileOnly } from "react-device-detect";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export default class Box extends Base {
  constructor(props) {
    super(props);
  }

  render() {
    let title = this.props.title;
    let week = this.props.week;
    let date = this.props.date;

    return (
      <div className="roadmapBox">
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid item xs={12}>
              <div className="boxSubTitle">
                {week || <span className={"transparent"}>-</span>}
              </div>
              <div className="boxDate">{date}</div>
            </Grid>
            <Grid item xs={12}>
              <div className="boxTitle">{title}</div>
            </Grid>
            {this.props.content.map((item) => {
              return (
                <div>
                  <Grid item xs={12}>
                    <div className="boxContent">{item}</div>
                  </Grid>
                  <br />
                </div>
              );
            })}
          </Grid>

          <Grid item xs={1} />
        </Grid>
        {isMobileOnly ? null : (
          <div className="centerBottom">
            {" "}
            <div className="cssCircle">
              {" "}
              <div className="cssRectangle" />{" "}
            </div>
          </div>
        )}
      </div>
    );
  }
}
