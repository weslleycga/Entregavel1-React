import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Lista from './components/Lista/Lista'

const tecnologias = [
  'JSX',
  'Componentes funcionais',
  'Props',
  'Fragments',
  'Renderização de listas com .map()',
]

function App() {
  return (
    // Fragment <> </>: um único elemento raiz sem criar uma <div> extra no DOM
    <>
      <Header />

      <main className="conteudo">
        <div className="cards">
          <Card
            titulo="JSX"
            descricao="Sintaxe que permite escrever HTML dentro do JavaScript."
            imagem="/react.svg"
          />
          <Card
            titulo="Componentes"
            descricao="Pedaços reutilizáveis da interface, como peças de LEGO."
            imagem="/react.svg"
          />
          <Card
            titulo="Props"
            descricao="Dados que o componente pai envia para o componente filho."
            imagem="/react.svg"
          />
        </div>

        <Lista titulo="O que aprendi nesta aula" itens={tecnologias} />
      </main>

      <Footer />
    </>
  )
}

export default App
