import React, { useState } from 'react';


const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  
  return (
    <div style={{ marginTop: 25, marginBottom: 25}}>
      <div className="accordion-button-wrapper">
        <button
          className={`accordion-button ${isExpanded ? 'expanded' : ''}`}
          onClick={toggleAccordion}
        >
          <span className="accordion-text">{question}</span>
          <span className="accordion-icon"></span>
        </button>
      </div>
      {isExpanded && (
        <div className="accordion-body">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
