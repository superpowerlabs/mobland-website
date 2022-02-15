// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
// import { Player, ControlBar } from "video-react";

// eslint-disable-next-line no-undef
// const { Container, Row, Col } = ReactBootstrap;

// eslint-disable-next-line no-undef

export default class HorizontalScroll extends Base {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let i = this.props.start;
    return (
      <div>
        <div className={"hcontainer"}>
          {this.props.set.map((item) => {
            let key = "entity" + i++;
            return (
              <div key={key}>
                <a href={item.href} target={"_blank"}>
                  <img className="card" src={`/images/investors/${item.img}`} />
                </a>
                <div className={"centered"}>
                  <a className={"yellowHover"} href={item.href}>
                    {item.name}
                  </a>
                </div>
                {item.company ? (
                  <div className={"centered"}>{item.company}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
