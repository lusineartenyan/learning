import Button from '../ui/Button';
import calculateWinner from '../../controller/calculateWinner';
import * as constants from '../../data/constants';
import React, { FC, ReactElement } from 'react';
import { SquareValue } from '../../data/types'

interface BoardProps {
  xIsNext: boolean;
  squares: Array<Array<SquareValue>>;
  onPlay(nextSquares: Array<Array<SquareValue>>): void
}

const Board: React.FC<BoardProps> = props => {
  function handleClick(i: number, j: number) {
    if (calculateWinner(props.squares) || props.squares[i][j]) {
      return;
    }

    const nextSquares = JSON.parse(JSON.stringify(props.squares.slice()));
    nextSquares[i][j] = props.xIsNext ? 'X' : 'O'
    props.onPlay(nextSquares);
  }

  const winner = calculateWinner(props.squares);

  let status: string;
  if (winner) {
    status = constants.Winner + winner;
  } else {
    status = constants.Next + (props.xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map( index => (
        <div className="board-row">
        {[0, 1, 2].map( innerIndex => (
          <Button value={props.squares[index][innerIndex]} onSquareClick={() => handleClick(index, innerIndex)} />
        ))}
        </div>
      ))}
    </>
  );
}

export default Board;