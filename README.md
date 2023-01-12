# Hardhat Boilerplate

The main purpose of this repo is to demonstrate that how can we test those contracts that uses Chainlink Aggregator contracts on local environment.

# Running the Dapp

1. Build the npm dependencies:
   - _$ npm install_
2. Compile the contracts
   - _$ npm run compile_
3. Deploy contracts to the EVM blockchains
   - _$ npm run deploy:option_
   - Use following values in place of option:
   - hardhat - for local test network
   - rinkeby - for Rinkeby test network
   - mainnet - for Ethereum Main net
4. Running test for all networks
   - _$ npm run test:option_
   - Use following values in place of option:
   - hardhat - for local test network
   - rinkeby - for Rinkeby test network
   - mainnet - for Ethereum Main net
