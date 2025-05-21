import React from "react";
import styles from "./Card.module.css";

const InfoCard = ({ title = "(No Title)", content, author = "Annymous" }) => {
  console.log("styles", styles);
  return (
    <div className="{styles.card}">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author : {author}</p>
    </div>
  );
};

export default InfoCard;
