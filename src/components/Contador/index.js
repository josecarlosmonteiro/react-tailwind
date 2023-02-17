import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const handleContador = (value) => setContador(contador + value);

  return (
    <div>
      <div>Contagem: {contador}</div>
      <div>
        <button onClick={() => handleContador(-50)}>-50</button>
        <button onClick={() => handleContador(-10)}>-10</button>
        <button onClick={() => handleContador(-1)}>-1</button>
        <button onClick={() => handleContador(1)}>+1</button>
        <button onClick={() => handleContador(10)}>+10</button>
        <button onClick={() => handleContador(50)}>+50</button>
      </div>
    </div>
  )
}