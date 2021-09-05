import React, { useState } from "react";
import LeftContent from "../leftcontent/leftcontent";
import RightContent from "../rightcontent/rightcontent";
import MiddleContent from "../middleContent/middlecontent";

const Maincontent = () => {
  const [thingsTodo, setThingstodo] = useState([
    { topic: "Internal I", daysRemaining: 7 },
    { topic: "Quiz | Week 7", daysRemaining: 7 },
    { topic: "Quiz | Week 3", daysRemaining: 7 },
    { topic: "VARK", daysRemaining: 7 },
    { topic: "ILS", daysRemaining: 7 },
    { topic: "Discussion week-4", daysRemaining: 7 },
  ]);
  const [courseModule, setCourseModule] = useState([
    { points: 20, achievement: "Course module viewed", time: 1 },
    { points: 20, achievement: "Course module viewed", time: 1 },
    { points: 40, achievement: "Course module completed", time: 2 },
  ]);
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-4 col-12">
          <LeftContent thingsTodo={thingsTodo} />
        </div>
        <div className="col-lg-6 col-sm-8 col-12">
          <MiddleContent />
        </div>
        <div className="col-lg-3 d-lg-block d-none">
          <RightContent courseModule={courseModule} />
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
