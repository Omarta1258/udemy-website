import React, { useState } from "react";
import { transformSkills } from "../../dummyData";
import "./TransformSkills.css";

export default function TransformSkills() {
  const pageSize = 3;
  const total = transformSkills.skills.length;
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    const nextIndex = startIndex + pageSize;
    if (nextIndex >= total) {
      setStartIndex(0);
    } else {
      setStartIndex(nextIndex);
    }
  };

  const visible = transformSkills.skills.slice(
    startIndex,
    Math.min(startIndex + pageSize, total)
  );

  return (
    <section className="transform-wrapper">
      {/* TEXT HEADER */}
      <div className="transform-header">
        <h2>{transformSkills.title}</h2>
        <p>{transformSkills.subtitle}</p>
      </div>

      {/* CAROUSEL */}
      <div className="transform-carousel">
        <div className="transform-grid">
          {visible.map((skill, index) => (
            <div className="transform-card" key={startIndex + index}>
              <img
                src={skill.image}
                alt={skill.title}
                className="transform-img"
              />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Right arrow button shows the next set of cards */}
        {total > pageSize && (
          <button
            className="transform-next"
            aria-label="Show more skills"
            onClick={next}
          >
            ➜
          </button>
        )}
      </div>
    </section>
  );
}
