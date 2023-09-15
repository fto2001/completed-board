import React from 'react';

interface SquareProps {
  position: string;
  handleMove: (direction: string) => void;
  x: number;
  y: number;
  value: number;
}

const Square: React.FC<SquareProps> = ({ position, x, y, value }) => {
  return (
    <div
      className={`square ${value === 1 ? 'red' : ''}`}
      style={{ gridArea: position }}
    ></div>
  );
};

export default Square;