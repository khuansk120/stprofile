importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.805c327d0cb160c68165.js",
    "revision": "9baa86fc1a0c897c35f9664a6742c5b2"
  },
  {
    "url": "/_nuxt/layouts_default.67287425ee8c5e3a2fb1.js",
    "revision": "cccd6aa932b0dc5c8a2061767b74cc39"
  },
  {
    "url": "/_nuxt/layouts_layerlinkstu.53dc0d8d2b74d4d77244.js",
    "revision": "29d13026fa099b92754fa353967868b3"
  },
  {
    "url": "/_nuxt/layouts_login1.18e9ba03a574ceca14d8.js",
    "revision": "97988574d4c57eba00684312cc99ac73"
  },
  {
    "url": "/_nuxt/layouts_pageEdit.e67bbff7749385bbf7cc.js",
    "revision": "9d59a82ae9f3dd971715d66fa3dfba8a"
  },
  {
    "url": "/_nuxt/layouts_stvie.75513e12b963eeebe7f9.js",
    "revision": "8a86ca4a92c7c4da65a3bef5ffd89d79"
  },
  {
    "url": "/_nuxt/manifest.e0d187ea667a1e6a7cf0.js",
    "revision": "4e668e4bee82116d219af3ad5da0515b"
  },
  {
    "url": "/_nuxt/pages_aut.e8e6d77457a8982c66b3.js",
    "revision": "0cf09a9a13c51021c7ea3056c1aa124b"
  },
  {
    "url": "/_nuxt/pages_edit.08870f3434c41c66c5a0.js",
    "revision": "ed8d7a06a05ede9080ec5ddc8a674518"
  },
  {
    "url": "/_nuxt/pages_index.8d624538f831cfecefee.js",
    "revision": "be7a043772c90ac23c9ad9ae0c9bd2dd"
  },
  {
    "url": "/_nuxt/pages_isstu.e809cad5d077292ff9e5.js",
    "revision": "e7a8534b3cea7370f6337cfbd77283d0"
  },
  {
    "url": "/_nuxt/pages_isteacher.d5b8ce5d321ee7f4c5a7.js",
    "revision": "703a9d2db8fe7629434df7744dfbb718"
  },
  {
    "url": "/_nuxt/pages_istu.648ef0eafc02d090949a.js",
    "revision": "ba89aa8a73b353e8a87e88256243d5e8"
  },
  {
    "url": "/_nuxt/pages_iteacher.1064b7fc04e02c40acdc.js",
    "revision": "cce01e70a25601b4691eef1a383e7082"
  },
  {
    "url": "/_nuxt/pages_linkstu.2132d61dd60fbd0bc59e.js",
    "revision": "6580ebd2e7002d719a415c4c528d6b08"
  },
  {
    "url": "/_nuxt/pages_linkstu1.4fb7ccbb2aa2b45c6f52.js",
    "revision": "b331888b9a084943446400c973575e7f"
  },
  {
    "url": "/_nuxt/pages_login.969134819275d1bd195e.js",
    "revision": "cb0eb4035ed99ec515be870b4366eede"
  },
  {
    "url": "/_nuxt/pages_pageEdit.c685c396944fdc2ce56f.js",
    "revision": "59974b369f5b8dcea497decfa661cc14"
  },
  {
    "url": "/_nuxt/pages_register.c27647f566cf7615d72e.js",
    "revision": "ec8bf624dbd43429a5dd70d0f0aa169c"
  },
  {
    "url": "/_nuxt/pages_stview.dfaf2fd8a4f5af4d034b.js",
    "revision": "57b40bcea23c325419b17f15ae869474"
  },
  {
    "url": "/_nuxt/pages_view.5ff579e071d390ebaa9e.js",
    "revision": "80a2e105807e10216600a5dd4b2732af"
  },
  {
    "url": "/_nuxt/vendor.65de76c4b045928b0c8f.js",
    "revision": "37dbd4542cd243c7d2066ecf1a36d663"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

