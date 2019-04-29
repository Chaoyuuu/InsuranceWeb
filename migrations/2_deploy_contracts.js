var Insurance = artifacts.require("./Insurance.sol");

module.exports = function(deployer) {
	deployer.deploy(Insurance);
}; 


// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SimpleStorage);
// };
