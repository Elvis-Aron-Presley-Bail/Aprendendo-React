import styles from './Info.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";

function Info() {
    return(
        <section className={styles.info}>
            
            <div className={styles.sobre}>
                <div className={styles.bola}></div>
                <div className={styles.texto}>
                    <h3>Sobre</h3>
                    <p>Sou Elvis <br /> Programador Front-End</p>
                    <p>Comecei a estudar programação em 2024</p>
                    <p>Estou fazendo faculdade A.D.S</p>
                    <p>HTML, CSS, JS, REACT, GIT, GITHUB</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.tech}>
                <FaHtml5 className={styles.item} />
                <FaCss3Alt className={styles.item} />
                <FaJs className={styles.item} />
                <FaReact className={styles.item} />
                <FaGitAlt className={styles.item} />
                <FaGithub className={styles.item} />
                </div>
            </div>

        </section>
    )
}

export default Info