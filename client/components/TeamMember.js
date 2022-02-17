// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
// import VideoBg from "./VideoBg";
//
// import investors from "../data/investors.json";
// import partners from "../data/partners.json";
// import HorizontalScroll from "./HorizontalScroll";
//
// import team from "../data/team.json";

// eslint-disable-next-line no-undef
const { Collapse } = ReactBootstrap;

// eslint-disable-next-line no-undef

export default class TeamMember extends Base {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    };

    this.bindMany(["expand", "collapse"]);
  }

  expand() {
    this.setState({
      expand: true,
    });
  }

  collapse() {
    this.setState({
      expand: false,
    });
  }

  componentDidMount() {
    this.setStore({
      loaded: true,
    });
  }

  render() {
    let { name, img, job, role } = this.props;

    return (
      <div className={"teamMemberContainer"}>
        <div
          className={"teamMember"}
          onMouseEnter={job ? this.expand : undefined}
          onMouseLeave={job ? this.collapse : undefined}
        >
          <div className={"memberPicture"}>
            <img src={"/images/team/" + img + ".png"} alt={name} />
          </div>
          <div className={"teamName"}>{name}</div>
          <div className={"teamRole " + (job ? "" : "smaller")}>{role}</div>
          {job ? (
            <Collapse in={false}>
              <div className={"jobPicture"}>
                <img
                  src={"/images/team/" + job + ".png"}
                  alt={"Past experience"}
                />
              </div>
            </Collapse>
          ) : undefined}
        </div>
      </div>
    );
  }
}
