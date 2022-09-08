// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
import { Player, ControlBar } from "video-react";

// eslint-disable-next-line no-undef
// const { Container, Row, Col } from "react-bootstrap";

// eslint-disable-next-line no-undef

export default class Home extends Base {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.bindMany(["handleStateChange"]);
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
    this.player.load();
  }

  handleStateChange(state) {
    if (!isNaN(state.duration) && this.state.isLoading) {
      this.setState({
        isLoading: false,
      });
    }
    if (state.currentTime === state.duration) {
      this.player.play();
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className={"videoBg " + (!isLoading ? "nowshow" : "notshow")}>
        <Player
          ref={(player) => {
            this.player = player;
          }}
          autoPlay={true}
          muted={true}
          poster={"https://data.mob.land/assets/MoblandCoverVideo.jpg"}
        >
          <source
            src={"https://data.mob.land/assets/WEBSITE_HomepageBackground.mp4"}
          />

          <ControlBar className="controlbar" />
        </Player>
      </div>
    );
  }
}
