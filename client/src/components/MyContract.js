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
          my_Constract:[]
        }
    }
    
    componentDidMount = async() => {
        try {
            
            // Get network provider and web3 instance.
            const web3 = await getWeb3();
        
            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();
            console.log(`account ${accounts}`)
            
            this.setState({ web3, accounts: accounts });


            const self = this
            axios.get('http://localhost:5000/api/items/'+this.state.accounts)
                .then(function(response) {
                    console.log('Successfully connected to db in get didmount')
                    console.log(response.data)

                    /* JSON to array - example 1
                    let topbarLinks = myJson.topbarLinks.map((topbarLinks, key) => {
                        return (
                            <Link
                            key={topbarLinks.id}
                            text={topbarLinks.text}
                            icon={topbarLinks.icon}
                            link={topbarLinks.link}
                            />
                        )
                        })
                        this.setState({topbarLinks: topbarLinks});  
                    */
                        
                    /* JSON to array - example 2
                    var test = Object.keys(response.data[0]).map(function(k) { return (response.data[0])[k] });
                    console.log(typeof(test))
                    console.log(`test is ${test["_id"]}`)
                    */

                    let tmp = response.data.map((topbarLinks, key) => {
                        console.log(`in map ${topbarLinks._id}`)
                        return (
                            
                            <tr key={topbarLinks._id}>
                            <td> _id = {topbarLinks._id}/</td>
                            <td> _start = {topbarLinks._start}</td>
                            <td> _due = {topbarLinks._due}</td>
                            <td>_link = {topbarLinks._contract}</td>
                            </tr>
                            
                        )
                    })

                    self.setState({my_Constract: tmp});
                    
                })
                .catch((err, res) => {
                    console.log(`Not connected to db in put${err}`)
                });

        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts. Check console for details. in MyContract`,
            );
            console.error(error);
        }
    };


    render(){
        console.log(`hii ${this.state.my_Constract}`)
        const numbers = [1, 2, 3, 4, 5];
        const num = numbers.map((number) => <li key={number}>{number}</li> );
        return (
            <div>
                <NavBar/>
                <h2> MyContract addr = {this.state.accounts} </h2>
                
                {/* <h2> code : {this.state.my_Constract}</h2> */}
            
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
                            {this.state.my_Constract}
                        </tbody>
                    </Table>
                </Container>

            </div>
        );
    }
};

export default MyContract;