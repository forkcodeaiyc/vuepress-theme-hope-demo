if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7ca43e00"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.05c13576.css",revision:"7e674cbea597f46ae4feef54bae84db4"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.a4213f1d.js",revision:"9f8ff161b6b2f31a804a488f7cc9f162"},{url:"assets/js/31.47426dfc.js",revision:"ba76b5405c91b88d6e1585f6a9c9644e"},{url:"assets/js/32.5922ca09.js",revision:"36f264866ca573c7dd3179fb68e16fea"},{url:"assets/js/33.d204cbe6.js",revision:"6f75b458ff4e2ddda6b4bae730e07950"},{url:"assets/js/34.2de40b8f.js",revision:"aaf7debe5652779256a26b226af38b64"},{url:"assets/js/app.1da03e79.js",revision:"2a077c2604c0aceec6d77f0f118d3388"},{url:"assets/js/layout-Blog.ca1bf1fc.js",revision:"ec96d5a5a2e282a01716b8556720d6c0"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.e0140701.js",revision:"8fee84ce78c192f54cadd3e1330e1d13"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.9c26724d.js",revision:"3d95be55796af9bed3502711e511c4f0"},{url:"assets/js/layout-Layout.838eca03.js",revision:"8158cb11ede9bd87d6e4f13310479508"},{url:"assets/js/layout-NotFound.12e425d2.js",revision:"ebba18400023a7a35cd6d9a5a8130997"},{url:"assets/js/layout-Slide.8eb3cba6.js",revision:"2658b02bec58735b57ab02d5f53272f7"},{url:"assets/js/page-BlogHome.759b5d0e.js",revision:"5d42791dea92fcb14653108a90a41b92"},{url:"assets/js/page-Componentdisabled.0ea14506.js",revision:"9270e48c855a598a3c021555f93868d3"},{url:"assets/js/page-Encryptionarticle.3b8cf2e7.js",revision:"ef590640bdb0c125f3c96f653bcdac1b"},{url:"assets/js/page-Guides.3d28b45c.js",revision:"65d46706aef05a0bca5f7ccee6e759a8"},{url:"assets/js/page-IntroPage.c76e146e.js",revision:"a66a38b423c10bf96b535c8a3a7ba73c"},{url:"assets/js/page-MarkdownEnhance.dd4c9f65.js",revision:"9c7f425758d3f3ff97377471e21cfbf7"},{url:"assets/js/page-Markdown增强.45f2517a.js",revision:"19aee0ea6afd1f8b84360a304af79aff"},{url:"assets/js/page-pageconfig.3c88087f.js",revision:"235639965c8d76830bf32c461fc11d82"},{url:"assets/js/page-Projecthome.a660dcb9.js",revision:"aa9f300b40548fd85df36c040a82ea20"},{url:"assets/js/page-Slidepage.bf67cdbc.js",revision:"71d9525e716f2bdb82ce2db81c9f139b"},{url:"assets/js/page-主要功能与配置演示.2af18559.js",revision:"54a1e6d5e47f1413771b3f6aaa8f1bde"},{url:"assets/js/page-博客主页.2cf37870.js",revision:"aabaadccb8bbe3ba5c9aad2ceb8f75df"},{url:"assets/js/page-密码加密的文章.0ada5b49.js",revision:"20b92f968bdd78ec5df2b301e9e08708"},{url:"assets/js/page-幻灯片页.2b0baac5.js",revision:"40680d2fe6b21dde890dd030283b11bd"},{url:"assets/js/page-组件禁用.af006661.js",revision:"c1bd79faef3d66213a206ed273bf4f6a"},{url:"assets/js/page-页面配置.b8546cb3.js",revision:"04f07714af7cfddd1b832ca2e8b5f268"},{url:"assets/js/page-项目主页.64efbfe3.js",revision:"935af16b8c06a94ba395f2994352844f"},{url:"assets/js/vendors~flowchart.8d094faa.js",revision:"cb3a0dc988261fde244a01cd2dc597e4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.86297de5.js",revision:"9387bd8dc9e6ca18fded6205546ad9e6"},{url:"assets/js/vendors~photo-swipe.313578f8.js",revision:"14c8bfb91a8ea2c3f9cf158bea41fa2b"},{url:"assets/js/vendors~reveal.ced4d693.js",revision:"9a4960cda998c1928689986e75328f42"},{url:"assets/js/vendors~valine.e4887529.js",revision:"08c737dd51bd915718ad737174da62ee"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"80209076c5842be721405a7d5d80db34"},{url:"article/index.html",revision:"8ea4e6cab214973433cd93bc5531a816"},{url:"category/Guide/index.html",revision:"b4a360b6a592b113dce88674e9cf54a7"},{url:"category/index.html",revision:"f76f67db40eb03cc38c59a0ce49b1fbc"},{url:"category/使用指南/index.html",revision:"9875e6b5caa5d4c0759d05694906dc49"},{url:"encrypt/index.html",revision:"6cf3eb4ba3ff29a5d8a8c00492349aae"},{url:"guide/disable/index.html",revision:"236a878c9c11f02f80f7ae5832d4f632"},{url:"guide/encrypt/index.html",revision:"88a8f393d2aa1e1250a9fac8210b8156"},{url:"guide/index.html",revision:"5fe477d9dcd001772bbcdf01cace45e0"},{url:"guide/markdown/index.html",revision:"d6384b3a925ca42772e9b1a2a26f26a2"},{url:"guide/page/index.html",revision:"3f08586be72a70c7a6a4e33f3c757492"},{url:"home/index.html",revision:"9480d3b7b3ba6637f50ee6edc43b35d8"},{url:"index.html",revision:"5097db6cc8c46575dca51aa5f0ce3e8c"},{url:"intro/index.html",revision:"35405f90cf52d8417232d8c1f04db51a"},{url:"slide/index.html",revision:"90ee99c91d5cb11b523b1eef47b1bbea"},{url:"slides/index.html",revision:"1a9d8dd011d302169c0a0df0430e3ffe"},{url:"star/index.html",revision:"328876c7d27efb0f8fa6e025871064b2"},{url:"tag/encryption/index.html",revision:"0370ea9a880be0f67e8358e6cd98c7a8"},{url:"tag/Guide/index.html",revision:"c4ee2cd896000ed79a496e3a7d643ed6"},{url:"tag/index.html",revision:"d5bfaf55cfb4129e37823c000a2f51a2"},{url:"tag/markdown/index.html",revision:"f8df42fc6a1f3ecd0379b16670eddda4"},{url:"tag/Page config/index.html",revision:"b15828586ff00a56caac58f6af487531"},{url:"tag/使用指南/index.html",revision:"b0a7d8e87a7191e0eb7c0c1098f02153"},{url:"tag/文章加密/index.html",revision:"a1419a65d56ff467333df4d002d58f43"},{url:"tag/页面配置/index.html",revision:"9c09f050fe15001befd1705f6ea3443d"},{url:"timeline/index.html",revision:"422ff8fb99c8f3e93a0d3e1937ba5768"},{url:"zh/guide/disable/index.html",revision:"c6617856af3b350942e0b1dd696496a6"},{url:"zh/guide/encrypt/index.html",revision:"012d419878e96fb152b106732793fdb5"},{url:"zh/guide/index.html",revision:"065e5c1e4a0538be4a25928eeb876ad8"},{url:"zh/guide/markdown/index.html",revision:"a4a5c89479af1349e5bb81a41f553457"},{url:"zh/guide/page/index.html",revision:"f77439f4d48c7656d66cd9c549c07caa"},{url:"zh/home/index.html",revision:"f063a157b471dad05150638c2f3b076b"},{url:"zh/index.html",revision:"2b22897a92667d4b9d2490cebdc225c9"},{url:"zh/slides/index.html",revision:"f6ca7dbe3e4a0be5f291868b2dcf9edb"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
