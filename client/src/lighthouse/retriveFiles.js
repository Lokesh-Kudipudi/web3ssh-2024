const getUploads = async (contract, account) => {
  const response = await contract.display(account);
  console.log(response);
  return response;
};

export default getUploads;
