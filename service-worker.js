if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"2d8c3a07d803fda20a7d8aeb1958d2bc"},{url:"api/page.html",revision:"de0d3a09e016948dbdabbf482e0ce72a"},{url:"api/plugin/container.html",revision:"12f9dab0793cd9dde701048ebd22ffb0"},{url:"api/plugin/copyright.html",revision:"5ef4e381898f7e3a5410d9b7f6303e54"},{url:"api/plugin/index.html",revision:"018ef70f655341d0d992cdf32fcb6925"},{url:"api/plugin/md-enhance.html",revision:"660622640bbd6b7898ec59511d2daf37"},{url:"api/plugin/medium-zoom.html",revision:"87f2e2a6075491b4f297ad8a1044b6c9"},{url:"api/plugin/pwa.html",revision:"b7c76d3f1909f09f0452a1186579be9a"},{url:"api/stylus.html",revision:"fb81c52e8bd62cc7ddc21fe4895a9cac"},{url:"api/themeConfig.html",revision:"d1c156ebc1768c02f5283d67d3af6e37"},{url:"article/index.html",revision:"e07bd5c738a5b1360bd3023041d7edc8"},{url:"assets/css/0.styles.34398bb6.css",revision:"d9f813e05b00f67a5efe76df7afe03d2"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/101.9d3185a5.js",revision:"7a25b67b794d08972e4873c636b147ad"},{url:"assets/js/app.a9d557dd.js",revision:"99d67f6c7e7979e3f4c662b19561ecc2"},{url:"assets/js/layout-BlogEntry.2a2bcacd.js",revision:"5737aa14df513472e2b2e8cfcaf8bbed"},{url:"assets/js/layout-BlogEntry~layout-Layout.2f8faaf1.js",revision:"ea9bd27a42c5a164aa33c12f1f0d6b2e"},{url:"assets/js/layout-Layout.a8925438.js",revision:"add966f1ca083e53ccf1100a1480df0b"},{url:"assets/js/layout-NotFound.707f3c26.js",revision:"a566e8a4744a9be35230efb3d9080329"},{url:"assets/js/page--1b278726.78c764d6.js",revision:"30efbe409b2c91a5413d278a02264eaa"},{url:"assets/js/page--24b68849.8aed8d67.js",revision:"7a52d01478b63fafd7599e25dec85470"},{url:"assets/js/page--298eb4e9.892ad7b9.js",revision:"df5ec3f54edaed0b0d70cf40ba833452"},{url:"assets/js/page--33732ef1.fcde54fb.js",revision:"7e0868b05e04d236f6dbc86b822d037a"},{url:"assets/js/page--608d80cf.6c804d48.js",revision:"4908367285ebcaa22dc27818a1823eb9"},{url:"assets/js/page--b64dd6ee.06a8807b.js",revision:"3326155875256a0a084bcc9883b4ea3e"},{url:"assets/js/page-About Vuepress.075884d0.js",revision:"99a59fb0661053b720820ad897ed6cb4"},{url:"assets/js/page-API Docs.b7e039c7.js",revision:"8388412452ea12789a32e85f1ab48905"},{url:"assets/js/page-API 文档.9c2a7eeb.js",revision:"9256b5fc157e15794deef9adc5b622c6"},{url:"assets/js/page-Basic.6d7eb24a.js",revision:"c9c8292348fc495921d1818ae7b4d14b"},{url:"assets/js/page-Blog related.145e7424.js",revision:"573257a64ee270a6332e8d1d27d32c16"},{url:"assets/js/page-Breadcrumb.f81f5ba6.js",revision:"09a2002054c5e0370afae3d0a3cdd600"},{url:"assets/js/page-Comment Function.43be7deb.js",revision:"b09fd221377ceac50c33a3d67ee2b9cf"},{url:"assets/js/page-Common problems.ae66d397.js",revision:"d9f3cae8e0f6bfa39ce13bba8c8f758c"},{url:"assets/js/page-Custom alignment.4476d13c.js",revision:"f3483ec531e28bb1ca4d2f7499d1f228"},{url:"assets/js/page-Default Theme Config.5c214d34.js",revision:"3f65a1a450135961be689add9f3a2396"},{url:"assets/js/page-Emoji List.36424ccb.js",revision:"091bae2878cc3d2b462ccd5128cbd514"},{url:"assets/js/page-Emoji列表.bad5c503.js",revision:"38076bfb84fc5d0d8aefd130c07c7bf1"},{url:"assets/js/page-Encryption function.4c3864d2.js",revision:"7f7ad5537e6d8821b658d47c3eaee499"},{url:"assets/js/page-File Structure.c7ad39bb.js",revision:"e5f9ccc115685ddddd1699b66b9443ef"},{url:"assets/js/page-Flowchart.474bba19.js",revision:"2092cc43c07724c967e673fdac54f74d"},{url:"assets/js/page-Footnote.9b579422.js",revision:"0c2fdf1d9d10e7f4f9a6fdf8b3c3f3ab"},{url:"assets/js/page-Fullscreen Button.2d90a402.js",revision:"a009056a1663c8c4c42aa7f4e5d18804"},{url:"assets/js/page-Home Page.0a453d86.js",revision:"da4a7daa645b77c44a546c3abd0b7e20"},{url:"assets/js/page-Home.771e84e8.js",revision:"63e9b452417c3618695664d61ac5af56"},{url:"assets/js/page-Icon support.b37b717f.js",revision:"217afb9641019949485cacb05f8ff18e"},{url:"assets/js/page-Introduction.aebc6855.js",revision:"bd60eefab211e1caa1c5b1e7ce0f66be"},{url:"assets/js/page-Layout.43e6a4bb.js",revision:"2a2598fd70ac997b435ae0bef353add7"},{url:"assets/js/page-Markdown DEMO.f0e9e9d4.js",revision:"df805160e0902bd28a6d23d564bc16c3"},{url:"assets/js/page-Markdown Introduction.145394cc.js",revision:"1a14e1309edb10da9128697bb9357216"},{url:"assets/js/page-Markdown 新语法.776792ce.js",revision:"fc03442996534c7568591f40766404ca"},{url:"assets/js/page-Markdown介绍.66ff0e64.js",revision:"6da344427e8debdc64dcbf7c53c93a3c"},{url:"assets/js/page-Markdown示例.2c3fdec8.js",revision:"1706070c75d5e911b06234f653d74e19"},{url:"assets/js/page-NavBar.857826eb.js",revision:"fe7b713828e785c9cee997641cfa598f"},{url:"assets/js/page-New Component.7830e337.js",revision:"3745f435ab04d71117cc90d486c8184e"},{url:"assets/js/page-New feature.cb0985af.js",revision:"8f405d527bd52531f245bcd048149715"},{url:"assets/js/page-New syntax in Markdown.7bd44419.js",revision:"87017e00ef82f9e2771edaa590b87ec4"},{url:"assets/js/page-Page Configuration.9e309802.js",revision:"5230932e56db1ad6b936bcad38bddbba"},{url:"assets/js/page-Page.398f7f3d.js",revision:"9955176508836b351dcdb881a0723f62"},{url:"assets/js/page-Plugin Description.d926da66.js",revision:"a30c0dcf97b4ed7e85555c8bb9783a6f"},{url:"assets/js/page-Plugins.f9dcdad1.js",revision:"7321f8cf511377209842b9f5846733f7"},{url:"assets/js/page-Sidebar.8fe86d06.js",revision:"477424da4310f695861561563801eb9c"},{url:"assets/js/page-stylus configuration.3b0c7af8.js",revision:"8d644a0ae9d6ba0d012530b131ca2bec"},{url:"assets/js/page-stylus 配置.4f50c5a5.js",revision:"ac1b43140aa105262407fd767e7e3ba6"},{url:"assets/js/page-Superscript and Subscript.b34df855.js",revision:"dabcc72ce5c2f997f4b53fc12aacec5d"},{url:"assets/js/page-Tex Support.60be171b.js",revision:"a67f4ff11739a5a89a4ac0764fe70d50"},{url:"assets/js/page-Tex 语法支持.6cd66438.js",revision:"227dfc08a129f8fa3cb1f1608b61fe0f"},{url:"assets/js/page-Theme color and Night mode.acaa89d1.js",revision:"b2eba340a12e2a9c9e91f3116d785a73"},{url:"assets/js/page-Theme Config.91d5efd3.js",revision:"2329e739b3abb3ccf27db39c886288df"},{url:"assets/js/page-TS support.aab141eb.js",revision:"1ef4c0c5fb79ef3bf1a6c1cb6d374ecc"},{url:"assets/js/page-TS 支持.fa01e38f.js",revision:"a54c88b4fb3c624acc5f9e5e68c7436d"},{url:"assets/js/page-Vuepress Cases.bc2b535a.js",revision:"785e6e4cf78a995671922b2eb54bd0f3"},{url:"assets/js/page-Vuepress commands.253a9b91.js",revision:"ede9be28072d3c33b397ddfeef3b24c6"},{url:"assets/js/page-Vuepress 案例.58bb2720.js",revision:"d7441a52ee54421469993e7f40053c6b"},{url:"assets/js/page-vuepress-plugin-container.02232883.js",revision:"83cd5fd561a290ec981e7e802adcf525"},{url:"assets/js/page-vuepress-plugin-copyright.5c04b8c3.js",revision:"48ce2200ce8e764d3f37ef3e93fb9ea3"},{url:"assets/js/page-vuepress-plugin-md-enhance.891ce18c.js",revision:"e30bec78d15c2deb034ef4808766da76"},{url:"assets/js/page-Vuepress.846b619b.js",revision:"75293a639a5c14b795415dd3d22c69d8"},{url:"assets/js/page-Writing a theme.6b3eccb4.js",revision:"a6566f0ce4e7b8aa7ee1761bcb31033e"},{url:"assets/js/page-上下角标.bfd22f0d.js",revision:"88f6bad0e8902305e80f683cd486a6fd"},{url:"assets/js/page-主页.d2cbd041.js",revision:"721b5e2d3845a532c32b571826d6adb4"},{url:"assets/js/page-主题色与夜间模式.4ffa7b39.js",revision:"602056d2e4a5603c08368990e2acf3ed"},{url:"assets/js/page-主题配置.a41333c7.js",revision:"0a4e045140031955cd01393a85c2b538"},{url:"assets/js/page-人物.08ded9b9.js",revision:"f0ce58c450f8a7824d55279238ddec8c"},{url:"assets/js/page-介绍.a5ce1bd4.js",revision:"eca709d6ccae8d158c18fedb5593d4c5"},{url:"assets/js/page-侧边栏.924242fd.js",revision:"8fb4e44a3273578422e19467d978de26"},{url:"assets/js/page-全屏按钮.b9211a44.js",revision:"37b35414d56b0bbd0e263ec51e952191"},{url:"assets/js/page-加密功能.b4fe76b4.js",revision:"daba42f9c749cee490770dc339e5b1e2"},{url:"assets/js/page-博客相关.0c0149f5.js",revision:"810ad41f0ede72d6774fc001b44f7aa0"},{url:"assets/js/page-图标支持.043e2c2d.js",revision:"495819bcb8deeb579344f79a79566429"},{url:"assets/js/page-地点.1fad8e03.js",revision:"3da6fbb8433326b5b737ce9c7a650774"},{url:"assets/js/page-基础知识.b4f4271e.js",revision:"81771a42db68286ce5ebdae023ec5e58"},{url:"assets/js/page-对象.23d6eb0b.js",revision:"594150d8354677dd210eb252f0925c70"},{url:"assets/js/page-导航栏.432c3066.js",revision:"9e37d3e9b18a06e739d76d7155ddcbfe"},{url:"assets/js/page-布局.e825e2c0.js",revision:"bd335a663fbf16f522585f3edd00fb8a"},{url:"assets/js/page-常见问题.2cc48416.js",revision:"958646d09675fd8447284a68d28f3900"},{url:"assets/js/page-开发主题.27396190.js",revision:"0a503a78cd11f0ce241bc62521352bf0"},{url:"assets/js/page-插件.2a507527.js",revision:"e5ac02a3909283801a37df2477e7a094"},{url:"assets/js/page-插件说明.f46d64e6.js",revision:"da6db2c9ac3364ea095cfecdc057a70c"},{url:"assets/js/page-文件结构介绍.19cc1fb4.js",revision:"60b88d5969b5763a757b60bb998e843e"},{url:"assets/js/page-新增特性.68968938.js",revision:"f8f4961aa7d209c0eaf7ec399eaf6f12"},{url:"assets/js/page-新增组件.0035ab56.js",revision:"1aa4c8610a9da3d4179595921a2f52f4"},{url:"assets/js/page-流程图支持.dfcc10b2.js",revision:"86707d8ea2156c8be7362b0dc8f4a248"},{url:"assets/js/page-符号.aa0d16c3.js",revision:"da17a1ce481630d20b283857030c4741"},{url:"assets/js/page-脚注.2c80cfa2.js",revision:"315fdd792a289d582955333937fbde98"},{url:"assets/js/page-自定义对齐.38f5609a.js",revision:"45c9ed934999b13fedee69803a2f2a3a"},{url:"assets/js/page-自然.78feb1db.js",revision:"c75f572ef22c305426d08ea8f93e8417"},{url:"assets/js/page-评论功能.343e2971.js",revision:"1ace25e895173437f572a00f1ac5d2cd"},{url:"assets/js/page-路径导航.ce613cdb.js",revision:"93684a139f04220b7212529ff151f40e"},{url:"assets/js/page-页面.2542627a.js",revision:"5a0be918c57dec6c0d12dd6af8b2138e"},{url:"assets/js/page-页面配置.e39bd2d0.js",revision:"82db8b77029a52b01d5b804eb80e24e3"},{url:"assets/js/page-项目指令.001da804.js",revision:"982fd8d1d27f98be63b52f0e71ee8168"},{url:"assets/js/page-默认主题配置.2c2ab9b1.js",revision:"17676a278700630065090cafe6cc60ef"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.bb89318b.js",revision:"2e4633336ed4683d111d3ac270035a60"},{url:"assets/js/vendors~layout-Layout.3c5c31e1.js",revision:"a8f633cbf94b80ff291bbbafb7c53f8b"},{url:"basic/index.html",revision:"a5f9a313bbdeff3199019cc415bc5116"},{url:"basic/markdown/demo.html",revision:"1cdad37e62610fa02797eb8b3c14a943"},{url:"basic/markdown/emoji/index.html",revision:"882263b274445e81b39cd8cf15e321c5"},{url:"basic/markdown/emoji/locate.html",revision:"8202220e208c07bbc533d4f3f26edf2a"},{url:"basic/markdown/emoji/nature.html",revision:"f3eb3b61c3fa9a8803dbf0c7c34d6a88"},{url:"basic/markdown/emoji/object.html",revision:"95e6cd81bf1e0b3bd6e6b59ec073734b"},{url:"basic/markdown/emoji/people.html",revision:"b88c8c6ed48bb755566acb9dde969aa3"},{url:"basic/markdown/emoji/symbol.html",revision:"d183d70c9b2cf3c92ccee0b513ebc29b"},{url:"basic/markdown/index.html",revision:"f623da33644ff13946500be761c9b70b"},{url:"basic/vuepress/case.html",revision:"9fbbee5ca5d9dbdf64ed49175bbbd44f"},{url:"basic/vuepress/command.html",revision:"03ff1b4f320a8f950ebd4b33471e4264"},{url:"basic/vuepress/file.html",revision:"0c67d2caa6018244659e1f2e3ca55dd0"},{url:"basic/vuepress/index.html",revision:"eed25a4306fc8673263b458f6b905149"},{url:"basic/vuepress/plugin.html",revision:"992ef09140971d81f5d54c10286a5e41"},{url:"basic/vuepress/theme/config.html",revision:"c6174942754b35e2286db54c4381c85b"},{url:"basic/vuepress/theme/dev.html",revision:"76def6a380d999c1266539ab49fe4878"},{url:"basic/vuepress/theme/index.html",revision:"fb4d904e583f4b04194d32230e8d2ff9"},{url:"category/api/index.html",revision:"c292d09a7202c9a9a89c025a50067781"},{url:"category/api/page/2/index.html",revision:"1930008377d7531fc859f9aea7693de3"},{url:"category/FAQ/index.html",revision:"e729990fbd667892381f18f83c457df6"},{url:"category/function/index.html",revision:"b9b44809e98c1f53f247036521602d84"},{url:"category/function/page/2/index.html",revision:"4607f65156b2bb33d80af13f46f8ce94"},{url:"category/index.html",revision:"b28c0219582a59c5ba2e4beff86ac991"},{url:"category/instruction/index.html",revision:"2f0b36521e75af090042734740916aba"},{url:"category/layout/index.html",revision:"b1d9cbd1203b7ebf19a0fa6b527ad9e5"},{url:"category/layout/page/2/index.html",revision:"172aeaab036aa31f30c6a1a2fe834ae6"},{url:"category/markdown/index.html",revision:"bd5b4d28ef3dce599c2dd95a4af43fe5"},{url:"category/style/index.html",revision:"ea6c5ed934b7d52eb5adbb16438b966e"},{url:"en/api/index.html",revision:"f34d0dda0605835b5ad58b36dcb87eca"},{url:"en/api/page.html",revision:"9d03c1b579dc2043ecc9b3e5355af9ba"},{url:"en/api/plugin/container.html",revision:"ae4ce4e98dcc4957c220e266b325910e"},{url:"en/api/plugin/copyright.html",revision:"64914c99cd7e4b2c4735c811f2425d12"},{url:"en/api/plugin/index.html",revision:"1335fd05ae8ae41bd63092ffba8ce4fd"},{url:"en/api/plugin/md-enhance.html",revision:"4d2b26411c32eb5cecfc38e1f7b407ef"},{url:"en/api/plugin/medium-zoom.html",revision:"8d2733d6042a678e5bf5223e77a25ced"},{url:"en/api/plugin/pwa.html",revision:"f61d27aa7882851dfed622ef46ee6804"},{url:"en/api/stylus.html",revision:"bf6f20c7ee3cca0276acf812b0889d9e"},{url:"en/api/themeConfig.html",revision:"595f6d451d56286d55dde1aee0a1d64d"},{url:"en/basic/index.html",revision:"a1a16bdb5cc99535222b470cc962a8fa"},{url:"en/basic/markdown/demo.html",revision:"288cf5eeee0719893aab77a7987322c7"},{url:"en/basic/markdown/emoji.html",revision:"7053730f15c0f03b3a2910d7d7ef6e79"},{url:"en/basic/markdown/index.html",revision:"407ad338f600a1bfd4fabd4c4adb5dd0"},{url:"en/basic/vuepress/case.html",revision:"c0e5aef0b1c7ca118c9d0f4fee608442"},{url:"en/basic/vuepress/command.html",revision:"aba295aee147b2f67ce5733b2321ba78"},{url:"en/basic/vuepress/file.html",revision:"403aa3465489c150f4b0ae81a15865fb"},{url:"en/basic/vuepress/index.html",revision:"831bbe906024966d5de3353a94f63b48"},{url:"en/basic/vuepress/plugin.html",revision:"d2dde9c134ac5ee692c613f7ab9b6e03"},{url:"en/basic/vuepress/theme/config.html",revision:"ff74efca2fc8a17cc34a7d9aae97a803"},{url:"en/basic/vuepress/theme/dev.html",revision:"ebc4019e28d232506bb7fc1a6fdeb740"},{url:"en/basic/vuepress/theme/index.html",revision:"f6b1208812741abfd0311a9873f0aed4"},{url:"en/FAQ/index.html",revision:"0ce360f26f29476134af3554b4c90613"},{url:"en/guide/feature/blog.html",revision:"772e2672be6d86324a5a13603ebe60b8"},{url:"en/guide/feature/comment.html",revision:"86db1e78d1af320d02821967861e8232"},{url:"en/guide/feature/component.html",revision:"5a41cdac272026f6a4ebde7c00160f83"},{url:"en/guide/feature/encrypt.html",revision:"fd4ba3a0dc11051c61f0017c6bb22aa4"},{url:"en/guide/feature/fullscreen.html",revision:"fe2c39335c757f647cf3f39e33eff838"},{url:"en/guide/feature/icon.html",revision:"5b57c775d245f432fd94f12c71d5ca63"},{url:"en/guide/feature/index.html",revision:"6f90dea1038e499f930b53f54dbec1c7"},{url:"en/guide/feature/themecolor.html",revision:"47773aec84c061c7d2a372043ae58838"},{url:"en/guide/feature/typescript.html",revision:"aac492804e9f3803e4362fd81d50b0a9"},{url:"en/guide/index.html",revision:"5bdbd041747cead06751a138138049b4"},{url:"en/guide/install.html",revision:"274c6951a09e1fdf776a547d00297109"},{url:"en/guide/layout/breadcrumb.html",revision:"f925633f7f05bb727f23f08baa520663"},{url:"en/guide/layout/home.html",revision:"0924750b043e3618dbaf4b47162fdacf"},{url:"en/guide/layout/index.html",revision:"f39f503fe22cd23bfc4e0a00dba7b74f"},{url:"en/guide/layout/navbar.html",revision:"48f8066e2b2fcbcbe352decdfa1956c6"},{url:"en/guide/layout/page.html",revision:"9b5b26f8081bb685888d439030da4cdc"},{url:"en/guide/layout/sidebar.html",revision:"f830859e200018f34287939ccd6f72ff"},{url:"en/guide/markdown/align.html",revision:"e210ea4dfdf7b72df6b9d61f5610e29c"},{url:"en/guide/markdown/flowchart.html",revision:"59fbc86e642d4f05ef772624d2e9bcdd"},{url:"en/guide/markdown/footnote.html",revision:"852a30882b13d248615530efe61ec167"},{url:"en/guide/markdown/index.html",revision:"9fd5632dbad2dafbdf3efdaf98669c73"},{url:"en/guide/markdown/sup-sub.html",revision:"e558345b13f3805192709a8599147845"},{url:"en/guide/markdown/tex.html",revision:"b078a6d6ce3116c2d32e492a45a46451"},{url:"en/index.html",revision:"b1c8f091a54f475bf8da7367efd7b780"},{url:"FAQ/index.html",revision:"c0404954eace31b786ac2b28292f3f99"},{url:"guide/feature/blog.html",revision:"e6744a61834981669d3241e8878ef7fa"},{url:"guide/feature/comment.html",revision:"dca93ff4af63f428f58ec20eba6551db"},{url:"guide/feature/component.html",revision:"4e0c829efa93aac36655fa629545d41a"},{url:"guide/feature/encrypt.html",revision:"a29d9f5c1e0e48758b1bb961a5ce00b1"},{url:"guide/feature/fullscreen.html",revision:"5677cd3d11382877dc8c0a692f5bb8fa"},{url:"guide/feature/icon.html",revision:"9710d23f17d8eff8faab09daf1fa6ab2"},{url:"guide/feature/index.html",revision:"81c0c54a7765dabad5b93e75976eb266"},{url:"guide/feature/themecolor.html",revision:"10caa6b17220b0ee066837891eeff1ac"},{url:"guide/feature/typescript.html",revision:"c28ee39512ca1ed0fe55d7c25c176c05"},{url:"guide/index.html",revision:"1e029bb8720c805b55b9327b652a89fa"},{url:"guide/install.html",revision:"f68366bd38613e27065f0944d8e61595"},{url:"guide/layout/breadcrumb.html",revision:"9c1cf27501642f127a78642a444a808d"},{url:"guide/layout/home.html",revision:"ce2a19dcd14f39179294f83d7c4c580b"},{url:"guide/layout/index.html",revision:"f14a3ca4b99abf7e184841a6594e0369"},{url:"guide/layout/navbar.html",revision:"4204cc45a20610536070546fc93bf441"},{url:"guide/layout/page.html",revision:"ff38fa4f4cdc00b2d1cd0e0eae7ae5a8"},{url:"guide/layout/sidebar.html",revision:"4503bc96230e963acf02218534231f37"},{url:"guide/markdown/align.html",revision:"a66aa6d8db582a4058512a5dac5cc366"},{url:"guide/markdown/flowchart.html",revision:"3cf1139ffedf2b165716bbda801a6370"},{url:"guide/markdown/footnote.html",revision:"acfc2985899a38f900465db7f31e101a"},{url:"guide/markdown/index.html",revision:"b2b080f10241a9ed69ba4c6cce2d85d5"},{url:"guide/markdown/sup-sub.html",revision:"56c9f12ce6a24b055cf881ce3d804536"},{url:"guide/markdown/tex.html",revision:"3e57c07e225e9ee8ae3d3f532faa9ee8"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"df53e3bdd46aa8e2885ff5aefd364699"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"30c34d363a3a91b3020f1a2c2c23985f"},{url:"tag/api/page/2/index.html",revision:"b448316f26898958187cbbd51b765167"},{url:"tag/blog/index.html",revision:"6f63c52aa44d3f5aa26bb9ae123f29e6"},{url:"tag/comment/index.html",revision:"72bf2fbd79dec7a2eab4390213c43764"},{url:"tag/component/index.html",revision:"7487b957559c1789b8d14df62314cfec"},{url:"tag/components/index.html",revision:"5dac6e83c02a7a25ffc33e90d7e4fc18"},{url:"tag/emoji/index.html",revision:"8da1f034b7bd6eed3638be8a1e1410c8"},{url:"tag/encrypt/index.html",revision:"8c67cdf189672db43afa11559ffd8679"},{url:"tag/enhance/index.html",revision:"0916c915015d49434893ecbc1c6c0790"},{url:"tag/frontmatter/index.html",revision:"c5b8eb1bf114df9ef49432132721548b"},{url:"tag/fullscreen/index.html",revision:"be198f3ab9d14f83058a4a9252192d42"},{url:"tag/function/index.html",revision:"2e059e1bea2e2fa24db283ae7e9c294d"},{url:"tag/function/page/2/index.html",revision:"377579dc2230fd06e8db1954117aef7e"},{url:"tag/home/index.html",revision:"1b459226ef1dd53413187fa17840eac0"},{url:"tag/icon/index.html",revision:"f673d4946e17284ced55602bd7e153c0"},{url:"tag/index.html",revision:"44bbc350c66c3ba625be170659c7fb18"},{url:"tag/intro/index.html",revision:"b20d9a9244d901df4cf7b4f495f4cefa"},{url:"tag/layout/index.html",revision:"28af2a6d1faf5441413518e2b771ea1a"},{url:"tag/markdown/index.html",revision:"ead2750b1b2d537e0b882e0eb9528f5d"},{url:"tag/plugin/index.html",revision:"8133f2e1f03c86797c067983b74867e8"},{url:"tag/plugin/page/2/index.html",revision:"6ff6674df8435c3524734d28640e7cf9"},{url:"tag/style/index.html",revision:"0fec093a58a4c6a1facb07311cef9e04"},{url:"tag/themeConfig/index.html",revision:"2fdc9427166062f07d5efaea5356ade9"},{url:"tag/typescript/index.html",revision:"d504cbd78d65045caa459c080a6d269c"},{url:"tag/vuepress/index.html",revision:"38d897fcf1900dcb5fa9edf3c33c4dc9"}],{})}));
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
