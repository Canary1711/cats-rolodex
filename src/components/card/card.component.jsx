import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.cats.id}?set=set4&size=180x180`}
      alt="cat-actually"
    />
    <h2> {props.cats.name}</h2>
    <p>{props.cats.email}</p>
  </div>
);
