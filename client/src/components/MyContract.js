import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar.js"
import getWeb3 from "../utils/getWeb3";
import { Container } from "react-bootstrap";
import { Table, Tag, Button } from 'antd';
import "./css/MyContract.css";

var arr = [];
const columns_t = [
    {
        title: 'Index',
        dataIndex: '_index',
        key: '_index',
    },
    {
        title: 'Contract',
        dataIndex: '_contract',
        key: '_contract',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Start Date',
        dataIndex: '_start',
        key: '_start',
    },
    {
        title: 'Due Date',
        dataIndex: '_end',
        key: '_end',
    },
    {
        title: 'State',
        dataIndex: '_state',
        key: '_state',
        render: _state => (
            <span>
            { _state == 0 ? 
                <Tag className="tag" color="geekblue" key={_state}>還沒理賠 </Tag> : <Tag  className="tag" color="green" key={_state}>已經理賠 </Tag>
            }</span>
          ),
    },
    {
        title: 'Action',
        dataIndex: '_action',
        key: '_action',
        render: _action => (
            <span>
            { _action[0] == 0 ? 
                <Button className="btn" size="small" type="danger" href={'/Claim/'+_action[1]} >點我理賠</Button> : <p></p>
            }</span>
          ),
    },
];

class MyContract extends Component{

    constructor(props) {
        super(props)
        this.state = {
          storageValue: null,
          web3: null,
          accounts: null,
          my_Constract:[],
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

                    /* use react-bootstrap
                    let tmp = response.data.map((topbarLinks, key) => {
                        console.log(`in map ${topbarLinks._id}`)
                        return (

                          console.log(topbarLinks)
                            data.push(topbarLinks._contract)
                            <tr key={topbarLinks._id}>
                            <td> {topbarLinks._contract}</td>
                            <td> {topbarLinks._start}</td>
                            <td> {topbarLinks._due}</td>
                            <td> {topbarLinks._action == 0 ? 
                                <Button variant="info" href={'/Claim/'+topbarLinks._id} >點我理賠</Button> : <Tag color="cyan">完成理賠</Tag> }</td>
                            </tr> 
                        )
                    })
                    */  

                    let tmp = response.data.map((topbarLinks, key) => {
                        // console.log(`in map ${topbarLinks._id}, ${key}`)
                        // console.log(topbarLinks);

                        const k_tmp = key;
                        const tmp ={
                            key : k_tmp,
                            _index: k_tmp,
                            _contract : topbarLinks._contract,
                            _start : topbarLinks._start,
                            _end : topbarLinks._due,
                            _state : topbarLinks._action,
                            _action : [topbarLinks._action, topbarLinks._id]
                        }

                        arr.push(tmp);
                        console.log(`arr = ${JSON.stringify(arr)}`)
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
        // const numbers = [1, 2, 3, 4, 5];
        // const num = numbers.map((number) => <li key={number}>{number}</li> );
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container id="table">               

                <h3> MyContract addr = {this.state.accounts} </h3>
                <Table className="table_contract align:center fontSize:'50px' " columns={columns_t} dataSource={arr} />
            
                    {/* <Table striped bordered hover className="table_contract" thStyle={{ 'background-color': 'red' }} height='120px'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>My Contract</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.my_Constract}
                        </tbody>
                    </Table> */}
              </Container>
            </div>
        );
    }
};

export default MyContract;