import lighthouse from "@lighthouse-web3/sdk";
import toast from "react-hot-toast";

async function uploadFile(
  apikey,
  file,
  contract,
  account,
  maxFeePerGas,
  maxPriorityFeePerGas
) {
  const toastId = toast.loading("Uploading data");
  const output = await lighthouse.upload(
    file,
    `${apikey}`,
    null,
    null
  );

  toast.loading("Initiating Transaction", { id: toastId });

  const url = `https://gateway.lighthouse.storage/ipfs/${output.data.Hash}`;

  try {
    await contract.addImageUrl(account, url, {
      maxFeePerGas: maxFeePerGas,
      maxPriorityFeePerGas: maxPriorityFeePerGas,
    });

    toast.success("Please refresh after transaction completes", {
      id: toastId,
    });
  } catch (e) {
    toast.error("Error Occured", { id: toastId });
  }
}

export default uploadFile;
