import React, { Component } from "react";
import PropTypes from "prop-types";
import Base from "../Base";

class ClockCountDown extends Base {
  constructor(props) {
    super(props);
    this.bindMany([
      "timeDiff"
      ]);
    this.state = {
      countDown: this.timeDiff(),
    };
  }

  timeDiff() {
    const launchDate = new Date(this.props.endsAt);
    const then = launchDate.getTime();
    const now = Date.now();
    const diff = Math.round((then - now) / 1000);
    return diff > 0 ? diff : 0;
  }

  componentDidMount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.setState({ countDown: this.timeDiff() });
    }, 1000);
  }

  render() {
    const { countDown } = this.state;
    const {
      afterLink = "",
      afterLabel = "",
      afterClass = "",
      extraClass = "",
      label = "",
    } = this.props;

    function zeroPad(num) {
      return num < 10 ? "0" + num : num;
    }
    function timeRemained() {
      let days = Math.floor(countDown / (3600 * 24));
      let hours = Math.floor((countDown % (3600 * 24)) / 3600);
      let minutes = Math.floor((countDown % 3600) / 60);
      let seconds = Math.floor(countDown % 60);
      return (
        <div className="countDown">
          <span className={"clock " + extraClass}>
            {days > 0 ? `${days}d - ` : ""}
            {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
          </span>
        </div>
      );
    }

    return (
      <span>
        {countDown !== 0 ? (
          <div className={"overCountDown " + extraClass}>
            {label ? <span>The Shadow Market will be online in
            <br /></span> : null}
             {timeRemained()}
          </div>
        ) : afterLabel ? (
          <div className={afterClass}>
            <a className="button" href={afterLink}>
              {afterLabel}
            </a>
          </div>
        ) : "Cico"}
      </span>
    );
  }
}

ClockCountDown.propTypes = {
  endsAt: PropTypes.string,
  afterLink: PropTypes.string,
  afterLabel: PropTypes.string,
  afterClass: PropTypes.string,
  extraClass: PropTypes.string,
  clockStyle: PropTypes.object,
  downCountStyle: PropTypes.object,
  label: PropTypes.string,
};

export default ClockCountDown;
