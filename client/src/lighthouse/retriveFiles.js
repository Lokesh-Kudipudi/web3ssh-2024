const getUploads = async (contract, account) => {
  const response = await contract.getImageUrls(account);
  console.log(response);
  return response;
};

export default getUploads;
