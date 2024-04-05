import React, { useState } from 'react';
import './faq.css'; // Import the CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'Hoe kan ik betalen?', answer: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
    { question: 'Bezorgen jullie?', answer: 'Ja, We bezorgen in de regio: Beverwijk, Heemskerk, Velsen-Noord' },
    { question: 'Waarom nemen jullie de telefoon niet op?', answer: '' },
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