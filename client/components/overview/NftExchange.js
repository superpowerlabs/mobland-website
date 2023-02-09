import * as React from "react";
import { Link } from "react-router-dom";
import Title from "../tile/Title";
import PropTypes from "prop-types";

function NftExchange({ title = "" }) {
  return (
    <div>
      {title ? <Title title={title} upperCase={false} /> : null}
      <div className={"centered"}>
        Look at{" "}
        <Link to={"/assetsguide"}>
          <span className={"yellow"}>Assets</span>{" "}
        </Link>{" "}
        to see where to get them.
      </div>
    </div>
  );
}

NftExchange.propTypes = {
  title: PropTypes.string,
};

export default NftExchange;
