// Filho de App. Lista as últimas simulações (guardadas no localStorage
// pelo App) e permite limpá-las pelo callback recebido por props.
function HistoricoDeteccoes({ historico, aoLimpar }) {
  return (
    <section className="historico" aria-label="Histórico de simulações">
      <div className="historico__cabecalho">
        <h2>Últimas simulações</h2>
        {historico.length > 0 && (
          <button type="button" className="botao botao--secundario" onClick={aoLimpar}>
            Limpar histórico
          </button>
        )}
      </div>

      {historico.length === 0 ? (
        <p className="historico__vazio">
          Nenhuma simulação ainda. Clique em "Simular detecção" no card acima.
        </p>
      ) : (
        <ul className="historico__lista">
          {historico.map((item) => (
            <li key={item.id} className="historico__item">
              <span className="historico__modo">{item.modo}</span>
              <span>{item.confianca}%</span>
              <span>{item.tempoSegundos}s</span>
              <span className="historico__horario">{item.horario}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="historico__nota">
        Guardado no localStorage do navegador — não sai do seu dispositivo.
      </p>
    </section>
  )
}

export default HistoricoDeteccoes
