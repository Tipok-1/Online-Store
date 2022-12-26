import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const BasketPage = (): JSX.Element => {
    return (
        <div className="basket-page">
            <Header />
            <div className="basket-page-field">
                <div style={{ width: 1200, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: '#6FB98F' }}>
                    <div className="basket-page__description">
                        <div className="basket-page__title" >Product in Cart</div>
                        <div className="basket-page__description__catalog" >
                            Product
                        </div>
                    </div>
                    <div className="basket-page__summary">
                        <div className="basket-page__title" >Summary</div>
                        <div style={{ marginTop: 10 }} className="basket-page__summary__count-product" >Products: 1</div>
                        <div style={{ margin: '10px 0' }} className="basket-page__summary__total" >Total: €0</div>
                        <Button>BUY NOW</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BasketPage;