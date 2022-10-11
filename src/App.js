import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/Productos/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Productos/ItemListContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import CartView from './components/Productos/Cart/CartView';
//importar provider
import CartContextProvider from './components/Productos/context/CartContext';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <ItemListContainer greeting="¡Bienvenido! estos son nuestros productos"/>
          }/>
          <Route path="/item/:id" element={
            <ItemDetailContainer/>
          }/>
          <Route path="/categoria/:cat" element={
            <ItemListContainer/>
          }/>
          <Route path="/cart" element={
            <CartView/>
          }/>
        </Routes>
        
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
