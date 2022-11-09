import React from "react";
import DataBg from "../assets/images/robot-1.png";
import "./DataAnalysis.css";

function DataAnalysis(props) {
  return (
    <div>
      <section
        className="data-analysis-section text-white"
        loading="lazy"
        style={{
          backgroundImage: `url(${DataBg})`,
        }}
      >
        <div className="container">
          <div className="data-container">
            <p className="subtitle data-sub">Data Analysis</p>
            <h3 className="title data-title">
              Turn data into data board with smart technology
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              aspernatur vitae dolore delectus modi! Rerum officia quia
              voluptates iusto at ad consectetur adipisci aliquam delectus
              doloribus rem sequi, sapiente consequuntur.
            </p>
            <div className="data-boxes">
              <div className="data-box">
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <div className="data-box-content">
                  <span className="number" data-target="398">
                    0
                  </span>
                  <span className="box-text">Completed projects</span>
                </div>
              </div>
              <div className="data-box">
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <div className="data-box-content">
                  <span className="number" data-target="100">
                    0
                  </span>
                  <span className="box-text">Satisfied clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataAnalysis;
