// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 < 0.9.0;

contract Upload {
  
  mapping(address=>string[]) value;
  
  function add(address _user,string memory url) external {
      value[_user].push(url);
  }

  function display(address _user) external view returns(string[] memory){
      require(_user==msg.sender,"You don't have access");
      return value[_user];
  }


}