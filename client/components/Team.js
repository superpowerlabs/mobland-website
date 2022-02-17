// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
import TeamMember from "./TeamMember";
import team from "../data/team.json";
import advisors from "../data/advisors.json";
import Masonry from "react-masonry-component";
// eslint-disable-next-line no-undef
const { Row, Col } = ReactBootstrap;

// eslint-disable-next-line no-undef

export default class Team extends Base {
  constructor(props) {
    super(props);

    this.state = {
      // loaded: false,
    };

    // this.bindMany(["onImageLoad"]);
  }

  // onImageLoad() {
  //   this.setTimeout(() => {
  //     this.setState({
  //       loaded: true,
  //     });
  //   }, 1000); //7000);
  // }

  componentDidMount() {
    this.setStore({
      loaded: true,
    });
  }

  getTeamMembers() {
    const divs = [];
    for (let i = 0; i < team.length; i++) {
      let { name, img, job, role } = team[i];
      divs.push(
        <TeamMember
          key={"member" + i}
          Store={this.Store}
          setStore={this.setStore}
          name={name}
          job={job}
          img={img}
          role={role}
        />
      );
    }
    return divs;
  }

  getAdvisors() {
    const divs = [];
    for (let i = 0; i < advisors.length; i++) {
      let { name, img, role } = advisors[i];
      divs.push(
        <TeamMember
          key={"member" + (i + 10)}
          Store={this.Store}
          setStore={this.setStore}
          name={name}
          img={img}
          role={role}
        />
      );
    }
    return divs;
  }

  render() {
    // const { loaded } = this.state;

    return (
      <div style={{ marginTop: this.isMobile() ? 0 : 78 }}>
        <Row>
          <Col className={"titleLeft"}>
            <div className={"image"}>
              <img src={"/images/team-top.png"} style={{ width: 100 }} />
            </div>
            Team
          </Col>
        </Row>
        <div className={"masonryContainer"}>
          <Masonry
            className={"teamContainer"} // default ''
          >
            {this.getTeamMembers()}
          </Masonry>
        </div>

        <Row>
          <Col className={"titleLeft"}>
            <div className={"image"}>
              <img src={"/images/team-top.png"} style={{ width: 100 }} />
            </div>
            Advisors
          </Col>
        </Row>
        <div className={"masonryContainer"}>
          <Masonry
            className={"teamContainer"} // default ''
          >
            {this.getAdvisors()}
          </Masonry>
        </div>
      </div>
    );
  }
}
