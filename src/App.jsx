import { useEffect, useState } from 'react'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import HistoricoDeteccoes from './components/HistoricoDeteccoes'
import Solucao from './components/Solucao'
import PublicoAlvo from './components/PublicoAlvo'
import Galeria from './components/Galeria'
import Equipe from './components/Equipe'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

import {
  CHAVE_HISTORICO,
  CHAVE_TEMA,
  CONTEXTOS,
  EQUIPE,
  GALERIA,
  MAX_HISTORICO,
  MODOS,
  RECURSOS,
} from './constants/dados'
import { gerarDeteccao } from './utils/simulador'

// Componente pai. Guarda o estado compartilhado (tema e histórico de
// simulações) e passa dados e callbacks para os filhos por props. Só o
// App lê e escreve no localStorage.
function App() {
  const [tema, setTema] = useState(() => localStorage.getItem(CHAVE_TEMA) || 'dark')

  const [historico, setHistorico] = useState(() => {
    const salvo = localStorage.getItem(CHAVE_HISTORICO)
    try {
      return salvo ? JSON.parse(salvo) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(CHAVE_TEMA, tema)
    document.documentElement.setAttribute('data-tema', tema)
  }, [tema])

  useEffect(() => {
    localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(historico))
  }, [historico])

  function alternarTema() {
    setTema((atual) => (atual === 'dark' ? 'light' : 'dark'))
  }

  function simularDeteccao() {
    const deteccao = gerarDeteccao(MODOS)
    setHistorico((atual) => [deteccao, ...atual].slice(0, MAX_HISTORICO))
  }

  function limparHistorico() {
    setHistorico([])
  }

  return (
    <>
      <Cabecalho tema={tema} aoAlternarTema={alternarTema} />

      <main>
        <Hero ultimaDeteccao={historico[0] ?? null} aoSimular={simularDeteccao} />
        <HistoricoDeteccoes historico={historico} aoLimpar={limparHistorico} />
        <Solucao recursos={RECURSOS} />
        <PublicoAlvo contextos={CONTEXTOS} />
        <Galeria imagens={GALERIA} />
        <Equipe equipe={EQUIPE} />
        <Contato />
      </main>

      <Rodape />
    </>
  )
}

export default App
