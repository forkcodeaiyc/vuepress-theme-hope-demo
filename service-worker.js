if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-aea96e48"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.362ab53e.css",revision:"12090307c1759397fc5d55e20f28cce2"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.93b70ff0.js",revision:"3758271202920a7c10302ec9078ba7b2"},{url:"assets/js/31.05871f9d.js",revision:"4e9a9466dfac8be1a5653047abe7f9fc"},{url:"assets/js/32.b4fcf85b.js",revision:"1ba92bbb04bb47b93d12cee778693edf"},{url:"assets/js/33.b5dc0537.js",revision:"3a2461e5a3acbcce3269f162c4ff343c"},{url:"assets/js/34.8bc889fd.js",revision:"b24043b8d8e9e09ff9b3940891240ee2"},{url:"assets/js/app.626b1be6.js",revision:"987bc24294a544943682a0df0038a3d2"},{url:"assets/js/layout-Blog.b0294f30.js",revision:"ed3c89f24759aba414792771691c69e5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.dd24875c.js",revision:"7983b420e1de008692d28d30bf5c2b41"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.481b4251.js",revision:"52d85c9d2b41cf55dbe1b4ef3e2c03c4"},{url:"assets/js/layout-Layout.e1323fc7.js",revision:"d5ca2395b55f41a7ba4a022ddc852f9f"},{url:"assets/js/layout-NotFound.acc5d0e9.js",revision:"f52974c626982cc57017c063e3cd644a"},{url:"assets/js/layout-Slide.5437c1b6.js",revision:"0dfa0cc70079e894c63726802777d161"},{url:"assets/js/page-BlogHome.bc6620ec.js",revision:"0959a93c0cfb8d754852aff8b408cfef"},{url:"assets/js/page-Componentdisabled.fbca4f5d.js",revision:"c624cb704603c5befa857295a18d4172"},{url:"assets/js/page-Encryptionarticle.7e72d059.js",revision:"8cb1eb073524394eb86b95f0dfe572e5"},{url:"assets/js/page-Guides.13f0a9e5.js",revision:"e02daa6281aa824e91ab5130a6602600"},{url:"assets/js/page-IntroPage.4ac5d623.js",revision:"c894edf7779c05621bd6fe8f1b005bca"},{url:"assets/js/page-MarkdownEnhance.08607bce.js",revision:"1609ca3473d6d5214f8af5f94072579a"},{url:"assets/js/page-Markdown增强.ca4a474e.js",revision:"1c451b15e86ced5863199129837e26b8"},{url:"assets/js/page-pageconfig.cff9b9fb.js",revision:"95bb23f6698551b9f637cb62164fd0b4"},{url:"assets/js/page-Projecthome.0c2890d3.js",revision:"27a748693f5b6d785191ba1b38a5f372"},{url:"assets/js/page-Slidepage.00b68c37.js",revision:"a138a5efeb4edb2bc087571912b54c97"},{url:"assets/js/page-主要功能与配置演示.62689726.js",revision:"8b0c36a778599c185e788ba15d7b4cb9"},{url:"assets/js/page-博客主页.d5437fd2.js",revision:"18bb26a1c5cc5cf6ba978c35fa5bd608"},{url:"assets/js/page-密码加密的文章.55afef20.js",revision:"bf70a54652a96767b6347b7c7aa1106e"},{url:"assets/js/page-幻灯片页.4e767972.js",revision:"1241236de02e6bfd377d63a196d24972"},{url:"assets/js/page-组件禁用.e1a97c99.js",revision:"b46853d4e92ad5ba166ed8259a5f6ab7"},{url:"assets/js/page-页面配置.6fa41a96.js",revision:"2db2f8736168c13bdee7e07fcea063f3"},{url:"assets/js/page-项目主页.b92a3fef.js",revision:"0ead23eb6fbdd337ad0321cc6b43b469"},{url:"assets/js/vendors~flowchart.fce37362.js",revision:"be93285a14a0fc8ed2f36349d829a695"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7929f9b0.js",revision:"b15b5333e5d30ffa1c6ea0d455efaae6"},{url:"assets/js/vendors~photo-swipe.7451d116.js",revision:"1da72d678360840a1026ca5a1f673125"},{url:"assets/js/vendors~reveal.834060aa.js",revision:"17d0fe949668f27f4fa9daedf186355b"},{url:"assets/js/vendors~valine.5c32b451.js",revision:"8fdf9701588e083a6f18b5ad998831ad"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"35dbd0a71682b3e212c357dcf18e3c79"},{url:"article/index.html",revision:"a2398705320f3f85c05dfec3e3c84d12"},{url:"category/Guide/index.html",revision:"56644cb0309b2aef35065367add473ca"},{url:"category/index.html",revision:"5be6a3220c611e0de6f344ec391fa776"},{url:"category/使用指南/index.html",revision:"4725313de65ae38612358f9392445a4a"},{url:"encrypt/index.html",revision:"15e79b35db20a832c774689d3eb5eb51"},{url:"guide/disable/index.html",revision:"9aaee8346636f1405d7004399f23c330"},{url:"guide/encrypt/index.html",revision:"2d6847197ccced042e9ecb9d31485105"},{url:"guide/index.html",revision:"b61514f6a8fa7deaebb8e7e8ade13c5a"},{url:"guide/markdown/index.html",revision:"667dc5e318eb11f65e5d3c6720fdf507"},{url:"guide/page/index.html",revision:"5d0c7b166fc96dc26fcc1d69cc9030c9"},{url:"home/index.html",revision:"1e192b7e49c76595d81bbc2f1077acd9"},{url:"index.html",revision:"f15c253a26d796b3b1da9aa0cf60b80b"},{url:"intro/index.html",revision:"33fe4fc18777d20aafb7420fa750c8c9"},{url:"slide/index.html",revision:"99e249d9f5c7897f2b0c4d50c8a294be"},{url:"slides/index.html",revision:"4acbd5bb8821e594bbe2405d974377a7"},{url:"tag/encryption/index.html",revision:"8948154529dd1f6e066104f3d9b6b4b1"},{url:"tag/Guide/index.html",revision:"11eee047a120afc3f8a3870794c436f9"},{url:"tag/index.html",revision:"6d844182380802917cfdcc21628858f9"},{url:"tag/markdown/index.html",revision:"81c0b4d7eae3ae572d8f91be24153d64"},{url:"tag/Page config/index.html",revision:"13d6c4ddb660ccbba0b752f16b8a8af5"},{url:"tag/使用指南/index.html",revision:"ac9605e162339fcfed7013dc85fc7d0c"},{url:"tag/文章加密/index.html",revision:"a1705f905326b8c18872e59ef5bf40df"},{url:"tag/页面配置/index.html",revision:"66955652299d5f47ae29699ffc73cd28"},{url:"timeline/index.html",revision:"03a71f2eee52b6489c2a547e4abd6d97"},{url:"zh/guide/disable/index.html",revision:"3cdd59a4793bd7ebe2a87c52f6c3aa8f"},{url:"zh/guide/encrypt/index.html",revision:"48e15bec515b1a4fcbe9f0d7c5269efc"},{url:"zh/guide/index.html",revision:"38133fbb76dafc03c46ba8d5cbaf726a"},{url:"zh/guide/markdown/index.html",revision:"f4ed86c66d40b82c57f4b3b6c6804838"},{url:"zh/guide/page/index.html",revision:"0cc565d7b0910693ffd43c5333dcf204"},{url:"zh/home/index.html",revision:"c540bce6d9c6784592475e8532096335"},{url:"zh/index.html",revision:"55bd3f6c8443e1493bf9ef87ff1eeaf5"},{url:"zh/slides/index.html",revision:"c9a11556b3ccf60bfa83757389784613"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
