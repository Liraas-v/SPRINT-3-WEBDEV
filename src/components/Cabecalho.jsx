import { useState } from 'react'
import { LINKS_NAV } from '../constants/dados'

// Filho de App. Recebe o tema atual e a função de alternância por props.
function Cabecalho({ tema, aoAlternarTema }) {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="cabecalho">
      <div className="cabecalho__conteudo">
        <a href="#topo" className="marca">
          Jovi<span>Lens</span>
        </a>

        <button
          type="button"
          className="hamburguer"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navegacao ${menuAberto ? 'navegacao--aberta' : ''}`}
          aria-label="Navegação principal"
        >
          <ul>
            {LINKS_NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuAberto(false)}>
                  {link.rotulo}
                </a>
              </li>
            ))}
            <li>
              <button type="button" className="botao-tema" onClick={aoAlternarTema}>
                {tema === 'dark' ? 'Tema claro' : 'Tema escuro'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
