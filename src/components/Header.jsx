import { useState, useContext } from "react";
import CountContext from "./../contexts/CountContext"



// VARIABILE DI STATO DOVE SI MAPPANO LE POPRIETà PRESE DANDOGLI UN VALORE INZIALE
const initialFormData = { cerca: " " };

export default function Header() {

    // GESTIONE INFORMAZIONI RACCOLTE DAI CAMPI FORM
    const [formData, setFormData] = useState(initialFormData);
    const { fetchFilms } = useContext(CountContext);

    // FUNZIONE GESTIONE CAMPI
    function handleFormData(e) {
        // GESTIONE A SECONDA DEL TIPO DI INPUT
        const value = e.target.value;
        // MODIFICO I VECCHI DATI CON I NUOVI DATI INSERITI
        setFormData({ cerca: value });
    }

    // FUNZIONE DI GESTIONE DELL'INVIO FORM
    function handleSubmit(e) {
        e.preventDefault();
        fetchFilms(formData.cerca);
    }


    return (
        <header className="navbar">
            <h1 id="logo">BoolFlix</h1>
            <form onSubmit={handleSubmit}>
                {/* RICERCA */}
                <input
                    type="text"
                    name="cerca"
                    value={formData.cerca}
                    onChange={handleFormData}
                    placeholder='Cerca'
                />
                <button>Cerca</button>
            </form>
        </header>
    );

} 