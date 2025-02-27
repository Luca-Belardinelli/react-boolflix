export default function FilmCard(props) {

    const { film } = props;

    return (
        <div className="container">
            <div className="filmcard" key={film.id}>
                <h1>Titolo {film.title}</h1>
                <h2> Titolo originale {film.original_title} </h2>
                <p> Lingua {film.original_language}</p>
                <p> Voto {film.vote_average}</p>
            </div>
        </div>
    );
}