'use client';
import Cell from './component/cell'
import { useEffect, useState } from 'react'

const winningcombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
export default function Home() {
  const [cells, setcell] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setgo] = useState("circle");
  const [winningmessage, setwinningmessage] = useState("");

  useEffect(() => {
    winningcombos.forEach((combo) => {
      const winningcircle = combo.every((cell) => cells[cell] === 'circle');
      const winningcross = combo.every((cell) => cells[cell] === 'cross');
      if (winningcircle) {
        setwinningmessage("circle wins!");
      } else if (winningcross) {
        setwinningmessage("cross wins!");

      }
    })
  }, [cells, winningmessage])
  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningmessage) {
      setwinningmessage("draw");
    }
  }, [cells, winningmessage]);
  useEffect(() => {
    if (winningmessage || winningmessage === "draw") {
      setTimeout(() => {
        setcell(["", "", "", "", "", "", "", "", ""]);
        setgo("circle");
        setwinningmessage("");
      }, 2000);
    }
  }, [winningmessage]);

  return (
    <main className='container'>
      <div className='gameboard'>
        {cells.map((cell, index) => (
          <Cell
            id={index}
            key={index}
            go={go}
            setgo={setgo}
            cells={cells}
            setcell={setcell}
            cell={cell}
            winningmessage={winningmessage} />
        ))}
      </div>
      <div>{winningmessage}</div>
      {!winningmessage && <div>{`set ${go} turn`}</div>}
    </main>
  )
}
