import React from "react";
import "./WhyUs.css";
import {
  FaTshirt,
  FaLayerGroup,
  FaStopwatch,
  FaPalette,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaUsers
} from "react-icons/fa";

const data = [
  {
    icon: <FaTshirt />,
    title: "100% Customization",
    text: "Any color, any design – fully customizable with no extra cost."
  },
  {
    icon: <FaLayerGroup />,
    title: "Low Minimums",
    text: "No bulk orders required. Start with as low as 12 pieces."
  },
  {
    icon: <FaStopwatch />,
    title: "Fast Turnaround",
    text: "Quick production with rush delivery options available."
  },
  {
    icon: <FaPalette />,
    title: "Accurate Colors",
    text: "EPSON technology ensures sharp and accurate colors."
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    text: "Premium fabric, strong stitching & strict quality checks."
  },
  {
    icon: <FaTruck />,
    title: "On-Time Delivery",
    text: "We value deadlines and ensure timely order dispatch."
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    text: "Friendly support team to assist you at every step."
  },
  {
    icon: <FaUsers />,
    title: "Trusted by Teams",
    text: "Serving clubs, schools & corporate teams nationwide."
  }
];

const WhyUs = () => {
  return (
    <section className="whyus">
      <h3>WHY US</h3>
      <h2>
        Dedicated to Deliver Quality Products <br />
        with Amazing Designs
      </h2>

      <div className="whyus-grid">
        {data.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
