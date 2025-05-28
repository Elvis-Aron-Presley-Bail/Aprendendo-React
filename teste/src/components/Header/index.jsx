import styles from './Header.module.css'

function Header() {
    return (
        <>
            <header className={styles.cabecalho}>
                <span>Logo</span>
                <nav>
                    <a href="#">Sobre</a>
                    <a href="#">Sobre</a>
                    <a href="#">Sobre</a>
                    <a href="#">Sobre</a>
                </nav>
            </header>
        </>
    )
}

export default Header