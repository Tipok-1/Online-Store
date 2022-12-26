import React from "react";
import { useParams} from 'react-router-dom'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Product from "../Product/Product";
import {data}  from "../products";
import { IProduct } from "../types";


const ProductPage = (): JSX.Element => {
    type QuizParams = {
        id: string;
    }; 
    const { id } = useParams<QuizParams>();
    let currentProduct: IProduct | undefined;
    console.log(id);
    if(id !== undefined)
    {
        currentProduct = data.products.find((product) => product.id == +id);
    }
    /*const params: Params<string> = useParams()
    console.log(params);
    const currentProduct: IProduct | undefined = data.products.find((product) => product.id == params.id);*/

    return (
        <div className="product-page">
            <Header />
            <div style={{background: '#6FB98F'}}>

            {currentProduct
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
                />}
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage;