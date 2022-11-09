import React from "react";
import About from "./About";
import DataAnalysis from "./DataAnalysis";
import Services from "./Services";
import CaseStudy from "./CaseStudy";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTA from "./CTA";

function HomeMain(props) {
  return (
    <>
      <Services />
      <About />
      <DataAnalysis />
      <CaseStudy />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default HomeMain;
