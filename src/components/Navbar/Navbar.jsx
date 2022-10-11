import "./navbar.css"
import logo from './logo-bever.png';
import CartWidget from "../CartWidget";
import {Link} from "react-router-dom"

function Navbar (){
    return(
        <nav className="menu">
            <div> <Link to="/"><img src={logo} alt="logo" width="200" className="logo-header"/></Link>
            </div>
            <ul className="botones-nav">
                <li> <Link to="/">HOME</Link></li>
                <li> <Link to="/categoria/remeras">REMERAS</Link></li>
                <li> <Link to="/categoria/pantalones">PANTALONES</Link></li>
                <li> <Link to="/cart"><CartWidget/></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;