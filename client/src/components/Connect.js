import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar.js"
import { Container } from "react-bootstrap";

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
                <h3> mongodb Item </h3>
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
                <HostConnect/>
                <Queryy/>
            </div>
        );
    }
};

class HostConnect extends Component{

    constructor(props) {
        super(props);    
        this.state= {
            _name: '',
            _userid: '',
            _date: '',
            _emergency: '',
            _surgery: '',
            _admission: '',
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

        console.log(`in hundlesubmit: ${this.state._name}`);

        const user = {
            // schema : _name, _userid, _date, _emergency, _surgery, _admission
            // name: this.state.input,
            _name: this.state._name,
            _userid: this.state._userid,
            _date: this.state._date,
            _emergency: this.state._emergency,
            _surgery: this.state._surgery,
            _admission: this.state._admission,
        };

        axios.post('http://localhost:5000/api/hospitals', user)
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
                <h3> mongodb Item </h3>
                <form className="form-horizontal" role="form">
                    <input
                    label={"Name"}
                    name={"_name"} 
                    placeholder={"_name"} 
                    onChange={this.handleChange}
                    value={this.state._name}
                    />
                    <input
                    label={"Id"}
                    name={"_userid"}
                    placeholder={"Your ID"} 
                    onChange={this.handleChange}
                    value={this.state._userid}
                    />
                    <input
                    label={"Date"}
                    placeholder={"_date"} 
                    name={"_date"}
                    onChange={this.handleChange}
                    value={this.state._date}
                    />
                    <input
                    label={"Emergency"}
                    placeholder={"_emergency"} 
                    name={"_emergency"}
                    onChange={this.handleChange}
                    value={this.state._emergency}
                    />
                    <input
                    label={"Surgery"}
                    placeholder={"_surgery"} 
                    name={"_surgery"}
                    onChange={this.handleChange}
                    value={this.state._surgery}
                    />
                    <input
                    label={"Admission"}
                    placeholder={"_admission"} 
                    name={"_admission"}
                    onChange={this.handleChange}
                    value={this.state._admission}
                    />
                </form>

                <button onClick={this.handleSubmit}> click</button>
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
    }

    render(){
        return (
            <div>
                <h3> query </h3>
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