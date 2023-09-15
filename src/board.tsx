import React, { useState, useEffect } from 'react';

interface BoardProps {
  size: number;
}

const Board: React.FC<BoardProps> = ({ size }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: 1, y: 1, value: 1 });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (document.activeElement !== document.getElementById('input')) {
      const direction = e.key;
      const { x, y } = currentPosition;

      if (direction === 'ArrowUp' && x > 1) {
        setCurrentPosition({ x: x - 1, y, value: 1 });
      } else if (direction === 'ArrowDown' && x < size) {
        setCurrentPosition({ x: x + 1, y, value: 1 });
      } else if (direction === 'ArrowLeft' && y > 1) {
        setCurrentPosition({ x, y: y - 1, value: 1 });
      } else if (direction === 'ArrowRight' && y < size) {
        setCurrentPosition({ x, y: y + 1, value: 1 });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPosition]);

  const square = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const position = `${i + 1} / ${j + 1}`;
      const value = i === currentPosition.x - 1 && j === currentPosition.y - 1 ? 1 : 0;
      const className = value === 1 ? 'red' : '';

      square.push(
        <div
          key={i * size + j}
          className={`square ${className}`}
          style={{ gridArea: position }}
        ></div>
      );
    }
  }

  return (
    <div className="board-container">
      <div className="board">{square}</div>
    </div>
  );
};

export default Board;