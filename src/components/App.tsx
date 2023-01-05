import React, { createContext, useEffect, useState, useContext } from 'react';
import MainPage from './pages/MainPage';
import './styles/App.css';
import { Routes, Route, useRoutes } from 'react-router-dom';
import StartPage from './pages/ProductPage';
import ProductPage from './pages/ProductPage';
import { IStore } from './types';
import BasketPage from './pages/BasketPage';

const DEFAULT_STATE: IStore = {
    products: []
}

export const Store = createContext<IStore>(DEFAULT_STATE);

export default function App() {
    const store = useState<IStore>(DEFAULT_STATE);
    return (
        <Store.Provider value={store}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="basket" element={<BasketPage/>} />
                <Route path="*" element={<StartPage />} />
            </Routes>
        </Store.Provider>
    );
}
