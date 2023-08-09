import React from "react";
import styles from "../styles/OfferNav.module.scss";

const OfferNav = () => {
  return (
    <div className={styles.container}>
      <span className={styles.offers}>
        Get 10% off. Use coupon code: Rajat10
      </span>
    </div>
  );
};

export default OfferNav;
