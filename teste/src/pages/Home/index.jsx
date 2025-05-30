import styles from "../Home/Home.module.css"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Home() {
    return (
        <>
        <Header />
        <Container>
        <section className={styles.principal}>
            
            <div>
                <p>Olá, meu nome é</p>
                <span>Elvis</span>
                <p>Sou programador Front-End</p>
            </div>

            <figure>
                <img src="./public/undraw_space-exploration_dhu1.svg" alt="" />
            </figure>

        </section>
        </Container>
        <Footer />
        </>
    )
}

export default Home