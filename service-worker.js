if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-21e3d036"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"6cf7dadbc4491d62a91cbed5d73c0e52"},{url:"article/index.html",revision:"adcd0291ae0cc69b74994ec76dee4678"},{url:"assets/css/0.styles.851487a7.css",revision:"fd1949aedae3afc29e0fd441175a2c9a"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/46.b9d850ad.js",revision:"04296052d8e97e12bb0b2f554eaca408"},{url:"assets/js/app.66176756.js",revision:"487cd663000a62fea8ceb96f4913bb3e"},{url:"assets/js/layout-Blog.a4ebe208.js",revision:"de93cf820eafad6ce685f8cc22a010f7"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.96168abd.js",revision:"e0e1df0c1b295f6898b5ecbdd4694cdd"},{url:"assets/js/layout-Layout.6c6747d9.js",revision:"09a764f0ea7a7d38888d0afb70f2fbf8"},{url:"assets/js/layout-NotFound.6ebb7ccf.js",revision:"3a3e643d54e71115b6fb39779e756492"},{url:"assets/js/page-Markdown增强--4d787654.b6380218.js",revision:"b0d5b34ba4d4c05d459d891f33c3c5f7"},{url:"assets/js/page-Markdown增强--87b26038.cca103e7.js",revision:"549de63fe9ef5a509e196c577cf45d78"},{url:"assets/js/page-vuepress-theme-hope--145768b6.81665bbf.js",revision:"7395db845c6f68b749935fee940962b9"},{url:"assets/js/page-vuepress-theme-hope--5dacd635.28dae1cf.js",revision:"da98f601c99aa59e184d651b1166d49f"},{url:"assets/js/page-个人介绍--f358bcd4.1b6c0e9b.js",revision:"3cc92d885333ee0f2055779ac2fc4f23"},{url:"assets/js/page-侧边栏auto--3a90cf96.c58f4522.js",revision:"872361ca481f06c7c95c56704ef3778f"},{url:"assets/js/page-内部链接页脚--31f3a4f6.d8f43f77.js",revision:"ec3f351ee564414cc0f704f03a06d52c"},{url:"assets/js/page-外部链接页脚--0f1c0bec.9627ad8b.js",revision:"368919133a5cc90852777a92d0ca371c"},{url:"assets/js/page-密码测试--1d89700e.bcaeb9c6.js",revision:"7aded1eecc94294951a8a03134b3e5ba"},{url:"assets/js/page-文字页脚--5ea4d836.fc69d777.js",revision:"a1c38e33e534e2ebe30676926c2c3199"},{url:"assets/js/page-文字页脚--854e1b54.22130558.js",revision:"38c93112494c2f0d733f6203e13b92a1"},{url:"assets/js/page-无页脚--727687b5.90dcde81.js",revision:"8e6be17336fd9ff35c322ffb07aa163e"},{url:"assets/js/page-无页脚--c5727fd6.d29fa898.js",revision:"452f70a1a64fbb2cdf7154a55d80c32e"},{url:"assets/js/page-笔记列表--13847be8.6e955550.js",revision:"22cca8f191f32ee9979c7b489eb336eb"},{url:"assets/js/page-笔记列表--253f1d56.65b33c00.js",revision:"131ebb76c86749203a9e337210ff2d01"},{url:"assets/js/page-笔记列表--36afc214.65a288ed.js",revision:"061ad008ce4bbff1aaadc532dec89291"},{url:"assets/js/page-笔记列表--3706d596.e79aba10.js",revision:"865dca02a192dfd380150fae48485411"},{url:"assets/js/page-笔记列表--4395057e.5ac7ac3d.js",revision:"fad2f1db4c9ebd9af2fb424be431e4be"},{url:"assets/js/page-笔记列表--48777a54.af67ba5d.js",revision:"8feb0c43f427016ad216b3f0a0362ef1"},{url:"assets/js/page-笔记列表--4c6992b4.372dae62.js",revision:"8994b670cacb4d921e9b3127f509e009"},{url:"assets/js/page-笔记列表--5a3f3294.9f4c4bcf.js",revision:"19aa51654db6cdd0e9fab3e657b51420"},{url:"assets/js/page-笔记列表--779dd3f6.bc544185.js",revision:"f31a0a5d998fbcee65c34272a97e4bf7"},{url:"assets/js/page-笔记列表--bfdc1d38.2697016a.js",revision:"7396a8b207148e30f984f45d90744c61"},{url:"assets/js/page-笔记列表--ed34e794.ad069e28.js",revision:"df77754343893b768b984c3ee769beb6"},{url:"assets/js/page-笔记列表--fefc9fd4.5e5e6f28.js",revision:"927bb72ac0f2ff13b63b44479c53557b"},{url:"assets/js/page-组件测试--33a9d46e.9ea03238.js",revision:"89fca3f6c854d8e971ff9661bf2023e7"},{url:"assets/js/page-组件禁用--412a7956.14378307.js",revision:"d1f102e6214c2ab9d9303ddeb102538f"},{url:"assets/js/page-置顶文章--bbc4e3a0.b5b1cb9d.js",revision:"aa8bb499d53bb89a7f86da4d35f6accd"},{url:"assets/js/page-自定义页脚--638ce0d4.9738113f.js",revision:"0b77f837f2d7867c017313d0fe5370e0"},{url:"assets/js/page-自定义页脚--76fb1e1e.d76c1847.js",revision:"b201f0955b172d4620224785288518d5"},{url:"assets/js/page-页面信息--41bbd7b8.0a47a8b5.js",revision:"4a3fbc33f688cb1a1bb71a3da304bc03"},{url:"assets/js/page-页面布局--0f63db56.7c9e1570.js",revision:"1c22c193f97205fac7a512c2e30180b0"},{url:"assets/js/page-页面布局--c006385a.6c43cb5a.js",revision:"4bd031d976f34c433907bb850bfcaa5b"},{url:"assets/js/page-页面配置--36b78854.87560521.js",revision:"91fcc9e86c2427405d34a43175c86ec3"},{url:"assets/js/page-默认页脚--9df0770c.ce0772f2.js",revision:"a702de74adf929c08b05d9200f778161"},{url:"assets/js/page-默认页脚--d5d7bcf8.b0ba89d1.js",revision:"7e5e1d1a1b5904753062d49b7d22c376"},{url:"assets/js/vendors~flowchart.b1e7cf9e.js",revision:"6cf628f0f1882b9aa3144cbcf84739db"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.03095991.js",revision:"b604440903509a6d00e1c0598b295b51"},{url:"assets/js/vendors~layout-Layout.1363e9fe.js",revision:"b0c7702d0934b654f8f0d0fa0029602f"},{url:"assets/js/vendors~reveal.16f012bc.js",revision:"455110843a9f3bf8ea8d4751f4ae3e8f"},{url:"category/component/index.html",revision:"66984956077421d77a5804f9c08d0c8c"},{url:"category/index.html",revision:"8087d5c72fc5816db471e724dc479e99"},{url:"category/layout/index.html",revision:"7ef8b54b9e2270817ee034e3d9d6468a"},{url:"category/note/index.html",revision:"e6370cd1375b18d61976ad7aab389552"},{url:"category/note/page/2/index.html",revision:"74a0e92e64357cffb67b48711acf000f"},{url:"component/disable/index.html",revision:"c2b3f47514f585f5ac64f16de6128dfb"},{url:"component/footer/default/index.html",revision:"a078a4cc3da30829af5455564f520ae0"},{url:"component/footer/diy/index.html",revision:"1c09b3e869744bc90f6f61e933b13496"},{url:"component/footer/index.html",revision:"2eb0790c3041ee43dc65ad2102df27ae"},{url:"component/footer/text/index.html",revision:"454b316c7514a1eec86d2ee073e017d0"},{url:"component/index.html",revision:"d717a713d7032f913043076a9c7b9062"},{url:"component/pageInfo/index.html",revision:"8f3718b751c146571725c13c8febb23d"},{url:"en/index.html",revision:"f68d9c374bc8a3a78f2bc32f192e0bc1"},{url:"en/test/detail/markdown/index.html",revision:"1d62487a711097561c25d78ee073df57"},{url:"en/test/detail/page/index.html",revision:"4a261c25f821414669ee63fca6de24a3"},{url:"en/test/footer/default/index.html",revision:"f519680add943875f9f52f7b7604a512"},{url:"en/test/footer/diy/index.html",revision:"2c64071246b7e7c2c794463a654819ed"},{url:"en/test/footer/index.html",revision:"d32d56985bfc1a3666cfeec9669635b7"},{url:"en/test/footer/link/index.html",revision:"8efac7facb58c36bdca37513e9627415"},{url:"en/test/footer/outlink/index.html",revision:"b4b4ee353f100ae55e06334f403614e9"},{url:"en/test/footer/text/index.html",revision:"b50328ab2a0cc30666edaadaa49a6ff7"},{url:"en/test/index.html",revision:"048e37c30697ff7f14a61cd5a7b08edb"},{url:"encrypt/index.html",revision:"aba6f82239cc364e15dbe5a2b30e3a4c"},{url:"index.html",revision:"14727ff38d4775642aeb54836bed89db"},{url:"intro/index.html",revision:"bb302a69d8a6ccfe686cf5bf517cca69"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"markdown/index.html",revision:"464e48e8d34e91801bfdd69d884abc53"},{url:"notes/1/index.html",revision:"3260f2e543dfd76748a348dc1d74646b"},{url:"notes/10/index.html",revision:"7dfcf02a6212dfd70b4024baf744f4a4"},{url:"notes/11/index.html",revision:"405624c3329b2702e6dd89474db65109"},{url:"notes/12/index.html",revision:"d6e6f35ec902bb7e2960f98e813aca15"},{url:"notes/2/index.html",revision:"e0a072c641038904c977783bdc0b251f"},{url:"notes/3/index.html",revision:"f632b78e582e875b2d32b8b3d68f885b"},{url:"notes/4/index.html",revision:"2cb2a2fa30d610f3232b3a01a6633e59"},{url:"notes/6/index.html",revision:"84dccdfe248f58c83166d957778bd401"},{url:"notes/7/index.html",revision:"dfeb495dc4052839faa1b699b1f6ce32"},{url:"notes/8/index.html",revision:"f3636877692e58a5fd36ab5e52a1a88f"},{url:"notes/9/index.html",revision:"b8260afc6d0c797ca0e1abc7cf6cae39"},{url:"notes/index.html",revision:"762c0c88c75067ce6ea6184af81cd7da"},{url:"sticky/index.html",revision:"d0c2d54a94a04cca3103c4154b81b6d7"},{url:"tag/footer/index.html",revision:"d5e738834c0f9a1f7340af39e6702df9"},{url:"tag/index.html",revision:"2866ec1f916cbd9109d320babed53a49"},{url:"tag/layout/index.html",revision:"0fb1c7a071b7c753ad066429d6971806"},{url:"tag/markdown/index.html",revision:"1302c8b5f90e0695262fcccccbf17b7f"},{url:"tag/note/index.html",revision:"f5557f8e5577268425f65e8ce7904d8d"},{url:"tag/note/page/2/index.html",revision:"f37844a2f17a553b92bd27619654b0d2"},{url:"test/auto/index.html",revision:"05ba87b3ae0c44ebc188b35f1c263bf8"},{url:"test/index.html",revision:"278d0b6c21506fa82de4806ada2916f7"},{url:"timeline/index.html",revision:"3453e6020102dc0888d3fd4757b83511"}],{})}));
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
