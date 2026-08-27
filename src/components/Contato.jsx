import { useState } from 'react'

// Filho de App com estado local próprio: controla se o formulário já foi
// enviado. Não há back-end nesta fase — o envio só troca o estado.
function Contato() {
  const [enviado, setEnviado] = useState(false)

  function aoEnviar(evento) {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contato" className="secao">
      <h2 className="secao__titulo">Contato</h2>
      <p className="secao__intro">Quer saber mais sobre o JoviLens ou falar com a equipe? Deixe uma mensagem.</p>

      <div className="grade-contato">
        {enviado ? (
          <div className="formulario-contato">
            <p>Mensagem registrada. A equipe responde pelos canais ao lado.</p>
            <button type="button" className="botao botao--secundario" onClick={() => setEnviado(false)}>
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form className="formulario-contato" aria-label="Formulário de contato" onSubmit={aoEnviar}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" required />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="voce@email.com" required />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem" required></textarea>

            <button type="submit" className="botao botao--primario">Enviar mensagem</button>
          </form>
        )}

        <address className="informacoes-contato">
          <h3>Outros canais</h3>
          <p>Projeto: JoviLens — Challenge FIAP x JOVI 2026</p>
          <p>Turma: 1ESPU · Engenharia de Software · FIAP</p>
          <p>
            Repositório:{' '}
            <a href="https://github.com/Liraas-v/SPRINT-3-WEBDEV" target="_blank" rel="noopener noreferrer">
              github.com/Liraas-v/SPRINT-3-WEBDEV
            </a>
          </p>
        </address>
      </div>
    </section>
  )
}

export default Contato
