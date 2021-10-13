# Vercel Debug Toolbar

## Installation

In order to use this package you need to start by installing it

```bash
$ npm install vercel-debug-toolbar -D
```

Open, or create, \_App.js file and add the following code:

```js
import VercelDebugToolbar from "../components/debug/vercel-debug-toolbar";

const _App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <VercelDebugToolbar pageProps={pageProps} />
  </>
);

export default _App;
```
