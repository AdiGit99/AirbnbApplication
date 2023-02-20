import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./accordion.scss";

const Accordion = ({ title, content, index, handleClick, open }) => {
  return (
    <div className="accordion-item" key={title}>
      <div className="accordion-header" onClick={() => handleClick(index)}>
        <div className="accordion-title">{title}</div>
        <div className="accordion-button">
          {open ? (
            <FontAwesomeIcon className="accordion-icon" icon={faMinus} />
          ) : (
            <FontAwesomeIcon className="accordion-icon" icon={faPlus} />
          )}
        </div>
      </div>
      {open && (
        <div className="accordion-content" key={title}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
