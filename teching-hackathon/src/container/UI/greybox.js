import React, { useState } from "react";
import "./greybox.css";
import { DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";

const Greybox = (props) => {
  const [downContent, setDownContent] = useState(true);

  const onDownContentDisplay = () => {
    setDownContent(true);
  };
  const onDownContentNoDisplay = () => {
    setDownContent(false);
  };

  return (
    <div className="greybox">
      <div className="greybox-up-title">
        <div className="greybox-left-title">
          <img
            src={props.logo}
            style={{ height: "36px", marginRight: "1rem" }}
          />
          {props.title}
        </div>
        <div className="greybox-right-title">
          {!downContent ? (
            <DownSquareOutlined onClick={onDownContentDisplay} />
          ) : (
            <UpSquareOutlined onClick={onDownContentNoDisplay} />
          )}
        </div>
      </div>
      <div style={{ margin: "10px 16px" }}>
        <div className="greybox-line"></div>
        <div className="greybox-line dark"></div>
      </div>
      <div style={{ overflow: "hidden" }}>
        {downContent ? (
          <div className="show-content">{props.children}</div>
        ) : (
          <div className="lost-content">{props.children}</div>
        )}
      </div>
    </div>
  );
};

export default Greybox;
