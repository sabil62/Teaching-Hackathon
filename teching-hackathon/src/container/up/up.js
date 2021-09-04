import React from "react";
import "./up.css";
// import Logo from "../../assets/HCI/0 Ku logo.png";
import Logos from "../../assets/HCI/batches side/VR hero.png";
import { CaretDownOutlined } from "@ant-design/icons";

import Profile from "../../assets/person4.jpg";
import Navbar from "../../components/navbar/navbar";

const Up = () => {
  return (
    <React.Fragment>
      <div className="logo-and-info">
        <img src={Logos} style={{ height: "110px" }} alt="ku logo" />
        <div className="profile-box ">
          <div className="profile-name">
            <div className="profile-name-flex">
              Bob Rise
              <span style={{ width: "5px" }}></span>
              <CaretDownOutlined style={{ fontSize: "1rem" }} />
            </div>
          </div>
          <div className="profile-photo">
            <img src={Profile} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <h1 className="kathmandu-heading">Interactive Online Learning Course</h1>
      <br />
      <Navbar />
    </React.Fragment>
  );
};

export default Up;
