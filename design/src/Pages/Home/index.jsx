import styles from './Home.module.css'
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';

function Home() {
    return (
        <>
            <Header />

            <section className={styles.meio}>
                <div className={styles.info}>
                    <p>Olá, meu nome é</p>
                    <span>Elvis</span> 
                    <p>Sou programador FrontEnd</p>
                </div>
                <div className={styles.bola}></div>
            </section>

            <Footer />
        </>
    )
}

export default Home