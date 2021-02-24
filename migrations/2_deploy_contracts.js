// const { artifacts } = require("hardhat");

const MasterChef = artifacts.require('./MasterChef.sol');
const Timelock = artifacts.require('./Timelock.sol');

module.exports = function(deployer, network, accounts) {
  console.log(network, accounts)
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts)
  })
}

async function deployContracts(deployer, network, accounts) {
  let timeLock = await deployer.deploy(Timelock, '0x3d7fA848a2E156b4802b562Ed0122d35A2758D07', 86400)
  // let masterChef = await deployer.deploy(MasterChef, '0x580f500cc7da45b7b058de7df325f6d8f83065e1', '0x3d7fA848a2E156b4802b562Ed0122d35A2758D07', '0x3d7fA848a2E156b4802b562Ed0122d35A2758D07', 1, 5143959);
}
