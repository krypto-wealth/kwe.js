![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@krypto-wealth/api?logo=npm&style=flat-square)](https://www.npmjs.com/package/@krypto-wealth/api)

# @krypto-wealth

This library provides additional typing information for user to access Kwe Chain by using [polkadot.js](https://github.com/polkadot-js/api).

# Getting Started

More documentation and examples on [wiki](https://docs.kwe.finance/).

- Install dependencies

```bash
yarn add @polkadot/api @krypto-wealth/api@beta
```

- Create API instance

```ts
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@krypto-wealth/api';

async function main() {
    const provider = new WsProvider('wss://rpc-testnet.kwescan.com/ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // use api
}

main()
```

- Use api to interact with node

```ts
// query and display account data
const data = await api.query.system.account('5F98oWfz2r5rcRVnP9VCndg33DAAsky3iuoBSpaPUbgN9AJn');
console.log(data.toHuman())
```

# Packages

- [api](./packages/api)
  - Contains necessary options to create a polkadot.js API instance
- [api-derive](./packages/api-derive)
  - Additional polkadot.js derives for Kwe Chain
- [app-util](./packages/app-util)
  - Utilities to work with Kwe Chain
- [types](./packages/types)
  - Polkadot.js type definations for Kwe Chain
