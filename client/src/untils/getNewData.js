import toast from "react-hot-toast";

const getNewData = async (contract, account, setImagesData) => {
  let data;
  let dataArray;

  try {
    dataArray = await contract.display(account);
  } catch (e) {
    toast.error("You Don't have access");
  }
  const isEmpty = Object.keys(dataArray).length === 0;

  if (!isEmpty) {
    const str = dataArray.toString();
    data = str.split(",");
    toast.success("Refreshed the Data");
  } else {
    toast.error("No Files to Display");
  }

  await setImagesData(() => data);
  console.log(data);
};
export default getNewData;
