import React, { Component } from "react";
import axios from 'axios';

class Connect extends Component{

    constructor(props) {
        super(props);    
        this.state= {input:'noooinput'};
        // this.state = {items:[], name:'', birth:'', ID:'', sDate:'', eDate:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        //console.log(e.target.value)
        this.setState({input: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(`in hundlesubmit: ${this.state.input}`);

        const user = {
            name: this.state.input,
        };

        console.log(`const user: ${user.name}`);
        
        // var headers = {
        //         'Access-Control-Allow-Origin': '*',
                
        // };

        axios.post('http://localhost:5000/api/items', user)
            .then((req, res) => {
                console.log('Successfully connected to db')
                console.log(`Successfully connected to db ${req.data}`)
                // res.status(200).send(res)
                // const newItem = new Item({
                //     name: req.body.name,
                //     n2: req.body.n2
                // });
            
                // newItem.save().then(item => res.json(item));
            })
            .catch((err, res) => {
                console.log(`Not connected to db ${err}`)
            });

    
    }

    render(){
        return (
            <div>
                <form className="form-horizontal" role="form">
                    <input
                    label={"Name"}
                    placeholder={"input"} 
        
                    onChange={this.handleChange}
                    value={this.state.input}
                    />
                </form>

                <button onClick={this.handleSubmit}> click</button>
            </div>
        );
    }
};

export default Connect;