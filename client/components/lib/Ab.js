// eslint-disable-next-line no-undef
import React from "react";
import PropTypes from "prop-types";

export default class Ab extends React.Component {
  render() {
    const { link, label, onClick, title } = this.props;
    if (link)
      return (
        <a
          rel={"noreferrer"}
          title={title}
          href={link}
          target="_blank"
          className={this.props.className || ""}
        >
          {label}
        </a>
      );
    else
      return (
        <span
          title={title}
          className={"command " + (this.props.className || "")}
          onClick={onClick}
        >
          {label}
        </span>
      );
  }
}

Ab.propTypes = {
  link: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
