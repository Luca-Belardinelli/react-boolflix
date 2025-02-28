//LISTA FILM

// CONTEXT
import { useContext } from "react";
import CountContext from "./../contexts/CountContext"


// IMPORTIAMO LE CARD
import Filmcard from "./FilmCard";


export default function FilmList() {

    //DESTRUTTURO 
    const { films, series } = useContext(CountContext);

    return (
        <>
            {/* film */}
            {
                films.map((film) => (
                    <Filmcard key={film.id} film={film} />
                ))
            }

            {/* serie */}
            {
                series.map((series) => (
                    <Filmcard key={series.id} series={series} />
                ))
            }
        </>
    );
}