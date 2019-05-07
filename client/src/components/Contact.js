import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        
    }

    render() {
        return (
            <div>      
                {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/> */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>         
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="https://github.com/Chaoyuuu/InsuranceWeb">Inurance Dapp</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link" href="/" exact="true">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/App">SetUserInfo</a>
                        </li>
                        <li className="nav-item active">
                            {/* <a className="nav-link disabled" href="#">Disabled</a> */}
                            <a className="nav-link" href="/contact">Contact <span className="sr-only">(current)</span></a>

                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                   
                </nav>
                <br/>
                <br/>
                <div className="container-fluid row col-lg-12 d-flex justify-content-center">
                    <TodoApp />
                    
                </div>
                
           </div>
        );
    }
};


class TodoApp extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>    
            <form>
                <div className="md-form mb-5">               
                    <label>Some Words to Insurance Dapp... </label>
                    <textarea className="md-textarea form-control" rows="5" placeholder="Any Questions ?" 
                                value={this.state.text}
                                onChange={this.handleChange}>
                    </textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit }> Submit </button>
            </form>
            <br/>
          <TodoList items={this.state.items} />
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
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
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

export default Contact;