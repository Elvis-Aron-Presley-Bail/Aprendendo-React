import styles from './Home.module.css'

function Home() {
    return (
        <>
            <section className={styles.meio}>
                <div className={styles.info}>
                    <p>Olá, meu nome é</p>
                    <span>Elvis</span> 
                    <p>Sou programador FrontEnd</p>
                </div>
                <div className={styles.bola}></div>
            </section>
        </>
    )
}

export default Home