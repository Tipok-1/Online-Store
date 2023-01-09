import React, { useContext } from "react";
// import { Store } from "../App";
import Field from "../Field/Field";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const MainPage = (): JSX.Element => {
    // const storeCurrentInBasket = useContext(Store);
    // console.log(storeCurrentInBasket);
    return (
        <div className="main-page">
            <Field/>
        </div>
    )
}

export default MainPage;