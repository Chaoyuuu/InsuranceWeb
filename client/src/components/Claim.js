import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import SimpleStorageContract from "../contracts/Insurance.json";
import getWeb3 from "../utils/getWeb3";
import NavBar from "./NavBar.js"
import axios from "axios"
import { Container, Button } from "react-bootstrap";
import { Spin, Steps, Result, Icon } from 'antd';

import "./css/Claim.css";

const { Step } = Steps;



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
            },
            step_state:'0'
        }

        this.setTitle = this.setTitle.bind(this);
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

            this.setState({flag: 2, uid: a.events.UID.returnValues.uid, step_state: 1})
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
                        flag: 3,
                        step_state: 2
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
                                    this.setState({flag: 4,
                                        if_claim: 1,
                                        step_state: 3
                                     })
                                }else{
                                    // console.error(error);
                                    console.log("claim error");
                                    console.log(error);
                                    this.setState({if_claim: 2})
                                }
                            }.bind(this));
            console.log(`is a`)
            console.log(a)
            
        }else if(flag == 4){
            //set is_accident = 1 in items DB
            console.log('in flag = 4') 
            console.log(this.props.match.params.id)
            axios.post('http://localhost:5000/api/items/update/'+ this.props.match.params.id)
                .then((req, res) => {
                    console.log('Successfully connected to db')
                    // console.log(`Successfully connected to db ${req.data}`)
                    console.log(res)
                    // res.status(200).send(res)

                
                })
                .catch((err, res) => {
                    console.log(`Not connected to db ${err}`)
                });   

            // this.setState({flag: 5})
            
        }else{
            console.log("issss else")
        }
    }

    setTitle(){
        if(this.state.if_claim == 1){
            return(
                <div>
                    <Result className="result"
                        icon={<Icon type="smile" theme="twoTone" twoToneColor="#F4D03F"/>}
                        title="交易完成!"
                        subTitle="理賠成功，請至帳戶查看金額."
                        extra={[
                        <Button key="1" className="btn_M" variant="success" href="/MyContract"> 查看合約 </Button>,
                        <Button key="2" className="btn_C" variant="success" href="/Contracts">購買保險</Button>
                        ]}
                    />
                </div>
                
                //more details ..
            );
        }else if(this.state.if_claim == 2){
            return(
                <div>
                 <Result className="result"
                    status="warning"
                    title="很抱歉，理賠申請失敗"
                    subTitle="正在尋找失敗原因..."
                    extra={
                    <Button key="1" variant="danger" href="/MyContract"> 查看合約 </Button>
                    }
                />
                </div>
            );
        }else if(this.state.if_claim == 0){
            return(
                <div>
                    <h3>努力計算中...請稍等...   
                    <Spin />
                    </h3>
                </div>
                
            );
        } 
    }

    render() {
        if (!this.state.web3) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <Container className="container">                        
                    {/* <h2> if_claim</h2> */}
                    <Steps current={parseInt(this.state.step_state)}>
                        <Step title="準備中" description="資料連線" />
                        <Step title="載入第三方資料庫" description="取得醫院資料" />
                        <Step title="計算理賠" description="智能合約進行計算" />
                        <Step title="理賠成功" description="請至帳戶查看金額" />
                    </Steps> 
                    {this.setTitle()}

                </Container>
            </div>
        );
    } 
}

export default Claim;

