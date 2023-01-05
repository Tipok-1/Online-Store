import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Store } from '../App';
import { data } from '../products';
import Product from '../Product/Product';
import { IProduct, IStore } from '../types';
import { countAllPrice } from '../helpers';

const BasketPage = (): JSX.Element => {
    const [store, setStore] = useContext<IStore>(Store);

    return (
        <div className="basket-page">
            <Header />

            <div className="basket-page-field">
                <div
                    style={{
                        width: 1200,
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        background: '#6FB98F',
                    }}
                >
                    <div className="basket-page__description">
                        <div className="basket-page__title">
                            Product in Cart
                        </div>
                        <div className="basket-page__description__catalog">
                            {store.products.map((product: IProduct) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                    <div className="basket-page__summary">
                        <div className="basket-page__title">Summary</div>
                        <div
                            style={{ marginTop: 10 }}
                            className="basket-page__summary__count-product"
                        >
                            Products: {store.products.length}{' '}
                        </div>
                        <div
                            style={{ margin: '10px 0' }}
                            className="basket-page__summary__total"
                        >
                            Total: € {countAllPrice(store.products)}
                        </div>
                        <Button>BUY NOW</Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BasketPage;
