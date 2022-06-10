// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';
import type { Vec } from '@polkadot/types';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { Observable } from '@polkadot/types/types';
import type { CurrencyId } from '@krypto-wealth/types/interfaces/primitives';
import type { AccountId, Balance } from '@krypto-wealth/types/interfaces/runtime';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | string | Uint8Array) => Observable<AccountData>, [AccountId, CurrencyId]> & QueryableStorageEntry<ApiType, [AccountId, CurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId, CurrencyId]> & QueryableStorageEntry<ApiType, [AccountId, CurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | string | Uint8Array) => Observable<Balance>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
