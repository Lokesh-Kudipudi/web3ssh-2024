// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 < 0.9.0;

contract Upload {
  
  mapping(address=>string[]) addressToImageUrls;
  
  function addImageUrl(address _user,string memory url) external {
      addressToImageUrls[_user].push(url);
  }

  function getImageUrls(address _user) external view returns(string[] memory){
      require(_user==msg.sender,"You don't have access");
      return addressToImageUrls[_user];
  }
}