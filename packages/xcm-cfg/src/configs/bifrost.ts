import {
  BalanceBuilder,
  ExtrinsicBuilder,
} from '@moonbeam-network/xcm-builder';
import { AssetConfig, ChainConfig } from '@moonbeam-network/xcm-config';

import { bnc, vdot, dot } from '../assets';
import { bifrost, hydraDX } from '../chains';
import { ExtrinsicBuilderV2 } from '../builders';

const toHydraDX: AssetConfig[] = [
  new AssetConfig({
    asset: bnc,
    balance: BalanceBuilder().substrate().system().account(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.014645,
      asset: bnc,
      balance: BalanceBuilder().substrate().system().account(),
    },
    extrinsic: ExtrinsicBuilderV2().xTokens().transfer(),
  }),
  new AssetConfig({
    asset: vdot,
    balance: BalanceBuilder().substrate().tokens().accounts(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.000555,
      asset: vdot,
      balance: BalanceBuilder().substrate().tokens().accounts(),
    },
    extrinsic: ExtrinsicBuilderV2().xTokens().transfer(),
    fee: {
      asset: bnc,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
  new AssetConfig({
    asset: dot,
    balance: BalanceBuilder().substrate().tokens().accounts(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.0013,
      asset: dot,
      balance: BalanceBuilder().substrate().tokens().accounts(),
    },
    extrinsic: ExtrinsicBuilderV2().xTokens().transfer(),
    fee: {
      asset: bnc,
      balance: BalanceBuilder().substrate().system().account(),
    }
  }),
];

export const bifrostConfig = new ChainConfig({
  assets: [...toHydraDX],
  chain: bifrost,
});
