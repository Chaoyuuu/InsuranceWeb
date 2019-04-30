import React, { Component } from "react";
import { NavLink } from 'react-router-dom'; 


class Home extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        
    }

    render() {
        return (
            <div>
                
                <NavLink to="/contact">Contact</NavLink>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}> Submit </button>
            </div>
        );
    }
};
// const Home = () =>{
//     return (
//         <div>
//             Home
//         </div>
//     );
// };

export default Home;