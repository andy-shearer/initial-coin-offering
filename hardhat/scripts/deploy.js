const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevToken = await ethers.getContractFactory("CryptoDevToken");
  const deployedContract = await cryptoDevToken.deploy(CRYPTO_DEVS_NFT_CONTRACT_ADDRESS);
  await deployedContract.deployed();

  console.log("Crypto Dev Token contract deployed to:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
