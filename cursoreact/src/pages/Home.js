import React from 'react';
import './styles/inicio.css';
import Astronautas from '../images/astronauts.svg';
import LogoConf from '../images/platziconf-logo.svg';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="contenedor">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-md-4 cont-inside">
                                <img className="img-" src={LogoConf} alt=""/>
                                <h2 className="subtitulo">PRINT YOUR BADGES</h2>  
                                <small>The easiest way to manage your conference</small>
                                <div className="mt-3 btn-cont">
                                    <Link to="Badges" className="btn btn-primary">Start Now</Link>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-8 cont-inside">
                                <img className="img-derecha" src={Astronautas} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;