import React, { useState } from 'react';

function FaqPreview() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen1(!isOpen1)}>
      Question... {isOpen1 ? 'Hide' : 'Show'} Answer ↓
      </button>
      {isOpen1 && (
        <div>
          <p>Answer</p>
        </div>
      )}
    </div>
  );
}

export default FaqPreview;