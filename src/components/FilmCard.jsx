export default function FilmCard({ film, serie }) {

    //DESTRUTTURO L'OGGETTO PROPS
    // const { film } = props;

    //VARIABILE GESTIONE BANDIERE
    const flag = "/flag/jp.png"

    return (
        <>

            {/* FILM */}

            {film && (

                <div key={film.id}>
                    <h1>Sezione FILM</h1>
                    <h1>Titolo {film.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt={film.title} />
                    <h2> Titolo originale {film.original_title} </h2>
                    <img src={`/flag/${film.original_language}.png`} alt="{film.original_language}" onError={(e) => e.target.src = flag} />
                    <p> Voto {film.vote_average}</p>
                </div>
            )}

            {/* SERIE */}

            {serie && (

                <div key={serie.name}>
                    <h1>Sezione SERIE</h1>
                    <h1>Titolo {serie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt={serie.name} />
                    <h2> Titolo originale {serie.original_name} </h2>
                    <img src={`/flag/${serie.original_language}.png`} alt="{serie.original_language}" onError={(e) => e.target.src = flag} />
                    <p> Voto {serie.vote_average}</p>
                </div>
            )}
        </>
    );
}