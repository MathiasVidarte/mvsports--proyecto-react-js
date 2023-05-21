
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { initializeApp } from "firebase/app";
import CartWidget from './components/CartWidget/CartWidget';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Ggjuhqmx3kHZmfMVgPX97LLuUniWi0M",
  authDomain: "mvsport-34228.firebaseapp.com",
  projectId: "mvsport-34228",
  storageBucket: "mvsport-34228.appspot.com",
  messagingSenderId: "242949404239",
  appId: "1:242949404239:web:f7c6fdf6816de2fc1b1c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const App = () => {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <div className='banner'>.</div>
          <NavBar />
          <CartWidget />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
