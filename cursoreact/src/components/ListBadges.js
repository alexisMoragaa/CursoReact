import React from 'react';


import './styles/ListBadges.css';
class ListBadges extends React.Component{
    render(){
        return (
            <div>
                {this.props.badges.map(badge =>{
                    return(
                        <React.Fragment key={badge.id}>
                            <div className="row contenedor-badges" key={badge.id}>

                            <div className="col-3 cont-img">
                                <img className="img-round" src={badge.avatar} alt=""/>
                            </div>

                            <div className="col-9">
                                <span className="font-weight-bold">{badge.firstName} {badge.lastName}</span>
                                 <br/>
                                <a href="#">@{badge.twitter}</a>
                                <p>{badge.position}</p>
                            </div>

                            </div>
                        </React.Fragment>
                            
                        
                    );
                })}
            </div>
        )
    }
}

export default ListBadges;