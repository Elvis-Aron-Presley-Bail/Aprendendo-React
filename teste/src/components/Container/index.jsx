import styles from './Container.module.css'

function Container() {
    return (
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
    )
}

export default Container