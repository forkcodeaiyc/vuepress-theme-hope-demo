if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.fd0fcfad.css",revision:"4647f9f4d6b0090919e5985dbbc463aa"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.a4213f1d.js",revision:"9f8ff161b6b2f31a804a488f7cc9f162"},{url:"assets/js/31.47426dfc.js",revision:"ba76b5405c91b88d6e1585f6a9c9644e"},{url:"assets/js/32.5922ca09.js",revision:"36f264866ca573c7dd3179fb68e16fea"},{url:"assets/js/33.c0770821.js",revision:"634b4be6f716482c19772b7bc7955699"},{url:"assets/js/app.920286bb.js",revision:"b7b28d2f2ee0d2fe697e701d3331998f"},{url:"assets/js/layout-Blog.c30bb289.js",revision:"9d070d89eafcc899e604d878375c9432"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.8caee28d.js",revision:"6e1f68efe30c78407f215de380507168"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.20c7d1ff.js",revision:"e030d1718bd2e453043f80e5326ef436"},{url:"assets/js/layout-Layout.ed11e25f.js",revision:"6e887b0d592cda7e38e313d8ad589dd4"},{url:"assets/js/layout-NotFound.2c3cd179.js",revision:"5bc615abfda9200594dd3198ce2e3086"},{url:"assets/js/layout-Slide.6bedca45.js",revision:"df8b67975383a0f1ee18cedcd7c62e72"},{url:"assets/js/page-Componentdisabled--742e8b14.d263a3c1.js",revision:"62c8a658fb70caf2c666a2308cca5254"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.7a68df44.js",revision:"b9331b4f56e8d357152ead33dac1fb3d"},{url:"assets/js/page-Guides--22306cea.04483a33.js",revision:"b87e709cfc49bbcd783f129cf7d6829a"},{url:"assets/js/page-IntroPage--f358bcd4.b4ea5fe4.js",revision:"58bcad9ed5efd7368eeb343b1ffb255c"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.b303062e.js",revision:"5baf9ee6f58b4d84a190a92a2d03808a"},{url:"assets/js/page-Markdown增强--eec60994.7669a4bb.js",revision:"f95bcb15ef6d2c6c9ab256aa86472588"},{url:"assets/js/page-MrHope--145768b6.703097d9.js",revision:"9e4c52a243d246e2364f1e071bbce94d"},{url:"assets/js/page-MrHope--79004bd6.cb62c969.js",revision:"9e5f9ffd1198b5c204bb4871a421de32"},{url:"assets/js/page-pageconfig--55e15bfe.a98429a9.js",revision:"ec315a4cfddf45761a6fa76f544f9d73"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.bb60284d.js",revision:"f2f56e5ff2d51000700b2a55b9271e35"},{url:"assets/js/page-Slidepage--7a2d82be.270f197a.js",revision:"18730d64b1c0b15c6df74f301d87dde1"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.5008175d.js",revision:"f75ffa7467caf321698f41fcfc428908"},{url:"assets/js/page-密码加密的文章--64e181e0.a5bc5668.js",revision:"338da989c3d5576c1b9eaba49c4fc86b"},{url:"assets/js/page-幻灯片页--f6429394.71debf14.js",revision:"9b8225d363fbbb7a1cbc002b4cbd29c4"},{url:"assets/js/page-组件禁用--5650041a.59221135.js",revision:"377df23d14c7a664e926464703fdba61"},{url:"assets/js/page-页面配置--2847a8b6.4a7cff92.js",revision:"e13667ba9ea093816440f79be9331d06"},{url:"assets/js/page-项目主页展示--fb8d99d4.16c4594e.js",revision:"1969fec4725e0c0338f7f1b8fbe82614"},{url:"assets/js/vendors~flowchart.2ea78ba7.js",revision:"0fff999a0c1131f8c7e672ea27c5458b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.69b08bf2.js",revision:"71a47b1323c01319a3b7e9b696f27f13"},{url:"assets/js/vendors~photo-swipe.4013e7eb.js",revision:"ebe3049abbda3e7c40a91a9442f1b0d3"},{url:"assets/js/vendors~reveal.42050ef4.js",revision:"6216f00e1b0dd502a6c7eed14374dac7"},{url:"assets/js/vendors~valine.250f1ed1.js",revision:"ae4d3b4a5bcc33b5adb8cf81f43b9eb6"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"f552a8b17a1f89b58b1b4db83e52e0c7"},{url:"article/index.html",revision:"21ed86926101e75b680c67cc7499e735"},{url:"category/Guide/index.html",revision:"70033424855832d44f4a5b8e9e1a4c70"},{url:"category/index.html",revision:"76c2516b9d88a7881e6edf82ced367e6"},{url:"category/使用指南/index.html",revision:"94d4bbf78018a8bcef35d4e86c2d72ca"},{url:"encrypt/index.html",revision:"b5f51c335552f414d034bee3a6c56e19"},{url:"guide/disable/index.html",revision:"ac20d9ec08b2d1ca3ddf9977a65ca7c2"},{url:"guide/encrypt/index.html",revision:"6fce65aa60aefe4ff5864fa31ef1c062"},{url:"guide/index.html",revision:"6de32b5412322db7ec1475659aead6f5"},{url:"guide/markdown/index.html",revision:"478b710123e678420bf557e2eda102b7"},{url:"guide/page/index.html",revision:"4fe88d162b965a4f10671047fa3fb099"},{url:"home/index.html",revision:"6daa682c8437da7430091b0017b6fb9f"},{url:"index.html",revision:"de4affe7c172c34b5025ba05e1823847"},{url:"intro/index.html",revision:"641c60cdd56548c2f666e4110bbcb65d"},{url:"slide/index.html",revision:"a5df5c971f165df39d53e62ed817ce2d"},{url:"slides/index.html",revision:"668cb1b9814acb6a74b0032ab5efca36"},{url:"tag/encryption/index.html",revision:"c3f11983ddfd69106e8f1b5afa7ccff0"},{url:"tag/Guide/index.html",revision:"206669524673985996c637012373749a"},{url:"tag/index.html",revision:"ff2b215416612616c89caaa7cdb8c5a4"},{url:"tag/markdown/index.html",revision:"7cbb676c5e767580b8d63317f8bf7b45"},{url:"tag/Page config/index.html",revision:"81289da9ceae471b7206de8f50f45549"},{url:"tag/使用指南/index.html",revision:"3a08d557692d906a595a268463b99ae4"},{url:"tag/文章加密/index.html",revision:"f1e1a5c622c97845d078d32a5db167f3"},{url:"tag/页面配置/index.html",revision:"12d3c6cab60affc566f0de48fd2d6828"},{url:"timeline/index.html",revision:"8b227e274e3fd852a57e79a00106d633"},{url:"zh/guide/disable/index.html",revision:"bce76a98a050fc890429226984f8fd77"},{url:"zh/guide/encrypt/index.html",revision:"ede50f7c73ffc92700c1d01efe500974"},{url:"zh/guide/index.html",revision:"6a0553d99826d6b27485b9ae4f26b3c7"},{url:"zh/guide/markdown/index.html",revision:"2a7e558dedc34f708b84f1f44acb2c0b"},{url:"zh/guide/page/index.html",revision:"1de9e519aa727a9fa234e23ea9d68273"},{url:"zh/home/index.html",revision:"68f5053f9530add4c64caf2de96dbd9f"},{url:"zh/index.html",revision:"390de99b5b6df697729c090532e05c2f"},{url:"zh/slides/index.html",revision:"f15bd5e291fee955481122dd4d80887a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
