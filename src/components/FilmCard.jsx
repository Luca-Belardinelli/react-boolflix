// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function FilmCard({ film, serie }) {

    //DESTRUTTURO L'OGGETTO PROPS
    // const { film } = props;

    //VARIABILE GESTIONE BANDIERE
    const flag = "/flag/jp.png"

    //FUNIONE STAR
    const stars = (vote) => {

        const pointer = Math.ceil(vote / 2);

        let stars = [];

        for (let i = 0; i < 5; i++) {

            if (i < pointer) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "gold" }}
                    />
                );

            } else {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#e6e6e6" }}
                    />
                );

            }
        }
        return stars;
    };


    return (
        <>

            {/* FILM */}

            {film && (

                <div className="card" key={film.id}>
                    <h1>Sezione FILM</h1>
                    <h4>Titolo: {film.title}</h4>
                    <img className="imgf" src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt={film.title} />
                    <h4> Titolo originale: {film.original_title} </h4>
                    <img className="flag" src={`/flag/${film.original_language}.png`} alt="{film.original_language}" onError={(e) => e.target.src = flag} />
                    <p> Voto: {stars(film.vote_average)}</p>
                </div>
            )}

            {/* SERIE */}

            {serie && (

                <div className="card" key={serie.id}>
                    <h1>Sezione SERIE</h1>
                    <h1>Titolo: {serie.title}</h1>
                    <img className="imgf" src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt={serie.name} />
                    <h2> Titolo originale: {serie.original_name} </h2>
                    <img className="flag" src={`/flag/${serie.original_language}.png`} alt="{serie.original_language}" onError={(e) => e.target.src = flag} />
                    <p> Voto: {stars(serie.vote_average)}</p>
                </div>
            )}
        </>
    );
}