// IMPORTO IL COMPONENTE SEGNAPOSTO DELLA LIBRERIA DI ROUTER
import { Outlet } from "react-router-dom";

// IMPORTO COMPONENTI DI LAYOUT
import Header from "./../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}