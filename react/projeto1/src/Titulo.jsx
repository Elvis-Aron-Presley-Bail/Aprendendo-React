function Titulo({nome}){


    return (
    <div>
        <h1>Oi eu sou {nome ? nome : "Fulano"}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure explicabo ipsum incidunt aut iusto id repellendus ullam nihil tempora rem nulla, suscipit dicta dolores ut aliquam provident impedit, nisi quas!</p>
    </div>
    )
}

export default Titulo