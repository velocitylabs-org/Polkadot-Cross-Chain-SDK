import { BalanceBuilder, ContractBuilder } from '@moonbeam-network/xcm-builder';
import { AssetConfig, ChainConfig } from '@moonbeam-network/xcm-config';

import {
  dai_mwh,
  glmr,
  hdx,
  usdc_mwh,
  usdt_mwh,
  wbtc_mwh,
  weth_mwh,
} from '../assets';
import { hydraDX, moonbeam } from '../chains';

const toHydraDX: AssetConfig[] = [
  new AssetConfig({
    asset: glmr,
    balance: BalanceBuilder().substrate().system().account(),
    contract: ContractBuilder().Xtokens().transfer(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.05,
      asset: glmr,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
  new AssetConfig({
    asset: hdx,
    balance: BalanceBuilder().substrate().assets().account(),
    contract: ContractBuilder().Xtokens().transfer(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.6,
      asset: hdx,
      balance: BalanceBuilder().substrate().assets().account(),
    },
    fee: {
      asset: glmr,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
  new AssetConfig({
    asset: dai_mwh,
    balance: BalanceBuilder().evm().erc20(),
    contract: ContractBuilder().Xtokens().transfer(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.004,
      asset: dai_mwh,
      balance: BalanceBuilder().evm().erc20(),
    },
    fee: {
      asset: glmr,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
  new AssetConfig({
    asset: usdc_mwh,
    balance: BalanceBuilder().evm().erc20(),
    contract: ContractBuilder().Xtokens().transfer(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.004,
      asset: usdc_mwh,
      balance: BalanceBuilder().evm().erc20(),
    },
    fee: {
      asset: glmr,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
  new AssetConfig({
    asset: usdt_mwh,
    balance: BalanceBuilder().evm().erc20(),
    contract: ContractBuilder().Xtokens().transfer(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.004,
      asset: usdt_mwh,
      balance: BalanceBuilder().evm().erc20(),
    },
    fee: {
      asset: glmr,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
  new AssetConfig({
    asset: wbtc_mwh,
    balance: BalanceBuilder().evm().erc20(),
    contract: ContractBuilder().Xtokens().transfer(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.0000001,
      asset: wbtc_mwh,
      balance: BalanceBuilder().evm().erc20(),
    },
    fee: {
      asset: glmr,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
  new AssetConfig({
    asset: weth_mwh,
    balance: BalanceBuilder().evm().erc20(),
    contract: ContractBuilder().Xtokens().transfer(),
    destination: hydraDX,
    destinationFee: {
      amount: 0.000002,
      asset: weth_mwh,
      balance: BalanceBuilder().evm().erc20(),
    },
    fee: {
      asset: glmr,
      balance: BalanceBuilder().substrate().system().account(),
    },
  }),
];

export const moonbeamConfig = new ChainConfig({
  assets: [...toHydraDX],
  chain: moonbeam,
});
