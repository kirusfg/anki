import { useState } from "react";

import "./styles/Card.css";

const Card = ({ id, title, category, definition, mode, handleDelete }) => {
  const [visible, setVisibility] = useState(false);

  if (mode === "learn")
    return (
      <div className="Card panel" onClick={() => setVisibility(!visible)}>
        <h2>{title}</h2>
        <span>{category}</span>

        {visible ? <p>{definition}</p> : <h4>Tap to reveal</h4>}
      </div>
    );

  if (mode === "edit")
    return (
      <div className="Card panel">
        <h2>{title}</h2>
        <span>{category}</span>
        <p>{definition}</p>

        <button
          className="btn btn-error"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    );
};

export default Card;
