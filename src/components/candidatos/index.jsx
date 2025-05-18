import React from "react"
import { useState } from "react"
import "./index.css"



const candidatos = [
  { id: 1, nome: "Maria Nascimento", cargo: "Dev Front-end", foto: "./public/pessoa1.jpg" },
  { id: 2, nome: "Jhon Wick", cargo: "Analista de Dados", foto: "./public/pessoa2.jpg" },
  { id: 3, nome: "Elon Musk", cargo: "UX Designer", foto: "./public/assets/pessoa3.jpg" },
  { id: 4, nome: "Luisa (Magazine Luisa)", cargo: "Analista de Negócios", foto: "./public/pessoa4.jpg" },
  { id: 5, nome: "Cachorro Chupetão", cargo: "Dev Back-end", foto: "./public/pessoa5.jpg" },
]

export default function Candidatos() {
  const [indice, setIndice] = useState(0)
  const [aceitos, setAceitos] = useState([])
  const [recusados, setRecusados] = useState([])

  function avaliar(acao) {
    const pessoa = candidatos[indice]
    if (acao === "aceitar") setAceitos([...aceitos, pessoa])
    else setRecusados([...recusados, pessoa])

    setIndice(indice + 1)
  }

  if (indice >= candidatos.length) {
    return (
      
  <>      
      <div className="container">
      <img src="./public/logo ch.png" alt="logo" />
        <h1>Resultado da Seleção - CodeHelp</h1>

        <h2>Aceitos:</h2>
        {aceitos.length === 0 ? <p>Nenhum aceito.</p> : (
          <ul>
            {aceitos.map(p => (
              <li key={p.id}>{p.nome} - {p.cargo}</li>
            ))}
          </ul>
        )}

        <h2>Recusados:</h2>
        {recusados.length === 0 ? <p>Nenhum recusado.</p> : (
          <ul>
            {recusados.map(p => (
              <li key={p.id}>{p.nome} - {p.cargo}</li>
            ))}
          </ul>
        )}
      </div>
  </>
    )
  }

  const pessoa = candidatos[indice]

  return (
  <>  
    <div className="container">
      <img src="./public/logo ch.png" alt="logo" />
      <h1>Seleção - CodeHelp</h1>
      <img src={pessoa.foto} alt={pessoa.nome} className="avatar" />
      <h2>{pessoa.nome}</h2>
      <p>{pessoa.cargo}</p>

      <button onClick={() => avaliar("aceitar")} className="botao aceitar">Aceitar</button>
      <button onClick={() => avaliar("recusar")} className="botao recusar">Recusar</button>
    </div>
  </>  
  )
}
