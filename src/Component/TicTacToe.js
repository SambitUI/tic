import React, { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const renderBtn = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };
  const handleClick = (index) => {
    if (board[index] != null) {
      return;
    }
    console.log(index, "click");
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "0";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };
  const checkWinner = () => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return combination[i];
      }
    }
    return null;
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderBtn(0)}
          {renderBtn(1)}
          {renderBtn(2)}
        </div>
        <div className="board-row">
          {renderBtn(3)}
          {renderBtn(4)}
          {renderBtn(5)}
        </div>
        <div className="board-row">
          {renderBtn(6)}
          {renderBtn(7)}
          {renderBtn(8)}
        </div>
      </div>
      <button onClick={handleReset}>Reset</button>
      {winner && <div>{winner} is Winner Of This Game Is</div>}
    </>
  );
}
