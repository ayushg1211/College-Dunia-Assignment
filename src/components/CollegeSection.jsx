import React from "react";
import "./CollegeSection.css";

const CollegeSection = ({ props }) => {
  let { name, address, approval, advance, image, featured } = props;
  return (
    <div className="section">
      {/* <div className="featuredCollege">Featured</div> */}
      <div className="topCont">
        <div className="leftCont">
          <div className="imgCont">
            <img src={`logos/${image}`} alt="" />
          </div>
        </div>
        <div className="rightCont">
          <div className="">
            <div className="collegeName">{name}</div>
            <div className="collegeAddress">
              {address}  
              {approval?.applicable === true ? (
                <span> | {approval?.approved_by}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          {advance?.applicable === true ? (
            <div className="courseCont">
              <div className="courseType">
                {advance?.course}
              </div>
              <div className="cutoff">JEE-Advance Cutoff: {advance?.cutoff}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bottomCont">
        <div className="applyCont">
          <span className="arrowCont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="#ffa500"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </span>

          <span>Apply Now</span>
        </div>
        <div className="downloadCont">
          <span className="downloadIconCont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#63E6BE"
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
              />
            </svg>
          </span>
          <span>Download Brochure</span>
        </div>
        <div className="compareCont">
          <input type="checkbox" name="compare" id="compare" />
          <label htmlFor="compare">Add To Compare</label>
        </div>
      </div>
    </div>
  );
};

export default CollegeSection;
