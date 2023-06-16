import { lines } from '../data/lines';

export default function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i++) {
    for(let j = 0; j < lines[i].length; j++) {
      let [a, b, c] = lines[i]
      const valueA = squares[a[0]][a[1]]
      const valueB = squares[b[0]][b[1]]
      const valueC = squares[c[0]][c[1]]
      if(valueA && valueA == valueB && valueA == valueC) {
        return valueA
      }
    }
  }
  return null;
}