import React from "react";

export default function SkillCard({ image, title }) {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className="skill-img" />
      <p className="skill-title">{title}</p>
    </div>
  );
}
