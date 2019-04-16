import React, { Component } from 'react';
// import './customers.css';

class Customers extends Component{
    render() {
        return (
            <div>
                <h2> the new start !!!</h2>
                <title>Insurance Dapp</title>

  <body>
    <p class="text-center header">My account : <span id="account"></span></p>
    <p class="text-center header">My balance : <span id="balanceOf"></span></p>
  
    <div id="loader" class="text-center">
        <p class="text-center">Loading...</p>
    </div>
    
    <div class="container-fluid" align ="center">
      <div id="userRow" class="row">
        <main role="main" class="col-lg-12 d-flex justify-content-center">
          <h1 class="text-center"> Insurance DApp</h1>
          
          <form>     
            <div class="inputBox central" >
              <input class="form-control" id="userName" placeholder="input userName" name="userName">
             
              <input class="form-control" id="userBirth" placeholder="input userBirth" name="userBirth" >
               
              <input class="form-control" id="userID" placeholder="input userID" name="userID" >
              
              <input class="form-control" id="StartTime" placeholder="input startTime" name="StartTime">
             
              <input class="form-control" id="EndTime" placeholder="input endTime" name="EndTime" >
              
            </div>
          </form>  

          <button type="button" class="btn btn-info btn-submit" id="submit_btn" onclick="App.getInputData();">submit</button>
         
  </body>
            </div>
        );
    }
}

export default Customers;