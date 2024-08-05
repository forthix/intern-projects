import React, { useState } from 'react';
import Navbar from './navbar';
import FaqPreview from './faq-preview';
import questionMarkIcon from './question.png';

function FAQ() {

  const [searchTerm, setSearchTerm] = useState('');
  
  //Edit the questions and answers in the array below

  const questions = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    { question: 'Question 4', answer: 'Answer 4' },
    { question: 'Question 5', answer: 'Answer 5' },
    { question: 'Question 6', answer: 'Answer 6' },

  ];

  const filteredQuestions = questions.filter(
    q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) || q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="page-container">
      <div className="hero-head"><Navbar/></div>
      <div className="hero green-background">
        <div className="container">
          <p className="title" style={{color:"#4A4A4A" }}>Frequently Asked Questions</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search for Keywords..."
              style={{ height:"50px", width:"50%" , padding:"1%" , margin:"4%"}}
            />
            <img src={questionMarkIcon} alt="Question Mark" style={{ marginLeft: '10px' , height:"30px", width:"auto"}} />
            <p style={{ marginLeft: '0.5%' , color:"#4A4A4A"}}>Don't see your question?</p> {/* You could either link the icon and text to a pop up input box which is linked to a database which collects the inputted questions or you could link it to an external site where people could submit their questions */}
          </div>
          <div className="faq-container" style={{margin:"4%", marginTop:"1%"}}>
            {filteredQuestions.map((q, index) => (
              <div key={index} className="question">
                <FaqPreview question={q.question} answer={q.answer} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <p className="foot-text">Forthix LLC © 2024 All rights reserved.</p>
      </div>
      </div>
    </>
  );
}

export default FAQ;