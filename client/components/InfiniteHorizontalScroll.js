// eslint-disable-next-line no-undef
import Base from "./Base";
// import Ab from "./lib/Ab";
// import { Player, ControlBar } from "video-react";

// eslint-disable-next-line no-undef
// const { Container, Row, Col } = ReactBootstrap;

function sideScroll(element, direction, speed, distance, step) {
  let scrollAmount = 0;
  var slideTimer = setInterval(() => {
    if (direction === "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

export default class InfiniteHorizontalScroll extends Base {
  constructor(props) {
    super(props);
    this.state = {
      disableScroll: false,
      scrollWidth: 0,
      scrollPos: 1,
      clonesWidth: 0,
    };
    // eslint-disable-next-line no-undef
    this.scrollContainerRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollNext = this.scrollNext.bind(this);
    this.scrollPrev = this.scrollPrev.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.getClonesWidth = this.getClonesWidth.bind(this);
    this.reCalc = this.reCalc.bind(this);
  }

  reCalc() {
    let scrollPos = this.state.scrollPos;
    let scrollWidth = this.scrollContainerRef.current.clientWidth;
    let clonesWidth = this.getClonesWidth();

    if (scrollPos <= 0) {
      scrollPos = 1;
    }
    this.setState({
      scrollPos: scrollPos,
      scrollWidth: scrollWidth,
      clonesWidth: clonesWidth,
    });
  }

  handleScroll(e) {
    const container = e.currentTarget;
    const scrollWidth = container.scrollWidth;
    const clonesWidth = this.getClonesWidth();
    let scrollPos = container.scrollLeft;
    let scrollPosAdd;
    container.clientWidth > clonesWidth
      ? (scrollPosAdd = container.clientWidth)
      : (scrollPosAdd = clonesWidth);

    if (!this.state.disableScroll) {
      if (scrollPos + scrollPosAdd >= scrollWidth) {
        this.setScroll(
          // The math floor value helps smooth out the scroll jump,
          // I don't know why that particular value works, but it does
          // Same goes for the other setScroll call below
          container,
          1 + Math.floor(scrollPosAdd / 12.09)
        );
        this.setState({
          disableScroll: true,
        });
      } else if (scrollPos <= 0) {
        this.setScroll(
          container,
          scrollWidth - clonesWidth - Math.floor(scrollPosAdd / 12.09)
        );
        this.setState({
          disableScroll: true,
        });
      }
    }

    this.setState({
      scrollWidth: container.scrollWidth,
      scrollPos: container.scrollLeft,
    });
  }

  getClonesWidth() {
    const clones = document.getElementsByClassName("is-clone");
    let clonesWidth = 0;
    for (let i = 0; i < clones.length; i++) {
      clonesWidth = clonesWidth + clones[i].clientWidth;
    }
    return clonesWidth;
  }

  setScroll(element, pos) {
    element.scrollLeft = pos;
    this.setState({
      scrollPos: element.scrollLeft,
    });
  }

  scrollNext(e) {
    const container = e.currentTarget.previousSibling;
    sideScroll(container, "right", 10, 272, 10);
  }

  scrollPrev(e) {
    const container = e.currentTarget.nextSibling;
    sideScroll(container, "left", 10, 272, 10);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.disableScroll) {
      window.setTimeout(
        function () {
          this.setState({
            disableScroll: false,
          });
        }.bind(this),
        40
      );
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.reCalc);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.reCalc);
  }

  render() {
    let i = this.props.start;
    return (
      <div className="card-container">
        {/*<div className="scroll scroll-prev" onClick={this.scrollPrev}>*/}
        {/*  <i className="fas fa-chevron-left" />*/}
        {/*</div>*/}
        <div
          ref={this.scrollContainerRef}
          className="scrolling-wrapper"
          onScroll={this.handleScroll}
        >
          {this.props.set.map((item) => {
            let key = "entity" + i++;
            return (
              <div className="card" key={key}>
                <div className="card-img-container">
                  <a href={item.href} target={"_blank"}>
                    <img
                      // className="hcard"
                      src={`/images/investors/${item.img}`}
                    />
                  </a>
                </div>
                <div className="card-text-container">
                  <div className="card-title-block">
                    <div
                      className={" card-title centered"}
                      style={{ paddingTop: 6 }}
                    >
                      <a className={"grey666 yellowHover"} href={item.href}>
                        {item.name}
                      </a>
                    </div>
                    {item.company ? (
                      <div className={" card-subtitlegrey999 centered"}>
                        {item.company}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*<div className="scroll scroll-next" onClick={this.scrollNext}>*/}
        {/*  <i className="fas fa-chevron-right" />*/}
        {/*</div>*/}
      </div>
    );
  }
}
