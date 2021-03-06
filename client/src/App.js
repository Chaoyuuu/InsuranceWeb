import React, { Component } from "react";
import SimpleStorageContract from "./contracts/Insurance.json";
import getWeb3 from "./utils/getWeb3";
import axios from 'axios';
import moment from 'moment';
import "./App.css";
import NavBar from "./components/NavBar.js";
import { Container, Button } from "react-bootstrap";
import { DatePicker, Col, notification, Steps, Icon, Descriptions} from 'antd';

import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
const { Step } = Steps;

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            storageValue: null,
            web3: null,
            accounts: null,
            contract: null,
            if_true: false,
            if_success: false,

            blockHash:'0x123123',
            blockNumber:'123',
            txHash:'0x123123',
            start: '123',
            end: '123',
        }
        this.setContract = this.setContract.bind(this)
        this.postRequest = this.postRequest.bind(this)
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
            this.setState({ web3, accounts, contract: instance });

        } catch (error) {
        // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };

  /*
  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5, 6).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
   
  };  
  */

    setContract = async (content1, content2, content3, content4, content5) => {
        const { accounts, contract } = this.state;

        // Stores a given value, 5 by default.
        // const output = await contract.methods.setUserInfo(content1, content2, content3, content4, content5).send({ from: accounts[0] });
        const output = await contract.methods.SetDetail(content1, content2, content3, content4, content5).send({ from: accounts[0], value: 10000000000000000000});
        console.log("output")
        console.log(output)
        console.log(output.blockHash)
        console.log(output.transactionHash)
        console.log(output.blockNumber)
        console.log(output.status)

        this.setState({if_true: output.status})

        if(this.state.if_true){
            console.log("niceee")

            let s = content1 + '/' + content2
            let e = content3 + '/' + content4
            console.log(`s:${s}, e:${e}`)

            this.postRequest(s, e, output.blockHash, output.blockNumber, output.transactionHash);
        }else{
            console.log("error in setContract()")
        }
        // Get the value from the contract to prove it worked.
        // const response = await contract.methods.get().call();

        // Update state with the result.
        // this.setState({ storageValue: output });
    }

    postRequest = async (start, end, blockHash, blockNumber, transactionHash) =>{
        const user = {
            // name: this.state.input,
            _addr: this.state.accounts[0],
            _contract: 'contract1',
            _start: start,
            _due: end,
            _action: '0',
            _blockhash: blockHash,
            _blocknum: blockNumber,
            _txhash: transactionHash,
        };

        axios.post('http://localhost:5000/api/items/add', user)
            .then((req, res) => {
                console.log(`Successfully connected to db ${req.data}`)
                this.setState({if_success: true, blockHash: blockHash, blockNumber: blockNumber, txHash: transactionHash,
                                start: start, end: end})
              
            })
            .catch((err, res) => {
                console.log(`Not connected to db ${err}`)
            });
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
                {/* <h3> my account = {this.state.accounts[0]}</h3> */}

                {this.state.if_success? 
                    <Container>
                        <Col span={6}>
                            <Steps direction="vertical" current={2} className="steps">
                                <Step title={<strong>選擇方案</strong>} description="選擇適合的方案" />
                                <Step title="填寫基本資料" description="請填寫相關內容" />
                                <Step title="購買完成" description="感謝支持" />
                            </Steps>
                        </Col>
                        <Col span={18}>
                            <h3>交易完成 !</h3>
                            <Descriptions title="詳細內容如下:" bordered>
                                <Descriptions.Item label="Account" span={3}>{this.state.accounts}</Descriptions.Item>
                                <Descriptions.Item label="Usage Time" span={3}>{moment().format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
                                <Descriptions.Item label="Start Date" >{this.state.start}</Descriptions.Item>
                                <Descriptions.Item label="Due Date" >{this.state.end}</Descriptions.Item>
                                <Descriptions.Item label="blockNumber" >{this.state.blockNumber}</Descriptions.Item>
                                <Descriptions.Item label="blockHash" span={3}>{this.state.blockHash}</Descriptions.Item>
                                <Descriptions.Item label="txHash"span={3}>{this.state.txHash}</Descriptions.Item>
                            </Descriptions>
                            <br/>
                            <br/>
                            <Button className="btn_M" variant="success" href="/MyContract"> 查看合約 </Button>
                            <Button className="btn_C" variant="success" href="/Contracts">購買保險</Button>
                        </Col>
                    </Container>
                    :
                    <Container>
                        <Col span={6}>
                            <Steps direction="vertical" current={1} className="steps">
                                <Step title={<strong>選擇方案</strong>} description="選擇適合的方案" />
                                <Step title="填寫基本資料" description="請填寫相關內容" />
                                <Step title="購買完成" description="感謝支持" />
                            </Steps>
                        </Col>
                        <Col span={18}>
                            <ToList setContract={this.setContract} postRequest={this.postRequest}/>
                        </Col>
                    </Container>
                }

                {/* <p>the output = {this.state.storageValue}</p> */}
            
            </div>
        );
    } 
}

class ToList extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            items:[], 
            name:'', 
            birth:'', 
            ID:'', 
            startM:'', 
            startD:'', 
            endM:'', 
            endD:'',

            notify_flag: 1,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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

      
    handleChange(e) {
        let changeName = e.target.name
        console.log(changeName)
        this.setState({ [changeName]: e.target.value})
        // this.setState({ text: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.name.length) {
            console.log("is in")
            return;
        }
        console.log("is in handle")
        console.log(this.state.startM)
        console.log(this.state.startD)
        console.log(this.state.endM)
        console.log(this.state.endD)

        this.props.setContract(this.state.startM, this.state.startD, this.state.endM, this.state.endD, this.state.ID)
        // this.props.postRequest(this.state.startM, this.state.startD, this.state.endM, this.state.endD);
        this.openNotification();
    }

    onChange = (value, dateString) => {
        this.setState({startM: dateString[0].substring(5,7)})
        this.setState({startD: dateString[0].substring(8,10)})
        this.setState({endM: dateString[1].substring(5,7)})
        this.setState({endD: dateString[1].substring(8,10)})
    }

    render() {
        return (
        <div className="form-horizontal">
            <br/>
            <br/>
            <br/>
            <h2 htmlFor="new-todo" className="text-center">
                請輸入基本資料
            </h2>
            <form>
                <FormStyle 
                    label={"Name"}
                    placeholder={"Your name"} 
                    name={"name"}
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <FormStyle
                    label={"Birth"}
                    name = {"birth"}
                    placeholder={"Your birth (MM/DD)"}
                    onChange={this.handleChange}
                    value={this.state.birth}
                />
                <FormStyle
                    label={"ID"}
                    name ={"ID"}
                    placeholder={"Your ID"}
                    onChange={this.handleChange}
                    value={this.state.ID}
                />
            </form>

            <h2>請選擇日期</h2>
            <RangePicker size="large" onChange={this.onChange} />
            
            <br/>
            <br/>
            <button type="button" className="btn btn-primary" 
            //  onClick={this.openNotification}> Submit </button>
                 onClick={this.handleSubmit}> Submit </button> 

            {/* <SetValue a={this.state}/> */}
        </div>
        );
    }
}

class SetValue extends Component {
    render() {
        return (
        <div className="App">
            <br/>
            <h3>Good to Go!</h3>
            <li>Name = {this.props.a.name}</li>
            <li>Birth = {this.props.a.birth}</li>
            <li>ID = {this.props.a.ID}</li>
            <li>StartDate = {this.props.a.startM} / {this.props.a.startD}</li>
            <li>EndDate = {this.props.a.endM} / {this.props.a.endD}</li>
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

export default App;

