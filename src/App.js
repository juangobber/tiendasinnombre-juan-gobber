import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <ItemListContainer/>
    </div>
  );
}

export default App;
