if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7ca43e00"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.510b3c8b.css",revision:"c36336fdc32b7263f3be6b0acd86ce32"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/30.b51f8693.js",revision:"93676d5794cda456497df7c281af29cc"},{url:"assets/js/31.e1804731.js",revision:"0c914e1d1019176f8470fa3c4f903711"},{url:"assets/js/32.c2871bad.js",revision:"44ab0f9afcee0df838f821aac1ed5b34"},{url:"assets/js/33.ed8854f6.js",revision:"bacc681ee2f77fdbbc65adf53aa8d115"},{url:"assets/js/34.6bc281c5.js",revision:"fbd701c2789fef66c93111ad8b3d5ebd"},{url:"assets/js/app.a2624925.js",revision:"98f904207e805ebbd9fb8e600dc0f5b4"},{url:"assets/js/layout-Blog.c33c0614.js",revision:"adbc8090a398fe6539d536eb0ba7308b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.23ebc4ac.js",revision:"b4b0ac25ca5d001613225ead3347e94f"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.7fd60a27.js",revision:"375c5d12011f113990d25831574f0f25"},{url:"assets/js/layout-Layout.1c8715bb.js",revision:"daefe735ad07bd058f758352271ed919"},{url:"assets/js/layout-NotFound.2787458e.js",revision:"1a316ce72c0b646f0ff33cb4abb41752"},{url:"assets/js/layout-Slide.672c39e2.js",revision:"4fab65b9e0daf6978ef82d7b355e2531"},{url:"assets/js/page-BlogHome.3f24d472.js",revision:"635aeed8cc18a7429054154af89d558d"},{url:"assets/js/page-Componentdisabled.b7a1c2bc.js",revision:"d8fb73ce9c03da24908a73d3e339ae9e"},{url:"assets/js/page-Encryptionarticle.5768ab05.js",revision:"e07dbac557166f2e6cd049b9874b0688"},{url:"assets/js/page-Guides.e771c341.js",revision:"125f844e6bfadc1d8fe7eb99894f1e69"},{url:"assets/js/page-IntroPage.2e16efbb.js",revision:"01a1654194e0fc1d936f14d6a7753038"},{url:"assets/js/page-MarkdownEnhance.0fc799e2.js",revision:"0584920ad198889c6f2cea378fcb9301"},{url:"assets/js/page-Markdown增强.730eba73.js",revision:"080df430e53515fef4aeda8dd23ebe31"},{url:"assets/js/page-pageconfig.77035f94.js",revision:"01978fd835a088e5f11201135707ae7c"},{url:"assets/js/page-Projecthome.3bca1c24.js",revision:"d632f48d24c7fd1ebf5090c56808fd08"},{url:"assets/js/page-Slidepage.fbe1b56a.js",revision:"0935bc053751978ccbb29891ca63d7ac"},{url:"assets/js/page-主要功能与配置演示.991e7e5c.js",revision:"736e478c7bb1cff71021f7a47595ba19"},{url:"assets/js/page-博客主页.85a59103.js",revision:"495d65790b399f7112cdd1723fa09eda"},{url:"assets/js/page-密码加密的文章.0fa7aa72.js",revision:"dddcf3d74fefba17a15002aef302e3c6"},{url:"assets/js/page-幻灯片页.4f4d57e4.js",revision:"adda08218b9168da6201f6ad9a2e98d2"},{url:"assets/js/page-组件禁用.5b2807cd.js",revision:"63e2433d906416b67c3e5bf421a73cd8"},{url:"assets/js/page-页面配置.6889d1fd.js",revision:"f3be037fcc43132a869b1aebecc011b5"},{url:"assets/js/page-项目主页.1e75281b.js",revision:"31482217ce22cda5f175178bcc31c132"},{url:"assets/js/vendors~flowchart.6b87feb9.js",revision:"5eb3ab19d5ebde17dd17c98d990b3d5f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.eb6ac2b8.js",revision:"ef70a1025cc10bfa488f609ee6a22652"},{url:"assets/js/vendors~photo-swipe.e1c0a5a5.js",revision:"510710c3b961423b1be05d83962f1995"},{url:"assets/js/vendors~reveal.176acaf9.js",revision:"ddaa2f6d3085278c0682ac5d37fc1de2"},{url:"assets/js/vendors~valine.230f6c0d.js",revision:"38ebc0f0e7f2e0ec73841eb71509ad1f"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"58cbfcdbd909f449fb0a7b05ff2ced14"},{url:"article/index.html",revision:"66b42402369397dde3a22cb6aa9e54a6"},{url:"category/Guide/index.html",revision:"de8fa341340e52efda8448488f8149eb"},{url:"category/index.html",revision:"7b65d9e1efb0c19b698ea8a8bac27b7e"},{url:"category/使用指南/index.html",revision:"9fe7dc9dd78d56218f68e9185bbce8d5"},{url:"encrypt/index.html",revision:"a132ffea4afbba1705343c461deaca44"},{url:"guide/disable/index.html",revision:"56493ffefa48e7d6d3cfc8862ca63d91"},{url:"guide/encrypt/index.html",revision:"d63ab15fe876f8ed6f103ce867c0bd1d"},{url:"guide/index.html",revision:"35c7879ec0a596524c1b92a86a041367"},{url:"guide/markdown/index.html",revision:"20b0b211c688810d43516642d2ad3361"},{url:"guide/page/index.html",revision:"b709daff6c5a71a7e02f4d1947c8d69a"},{url:"home/index.html",revision:"f26af35de5ac49f1e21dbe6d1a6d69f5"},{url:"index.html",revision:"c6e206d448b009c8996ebf3cf14e0a91"},{url:"intro/index.html",revision:"c76139ac10dfe883a7e3afaee3806098"},{url:"slide/index.html",revision:"2fb121c84cec8a99e69c7a24dd2f0df8"},{url:"slides/index.html",revision:"8483690e869d179cc1eb9facaedb46ab"},{url:"star/index.html",revision:"4511cb93f32171d1e181adfcbcf9e38c"},{url:"tag/encryption/index.html",revision:"df9e4f8b8b55cc8b892472e4e45419fe"},{url:"tag/Guide/index.html",revision:"d5f01396e81109a7a776300d3018976b"},{url:"tag/index.html",revision:"27e98a69ac50b82fc9bcd92fbaa5ba71"},{url:"tag/markdown/index.html",revision:"8d4d073f2ef9c5e59b53f83effeda93e"},{url:"tag/Page config/index.html",revision:"38a24c58ec82e2868151db8e25e71983"},{url:"tag/使用指南/index.html",revision:"e0b2b4098a5603ff27e97edbb1f8f410"},{url:"tag/文章加密/index.html",revision:"78c104dd0646852f3bd0493fd3e79cdf"},{url:"tag/页面配置/index.html",revision:"7ce1a462e831647b9d1482e341da34ed"},{url:"timeline/index.html",revision:"472ae73d5a8ffa19cc7b9db9fe23535c"},{url:"zh/guide/disable/index.html",revision:"a55d23ee368cc9c948b5608845e3eb38"},{url:"zh/guide/encrypt/index.html",revision:"215c806540646de3ec7478319bd911a0"},{url:"zh/guide/index.html",revision:"eabbe615ba93544e860dc70e5801716c"},{url:"zh/guide/markdown/index.html",revision:"da819189c74794aa599dc01b5bc0d2ae"},{url:"zh/guide/page/index.html",revision:"3b3a8432afd4ea673c2ca7cf00e66af4"},{url:"zh/home/index.html",revision:"6288cf9d06aedc21b7bc6544c40a7402"},{url:"zh/index.html",revision:"56129379b21b553c1b353539236bd509"},{url:"zh/slides/index.html",revision:"7cd91b0aadb2cf42d562b96ea10dbd5b"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
