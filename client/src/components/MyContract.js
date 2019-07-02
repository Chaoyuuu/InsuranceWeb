import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar.js"
import getWeb3 from "../utils/getWeb3";
import { Table, Container } from "react-bootstrap";


class MyContract extends Component{

    constructor(props) {
        super(props)
        this.state = {
          storageValue: null,
          web3: null,
          accounts: null,
        //   contract: null
        }
        // this.setContract = this.setContract.bind(this)
    }
    
      componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();
    
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();
          console.log(`account ${accounts}`)

          this.setState({ web3, accounts: accounts });
    
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts. Check console for details. in MyContract`,
          );
          console.error(error);
        }
      };

    render(){
        return (
            <div>
                <NavBar/>
                <h2> MyContract addr = {this.state.accounts} </h2>
                <GetContract a={this.state.accounts}/>
            </div>
        );
    }
};

const SetTable = props => (
    <tr>
        {/* <td className={props.c._contract ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.c._start ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.c._due ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td className={props.c._action ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td> */}

        <td>{props.c._contract}</td>
        <td>{props.c._start}</td>
        <td>{props.c._due}</td>
        <td>{props.c._action}</td>
        <td>link !!! </td>
    </tr>
)

class GetContract extends Component{

    constructor(props) {
        super(props);    
        this.state = {
            my_Constrat:[],
            addr: this.props.a
        }
    }

    componentDidMount = async () => {
        axios.get('http://localhost:5000/api/items/'+this.state.addr)
            .then(function(response) {
                console.log('Successfully connected to db in get didmount')
                console.log(response)
                this.setState({my_Constrat: response.data})
                // console.log(`Successfully connected to db in get ${res.data}`)
                
            })
            .catch((err, res) => {
                console.log(`Not connected to db in put${err}`)
            });
    }

    componentDidUpdate() {
        axios.get('http://localhost:5000/api/items/'+this.state.addr)
        .then(function(response) {
            console.log('Successfully connected to db in get didupdate')
            console.log(response)
            this.setState({my_Constrat: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    ContractList() {
        return this.state.my_Constrat.map(function(currentList, i) {
            return <SetTable c={currentList} key={i} />;
        });
    }

    render(){
        return (
            <div>
                <h3> MyContract </h3>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>My Contract</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.ContractList() }
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
};

export default MyContract;