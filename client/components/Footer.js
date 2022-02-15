import Base from "./Base";

export default class Footer extends Base {
  render() {
    // const { loaded } = this.state;

    return (
      <div className={"footer2 centered mb100"}>
        <img
          alt={"logo"}
          src={"https://s3.mob.land/assets/Mobland_Title_Stylized300.png"}
          style={{ width: 160 }}
        />
        <img
          alt={"separator"}
          src={"/images/footer-sep.png"}
          style={{ width: "100%", margin: "30px 0" }}
        />
        Copyright © 2022 Mob Land - All right reserved
      </div>
    );
  }
}
