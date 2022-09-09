import React from "react";
import Base from "./Base";

// eslint-disable-next-line no-undef
import { Container, Row, Col } from "react-bootstrap";

export default class LoadingApp extends Base {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <p className="centered" style={{ paddingTop: 160 }}>
              <img src="/images/white-spinner.svg" />
            </p>
            <p className="centered largerp" style={{ paddingBottom: 160 }}>
              {this.props.message}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
