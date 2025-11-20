import React from "react";
import { trustedCompanies } from "../../dummyData";
import "./Trusted.css";

export default function Trusted() {
  return (
    <section className="trusted-wrapper">
      <h2 className="trusted-title">{trustedCompanies.title}</h2>

      <div className="trusted-logos">
        {trustedCompanies.companies.map((company, i) => (
          <img
            key={i}
            src={company.image}
            alt={company.name}
            className="trusted-logo"
          />
        ))}
      </div>
    </section>
  );
}
