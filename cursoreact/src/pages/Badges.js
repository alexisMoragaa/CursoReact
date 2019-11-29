import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Badges.css';

import ListBadges from '../components/ListBadges';

import logo from '../images/badge-header.svg';
class Badges extends React.Component{


    constructor(props){//
        super(props);
        console.log('1. Constructor()');

        this.state = {
            data:[ ]
        }
    }

    componentDidMount(){
        console.log('3. componentDidMount()');

        this.timeupId =  setTimeout(()=>{
            this.setState({
                data:[
                    {
                        id:'1',
                        firstName:"Alexis",
                        lastName:"Moraga",
                        twitter:'amoraga',
                        footer:'new.amoraga.cl/web',
                        position:'Full Stack Developer',
                        avatar:'https://goticradio.files.wordpress.com/2017/11/avataaars.png?w=264'
        
                    },
                    {
                        id:'2',
                        firstName:"Carlos",
                        lastName:"Name",
                        twitter:'Cname',
                        footer:'new.cname.cl/web',
                        position:'Front End Developer',
                        avatar:'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
        
                    },
                    {
                        id:'3',
                        firstName:"Juan Pablo",
                        lastName:"Bravo",
                        twitter:'vBravo',
                        footer:'new.jBravo.cl/web',
                        position:'Back End Developer',
                        avatar:'https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png'
        
                    },
                ]
            })
        },3000);
    }


    componentDidUpdate(prevProps, prevState){
        console.log('5. compoentDidUpdate');
        console.log({prevProps:prevProps, prevState:prevState});
        console.log({props: this.props, state:this.state});
    }


    componentWillUnmount(){
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeupId);
    }
    render(){
        console.log('2 / 4. render()');
        return (
           
             <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badge__conf__logo" src={logo} alt=""/>

                        </div>
                    </div>
                </div>

                <div className=" Badges__container">
                    
                    <Link to="/badges/new" className="btn btn-primary">
                        Add New Badge
                    </Link>
                    <ListBadges badges={this.state.data} />
                </div>
            </React.Fragment>     
           

        );
    }
}

export default Badges;