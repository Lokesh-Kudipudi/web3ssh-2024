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
    publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
    privateKey: `${process.env.REACT_APP_PRIVATE_KEY}`,
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
