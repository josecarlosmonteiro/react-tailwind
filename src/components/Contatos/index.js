import { useState } from "react";

const Contato = ({ data }) => {
  return (
    <li>
      {data.name}: {data.telefone}
    </li>
  )
}

export default function Contatos() {
  const [list, setList] = useState([
    { id: 1, name: "Monteiro", telefone: '00000-0000' },
    { id: 2, name: "Pam", telefone: '00000-0000' },
    { id: 3, name: "Emanuel", telefone: '00000-0000' },
  ]);

  const handleNewContact = () => setList((state) => [...state, { id: 4, name: "Novo", telefone: "12039182039" }])

  return (
    <div>
      <button onClick={handleNewContact}>Add contato</button>
      <ul>
        {
          list.map(contato => <Contato key={contato.id} data={contato} />)
        }
      </ul>
    </div>
  )
}