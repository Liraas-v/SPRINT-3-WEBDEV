# JoviLens — Sprint 3 de Web Development

Migração do protótipo de Front-End Design (HTML e CSS) para React, com a página quebrada em
componentes funcionais numa hierarquia pai → filho, estado compartilhado no componente pai,
persistência em `localStorage` e uso de `Math` no simulador de detecção de cena.

## Integrantes

| Nome | RM |
|---|---|
| Henrique Lira Da Silva Costa | RM571009 |
| Lucas De Abreu Latuf | RM570068 |
| Lucas Cardoso Franco | RM571430 |
| Cristian Schmidt de Araújo Filho | RM570183 |

## Tecnologias utilizadas

- React 19
- Vite 8
- JavaScript (módulos ES)
- HTML5 e CSS3
- `localStorage` (API nativa do navegador)

## Como instalar as dependências

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar e conferir a versão de produção: `npm run build` e depois `npm run preview`.

## Usuários e senhas para teste

O projeto não tem autenticação. Não há login nem área restrita, então nenhum usuário ou senha é
necessário para testar.

## Onde e como a IA foi utilizada no projeto

Usei o **Claude** e o **ChatGPT** como ferramentas de apoio durante a migração do protótipo para React,
sempre em consulta pontual: levei dúvidas para eles e pedi revisão do que já estava escrito.

As dúvidas foram concentradas em três pontos:

- **Hooks** — quando o `useEffect` dispara, por que o estado inicial do `useState` precisa vir de uma
  função quando o valor é lido do `localStorage`, e como não regravar o mesmo valor a cada render.
- **Comunicação entre componentes** — confirmar se deixar o estado no `App` e passar as funções por props
  (`aoAlternarTema`, `aoSimular`, `aoLimpar`) era o caminho certo, em vez de cada filho mexer no
  `localStorage` por conta própria.
- **Uso do `Math`** — a diferença entre `Math.floor` e `Math.round` no sorteio dos modos de câmera, e como
  arredondar o tempo de detecção para uma casa decimal multiplicando e dividindo por 10.

Na revisão, usei os dois para reler os componentes procurando prop não utilizada, `key` faltando em lista
e regra de CSS repetida, e para conferir se o texto deste README estava claro.

As decisões de produto e de arquitetura não passaram por IA. Manter a detecção 100% simulada dentro do
navegador, sem chamar nenhum serviço externo, veio da definição do JoviLens como uma câmera **on-device**,
acordada com a equipe nas disciplinas de Software e de Total Experience Design.

Um esclarecimento importante para a correção: **não existe nenhuma chamada a modelo de IA dentro do
produto**. A "IA" que aparece na interface é uma simulação local escrita em `src/utils/simulador.js`, feita
com `Math.random()`.

## Link do repositório

https://github.com/Liraas-v/SPRINT-3-WEBDEV

## Link do Deploy na Vercel

_A publicar._
