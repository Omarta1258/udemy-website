import React from "react";
import SkillCard from "./SkillCard";
import "./SkillSection.css";

// Import images
import genAI from "../../img2.jpg";
import itImg from "../../img3.jpg";
import dataScienceImg from "../../img4.jpg";

export default function SkillsSection() {
  const categories = [
    { title: "Generative AI", image: genAI },
    { title: "IT certifications", image: itImg },
    { title: "Data Science", image: dataScienceImg },
  ];

  return (
    <section className="skills-wrapper">
      {/* LEFT SIDE */}
      <div className="skills-left">
        <h2>Learn essential career and life skills</h2>
        <p className="skills-subtitle">
          Choose from courses that help you grow professionally and personally.
        </p>
      </div>

      {/* RIGHT SIDE — CARDS */}
      <div className="skills-right">
        {categories.map((cat, index) => (
          <SkillCard key={index} image={cat.image} title={cat.title} />
        ))}
      </div>
    </section>
  );
}
