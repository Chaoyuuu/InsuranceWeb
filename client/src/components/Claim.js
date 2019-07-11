import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import SimpleStorageContract from "../contracts/Insurance.json";
import getWeb3 from "../utils/getWeb3";
import NavBar from "./NavBar.js"
import axios from "axios"
import { Container } from "react-bootstrap";


class Claim extends Component {

    constructor(props) {
        super(props)
        this.state = {
            storageValue: null,
            web3: null,
            accounts: null,
            contract: null,
            if_claim: 0,//set output
            flag: 0,    //goto getUserId for one time
            uid: ''
        }
        this.setContract = this.setContract.bind(this)

    }

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = SimpleStorageContract.networks[networkId];
            const instance = new web3.eth.Contract(
                SimpleStorageContract.abi,
                deployedNetwork && deployedNetwork.address,
                
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            // this.setState({ web3, accounts, contract: instance }, this.runExample);
            {
                this.setState({ web3, accounts, contract: instance});
                this.setState({ flag: 1})
            }


            

        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };

    componentDidUpdate = async() => {
        const { web3, accounts, contract, flag } = this.state;
        if(flag == 1){
            console.log('in getUserID')
            const a = await contract.methods.getUserID()
                            .send({ from: accounts[0] }, function(error, result){
                                if(!error){
                                    console.log("claim success")
                                    console.log(result)
                                    // console.log(web3.utils.toBigNumber(result))
                                }else{
                                    // console.error(error);
                                    console.log("claim error");
                                    console.log(error);
                                }
                            }.bind(this));

            this.setState({flag: 2, uid: a.events.UID.returnValues.uid})
            // console.log(`aaa is =`)
            // console.log(a.events.UID.returnValues.uid)
            console.log(this.state.uid)
        }else if(flag == 2){
            console.log("in axiox get")
            axios.get('http://localhost:5000/api/hospitals/'+this.state.uid)
                .then(function(response) {
                    console.log('Successfully connected to db in get didmount')
                    console.log(response.data)

                    // let tmp = response.data.map((topbarLinks, key) => {
                    //     console.log(`in map ${topbarLinks._id}`)
                        // return (
                        //     <td> _id = {topbarLinks._id}/</td>                            
                        // )
                    // })
                    
                })
                .catch((err, res) => {
                    console.log(`Not connected to db in put${err}`)
                });

            this.setState({flag: 3})
        }
        
    }

    setContract = async (content1, content2, content3, content4) => {
        const { accounts, contract } = this.state;

        await contract.methods.getDocument(content1, content2, content3, content4)
                            .send({ from: accounts[0] }, function(error, result){
                                if(!error){
                                    console.log("claim success")
                                    console.log(result)
                                    this.setState({if_claim: 1})
                                }else{
                                    // console.error(error);
                                    console.log("claim error");
                                    console.log(error);
                                    this.setState({if_claim: 0})
                                }
                            }.bind(this));

        // Get the value from the contract to prove it worked.
        // const response = await contract.methods.get().call();

        // Update state with the result.
        // this.setState({ storageValue: output });
    }

    render() {
        if (!this.state.web3) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (
            <div><NavBar/>
                <Container>
                        <ToList setContract={this.setContract}/>
                        
                        <h2> if_claim</h2>
                        <h2>{this.state.if_claim == 1 ? 'you got 5 dollars' : 'fail to claim'}</h2>
                </Container>
            </div>
        );
    } 
}

class ToList extends Component {
    constructor(props) {
        super(props);    
        this.state = {claim_M:'', claim_D:'', doc_A:'', doc_B:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 這裡應該改成
    // 1. 去db找東西: State
    // 2. 輸入智能合約的參數: this.props.setContract(this.state.doc_A, this.state.doc_B, this.state.claim_M, this.state.claim_D)
    // 3. 理賠是否成功: return ???

    handleChange(e) {
        let changeName = e.target.name
        console.log(changeName)
        this.setState({ [changeName]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.doc_A.length) {
            console.log("is in")
            return;
        }
        console.log("is in handle")

        // this.props.setContract(this.task_x.value, this.task_y.value)
        this.props.setContract(this.state.doc_A, this.state.doc_B, this.state.claim_M, this.state.claim_D)
    }

    render() {
        return (
        <div>
            
            <br/>
            <br/>
            <br/>
            <h2> Claim to contract</h2>

            <form className="form-horizontal" role="form">
                <FormStyle 
                label={"Doc_A"}
                placeholder={"Doc_A"} 
                name={"doc_A"}
                onChange={this.handleChange}
                value={this.state.doc_A}
                />
                <FormStyle
                label={"Doc_B"}
                name = {"doc_B"}
                placeholder={"Doc_B"}
                onChange={this.handleChange}
                value={this.state.doc_B}
                />
                <FormStyle
                label={"claim_M"}
                name ={"claim_M"}
                placeholder={"claim_M"}
                onChange={this.handleChange}
                value={this.state.claim_M}
                />
                <FormStyle
                label={"claim_D"}
                name = {"claim_D"}
                placeholder={"claim_D"}
                onChange={this.handleChange}
                value={this.state.claim_D}
                />
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit }> Submit </button>
            </form>
            <SetValue a={this.state}/>

        </div>
        );
    }
}

class SetValue extends Component {
  render() {
    return (
      <div>
        <br/>
        <h3>input argument</h3>
        <li>doc_A = {this.props.a.doc_A}</li>
        <li>doc_B = {this.props.a.doc_B}</li>
        <li>claim_M = {this.props.a.claim_M}</li>
        <li>claim_D = {this.props.a.claim_D}</li>
      </div>
    );
  }
}


class FormStyle extends Component {
  render() {
    return(
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">{this.props.label}</span>
        </div>
      <input 
        type="text" 
        className="form-control" 
        placeholder={this.props.placeholder} 
        name={this.props.name} 
        onChange={this.props.onChange}
        value={this.props.value}/>            
      </div>
    );
  }
}


export default Claim;

