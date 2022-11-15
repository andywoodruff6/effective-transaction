require("dotenv").config();

const Blockfrost = require("@blockfrost/blockfrost-js");
////////////////////////////////
console.log("Hello, You're code has started");

const API = new Blockfrost.BlockFrostAPI({
  projectId: process.env.BLOCKFROST_API_KEY,
});

////////////////////////////////
const main = async () => {
  const health = await API.health();
  console.log(health);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
