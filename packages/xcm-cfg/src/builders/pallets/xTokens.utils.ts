import { XcmVersion } from '@moonbeam-network/xcm-builder';
import { AnyChain } from '@moonbeam-network/xcm-types';

export const toDest = (
  version: XcmVersion,
  destination: AnyChain,
  account: any
) => {
  if (destination.key === 'polkadot') {
    return {
      [version]: {
        parents: 1,
        interior: {
          X1: account,
        },
      },
    };
  }

  return {
    [version]: {
      parents: 1,
      interior: {
        X2: [
          {
            Parachain: destination.parachainId,
          },
          account,
        ],
      },
    },
  };
};

export const toAsset = (version: XcmVersion, interior: any, amount: any) => {
  return {
    [version]: {
      id: {
        Concrete: {
          parents: 1,
          interior: interior,
        },
      },
      fun: {
        Fungible: amount,
      },
    },
  };
};
