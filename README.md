# Cashflowy Documentation 

The code for Cashflowy Documentation found at https://docs.cashflowy.io.

Our docs are built using [Docusaurus 2](https://docusaurus.io/).

### Installation

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `dist` directory and can be
served using any static contents hosting service.


### Deployment
This is deployed using netlify. When deployment fails, the most common reasons are broken links. Try to build locally to see figure out the broken links or other problems.

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).

### Development
- run on a differnt port - `npm run start -- --port 8080`
- starting a file with `_` make the file unpublished.