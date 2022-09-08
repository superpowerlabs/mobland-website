import Base from "./Base";
import React from "react";

// eslint-disable-next-line no-undef
import { Container } from "react-bootstrap";

class Error404 extends Base {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ marginTop: 100 }}>
        <div className={"noTokens m0Auto"}>
          <p>404, page not found :-(</p>
          {this.Store.poder ? <p>More or less...</p> : null}
        </div>
      </Container>
    );
  }
}

export default Error404;
