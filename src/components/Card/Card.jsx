import './Card.css'

// O Card recebe dados via props (desestruturadas direto nos parâmetros)
function Card({ titulo, descricao, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  )
}

export default Card
