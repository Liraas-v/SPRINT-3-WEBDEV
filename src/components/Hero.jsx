// Filho de App. Mostra a última detecção simulada e dispara uma nova
// simulação pelo callback recebido por props. A lógica de Math fica em
// utils/simulador.js e o resultado é guardado no estado do App.
function Hero({ ultimaDeteccao, aoSimular }) {
  return (
    <section id="topo" className="hero">
      <div className="hero__grid">
        <div className="hero__texto">
          <p className="etiqueta">FIAP x JOVI Mobile · Challenge 2026 · Turma 1ESPU</p>
          <h1>A câmera que pensa por você.</h1>
          <p className="hero__sub">
            O JoviLens lê o contexto da cena — lousa, documento, rosto, ambiente escuro — em cerca
            de 1,5 segundo e ajusta a câmera sozinho. A IA sugere, você decide. Tudo roda no
            aparelho, sem enviar nenhum dado para fora.
          </p>
          <dl className="hero__numeros">
            <div>
              <dt>Modos de câmera</dt>
              <dd>12</dd>
            </div>
            <div>
              <dt>Detecção de cena</dt>
              <dd>~1,5s</dd>
            </div>
            <div>
              <dt>Dados enviados</dt>
              <dd>0</dd>
            </div>
          </dl>
        </div>

        <div className="hero__simulador">
          <h2>Simulador de detecção</h2>
          {ultimaDeteccao ? (
            <p className="hero__resultado">
              Modo <strong>{ultimaDeteccao.modo}</strong> detectado ({ultimaDeteccao.confianca}%) em{' '}
              {ultimaDeteccao.tempoSegundos}s
            </p>
          ) : (
            <p className="hero__resultado">Nenhuma simulação ainda.</p>
          )}
          <button type="button" className="botao botao--primario" onClick={aoSimular}>
            Simular detecção
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
