// IMPORTO ELEENTI DELLA LIBRERIA DI GESTIONE DELLE ROTTE
import { BrowserRouter, Routes, Route } from "react-router-dom";

// REACT
import { useState, useEffect } from 'react';

// CHIAMATA AXIOS
import axios from "axios";

// PAGINE
import HomePage from "./pages/HomePage";

// LAYOUT
import DefaultLayout from "./layout/DefaultLayout";

// CONTEXT
import CountContext from './contexts/CountContext';

function App() {

  // GESTIONE DATS
  const [films, setFilms] = useState([]);

  // VARIABILE PER SALVARE API
  const api_key = "6b952176acd89d0dbbdac68298d2223c";



  // FUNZIONE GESTIONE CHIAMATA API
  function fetchFilms(query) {
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: api_key,
        query: query
      }
    })
      .then((res) => {
        setFilms(res.data.results);
      })

  }

  useEffect(() => fetchFilms(), []);

  return (
    <>
      <CountContext.Provider value={{ films, fetchFilms }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CountContext.Provider>
    </>
  )
}

export default App
