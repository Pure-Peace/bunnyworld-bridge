/* eslint-disable @typescript-eslint/no-unused-vars */
import {BigNumber, BigNumberish} from 'ethers';
import {ZERO_ADDRESS} from './scripts/constants';
import {
  BridgeableTokensConfigStruct,
  BridgeApprovalConfigStruct,
} from './typechain/BunnyWorldBridge';

export type BridgeableToken = {
  token: string;
  targetChainId: BigNumberish;
  config: BridgeableTokensConfigStruct;
};

export type BridgeApprovalConfig = {
  token: string;
  config: BridgeApprovalConfigStruct;
};

export type BridgeERC20DeployConfig = {
  name: string;
  symbol: string;
  decimals: number;
  totalSupplyWithDecimals: number;
};

export type DeployConfig = {
  bridgeRunningStatus: boolean;
  globalFeeStatus: boolean;
  feeRecipient: string;
  bridgeApprovers: string[];
  bridgeableTokens: BridgeableToken[];
  bridgeApprovalConfigs: BridgeApprovalConfig[];
  bridgeERC20DeployConfigs: BridgeERC20DeployConfig[];
  depositNativeTokensAmountEther?: number;
};

const toTokenAmount = (amount: BigNumberish, tokenDecimal: BigNumberish) => {
  return BigNumber.from(amount).mul(BigNumber.from(10).pow(tokenDecimal));
};

const NATIVE_TOKEN = ZERO_ADDRESS;
const BUNNYWORLD_CHAIN_ID = 1717;

// Mainnet
const BUNNYWORLD_BRIDGE_FEE_RECIPIENT_BSC_BUNNYWORLD =
  '0x1cA11D52E537bA16604925E430ca69AEb4A87cB5';
const MAINNET_CHAIN_ID = 1;
const BSC_CHAIN_ID = 56;
const BSC_APPROVER = '0x1cA11D52E537bA16604925E430ca69AEb4A87cB5';
const BUNNYWORLD_APPROVER = '0x1cA11D52E537bA16604925E430ca69AEb4A87cB5';
const BUNNYWORLD_TOKEN_MAINNET = '0x1cA11D52E537bA16604925E430ca69AEb4A87cB5';

// Testnet
const BSC_TESTNET_CHAIN_ID = 97;
const RINKEBY_CHAIN_ID = 4;
const BUNNYWORLD_TOKEN_RINKEBY = '0xCEaCd4Bd924c8BB90330Fab8C3B3A2Dbd3C03ac2';
const BUNNYWORLD_BRIDGE_FEE_RECIPIENT_TESTNET =
  '0x1cA11D52E537bA16604925E430ca69AEb4A87cB5';

const config: {[key: string]: DeployConfig} = {
  rinkeby: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT_TESTNET,
    bridgeApprovers: ['deployer'],
    bridgeableTokens: [
      {
        token: BUNNYWORLD_TOKEN_RINKEBY,
        targetChainId: BUNNYWORLD_CHAIN_ID,
        config: {
          enabled: true,
          burn: false,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
      {
        token: BUNNYWORLD_TOKEN_RINKEBY,
        targetChainId: BSC_TESTNET_CHAIN_ID,
        config: {
          enabled: true,
          burn: false,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
    ],
    bridgeApprovalConfigs: [
      {
        token: BUNNYWORLD_TOKEN_RINKEBY,
        config: {
          enabled: true,
          transfer: true,
        },
      },
    ],
    bridgeERC20DeployConfigs: [],
    depositNativeTokensAmountEther: 0,
  },
  bunnyWorld: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT_TESTNET,
    bridgeApprovers: ['deployer'],
    bridgeableTokens: [
      {
        token: NATIVE_TOKEN,
        targetChainId: BSC_TESTNET_CHAIN_ID,
        config: {
          enabled: true,
          burn: false,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
      {
        token: NATIVE_TOKEN,
        targetChainId: RINKEBY_CHAIN_ID,
        config: {
          enabled: true,
          burn: false,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
    ],
    bridgeApprovalConfigs: [
      {
        token: NATIVE_TOKEN,
        config: {
          enabled: true,
          transfer: true,
        },
      },
    ],
    bridgeERC20DeployConfigs: [],
    depositNativeTokensAmountEther: 1_000_000,
  },
  bscTestnet: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT_TESTNET,
    bridgeApprovers: ['deployer'],
    bridgeableTokens: [
      {
        token: 'BridgeRBT',
        targetChainId: BUNNYWORLD_CHAIN_ID,
        config: {
          enabled: true,
          burn: true,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
      {
        token: 'BridgeRBT',
        targetChainId: RINKEBY_CHAIN_ID,
        config: {
          enabled: true,
          burn: true,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
    ],
    bridgeApprovalConfigs: [
      {
        token: 'BridgeRBT',
        config: {
          enabled: true,
          transfer: false,
        },
      },
    ],
    bridgeERC20DeployConfigs: [
      {
        name: 'BridgeRBT',
        symbol: 'bRBT',
        decimals: 18,
        totalSupplyWithDecimals: 10_000_000,
      },
    ],
    depositNativeTokensAmountEther: 0,
  },
};

const configMainnet: {[key: string]: DeployConfig} = {
  mainnet: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT_BSC_BUNNYWORLD,
    bridgeApprovers: [],
    bridgeableTokens: [
      {
        token: BUNNYWORLD_TOKEN_MAINNET,
        targetChainId: BUNNYWORLD_CHAIN_ID,
        config: {
          enabled: true,
          burn: false,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
    ],
    bridgeApprovalConfigs: [],
    bridgeERC20DeployConfigs: [],
    depositNativeTokensAmountEther: 0,
  },
  bunnyWorld: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT_BSC_BUNNYWORLD,
    bridgeApprovers: [BUNNYWORLD_APPROVER],
    bridgeableTokens: [
      {
        token: NATIVE_TOKEN,
        targetChainId: BSC_CHAIN_ID,
        config: {
          enabled: true,
          burn: false,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
    ],
    bridgeApprovalConfigs: [
      {
        token: NATIVE_TOKEN,
        config: {
          enabled: true,
          transfer: true,
        },
      },
    ],
    bridgeERC20DeployConfigs: [],
    depositNativeTokensAmountEther: 9999998,
  },
  bsc: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT_BSC_BUNNYWORLD,
    bridgeApprovers: [BSC_APPROVER],
    bridgeableTokens: [
      {
        token: 'BunnyWorldToken',
        targetChainId: BUNNYWORLD_CHAIN_ID,
        config: {
          enabled: true,
          burn: true,
          minBridgeAmount: 0,
          maxBridgeAmount: 0,
          bridgeFee: 0,
        },
      },
    ],
    bridgeApprovalConfigs: [
      {
        token: 'BunnyWorldToken',
        config: {
          enabled: true,
          transfer: false,
        },
      },
    ],
    bridgeERC20DeployConfigs: [
      {
        name: 'BunnyWorldToken',
        symbol: 'RBT',
        decimals: 18,
        totalSupplyWithDecimals: 10_000_000,
      },
    ],
    depositNativeTokensAmountEther: 0,
  },
};

export default config;
