# HCloud API JS Wrapper
![npm](https://img.shields.io/npm/v/hcloud-api) ![yarn](https://img.shields.io/yarn/v/hcloud-api) ![pnpm](https://img.shields.io/pnpm/v/hcloud-api)
Auto generated wrapper for the Hetzner Cloud API. Most of this code was generated using [hey-api](https://github.com/hey-api/openapi-ts).
**This package is unofficial.** 
OpenAPI spec used is the unoficial types by Maximilian Köstler.
 * https://github.com/MaximilianKoestler/hcloud-openapi

## Installation
`npm install hcloud-api`
## Usage
You can create a client like this:
```ts
const client = HCloudClient(process.env.HCLOUD_API_KEY || "");
```
### Example
```ts
const client = HCloudClient(process.env.HCLOUD_API_KEY || "");
const { data, error } = await client.listServers<false /* true or false, true if you want it to throw an error on failure */>({
  query: {
    page: 1,
    per_page: 10
  }
})
```

### Endpoints
Supported Endpoints are listed [here](https://github.com/MaximilianKoestler/hcloud-openapi?tab=readme-ov-file#supported-endpoints).

# License
Licensed under [MIT](./LICENSE).