/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { rpc as ormlRpc, types as ormlTypes, typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';
import accounts from './accounts';
import evm from './evm';
import poc from './poc';
import incentives from './incentives';
import primitives from './primitives';
import runtime from './runtime';
import { signedExtensions as acalaSignedExtensions } from './signedExtensions';
import support from './support';
import versioned from './types-known/versioned';

// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = {
  Keys: 'SessionKeys4',
  PalletsOrigin: {
    _enum: {
      System: 'SystemOrigin',
      Timestamp: 'Null',
      RandomnessCollectiveFlip: 'Null',
      Balances: 'Null',
      Accounts: 'Null',
      Currencies: 'Null',
      Tokens: 'Null',
      Vesting: 'Null',
      AcalaTreasury: 'Null',
      Utility: 'Null',
      Multisig: 'Null',
      Recovery: 'Null',
      Proxy: 'Null',
      Scheduler: 'Null',
      Indices: 'Null',
      GraduallyUpdate: 'Null',
      Authorship: 'Null',
      Babe: 'Null',
      Grandpa: 'Null',
      Staking: 'Null',
      Session: 'Null',
      Historical: 'Null',
      GeneralCouncil: 'CollectiveOrigin',
      GeneralCouncilMembership: 'Null',
      HonzonCouncil: 'CollectiveOrigin',
      HonzonCouncilMembership: 'Null',
      HomaCouncil: 'CollectiveOrigin',
      HomaCouncilMembership: 'Null',
      TechnicalCommittee: 'CollectiveOrigin',
      TechnicalCommitteeMembership: 'Null',
      Authority: 'DelayedOrigin',
      ElectionsPhragmen: 'Null',
      AcalaOracle: 'Null',
      BandOracle: 'Null',
      OperatorMembershipAcala: 'Null',
      OperatorMembershipBand: 'Null',
      Auction: 'Null',
      Rewards: 'Null',
      OrmlNFT: 'Null',
      Prices: 'Null',
      Dex: 'Null',
      AuctionManager: 'Null',
      Loans: 'Null',
      Honzon: 'Null',
      CdpTreasury: 'Null',
      CdpEngine: 'Null',
      EmergencyShutdown: 'Null',
      Homa: 'Null',
      NomineesElection: 'Null',
      StakingPool: 'Null',
      PolkadotBridge: 'Null',
      Incentives: 'Null',
      AirDrop: 'Null',
      NFT: 'Null',
      RenVmBridge: 'Null',
      Contracts: 'Null',
      EVM: 'Null',
      Sudo: 'Null',
      TransactionPayment: 'Null'
    }
  }
};

const acalaDefs = {
  accounts,
  evm,
  poc,
  incentives,
  primitives,
  runtime,
  support
};

export const types = {
  ...ormlTypes,
  ...typesFromDefs(acalaDefs),
  ...additionalOverride
};

export const typesBundle = {
  spec: {
    mandala: {
      types: versioned
    },
    acala: {
      types: versioned
    }
  }
};
export const rpc = jsonrpcFromDefs(acalaDefs, { ...ormlRpc });
export const typesAlias = typesAliasFromDefs(acalaDefs, { ...ormlAlias });

const bundle = {
  rpc,
  types: [...versioned].map((version) => {
    return {
      minmax: version.minmax,
      types: {
        ...types,
        ...version.types
      }
    };
  }),
  alias: typesAlias
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    acala: bundle,
    mandala: bundle
  }
};

export const signedExtensions = acalaSignedExtensions;
