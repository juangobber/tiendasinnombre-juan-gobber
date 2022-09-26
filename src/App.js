import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/Productos/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Productos/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
       
       {/*<ItemListContainer greeting="¡Bienvenido! estos son nuestros productos"/>*/}
       
  <ItemDetailContainer/>
    </div>
  );
}

export default App;
