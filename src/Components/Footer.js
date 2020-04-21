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
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          left: "0px",
          bottom: "0px",
          width: "100%",
          color: "white",
        }}
      >
        {" "}
        <Row>
          <Col style={{textAlign:"center",}}>
            Powered by ITE BHOPAL{" "}
            <a href="https://www.iteindia.in/">iteindia.in</a>
            <br />
            for any technical support sonulodha@iteindia.in
          </Col>
        </Row>
      </Navbar>
    );
  }
}
