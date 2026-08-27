// Filho de App. Recebe a lista de integrantes por props.
function Equipe({ equipe }) {
  return (
    <section id="equipe" className="secao secao--alt">
      <h2 className="secao__titulo">Nossa Equipe</h2>
      <p className="secao__intro">Turma 1ESPU — Engenharia de Software, FIAP. Challenge FIAP x JOVI 2026.</p>

      <div className="grade-equipe">
        {equipe.map((pessoa) => (
          <article className="cartao-integrante" key={pessoa.rm}>
            <h3>{pessoa.nome}</h3>
            <p className="cartao-integrante__rm">{pessoa.rm}</p>
            <p className="cartao-integrante__funcao">{pessoa.funcao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Equipe
