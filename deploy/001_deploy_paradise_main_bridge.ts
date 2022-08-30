import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { genGetContractWith } from '../test/utils/genHelpers';
import { BunnyWorldBridge } from '../typechain/BunnyWorldBridge';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const mainBridgeDeployments = await deploy('BunnyWorldBridge', {
    from: deployer,
    contract: 'BunnyWorldBridge',
    args: [],
    log: true,
    skipIfAlreadyDeployed: false,
    gasLimit: 5500000,
  });
  const { getContractAt } = genGetContractWith(hre);
  const mainBridge = await getContractAt<BunnyWorldBridge>(
    'BunnyWorldBridge',
    mainBridgeDeployments.address,
    deployer
  );
};
export default func;
func.id = 'deploy_bunnyWorld_main_bridge';
func.tags = ['BunnyWorldBridge'];
