if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.c84dccdb.css",revision:"2d48d8dcd8f2032c14d4aa1249c235ba"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.93b70ff0.js",revision:"3758271202920a7c10302ec9078ba7b2"},{url:"assets/js/31.05871f9d.js",revision:"4e9a9466dfac8be1a5653047abe7f9fc"},{url:"assets/js/32.b4fcf85b.js",revision:"1ba92bbb04bb47b93d12cee778693edf"},{url:"assets/js/33.b6fced43.js",revision:"07f3cf3f5b76ed6cb2a8a61e53abeadd"},{url:"assets/js/app.48ff12a0.js",revision:"77c5dd723bc642e76588e08dd8dc77f0"},{url:"assets/js/layout-Blog.04dae257.js",revision:"44b5d54ae00f571a232b4188f533b7ac"},{url:"assets/js/layout-Blog~layout-Layout.5f5cc880.js",revision:"6e8a3ff4efc8d53cdb896fd5f43a47a2"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.a47d2e48.js",revision:"e2742960411270d0b49bafb3f0a5470f"},{url:"assets/js/layout-Layout.e79879ee.js",revision:"ce64ad68a6faf6c80118c797c670b011"},{url:"assets/js/layout-NotFound.8cb0cb39.js",revision:"d45ce8b1dacf210d5cb8a693d1f3af3e"},{url:"assets/js/layout-Slide.c17f5827.js",revision:"18a03e2b925cef03d1604a6bad147a2d"},{url:"assets/js/page-Componentdisabled--742e8b14.2f1d0c5b.js",revision:"01327ae0562129262184ac99c52f86b4"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.b1df76a7.js",revision:"bc419349cf22641740de66df62ac866f"},{url:"assets/js/page-Guides--22306cea.b7bb9e53.js",revision:"1eca0c7d424222fe96ec5af0a517c7a0"},{url:"assets/js/page-IntroPage--f358bcd4.ab4b7c33.js",revision:"b6645e5c574e2056e88c3ff16ee4041d"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.affd18db.js",revision:"2ebe0d3e0b75417ca95c5af3687f225b"},{url:"assets/js/page-Markdown增强--eec60994.5b42055e.js",revision:"236d37d7b8ffd4f99b6ab6018a26f0b4"},{url:"assets/js/page-MrHope--145768b6.2df19b26.js",revision:"44ad40aef46a09380a5e80f4129d22ba"},{url:"assets/js/page-MrHope--79004bd6.4f052e8a.js",revision:"bc458d5ebe0c6a214f12ea72236bc2d0"},{url:"assets/js/page-pageconfig--55e15bfe.85e347b1.js",revision:"51d2a8e211421d450f4c4304c186f4e7"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.ddd4a3ff.js",revision:"d2e3316f58abff17b139621d41a97554"},{url:"assets/js/page-Slidepage--7a2d82be.6691616e.js",revision:"edbd42b96f756ef3b263f7c3c58cce03"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.88379c2c.js",revision:"d65e15a41c3f06ed87afa27d947ce09b"},{url:"assets/js/page-密码加密的文章--64e181e0.343700a0.js",revision:"58d798a8bd809a83f8419745e5d529ff"},{url:"assets/js/page-幻灯片页--f6429394.c7d96dc0.js",revision:"7e686934f34211827c8d21a82731ede0"},{url:"assets/js/page-组件禁用--5650041a.1f66c677.js",revision:"db9c9b981313aa0de0c7a887cc1314ee"},{url:"assets/js/page-页面配置--2847a8b6.84edccdc.js",revision:"b2c4efb8ee18d13c203f25019fcaf219"},{url:"assets/js/page-项目主页展示--fb8d99d4.0d29cab5.js",revision:"444eb4e670de41594622c9edbef3bec1"},{url:"assets/js/vendors~flowchart.ad481226.js",revision:"2da36b2c99775c88b26191313f9db70f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.529edf63.js",revision:"16c09b740c8b91e45c97adb7ec443a81"},{url:"assets/js/vendors~photo-swipe.7c4d4fb9.js",revision:"89043837544d41b6150e3c7288dd6810"},{url:"assets/js/vendors~valine.5a7e7d71.js",revision:"2f157e9ed4433795b8b6e66f37bf0ad5"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"06c7bb756dc104fc0e9885630b06997e"},{url:"article/index.html",revision:"22d33f2becc4b55f90899019d1a84ace"},{url:"category/Guide/index.html",revision:"b847c18740d9b60aa26723d0bf980c91"},{url:"category/index.html",revision:"e90d7f6ba6132bbf92fa8f4dccb41bf9"},{url:"category/使用指南/index.html",revision:"2a5af3fa2f175f3ea8b16eb66f7c79f4"},{url:"encrypt/index.html",revision:"1e645c4e504b30d3e146e542632842ff"},{url:"guide/disable/index.html",revision:"f117ac4da7ab597766cfec1f1c076950"},{url:"guide/encrypt/index.html",revision:"d069f4327935c939eaa02265e527c6ce"},{url:"guide/index.html",revision:"e1a9154e9a69ea37fbd6199cdffee066"},{url:"guide/markdown/index.html",revision:"9181a4d760fb3e1e316628953889f52a"},{url:"guide/page/index.html",revision:"5054ffca61a51968facfd16b6a554113"},{url:"home/index.html",revision:"655ee600132d57c5bc75e430680fa2c8"},{url:"index.html",revision:"cb2f5b3002f590e6accd7a9b0304d7b4"},{url:"intro/index.html",revision:"44936d39933e9b3f7699e67f4355c6d7"},{url:"slide/index.html",revision:"3febb1a7fd8d24de3f90c2bfe920ad33"},{url:"slides/index.html",revision:"9a62935042b0bb938113653057459d67"},{url:"tag/encryption/index.html",revision:"5c404600bf5397a1aecdb9f37d7a6b21"},{url:"tag/Guide/index.html",revision:"c1dcfb1eff59835a96a94a26d40e3c75"},{url:"tag/index.html",revision:"70aa744ce61b698be5684c3b48152a38"},{url:"tag/markdown/index.html",revision:"af363d689d5f64828f94faca460b17fd"},{url:"tag/Page config/index.html",revision:"cd5d41ba05944a2722a62f6cd2bb319a"},{url:"tag/使用指南/index.html",revision:"f4d2e51e788342b88a70127fa1cf5be9"},{url:"tag/文章加密/index.html",revision:"881f00d334210ac4d798ac9cda829908"},{url:"tag/页面配置/index.html",revision:"8a710f26d9bbbc3d75b11de253158db7"},{url:"timeline/index.html",revision:"cbef9d138ece690bd8748cb7c915ee3f"},{url:"zh/guide/disable/index.html",revision:"66b42942f4498df97c696de7d4225199"},{url:"zh/guide/encrypt/index.html",revision:"c9ea4eb8d02e2fd1d85035128e356bc6"},{url:"zh/guide/index.html",revision:"dceec72224263e1a26b64d9911bb078e"},{url:"zh/guide/markdown/index.html",revision:"820a01be08fa4c9ab789d63179614bf5"},{url:"zh/guide/page/index.html",revision:"89c54b0bae2d4f472cc6141432a6ff1d"},{url:"zh/home/index.html",revision:"a368d3f05511e22a4f60c4b653d31899"},{url:"zh/index.html",revision:"01b83381533a73d2ecdfa324bb2e68ad"},{url:"zh/slides/index.html",revision:"7587eae0b1e281fd830eb947813da17e"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
