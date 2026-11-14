import './Lista.css'

// Recebe um array de strings via props e renderiza uma <ul> com .map()
function Lista({ titulo, itens }) {
  return (
    <section className="lista">
      <h2>{titulo}</h2>
      <ul>
        {itens.map((item, indice) => (
          // A prop "key" precisa ser única entre os irmãos.
          // Combinamos o texto com o índice para evitar chaves repetidas.
          <li key={`${item}-${indice}`}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Lista
