// Conteúdo estático da página, separado dos componentes. Os textos vêm do
// protótipo de Front-End Design (JOVI LensAI) migrado nesta sprint.

export const CHAVE_TEMA = 'jovilens:tema'
export const CHAVE_HISTORICO = 'jovilens:historico-simulacoes'
export const MAX_HISTORICO = 5

export const LINKS_NAV = [
  { href: '#solucao', rotulo: 'A Solução' },
  { href: '#publico', rotulo: 'Público-Alvo' },
  { href: '#galeria', rotulo: 'Galeria' },
  { href: '#equipe', rotulo: 'Nossa Equipe' },
]

// Os 12 modos de câmera sorteados pelo simulador.
export const MODOS = [
  'Foto', 'Retrato', 'Documento', 'Vídeo', 'Noite', 'Tradução',
  'QR', 'Pro', 'Slow', 'Cinema', 'Panorâmica', 'Objeto',
]

export const RECURSOS = [
  {
    id: 'deteccao',
    titulo: 'Detecção automática de cena',
    descricao:
      'Identifica lousa, texto, rosto, comida, paisagem e ambiente noturno e escolhe entre os 12 modos da câmera, com indicador de confiança visível.',
  },
  {
    id: 'documento',
    titulo: 'Modo Documento',
    descricao:
      'Fixa ISO 100, aumenta o contraste em +40 e leva a nitidez ao máximo para que foto de lousa e de apostila saia sempre legível.',
  },
  {
    id: 'noite',
    titulo: 'Modo Noite',
    descricao:
      'Ajusta ISO 3200 e exposição de 1/15s com redução de ruído para registrar bibliotecas, restaurantes e o campus à noite sem imagem estourada.',
  },
  {
    id: 'retrato',
    titulo: 'Retrato com bokeh de IA',
    descricao:
      'Calcula a profundidade da cena e separa o rosto do fundo com desfoque progressivo, sem lente dedicada.',
  },
  {
    id: 'analise',
    titulo: 'Análise da foto',
    descricao:
      'Depois da captura, a IA dá uma nota de 0 a 100, mostra nitidez, exposição, enquadramento e contraste e sugere o que melhorar na próxima foto.',
  },
  {
    id: 'offline',
    titulo: '100% offline',
    descricao:
      'Todo o processamento acontece no dispositivo. Nenhuma imagem ou informação sai do aparelho — alinhado à LGPD.',
  },
]

export const CONTEXTOS = [
  {
    titulo: 'Sala de aula',
    descricao: 'Fotografa lousa, slide e apostila todos os dias e precisa do texto legível — a dor nº 1 do público.',
  },
  {
    titulo: 'Biblioteca e restaurante universitário',
    descricao: 'Ambientes de pouca luz ou iluminação artificial, onde a câmera automática comum costuma falhar.',
  },
  {
    titulo: 'Eventos no campus',
    descricao: 'Quer registrar o momento com os amigos sem parar para ajustar modo, foco ou exposição.',
  },
  {
    titulo: 'Material em outro idioma',
    descricao: 'Encontra artigo, placa ou slide em outra língua e precisa capturar com nitidez para entender depois.',
  },
]

export const GALERIA = [
  {
    arquivo: '/assets/tela-onboarding.png',
    legenda: 'Onboarding — os três diferenciais: detecção automática, modo documento e 100% offline.',
  },
  {
    arquivo: '/assets/tela-auto-ia.png',
    legenda: 'Modo AUTO IA — a câmera analisa a cena antes da foto.',
  },
  {
    arquivo: '/assets/tela-sugestao-ia.png',
    legenda: 'Sugestão da IA — texto detectado, com opção de aplicar ou ignorar o Modo Documento.',
  },
  {
    arquivo: '/assets/tela-modo-documento.png',
    legenda: 'Modo Documento — ISO 100, contraste +40 e nitidez máxima para texto legível.',
  },
  {
    arquivo: '/assets/tela-modo-noite.png',
    legenda: 'Modo Noite — ISO 3200 e exposição de 1/15s com redução de ruído.',
  },
  {
    arquivo: '/assets/tela-galeria-modos.png',
    legenda: 'Galeria de modos — modos de IA e modos manuais em um só lugar.',
  },
]

export const EQUIPE = [
  { nome: 'Henrique Lira Da Silva Costa', rm: 'RM571009', funcao: 'Back-end e Python' },
  { nome: 'Lucas De Abreu Latuf', rm: 'RM570068', funcao: 'Front-end e Protótipo' },
  { nome: 'Lucas Cardoso Franco', rm: 'RM571430', funcao: 'Modelagem e Documentação' },
  { nome: 'Cristian Schmidt de Araújo Filho', rm: 'RM570183', funcao: 'Storytelling e Pesquisa de Público' },
]
