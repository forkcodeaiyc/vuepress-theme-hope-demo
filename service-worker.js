if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.8b2b4e7d.css",revision:"381bf0b08a5c5473eebb770fc0ebbd8d"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.c09d7a0d.js",revision:"738c722a369f9ebce059bc6da8cbf812"},{url:"assets/js/35.9543e794.js",revision:"b7b4e0046568da8dc3d97d7b0a95171c"},{url:"assets/js/36.1cc22fe2.js",revision:"587261e80ad31c80b3e1c2127f2eb372"},{url:"assets/js/37.d8532859.js",revision:"f1d6ae37867a91d6e8a4ead81e4ac843"},{url:"assets/js/38.1313f7b2.js",revision:"af686387217c29bd8d04e4312a9bb4a1"},{url:"assets/js/39.4f04bd43.js",revision:"946db846ca5b7ba492b41e6e1ddfd5d6"},{url:"assets/js/app.c37875a3.js",revision:"23576c597cc290f17f021b2e3c1a006e"},{url:"assets/js/layout-Blog.5d751dc9.js",revision:"1ee593320aa8e22f3a1c72fad50691ed"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.c21254ca.js",revision:"14815eb7c3cc86f26c718b0e08b10536"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.914a6b15.js",revision:"5c6fc341013c59794e82ab4488fa495a"},{url:"assets/js/layout-Layout.152d7c66.js",revision:"2a743fad748307d36b786bb7ffacc3c4"},{url:"assets/js/layout-NotFound.e348e9b0.js",revision:"5e1e7b551a6d9dd0f0abcd08546e24ba"},{url:"assets/js/layout-Slide.caf2a5da.js",revision:"768534a8ac11ccb93f5fc611cd327d24"},{url:"assets/js/mermaid.deeb4d96.js",revision:"beaf8c7aaf5b1123514918aa70da84ce"},{url:"assets/js/page-BlogHome.b128455f.js",revision:"73a0abed4cfffa78f343ea2a56cb8e71"},{url:"assets/js/page-Componentdisabled.958a177b.js",revision:"f86cc66e5143e4cbb225e6e6fceef146"},{url:"assets/js/page-CustomLayout.9ba89de3.js",revision:"135ea7befc69cef247ae5acfd08d5db8"},{url:"assets/js/page-Encryptionarticle.daa5b2ec.js",revision:"ed243c8ed1df5573a64fd60f12cd72c8"},{url:"assets/js/page-Guides.c2e35be3.js",revision:"ed1499499b672978e869cd5f73250384"},{url:"assets/js/page-IntroPage.913dba3d.js",revision:"ba2eed12435ba9e04e22fe91eaa4b301"},{url:"assets/js/page-MarkdownEnhance.bac82294.js",revision:"04e0d016c4d4da8bae39e90a7f46c197"},{url:"assets/js/page-Markdown增强.0d439533.js",revision:"eb7f3eeba53779826e87611f7a1aa623"},{url:"assets/js/page-pageconfig.b0630f7d.js",revision:"068de31a9ecce8ddfbdf3f8b98a16797"},{url:"assets/js/page-Projecthome.d1b3de7f.js",revision:"b9a02381da200e7699c2685c554224b4"},{url:"assets/js/page-Slidepage.c89001dd.js",revision:"33f5236a468d9dee2e98599d1f712a13"},{url:"assets/js/page-主要功能与配置演示.1bd27270.js",revision:"736e971cda8f8a914bec0951c80f6eff"},{url:"assets/js/page-博客主页.5ffc049f.js",revision:"b0f46ada06838aaffd7c41add203363c"},{url:"assets/js/page-密码加密的文章.00b25c81.js",revision:"9ee05e3bf7c88d08e3e81b1db2e55646"},{url:"assets/js/page-幻灯片页.36a78a34.js",revision:"ffcc1ee1b21b4e4071d57c920c7021d3"},{url:"assets/js/page-组件禁用.b17f3e44.js",revision:"23433a5faad663b377c91e4d31459f76"},{url:"assets/js/page-自定义布局.59abce0a.js",revision:"dc69c3f47bf2dec044b282c82c2472db"},{url:"assets/js/page-页面配置.57378633.js",revision:"3bfa2e8def09bd7e0f352cf4af18dff3"},{url:"assets/js/page-项目主页.fa749c40.js",revision:"ccb160aa048cd3d27d85f06d14207d39"},{url:"assets/js/vendors~flowchart.da650fc2.js",revision:"b5d4619c4adccd542a7e2457508453d6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.37ebd185.js",revision:"f3af7e3e75b59a87177e91887f06b2e6"},{url:"assets/js/vendors~mermaid.3b30cf22.js",revision:"d44232fdfb5e92d2b4cb6d33e81a9821"},{url:"assets/js/vendors~photo-swipe.d3c35dd7.js",revision:"7787d14ab77b19056e1aaa15c4aced01"},{url:"assets/js/vendors~reveal.ddced913.js",revision:"8f4ee73b66167330c2c420557824d7cf"},{url:"assets/js/vendors~waline.788c0e45.js",revision:"7e8a2ad2dea0b1de74263548a68130b5"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"77d99bfedd2f6b060ae2aad382d4a27e"},{url:"article/index.html",revision:"49e22a0e801defffce5bc13233a9d78b"},{url:"category/Guide/index.html",revision:"9e110aeb52dbcf38d17bc1773e860bfb"},{url:"category/index.html",revision:"b352ec03f4ab8222f4ccc0e9212e92fb"},{url:"category/使用指南/index.html",revision:"8e9af2dde557a6cb4a3c4248bfff95b0"},{url:"encrypt/index.html",revision:"c484ff1a94141ccbd5a69e0410245212"},{url:"guide/disable/index.html",revision:"607afab1c980bb8efbcf7fc93e07fc45"},{url:"guide/encrypt/index.html",revision:"cfec5920221c48c73ff069446e69f3c4"},{url:"guide/index.html",revision:"85e0be77e4c2f32dd9c167701771b8cb"},{url:"guide/markdown/index.html",revision:"75873c16e6acba13cb37a116b9c23761"},{url:"guide/page/index.html",revision:"52777f766e59f7de8c6734a2228990d5"},{url:"home/index.html",revision:"f2262bdaadabe8120bfdaca7af8fa656"},{url:"index.html",revision:"7a38f18cef8569f2fca1972680a6e515"},{url:"intro/index.html",revision:"a04ca5f8cc7fee48394c5d5902ba4e60"},{url:"layout/index.html",revision:"e421a3d6103828647c49ee1985bb71e7"},{url:"slide/index.html",revision:"154a5089215e355672d21dd6d9ae3b81"},{url:"slides/index.html",revision:"2079f00bd6f3cfd7a0f07dcf8a9e2c8f"},{url:"star/index.html",revision:"cd199c3303255efe064c9e9f249a2441"},{url:"tag/encryption/index.html",revision:"14d570a321bebe941d7e5fe2070f6ab2"},{url:"tag/Guide/index.html",revision:"f1ba4e6b6fce91308cc9402c34db32f6"},{url:"tag/index.html",revision:"1db086cf9b0fe0662543d5d3adb0f326"},{url:"tag/markdown/index.html",revision:"cf27052777285511cc37969384445966"},{url:"tag/Page config/index.html",revision:"59b13c6b0df7194bdf043163dfa2172a"},{url:"tag/使用指南/index.html",revision:"37d06ca62d860878f6257b2938390eb6"},{url:"tag/文章加密/index.html",revision:"416f35630e29ff7ce3e183ce75269e31"},{url:"tag/页面配置/index.html",revision:"2fe7a53f8785e618f8d49b5236775182"},{url:"timeline/index.html",revision:"756b87f1a1359f1a48818a32aff110b1"},{url:"zh/guide/disable/index.html",revision:"990e7f669b2c96e45142bf0a5f7ef75c"},{url:"zh/guide/encrypt/index.html",revision:"f7d5d794968c393a60b98fc1678bfbc7"},{url:"zh/guide/index.html",revision:"c237ce9bafd2199c0c4ff88134079672"},{url:"zh/guide/markdown/index.html",revision:"f1511f57f30257d52b7de5ba51af89a6"},{url:"zh/guide/page/index.html",revision:"a71288a8f8f7f54ef54acf1559212677"},{url:"zh/home/index.html",revision:"cf7c7f4b00c50d8fe72dc986ba3c89c3"},{url:"zh/index.html",revision:"2e70e7400bde8cfe17ebd92f760d4e36"},{url:"zh/layout/index.html",revision:"fc6320afc978d9897ebd33299e169434"},{url:"zh/slides/index.html",revision:"7f48f98c74920917896f30bfd32f7b5e"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
