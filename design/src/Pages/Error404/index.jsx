import styles from './Error404.module.css'

function Error404() {
    return (
        <>
            <section className={styles.sessao}>
                <p className={styles.paragrafo}>Algo de errado não está certo!</p>
                <span className={styles.erro}>404</span>
                <p className={styles.paragrafo}>Página não Localizada!</p>
            </section>
        </>
    )
}

export default Error404