import styles from './Projetos.module.css'
import Card from "../../Components/Card"

function Projetos() {
    return(
        <section className={styles.projetos}>
            <h1>Projetos</h1>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default Projetos