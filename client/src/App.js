import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null
    }
    this.setContract = this.setContract.bind(this)
  }
  // state = { storageValue: 0, web3: null, accounts: null, contract: null };

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
      this.setState({ web3, accounts, contract: instance }, this.runExample);

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
   
  };  

  setContract = async (content) => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(content).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
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

        <p>the value = {this.state.storageValue}</p>
        {/* <Customers /> */}
        {/* <SetValue a={this.state.storageValue}/> */}

      </div>
    );
  } 
}

class ToList extends Component {
  constructor(props) {
    super(props);    
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.text = '';
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <SetList items={this.state.items} />
  
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            ref={(input) => this.task = input}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>

        <SetValue items={this.state.items}/>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
      
    };

    this.props.setContract(this.task.value)

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class SetList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

class SetValue extends Component {
  render() {
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        {/* <div>The stored value is: {this.props.items.map(item => (<div key={item.id}>{item.text}</div>))}</div> */}
        <div>The stored value is: 
          {this.props.items.map(item => (
            <div key={item.id}> {item.text} </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
