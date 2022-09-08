import "./navbar.css"
import logo from './logo-bever.png';

function Navbar (){
    return(
        <nav className="menu">
            <div> <img src={logo} alt="logo" width="200" className="logo-header"/>
            </div>
            <ul className="botones-nav">
                <li> <a href="#">PRODUCTOS</a></li>
                <li> <a href="#">CAMPAÑA 2022</a></li>
                <li> <a href="#">CONTACTO</a></li>
                <li> <a href="#">CARRITO</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;