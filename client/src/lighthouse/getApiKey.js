import axios from "axios";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";

const signAuthMessage = async (
  privateKey,
  verificationMessage
) => {
  const signer = new ethers.Wallet(privateKey);
  const signedMessage = await signer.signMessage(
    verificationMessage
  );
  return signedMessage;
};

const getApiKey = async () => {
  const wallet = {
    publicKey: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    privateKey:
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  };
  const verificationMessage = (
    await axios.get(
      `https://api.lighthouse.storage/api/auth/get_message?publicKey=${wallet.publicKey}`
    )
  ).data;
  const signedMessage = await signAuthMessage(
    wallet.privateKey,
    verificationMessage
  );
  const response = await lighthouse.getApiKey(
    wallet.publicKey,
    signedMessage
  );
  return response.data.apiKey;
};

export default getApiKey;
