const httpProxy = require('http-proxy')
const proxy = httpProxy.createServer({ target: 'http://localhost:5150' })

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/build' },
    public: { url: '/', static: true, resolve: false },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  packageOptions: {
    //    source: 'remote',
    //    types: true,
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
    {
      src: '/api/.*',
      dest: (req, res) => {
        // remove /api prefix (optional)
        req.url = req.url.replace(/^\/api/, '')

        proxy.web(req, res)
      },
    },
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
}
