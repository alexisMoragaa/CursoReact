import React from 'react';

import ListMorti from '../components/ListMorti';
class ApiMorti extends  React.Component{


        state = {
            data:{
                results:[]
            }
        };



    componentDidMount(){
        this.fetchCharacters();
      
    }
    
    fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json()
        
            // console.log(data);
            this.setState({
                data:data
            });
        }

    render(){
        return(
            <React.Fragment>
                {console.log(this.state.data)}
                    <ListMorti chracters={this.state.data}/>
            </React.Fragment>
        );
    }

}
export default ApiMorti;