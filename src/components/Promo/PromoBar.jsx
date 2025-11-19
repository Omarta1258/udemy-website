import image from "../../../src/img1.jpg";
import "./PromoBar.css";

export default function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-content">
        <h1>
          Learn more, spend less — <br />
          Black Friday Sale from <br />
          £279.99
        </h1>
        <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
      </div>
      <div className="promo-image">
        <img src={image} alt="promo" />
      </div>
    </div>
  );
}
