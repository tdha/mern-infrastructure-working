import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null); // null (falsey) or {} (truthy)

  return (
    <main>
        { user ? // if user
        <>
        <NavBar />
        <Routes>
            <Route path="/orders/new" element={ <NewOrderPage />} /> 
            <Route path="/orders" element={ <OrderHistoryPage />} /> 
        </Routes>
        </>
        :
        <AuthPage /> // is not logged in, go here (falsy)
    }
    </main>
  );
}

export default App
