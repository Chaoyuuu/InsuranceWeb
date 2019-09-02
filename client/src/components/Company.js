import React, { Component } from "react";
import SimpleStorageContract from "../contracts/Insurance.json";
import NavBar from "./NavBar.js"
import getWeb3 from "../utils/getWeb3";
import { Container, Button } from "react-bootstrap";
import { Spin, Result, Icon, notification } from 'antd';


class Company extends Component{

    constructor(props) {
        super(props)
        this.state = {
            storageValue: null,
            web3: null,
            accounts: null,
            contract: null,
            flag: 0,
            user_no: 0,
            claim_no: 0,
            money: '',
            error_msg:''
        }
        this.setTag = this.setTag.bind(this);
        this.openNotification = this.openNotification.bind(this);

    }

    openNotification = ()=> {
        notification.open({
            message: '注意',
            description:
                '如果頁面沒有跳轉，請確認Metamask的訊息 !',
            duration: 5,
            placement: 'bottomRight',
            icon: <Icon type="exclamation-circle" style={{ color: '#F5B041' }}/>,

        });
      };

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
            
                this.setState({ web3, accounts, contract: instance});
                this.setState({ flag: 1})


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
        if(flag === 1){
            //get userid in blockchain
            console.log('in getUserID')
            this.openNotification();

            const a = await contract.methods.moreInfo()
                            .send({ from: accounts[0] }, function(error, result){
                                if(!error){
                                    console.log("claim success")
                                    console.log(result)
                                }else{
                                    console.log("claim error");
                                    console.log(error);

                                    var error_msg = 'the error';

                                    if(error.message.includes('revert not insurer')){
                                        console.log("revert not insurer")
                                        error_msg = "非特定使用者"
                                    }else{
                                        error_msg = "error";
                                    }
                                   
                                    this.setState({flag: 3, error_msg: error_msg})
                                    console.log(error_msg)
                                }
                            }.bind(this));

            var value = web3.utils.fromWei(a.events.moreinfo.returnValues.contract_ether, 'ether');
            this.setState({flag: 2, 
                            user_no: a.events.moreinfo.returnValues.total_usr, 
                            claim_no: a.events.moreinfo.returnValues.claim_usr,
                            money: value })

            console.log(`${this.state.user_no}, ${this.state.claim_no}, ${this.state.money}, ${this.state.flag}`)
        }   
    }

    setTag(){
        if(this.state.flag === 1){
            return(
                <div>
                    <h3>確認資訊中...請稍等...   
                    <Spin />
                    </h3>
                </div>

            );
        }else if(this.state.flag === 2){
            return(
                <div>
                    
                    <h2>方案一詳細內容如下:</h2>
                    <h3>使用者人數: {this.state.user_no}</h3>
                    <h3>已經理賠的合約: {this.state.claim_no} </h3>
                    <h3>合約餘額: {this.state.money} ETH </h3>
                    
                </div>
            );
        }else if(this.state.flag === 3){
            return(
                <div>
                 <Result className="result"
                    status="warning"
                    title="很抱歉，您不能存取資料"
                    subTitle={this.state.error_msg}  
                    extra={
                    <Button key="1" variant="danger" href="/"> 離開 </Button>
                    }
                />
                </div>
                
            );
        } 
    }

    render() {
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container >
                    {this.setTag()}
                </Container>
            </div>
        );
    }
}

export default Company;