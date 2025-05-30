import styles from './Erro404.module.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"

function Erro404() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.sessao}>
                    <h2 className={styles.h2}>ERRO!</h2>
                    <span className={styles.erro}>404</span>
                    <h2 className={styles.h2}>A página não foi encontrada!</h2>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Erro404
