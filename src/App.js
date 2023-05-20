
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

import { CartProvider } from './context/CartContext';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <div className='banner'>.</div>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>} />
       
        
      </Routes>
      </CartProvider>
     </BrowserRouter>
     <Footer />
    </div>

  );
}

export default App;
