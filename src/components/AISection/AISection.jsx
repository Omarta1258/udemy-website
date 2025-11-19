import React from "react";
import { aiSection } from "../../dummyData";
import "./AISection.css";

export default function AISection() {
  return (
    <section className="ai-wrapper">
      {/* LEFT SIDE */}
      <div className="ai-left">
        <h2>{aiSection.title}</h2>
        <p>{aiSection.description}</p>
        <button className="ai-btn">{aiSection.buttonText}</button>
      </div>

      {/* RIGHT SIDE */}
      <div className="ai-right">
        <img src={aiSection.image} alt="AI Era" className="ai-img" />
      </div>
    </section>
  );
}
