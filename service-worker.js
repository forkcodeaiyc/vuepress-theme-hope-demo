if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-68bcac68"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.57f393c9.css",revision:"d0419ef193a8e15197104f88a90ab0b9"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.0d0352fe.js",revision:"c68c1a763a08740fba573ecd383550eb"},{url:"assets/js/35.21b56bae.js",revision:"2d366ce99cd74fc90b5d8e40cff1e172"},{url:"assets/js/36.4d0e5d29.js",revision:"b13b4e744f82b9bf1c5b2182005b0cb7"},{url:"assets/js/37.ab80de3f.js",revision:"8cb81b295ec0cddaf27112aba49e8310"},{url:"assets/js/38.c8ece0d3.js",revision:"ed5f3da270500122a84cdfddf143c81b"},{url:"assets/js/39.a62dc901.js",revision:"a13442cbad29cccee7f8267dbc91e8d9"},{url:"assets/js/app.a0128aa8.js",revision:"28ca791d1ad72cf0ebf0ede41c14bd9e"},{url:"assets/js/layout-Blog.e44e938c.js",revision:"0c7ccfd6fecd35aa7556e75e6b620af1"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.66147f3a.js",revision:"cfa5581210dc0be3b59e91270e2c1bfa"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.ffcdba29.js",revision:"8bbd4452554cb043f090b60ce4a55353"},{url:"assets/js/layout-Layout.e630c107.js",revision:"162c9fc46251ce4d9603c9971a3e6ae4"},{url:"assets/js/layout-NotFound.2332527f.js",revision:"d9030c6976d48d28d1bd18fb1be64ae6"},{url:"assets/js/layout-Slide.f9a97161.js",revision:"e87e9be0210464a6ccced3c3598f871e"},{url:"assets/js/mermaid.4440da7c.js",revision:"7d442c3220153e07a431e6f4d0e5f11d"},{url:"assets/js/page-BlogHome.e092421d.js",revision:"dd5d8be0b4cbda254a214ceb91bc3614"},{url:"assets/js/page-Componentdisabled.44a2a417.js",revision:"8bc94b2e7b3e172fe09f2839a86241b4"},{url:"assets/js/page-CustomLayout.23a78ac7.js",revision:"fe49d518f1865e0149ab6e97103a4dbf"},{url:"assets/js/page-Encryptionarticle.7982560f.js",revision:"1944e1204f80e8c8df749abd45fda3e6"},{url:"assets/js/page-Guides.f48ab7fe.js",revision:"ebb7f9c252046c7cd92f0753d5622673"},{url:"assets/js/page-IntroPage.b86ca739.js",revision:"c8a71db113e89f56fabcecad4828ff5e"},{url:"assets/js/page-MarkdownEnhance.216bb6d1.js",revision:"224c848838d9b9a5d03aafc411a8d627"},{url:"assets/js/page-Markdown增强.7f9a1b5c.js",revision:"7c4f31aa9a8dbb2ec2e1dc210ce0e0a8"},{url:"assets/js/page-pageconfig.08d11bab.js",revision:"008d69bcd3683a34b68472444b055759"},{url:"assets/js/page-Projecthome.3615ea3d.js",revision:"320fd7476937ad77e2f5f82ea01fcde6"},{url:"assets/js/page-Slidepage.07802a70.js",revision:"0e3d91fd9d35d8c57f9287925491868f"},{url:"assets/js/page-主要功能与配置演示.87ae5c38.js",revision:"343195ec7331c1cf9715e3ec1a13af9a"},{url:"assets/js/page-博客主页.373cb077.js",revision:"7720bc269a8d7b7983e367b050c0af28"},{url:"assets/js/page-密码加密的文章.0abcdfa0.js",revision:"c5dcc575c27fd37568f72548655b182c"},{url:"assets/js/page-幻灯片页.83ac0333.js",revision:"ad45aacefeb63c427f84e2ce7b71f62d"},{url:"assets/js/page-组件禁用.8faf89a2.js",revision:"fb8bc847ccbfc7b17dbcaf08f1b7dc7d"},{url:"assets/js/page-自定义布局.595147de.js",revision:"82406b8e24e336d74e2caaa33b0693d6"},{url:"assets/js/page-页面配置.cac31295.js",revision:"59e033eb616a74c91af193fdd580ec7f"},{url:"assets/js/page-项目主页.05624515.js",revision:"d2a897174d2f29c63734f08c8cacd998"},{url:"assets/js/vendors~flowchart.107ea7e2.js",revision:"6951b170f97f3150e8972d0e2ded3fa1"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.35b9bf06.js",revision:"2e15ada4b6f741d0d1e744b810da9965"},{url:"assets/js/vendors~mermaid.68c718e3.js",revision:"00ba95fd2c883b6f21419e15827638f9"},{url:"assets/js/vendors~photo-swipe.6ecde85e.js",revision:"607704d7bdd3052749fcc3ebfbee490a"},{url:"assets/js/vendors~reveal.278f75f0.js",revision:"792c32c2243cc84c2ce720f0bd94437d"},{url:"assets/js/vendors~waline.e35a3ea4.js",revision:"841b695d64a4400d8b6ab3a831287248"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"33384e771db414c16c089ad1c71045ba"},{url:"article/index.html",revision:"c00fc754a67124470268177ea44ac855"},{url:"category/Guide/index.html",revision:"641c891a1bda0568271501c6c0e32a97"},{url:"category/index.html",revision:"48df5a1241c3d6cc700817001094f79e"},{url:"category/使用指南/index.html",revision:"0a5061818195c35d35a7dec724c5a23d"},{url:"encrypt/index.html",revision:"ff7a71bd3027de9bd960ea73302fcd9f"},{url:"guide/disable/index.html",revision:"447a4821498acaa64d31d2f1febee8b7"},{url:"guide/encrypt/index.html",revision:"d677cad70fa092dac3fc1d51f9d5811e"},{url:"guide/index.html",revision:"92265b78aac2cbad22e147fec5075b8d"},{url:"guide/markdown/index.html",revision:"fd458fc668abd32d7fcde727dd57b5e3"},{url:"guide/page/index.html",revision:"5b03a2e03cef5d6056c30578cd81dffa"},{url:"home/index.html",revision:"09f2a8523afee45b5fcdff4f6dcfda19"},{url:"index.html",revision:"254a2f54038d20ab6e8dd55faceab14d"},{url:"intro/index.html",revision:"28e1899833b8a30f36ddaea0e158fbba"},{url:"layout/index.html",revision:"5e7dccc4098984c3517973ba33595e8a"},{url:"slide/index.html",revision:"268c981d8b70197d9f48dec1880536be"},{url:"slides/index.html",revision:"1162f15d595b291d54853de966325e8b"},{url:"star/index.html",revision:"6d7235d8cb68e907020e71eb64a46a1d"},{url:"tag/encryption/index.html",revision:"cdd69302b6fa94fe966433bb7f4bbcfb"},{url:"tag/Guide/index.html",revision:"f4ffcece29112a89c6988afbbfd7e8db"},{url:"tag/index.html",revision:"331e16f43783500eb6e2d4361137caf8"},{url:"tag/markdown/index.html",revision:"efb8216b534ac54d0069aae3a23b70e9"},{url:"tag/Page config/index.html",revision:"86e110fec769b2a918f7e0c467985238"},{url:"tag/使用指南/index.html",revision:"0efa275d9cd5cd923bacfc731074711f"},{url:"tag/文章加密/index.html",revision:"5380b7bc8e37116767888c80065d86b9"},{url:"tag/页面配置/index.html",revision:"0ec9dc6b8b3e34c0c05ed1ed254aa1e8"},{url:"timeline/index.html",revision:"1dddab8e163cacbb9ace8d1603dd0dd4"},{url:"zh/guide/disable/index.html",revision:"88a0bb66e82a1c12b7423061262f7f7d"},{url:"zh/guide/encrypt/index.html",revision:"91522e778e8c01582225bea57b2d4b2c"},{url:"zh/guide/index.html",revision:"b57cab7589481eb752747d0cd2885cee"},{url:"zh/guide/markdown/index.html",revision:"4f1b86809604c7190d3973a1fb6f2433"},{url:"zh/guide/page/index.html",revision:"3edfdb42de322161e99ab5db5677b299"},{url:"zh/home/index.html",revision:"5da3bf33be6d9b1aae96636c93e2bb9d"},{url:"zh/index.html",revision:"87ab0fb647598a79bf262512b6c5a446"},{url:"zh/layout/index.html",revision:"301b43b14c11821f39078a1ee39be7a4"},{url:"zh/slides/index.html",revision:"a1735353eed298f3d58619f92c8b67f8"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
