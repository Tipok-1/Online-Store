import React from 'react';
import MainPage from './pages/MainPage';
import './styles/App.css';
import { Routes, Route,useRoutes } from 'react-router-dom';
import StartPage from './pages/ProductPage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';

export const store: { products: number[], setProducts: (id: number) => void } = {
    products: [],
    setProducts: (id) => { store.products.push(id) },
};
// const value = useContext<any>(themes);
export const Store = React.createContext(store);

export default function App() {
    
    return (
        <Store.Provider value={store}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="basket" element={<BasketPage />} />            
                <Route path="*" element={<StartPage />} />
            </Routes>
        </Store.Provider>
    );
}


