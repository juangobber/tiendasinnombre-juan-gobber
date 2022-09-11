import CardProducto from "./Card";
import "./ItemListContainer.css"

function ItemListContainer(){
  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <div className="mainContainer">
      <CardProducto
      product= "Remera"
      price={2500}
      img="../imgProductos/remera1.jpg"
      alt="Remera"
      />
      <CardProducto
      product= "Camisa"
      price={3500}
      img="../imgProductos/remera2.jpg"
      alt="camisa"
      />
      <CardProducto
      product= "Remera"
      price={2500}
      img="../imgProductos/remera3.jpg"
      alt="remera"
      />
      </div>
    </div>
  );
}

export default ItemListContainer