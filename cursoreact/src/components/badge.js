import React from 'react';
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'
class Badge extends React.Component{
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="banner" />
                </div>
                <div className="Badge__section-name">
                    <img src={this.props.avatar} alt="avatar" className="Badge__avatar"/>
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.position}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                   #{this.props.footer}
                </div>
            </div>
        )
    }
}

export default Badge;