if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"692e28203e16736ebecc603fda887210"},{url:"api/page.html",revision:"7900a800cc96749ce6827813c5470ece"},{url:"api/plugin/container.html",revision:"df2e6d7a59407a2ec2ea4b5af807182b"},{url:"api/plugin/copyright.html",revision:"baff8c6898eda2767ad3ac11ac608f37"},{url:"api/plugin/index.html",revision:"64a37585b5c06ded8eccf4d1a4935d53"},{url:"api/plugin/md-enhance.html",revision:"9b753ccb69116dfb46907c0290173cfb"},{url:"api/plugin/medium-zoom.html",revision:"26c3c13aa51efe931387287771ae78cd"},{url:"api/plugin/pwa.html",revision:"013334dab186dfb9ee3b350a02b9f7f7"},{url:"api/stylus.html",revision:"f961dde7751165d91520e6d80f5ae63d"},{url:"api/themeConfig.html",revision:"b561249f30eb7fe8f8dd6178d675c7ec"},{url:"article/index.html",revision:"aea751e38a389d42fc44d93aa166431c"},{url:"assets/css/0.styles.e43f40ea.css",revision:"a0e3f5fea2c5d8c567c2eabc08802ca0"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/103.3671af11.js",revision:"ae35f13ad8285683a01916a5f2348a9f"},{url:"assets/js/app.9e7872d6.js",revision:"6816d496d750dbf7762b589d89c5a7eb"},{url:"assets/js/layout-BlogEntry.af7fce4f.js",revision:"427a6de993ec83aba4d10c019a5cf0da"},{url:"assets/js/layout-BlogEntry~layout-Layout.059aadbc.js",revision:"44bb9f361f60785c1716f5e2a22b8f6f"},{url:"assets/js/layout-Layout.dd0a2075.js",revision:"7586221f1a9a6499e3e05faad67c751d"},{url:"assets/js/layout-NotFound.1cf3bbed.js",revision:"42d871d908a2579456c3305dd8b033a3"},{url:"assets/js/page--1b278726.7857faa5.js",revision:"6b876771844d7413d1f783a36ff883fb"},{url:"assets/js/page--24b68849.807b2a30.js",revision:"1ad303d900b284bd2261cae9e5170475"},{url:"assets/js/page--298eb4e9.f7bd988f.js",revision:"729d50bb3c24886040e64941842af101"},{url:"assets/js/page--33732ef1.5a16c8e3.js",revision:"2da8b157c2c9e365e3101d4df5217b35"},{url:"assets/js/page--608d80cf.f94f419e.js",revision:"d5d062f51968437f3349c402b398dfd3"},{url:"assets/js/page--b64dd6ee.9516be9c.js",revision:"7cc3bff9b009bd6270bebbb8b15c5aaa"},{url:"assets/js/page-About Vuepress.90fdb376.js",revision:"ced6ae194764c8ed757dcb6f3d72a51f"},{url:"assets/js/page-API Docs.ade4ba25.js",revision:"e93f115cbc211c20b676c8b0d2e4be8f"},{url:"assets/js/page-API 文档.a53d04e6.js",revision:"ac886a2af85e63ffa7fd26bafecda7c3"},{url:"assets/js/page-Basic.1cabab81.js",revision:"5f96606147b87d02c73d3556e757f506"},{url:"assets/js/page-Blog related.28140844.js",revision:"07875338105b32264c5b8c5bbf713c24"},{url:"assets/js/page-Breadcrumb.fb6f1361.js",revision:"77647e8c4e91f97c4c4c1ad8cc64194d"},{url:"assets/js/page-Comment Function.24275c44.js",revision:"30cff7ad920fd62dce87983c5373784f"},{url:"assets/js/page-Common problems.17be375b.js",revision:"864a757da0ba493b92d05284a7d84bf4"},{url:"assets/js/page-Custom alignment.48f867d7.js",revision:"fe928a668a7979731e0aa3b3ed4e6ecf"},{url:"assets/js/page-Darkmode.e8063c93.js",revision:"a335d5e0074bdca3ad56039d89418518"},{url:"assets/js/page-Default Theme Config.6bfe408a.js",revision:"483ffefa957473c0f6f1f9c84699052a"},{url:"assets/js/page-Emoji List.5e727b34.js",revision:"bed73f626cde4e67d55ec8198966f28d"},{url:"assets/js/page-Emoji列表.3fef6e40.js",revision:"46cd340be3a6c44b3340206407be67e4"},{url:"assets/js/page-Encryption function.f37f9e8c.js",revision:"792ce5fc02991c1c6d0b6ea5e892927e"},{url:"assets/js/page-File Structure.8f958abd.js",revision:"f471d9ddc62b479198389b30440bbc5c"},{url:"assets/js/page-Flowchart.abb5dff0.js",revision:"a007e6de4298c872e9d80adb8f918115"},{url:"assets/js/page-Footnote.79a5f95b.js",revision:"70d19d7fea4ac0322d697ed2cd936cd2"},{url:"assets/js/page-Fullscreen Button.5ab1a8fd.js",revision:"225db969f1ae2281fb41669afe03e83d"},{url:"assets/js/page-Home Page.177bbf20.js",revision:"aedd915348d96b64c16c9019f6342fd3"},{url:"assets/js/page-Home.27fb7bb4.js",revision:"2c68f1fbc4faebf2ed39e68b14b76099"},{url:"assets/js/page-Icon support.bad53964.js",revision:"f966d40b5c17bfe5f58c215a7273c4cb"},{url:"assets/js/page-Introduction.ec7f2cdc.js",revision:"71f8ef61b556562fa3f72bb2727aee86"},{url:"assets/js/page-Layout.b50ceb0f.js",revision:"7740587fc62ea06842da5031aa111dcb"},{url:"assets/js/page-Markdown DEMO.cc2a297b.js",revision:"50cf165e2f677c8b0250b76e47eeea96"},{url:"assets/js/page-Markdown Introduction.5d4e3519.js",revision:"da4a5d538f88770994f389ec730f5cc5"},{url:"assets/js/page-Markdown 新语法.d24cfacf.js",revision:"21e16308c55406202176b9193bb0794d"},{url:"assets/js/page-Markdown介绍.af679d53.js",revision:"7353b0773278f0c335bb2d2e9d43f4c0"},{url:"assets/js/page-Markdown示例.395fda54.js",revision:"aba3b352fa276dea52488181aa943c54"},{url:"assets/js/page-NavBar.4592272c.js",revision:"fb836b619634f79ace69564a318e294c"},{url:"assets/js/page-New Component.11ff9d12.js",revision:"aeaee2416507ccb84b70a7164e8f3eb6"},{url:"assets/js/page-New feature.36efd259.js",revision:"1c90ea145a50c4fa1dd9237f46b084bd"},{url:"assets/js/page-New syntax in Markdown.90d23945.js",revision:"e1196602b357e2725150178c00439ebe"},{url:"assets/js/page-Page Configuration.f19c57f8.js",revision:"16e0fa10ac51f6c7791fba3df9abb387"},{url:"assets/js/page-Page.b13c28bd.js",revision:"5c9f4fd59ebc40ba3214763bf2ab2cbf"},{url:"assets/js/page-Plugin Description.bbfc1438.js",revision:"5b013855b8e72fa3491d8787f3eea5bd"},{url:"assets/js/page-Plugins.9e835f46.js",revision:"4b4f9bba2772c03c9eca834fbb55c588"},{url:"assets/js/page-Sidebar.0ebdd78d.js",revision:"68a5192cf41721c00babc69161fbd3b7"},{url:"assets/js/page-stylus configuration.4b3975d3.js",revision:"8298bf250a91094f279ee12c729b04a1"},{url:"assets/js/page-stylus 配置.882e7374.js",revision:"332ea1bcc6fb036b49f547f253020a2f"},{url:"assets/js/page-Superscript and Subscript.12e281d9.js",revision:"d174a9883b494b5903d4ab02e1c95101"},{url:"assets/js/page-Tex Support.779275cf.js",revision:"ae229c84c43f9c56df09ea0c2efb2125"},{url:"assets/js/page-Tex 语法支持.c65ab4b0.js",revision:"55c28fa2d57008b9c2c389e7f289b6da"},{url:"assets/js/page-Theme color.71f1715c.js",revision:"d853de83ddd29308d0c44170ced205e0"},{url:"assets/js/page-Theme Config.c96f92f7.js",revision:"f26796ad8db55ed3ccaa14c3e4d0b98b"},{url:"assets/js/page-TS support.5eab43ad.js",revision:"04c0ab384f5f16b06b72701e2dc68b23"},{url:"assets/js/page-TS 支持.4b66071f.js",revision:"ef28e28b267aaa5c2ca7157e554b6e4f"},{url:"assets/js/page-Vuepress Cases.e040326e.js",revision:"f2ada3ae198cf4c458e18183d106c011"},{url:"assets/js/page-Vuepress commands.129dc6b9.js",revision:"db3a70a5ccfd4e8883022a44d6a9586f"},{url:"assets/js/page-Vuepress 案例.b5984ef5.js",revision:"37a6fedd187218e36daf81508b62ef8b"},{url:"assets/js/page-vuepress-plugin-container.9104e32d.js",revision:"58580b5179f210305718dd896bb14ea9"},{url:"assets/js/page-vuepress-plugin-copyright.5321af79.js",revision:"a7e4c8cbb5f2ba6e5b75583c423300b8"},{url:"assets/js/page-vuepress-plugin-md-enhance.673a08d4.js",revision:"075d33b7bfb904b842d15672ce2acb26"},{url:"assets/js/page-Vuepress.471d43f4.js",revision:"530f8fbfa3c5ea779a92180dc7875067"},{url:"assets/js/page-Writing a theme.50f68114.js",revision:"8f1eb22998f7990247b07c41b5c36b03"},{url:"assets/js/page-上下角标.f6da571f.js",revision:"dac25198b9368599774f7cd846af9d43"},{url:"assets/js/page-主页.74501acc.js",revision:"653ca0037b89f046bae0ef8294a69a61"},{url:"assets/js/page-主题色.8bf04b1f.js",revision:"9f3e3cc023cb5f54c4e7a2daa1333329"},{url:"assets/js/page-主题配置.10e8d696.js",revision:"a1b5091c777a99c960cad984b46a8035"},{url:"assets/js/page-人物.a0b531f8.js",revision:"0bdc64ffe4d65ff95bf1a1ea7da7ebd8"},{url:"assets/js/page-介绍.9896ea3f.js",revision:"86bc6e2082e7be4a04795bf27f72b759"},{url:"assets/js/page-侧边栏.97df4207.js",revision:"6b2a881208549349e688af9ae9783a73"},{url:"assets/js/page-全屏按钮.01094019.js",revision:"333adad980d215ead1bac0bda8c48446"},{url:"assets/js/page-加密功能.357379d8.js",revision:"25a6f05420b066876c3329c37769e130"},{url:"assets/js/page-博客相关.333e13eb.js",revision:"33045d9addc34becd93fccd8adab67b5"},{url:"assets/js/page-图标支持.4669293e.js",revision:"d1c4be6facfddfbde87dc5a10c9aefa1"},{url:"assets/js/page-地点.a54292ff.js",revision:"029d53514b9d718f6570ed649c799b66"},{url:"assets/js/page-基础知识.71c71c51.js",revision:"03ce0fa3bb4e9a10dd007cb5dee9de90"},{url:"assets/js/page-对象.7c3e0301.js",revision:"4247ea81842fbd5cd268c54b43d6bb0f"},{url:"assets/js/page-导航栏.13a6bab8.js",revision:"fd504003950c398c4c6cac01ea81c8db"},{url:"assets/js/page-布局.a31d6559.js",revision:"6749d43ffd1e97c624d422bf7b06c211"},{url:"assets/js/page-常见问题.ff80f410.js",revision:"55e90ca175afda2e702f62b6dcf08d9f"},{url:"assets/js/page-开发主题.8d6bf511.js",revision:"253f9b2bf8d761d88ac28e41bf69de52"},{url:"assets/js/page-插件.543320da.js",revision:"7fd3365a01da5fe0a0d5f261be7836be"},{url:"assets/js/page-插件说明.16d59a20.js",revision:"3cd49b529e6cf06ed6b8e7d4a57137c2"},{url:"assets/js/page-文件结构介绍.c5e70ae6.js",revision:"6b44a5abedbcd65892db4dd2d5eb1458"},{url:"assets/js/page-新增特性.9d594b8e.js",revision:"dce4973d9b7bc17ba1ad0a7e2565a089"},{url:"assets/js/page-新增组件.4a807dfb.js",revision:"11dce4987a3ee13587dc6ed4b1785721"},{url:"assets/js/page-流程图支持.d0f1d782.js",revision:"0805f5d7fd3f23fd0e908466ca2d9b36"},{url:"assets/js/page-深色模式.8e135849.js",revision:"68305c376df536434f48317f49bad8c4"},{url:"assets/js/page-符号.0635fadb.js",revision:"55b10bb4ff845157787000b886d3fff1"},{url:"assets/js/page-脚注.9d004dbc.js",revision:"3d0c1ce4af4e670afe90ba32ac51b10f"},{url:"assets/js/page-自定义对齐.6ef8e553.js",revision:"a404e96e6774e4d112e1ce40b33f07a9"},{url:"assets/js/page-自然.f0a721fc.js",revision:"9d9e71ce7bb9f1b4cb9540486478d862"},{url:"assets/js/page-评论功能.d7e20c30.js",revision:"bb92bfcf290e221e6e6cde84913df544"},{url:"assets/js/page-路径导航.f86fc50f.js",revision:"ca661d787ee7878c169a358d3ffeac2a"},{url:"assets/js/page-页面.d7189813.js",revision:"aae61e361a4cac0adbf285f8fbb7f871"},{url:"assets/js/page-页面配置.d80dbe19.js",revision:"fb73c7c2003f32adae4e74ec1e333da2"},{url:"assets/js/page-项目指令.20fbcba7.js",revision:"cf45ee62449e7b793fa4d87d814c55f3"},{url:"assets/js/page-默认主题配置.2f0528be.js",revision:"af5d956969e5a00e56062f18b7b5671b"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.d413221c.js",revision:"a8e5df55ae3966720e41e39db0dcebab"},{url:"assets/js/vendors~layout-Layout.2f3cf91b.js",revision:"b8a17920674c240c3924a491d2b4cb86"},{url:"basic/index.html",revision:"f4933d1202631f3612fc78d0ee44d82e"},{url:"basic/markdown/demo.html",revision:"6ce9d00822afb31f5b699f89e0c77c27"},{url:"basic/markdown/emoji/index.html",revision:"6a671f8088d553cd5cfe51fe465d2b54"},{url:"basic/markdown/emoji/locate.html",revision:"4ece161fdf662e5e5815cd8fd639ce5a"},{url:"basic/markdown/emoji/nature.html",revision:"62f1381358acef5e96831c769bfc3c20"},{url:"basic/markdown/emoji/object.html",revision:"00d2bbe93ce78254f8ae911d5b959c32"},{url:"basic/markdown/emoji/people.html",revision:"e0b43e609916d79e234ae4248a9c53fc"},{url:"basic/markdown/emoji/symbol.html",revision:"23577c92d880f590665d67b332428a01"},{url:"basic/markdown/index.html",revision:"8b9f7961bdae75f7232435e85bac108d"},{url:"basic/vuepress/case.html",revision:"4b2581be8829b88be719b832f8f64504"},{url:"basic/vuepress/command.html",revision:"203b319e3efc06dc0d9f4e85ed288225"},{url:"basic/vuepress/file.html",revision:"49b8bd9516cc7843c512c9865f8734d5"},{url:"basic/vuepress/index.html",revision:"6fd55c2b5349e804b2602f792b6dd89f"},{url:"basic/vuepress/plugin.html",revision:"11a222e9f921b60df39fbd1040982b00"},{url:"basic/vuepress/theme/config.html",revision:"facaa0d5b8aa934a0a51f23475affdf7"},{url:"basic/vuepress/theme/dev.html",revision:"71cefbdf5ad3d07b44b7ca32f2e8aa6a"},{url:"basic/vuepress/theme/index.html",revision:"0463e86ed8e417bc5b381939dca49b43"},{url:"category/api/index.html",revision:"21ac171c905be4a84d2c2681e5117563"},{url:"category/api/page/2/index.html",revision:"f0d2157d9724b828961c8b2f97c1f734"},{url:"category/FAQ/index.html",revision:"83ac518aa2d8a0e4ac22e06ad6ab2d85"},{url:"category/function/index.html",revision:"ec20e63cebe1f90a3e18f1b72d450062"},{url:"category/function/page/2/index.html",revision:"ab3e15384f14f1e654ac474cd7cad3dc"},{url:"category/index.html",revision:"8449a7e04ac4411597bbba588fbe6436"},{url:"category/instruction/index.html",revision:"17c90e96af3e588434e687fa3dc16b56"},{url:"category/layout/index.html",revision:"d0074031742f334ffde0aa28438f9d4c"},{url:"category/layout/page/2/index.html",revision:"b2b89daa05a9f75372462f8ec62a2292"},{url:"category/markdown/index.html",revision:"94dff306332d5a1fb6198e56d1fd0f1d"},{url:"category/style/index.html",revision:"a24d37e4ef27871aa4b796cf0f6c2f17"},{url:"en/api/index.html",revision:"70ae37247412c1b78d2d76f3a4ee0764"},{url:"en/api/page.html",revision:"f703efea2cb087fe1c698619391cdbdc"},{url:"en/api/plugin/container.html",revision:"7f7f55c398ca39b2d7a1c3cb492c9d6e"},{url:"en/api/plugin/copyright.html",revision:"152e264ab348c29f763eca44f08100b7"},{url:"en/api/plugin/index.html",revision:"a7dfc46015b91fe54f240f058642b2d2"},{url:"en/api/plugin/md-enhance.html",revision:"b07e17882e4c65567c86d6f434c4eb5f"},{url:"en/api/plugin/medium-zoom.html",revision:"7edc2fac686e9be1b1c56c65c21d2c9e"},{url:"en/api/plugin/pwa.html",revision:"1607930bc96f3583628aebc83d83b27b"},{url:"en/api/stylus.html",revision:"cf469a8bb067354d8ee68def6607a66b"},{url:"en/api/themeConfig.html",revision:"d2882ac11ac8f636258404e80aca7533"},{url:"en/basic/index.html",revision:"008e397272fc9dc97841fec95d1b5ab8"},{url:"en/basic/markdown/demo.html",revision:"788d1f75d38a8457ba9d6b06d0c6da61"},{url:"en/basic/markdown/emoji.html",revision:"50ea29c555ba3175afb1401e52754110"},{url:"en/basic/markdown/index.html",revision:"86e3588524cd29ebacdd707f529ddf8b"},{url:"en/basic/vuepress/case.html",revision:"fe3b5bb3d932329383c3904f486fedf4"},{url:"en/basic/vuepress/command.html",revision:"1379c8647d62bf57523fe6c108a9c6fe"},{url:"en/basic/vuepress/file.html",revision:"80928231fd542db893f4549c25205f02"},{url:"en/basic/vuepress/index.html",revision:"4d9ee2569efe9c038ef38f18d876f561"},{url:"en/basic/vuepress/plugin.html",revision:"df4f36e22b969e9c3c6689aaeb296c2b"},{url:"en/basic/vuepress/theme/config.html",revision:"59b66f771d50ee8155f136faa02ffd23"},{url:"en/basic/vuepress/theme/dev.html",revision:"8ebda61d82106eccd488bbbc664fd6f4"},{url:"en/basic/vuepress/theme/index.html",revision:"dc1dfd8b2f9278c5ea7128710b5616d8"},{url:"en/FAQ/index.html",revision:"397c7e5b3c99d63f73fd17f01b9f9362"},{url:"en/guide/feature/blog.html",revision:"f1d03ed60476f88476923a81c4140004"},{url:"en/guide/feature/comment.html",revision:"247dfa0c973e145480e53b2b0d2806ea"},{url:"en/guide/feature/component.html",revision:"63230a84f96deee5ca59bf53d1f7640a"},{url:"en/guide/feature/darkmode.html",revision:"d928d6cb6f035771da474d58ec9551f0"},{url:"en/guide/feature/encrypt.html",revision:"e6ac1c71c9920f13118d9bd051f4ed45"},{url:"en/guide/feature/fullscreen.html",revision:"a39f3c2aa7c643a44ccd4c17dd1e7171"},{url:"en/guide/feature/icon.html",revision:"878d33337b673ba030022bd3e2675fa0"},{url:"en/guide/feature/index.html",revision:"c89f8aa03ae960ca4f0a860ee55579d6"},{url:"en/guide/feature/themecolor.html",revision:"0feb6c8fc5ca9c2ff1e055c0c43597d6"},{url:"en/guide/feature/typescript.html",revision:"e68de8809a7787c8778aaf8679072c56"},{url:"en/guide/index.html",revision:"5bc57545aec325680b70cc9d50a4ec7f"},{url:"en/guide/install.html",revision:"b9ea7242dde379a8e58ad51566b5c2d0"},{url:"en/guide/layout/breadcrumb.html",revision:"542985a8195bd1b83624f51dd71bbac5"},{url:"en/guide/layout/home.html",revision:"5527008203d922a4825e55785e50ff3c"},{url:"en/guide/layout/index.html",revision:"c55f83e50c82dfd8c5d0ae436e2d4a64"},{url:"en/guide/layout/navbar.html",revision:"5fa452defbdcf1c00cca0e28267bd7fd"},{url:"en/guide/layout/page.html",revision:"11a7d36248b23de7ca8e595989541df8"},{url:"en/guide/layout/sidebar.html",revision:"64f880249cabfb2f0f16f798f93d31b0"},{url:"en/guide/markdown/align.html",revision:"e4b1a7f01f86ec0c88f3662331b69c42"},{url:"en/guide/markdown/flowchart.html",revision:"772639281224436d0f5d466dadbd330b"},{url:"en/guide/markdown/footnote.html",revision:"c45f1c37c10d5e4fe0ab1fb9011961e9"},{url:"en/guide/markdown/index.html",revision:"c48c8bb32210be0439d93ecd3d674249"},{url:"en/guide/markdown/sup-sub.html",revision:"98e6777c0488a97fa9045796b3342582"},{url:"en/guide/markdown/tex.html",revision:"3f8d7f07ddf7dd0d5a14315b0ee68e09"},{url:"en/index.html",revision:"beb427a0f4ea04b54a6c2dd0eb1185b2"},{url:"FAQ/index.html",revision:"1af0c075ea6fcf4d4175f57886419652"},{url:"guide/feature/blog.html",revision:"44ee4e6a80f52a4bb13143981ad16e65"},{url:"guide/feature/comment.html",revision:"9ce2d4d89cb418ee174ddcace10076a1"},{url:"guide/feature/component.html",revision:"d3dfe3a09b1dba40dd1a46d0748a3afc"},{url:"guide/feature/darkmode.html",revision:"d7e7bd7b3f5b33acb9ada50fe270d957"},{url:"guide/feature/encrypt.html",revision:"40a605760d97916d187bdae2f3d84c13"},{url:"guide/feature/fullscreen.html",revision:"5161ec50ef2f063ff1a5aa9356206465"},{url:"guide/feature/icon.html",revision:"e05d7607e92a34a0220fe11081000f06"},{url:"guide/feature/index.html",revision:"262a8340560534f30dde7a5e17de87af"},{url:"guide/feature/themecolor.html",revision:"b10c4763e031e8657645da0cb10b8eaa"},{url:"guide/feature/typescript.html",revision:"fd70e9835761a867e480b413c9aea8c1"},{url:"guide/index.html",revision:"4cf9d36837440892782f7ee2a7916b20"},{url:"guide/install.html",revision:"8b7a960f2ec1fc2a139495d4f2980fd5"},{url:"guide/layout/breadcrumb.html",revision:"8503deca69981b52c9959d085180957a"},{url:"guide/layout/home.html",revision:"1c31b212caa2cbbd28c0b17bbc0cadc4"},{url:"guide/layout/index.html",revision:"db3c60dbcf200872cd372ec42ffe0751"},{url:"guide/layout/navbar.html",revision:"966ff552e8b1d1d93c9f28c5021b976b"},{url:"guide/layout/page.html",revision:"c246136aba217b20ea641ad809660862"},{url:"guide/layout/sidebar.html",revision:"df9ef7c14c905a5f0a4f16f6fa1e0023"},{url:"guide/markdown/align.html",revision:"e186d881e9e3859462a9c761f9e88e47"},{url:"guide/markdown/flowchart.html",revision:"dcd70ed07bf8b35004e93c761c0148f9"},{url:"guide/markdown/footnote.html",revision:"46399f0420ebdf53abb111774287545a"},{url:"guide/markdown/index.html",revision:"c8e59acefb0057809e47f72f206eaeca"},{url:"guide/markdown/sup-sub.html",revision:"c2edbd803c0b229ca68826e50f5e6392"},{url:"guide/markdown/tex.html",revision:"b877a593f1ae2d3f94920eaca4ac97c2"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"68d23cee425219ee063a2a9d3904fdc2"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"d9f7341b0ffa1d4ee862bddac7db432a"},{url:"tag/api/page/2/index.html",revision:"41f59b33f8981cb4e343e70442d9550d"},{url:"tag/blog/index.html",revision:"13a26c5418996c99ba28c0e290551308"},{url:"tag/comment/index.html",revision:"f02f0d4387d989397a4d477f21046c76"},{url:"tag/component/index.html",revision:"3a38cfdf266c7408b9675432ecc328f7"},{url:"tag/components/index.html",revision:"6b806f39db69f324a0013ce6f857792f"},{url:"tag/emoji/index.html",revision:"5da031c4e0d46a8634768c9da019ca51"},{url:"tag/encrypt/index.html",revision:"0a6b81001201a52b23ec32f3ab99ebec"},{url:"tag/enhance/index.html",revision:"dbc4b6cc58b15cad87f1d79d0af45bc6"},{url:"tag/frontmatter/index.html",revision:"7386f60b4e2aa76eadcb74b8ca2bb6e1"},{url:"tag/fullscreen/index.html",revision:"888e952c03fc1542b1be33d068b4ef32"},{url:"tag/function/index.html",revision:"77de71a60b9fa62ac099eced6ea5d62c"},{url:"tag/function/page/2/index.html",revision:"e35013733802f0b7e878cddf2937d810"},{url:"tag/home/index.html",revision:"1e9b00ac47a6aa3eed7f2595a5ab46dc"},{url:"tag/icon/index.html",revision:"aee95b811b8396187f320f4349605a9d"},{url:"tag/index.html",revision:"b242bea83c1b0867fc3149031c6dc4c7"},{url:"tag/intro/index.html",revision:"618e59e3bac9ac9cfdc30dd96dbee229"},{url:"tag/layout/index.html",revision:"53cb2f733c1f4cd2aaca1b936725ae01"},{url:"tag/markdown/index.html",revision:"d889a54c3b6287c988fc638d2c1ea023"},{url:"tag/plugin/index.html",revision:"357076d5cc9aba8dade2aa7062cf278a"},{url:"tag/plugin/page/2/index.html",revision:"8bc7455f989abc70318d6acc7ebf2f7b"},{url:"tag/style/index.html",revision:"e7a43750d22885d49906bb14c2efa014"},{url:"tag/themeConfig/index.html",revision:"effcb26598d6e396aed373e494b3d094"},{url:"tag/typescript/index.html",revision:"a14ae80d50f986b7d710542b63814359"},{url:"tag/vuepress/index.html",revision:"1281fa906819477949a2330d71ce47be"}],{})}));
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
