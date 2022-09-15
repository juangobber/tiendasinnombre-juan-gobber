import CardProducto from "./Card";
import "./ItemListContainer.css"
import imagen1 from "./imgProductos/remera1.jpg"
import imagen2 from "./imgProductos/remera2.jpg"
import imagen3 from "./imgProductos/remera3.jpg"

function ItemListContainer(props){
  let {greeting} = props
  return (
    <div>
      <h1>{greeting}</h1>
      <div className="mainContainer">
      <CardProducto
      product= "Remera"
      price={2500}
      img={imagen1}
      alt="Remera"
      stock = {10}
      limite = {5}
      initial ={1}
      />
      <CardProducto
      product= "Camisa"
      price={3500}
      img={imagen2}
      alt="camisa"
      stock = {10}
      limite = {100}
      initial ={1}
      />
      <CardProducto
      product= "Remera"
      price={2500}
      img={imagen3}
      alt="remera"
      stock = {10}
      limite = {100}
      initial ={1}
      />
      </div>
    </div>
  );
}

export default ItemListContainer