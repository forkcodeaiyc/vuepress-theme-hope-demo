if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-2d2248bf"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.a60448f3.css",revision:"f056695944733a046542e4f15efeef6c"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/30.c34f17f5.js",revision:"4cac492ba281c4d42a951bbb82f9f77c"},{url:"assets/js/31.ce93b67a.js",revision:"dfc8a40e8a516f6e4118ad26c21f0f72"},{url:"assets/js/32.099f0bc4.js",revision:"7a1abe3f176557f67269a5b51a963245"},{url:"assets/js/33.e8dab78d.js",revision:"229e3ca822de2a0d794900569a6ec2b3"},{url:"assets/js/34.b0eff179.js",revision:"047032adaa69df945536aadb7ad46e68"},{url:"assets/js/app.400b02c9.js",revision:"4ba7999236abdc428366bdeac95e9d43"},{url:"assets/js/layout-Blog.1f4a9860.js",revision:"0c5df6df13222482b516d42ac5718eb5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.5e733961.js",revision:"9becf36ea6127fde67bcf750d7185317"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.32ec1479.js",revision:"e97d4d19cf90851c647ed50dc7ce8b51"},{url:"assets/js/layout-Layout.9a62ec0f.js",revision:"dca1349781c4212718cc4c95a6852101"},{url:"assets/js/layout-NotFound.f20be848.js",revision:"81167967ef96870570b3eafc8b74c60d"},{url:"assets/js/layout-Slide.2bca0022.js",revision:"c29bcbaa9828330941b5366dba558193"},{url:"assets/js/page-BlogHome.652d1d9d.js",revision:"4afd745b8804aaa876ef5b3cbd77034a"},{url:"assets/js/page-Componentdisabled.e3376a07.js",revision:"6799a4b6ead93810032e1057f6e3036d"},{url:"assets/js/page-Encryptionarticle.56ca01af.js",revision:"f6b39c54eaf209d2d5c36b1f6b68fc9b"},{url:"assets/js/page-Guides.c6b8a151.js",revision:"894f0d29d3057b8c200c7f37d7bfc0bc"},{url:"assets/js/page-IntroPage.d6e34973.js",revision:"54c68f7b6438b200714197a5e52753d9"},{url:"assets/js/page-MarkdownEnhance.6d960c57.js",revision:"838c4aa6bcf912c7361ffd448d32dbd9"},{url:"assets/js/page-Markdown增强.2c247c35.js",revision:"87ea8db45b3e340d39d0708753e59798"},{url:"assets/js/page-pageconfig.5c71e92c.js",revision:"001c7dc8f8f3ad8a76532f12be974a89"},{url:"assets/js/page-Projecthome.41ff683c.js",revision:"61aef3c5663cf7bd5bd3b1995e7ce258"},{url:"assets/js/page-Slidepage.361b2634.js",revision:"7fa1fb870a0935996e574344eb8698fa"},{url:"assets/js/page-主要功能与配置演示.f1adecbd.js",revision:"ae0ded73c41d3398c923abfd91dff868"},{url:"assets/js/page-博客主页.2fe5e2bf.js",revision:"00a23e08e4a0463c83b8a1413e1df733"},{url:"assets/js/page-密码加密的文章.50808f0d.js",revision:"2f951a7c039e71fd126a7e13ccee30d0"},{url:"assets/js/page-幻灯片页.a6430e03.js",revision:"b906c07316523744aae730305b05f119"},{url:"assets/js/page-组件禁用.dbf471d2.js",revision:"855077ccf242c233695658427ceee966"},{url:"assets/js/page-页面配置.6d9d818d.js",revision:"0ffb3acae4be21b43855ba42eaa7700a"},{url:"assets/js/page-项目主页.19494332.js",revision:"160e03a92e42a064854fa035753b8bd0"},{url:"assets/js/vendors~flowchart.ca41b43d.js",revision:"94ce9c9cc95d1766311c92b151fe2263"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.07fc34c4.js",revision:"c348115fa557e6a792c590b6106838f4"},{url:"assets/js/vendors~photo-swipe.cd654892.js",revision:"09ff864c712a58f1e8f00d2d7d01c670"},{url:"assets/js/vendors~reveal.4913f373.js",revision:"b7993ed7b005a686909d7b629115e5de"},{url:"assets/js/vendors~valine.5e8071b0.js",revision:"de48b70448d838165c21fcaae42d07f7"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"c95bbc8f57431c3d6bddcacbd6377f59"},{url:"article/index.html",revision:"cb32060de72eaaaa0a387a2960d0749b"},{url:"category/Guide/index.html",revision:"45008a27369782e4bdc473424779f74e"},{url:"category/index.html",revision:"ff7694999b9975c3e896fd68a7be0194"},{url:"category/使用指南/index.html",revision:"5607b027c2afc4da30065b3f64fff5a2"},{url:"encrypt/index.html",revision:"58ceccb9c68a27842e0a83f337f41e35"},{url:"guide/disable/index.html",revision:"b0a0b0e4ecf0cbe4fe96c2077c817fa6"},{url:"guide/encrypt/index.html",revision:"ddb1f35b74f86139e6b64d34442f8c92"},{url:"guide/index.html",revision:"68548a9728d671251b7be6a550ee234c"},{url:"guide/markdown/index.html",revision:"38e2a1747fc0fdd62eba438042bc6c84"},{url:"guide/page/index.html",revision:"481fe1580e457b1d52b08f8935fb9962"},{url:"home/index.html",revision:"a09e4a5c45b36ec89421a574a195e22d"},{url:"index.html",revision:"efe562c34abb20384f57bcd33f0bfce4"},{url:"intro/index.html",revision:"8840ef8717019a3c268130e0659817ae"},{url:"slide/index.html",revision:"0303b15247bf8506b393c5e226f5e3d9"},{url:"slides/index.html",revision:"bc0d9eef82874b3daa1c4631f22a36e9"},{url:"star/index.html",revision:"ac5f9e56ff5a9331fd237d164282d740"},{url:"tag/encryption/index.html",revision:"45290bf45c23cdb26235488b2e3be98a"},{url:"tag/Guide/index.html",revision:"ed303bbec95a0675a0d0660972222bc1"},{url:"tag/index.html",revision:"a5af80751dc9fb6a411670ba89f5506a"},{url:"tag/markdown/index.html",revision:"124e41054a7a501fca3cdf2ddddf3e05"},{url:"tag/Page config/index.html",revision:"bc4643ed6ac6ff2672cd6cc1788b7475"},{url:"tag/使用指南/index.html",revision:"294478da7ed90bb2237904bbf03594b5"},{url:"tag/文章加密/index.html",revision:"b0c3fb7bab6451c734ec5a7bf5d0abf9"},{url:"tag/页面配置/index.html",revision:"fb103bfd532e7bd0f7efe40eb076fb07"},{url:"timeline/index.html",revision:"3abbd0b2cb0c034ebe33a71463f81436"},{url:"zh/guide/disable/index.html",revision:"e2cdbf8fc751eb46011f6759aca6bb31"},{url:"zh/guide/encrypt/index.html",revision:"96723a0da774c96831998d4b1cb4bd2f"},{url:"zh/guide/index.html",revision:"6a3bfc0c7456f3bbd54b7b3e22db6b1b"},{url:"zh/guide/markdown/index.html",revision:"db55e2896a99b392fd448cea310e9099"},{url:"zh/guide/page/index.html",revision:"d8e5c5c479b16879796783335df5f33f"},{url:"zh/home/index.html",revision:"69c85ae3da67b8c81cae29991520cd29"},{url:"zh/index.html",revision:"d02914102b96376f09a08992a9769dee"},{url:"zh/slides/index.html",revision:"a6b84ae2891904f2e451a4a77014fd64"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
