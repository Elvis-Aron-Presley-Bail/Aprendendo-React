import styles from './Card.module.css'
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

function Card() {
    return (
        <section className={styles.card}>
            <h3>Título do projeto</h3>
            <p>Texto descrito do <br /> projeto</p>
            <div className={styles.icons_footer}>
                <div className={styles.icon_footer}>
                <FaHtml5 className={styles.item} />
                <FaCss3Alt className={styles.item} />
                <FaJs className={styles.item} />
                <FaReact className={styles.item} />
                </div>
                <button className={styles.botao_footer}>
                    <BsArrowRightSquareFill className={styles.botao} />
                </button>
            </div>
        </section>
    )
}

export default Card