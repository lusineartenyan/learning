import Button from '../ui/Button';
import calculateWinner from '../../controller/calculateWinner';
import * as constants from '../../data/constants';

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
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
        <Button value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Button value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Button value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Button value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Button value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Button value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Button value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Button value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Button value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}