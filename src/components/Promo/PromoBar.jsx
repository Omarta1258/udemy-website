import { promoBar } from "../../dummyData";
import "./PromoBar.css";

export default function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-content">
        <h1>
          {promoBar.titleLine1} <br />
          {promoBar.titleLine2} <br />
          {promoBar.price}
        </h1>

        <p>{promoBar.description}</p>
      </div>

      <div className="promo-image">
        <img src={promoBar.image} alt="promo" />
      </div>
    </div>
  );
}
