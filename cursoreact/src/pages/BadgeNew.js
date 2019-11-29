import React from "react";
import './styles/BadgeNew.css';


import header from '../images/badge-header.svg';
import Badge from '../components/badge'
import Form from  '../components/BadgeForm';

class BadgeNew extends React.Component{

    state = { 
        form:{
        firstName:"Alexis",
        lastName:"Moraga",
        twitter:'amoraga',
        footer:'new.amoraga.cl/web',
        position:'Full Stack Developer'
        }
    };

    handleChange = e => {
        
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }


    render(){
        return (
            <div>
               

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                position={this.state.form.position}
                                twitter={this.state.form.twitter}
                                avatar="https://s.gravatar.com/avatar/ef08ed39160fd02c2ebf14675770bd2d?s=80"
                                footer={this.state.form.footer}
                               
                            />
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <Form 
                                onChange={this.handleChange}
                                formValues={this.state.form} />
                        </div>
                    </div>
                </div>

            </div>
        )

    }

    
}

export default BadgeNew;