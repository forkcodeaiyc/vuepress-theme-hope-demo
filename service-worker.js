if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7b2cd3a9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.5303274d.css",revision:"05588f21c773e9733a02a2c3b33872ec"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.7996d455.js",revision:"83d93c1321341be2e6d4b90fd06b5825"},{url:"assets/js/31.29ed7ec2.js",revision:"90aaf71adeef05a6b3ba036fb973c644"},{url:"assets/js/32.06bb5a85.js",revision:"5b8abb151f75501dec13a4144db9b5bb"},{url:"assets/js/33.73013c39.js",revision:"adee9c78120e17235063d5435d883b87"},{url:"assets/js/34.c292be2a.js",revision:"6fb9a005fa3c05b829d744afece2e780"},{url:"assets/js/app.9394bfea.js",revision:"514997ec2650d052b5644497bbaedb9c"},{url:"assets/js/layout-Blog.f106362f.js",revision:"d4c4ecfee3d578a0ccc10a02da0224c9"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.2102ab4c.js",revision:"1cd519c2895211693130b7a1b9e53932"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.c9b4d757.js",revision:"5108b657965cb2fe584dbf3bca00ff62"},{url:"assets/js/layout-Layout.66acbe45.js",revision:"63730458fc99577abb788f9ba136b21c"},{url:"assets/js/layout-NotFound.9fef2b71.js",revision:"e24a649970c10aeddb9a66eb6a5d0f91"},{url:"assets/js/layout-Slide.bdfe7d41.js",revision:"9da27bd14b5b4592d4f0ef30b417adea"},{url:"assets/js/page-BlogHome.4a603a5c.js",revision:"80363ded012d0b4d9981f11974c0bc3f"},{url:"assets/js/page-Componentdisabled.fc6635fe.js",revision:"ddfcbee24106a3caed17bc5449bc6958"},{url:"assets/js/page-Encryptionarticle.2356acb9.js",revision:"1f00f4cc64dcf8ae55dfd2ce89700e68"},{url:"assets/js/page-Guides.61a2f6f8.js",revision:"b91596ba9565b27e5b72fe3009a304ec"},{url:"assets/js/page-IntroPage.13942b53.js",revision:"ab6af53173bcffc318a89e9787d49bd5"},{url:"assets/js/page-MarkdownEnhance.0b6bb9a6.js",revision:"26fb5fa2573e9bbae9daf9782b94b89c"},{url:"assets/js/page-Markdown增强.e28a7131.js",revision:"b651549ec3b39e89935f10ac4f3ebb05"},{url:"assets/js/page-pageconfig.71b7be4b.js",revision:"7eb8c4d37c6de67894559b5384ff7934"},{url:"assets/js/page-Projecthome.292ddf52.js",revision:"1a474e958a8c6b156359b7d247885626"},{url:"assets/js/page-Slidepage.ecc69801.js",revision:"a62914b180906742b5c8bdbf194ec826"},{url:"assets/js/page-主要功能与配置演示.45c1acd7.js",revision:"c21336c31d35391566390d4d23d73026"},{url:"assets/js/page-博客主页.fa13bedb.js",revision:"b55d0284a57872ca028b0bf76196ce9c"},{url:"assets/js/page-密码加密的文章.9b8e4a48.js",revision:"6e1ee5425dd58d3bdfac770a282724c7"},{url:"assets/js/page-幻灯片页.fdcda327.js",revision:"267f0d224d44e91da0d77c5c9c310a0c"},{url:"assets/js/page-组件禁用.676f49d9.js",revision:"f0e607fabaca5ce1f0fc2e885eff1b2c"},{url:"assets/js/page-页面配置.b881853a.js",revision:"fd5c4b3ed9f09a161f496a45c75cbf49"},{url:"assets/js/page-项目主页.aa828ce2.js",revision:"09ff4a738b8b28464aeac35a1548aa76"},{url:"assets/js/vendors~flowchart.14c628d8.js",revision:"9c71a31dfc9930dfa3a3fed2c12c43fe"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.37eb6f27.js",revision:"9f921643d6170ca5759abf05251409db"},{url:"assets/js/vendors~photo-swipe.3b0eaf1c.js",revision:"f728ffd9cc2d7a5b8df11ac4bc6fb2b5"},{url:"assets/js/vendors~reveal.48c88953.js",revision:"f649053782f4495f13dc7a1cff950cb6"},{url:"assets/js/vendors~valine.15ee9a67.js",revision:"ff67a37bf69ad7e8c205412adc31949b"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"0f55c7557f861ba76cfa3b4d081ac280"},{url:"article/index.html",revision:"d31683f021df938f50eadb482440053c"},{url:"category/Guide/index.html",revision:"f9b6953a712fa244f0a26a1382a51155"},{url:"category/index.html",revision:"21fbe1b301e68e9700dcbbd01f11e8c0"},{url:"category/使用指南/index.html",revision:"98171da48301845ad2ab30e9fe78da26"},{url:"encrypt/index.html",revision:"aa3b5957dd35237837aa7d0f845e3acd"},{url:"guide/disable/index.html",revision:"d57adecaf7f29ae0e841fea3e5e55d78"},{url:"guide/encrypt/index.html",revision:"f1d56640e60080ed96a313373442d65c"},{url:"guide/index.html",revision:"ec56cc234168bd607e2e67e014cae32d"},{url:"guide/markdown/index.html",revision:"dee84df5bc3dc850f941ae0165ab4086"},{url:"guide/page/index.html",revision:"bb75ef4c203f7bcb938a49639a12d2c5"},{url:"home/index.html",revision:"d6cbf481d521d7c3bbdef3d246415df2"},{url:"index.html",revision:"fbd3a7f4d0facc9ba3aadeee7fb78e13"},{url:"intro/index.html",revision:"33e52510de950c4014dba829ed9ed823"},{url:"slide/index.html",revision:"0e12cfc10377211aea42e79916f5b0d1"},{url:"slides/index.html",revision:"a110e688ba2a8ff64f030634b90f4da9"},{url:"tag/encryption/index.html",revision:"8f43ad6846f1e1db36bf587022303fc6"},{url:"tag/Guide/index.html",revision:"74b6b23ec698c65595aaeab3c2da79f7"},{url:"tag/index.html",revision:"5c3b4fbdd03997574da588972e37eefb"},{url:"tag/markdown/index.html",revision:"5111ad6e6d5bc9b68e1a82138a8660b0"},{url:"tag/Page config/index.html",revision:"f716bf993cef8d486d47b80dde4964ff"},{url:"tag/使用指南/index.html",revision:"85666dfc2da622cedda244690dfbfb23"},{url:"tag/文章加密/index.html",revision:"d31c0d1cc906d24692b7d0d5f157e8bc"},{url:"tag/页面配置/index.html",revision:"06810a3b3382c07dee2dfaef4d9f4417"},{url:"timeline/index.html",revision:"e70fa881b1974ab94e935725fd7ee484"},{url:"zh/guide/disable/index.html",revision:"8f5ddddb952556457c16506ff34f96b2"},{url:"zh/guide/encrypt/index.html",revision:"4e23f94aaa8530dc1dae566159f69111"},{url:"zh/guide/index.html",revision:"f56cb7c043650ec1bcb6d9767e6f4645"},{url:"zh/guide/markdown/index.html",revision:"60dfc28833bf64bc0dee236a8ad0861e"},{url:"zh/guide/page/index.html",revision:"23e0269693e2ecabdef8c84bd68bc754"},{url:"zh/home/index.html",revision:"2b18c6e45a8ff5b8c964f4375883dd29"},{url:"zh/index.html",revision:"42bfdd58e424e685b473471b7fb76d1a"},{url:"zh/slides/index.html",revision:"f3ac80d48aa28c6d61ef2feab26008d8"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
