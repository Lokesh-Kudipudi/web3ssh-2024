# web3ssh-2024

## Problem Statement

Traditional Web 2.0 technologies often face difficulties to store data over long period of time with minimal cost for the consumer the subscription will be never ending this problem arises a growing need for a more reliable, secure, and cost-efficient storage solution that can ensure the integrity and availability of data over long periods.

## Solution - Decentralised File upload and Sharing for Long Term - DFiles

This Application allows the users to upload their files into the blockchain and share those files to other users for long term purpose. The User is suppposed to pay only once to upload the file and then it is there permanently and securely if it is encrypted. This ends the era of subscription for long term file storage

## Tech Stack

- ReactJs
- EthersJs
- Solidity
- LightHouse

## Presentation

- Link :- [Presentation Slides](https://www.canva.com/design/DAGNObvfWZ4/NkVOHZtz_e18VGlmbTp1nA/edit?utm_content=DAGNObvfWZ4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Local Setup Guide

1. Open a new Terminal and run the following command \
   `git clone https://github.com/Lokesh-Kudipudi/web3ssh-2024`

2. Change the present working directory \
   `cd web3ssh-2024`

3. Install the required modules in `./` and `./client` using `npm install`

4. Copy Paste the Following code in hardhat.config.js \
   require("@nomicfoundation/hardhat-toolbox"); \
   module.exports = { \
   solidity: "0.8.9", \
   networks: { \
    hardhat: {
   chainId: 1337,
   },\
   },\
   paths: {
   artifacts: "./client/src/artifacts",
   },\
   };

5. After installing the required modules run the following command in `./` directory \
   `npx hardhat node`

- Take a note of the port on which the server started
- Take a note of a Private Key out of the ones which pinted on the console

6. Open a New terminal and run the following command in the same directory \
   `npx hardhat run --network localhost scripts/deploy.js `

7. Copy the address which gets printed in terminal and past in the "REACT_APP_CONTRACT_ADDRESS" in the .env file in ./client directory

8. Install the MetaMask extension and Go to MetaMask settings in the extension - Go to Networks - Click on Add Network

9. Click on Add Network Manually at the Bottom

10. Add a user defined Network Name \
     Give the server url (example - `http://127.0.0.1:8545/`) in New RPC URL field \
     In chainID give 1337 \
    Use the default ETH currency \
    Save the Settings \
    Select the Local Host Network in MetaMask test networks

11. Copy a private key which was mentioned earlier and Open MetaMask extension \
     click on account name and click add account \
    click import account and add the private key

12. Go back to the terminal and navigate to client directory and run the following command \
    `npm run start`

13. Connect to your MetaMask account and Click Login and Your are all good to go!

### Note

If you face any Internal JSON-RPC error then go to settings in the MetaMask extension go to Advanced and click "Clear Activity Tab Data" and confirm
