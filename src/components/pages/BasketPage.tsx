import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Store } from "../App";
import { data } from "../products";
import Product from "../Product/Product";


const BasketPage = (): JSX.Element => {
    const storeCurrent = useContext(Store);
    console.log(storeCurrent.products);
    const result = []
    for (let i = 0; i < storeCurrent.products.length; i++) {
        const basketCurrent = data.products.filter((product) => product.id === storeCurrent.products[i])
        result.push(basketCurrent)
    }

    console.log(result);

    return (
        <div className="basket-page">
            <Header />

            <div className="basket-page-field">
                <div style={{ width: 1200, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: '#6FB98F' }}>
                    <div className="basket-page__description">
                        <div className="basket-page__title" >Product in Cart</div>
                        <div className="basket-page__description__catalog" >
                            {result.map(product => {
                                return (
                                    <Product
                                    title={product[0].title}
                                    thumbnail={product[0].thumbnail}
                                    category={product[0].category}
                                    brand={product[0].brand}
                                    price={product[0].price}
                                    discountPercentage={product[0].discountPercentage}
                                    stock={product[0].stock}
                                    id={product[0].id}
                                    rating={product[0].rating}
                                />
                                )
                            })}
                            {/* {currentProduct
                                && <Product
                                    title={currentProduct.title}
                                    thumbnail={currentProduct.thumbnail}
                                    category={currentProduct.category}
                                    brand={currentProduct.brand}
                                    price={currentProduct.price}
                                    discountPercentage={currentProduct.discountPercentage}
                                    stock={currentProduct.stock}
                                    id={currentProduct.id}
                                    rating={currentProduct.rating}
                                />} */}
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