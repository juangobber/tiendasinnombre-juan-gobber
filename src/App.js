import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/Productos/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Productos/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartView from './components/Productos/Cart/CartView';
import Checkout from './components/Checkout/Checkout';
//importar provider
import CartContextProvider from './components/Productos/context/CartContext';
import CostumerForm from './components/Productos/CostumerForm/CostumerForm';




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
          <Route path="/checkout/:idcheckout" element={
            <Checkout/>
          }/>
          <Route path="/costumer-form" element={
            <CostumerForm/>
          }/>
        </Routes>
        
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
