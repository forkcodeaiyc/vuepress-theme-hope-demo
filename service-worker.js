if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.36ffc287.css",revision:"e8c94435d9e73e074e17953e5914ad16"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/32.76289c3e.js",revision:"6c365496d4580e6cced2f5baf26d9902"},{url:"assets/js/33.b78cf12b.js",revision:"89f048a17a991b74753292b97a470b8d"},{url:"assets/js/34.c09d7a0d.js",revision:"738c722a369f9ebce059bc6da8cbf812"},{url:"assets/js/35.9543e794.js",revision:"b7b4e0046568da8dc3d97d7b0a95171c"},{url:"assets/js/36.1cc22fe2.js",revision:"587261e80ad31c80b3e1c2127f2eb372"},{url:"assets/js/37.d8532859.js",revision:"f1d6ae37867a91d6e8a4ead81e4ac843"},{url:"assets/js/38.e507c447.js",revision:"40d64f4e2e17e9c6e7c3a3fd3f095d4e"},{url:"assets/js/app.130b136d.js",revision:"dae444fd1f518d8374a3f8d8ed42080c"},{url:"assets/js/layout-Blog.b43af820.js",revision:"d59a324037251220ad9da2a1f26efbb8"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.3bc5d5d6.js",revision:"ce31e87b5839dddde672a1406df308c8"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.429c3e2c.js",revision:"c96636e592dae33667a19235d1464260"},{url:"assets/js/layout-Layout.7a0aceee.js",revision:"6c5fbc28fac0a7dbdf15dadf3f8a64e0"},{url:"assets/js/layout-NotFound.4040b392.js",revision:"4941e20d7389af5dee0fb2df68bd7747"},{url:"assets/js/layout-Slide.8737dbc4.js",revision:"2b1c9712547d3b746f6ae084430b52e3"},{url:"assets/js/mermaid.56d05c9d.js",revision:"b03e74f43d51f8ca71bc0f67fc7087eb"},{url:"assets/js/page-BlogHome.b0bbf7b1.js",revision:"f10fe25993b025b8cfdb20241b5c07b5"},{url:"assets/js/page-Componentdisabled.f0740a7f.js",revision:"a239e2e58e041a7e759179262faf9ec3"},{url:"assets/js/page-Encryptionarticle.1ffc6c0a.js",revision:"3d471abf421a951849382e8ce7f6710b"},{url:"assets/js/page-Guides.70bb8372.js",revision:"801f969d401097584eee5c7d9aef4918"},{url:"assets/js/page-IntroPage.9d3285e3.js",revision:"eaa62b867cb1a131c2dc90b915ac4738"},{url:"assets/js/page-MarkdownEnhance.8a6f01c6.js",revision:"c6f5651392f18c4231374f3f48c079bd"},{url:"assets/js/page-Markdown增强.e1ab98ce.js",revision:"ec0d97820f99688f061a9fd68f3b9a2a"},{url:"assets/js/page-pageconfig.5488a40c.js",revision:"c6d0b473ca976e884b57596dc6385cee"},{url:"assets/js/page-Projecthome.f3c42e1e.js",revision:"2a19dce71f8dbc5ad1acdc97b2528738"},{url:"assets/js/page-Slidepage.8757055f.js",revision:"e3b96af124fffebed2f878a5ae034967"},{url:"assets/js/page-主要功能与配置演示.22f0cf9d.js",revision:"acffc0bb91ee4404eb6f49b7f9d27ffe"},{url:"assets/js/page-博客主页.dc973ff0.js",revision:"ba39cc680fe23481eedd1a3ec49c91e9"},{url:"assets/js/page-密码加密的文章.95c20fc9.js",revision:"41b0c17c2bd9856c5a2244408e150cc1"},{url:"assets/js/page-幻灯片页.b0d4f17c.js",revision:"dac68c0b266a0d6e778256ce0b6caddd"},{url:"assets/js/page-组件禁用.28a01119.js",revision:"4bcd3a15bca91c2b10d0529d11a4eb2d"},{url:"assets/js/page-页面配置.7d6c5898.js",revision:"7302d3a0f5e8b6cda49b6faa280a32cc"},{url:"assets/js/page-项目主页.a4b32210.js",revision:"ef823d2c14924d9b32a2802a31869a89"},{url:"assets/js/vendors~flowchart.f5b54dbd.js",revision:"89b965687c7b69d3617eee0205b54ef4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.66a1f2dc.js",revision:"774fa8b3acd4e314ab39e19204e5b9d5"},{url:"assets/js/vendors~mermaid.6885363e.js",revision:"b3809ff14ef965f8c5220a90c73f8552"},{url:"assets/js/vendors~photo-swipe.5a0ca44c.js",revision:"adeea2313833bc0334b56f8c3f29b063"},{url:"assets/js/vendors~reveal.0de11c22.js",revision:"a1f3161c132ddc8b3a463fdf214e1598"},{url:"assets/js/vendors~valine.57e5ca0d.js",revision:"86dd925af1a6b4ab3dcf8c4a915f9b3a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"79b03d18d5a5919c2d3a96d9709bda45"},{url:"article/index.html",revision:"fb0f33a9083ca4abac3aec3b072d5beb"},{url:"category/Guide/index.html",revision:"5c87d4d223ef737a0cebdee22f66a856"},{url:"category/index.html",revision:"48880df8534154f7fd1526e1a70d271b"},{url:"category/使用指南/index.html",revision:"65467eb43848b3a105389b3b919f7ffc"},{url:"encrypt/index.html",revision:"5ed98f76f6d3559a61a156454272c8e5"},{url:"guide/disable/index.html",revision:"acd1a6ebc338107f2a30e52ae3ba36ff"},{url:"guide/encrypt/index.html",revision:"21fa2e1357b9856a59ed2f694cc45080"},{url:"guide/index.html",revision:"e1cc94f2ae35cd15522ea937b2731e6a"},{url:"guide/markdown/index.html",revision:"9f13bff0f72ed13604f771c236190c0f"},{url:"guide/page/index.html",revision:"3ef45500563499e819f758e9e2a52ea1"},{url:"home/index.html",revision:"d62eb9b39bae55fbff48291ff4e27977"},{url:"index.html",revision:"a7dda649004d6620cdaa311d145156c8"},{url:"intro/index.html",revision:"22f4c05d9b5937e5d69da01da9aa2a54"},{url:"slide/index.html",revision:"9cbc8d082c9b6c56ba9aa51ff33294c6"},{url:"slides/index.html",revision:"f3c966228a4a26fafa58be870f50f81a"},{url:"star/index.html",revision:"e9bf6bd1e27229237c869e67e5c1ea7a"},{url:"tag/encryption/index.html",revision:"579cf8224575f912699bd6945acf0222"},{url:"tag/Guide/index.html",revision:"73aea3dda14933dd32aee41df8253875"},{url:"tag/index.html",revision:"c174269e8502bb3593eeebccea82d601"},{url:"tag/markdown/index.html",revision:"d395a03789f69b021a2aa4d3b8a26a59"},{url:"tag/Page config/index.html",revision:"730526495fabedec9332c028dd62c828"},{url:"tag/使用指南/index.html",revision:"276369a615982e2717b79aecf34bf68f"},{url:"tag/文章加密/index.html",revision:"2de010f8b3fbb5a07778f2a9c00dabed"},{url:"tag/页面配置/index.html",revision:"6b0995d9f60041bd0e8eeada53aa2c5f"},{url:"timeline/index.html",revision:"1b8b1507e7b7d545d36a1306b196b6da"},{url:"zh/guide/disable/index.html",revision:"05281dec15ebcc6f4184ff2c0617e9aa"},{url:"zh/guide/encrypt/index.html",revision:"f787f1b6dbb196c9eadc82e202a79839"},{url:"zh/guide/index.html",revision:"cc22ff411c7415b074d3015e4262117d"},{url:"zh/guide/markdown/index.html",revision:"ff07e32e76b207b574d807c7ff168831"},{url:"zh/guide/page/index.html",revision:"1e6b6684d1056e877f8eed52e23208b5"},{url:"zh/home/index.html",revision:"d358b6b91ae91092fb78ef232040ee49"},{url:"zh/index.html",revision:"9d25c98e0251a23a54928877a7aae59c"},{url:"zh/slides/index.html",revision:"fe6f9a64419d77d32ce3007e646b767b"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
