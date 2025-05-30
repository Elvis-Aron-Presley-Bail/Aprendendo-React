import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <>
            <header className={styles.cabecalho}>
                <Link to="/">
                    <span>Logo</span>
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </header>
        </>
    )
}

export default Header