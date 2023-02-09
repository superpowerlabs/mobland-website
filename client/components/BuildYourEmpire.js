import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class BuildYourEmpire extends Component {

  timeDiff() {
    const launchDate = new Date("2023-02-13T02:00:00.000Z")
    const then = launchDate.getTime();
    const now = Date.now();
    const diff = Math.round((then - now)/1000);
    return (diff > 0 ? diff : 0);
  }


  constructor() {
    super();
    this.state = {
      countDown: this.timeDiff()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({countDown: this.timeDiff()});
    }, 1000);
  }

  render() {
    const {countDown } = this.state;

    function timeRemained() {
      let days = Math.floor(countDown / (3600 * 24));
      let hours = Math.floor((countDown % (3600 * 24)) / 3600);
      let minutes = Math.floor((countDown % 3600) / 60);
      let seconds = Math.floor(countDown % 60);
      return (
        <div className="countDown">
          {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
        </div>
      );
    }

    return (
      <div
        style={{
          borderTop: "#404143 solid",
          borderBottom: "#404143 solid",
          backgroundImage: 'url("/images/woodland-bg.jpg")',
          // zIndex: "1",
          position: "relative",
          // clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)"
        }}
      >
        <Grid container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={5}>
            <Grid item xs={12} sm={12}>
              <div className="title">BUILD YOUR EMPIRE </div>
            </Grid>
            <Grid item xs={12} sm={12}>
              <p className="textSub">
                Own TURF. Grow BUD. Run MOBLAND. <br />
                <br /> With ground-breaking cross-chain functionality and headed
                up by Chief Grow Officers, Snoop Dogg and Champ Medici, we’re
                proud to announce the{" "}
                <span style={{ color: "#ffee03", fontWeight: "bold" }}>
                  SHADOW MARKET
                </span>
                . Stake SEED, grow digital weed and defend your territory from
                other players and mercenaries!{" "}
              </p>
            </Grid>
            <Grid item xs={12} sm={12}>
              { countDown === 0 ? <div className="empireButtonDiv">
                <a className="button" href="https://shadowmarket.mob.land">
                  SHADOW MARKET
                </a>
              </div> : <div style={{height: 120}}>The Shadow Market will be online in<br/> {timeRemained()}</div> }
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={"overFarm"}>
            <img
              alt={"Farm"}
              src={"/images/farm-night.png"}
              className="farmImage"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BuildYourEmpire;
