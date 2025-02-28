export default function FilmCard(props) {

    //DESTRUTTURO L'OGGETTO PROPS
    const { film } = props;

    //VARIABILE GESTIONE BANDIERE
    const flag = "/flag/jp.png"

    return (
        <div className="container">
            <div className="filmcard" key={film.id}>
                <h1>Titolo {film.title}</h1>
                <h2> Titolo originale {film.original_title} </h2>
                <img src={`/flag/${film.original_language}.png`} alt="{film.original_language}" onError={(e) => e.target.src = flag} />
                <p> Voto {film.vote_average}</p>
            </div>
        </div>
    );
}