import Upload from "../artifacts/contracts/upload.sol/Upload.json";
const { ethers } = require("ethers");

const getWalletDetails = async (
  setContract,
  setProvider,
  setAccount,
  setMaxFeePerGas,
  setMaxPriorityFeePerGas
) => {
  try {
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(
      window.ethereum
    );

    const signer = provider.getSigner();
    const address = await signer.getAddress();

    let contractAddress = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;

    const contract = new ethers.Contract(
      contractAddress,
      Upload.abi,
      signer
    );

    const blockNumber = await provider.getBlockNumber();
    console.log(blockNumber);
    const block = await provider.getBlock(blockNumber);
    const baseFeePerGas = block.baseFeePerGas;
    const maxPriorityFeePerGas = ethers.utils.parseUnits(
      "2",
      "gwei"
    );

    const maxFeePerGas = baseFeePerGas.add(maxPriorityFeePerGas);

    setContract(() => contract);
    setProvider(() => provider);
    setAccount(() => address);
    setMaxFeePerGas(() => maxFeePerGas);
    setMaxPriorityFeePerGas(() => maxPriorityFeePerGas);

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });
  } catch (e) {
    alert("Please Refresh and Login Again");
  }
};

export default getWalletDetails;
