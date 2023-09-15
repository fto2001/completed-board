import React, { useState, useRef } from 'react';
import './index.css';
import Board from './board';

const App: React.FC = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [newSize, setNewSize] = useState(boardSize);
  const [isChanged, setIsChanged] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = +e.target.value;
    if (!isNaN(newSize) && newSize > 0) {
      setNewSize(newSize);
    }
  };

  const handleApplySize = () => {
    setBoardSize(newSize);
    inputRef.current?.focus();
  };

  return (
    <div className="container">
      <label>
        Size of board:
        <input
          id='input'
          className='input'
          max={30}
          type="number"
          value={newSize}
          onChange={handleInputChange}
          ref={inputRef}
          onBlur={() => setIsChanged(true)}
          onFocus={() => setIsChanged(false)}
        />
      </label>
      <button className="button" onClick={handleApplySize}>Apply</button>
      <div className="legend">
        <p>Use Arrow keys to move the square</p>
      </div>
      <Board key={boardSize} size={boardSize} />
    </div>
  );
};

export default App; 