import React, { useState } from 'react';

function FaqPreview({ question, answer }) {
  const [isOpen1, setIsOpen1] = useState(false);
  

  return (
    <div className="App">
      <button onClick={() => setIsOpen1(!isOpen1)}>
      {isOpen1 ? '↑' : '↓'} {question}
      </button>
      {isOpen1 && (
        <div>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FaqPreview;