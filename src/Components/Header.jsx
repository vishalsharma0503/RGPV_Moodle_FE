import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Images/logoUIT.jpg"
export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" style={{height:"100px"}}>
        <Navbar.Brand href="https://www.rgpv.ac.in/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <b>RGPV</b>
        </Navbar.Brand>
      </Navbar>
    );
  }
}
