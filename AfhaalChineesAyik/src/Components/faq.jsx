import React, { useState } from 'react';
import './faq.css'; // Import the CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'Question 1?', answer: 'Answer 1' },
    { question: 'Question 2?', answer: 'Answer 2' },
    { question: 'Question 3?', answer: 'Answer 3' },
    { question: 'Question 4?', answer: 'Answer 4' },
    { question: 'Question 5?', answer: 'Answer 5' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
        <h1>Veelgestelde vragen</h1>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => handleClick(index)} className="faq-question">{item.question}</h3>
          <p className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;