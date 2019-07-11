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
            uid: '',
            ddata: {
                _emergency:'',
                _surgery:'',
                _admission:'',
                _MMonth:'',
                _DDate:''
            }
        }
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
            //get userid in blockchain
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
            //get data from hospitals db
            console.log("in axiox get")
            var self = this
            axios.get('http://localhost:5000/api/hospitals/'+this.state.uid)
                .then(function(response) {
                    console.log('Successfully connected to db in get didmount')
                    console.log(response.data[0]._userid)
                    const output = response.data[0]
                    console.log(output)
                    self.setState({
                        _emergency: output._emergency,
                        _surgery: output._surgery,
                        _admission: output._admission,
                        _MMonth: output._date.substring(0,2),
                        _DDate: output._date.substring(3,5),
                        flag: 3
                    })

                    console.log(self.state._emergency)
                    console.log(self.state._surgery)
                    console.log(self.state._admission)
                    console.log(self.state._MMonth)
                    console.log(self.state._DDate)
                    
                })
                .catch((err, res) => {
                    console.log(`Not connected to db in put${err}`)
                });
        }else if(flag == 3){
            //claim contract in blockchain
            console.log("in claim in block chain")
            const a = await contract.methods.getDocument(
                                                this.state._emergency, 
                                                this.state._surgery, 
                                                this.state._MMonth, 
                                                this.state._DDate)
                            .send({ from: accounts[0] }, function(error, result){
                                if(!error){
                                    console.log("claim success")
                                    console.log(result)
                                    this.setState({flag: 4})
                                    this.setState({if_claim: 1})
                                }else{
                                    // console.error(error);
                                    console.log("claim error");
                                    console.log(error);
                                    this.setState({if_claim: 0})
                                }
                            }.bind(this));
            console.log(`is a`)
            console.log(a)
            
        }else{
            console.log("issss else")
        }
    }

    render() {
        if (!this.state.web3) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (
            <div>
                <NavBar/>
                <Container>                        
                        <h2> if_claim</h2>
                        <h2>{this.state.if_claim == 1 ? 'you got 5 dollars' : 'fail to claim'}</h2>
                </Container>
            </div>
        );
    } 
}

export default Claim;

