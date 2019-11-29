import React from 'react';

class BadgeForm extends  React.Component{
    // state = {};
    

    render(){
        return (
            <div className="container">
                <h1>Nuevo Badge</h1>
                <form  onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="firstName">FirstName</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control"
                            name="firstName" 
                            type="text"
                            value={this.props.formValues.firstName}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">LastName</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control"
                            name="lastName" 
                            type="text"
                            value={this.props.formValues.lastName}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control"
                            name="position" 
                            type="text"
                            value={this.props.formValues.position}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="twitter">twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control"
                            name="twitter" 
                            type="text"
                            value={this.props.formValues.twitter}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="avatar">avatar</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control"
                            name="avatar" 
                            type="text"
                            value={this.props.formValues.avatar}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="footer">Footer</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control"
                            name="footer" 
                            type="text"
                            value={this.props.formValues.footer}
                            />
                    </div>


                    <button  className="btn btn-primary" onClick={this.handleClick}>Guardar</button>
                </form>
            </div>
        )
    }

    // handleChange = e => {
    //     this.setState({[e.target.name]: e.target.value});
    // }
    handleClick = e => {
        console.log("btn was clicked");
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("form submited");
        console.log(this.state);
    }
}

export default BadgeForm;