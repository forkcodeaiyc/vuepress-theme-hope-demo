if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-b207fc39"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ef3a6067.css",revision:"36da20ba9ffebf133e9ec40443738eb4"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.1104ce6d.js",revision:"c5d4e7bbb6c5f10b376fe982707af15a"},{url:"assets/js/35.5062b1a9.js",revision:"65ca6c19b4e338a84f4d158e8f10f5ae"},{url:"assets/js/36.46c89c93.js",revision:"db7bfb3afa6aed6dfc11e234c68524e4"},{url:"assets/js/37.a1a4b32f.js",revision:"480d421d4a64c6d4fdd82c4d2e9d894f"},{url:"assets/js/38.d8b90c25.js",revision:"84ceb15a63dbc19d748936c9575b80ca"},{url:"assets/js/39.47328f99.js",revision:"7d10a18d65babdb97c6a1a8db1650113"},{url:"assets/js/app.c5a2f6c1.js",revision:"d8b704ca9cd1a3a9ea871e3ec0c656c0"},{url:"assets/js/layout-Blog.8bc9f490.js",revision:"47755eb8ba661beceab6071e1295b176"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.b0a26fce.js",revision:"f9383c61bca7f36355f7b0984b5a0713"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.ac815612.js",revision:"5ef884b6b2c1b24bef966aad8fe109e1"},{url:"assets/js/layout-Layout.ce3aff4d.js",revision:"c1737908419e560f12cfe4ebddcf6599"},{url:"assets/js/layout-NotFound.96e9f9a1.js",revision:"123cd86f45850825e4d69f207e8414c5"},{url:"assets/js/layout-Slide.f6c900b4.js",revision:"78fb3e1c30a39f26f2aa639036f5f648"},{url:"assets/js/mermaid.01820bfc.js",revision:"fc5017428e94dd1880206e1bd2832e86"},{url:"assets/js/page-BlogHome.03ecd7c5.js",revision:"e403db527d0a1d31a08edc7789b67154"},{url:"assets/js/page-Componentdisabled.2d9aedb8.js",revision:"54a7c72260af2cac0414581266caba68"},{url:"assets/js/page-CustomLayout.d30dbe74.js",revision:"b9e46fdc37b576e3c97c2960d72887a2"},{url:"assets/js/page-Encryptionarticle.29ab0a7d.js",revision:"9deb50421d5d1be6b5f3178dfbd5c52e"},{url:"assets/js/page-Guides.2ca91792.js",revision:"f9faa4edf6d8a47f836ca0e61a5748f6"},{url:"assets/js/page-IntroPage.2c586749.js",revision:"445386cfc3b6344bf95f0fad5543676e"},{url:"assets/js/page-MarkdownEnhance.551ebe7f.js",revision:"7207c99c6a87ff57025e27ace3a61e0e"},{url:"assets/js/page-Markdown增强.be01daaa.js",revision:"5c8f922c64565a6486e1f03fa794c404"},{url:"assets/js/page-pageconfig.90d48f7c.js",revision:"fb6181c62f3b387e682cdc9c15207c50"},{url:"assets/js/page-Projecthome.f5d33903.js",revision:"cc3b914309f1d72471ab185c92321d02"},{url:"assets/js/page-Slidepage.d0abe20b.js",revision:"98309b07a7b4c4785c88c4576e77f7fb"},{url:"assets/js/page-主要功能与配置演示.26bbea8a.js",revision:"32eb035742e40bd588dbab0607955b4f"},{url:"assets/js/page-博客主页.2f1e3516.js",revision:"75798c93681acc9a1f3bd76e9c8d614c"},{url:"assets/js/page-密码加密的文章.331f1fd7.js",revision:"85a7b0ff2eab6ba238308a8ed6e933e8"},{url:"assets/js/page-幻灯片页.ffc23e1e.js",revision:"e6c2df3cb08e224e1c8f19b1c6d468c2"},{url:"assets/js/page-组件禁用.b3a52c38.js",revision:"fe7fdc82c25fd12bcbd2112143dd5fbf"},{url:"assets/js/page-自定义布局.7cd42c7d.js",revision:"3eb09c771cc3ed7033dcab653518125f"},{url:"assets/js/page-页面配置.0219d6d9.js",revision:"93af806532aa46ecb90753cfa575eca8"},{url:"assets/js/page-项目主页.64a704a1.js",revision:"f453c6907258d32fcd075d24bd0bfec9"},{url:"assets/js/vendors~flowchart.582be79a.js",revision:"381768a2b91de154d648a7d95f957384"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.eda4b8d1.js",revision:"050d40e83b887da78be5945bf5d94212"},{url:"assets/js/vendors~mermaid.91272d2b.js",revision:"0da2b666bc1fc5e136f24bcdcf5610ca"},{url:"assets/js/vendors~photo-swipe.809d9119.js",revision:"4befed874018413636eb166c8c9cd81f"},{url:"assets/js/vendors~reveal.dec38456.js",revision:"f00aba4776ef46c095778058591e00cf"},{url:"assets/js/vendors~waline.9268f834.js",revision:"34e57c09363509bcfdd6d6accd6fb870"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"c29d31b0a4ef2012c165bbd58a5c8428"},{url:"article/index.html",revision:"16be04952680e888a7c99129c8294c65"},{url:"category/Guide/index.html",revision:"e494a2f88e29dbf952dec708ce7cb69b"},{url:"category/index.html",revision:"e6fb08dfe248dc65844d7b8bd427c188"},{url:"category/使用指南/index.html",revision:"236e6753655e04476d266e06e1f659c2"},{url:"encrypt/index.html",revision:"04e5b5aa01362b2893492767ee43a5ca"},{url:"guide/disable/index.html",revision:"a8549b8a4c15cb8d96cc0554c42d10f3"},{url:"guide/encrypt/index.html",revision:"73de7d5c453ba575dfc99270c6468b23"},{url:"guide/index.html",revision:"723aabb5e2cf5190260e839b28ab3428"},{url:"guide/markdown/index.html",revision:"0b481b326d52c71e11d9bf7e946fa805"},{url:"guide/page/index.html",revision:"745473e5eb0e3fd4c1aeba6a6deeb62b"},{url:"home/index.html",revision:"c358eab60b6248158f5ffe5dda5bde5e"},{url:"index.html",revision:"d22cb9b810f0c47979d718de7941b420"},{url:"intro/index.html",revision:"03a80387f866442ac17b229e37bda521"},{url:"layout/index.html",revision:"5276ca76c7985e5783b20502e6d3ea5d"},{url:"slide/index.html",revision:"090e87ea76ee877ac353910496802438"},{url:"slides/index.html",revision:"11d327b7df782a1e463382a4c67be4cc"},{url:"star/index.html",revision:"23436d8f099c4adbd65d16f948c936cb"},{url:"tag/encryption/index.html",revision:"b613f053269b291c41a5f30c645dff39"},{url:"tag/Guide/index.html",revision:"eff52b72a444eff2d8b10e1576e94d62"},{url:"tag/index.html",revision:"f74c93a609ee61212e6bdfa93d4c6ad8"},{url:"tag/markdown/index.html",revision:"8cae383fc74e40cacbfa10c0d2a7f3ae"},{url:"tag/Page config/index.html",revision:"b24d7fe83e1ca4736cdcc40899a1748e"},{url:"tag/使用指南/index.html",revision:"1d2149ecaddb0fce7a5be141ae061030"},{url:"tag/文章加密/index.html",revision:"40037dfbd703859bbe246df3b9b2c499"},{url:"tag/页面配置/index.html",revision:"e3fb3bea38223cbea037a450304bf3e5"},{url:"timeline/index.html",revision:"3aea8fc1678a1be8af6320ddeb7cdf14"},{url:"zh/guide/disable/index.html",revision:"b2640696eed66a0b66b6eff07d561bfb"},{url:"zh/guide/encrypt/index.html",revision:"b5aa1e353fdf0dccbfaf2739b2d58a1a"},{url:"zh/guide/index.html",revision:"a25920072f00bf10af3fa327bba582f4"},{url:"zh/guide/markdown/index.html",revision:"b5a89e6bdb141ced6aae5653ae40a35a"},{url:"zh/guide/page/index.html",revision:"7a81e81e1d50f1a3881a669fc029cf76"},{url:"zh/home/index.html",revision:"dfde5f6ba234177ff9b61c83977c005c"},{url:"zh/index.html",revision:"2f37e5ae19a844d4f3644c1a8ef27f98"},{url:"zh/layout/index.html",revision:"409e4efd01ad36d1bf92fa601d09e3b6"},{url:"zh/slides/index.html",revision:"5e15a7bf69d0ea2b4c80ca2dc564811a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
