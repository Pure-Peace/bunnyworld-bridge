import {providers, Wallet} from 'ethers';
import {address as BUNNYWORLD_BRIDGE_ADDRESS} from '../deployments/bscTestnet/BunnyWorldBridgeProxy.json';
import {BunnyWorldBridge__factory} from '../typechain/factories/BunnyWorldBridge__factory';

const main = async () => {
  const provider = new providers.JsonRpcProvider(
    process.env.ETH_NODE_URI_RINKEBY
  );

  const signer = new Wallet(process.env.PRIV_KEYS_RINKEBY, provider);
  const BunnyWorldBridge = BunnyWorldBridge__factory.connect(
    BUNNYWORLD_BRIDGE_ADDRESS,
    signer
  );

  const tx = await BunnyWorldBridge.setGlobalFeeStatus(true);
  console.log(tx);
  const recipient = await tx.wait();
  console.log(recipient);
};

main()
  .then(() => {})
  .catch((err) => {
    console.error(err);
  });
