// Filho de App. Recebe a lista de recursos por props e renderiza um
// cartão por item.
function Solucao({ recursos }) {
  return (
    <section id="solucao" className="secao">
      <h2 className="secao__titulo">A Solução</h2>
      <p className="secao__intro">
        O JOVI Challenge pede para repensar a experiência da câmera do smartphone. O JoviLens resolve
        isso com uma IA de contexto que roda inteiramente no aparelho: reconhece a cena, aplica o
        modo e os parâmetros ideais e mostra o motivo. A decisão final é sempre do usuário.
      </p>

      <div className="grade-recursos">
        {recursos.map((recurso) => (
          <article className="cartao" key={recurso.id}>
            <h3>{recurso.titulo}</h3>
            <p>{recurso.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Solucao
