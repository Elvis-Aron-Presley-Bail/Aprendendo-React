import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.cabecalho}>
            <span>LOGO</span>
            <nav>
                <Link to='/'>SOBRE</Link>
                <Link to='/projetos'>PROJETOS</Link>
                <Link to='/contato'>CONTATO</Link>
                <Link to='/info'>INFO</Link>
            </nav>
        </header>
    )
}

export default Header