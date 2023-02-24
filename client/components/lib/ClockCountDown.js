import React, { Component } from "react";

class ClockCountDown extends Component {
  timeDiff() {
    const launchDate = new Date(this.props.endsAt);
    const then = launchDate.getTime();
    const now = Date.now();
    const diff = Math.round((then - now) / 1000);
    return diff > 0 ? diff : 0;
  }

  constructor() {
    super();
    this.state = {
      countDown: this.timeDiff(),
    };
    this.bindMany["timeDiff"];
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ countDown: this.timeDiff() });
    }, 1000);
  }

  render() {
    const { countDown } = this.state;
    const { afterLink, afterLabel, extraClass = "", afterClass = "" } = this.props;

    function zeroPad(num) {
      return num < 10 ? "0" + num : num;
    }
    function timeRemained() {
      let days = Math.floor(countDown / (3600 * 24));
      let hours = Math.floor((countDown % (3600 * 24)) / 3600);
      let minutes = Math.floor((countDown % 3600) / 60);
      let seconds = Math.floor(countDown % 60);
      return (
        <div className="countDown"><span className={"VT323 clock"}>
          {days > 0 ? `${days}d | ` : ""}{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span></div>
      );
    }

    return (
      <>
        {countDown !== 0 ? <div className={"overCountDown " + extraClass}>
          The Shadow Market will be online in
          <br /> {timeRemained()}
        </div> : afterLabel ? (
          <div className={afterClass}>
            <a className="button" href={afterLink}>
              {alterLabel}
            </a>
          </div>
        ) : null
        }
      </>
    );
  }
}

export default ClockCountDown;
