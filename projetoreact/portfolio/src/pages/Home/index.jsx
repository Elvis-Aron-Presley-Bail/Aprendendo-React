import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentacao">
          <p>
            Olá, sou <br />
            <span className='logo'>Elvis</span> <br />
            Dev Front End
          </p>
          <Link to='/sobre' className="botao" >Saiba mais sobre mim</Link>
        </div>
        <figure>
          <img
            className="imagem"
            src="/undraw_developer-activity_4zqd.svg"
            alt="Imagem da Home"
          />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default Home
