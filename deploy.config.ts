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
  bridgeFeeSetters: string[];
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
const BUNNYWORLD_BRIDGE_FEE_RECIPIENT =
  '0x986959c735a71fA8C993c190d8BC0d7C68fb145e';
const MAINNET_CHAIN_ID = 1;
const BSC_CHAIN_ID = 56;
const BSC_APPROVER = '0xA2a8EEa8a6554F15162A16dF5B40457E582A8Bc5';
const BUNNYWORLD_APPROVER = '0xA2a8EEa8a6554F15162A16dF5B40457E582A8Bc5';
const BUNNYWORLD_FEE_SETTER = '0xA2a8EEa8a6554F15162A16dF5B40457E582A8Bc5';
const BUNNYWORLD_TOKEN_MAINNET = '0x565115c5b0c98558A11B066a3cAca3C7B120D76c';

// Testnet
const BSC_TESTNET_CHAIN_ID = 97;
const RINKEBY_CHAIN_ID = 4;
const BUNNYWORLD_TOKEN_RINKEBY = '0xCEaCd4Bd924c8BB90330Fab8C3B3A2Dbd3C03ac2';
const BUNNYWORLD_BRIDGE_FEE_RECIPIENT_TESTNET =
  '0x1cA11D52E537bA16604925E430ca69AEb4A87cB5';

const configTestnet: {[key: string]: DeployConfig} = {
  rinkeby: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT_TESTNET,
    bridgeApprovers: ['deployer'],
    bridgeFeeSetters: ['deployer'],
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
    bridgeFeeSetters: ['deployer'],
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
    bridgeFeeSetters: ['deployer'],
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

const config: {[key: string]: DeployConfig} = {
  mainnet: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT,
    bridgeApprovers: [],
    bridgeFeeSetters: [],
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
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT,
    bridgeApprovers: [BUNNYWORLD_APPROVER],
    bridgeFeeSetters: [BUNNYWORLD_FEE_SETTER],
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
    depositNativeTokensAmountEther: 9999999999, // 10b - 1ether
  },
  bsc: {
    bridgeRunningStatus: true,
    globalFeeStatus: true,
    feeRecipient: BUNNYWORLD_BRIDGE_FEE_RECIPIENT,
    bridgeApprovers: [BSC_APPROVER],
    bridgeFeeSetters: [BUNNYWORLD_FEE_SETTER],
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
        totalSupplyWithDecimals: 10_000_000_000,
      },
    ],
    depositNativeTokensAmountEther: 0,
  },
};

export default config;
