import React from "react";
import { useParams } from 'react-router-dom'
import ButtonBootstrap from "../ButtonBootsrap/ButtonBootsrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Product from "../Product/Product";
import ProductFieldCatalog from "../ProductFieldCatalog/ProductFieldCatalog";
import { data } from "../products";




const ProductPage = () => {
    const params = useParams()

    const currentProduct = data.products.find((val) => val.id == params.id);

    return (
        <div className="product-page">
            <Header />
            <div >

            {currentProduct
                && <Product
                    title={currentProduct.title}
                    thumbnail={currentProduct.thumbnail}
                    category={currentProduct.category}
                    brand={currentProduct.brand}
                    price={currentProduct.price}
                    discount={currentProduct.discountPercentage}
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