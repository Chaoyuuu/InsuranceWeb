var Insurance = artifacts.require("./Insurance.sol");

module.exports = function(deployer) {
	// instance.deposit(accounts[0], {msg.value: 50 ether});
	deployer.deploy(Insurance, {value: 50000000000000000000});
	// deployer.deploy(Insurance);
}; 


// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SimpleStorage);
// };
