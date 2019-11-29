import React from 'react';


class ListMorti extends React.Component{

    render(){
        return(
            <React.Fragment>
                
                <div className="container">
                    <div className="row">

                        {this.props.chracters.results.map(chracter=>{
                            return(
                                <React.Fragment key={chracter.id}>    
                                    {console.log(chracter)}
                                    <div className="col-sm-6 col-md-3 mt-3">
                                        <div className="card " >
                                            <img src={chracter.image} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text">{chracter.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                                );
                        })}
                      <style>

                      </style>      
                    </div>
                </div>

       
            </React.Fragment>
        );
    }
}

export default ListMorti;