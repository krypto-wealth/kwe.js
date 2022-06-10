import { Balance, CurrencyId } from '@krypto-wealth/types/interfaces';

export interface DerivedBalance {
  currency: CurrencyId | string;
  balance: Balance;
}

export type DerivedAllBalances = DerivedBalance[];
