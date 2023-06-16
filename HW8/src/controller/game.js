import { useState } from 'react';
import Board from "../components/custom/Board";
import * as constants from '../data/constants';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = constants.Move + move;
      } else {
        description = constants.Start;
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className="game">
        {console.log(currentSquares, currentMove)}
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }