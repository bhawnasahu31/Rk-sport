import React, { useEffect } from "react";
import "./ProcessSection.css";

import AOS from "aos";
import "aos/dist/aos.css";
import step1 from './processst.png';
import step2 from "./process6.png";
import step3 from "./process1.png";
import step4 from "./size.png";
import step5 from "./prepress.png";
import step6 from "./process3.png";
import step7 from "./heat.png";
import step8 from "./cut.png";
import step9 from "./quality.png";
import step10 from "./dispatch.png";
const processSteps = [
  {
    title: "Requirement Consultation",
    desc:
      "We begin by understanding your team requirements, branding guidelines, color themes, and performance needs.",
    image: step1,
  },
  {
    title: "Design & Mockup Creation",
    desc:
      "Our designers prepare detailed mockups with logos, names, and numbers for your approval.",
    image: step2,
  },
  {
    title: "Fabric Selection & Testing",
    desc:
      "Choose from performance-tested fabrics optimized for comfort, breathability, and durability.",
    image: step3,
  },
  {
    title: "Size Chart & Fit Confirmation",
    desc:
      "We finalize size charts and fitting standards to ensure perfect sizing across the team.",
    image: step4,
  },
  {
    title: "Pre-Press Color Calibration",
    desc:
      "Color profiles are calibrated to guarantee accurate brand colors in final production.",
    image: step5,
  },
  {
    title: "Digital & Sublimation Printing",
    desc:
      "Designs are printed using advanced textile printers for sharp and long-lasting output.",
    image: step6,
  },
  {
    title: "Heat Transfer Processing",
    desc:
      "Printed graphics are transferred to fabric using controlled heat and pressure systems.",
    image: step7,
  },
  {
    title: "Precision Cutting",
    desc:
      "Fabric panels are cut using precision cutting methods for pattern accuracy.",
    image: step8,
  },
  {
    title: "Expert Stitching & Assembly",
    desc:
      "Garments are stitched and assembled by skilled technicians with reinforced seams.",
    image: step9,
  },
  {
    title: "Quality Check & Dispatch",
    desc:
      "Every piece goes through strict quality inspection before secure packing and fast delivery.",
    image: step10,
  },
];

const ProcessSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="process-section">

      <div className="process-header">
        <h1>Our Sportswear Manufacturing Process</h1>
        <p>
          From design approval to final delivery — a complete professional
          production workflow
        </p>
      </div>

      <div className="divider"></div>

      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`process-step-row ${
              index % 2 === 0 ? "normal" : "reverse"
            }`}
          >
            <div className="step-text">
              <span className="step-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="step-tag">Production Step</span>

              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>

            <div className="step-image">
              <img src={step.image} alt={step.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
