import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import VC from "../Images/logoUIT.jpg";
import HC from "../Images/HC.jpg";
import SL from "../Images/SL.jpg";
export default class News extends Component {
  render() {
    return (
      <ul className="list-unstyled" style={{ paddingBottom: "40px" }}>
        <Media as="li" style={{ padding: "20px" }}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={VC}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>ABOUT US</h5>
            <p>
              Established in the year 1998, by Madhya Pradesh Vidhan Sabha Act
              13, 1998. Over a sprawling Campus of about 247 acres, the Rajiv
              Gandhi Proudyogiki Vishwavidyalaya is marching towards development
              into a center of excellence in the arena of Technical Education,
              Research and Innovations. Under its umbrella there are 05 UTD's ,
              200 affiliated Engineering Colleges, 98 Pharmacy Colleges, 95 MCA
              Colleges and 04 Architecture Colleges imparting Graduate level
              instructions running around 17 under graduate level courses, 85
              Polytechnic institutions offering diploma courses in emerging and
              conventional disciplines. Situated amidst an aesthetic and hilly
              surrounding, the University is now offering Ph Ds and 11 post.
              Rajiv Gandhi Technical University is truly a picture of
              modernization. With an extensive presence on the internet, Rajiv
              Gandhi Technical University has courses which can suit anyone.
              Courses offered Rajiv Gandhi Technical University offers
              undergraduate and postgraduate full time and online courses.They
              specialize in fields like Management, Forensic Science, Fashion,
              Engineering, Space Sciences, Social Work, Nanotechnology,
              Communication and Pharmacy. Facilities The University has provided
              air-conditioned amphitheatre style classrooms. The Library of
              Rajiv Gandhi Technical University is equipped with books,
              periodicals, national and international journals, CD-ROMS,
              covering all aspects of academic studies and research material.
            </p>
          </Media.Body>
        </Media>

        {/* <Media as="li" style={{ padding: "20px" }}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={HC}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>HEMRAJ SINGH CHAUHAN</h5>
            <p>
              Corporate trainer for Linux, AWS & Openstack Cloud, DevOps,
              Openshift, Cyber Security, CCNA. Training's Head with broad
              experience in student management & IT Security Consultancy at ITE.
              Administration on Enterprise Linux, ITES Solutions, RedHat
              Certified Architect & RedHat Certified Instructor. Consultancy to
              develop Private Cloud, Migration to AWS and other Cloud, setting
              up a Data Centre.
            </p>
          </Media.Body>
        </Media>

        <Media as="li" style={{ padding: "20px" }}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={SL}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>SONU LODHA</h5>
            <p>
              Specialities: Linux Server Administration, Server Hardening,
              Server Troubleshooting, AWS - Architect Assoicate, Ansible,
              DevOps, Certified Ethical Hacker, Forensic Investigation, Routers
              & Switches Management, Expertise in Local & Wide Area Network
              Management, Placement Services.
            </p>
          </Media.Body>
        </Media> */}
      </ul>
    );
  }
}
