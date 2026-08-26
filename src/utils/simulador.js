// Simulação local da detecção de cena do JoviLens, feita só com Math —
// nenhuma chamada a serviço externo ou a modelo de IA.

export function gerarDeteccao(modos) {
  // Sorteia um dos modos: Math.random() dá [0, 1), multiplicado pelo
  // tamanho da lista e truncado com Math.floor vira um índice válido.
  const modo = modos[Math.floor(Math.random() * modos.length)]

  // Confiança entre 60% e 100%, arredondada para inteiro.
  const confianca = Math.round(Math.random() * 40 + 60)

  // Tempo de detecção entre 0,4s e 1,5s, arredondado para uma casa
  // decimal multiplicando e dividindo por 10.
  const tempoSegundos = Math.round((Math.random() * 1.1 + 0.4) * 10) / 10

  return {
    id: Date.now(),
    modo,
    confianca,
    tempoSegundos,
    horario: new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  }
}
