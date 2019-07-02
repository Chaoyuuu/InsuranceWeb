import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import SimpleStorageContract from "./contracts/Insurance.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      storageValue: null,
      web3: null,
      accounts: null,
      contract: null
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

  setContract = async (content1, content2, content3, content4) => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // const output = await contract.methods.setUserInfo(content1, content2, content3, content4, content5).send({ from: accounts[0] });
    const output = await contract.methods.SetDetail(content1, content2, content3, content4).send({ from: accounts[0] });
    console.log("output")

    console.log(output)
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
      <div className="container">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="https://github.com/Chaoyuuu/InsuranceWeb" target="_blank">BlockChain Dapp | Insurance Web</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account">{this.state.accounts[0]}</span></a></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
            <ToList setContract={this.setContract}/>
            </main>
          </div>
        </div>

        {/* <p>the output = {this.state.storageValue}</p> */}
      
      </div>
    );
  } 
}

class ToList extends Component {
  constructor(props) {
    super(props);    
    this.state = {items:[], name:'', birth:'', ID:'', startM:'', startD:'', endM:'', endD:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

    // this.props.setContract(this.task_x.value, this.task_y.value)
    // this.props.setContract(this.state.name, this.state.birth, this.state.ID, this.state.sDate, this.state.eDate)
    this.props.setContract(this.state.startM, this.state.startD, this.state.endM, this.state.endD)

  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
          <h2 htmlFor="new-todo">
            Please Input User Information
          </h2>
          <form className="form-horizontal" role="form">
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
            <FormStyle
              label={"StartDate_M"}
              name = {"startM"}
              placeholder={"Contract StartDate_M"}
              onChange={this.handleChange}
              value={this.state.startM}
            />
            <FormStyle
              label={"StartDate_D"}
              name = {"startD"}
              placeholder={"Contract StartDate_D"}
              onChange={this.handleChange}
              value={this.state.startD}
            />
            <FormStyle
              label={"EndDate_M"}
              name = {"endM"}
              placeholder={"Contract EndDate_M"}
              onChange={this.handleChange}
              value={this.state.endM}
            />
            <FormStyle
              label={"EndDate_D"}
              name = {"endD"}
              placeholder={"Contract EndDate_D"}
              onChange={this.handleChange}
              value={this.state.endD}
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
      <div className="App">
        <br/>
        <h3>Good to Go!</h3>
        {/* <div>The stored value is: 
          {this.props.items.map(item => (
            <div key={item.id}> {item.text} </div>
          ))}
        </div> */}
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

