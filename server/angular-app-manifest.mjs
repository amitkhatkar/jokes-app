
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://amitkhatkar.github.io/jokes-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/jokes-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 472, hash: '760ec885b4613c62a8d2664b4e7a3bfe4892c1529c913f26a8150562fca3c8cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: '7284e59f7f54716785a25325da38fd496c40d81b96d01f08b5c50a1457b2e57a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6538, hash: 'e6a5998f35c0db9a5b355092fbcf9660b5c765e8fe6175913a53d60685d418a0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
