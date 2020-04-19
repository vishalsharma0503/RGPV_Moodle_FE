import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import img1 from "../Images/UIT2.png";
import img2 from "../Images/UIT3.png";
export default class Slider extends Component {
  render() {
    return (
      <Carousel style={{ marginBottom: "60px" }}>
        <Carousel.Item>
          <Image className="d-block w-100" src={img2} alt="R.G.P.V." />
          <DropdownButton
            id="dropdown-basic-button"
            title="Select Department"
            variant="warning"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#555",
              color: "white",
              cursor: "pointer",
              textAlign: "center",
              borderRadius:"5px"
            }}
          >
            <Dropdown.Item href="http://35.193.60.139/cse/" target="_blank">CSE</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/it/" target="_blank">IT</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/ec/" target="_blank">EC</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/ex/" target="_blank">EX</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/ce/" target="_blank">CE</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/au/" target="_blank">AUTOMOBILE</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/mca/" target="_blank">MCA</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/me/" target="_blank">ME</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/pce/" target="_blank">PCE</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/polytechnic/" target="_blank">PLOYTECHNIC</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/shahdol/" target="_blank">SHAHDOL</Dropdown.Item>
            <Dropdown.Item href="http://35.193.60.139/web/" target="_blank">WEB</Dropdown.Item>
          </DropdownButton>
          {/* <Carousel.Caption>
            <h3 style={{ color: "black" }}>RGPV E-LEARNING</h3>
            <p style={{ color: "black" }}>
              Acquire skills that meet your needs
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        {/* <Carousel.Item>
          <Image
            className="d-block w-100"
            src={img1}
            alt="R.G.P.V."
          />

          <Carousel.Caption>
            <h3 style={{color:"black"}}>RGPV E-LEARNING</h3>
            <p style={{color:"black"}}>Making education accessible to each and every individual</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    );
  }
}
