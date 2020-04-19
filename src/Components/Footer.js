import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import iteLogo from "../Images/ITElogo.jpg";
import Social from "./Social";

export default class Footer extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          position: "fixed",
          left: "0px",
          bottom: "0px",
          width: "100%",
          color: "white",
        }}
      >
        {" "}
        <Row>
          <Col>
            Contact Us RGPV, Airport Bypass
            Road, Gandhi Nagar, Bhopal, Madhya Pradesh -462033 0755 - 2734913,<br/>
            Fax No. : 0755 - 2742006 egov@rgtu.net
          </Col>
          <Col style={{textAlign:"center"}}>
            Powered by ITE BHOPAL{" "}
            <a href="https://www.iteindia.in/">iteindia.in</a>
            <br />
            for any technical support sonulodha@iteindia.in
          </Col>
          <Col>
            <Social style={{ position: "absolute" }} />
          </Col>
        </Row>
      </Navbar>
    );
  }
}
