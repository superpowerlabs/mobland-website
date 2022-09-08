// eslint-disable-next-line no-undef
import React from "react";
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
