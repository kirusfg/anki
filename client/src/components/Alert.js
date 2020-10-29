import React from "react";

import "./Alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alert = ({ deleteAlert, type, message }) => {
  return (
    <div className={"Alert " + type}>
      <div className="panel">
        <h2>{type}</h2>
        <p>{message}</p>
        <button onClick={() => deleteAlert(null)}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    </div>
  );
};

export default Alert;
