import React from "react";
import "./SkillSection.css";
import SkillCard from "./SkillCard";

import { skillCategories } from "../../dummyData";

export default function SkillsSection() {
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
        {skillCategories.map((cat, index) => (
          <SkillCard key={index} image={cat.image} title={cat.title} />
        ))}
      </div>
    </section>
  );
}
