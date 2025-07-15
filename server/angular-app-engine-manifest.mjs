
export default {
  basePath: 'https://amitkhatkar.github.io/jokes-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
