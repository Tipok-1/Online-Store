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
    const [store, setStore] = useContext(Store)!;
    const [isDisablePlusBtn, setIsDisablePlusBtn] = useState<boolean>(false);
    const getUniqProducts = (): IProduct[] => {
        const uniqProducts: IProduct[] = [];
        store.products.forEach((product: IProduct) => {
            if (!uniqProducts.includes(product)) {
                uniqProducts.push(product);
            }
        });
        return uniqProducts;
    };

    const addProduct = (product: IProduct): void => {
        if (countNumbersProduct(product) < product.stock) {
            setStore({
                ...store,
                products: [...store.products, product],
            });
        } 
        if (countNumbersProduct(product) + 1 === product.stock) {
            setIsDisablePlusBtn(true);
        }
    };

    const removeProduct = (product: IProduct): void => {
        const indexProduct = store.products.lastIndexOf(product);
        const newProducts = [...store.products];
        newProducts.splice(indexProduct, 1);
        setStore({
            ...store,
            products: newProducts,
        });
        setIsDisablePlusBtn(false);
    };

    const countNumbersProduct = (product: IProduct): number => {
        return store.products.filter((p: IProduct) => p === product).length;
    };

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
                            {getUniqProducts().map((product: IProduct) => (
                                <div className="basket-page__catalog">
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
                                    <div className="count-product">
                                        <div
                                            className="count-product__circle"
                                            onClick={() =>
                                                removeProduct(product)
                                            }
                                        >
                                            -
                                        </div>
                                        <div className="count-product__number">
                                            {countNumbersProduct(product)}
                                        </div>
                                        <div
                                            className="count-product__circle"
                                            style={{
                                                backgroundColor:
                                                    isDisablePlusBtn
                                                        ? '#b7b7b7'
                                                        : '',
                                            }}
                                            onClick={() => addProduct(product)}
                                        >
                                            +
                                        </div>
                                    </div>
                                </div>
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
