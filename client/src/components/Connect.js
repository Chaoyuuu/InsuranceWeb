import React, { Component } from "react";
import axios from 'axios';

// const decRef = firestore.doc()
// const outputHeader = document.querySelector("Name");

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
        
        /*
        var headers = {
                'Access-Control-Allow-Origin': '*',      
        };
        */

        axios.post('http://localhost:5000/api/items', user)
            .then((req, res) => {
                console.log('Successfully connected to db')
                console.log(`Successfully connected to db ${req.data}`)
                console.log(res)
                // res.status(200).send(res)
              
            })
            .catch((err, res) => {
                console.log(`Not connected to db ${err}`)
            });
    }

    render(){
        return (
            <div>
                <h3> mongodb </h3>
                <form className="form-horizontal" role="form">
                    <input
                    label={"Name"}
                    placeholder={"input"} 
        
                    onChange={this.handleChange}
                    value={this.state.input}
                    />
                </form>

                <button onClick={this.handleSubmit}> click</button>
                <Queryy/>
            </div>
        );
    }
};

class Queryy extends Component {
    constructor(props) {
        super(props);    
        this.state= {input:'', item_table:[]};
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


        // axios.put('http://localhost:5000/api/items', user)
        //     .then((req, res) => {
        //         console.log('Successfully connected to db in put')
        //         console.log(`Successfully connected to db in put ${req.data}`)
        //         console.log(res)
        //         // res.status(200).send(res)
              
        //     })
        //     .catch((err, res) => {
        //         console.log(`Not connected to db in put${err}`)
        //     });

        axios.get('http://localhost:5000/api/items')
            .then((req, response) => {
                console.log('Successfully connected to db in get')
                console.log(response)
                // this.setState({item_table: res.data})
                // console.log(`Successfully connected to db in get ${res.data}`)
                
            })
            .catch((err, res) => {
                console.log(`Not connected to db in put${err}`)
            });
               
    }

    render(){
        return (
            <div>
                <h3> firebase </h3>
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
}

export default Connect;