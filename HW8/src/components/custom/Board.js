import Button from '../ui/Button';
import calculateWinner from '../../controller/calculateWinner';
import * as constants from '../../data/constants';

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i, j) {
    if (calculateWinner(squares) || squares[i][j]) {
      return;
    }
    const nextSquares = JSON.parse(JSON.stringify(squares.slice()));
    if (xIsNext) {
      nextSquares[i][j] = 'X';
    } else {
      nextSquares[i][j] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = constants.Winner + winner;
  } else {
    status = constants.Next + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Button value={squares[0][0]} onSquareClick={() => handleClick(0, 0)} />
        <Button value={squares[0][1]} onSquareClick={() => handleClick(0, 1)} />
        <Button value={squares[0][2]} onSquareClick={() => handleClick(0, 2)} />
      </div>
      <div className="board-row">
        <Button value={squares[1][0]} onSquareClick={() => handleClick(1, 0)} />
        <Button value={squares[1][1]} onSquareClick={() => handleClick(1, 1)} />
        <Button value={squares[1][2]} onSquareClick={() => handleClick(1, 2)} />
      </div>
      <div className="board-row">
        <Button value={squares[2][0]} onSquareClick={() => handleClick(2, 0)} />
        <Button value={squares[2][1]} onSquareClick={() => handleClick(2, 1)} />
        <Button value={squares[2][2]} onSquareClick={() => handleClick(2, 2)} />
      </div>
    </>
  );
}