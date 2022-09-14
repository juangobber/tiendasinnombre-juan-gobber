import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <ItemListContainer
       greeting="¡Bienvenido! estos son nuestros productos"
       />
    </div>
  );
}

export default App;
