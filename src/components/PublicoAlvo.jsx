// Filho de App. Recebe os contextos de uso por props.
function PublicoAlvo({ contextos }) {
  return (
    <section id="publico" className="secao secao--alt">
      <h2 className="secao__titulo">Público-Alvo</h2>
      <p className="secao__intro">
        O JoviLens foi desenhado para o estudante universitário de 18 a 25 anos que usa o celular
        como principal ferramenta de registro do dia a dia acadêmico e não quer perder tempo com
        configuração de câmera.
      </p>

      <div className="grade-publico">
        <article className="cartao cartao--persona">
          <h3>Quem é</h3>
          <p>
            Estudante de graduação em tempo integral, com o celular sempre à mão entre aulas,
            trabalhos em grupo e a vida no campus. Fotografa muito, edita pouco e quer que a foto
            saia certa de primeira.
          </p>
        </article>

        {contextos.map((contexto) => (
          <article className="cartao" key={contexto.titulo}>
            <h3>{contexto.titulo}</h3>
            <p>{contexto.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PublicoAlvo
