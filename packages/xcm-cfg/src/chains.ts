import {
  AnyChain,
  Ecosystem,
  EvmParachain,
  Parachain,
} from '@moonbeam-network/xcm-types';
import { polkadot } from '@moonbeam-network/xcm-config';

import {
  aca,
  astr,
  bnc,
  cfg,
  dai_awh,
  dai_mwh,
  dot,
  glmr,
  hdx,
  ibtc,
  intr,
  sub,
  usdc,
  usdt,
  vdot,
  wbtc_awh,
  wbtc_mwh,
  weth_awh,
  weth_mwh,
  ztg,
} from './assets';

export const acala = new Parachain({
  assetsData: [
    {
      asset: aca,
      id: { Token: aca.originSymbol },
      metadataId: { NativeAssetId: { Token: aca.originSymbol } },
    },
    {
      asset: dai_awh,
      decimals: 18,
      balanceId: '0x54a37a01cd75b616d63e0ab665bffdb0143c52ae',
      id: { Erc20: '0x54a37a01cd75b616d63e0ab665bffdb0143c52ae' },
    },
    {
      asset: wbtc_awh,
      decimals: 8,
      balanceId: '0xc80084af223c8b598536178d9361dc55bfda6818',
      id: { Erc20: '0xc80084af223c8b598536178d9361dc55bfda6818' },
    },
    {
      asset: weth_awh,
      decimals: 18,
      balanceId: '0x5a4d6acdc4e3e5ab15717f407afe957f7a242578',
      id: { Erc20: '0x5a4d6acdc4e3e5ab15717f407afe957f7a242578' },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c',
  key: 'acala',
  name: 'Acala',
  parachainId: 2000,
  ss58Format: 10,
  ws: 'wss://acala-rpc.aca-api.network',
});

export const assetHub = new Parachain({
  assetsData: [
    {
      asset: usdt,
      decimals: 6,
      id: 1984,
      palletInstance: 50,
    },
    {
      asset: usdc,
      decimals: 6,
      id: 1337,
      palletInstance: 50,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
  key: 'assethub',
  name: 'AssetHub',
  parachainId: 1000,
  ss58Format: 42,
  ws: 'wss://polkadot-asset-hub-rpc.polkadot.io',
});

export const astar = new Parachain({
  assetsData: [
    {
      asset: astr,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6',
  key: 'astar',
  name: 'Astar',
  parachainId: 2006,
  ss58Format: 5,
  ws: 'wss://rpc.astar.network',
});

export const bifrost = new Parachain({
  assetsData: [
    {
      asset: bnc,
      id: { Native: bnc.originSymbol },
    },
    {
      asset: vdot,
      id: { VToken2: 0 },
      metadataId: { VToken2: 0 },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b',
  key: 'bifrost',
  name: 'Bifrost',
  parachainId: 2030,
  ss58Format: 6,
  ws: 'wss://eu.bifrost-polkadot-rpc.liebi.com/ws',
});

export const centrifuge = new Parachain({
  assetsData: [
    {
      asset: cfg,
      id: 'Native',
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82',
  key: 'centrifuge',
  name: 'Centrifuge',
  parachainId: 2031,
  ss58Format: 36,
  ws: 'wss://fullnode.centrifuge.io',
});

export const hydraDX = new Parachain({
  assetsData: [
    {
      asset: hdx,
      id: 0,
    },
    {
      asset: astr,
      id: 9,
      decimals: 18,
    },
    {
      asset: bnc,
      id: 14,
      decimals: 12,
    },
    {
      asset: cfg,
      id: 13,
      decimals: 18,
    },
    {
      asset: dot,
      id: 5,
      decimals: 10,
    },
    {
      asset: dai_awh,
      id: 2,
      decimals: 18,
    },
    {
      asset: dai_mwh,
      id: 18,
      decimals: 18,
    },
    {
      asset: glmr,
      id: 16,
      decimals: 18,
    },
    {
      asset: ibtc,
      id: 11,
      decimals: 8,
    },
    {
      asset: intr,
      id: 17,
      decimals: 10,
    },
    {
      asset: sub,
      id: 24,
      decimals: 10,
    },
    {
      asset: usdc,
      id: 1337,
      balanceId: 22,
      metadataId: 22,
      palletInstance: 50,
      decimals: 6,
    },
    {
      asset: usdt,
      id: 1984,
      balanceId: 10,
      metadataId: 10,
      palletInstance: 50,
      decimals: 6,
    },
    {
      asset: vdot,
      id: 15,
      decimals: 10,
    },
    {
      asset: wbtc_awh,
      id: 3,
      decimals: 8,
    },
    {
      asset: wbtc_mwh,
      id: 19,
      decimals: 8,
    },
    {
      asset: weth_awh,
      id: 4,
      decimals: 18,
    },
    {
      asset: weth_mwh,
      id: 20,
      decimals: 18,
    },
    {
      asset: ztg,
      id: 12,
      decimals: 10,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d',
  key: 'hydradx',
  name: 'HydraDX',
  parachainId: 2034,
  ss58Format: 63,
  ws: 'wss://rpc.hydradx.cloud',
});

export const interlay = new Parachain({
  assetsData: [
    {
      asset: ibtc,
      decimals: 8,
      id: { Token: ibtc.originSymbol },
      metadataId: 0,
    },
    {
      asset: intr,
      decimals: 10,
      id: { Token: intr.originSymbol },
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72',
  key: 'interlay',
  name: 'Interlay',
  parachainId: 2032,
  ss58Format: 2032,
  ws: 'wss://api.interlay.io/parachain',
});

export const moonbeam = new EvmParachain({
  assetsData: [
    {
      asset: glmr,
      id: '0x0000000000000000000000000000000000000802',
      min: 0.1,
    },
    {
      asset: dai_mwh,
      id: '0x06e605775296e851FF43b4dAa541Bb0984E9D6fD',
      metadataId: 0,
      decimals: 18,
    },
    {
      asset: hdx,
      id: '69606720909260275826784788104880799692',
      decimals: 12,
    },
    {
      asset: wbtc_mwh,
      id: '0xE57eBd2d67B462E9926e04a8e33f01cD0D64346D',
      metadataId: 0,
      decimals: 8,
    },
    {
      asset: weth_mwh,
      id: '0xab3f0245B83feB11d15AAffeFD7AD465a59817eD',
      metadataId: 0,
      decimals: 18,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d',
  id: 1284,
  key: 'moonbeam',
  name: 'Moonbeam',
  parachainId: 2004,
  rpc: 'https://rpc.api.moonbeam.network',
  ss58Format: 1284,
  ws: 'wss://wss.api.moonbeam.network',
});

export const subsocial = new Parachain({
  assetsData: [
    {
      asset: sub,
      id: 0,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x4a12be580bb959937a1c7a61d5cf24428ed67fa571974b4007645d1886e7c89f',
  key: 'subsocial',
  name: 'Subsocial',
  parachainId: 2101,
  ss58Format: 28,
  ws: 'wss://para.subsocial.network',
});

export const zeitgeist = new Parachain({
  assetsData: [
    {
      asset: ztg,
      id: 'Ztg',
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060',
  key: 'zeitgeist',
  name: 'Zeitgeist',
  parachainId: 2092,
  ss58Format: 73,
  ws: 'wss://zeitgeist-rpc.dwellir.com',
});

export const chains: AnyChain[] = [
  acala,
  assetHub,
  astar,
  bifrost,
  centrifuge,
  hydraDX,
  interlay,
  moonbeam,
  polkadot,
  subsocial,
  zeitgeist,
];

export const chainsMap = new Map<string, AnyChain>(
  chains.map((chain) => [chain.key, chain])
);