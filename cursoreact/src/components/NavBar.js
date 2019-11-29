import React from "react";
import './styles/navBar.css';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom'
class NavBar extends React.Component{
    render(){
        return(
                <div className="Navbar">
                    <div className="container-fluid">
                        <Link to="/" className="Navbar__brand">
                            <img className="Navbar__brand__logo" src={logo} alt=""/>
                            <span className="font-weight-light">Platzi</span>
                            <span className="font-weight-bold">Conf</span>
                        </Link>

                        <Link to="/api/morti" className="float-right">Api</Link>

                    </div>
                </div>

                
        )
    }
}
export default NavBar;




    
