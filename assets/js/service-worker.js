if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"58fec647d0aa6e447b6c45f33ff41f80"},{url:"api/index.html",revision:"758891fd87bc8a1e6392867ed3213c13"},{url:"api/page.html",revision:"74c2c3a7eb80b0e7cb5991da770421d7"},{url:"api/plugin/container.html",revision:"86d6556e5f3337cbed8c7c61c7a44ae9"},{url:"api/plugin/copyright.html",revision:"969c41c5fbbca677d40aa9f6c88a0386"},{url:"api/plugin/index.html",revision:"13e1bbbc89444f5b717aa785bad61918"},{url:"api/plugin/md-enhance.html",revision:"336d67df0a0251255f1abdb6b0ac1627"},{url:"api/plugin/medium-zoom.html",revision:"e3722e961bfec670f6c3de29d536e7d8"},{url:"api/plugin/pwa.html",revision:"7a3e253f1ad6f00d45035db086bbb980"},{url:"api/stylus.html",revision:"f09d6dd06e86799d7b09c5b8ffccff29"},{url:"api/themeConfig.html",revision:"2aa09325a07e8736697723d91d65ecfe"},{url:"article/index.html",revision:"d473a9d595e4da5ee503a2a3d29b76a4"},{url:"assets/css/0.styles.97cea077.css",revision:"e8fb9ba2c922fe1da37b0bcd578df983"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/107.b0b54249.js",revision:"cc117d17da029466ea71ffb9da6375d0"},{url:"assets/js/app.949ed184.js",revision:"20a185b2cbd8949978804bb69277e8bb"},{url:"assets/js/layout-Blog.cf4127f2.js",revision:"95007d3129be6f9ab16a242e32de1029"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.4ecdaf36.js",revision:"f60b796bb69cbc8f174fd1c53e5c2649"},{url:"assets/js/layout-Layout.3fd74fe4.js",revision:"c0c04a9c52c5f0af524ddf9ba5e73e5b"},{url:"assets/js/layout-NotFound.6465919c.js",revision:"ab4bc768ff0dc3aef2da017b190d1f14"},{url:"assets/js/page--0ab466d2.c6a57c2a.js",revision:"ba8eab59363f7720a6d028f50990bd46"},{url:"assets/js/page--1f262314.e8f866af.js",revision:"4a96886088726aa647c5bdf9de7ae635"},{url:"assets/js/page--5dafe67a.12c0ee93.js",revision:"664b54dd5cb016454bdfe82d5ce9e819"},{url:"assets/js/page--86453650.d1f2ef61.js",revision:"e00cef94854ae4328e2059b4a6ab972b"},{url:"assets/js/page--9108a39c.a3860ef9.js",revision:"f04d01ecc774f0c952715666d5b64b1d"},{url:"assets/js/page--d7fc60dc.ca64eee7.js",revision:"d409e3c6edf55ae893894199fa21e8d2"},{url:"assets/js/page-About Vuepress.b4aa6001.js",revision:"533e6122f3901d03ed0bd55a06528e8d"},{url:"assets/js/page-API Docs.f797f679.js",revision:"5d6291ed0e64277a4677a407c7d9ae12"},{url:"assets/js/page-API 文档.249e6583.js",revision:"c4b04adbcb5878eec811da36166c0359"},{url:"assets/js/page-Basic.5c0960e8.js",revision:"9d932fa1810f7211246a6217eefc7b46"},{url:"assets/js/page-Blog homepage.df9477af.js",revision:"9b0cc7be5b65170981f22d632fca3b8e"},{url:"assets/js/page-Blog related.4e0120a0.js",revision:"4676e1af4e5c0cb45cc6e456bcea9d03"},{url:"assets/js/page-Breadcrumb.778399c9.js",revision:"0ce9a44227854eda512ffc4274bb481c"},{url:"assets/js/page-Comment Function.49b6e40c.js",revision:"dc8684f2482ebb54b3015a9c0dbf7ab7"},{url:"assets/js/page-Common problems.363da0bd.js",revision:"c9ec62058ce8f9f686c0402ffb482037"},{url:"assets/js/page-Custom alignment.a139b4d5.js",revision:"3a7ec78c8005651b5fc0e1acde21d05e"},{url:"assets/js/page-Darkmode.73c62dd0.js",revision:"7e8b754ec93ab0e0298049a184e15f25"},{url:"assets/js/page-Default Theme Config.76b54bf5.js",revision:"5fc33a37db6b13bcc79f76a5acc37fbb"},{url:"assets/js/page-Demos.8fc9d8a3.js",revision:"b7a5aabe3d4d7ace1eae48ab6bc5208f"},{url:"assets/js/page-Emoji List.b109d5b6.js",revision:"be2a4c651fb43b0eb8d9d176ef405fbb"},{url:"assets/js/page-Emoji 列表.360197d8.js",revision:"4ff0c4530e22556c162ffafae5922e6e"},{url:"assets/js/page-Encryption function.5f84bf1e.js",revision:"7bfa6b823134a28118db9585fb6a3b12"},{url:"assets/js/page-File Structure.5e24b733.js",revision:"3a3d1b205d78c734e71d73d2c66a9419"},{url:"assets/js/page-Flowchart.4d1289fb.js",revision:"c61e16935835ebf9dedb0143ffe3a373"},{url:"assets/js/page-Footnote.3de132f7.js",revision:"72de4cfd075fb08c2dae5bf333b046d4"},{url:"assets/js/page-Fullscreen Button.26895529.js",revision:"f503bb8e18bfcd83a8e653df90c90ff9"},{url:"assets/js/page-Home Page.e2f14439.js",revision:"8ffdce6ef717d536d96acc5a88a3b2e2"},{url:"assets/js/page-Home.74228f31.js",revision:"a087a23102032157d50007a8430455dc"},{url:"assets/js/page-Icon support.9bd5af84.js",revision:"1fe78e16c0a549b11e6402896279ca9a"},{url:"assets/js/page-Introduction.c4b001bf.js",revision:"fc5b91af5fb60e87255161936f600438"},{url:"assets/js/page-Layout.dae5ddd3.js",revision:"051411df0e956287d42ebdb8555f1dc7"},{url:"assets/js/page-Markdown DEMO.4d8e2ec6.js",revision:"1b00601916eb152db3d030e8b587de78"},{url:"assets/js/page-Markdown Introduction.e1d2e6e8.js",revision:"a4500bf006ed57c08eca134e42e29f26"},{url:"assets/js/page-Markdown 介绍.0077581c.js",revision:"c07fbca1467a9f6a55fb25ec233c4afa"},{url:"assets/js/page-Markdown 新语法.f0290de4.js",revision:"d621fe05e38ad03274175e0430f8d75e"},{url:"assets/js/page-Markdown示例.8a5854bf.js",revision:"e7bd8ed1f5b49e9840fdbd4e2429911a"},{url:"assets/js/page-NavBar.b2e7d86c.js",revision:"57353654c054361dfb7ab41a294665c4"},{url:"assets/js/page-New Component.7b648d0c.js",revision:"7fef5e2662471db1d24ee2cb7725172c"},{url:"assets/js/page-New feature.40bf5c36.js",revision:"63c324388febb2710d4e853d911121e9"},{url:"assets/js/page-New syntax in Markdown.5a54d43e.js",revision:"a40403d156d6845d278605b1256ac52b"},{url:"assets/js/page-Page Configuration.7b79b062.js",revision:"66315789c542ff19f5fa8ccadddc7a2d"},{url:"assets/js/page-Page.59cda1df.js",revision:"abf8f82e00efbc748d2eabaeadaf9cf0"},{url:"assets/js/page-Plugin Description.df4915fa.js",revision:"4954b106d6828c681672c29e0ee25966"},{url:"assets/js/page-Plugins.671ad48b.js",revision:"94d3b19cbc17caf87120c2cea372c275"},{url:"assets/js/page-Sidebar.466daa18.js",revision:"4e897666d10f137ff7113973d13a03fa"},{url:"assets/js/page-stylus configuration.5d90140f.js",revision:"9420202f30dd16788250cff17414acdb"},{url:"assets/js/page-stylus 配置.0b195316.js",revision:"025892572633ff1eb126f9bb6689477c"},{url:"assets/js/page-Superscript and Subscript.5e7eec3a.js",revision:"cd59ffb87c1b6ea10dd9eb129cc023c1"},{url:"assets/js/page-Tex Support.c3798125.js",revision:"1f2572635e13146a328caf2b1a309575"},{url:"assets/js/page-Tex 语法支持.d8d3bc58.js",revision:"5f4dda834db381a2ffbe26e768c7c49c"},{url:"assets/js/page-Theme color.c96d99ca.js",revision:"68dced71d5cf397e73df74aba5b9da2a"},{url:"assets/js/page-Theme Config.38ea42c4.js",revision:"ef34aadaf108323967ebc86571a25f91"},{url:"assets/js/page-TS support.ad753146.js",revision:"93c7c1ec0b4630c46b488a21dc0689e5"},{url:"assets/js/page-TS 支持.2eaefe7f.js",revision:"f633e9e09b7cc0e21f31df2bb390184a"},{url:"assets/js/page-Vuepress Cases.bad480d7.js",revision:"30d79687828f289e71b53a91e03b470d"},{url:"assets/js/page-Vuepress commands.07077109.js",revision:"302f264dae0cf050d463fceead38e44f"},{url:"assets/js/page-Vuepress 案例.9e931f47.js",revision:"07bf67a286191007a0d9fdce6042f006"},{url:"assets/js/page-vuepress-plugin-container.e30f15ab.js",revision:"d838c37190c7c09766e3c7b33d7bd23e"},{url:"assets/js/page-vuepress-plugin-copyright.765ddaa6.js",revision:"354939e0b021db67b0691e83fec927ce"},{url:"assets/js/page-vuepress-plugin-md-enhance.118b1b40.js",revision:"99c49b1c48a23ff221e02fce222761f1"},{url:"assets/js/page-Vuepress.784fc62f.js",revision:"bd09cd6125a84da34836ac91fc71b0d3"},{url:"assets/js/page-Writing a theme.0c3b115f.js",revision:"1c56cc66c4df1075f957fd83b85e2d81"},{url:"assets/js/page-上下角标.09756573.js",revision:"5bd32a61f4a97fc79432444e37ea0e0c"},{url:"assets/js/page-主页.436146ef.js",revision:"7224f85b1b352f033cd42becf63231cc"},{url:"assets/js/page-主题色.175ea1fe.js",revision:"963d0c6a8e3f520b974b8b26d23e5166"},{url:"assets/js/page-主题配置.f29a53b8.js",revision:"16f1109cc0c3de5d1bc21cecfe20aa84"},{url:"assets/js/page-人物.83ea451b.js",revision:"4da6a1adcf30fe3bd55dac8882e81887"},{url:"assets/js/page-介绍.5c05177b.js",revision:"0db47aa486b1e9db438639c12de7b256"},{url:"assets/js/page-侧边栏.5dbde358.js",revision:"b19a6de7aa06b3a5d73f32b870db47aa"},{url:"assets/js/page-全屏按钮.99fce1c3.js",revision:"a8d029ca17c8f1909ffc49ff10df5dda"},{url:"assets/js/page-加密功能.c1eaaf35.js",revision:"3f300200a4a64254a530071c6bfe8a1c"},{url:"assets/js/page-博客主页.c0faf870.js",revision:"f778502ff47f60c189c671c81c015248"},{url:"assets/js/page-博客相关.8048568a.js",revision:"0dee98eea74e42561b904f16b82fe0d6"},{url:"assets/js/page-图标支持.b1b43930.js",revision:"443c97e230ed8170fc4caaa7fd0a12ae"},{url:"assets/js/page-地点.01e0f6eb.js",revision:"f6bda7bab29aa14ca0219cf429ac99bc"},{url:"assets/js/page-基础知识.db73f80d.js",revision:"c1c24832c84acd079dc4586897c00b6c"},{url:"assets/js/page-对象.de616b55.js",revision:"5254bab0c05f35c3b476c47c90746e37"},{url:"assets/js/page-导航栏.3041439f.js",revision:"62bd14b9b59b9ec721c1a44aa21ac731"},{url:"assets/js/page-布局.b38b9af4.js",revision:"cd85041e6b5965dee6d7c523fb662486"},{url:"assets/js/page-常见问题.666951b9.js",revision:"88ddab8dfc141ba96771079865f13e91"},{url:"assets/js/page-开发主题.bec62f16.js",revision:"9f39e2b0dee137a787662db2bc4b20e3"},{url:"assets/js/page-插件.112b422b.js",revision:"8fb1291c4737d4389d97859303ca7b64"},{url:"assets/js/page-插件说明.07859bfa.js",revision:"da0a68a431916b0871808772eb8a6c98"},{url:"assets/js/page-文件结构介绍.58f25faf.js",revision:"110d3ee5390cd628a16bce6abcb2becb"},{url:"assets/js/page-新增特性.64b69fea.js",revision:"6bec0c235f67be3fdb14dd0d2f1a8603"},{url:"assets/js/page-新增组件.78d5b3e9.js",revision:"75f97c9c53bbf7e6d4325c5dfa8d551f"},{url:"assets/js/page-流程图支持.9c5a6145.js",revision:"bf38275338ff0ffc5fa485dfefde680f"},{url:"assets/js/page-深色模式.11ac06e5.js",revision:"5a278b0ab7062f74ac77e43f965761f1"},{url:"assets/js/page-符号.fd01ba26.js",revision:"9a1d844a1e415f73648f95f5a142a7de"},{url:"assets/js/page-脚注.bb53039d.js",revision:"621ae64aed885f0aaf01b0fb2e73a8c2"},{url:"assets/js/page-自定义对齐.00799802.js",revision:"6d89b1102ec51ce515ded61578623aa2"},{url:"assets/js/page-自然.39f58607.js",revision:"0f9cae5b6868afe76484c42bed597fb6"},{url:"assets/js/page-评论功能.a538f444.js",revision:"f95bd8870740844563768f0280038bd1"},{url:"assets/js/page-路径导航.f9729163.js",revision:"7f5d8d4eeba64cb6456f406c7804568b"},{url:"assets/js/page-页面.7bd18d50.js",revision:"ee2bfafed66cc2e5fb8f73de2a921585"},{url:"assets/js/page-页面配置.2a17f036.js",revision:"3f1beb113b463104e331223b4a9568d5"},{url:"assets/js/page-项目指令.bb2db371.js",revision:"b98ab430378bfea19c98ef4f83d59b15"},{url:"assets/js/page-项目案例.07495a29.js",revision:"25824da1cd92a002e59af2d98616b3c9"},{url:"assets/js/page-默认主题配置.b378c161.js",revision:"012f00278c21dab083e8d5041f40778c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7383ed28.js",revision:"a71caf826201d44930d26000400f45b6"},{url:"assets/js/vendors~layout-Layout.425ade69.js",revision:"4b913ea074d75801b1dbcd9d70963ad4"},{url:"basic/index.html",revision:"33cecf60392a99cb0bea5cf5f30ea403"},{url:"basic/markdown/demo.html",revision:"550761c1f5030ba655e770a1f92ec1e6"},{url:"basic/markdown/emoji/index.html",revision:"9119a64629f879971e53b34356e15fe5"},{url:"basic/markdown/emoji/locate.html",revision:"ed9514934b508811119ced871ecb291d"},{url:"basic/markdown/emoji/nature.html",revision:"ad419e4fb0b63d278fc23fd7dd27984a"},{url:"basic/markdown/emoji/object.html",revision:"9a14c7d18c0b7a6b8808290a4de3ecc1"},{url:"basic/markdown/emoji/people.html",revision:"bf9ae58332998332b7cb06657dfe5cf7"},{url:"basic/markdown/emoji/symbol.html",revision:"cf6dcf21cad24eb0bfb5f65df8cf2593"},{url:"basic/markdown/index.html",revision:"7e11dc1916e45bd543ddcefa2d63b9b0"},{url:"basic/vuepress/case.html",revision:"2ed990ef2aad3e39e586ba8f5d3248ac"},{url:"basic/vuepress/command.html",revision:"13b98de05979bae2ad44c9b0eb103389"},{url:"basic/vuepress/file.html",revision:"da5ddfeb512cfcdf551efe466296719b"},{url:"basic/vuepress/index.html",revision:"e7e4c254c369a3bdaf63a941e7a50e96"},{url:"basic/vuepress/plugin.html",revision:"07172f058dce2e409254c11e432d6071"},{url:"basic/vuepress/theme/config.html",revision:"150aad472e69442fa711e7fede685f4f"},{url:"basic/vuepress/theme/dev.html",revision:"1e5d713068324fb99c6d929e78424e85"},{url:"basic/vuepress/theme/index.html",revision:"96c2c03538902e9ad99df637c598f846"},{url:"category/api/index.html",revision:"8e207eb1804fe8640efa83ecc1000b2a"},{url:"category/api/page/2/index.html",revision:"93fb35042fa721a84d32dcbf585c0aef"},{url:"category/FAQ/index.html",revision:"ac6d7144704e45cc54657a3b919e9d40"},{url:"category/function/index.html",revision:"03e5388a1845ba3cc4ac82e41f241298"},{url:"category/function/page/2/index.html",revision:"388e00112fd63d6fe11a407ccdee7f8b"},{url:"category/index.html",revision:"d3d53d4bcbd2468b88a9e010df512355"},{url:"category/instruction/index.html",revision:"d949d4b0dc20494d2ab01fe08579f835"},{url:"category/layout/index.html",revision:"903d3f68f57edb0ee389f6b4f9064172"},{url:"category/layout/page/2/index.html",revision:"58a6d952f08e665bbe49beb8cb1a87d2"},{url:"category/markdown/index.html",revision:"ace0548f670909aa8ae3ba8711c3e043"},{url:"category/style/index.html",revision:"85e1d14e74c206b57da0d1ab1220b0ec"},{url:"demo/index.html",revision:"a47df4670dab0a68f13f53c49fd9015c"},{url:"en/api/index.html",revision:"d16589ca407078c23972c4e5a1a1f3ba"},{url:"en/api/page.html",revision:"9ff1d537582a25e9120fdda7bf123619"},{url:"en/api/plugin/container.html",revision:"6210c1af5156afb3687fe648aea39eaf"},{url:"en/api/plugin/copyright.html",revision:"e6803797129f298307982e30f4c9d2aa"},{url:"en/api/plugin/index.html",revision:"244cea1db27bb7a4c6f81c1f5a8cc714"},{url:"en/api/plugin/md-enhance.html",revision:"74ca5955a67107bedcf4f13936ed9e35"},{url:"en/api/plugin/medium-zoom.html",revision:"243586375be25b920168c9477eabbfd5"},{url:"en/api/plugin/pwa.html",revision:"c2590243d31960ab8a5acc58ce07c664"},{url:"en/api/stylus.html",revision:"17cfc478dcea0ee5687422f3aaced718"},{url:"en/api/themeConfig.html",revision:"25f2383ee903b98a7651821d317e2b7c"},{url:"en/basic/index.html",revision:"99050a76f6ecd20c1e0a949e61af5b03"},{url:"en/basic/markdown/demo.html",revision:"cc5951fb5c60d7b3445ed9d6468e47a1"},{url:"en/basic/markdown/emoji.html",revision:"86266b09661a8d4ecfe54b6d68219a9f"},{url:"en/basic/markdown/index.html",revision:"b758b293ae59fcece17df7cc4730ea8e"},{url:"en/basic/vuepress/case.html",revision:"e9340f3ac822d8050b3b5a09f896fb31"},{url:"en/basic/vuepress/command.html",revision:"ad4efeb637ebbd1c42ad6ad03f3dcab8"},{url:"en/basic/vuepress/file.html",revision:"1ccc467cf0d7cd330ad5c2f03a0f50a9"},{url:"en/basic/vuepress/index.html",revision:"6e394d8f5c2811db94253abefba64527"},{url:"en/basic/vuepress/plugin.html",revision:"e7140f86f690af7faa485504ace5d9a4"},{url:"en/basic/vuepress/theme/config.html",revision:"187aa069cdf7ecbcab310a4aaa40c0c8"},{url:"en/basic/vuepress/theme/dev.html",revision:"657e31a0a911ef3b27f48bad133a4827"},{url:"en/basic/vuepress/theme/index.html",revision:"b2acecd4fb71a07deedef9c65c9c925a"},{url:"en/demo/index.html",revision:"0c6e192b0bce73f3e79b02e2d11edc50"},{url:"en/FAQ/index.html",revision:"fcb2f6e2e31209faf4de7c9ac6360d87"},{url:"en/guide/feature/blog.html",revision:"efe4a8a161ddec66c2644e2e393ab141"},{url:"en/guide/feature/comment.html",revision:"6f6df8c632fda8fc67b5605b71b0ea1c"},{url:"en/guide/feature/component.html",revision:"d4c938537eca915301f07146567bddd5"},{url:"en/guide/feature/darkmode.html",revision:"b982335af39354fdc5696aa7ec44e458"},{url:"en/guide/feature/encrypt.html",revision:"2ed75772013dd60ad4539306c37fef37"},{url:"en/guide/feature/fullscreen.html",revision:"1c93ffa72ee53a396f02d4b969d9e8cc"},{url:"en/guide/feature/icon.html",revision:"582151882864517dfb0a55656d412bde"},{url:"en/guide/feature/index.html",revision:"be6d836ea82ad3e4228692252f16dec5"},{url:"en/guide/feature/themecolor.html",revision:"4347e3532812de85ccd751689340bb71"},{url:"en/guide/feature/typescript.html",revision:"8299b6ba60de66287abba39f11dcbc15"},{url:"en/guide/index.html",revision:"2e22684ff08566e5e98554faacc4a567"},{url:"en/guide/install.html",revision:"dc31b13cda08653cfd21953eac65c1f5"},{url:"en/guide/layout/blog.html",revision:"ed0b5d80e114fb5c8f5a7ea343165f14"},{url:"en/guide/layout/breadcrumb.html",revision:"f2059a584718aa8a3d4eefa25db2fd92"},{url:"en/guide/layout/home.html",revision:"005981aa0fb022e71959d7d3bdb3f2d9"},{url:"en/guide/layout/index.html",revision:"b1e8a92ca2ff66ba0be29b3cb5e2d057"},{url:"en/guide/layout/navbar.html",revision:"9bb5567b2b7165160f67b0ee44d35911"},{url:"en/guide/layout/page.html",revision:"2d252eed4f2165be85f9313ba33390b2"},{url:"en/guide/layout/sidebar.html",revision:"d9d150de7398ed27a3a5cef11a0dfa81"},{url:"en/guide/markdown/align.html",revision:"348aa9eff2e1a5d78e84149064c3acad"},{url:"en/guide/markdown/flowchart.html",revision:"c94e8220e7db7a79a7b35b132190e439"},{url:"en/guide/markdown/footnote.html",revision:"40874ac1521165e95085b0e16181c5bc"},{url:"en/guide/markdown/index.html",revision:"b1f7f393d7ab7713fd2d28be2f8c26c3"},{url:"en/guide/markdown/sup-sub.html",revision:"48c9926304ac9a630dfe3afe34ec714c"},{url:"en/guide/markdown/tex.html",revision:"d7299a8cf5f5ee0293daf2dd8b873cfc"},{url:"en/index.html",revision:"8f2575cc869e9b8f397b2b7165646d3d"},{url:"FAQ/index.html",revision:"88554663ce025e0d08ea79124706db4d"},{url:"guide/feature/blog.html",revision:"2a96684ad7fc4eed1282a76d84e6876a"},{url:"guide/feature/comment.html",revision:"2a3fbc550af0fd1bf489af2ba350680d"},{url:"guide/feature/component.html",revision:"0bb1b5efd77056f4bde2c16b91d3dd44"},{url:"guide/feature/darkmode.html",revision:"bff1eae1c45ab552b2ba68089cd62f23"},{url:"guide/feature/encrypt.html",revision:"01dff80514de73bbd7df8bf3f094e219"},{url:"guide/feature/fullscreen.html",revision:"321246d2fff82a7710ed31b53844fc20"},{url:"guide/feature/icon.html",revision:"e947ef095e3c6047e3d6af51201a94f2"},{url:"guide/feature/index.html",revision:"ae63ad4849a7e15f8c725f6cd8916b77"},{url:"guide/feature/themecolor.html",revision:"745798f678a616f0f3f5644683d85659"},{url:"guide/feature/typescript.html",revision:"4cd11044be0f870439021c138cd62a60"},{url:"guide/index.html",revision:"f64a3a8a076ac57381a1dbfe95a14109"},{url:"guide/install.html",revision:"e9f38a1dc7edb61aa117675c476e6105"},{url:"guide/layout/blog.html",revision:"b6f157faf9c7992d888affc2ff83e539"},{url:"guide/layout/breadcrumb.html",revision:"31961e9972149c97307c949d9e114496"},{url:"guide/layout/home.html",revision:"6b96e16d5233d035619b4c6cb97e814a"},{url:"guide/layout/index.html",revision:"0c00f299414fcc96baed80d2e0bb09f0"},{url:"guide/layout/navbar.html",revision:"5cbd5f17c4d720621963897741466ce2"},{url:"guide/layout/page.html",revision:"6e27ece3a187ab168dbbfd718446d431"},{url:"guide/layout/sidebar.html",revision:"ee189061e2fb7bd9dec1441ced6b5666"},{url:"guide/markdown/align.html",revision:"dbf0f5050960af7ab64be0d885fb3eae"},{url:"guide/markdown/flowchart.html",revision:"a64e4cf06e8579334f689fc4c0800b18"},{url:"guide/markdown/footnote.html",revision:"6a06f25f6a04bbfde3f39d2c03abe6ef"},{url:"guide/markdown/index.html",revision:"10b0a957e00dce41cc461cdcf0d26ccc"},{url:"guide/markdown/sup-sub.html",revision:"bb1b88f090eceac36fc0083de21c4e0c"},{url:"guide/markdown/tex.html",revision:"40007c98b14b4878210a8b5a35f2a4e2"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"bfc1b488714c7e01e28044fca8133c04"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"203af12693d8bc2a168ed3430a3a3503"},{url:"tag/api/page/2/index.html",revision:"52824fe49560f76ba2ddc8be56602e03"},{url:"tag/blog/index.html",revision:"6c4ce649bae1550812c861ed3723c8e1"},{url:"tag/comment/index.html",revision:"b18fe90855139ca0e654f7b2ec5cdfb6"},{url:"tag/component/index.html",revision:"5a4473468c1ea3b67259b52d2cd04c84"},{url:"tag/components/index.html",revision:"12e3e7347be4d6c2223c7a3094f24d78"},{url:"tag/emoji/index.html",revision:"e7acd968f00637320ef6fa0cbd42b5e4"},{url:"tag/encrypt/index.html",revision:"da5d13af783b6df06af31add37e4b781"},{url:"tag/enhance/index.html",revision:"40149f7477cbc27f84a5a01335e63fdd"},{url:"tag/frontmatter/index.html",revision:"8efe4319a6d097d0cabf4c4f4ca1f2ad"},{url:"tag/fullscreen/index.html",revision:"5b51101bd0760492c9804f25f3219c0e"},{url:"tag/function/index.html",revision:"34cfff43111f0a821ee2c7d4031828a0"},{url:"tag/function/page/2/index.html",revision:"b8684c7f4c103a4fad991d80fb2cbb82"},{url:"tag/home/index.html",revision:"25506113fb2729ddce4850bca718b356"},{url:"tag/icon/index.html",revision:"cd07f367d8aace76dca1f6c622e71834"},{url:"tag/index.html",revision:"4de28addec6de90837206d07e21284b1"},{url:"tag/intro/index.html",revision:"b297c452e70c5b423a9075d327a80f8e"},{url:"tag/layout/index.html",revision:"7f63115f84d4d91734b9783c1a57d8b4"},{url:"tag/layout/page/2/index.html",revision:"3d408cbd6f8f08b4fc7cb5463a6f9ac4"},{url:"tag/markdown/index.html",revision:"050920a0a9286d634b376d60422b58f8"},{url:"tag/plugin/index.html",revision:"1be7b9e1521d131bf28c2635ff6bcce3"},{url:"tag/plugin/page/2/index.html",revision:"e6ca079f7014320bb490fa29eb04a313"},{url:"tag/style/index.html",revision:"9ba126b978765b7fc480d96706f71c8b"},{url:"tag/themeConfig/index.html",revision:"65af89708152bd3364f971d953320552"},{url:"tag/typescript/index.html",revision:"32afe7d5670d1cd614668a70c90a67e5"},{url:"tag/vuepress/index.html",revision:"c54b77f80cf50e4b48768590a219a8a3"},{url:"timeline/index.html",revision:"41cce2039034fd2eddcabf6d20067c03"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});