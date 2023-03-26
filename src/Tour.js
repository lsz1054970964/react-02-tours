import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"></img>
      <span className="tour-price">${price}</span>

      <p className="tour-info">
        <h4 className="tour-info">{name}</h4>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button
          type="button"
          className="info-button"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "show less" : "read more"}
        </button>
      </p>
      <button
        type="button"
        className="delete-btn"
        onClick={() => removeTours(id)}
      >
        not interested
      </button>
    </article>
  );
};

export default Tour;
