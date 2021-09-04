import React, { useState } from "react";

const Maincontent = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-4 col-12">Left Content</div>
        <div className="col-lg-6 col-sm-8 col-12">Middle</div>
        <div className="col-lg-3 d-lg-block d-none">Right</div>
      </div>
    </div>
  );
};

export default Maincontent;
