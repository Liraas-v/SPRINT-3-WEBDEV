// Filho de App. Recebe a lista de imagens por props e renderiza as
// capturas de tela do protótipo navegável da Sprint 2.
function Galeria({ imagens }) {
  return (
    <section id="galeria" className="secao">
      <h2 className="secao__titulo">Galeria</h2>
      <p className="secao__intro">
        Capturas de tela do protótipo navegável do JoviLens, construído na Sprint 2.
      </p>

      <div className="grade-galeria">
        {imagens.map((imagem) => (
          <figure className="cartao-imagem" key={imagem.arquivo}>
            <img src={imagem.arquivo} alt={imagem.legenda} />
            <figcaption>{imagem.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Galeria
