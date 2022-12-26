import React from 'react';
import MainPage from './pages/MainPage';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/ProductPage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="*" element={<StartPage />} />
        </Routes>
    );
}


