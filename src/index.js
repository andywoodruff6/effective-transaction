require("dotenv").config();

const Blockfrost = require("@blockfrost/blockfrost-js");
////////////////////////////////
console.log("Hello, your code has started");

const API = new Blockfrost.BlockFrostAPI({
  projectId: process.env.BLOCKFROST_API_KEY,
  network: "mainnet",
});

////////////////////////////////
const main = async () => {
  let tx_count = 0;
  try {
    const health = await API.health();
    console.log("Health is:", health.is_healthy);
  } catch (error) {
    console.log("ERROR:", error);
  }
  // need a time domain
  // Date.now() is the current time in milliseconds
  // const timeDomain = 100 * 1000; //this is seconds
  // const oldTime = Date.now() - timeDomain;
  // console.log(oldTime);
  const blocks_per_day = 4320;
  const latest_block_txs = await API.blocksLatestTxs();
  //   console.log("Last blocks txs:", latest_block_txs);
  const txs = await API.txsUtxos(
    "2fdd50389665ffa8eddaa223c2e5e2963309d55acac6f22f58583eb35e98dc5c"
  );
  console.log("Transction", txs.inputs);
  /*for (let i = 0; i < txs.inputs.length; i++) {
    for (let j = 0; j < txs.outputs.length; j++) {
      if (txs.inputs[i].address != txs.outputs[j].address) {
        tx_count++;
        console.log("tx count: ", tx_count);
      }
    }
  }
  */
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
