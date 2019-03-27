// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");


var mnemonic = "accuse shine chimney access aware engine neither prevent crazy decline round rookie glare diamond define";

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
  
  rinkeby: {
    provider: function() {
      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/256372af6edc458fb98b69114066e503")
    },
    network_id: 4,
    gas: 4612388 // Gas limit used for deploys
  } 
},
}
