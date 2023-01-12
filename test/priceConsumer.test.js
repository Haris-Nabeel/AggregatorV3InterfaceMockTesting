const hre = require("hardhat");
const ethers = hre.ethers;
const chai = require("chai");
const { expect } = chai;
const fs = require("fs");
const path = require("path");
const network = hre.hardhatArguments.network;

async function deployMockAggregatorV3() {
  return await (
    await (
      await ethers.getContractFactory("MockAggrigatorV3Interface")
    ).deploy()
  ).deployed();
}

describe("PriceConsumerV3: ", function () {
  let deployedPriceConsumerV3;
  beforeEach("deploy", async function () {
    [admin] = await ethers.getSigners();
    const contractAddresses = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../config.json"), "utf8")
    );

    if (hre.network.name != "hardhat") {
      deployedPriceConsumerV3 = await hre.ethers.getContractAt(
        "PriceConsumerV3",
        contractAddresses[network].PriceConsumerV3,
        account1
      );
    } else {
      // deploying mock Feed
      const feed = await deployMockAggregatorV3();
      // now setting the price in the mock Feed
      await feed.setPriceUpdate(99);
      // deploying priceConsumer that will be using the feed
      deployedPriceConsumerV3 = await (
        await (
          await hre.ethers.getContractFactory("PriceConsumerV3")
        ).deploy(feed.address)
      ).deployed();
    }
  });

  it("Price consumer Should return correct value", async function () {
    expect(await deployedPriceConsumerV3.getLatestPrice()).to.be.equal(99);
  });
});
