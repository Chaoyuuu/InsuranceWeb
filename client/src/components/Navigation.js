import React, { Component } from "react";

import { NavLink } from 'react-router-dom'; 

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        );
    }
    
};

export default Navigation;