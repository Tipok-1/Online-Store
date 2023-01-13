import React, { createContext, useState } from 'react';
import MainPage from './pages/MainPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import { IStore } from './types';
import BasketPage from './pages/BasketPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';


const DEFAULT_STORE: IStore = {
  products: [],
}

export function useStoreData() {
  const store = useState<IStore>(DEFAULT_STORE);
  return store;
}

export type UseStoreDataReturnType = ReturnType<typeof useStoreData>

export const Store = createContext<UseStoreDataReturnType | null>(null);

export default function App() {
  const emptyPath = "";
  const productPagePath = "/product/:id";
  const basketPagePath = "/basket";
  const starPath = "*";

  const store = useState<IStore>(DEFAULT_STORE);

  return (
    <Store.Provider value={store}>
      <Header />
      <Routes>
        <Route path={`${emptyPath}`} element={<MainPage />} />
        <Route path={`${productPagePath}`} element={<ProductPage />} />
        <Route path={`${basketPagePath}`} element={<BasketPage />} />
        <Route path={`${starPath}`} element={<Navigate to="" />} />
      </Routes>
      <Footer />
    </Store.Provider>
  );
}
