import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar.js"

class Connect extends Component{

    constructor(props) {
        super(props);    
        this.state= {
            _contract: '',
            _start: '',
            _due: '',
            _action: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let changeName = e.target.name
        console.log(changeName)
        this.setState({ [changeName]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(`in hundlesubmit: ${this.state._contract}`);

        const user = {
            // name: this.state.input,
            _contract: this.state._contract,
            _start: this.state._start,
            _due: this.state._due,
            _action: this.state._action,
        };

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
                <NavBar/>
                <h3> mongodb </h3>
                <form className="form-horizontal" role="form">
                    <input
                    label={"Contract"}
                    name={"_contract"} 
                    placeholder={"_contract"} 
                    onChange={this.handleChange}
                    value={this.state._contract}
                    />
                    <input
                    label={"Start"}
                    name={"_start"}
                    placeholder={"start"} 
                    onChange={this.handleChange}
                    value={this.state._start}
                    />
                    <input
                    label={"Due"}
                    placeholder={"_due"} 
                    name={"_due"}
                    onChange={this.handleChange}
                    value={this.state._due}
                    />
                    <input
                    label={"Action"}
                    placeholder={"_action"} 
                    name={"_action"}
                    onChange={this.handleChange}
                    value={this.state._action}
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

        axios.get('http://localhost:5000/api/items')
            .then(function(response) {
                console.log('Successfully connected to db in get')
                console.log(response)
                // this.setState({item_table: res.data})
                // console.log(`Successfully connected to db in get ${res.data}`)
                
            })
            .catch((err, res) => {
                console.log(`Not connected to db in put${err}`)
            });
               
        // axios.get('http://localhost:5000/api/items')
        //     .then(function (response) {
        //       // handle success
        //       console.log(response.data);
        //     })
        //     .catch(function (error) {
        //       // handle error
        //       console.log(error);
        //     })
            // .finally(function () {
            //   // always executed
            // });
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