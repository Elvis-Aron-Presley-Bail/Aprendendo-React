import { BsFillEnvelopeAtFill, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs"
import { BiLogoInstagramAlt } from "react-icons/bi"
import styles from './Contato.module.css'

function Contato() {
    return(
        <>
            <section className={styles.meio}>
                <h1>Contatos</h1>
                <h3>Abaixo estão os meus contatos</h3>
                <div className={styles.icones}>
                    <a href="#"><BiLogoInstagramAlt className={styles.icone} /></a>
                    <a href="#"><BsFillEnvelopeAtFill className={styles.icone} /></a>
                    <a href="#"><BsGithub className={styles.icone} /></a>
                    <a href="#"><BsLinkedin className={styles.icone} /></a>
                    <a href="#"><BsYoutube className={styles.icone} /></a>
                </div>
            </section>
        </>
        
    )
}

export default Contato