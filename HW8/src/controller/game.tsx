import { useState } from 'react';
import Board from "../components/custom/Board";
import * as constants from '../data/constants';
import React, { FC, ReactElement } from 'react';
import { SquareValue } from '../data/types';

const Game: React.FC = () => {
    const [history, setHistory] = useState<Array<Array<Array<SquareValue>>>>([Array(3).fill(Array(3).fill(null))]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    const handlePlay = (nextSquares: Array<Array<SquareValue>>): void => {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove: number) : void => {
      setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
      let description: string;
      
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
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  export default Game;