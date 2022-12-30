import React from 'react';
import MainPage from './pages/MainPage';
import './styles/App.css';
import { Routes, Route,useRoutes } from 'react-router-dom';
import StartPage from './pages/ProductPage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';
import { QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient(/*{
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false
        }
    }
}*/)
export default function App() {
    
    return (
        /*<Routes>
            <Route path="/">
                <MainPage />
            </Route>

            <Route path="product/:id" element={<ProductPage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="*" element={<StartPage />} />
        </Routes>*/  
        <QueryClientProvider client = {queryClient}>         
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="basket" element={<BasketPage />} />
            </Routes>
        </QueryClientProvider> 
        

    );
}


