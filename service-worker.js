if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-21e3d036"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"74406d0f7bd20f2daf29c71ce85605ea"},{url:"article/index.html",revision:"9064ef1c54d7fe96779158b44775766a"},{url:"assets/css/0.styles.26f41f8a.css",revision:"a11997046364cfad77c1a221857f78ec"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/45.0a6188cf.js",revision:"16b747bd2097e7b6c41efa758b412124"},{url:"assets/js/app.ef3d3bfc.js",revision:"9ee8aee3091edf5ceeaa1a42b6d3f919"},{url:"assets/js/layout-Blog.f517d3d3.js",revision:"6ff7455d4526a35d31cdd0fccae36291"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.f4bbd7b1.js",revision:"9ff6af2f02a3a556992d1f29a007bec8"},{url:"assets/js/layout-Layout.a1c49a87.js",revision:"af9db8be74d5d4f158471430b2c4d56e"},{url:"assets/js/layout-NotFound.38f51ea9.js",revision:"3935af09fdad85381726008498a6819b"},{url:"assets/js/page-Markdown增强--4d787654.55a54622.js",revision:"ebfd4b9b92864f88c66d70bbe3a4ca67"},{url:"assets/js/page-Markdown增强--87b26038.38b39dcb.js",revision:"3d936c0fab74132a121627a668a5cd07"},{url:"assets/js/page-vuepress-theme-hope--145768b6.7dcc31f5.js",revision:"d82ae77074ecbaff4b9e70fdf3bdaf32"},{url:"assets/js/page-vuepress-theme-hope--5dacd635.29b04a81.js",revision:"41082a14b25cba617698eb79202dc4e4"},{url:"assets/js/page-个人介绍--f358bcd4.9f1637f4.js",revision:"66186a5277313ab3295e8e17b2e69942"},{url:"assets/js/page-侧边栏auto--3a90cf96.709b5297.js",revision:"b27884037d28931625e2ab0c2775b04b"},{url:"assets/js/page-内部链接页脚--31f3a4f6.5abf1ce8.js",revision:"2d628e9c7eee9453c84fc9d034a0aeef"},{url:"assets/js/page-外部链接页脚--0f1c0bec.4bb9da2a.js",revision:"96b329efa7b639d9d500b36fe1940e92"},{url:"assets/js/page-密码测试--1d89700e.06ce6bba.js",revision:"126c8a1f8e883011ab853f8d328504c1"},{url:"assets/js/page-文字页脚--5ea4d836.50934fb3.js",revision:"810cbe1d275121d51ce9ac7a633b4db4"},{url:"assets/js/page-文字页脚--854e1b54.d8b59946.js",revision:"092b52c15fb5bc216892c748a9f1a0aa"},{url:"assets/js/page-无页脚--727687b5.590e9f15.js",revision:"50e5ae4725655977ae477fa191edaa2c"},{url:"assets/js/page-无页脚--c5727fd6.527d20ba.js",revision:"ef9ab475ff0e3db4af55bb1aebd53f0e"},{url:"assets/js/page-笔记列表--13847be8.dfa2ea02.js",revision:"d71557071bc44b42a0397b63a62c2f45"},{url:"assets/js/page-笔记列表--253f1d56.c7cd602b.js",revision:"b1051f4b7b7f2d923319d7be4d003660"},{url:"assets/js/page-笔记列表--36afc214.f8baeddb.js",revision:"9aecb7edb590da4057a495a4fd06bb42"},{url:"assets/js/page-笔记列表--3706d596.afab1315.js",revision:"48fc6b64c9e693205cf09ce1e2d7d621"},{url:"assets/js/page-笔记列表--4395057e.67072c7c.js",revision:"611abe9854d740da589f0e75214f8bde"},{url:"assets/js/page-笔记列表--48777a54.ecb81729.js",revision:"37060827f22590cd460c70c5653557e4"},{url:"assets/js/page-笔记列表--4c6992b4.10eae586.js",revision:"0e7cb94e1b4402d05e9beef2955e40df"},{url:"assets/js/page-笔记列表--5a3f3294.9b5cdc4b.js",revision:"9009732611092e4d6c22d211c7ba8002"},{url:"assets/js/page-笔记列表--779dd3f6.d03882f4.js",revision:"631c9908bcb8401e3ce223ba1155f52a"},{url:"assets/js/page-笔记列表--bfdc1d38.60d712e8.js",revision:"d0d6b39708ca1433bdfeaa63773dacc1"},{url:"assets/js/page-笔记列表--ed34e794.dae7f716.js",revision:"72fa8cd3d4dd1df2ea147f906e46574a"},{url:"assets/js/page-笔记列表--fefc9fd4.5e3ef5c5.js",revision:"4af3a9a46cf53c9af63605b12696a30b"},{url:"assets/js/page-组件测试--33a9d46e.1f4f8c20.js",revision:"4d1290c588d67f078e22f73150e45ac2"},{url:"assets/js/page-组件禁用--412a7956.51e6d0ad.js",revision:"4ec5c5b3629888a52fb351c9484dd197"},{url:"assets/js/page-置顶文章--bbc4e3a0.f8eee690.js",revision:"39f88b07bf1b09242a3cbd82d4ff4788"},{url:"assets/js/page-自定义页脚--638ce0d4.f42c3517.js",revision:"13f828212882a933df61700eff7a958c"},{url:"assets/js/page-自定义页脚--76fb1e1e.b96f118b.js",revision:"387e1a05d68e164ac2518bb3a1d41add"},{url:"assets/js/page-页面信息--41bbd7b8.e71ef880.js",revision:"de39c221c2662d86348dba4531a027d7"},{url:"assets/js/page-页面布局--0f63db56.5c75a399.js",revision:"e996d665a44fd383bb6c850cb8407d5b"},{url:"assets/js/page-页面布局--c006385a.73b607e1.js",revision:"0bf390522e9cb7c7234d0ad0c299f408"},{url:"assets/js/page-页面配置--36b78854.fa6dcb88.js",revision:"22d6f84fc97e3cf5559462cb1015021a"},{url:"assets/js/page-默认页脚--9df0770c.4c19925d.js",revision:"de86f4f4dbf21ba08e8bfc5e1d06c24a"},{url:"assets/js/page-默认页脚--d5d7bcf8.35eddf59.js",revision:"da9be87b48841f021497cd3ed1ee14e1"},{url:"assets/js/vendors~flowchart.55967a54.js",revision:"b886ee9099bd470bfce2dea3c8e28faf"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2135f36b.js",revision:"0d664e013c0440847402ece1804f8996"},{url:"assets/js/vendors~layout-Layout.1616c8d5.js",revision:"fd00c9eb14999d22ae5ef301a165a505"},{url:"category/component/index.html",revision:"d554474208490ceba612a777607984c5"},{url:"category/index.html",revision:"11c78b768ca4f1550e748d3df3624e80"},{url:"category/layout/index.html",revision:"7308997f78324a469e4cc9faa5f50a23"},{url:"category/note/index.html",revision:"dc2c0b32059c9b61ba692bff414583a4"},{url:"category/note/page/2/index.html",revision:"92c96ddd0ad46da1615766adadf49aa2"},{url:"component/disable/index.html",revision:"8db5760561e352271c2ef52f2c1c0d1c"},{url:"component/footer/default/index.html",revision:"c96371569690e883fc959800ebe40ccf"},{url:"component/footer/diy/index.html",revision:"e40ba7cf2e5af790fa356d0720f2f8e9"},{url:"component/footer/index.html",revision:"6811d687fb32c9e6ce8ebdb855841ac5"},{url:"component/footer/text/index.html",revision:"b882b708886be0c3416d8d8364a2a23d"},{url:"component/index.html",revision:"00be88649511e8167d39c484c2e087ac"},{url:"component/pageInfo/index.html",revision:"2d0bc44fc8e46553234d46e5172f426f"},{url:"en/index.html",revision:"c857274b1ed3d5a8f0b476b9d6751059"},{url:"en/test/detail/markdown/index.html",revision:"a3233793815a1532d6978d7a84501812"},{url:"en/test/detail/page/index.html",revision:"9bab4c1254466ded993e38610a1c2367"},{url:"en/test/footer/default/index.html",revision:"68f1f95a24286f7d7167c745729c83be"},{url:"en/test/footer/diy/index.html",revision:"006f6add0e07d31973e5bfca1dc0d61e"},{url:"en/test/footer/index.html",revision:"d3a95de3245afbec8d26e8e44cd24c87"},{url:"en/test/footer/link/index.html",revision:"6250ae4404b6011d3f89dfe596483a68"},{url:"en/test/footer/outlink/index.html",revision:"3e200638acac3858c07476775c1160e9"},{url:"en/test/footer/text/index.html",revision:"5b8a98b5d6875ef8ab1c2a584afd09d8"},{url:"en/test/index.html",revision:"0eb2162b3db83642ec0b39a09c803471"},{url:"encrypt/index.html",revision:"f4de1a2cdd74ed4fb52801ab1e889253"},{url:"index.html",revision:"33e403ce76282bc3c349b59c182342ae"},{url:"intro/index.html",revision:"0aafd3b6a70568d2b08c77176cd28cdd"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"markdown/index.html",revision:"e4b1906fae550e9f78b5c7e8ba12b09d"},{url:"notes/1/index.html",revision:"99b8f968be863175ff90178f0a385fc2"},{url:"notes/10/index.html",revision:"4b63c568548e8725bca04c932f872e0c"},{url:"notes/11/index.html",revision:"a0f6c5b2c6592d434c9c9ead6ae4a52e"},{url:"notes/12/index.html",revision:"f9dcf5947a2b1731ff79186610170f85"},{url:"notes/2/index.html",revision:"191a69127e45d945897dd8eb3e312663"},{url:"notes/3/index.html",revision:"403e38af40986330722b4d5fd3afb247"},{url:"notes/4/index.html",revision:"df2b391f25aba34a6a70628d84a89509"},{url:"notes/6/index.html",revision:"7e6c6ca051a3a23291deab80744df4da"},{url:"notes/7/index.html",revision:"3a7ac021a191bdf5697096d711c73deb"},{url:"notes/8/index.html",revision:"807572050d44d43beb6f08de1ca00f32"},{url:"notes/9/index.html",revision:"be00959e118cd8c968d6faf6033fa00b"},{url:"notes/index.html",revision:"0956da8abbc7cf70ea7ff67276759926"},{url:"sticky/index.html",revision:"fa799275a8ca483b3dfd507de4f896da"},{url:"tag/footer/index.html",revision:"fc3fdd82affb51da5ca30ee45d6ffba9"},{url:"tag/index.html",revision:"db2c4f7b9417ac4ea593d56868c5653f"},{url:"tag/layout/index.html",revision:"58f989bb3f1c7fa179545757b42028ab"},{url:"tag/markdown/index.html",revision:"737b821b55fd2cd8dcf1be50c0bff093"},{url:"tag/note/index.html",revision:"81c03599593cf81d1a5c621ce1742f3b"},{url:"tag/note/page/2/index.html",revision:"144d094dff3dc2191e63e718131ea46d"},{url:"test/auto/index.html",revision:"47f927d5688deca807b1debb202bb7f2"},{url:"test/index.html",revision:"c912f447ebdf86619e8d443b06879793"},{url:"timeline/index.html",revision:"537478bfa0ef7ff0b9b0fa7e9624aa6f"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
