const getUploads = async (contract, account) => {
  const response = await contract.getImageUrls(account);
  return response;
};

export default getUploads;
