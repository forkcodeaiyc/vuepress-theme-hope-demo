if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.9076cf1a.css",revision:"0bb3d32a61dd3a3e6c6fc09dc817f08a"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.7996d455.js",revision:"83d93c1321341be2e6d4b90fd06b5825"},{url:"assets/js/31.29ed7ec2.js",revision:"90aaf71adeef05a6b3ba036fb973c644"},{url:"assets/js/32.06bb5a85.js",revision:"5b8abb151f75501dec13a4144db9b5bb"},{url:"assets/js/33.4f340c97.js",revision:"6f2260535fdd14e88d22255ea9a2c261"},{url:"assets/js/app.0f46b1e4.js",revision:"ed8afc3402ce6110dd85c3e6ecfa8c7f"},{url:"assets/js/layout-Blog.78b204cc.js",revision:"45f5e9efc539ff5b3cc287459cd7aadb"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.9ffd83d4.js",revision:"3e0c6fb75716b389fe8e88dab1a4dce8"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.74aacbf1.js",revision:"99fec456134733e6787bc6386a489820"},{url:"assets/js/layout-Layout.a3f78f29.js",revision:"2131ec76bf74a66125883dba0480a470"},{url:"assets/js/layout-NotFound.77aed6ee.js",revision:"dcff3953ca7ff5f9116c65d7ac756ee5"},{url:"assets/js/layout-Slide.10d9b768.js",revision:"af7e0749724004989d97fddfe6fbe284"},{url:"assets/js/page-Componentdisabled--742e8b14.905925e0.js",revision:"58f46005310ac59cc89c911e161c9d1d"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.d4065a2f.js",revision:"4bb7f9519f9cce30a9d1cf925d3bdc0a"},{url:"assets/js/page-Guides--22306cea.f8003c8c.js",revision:"b0ba7a4a51550f058787684cf6d1f6b5"},{url:"assets/js/page-IntroPage--f358bcd4.cbe0be4b.js",revision:"df4f7b3af351c44dc1295895a2843223"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.3a76f890.js",revision:"a473c5f66dadd3fff55dda4af12d71ec"},{url:"assets/js/page-Markdown增强--eec60994.bbf81ec3.js",revision:"f45fe0d944fb2adae7dd2030e2a5c89f"},{url:"assets/js/page-MrHope--145768b6.a0c8abe5.js",revision:"d146d7ceb8ae693b7078e0c6caa69cb3"},{url:"assets/js/page-MrHope--79004bd6.c52149b8.js",revision:"00064fd69690f45494162b080b0faff2"},{url:"assets/js/page-pageconfig--55e15bfe.3d6b1c9b.js",revision:"1a97438523ea091433e94f005f76d2ec"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.157bfc51.js",revision:"09d9007f6f10eba1386d317e557022dd"},{url:"assets/js/page-Slidepage--7a2d82be.06d7d75f.js",revision:"bf378398afab1e6aa62270cffffc1a1a"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.cbfb8cce.js",revision:"fc148251af72048bb21d4aff4938ca83"},{url:"assets/js/page-密码加密的文章--64e181e0.22b79ce5.js",revision:"8445cfe02c116451482cf02a8c6981dc"},{url:"assets/js/page-幻灯片页--f6429394.27ddd7c7.js",revision:"83ed257306caf9ddf1279213e4431e18"},{url:"assets/js/page-组件禁用--5650041a.7302842c.js",revision:"2608485db67f7d5fd84eca8a5a5bfa43"},{url:"assets/js/page-页面配置--2847a8b6.c090387d.js",revision:"43ba752520fb832ea243e57f9eac84a1"},{url:"assets/js/page-项目主页展示--fb8d99d4.c1c09998.js",revision:"b1557f2a2b1d07f79586de648a398d5e"},{url:"assets/js/vendors~flowchart.ac628e54.js",revision:"f9dcb8b38f47f666bcc117851262f78a"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.a8b3615b.js",revision:"f64945bdfd5462d39cd3b6eba7704b91"},{url:"assets/js/vendors~photo-swipe.7451d116.js",revision:"1da72d678360840a1026ca5a1f673125"},{url:"assets/js/vendors~valine.5c32b451.js",revision:"8fdf9701588e083a6f18b5ad998831ad"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"ed6d5b7aad4e04b58dcef9a23c600aec"},{url:"article/index.html",revision:"f51af3f1c034e5d305a8a83df51969a0"},{url:"category/Guide/index.html",revision:"f7106f8c4c08e2a7cbac72d722b8fbf7"},{url:"category/index.html",revision:"5a212769fe792f46dba630e439721c36"},{url:"category/使用指南/index.html",revision:"74362df738b9cca1a1c98192b7bd3679"},{url:"encrypt/index.html",revision:"c58039b693c35b16e49d4448a18576f5"},{url:"guide/disable/index.html",revision:"27481f21b26fad7f65a67632cf9501e5"},{url:"guide/encrypt/index.html",revision:"b907dfe6aa846355850edb1a302feb81"},{url:"guide/index.html",revision:"b88350dd2af24d5e3427c156f95454df"},{url:"guide/markdown/index.html",revision:"584ca1090ac19e9e01f77c3956510dd8"},{url:"guide/page/index.html",revision:"737e88794642262ed7d0603d746cb62d"},{url:"home/index.html",revision:"99c80b41e3e03b97bedff45a27530b26"},{url:"index.html",revision:"79cd5b7a820cec8bd942f21a93f6f1eb"},{url:"intro/index.html",revision:"4b3a49cfcaf20fa020c490a2cf7175d8"},{url:"slide/index.html",revision:"64961eba321da5b1b0ed7be380058de1"},{url:"slides/index.html",revision:"13a0d40bee22989684abc75d1c4e688d"},{url:"tag/encryption/index.html",revision:"9a4f0ac225fe0d8b6c5e9653c117e105"},{url:"tag/Guide/index.html",revision:"57426938f6e99a779148a4711936816d"},{url:"tag/index.html",revision:"e45c5ad58c9c0ffb719be6edb18b1a90"},{url:"tag/markdown/index.html",revision:"ab324b8607f320cf2894dad897ac611d"},{url:"tag/Page config/index.html",revision:"5fca5af7c48f2907f6d5cd5225da3e3b"},{url:"tag/使用指南/index.html",revision:"137a71980a7848b98397ef0732f57fe3"},{url:"tag/文章加密/index.html",revision:"e09cb0ce8933f16ac2b2b7d97578843d"},{url:"tag/页面配置/index.html",revision:"fd1657e169930119ca80c9e923ce0d7c"},{url:"timeline/index.html",revision:"8ea4022cf5bf98ec15c0d789e77101c3"},{url:"zh/guide/disable/index.html",revision:"49984bfeb17e592929e82a1db00df806"},{url:"zh/guide/encrypt/index.html",revision:"5ffaf7bf1e67fa0c77ec57ba714f674e"},{url:"zh/guide/index.html",revision:"88a56f324c3dfe61c5b336e7900249b8"},{url:"zh/guide/markdown/index.html",revision:"635f7bb2a0667becbf07aa19e0c91fa4"},{url:"zh/guide/page/index.html",revision:"1dcb7f6f0e02f004b58bd13eaf567053"},{url:"zh/home/index.html",revision:"3ef56819d1d96721825a462e5b97a8da"},{url:"zh/index.html",revision:"e14cfad2a4477a6444343cd139cd8324"},{url:"zh/slides/index.html",revision:"9d6a69038e6d3222f50f54966e4a8287"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
