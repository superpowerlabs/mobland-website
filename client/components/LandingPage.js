// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
import Home from "./Home";

// eslint-disable-next-line no-undef
// const { Container, Row, Col } = ReactBootstrap;

// eslint-disable-next-line no-undef

export default class LandingPage extends Base {
  constructor(props) {
    super(props);

    this.bindMany(["onImageLoad"]);
  }

  onImageLoad() {
    this.setTimeout(
      () => {
        this.setStore({
          loaded: true,
        });
      },
      // 1000
      9000
    );
  }

  componentDidMount() {}

  render() {
    const { loaded } = this.Store;

    return (
      <div style={{ width: "100%" }}>
        {loaded ? (
          <Home />
        ) : (
          <div className={"allPage"} style={{ height: window.innerHeight }}>
            <img
              src={window.location.origin + "/images/loading-animation.gif"}
              alt={"Loading animation"}
              style={{ width: "100%" }}
              onLoad={this.onImageLoad}
            />
          </div>
        )}
      </div>
    );
  }
}
