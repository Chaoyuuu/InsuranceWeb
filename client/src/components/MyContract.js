import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar.js"
import getWeb3 from "../utils/getWeb3";
import {  Container, Button } from "react-bootstrap";
import { Empty} from 'antd';
import {  Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
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
          // data: {
          //       d_contract:'',
          //       d_start:'',
          //       d_due:'',
          //       d_action:'',
          // },
          // data_t:[]
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
                            <td> {topbarLinks._contract}</td>
                            <td> {topbarLinks._start}</td>
                            <td> {topbarLinks._due}</td>
                            <td> {topbarLinks._action == 0 ? 
                                <Button variant="info" href={'/Claim/'+topbarLinks._id} >點我理賠</Button> : <Tag color="cyan">完成理賠</Tag> }</td>
                            </tr>
                            
                        )
                    })




                    // let tmp = response.data.map((topbarLinks, key) => {
                    //     console.log(`in map ${topbarLinks._id}`)
                    //     return (

                    //       console.log(topbarLinks)
                    //         // data.push(topbarLinks._contract)
                    //         // <tr key={topbarLinks._id}>
                    //         // <td> {topbarLinks._contract}</td>
                    //         // <td> {topbarLinks._start}</td>
                    //         // <td> {topbarLinks._due}</td>
                    //         // <td> {topbarLinks._action == 0 ? 
                    //         //     <Button variant="info" href={'/Claim/'+topbarLinks._id} >點我理賠</Button> : <Tag color="cyan">完成理賠</Tag> }</td>
                    //         // </tr>
                            
                    //     )
                    // })


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

                <h2 className="tmp"> MyContract addr = {this.state.accounts} </h2>
                

                <Table columns={columns} dataSource={data} />

                {/* <h2> code : {this.state.my_Constract}</h2> */}
            
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