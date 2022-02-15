// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
import { Player, ControlBar } from "video-react";

// eslint-disable-next-line no-undef
// const { Container, Row, Col } = ReactBootstrap;

// eslint-disable-next-line no-undef

export default class Home extends Base {
  constructor(props) {
    super(props);
    this.bindMany(["handleStateChange"]);
  }
  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
    this.player.load();
  }

  handleStateChange(state) {
    this.setState({
      player: state,
    });
  }

  render() {
    return (
      <Player
        ref={(player) => {
          this.player = player;
        }}
        autoPlay={true}
        muted={true}
      >
        <source
          src={window.location.origin + "/assets/BackgroundVideoWithGrunge.mp4"}
        />
        <ControlBar className="controlbar" />
      </Player>
    );
  }
}
