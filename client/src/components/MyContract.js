import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar.js"
import getWeb3 from "../utils/getWeb3";
import { Table, Container, Button } from "react-bootstrap";


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
                <GetContract a={this.state}/>
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
            my_Constract:[],
            addr: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.SetList = this.SetList.bind(this);
        
    }

    
    handleSubmit (e) {
        e.preventDefault();
        console.log(`is in handle, addr ${this.props.a.accounts}`)
        var test
        axios.get('http://localhost:5000/api/items/'+this.props.a.accounts)
            .then(function(response) {
                console.log('Successfully connected to db in get didmount')
                console.log(response.data)
                test = response.data
                console.log(test)
                
                // console.log(`Successfully connected to db in get ${res.data}`)
                
            })
            .catch((err, res) => {
                console.log(`Not connected to db in put${err}`)
            });

        this.setState({my_Constract: test})
    }

    // componentDidMount = async () => {
    //     console.log('hiiiii')
    //     axios.get('http://localhost:5000/api/items/'+this.state.addr)
    //         .then(function(response) {
    //             console.log('Successfully connected to db in get didmount')
    //             console.log(response)
    //             this.setState({my_Constrat: response.data})
    //             // console.log(`Successfully connected to db in get ${res.data}`)
                
    //         })
    //         .catch((err, res) => {
    //             console.log(`Not connected to db in put${err}`)
    //         });
    // }

    // componentDidUpdate() {
    //     axios.get('http://localhost:5000/api/items/'+this.state.addr)
    //     .then(function(response) {
    //         console.log('Successfully connected to db in get didupdate')
    //         console.log(response)
    //         this.setState({my_Constrat: response.data})
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })   
    // }

    // ContractList() {
    //     return this.state.my_Constract.map(function(currentList, i) {
    //         return <SetTable c={currentList} key={i} />;
    //     });
    // }

    
    // SetList(props) {
    //     const numbers = props.numbers;
    //     const listItems = this.state.my_Constrat.map((number) =>
    //       <li key={number.toString()}>
    //         {number}
    //       </li>
    //     );
    //     return (
    //       <ul>{listItems}</ul>
    //     );
    //   }

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

     SetList(){
         console.log(`in setlist ${this.state.my_Constract}`)
        const ContractList = this.state.my_Constract.map((my_C) => 
            <SetTable c={my_C}/>
            // <tr>
            //     <td>{my_C._contract}</td>
            // <td>{my_C._start}</td>
            // <td>{my_C._due}</td>
            // <td>{my_C._action}</td>
            // <td>link !!! </td>
            // </tr>
        );

        return( 
            <ul>{ContractList}</ul> 
        );
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
                        
                            { this.SetList() }
                        </tbody>
                    </Table>

                    <Button onClick={this.handleSubmit } > click </Button>
                </Container>
            </div>
        );
    }
};

export default MyContract;