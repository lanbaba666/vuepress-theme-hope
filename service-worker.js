if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"cca8de35f3586ea144986e86063f7b0c"},{url:"article/index.html",revision:"209bf606e1af3602155a0f727d57ebd0"},{url:"assets/css/0.styles.9fbbfa56.css",revision:"6c1433d718b4b7efc8f3f88a9e63e224"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/111.35197f51.js",revision:"b28c70f3c6b8efb54ef64c84586dc523"},{url:"assets/js/app.eda29afe.js",revision:"36201a70636f6aaff88a97aba7c43c9a"},{url:"assets/js/layout-Blog.1144f56b.js",revision:"4aaf8b1a9e143fe928e32337f3820508"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.4c50dd1c.js",revision:"6b5ee25b4dd90d38a02b4cb047e5a30d"},{url:"assets/js/layout-Layout.7b76a3fb.js",revision:"9beb4120eefaa98428b5318a183a24ea"},{url:"assets/js/layout-NotFound.c07cc11c.js",revision:"6040745a6fc94d6a0b5cf35d4890ba2b"},{url:"assets/js/page--051692f2.13e79ee8.js",revision:"17d985973b735ed1d4c816466022345c"},{url:"assets/js/page--0ab466d2.d4bd5f13.js",revision:"9901516a95b77c5bc5f1826fad249b0d"},{url:"assets/js/page--1104de32.8ef2f845.js",revision:"53c445999e12c94974b1428aeca9d6de"},{url:"assets/js/page--1c9738b4.a658a024.js",revision:"11a235e525d7e52fb1cfe628c5dfad9b"},{url:"assets/js/page--36317372.359bfee5.js",revision:"8e640a3360da36cf311b805cf6741c3a"},{url:"assets/js/page--36b7a178.993050ff.js",revision:"b8a3b6489c5ec85e7c6bcd7b321fa29f"},{url:"assets/js/page--44db09a4.e70eff2a.js",revision:"2d837f750a9fec856ce6f74808e0c93c"},{url:"assets/js/page--4bd3dd04.4ffe4715.js",revision:"89eeb100115d099a96bc21696e86a4a4"},{url:"assets/js/page--4c19db12.2f1cf817.js",revision:"1120df93779a9e860546173f21633776"},{url:"assets/js/page--5dafe67a.20c53b47.js",revision:"2f764cc95f3d4c014c0ab755cb82776c"},{url:"assets/js/page--6426a252.3a60595d.js",revision:"cbb4e72baa2af2eaf3e2cd0d95ebf1cd"},{url:"assets/js/page--7a219d12.62c5d5c9.js",revision:"bcd745058143f583248738ee1d686f4a"},{url:"assets/js/page--cde16ddc.de7b08f9.js",revision:"199ac48ff718e5d80faff71e4461efc0"},{url:"assets/js/page--ebefb430.4812abd6.js",revision:"4f4c35c738f940ade23edaf41b51ae73"},{url:"assets/js/page-About Vuepress.8425ba44.js",revision:"b32b35eaefb3d0a0481531e1db7c34cd"},{url:"assets/js/page-Basic.46ba6f9c.js",revision:"67d94bb6c4c723691ca7d330bbcd0b54"},{url:"assets/js/page-Blog homepage.1b1395cd.js",revision:"fe84abce7a90a833a7b3f3face4e6e4d"},{url:"assets/js/page-Blog related.f6c5f92d.js",revision:"5a0d127096801b1e9c80b9dc694d2ec2"},{url:"assets/js/page-Comment Function.238027fb.js",revision:"5658df638a9618b82e909d71572bd14f"},{url:"assets/js/page-Common problems.6c72c73a.js",revision:"7aa74f326531e8a2de71b4175a0b8670"},{url:"assets/js/page-Config Docs.925852a0.js",revision:"cfd991f047de914c6f6720d8d5d5f520"},{url:"assets/js/page-Custom alignment.e0e1991e.js",revision:"64f0dc6209720e52727a71f6ead2ae2b"},{url:"assets/js/page-Darkmode and Theme color.4a2aa508.js",revision:"5eafa5cca51d8a50d1f56e8241f70435"},{url:"assets/js/page-Demos.2159d7ee.js",revision:"71520cd50437cd713e024947e96ec98e"},{url:"assets/js/page-Emoji List.2dd3a7cb.js",revision:"0be676ab2671468dc8b18b9290c1af6c"},{url:"assets/js/page-Emoji 列表.02af87b6.js",revision:"a107e14a6c5cc773863eaa121edc9a10"},{url:"assets/js/page-Encryption function.cd5e3233.js",revision:"b9cb5c927c3bd7584591bed0d8d56f47"},{url:"assets/js/page-File Structure.80c16267.js",revision:"b0fd09af034a4e3d7b22bdce7f7eea30"},{url:"assets/js/page-Flowchart.1406f0cd.js",revision:"2b8d0bbb3f7abf14d9437fd34f8375d1"},{url:"assets/js/page-Footnote.de44395c.js",revision:"a8455f3171c8506b0b944b711723a96c"},{url:"assets/js/page-Home Page.249afaa7.js",revision:"20ab0b9a94f8b4835232827dbdadd711"},{url:"assets/js/page-Home.38ecfc4f.js",revision:"bedbfc6c1dc33fb3fb2cb00a782d8f03"},{url:"assets/js/page-Introduction.445ec28f.js",revision:"3313fcaa4f674521744cbe128dc55c97"},{url:"assets/js/page-Layout.4c61ecc9.js",revision:"ec72c38eba11d76d292f26db29375664"},{url:"assets/js/page-Markdown DEMO.4201c58c.js",revision:"1c823c8027ad809cbe070f00b154ed0e"},{url:"assets/js/page-Markdown Introduction.e45b37b8.js",revision:"63f4bb1d6cdc0af33f199ff348c616d7"},{url:"assets/js/page-Markdown 介绍.04e5b396.js",revision:"57a2df000628fbecacdb4c198234022a"},{url:"assets/js/page-Markdown 新语法.4bef3c9b.js",revision:"746a9721d91d98f2657d3ecbcde8b09e"},{url:"assets/js/page-Markdown示例.da9fc5e8.js",revision:"de0ffd7377a75a98c25add43c735833f"},{url:"assets/js/page-Markup.237b9350.js",revision:"ae240f784c0cb0c77efdc1c6bb64d88e"},{url:"assets/js/page-Nature.0c9b7486.js",revision:"b4fbc4d3037a298d8432c664be593266"},{url:"assets/js/page-NavBar.3f9bba51.js",revision:"9c933697f029e7ac738d1956be2143f9"},{url:"assets/js/page-New Component.b41ad29f.js",revision:"7cc8714a460994e08c8ce5ce54ecf7d0"},{url:"assets/js/page-New feature.4d3a2a22.js",revision:"96c2be433f60e93519fa4d7bb4951190"},{url:"assets/js/page-New syntax in Markdown.e239f37a.js",revision:"9740b3652bac9dab04969ba769b1ea2d"},{url:"assets/js/page-Object.c0eba41a.js",revision:"b75fefbdff9ac5ec489ed8bee49816c4"},{url:"assets/js/page-Page Configuration.9a8ea28a.js",revision:"9834697c1ab65cf82d8942da0996137a"},{url:"assets/js/page-Page information.898d84cf.js",revision:"cabca6135e7da25a61f99fa38db15881"},{url:"assets/js/page-Page.79c81e87.js",revision:"62cd31603e9505d47be1baa3bbee041a"},{url:"assets/js/page-People.0656c1f7.js",revision:"e9160f3fed00eece0edd04b5b6d5f807"},{url:"assets/js/page-Place.cb8c0bde.js",revision:"31e12daf79b3c630fab1fb51d8bfdb5c"},{url:"assets/js/page-Plugin Description.a8ddb00e.js",revision:"af583a88bee261ab2cf99a4ae8318e09"},{url:"assets/js/page-Plugins.5c3ec2ac.js",revision:"5396d84c848e2b91de7236d2c909ebb8"},{url:"assets/js/page-Sidebar.bad8ebb4.js",revision:"56c45246b77fbca233d3f2bc1a339b8a"},{url:"assets/js/page-stylus configuration.d0cb6c0b.js",revision:"b255474146c8fcefc6a78b36970f385e"},{url:"assets/js/page-stylus 配置.325a607b.js",revision:"579071fe6b6025917c294dce60e51201"},{url:"assets/js/page-Superscript and Subscript.97e3bef3.js",revision:"fe13afa0db998f559ef48a413447b4dd"},{url:"assets/js/page-Symbol.83cebb21.js",revision:"e9f17d88084bc0eee1c0b229d5541fc2"},{url:"assets/js/page-Tex Support.93dff84b.js",revision:"0a2cb1bdb1790e6af22dfa19a25fcfd6"},{url:"assets/js/page-Tex 语法支持.161cdb06.js",revision:"5c61e4b368fbc17c488ff7c566e8fdb5"},{url:"assets/js/page-Theme Config.b2548a5e.js",revision:"44dfcaf999160450c6ef190efef295e1"},{url:"assets/js/page-TS support.3fe4a110.js",revision:"afc12fffcd576062bdd9c661f13dbaef"},{url:"assets/js/page-TS 支持.4afa1741.js",revision:"bf81f3212c73fa3932e0fd7a93748db5"},{url:"assets/js/page-Vuepress Cases.6a70968a.js",revision:"6dbb688cbe67b07542d7e1e434d31f6f"},{url:"assets/js/page-Vuepress commands.2bb1f747.js",revision:"de97d79223c90c2e4825ff24c5206689"},{url:"assets/js/page-Vuepress 案例.8cd61bbe.js",revision:"d499d64e7a6a2fe65a8227d8e90f6c93"},{url:"assets/js/page-vuepress-plugin-container.4a367e26.js",revision:"f2b0ec0a5a5b8736e3cf4ba2c27dbb68"},{url:"assets/js/page-vuepress-plugin-copyright.d4b36c01.js",revision:"75a4ede9d1c33c4f4db61fc2e79a68cc"},{url:"assets/js/page-Vuepress.eea0bf49.js",revision:"f5c69b520ac4d197685af4b8c755f917"},{url:"assets/js/page-上下角标.840f83fe.js",revision:"3a7e4efe2f09e24cc8d15d2c1f6076bb"},{url:"assets/js/page-主题配置.b93d4e85.js",revision:"b5a4816ee830babea25cff2a988e72a6"},{url:"assets/js/page-人物.0341c0d6.js",revision:"b2572b3a7d281a94982eb9c9195b86a3"},{url:"assets/js/page-介绍.6493ecbc.js",revision:"357201afd93c4dbe4f93450ccfa00e98"},{url:"assets/js/page-侧边栏.2ee8f206.js",revision:"6ce5772a633edb07da452c9c30f60ba5"},{url:"assets/js/page-加密功能.52f56fcb.js",revision:"799b7cd4956e78ad49f2a01f405d83e3"},{url:"assets/js/page-博客相关.e112c786.js",revision:"cadac991a0dfbeb4188c564f39bb2a14"},{url:"assets/js/page-博客首页.3c49ae23.js",revision:"7887c312b87c78b6b4bfb40d5d2aa18c"},{url:"assets/js/page-地点.60f27166.js",revision:"0b426c28b628e0b6d9f5eae0ca39d23a"},{url:"assets/js/page-基础知识.40fbaef9.js",revision:"10723fd73274f089db7cd6cb786846a3"},{url:"assets/js/page-对象.ed1f7f05.js",revision:"13f1b61d833f09ec2f6093b9663ec48c"},{url:"assets/js/page-导航栏.52d5fa75.js",revision:"7e0d86b79ad7cbdde83108194a645b30"},{url:"assets/js/page-布局.e53f0ab9.js",revision:"452d63fbea7440b69c90672cbc867e55"},{url:"assets/js/page-常见问题.33b6ee27.js",revision:"da88dc21464a980681ec51772332615d"},{url:"assets/js/page-插件.29ec7dc3.js",revision:"ab9b4c435375acab52bbf117ba6d71a7"},{url:"assets/js/page-插件说明.f945e18d.js",revision:"7ad27770d9a75ee28bbe63cd2e800702"},{url:"assets/js/page-文件结构介绍.7a8e2152.js",revision:"bbeaeffe1d52dcc723691d61b2a61708"},{url:"assets/js/page-新增特性.e631438b.js",revision:"83bab8f042ddabd0587a90eb16773c30"},{url:"assets/js/page-新增组件.06b70ab3.js",revision:"3c201982b5ba775c95212ab4d4fe6eb5"},{url:"assets/js/page-标记.913d2e43.js",revision:"0779005f573c312190016fafd74d87df"},{url:"assets/js/page-流程图支持.50374775.js",revision:"dbd68ee561625b4b6339a05ec662609e"},{url:"assets/js/page-深色模式与主题色.7ea21015.js",revision:"5b3b458abb261ca40fb56ee8570e617c"},{url:"assets/js/page-符号.e3b30a8d.js",revision:"c758c35a068149bce6a46d32ea5bf173"},{url:"assets/js/page-脚注.33ee426b.js",revision:"d1011ebef3bbeb70efd41f829c6a3a63"},{url:"assets/js/page-自定义对齐.b8dde254.js",revision:"d15e4530e0953acce124edea515f9ddf"},{url:"assets/js/page-自然.021b114d.js",revision:"6b47539f9f470985d7dcb4535038b24e"},{url:"assets/js/page-评论功能.f2b9c81d.js",revision:"666506dbd0d59ac701ef068d4304ff7b"},{url:"assets/js/page-配置文档.26f0310c.js",revision:"3532c8d26eca5f3dceb4c1eec251a77a"},{url:"assets/js/page-页面.274f5cb7.js",revision:"d88cca69fc271ecd7586658c4bcce25b"},{url:"assets/js/page-页面信息.71a7361c.js",revision:"7f5872daaba036bd9005cbb8f30cd804"},{url:"assets/js/page-页面配置.70463692.js",revision:"0cc04311318f22b8b84503f9992fe33c"},{url:"assets/js/page-项目指令.234ecd40.js",revision:"f21b458deb16186ff25003ee8dd3b1b4"},{url:"assets/js/page-项目案例.6ce6d13a.js",revision:"73ab60ec0db8f9def925f90e0bd9fca5"},{url:"assets/js/page-首页.c4f3100f.js",revision:"b2bbae5be8ea7ffeec1bbc08dd1735e2"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.78faace7.js",revision:"444207a472ac1080efe4d829d2897462"},{url:"assets/js/vendors~layout-Layout.6946272b.js",revision:"b7cf3c391dbe5ded44be9612dbc1235d"},{url:"basic/index.html",revision:"e096d0789b8a19db02e59b3bfcb28683"},{url:"basic/markdown/demo.html",revision:"25daeb80d3e77e6f50469547aa5d7892"},{url:"basic/markdown/emoji/index.html",revision:"e4a3aafae55a2637af4ea51088c0189d"},{url:"basic/markdown/emoji/nature.html",revision:"d4a9990157d1436cdde7589ab397496f"},{url:"basic/markdown/emoji/object.html",revision:"b5bc4c8173ec0bfe7a7bb2b7e2d5e050"},{url:"basic/markdown/emoji/people.html",revision:"65a849d46a1a527e8df276ddab43ddc3"},{url:"basic/markdown/emoji/place.html",revision:"a6462df3e664660c877944a777511a8c"},{url:"basic/markdown/emoji/symbol.html",revision:"199d10b2be34bb81c9ffef8492f750c3"},{url:"basic/markdown/index.html",revision:"254772e0a110670350eaeaa2d6c25c6b"},{url:"basic/vuepress/case.html",revision:"e7015c9b071979c4e70b5196b0fc27db"},{url:"basic/vuepress/command.html",revision:"38e29dc6669ae36461967732f218c108"},{url:"basic/vuepress/file.html",revision:"3f5cb852024f943cf89a17554cf5a92f"},{url:"basic/vuepress/index.html",revision:"46827e9dec12566a038d2aadd7f09c3f"},{url:"basic/vuepress/plugin.html",revision:"81c4374db25655f81f628613cb5514eb"},{url:"basic/vuepress/theme.html",revision:"d51546728b69b9af7ae74d4bb4ff5707"},{url:"category/aconfigpi/index.html",revision:"68e218e306f73c4c6e48a5c1fb5f5658"},{url:"category/config/index.html",revision:"c64cf1e8c4bde271da2db98bf0a85dda"},{url:"category/config/page/2/index.html",revision:"a54b68023cca95350723f79fb4e67ff4"},{url:"category/config/page/3/index.html",revision:"435eca6b1f2d9d47669b076b9c02ae2e"},{url:"category/FAQ/index.html",revision:"dd6ccc02fcace1cbf9ddca128d342f80"},{url:"category/feature/index.html",revision:"12874cde3c4abbaefa80c167a3d9daa7"},{url:"category/feature/page/2/index.html",revision:"ddc710fd3e2fbe08612c9aa1e99fbf91"},{url:"category/index.html",revision:"5cc1d0a960da08a3c176a42c79ba1f62"},{url:"category/instruction/index.html",revision:"d5d3d7448372d497d979bb3e04eace25"},{url:"category/layout/index.html",revision:"83220e4f15aac7f8acf594542a6196a4"},{url:"category/layout/page/2/index.html",revision:"c2a753281976ea4bb88de862a215274b"},{url:"category/markdown/index.html",revision:"acc03953682cee33aab58ddb1188c82e"},{url:"config/index.html",revision:"e6ab2a6314c11d8c83e105b9e52db654"},{url:"config/page.html",revision:"6a5afc3e18796a5d781a7d53140a9765"},{url:"config/plugin/container.html",revision:"472366af97d1f8522a87cab4a88ea8bd"},{url:"config/plugin/copyright.html",revision:"2b346a74a8abf454c1e049bb343b6bf6"},{url:"config/plugin/index.html",revision:"80fce47bcdcc083b3f710cf9682b449d"},{url:"config/plugin/last-update.html",revision:"695537e2c3417ad64863bb9dfdf3a41b"},{url:"config/plugin/medium-zoom.html",revision:"5b89de409bf317943497decaecd792c7"},{url:"config/plugin/pwa.html",revision:"7219d63626649dd1183f891f1959a897"},{url:"config/plugin/reading-time.html",revision:"8c9726897f3a4b57a5901607a3daab02"},{url:"config/plugin/seo.html",revision:"2235ac618d8cd7f5d0f4d164d8419090"},{url:"config/plugin/sitemap.html",revision:"7638feaffc2ded0e6751051207688892"},{url:"config/stylus.html",revision:"4a4c2681ec8d2e690a8e795fe0f74492"},{url:"config/themeConfig.html",revision:"9f27fd6983e1592c6510117fd99ce453"},{url:"demo/index.html",revision:"28c1484cbd08a92e2afcfd91530cc38d"},{url:"en/basic/index.html",revision:"14c1776968070f919d7971697d7488fb"},{url:"en/basic/markdown/demo.html",revision:"e9a2d07648506b9fe3d2e0577b4bcf25"},{url:"en/basic/markdown/emoji/index.html",revision:"c6355661ac9e0611cc9699a8b65dba14"},{url:"en/basic/markdown/emoji/nature.html",revision:"69f22a8dedc0bbb4be7e4ff2249716d1"},{url:"en/basic/markdown/emoji/object.html",revision:"97803ce30715b985deb4c897df2caa29"},{url:"en/basic/markdown/emoji/people.html",revision:"6a5350a8ffe74ef040899a5878db38f5"},{url:"en/basic/markdown/emoji/place.html",revision:"ee725820310bfecb3018e0bcfd6046bc"},{url:"en/basic/markdown/emoji/symbol.html",revision:"ecfc63706583c2240255d869a7500807"},{url:"en/basic/markdown/index.html",revision:"bdd88f23500ef844d357625fe4640d9f"},{url:"en/basic/vuepress/case.html",revision:"35c4b4f38ea64b29a6a419f68ca9df6c"},{url:"en/basic/vuepress/command.html",revision:"658dd049edf213b2a0a32be96bd9118d"},{url:"en/basic/vuepress/file.html",revision:"659cfc9c8d59702fcfa83afe07ee168a"},{url:"en/basic/vuepress/index.html",revision:"627db57f1ad6e3bef46b7341d7349db1"},{url:"en/basic/vuepress/plugin.html",revision:"d83e7ad6be4090ac2b23e43d611f95ee"},{url:"en/basic/vuepress/theme.html",revision:"119d6d394923954dc60f39cab91b869f"},{url:"en/config/index.html",revision:"12fc879575133e47858a5d84e4af8754"},{url:"en/config/page.html",revision:"064c95b72eb87c03cbe481a24e1f21bc"},{url:"en/config/plugin/container.html",revision:"46651b4feee9a21c38bd8d13c1091a53"},{url:"en/config/plugin/copyright.html",revision:"c51c78a0633c1cb35c8b36111b81540c"},{url:"en/config/plugin/index.html",revision:"9b3bd7dbce8647bfbc82a88d20e0a868"},{url:"en/config/plugin/last-update.html",revision:"50b4945eb4c1cbc01061d426073e466c"},{url:"en/config/plugin/medium-zoom.html",revision:"b065cb5e87d751efe848941ad9aa4c10"},{url:"en/config/plugin/pwa.html",revision:"dd3fbbf867ad6d604b0a244219e6c4c4"},{url:"en/config/plugin/reading-time.html",revision:"51ff695a134ad7c64484b1bf531ca09a"},{url:"en/config/plugin/seo.html",revision:"b7b570fec81e6d1c502836b6e3550e1e"},{url:"en/config/plugin/sitemap.html",revision:"a19c1b0c8e5951f7604f5066cd56e0d3"},{url:"en/config/stylus.html",revision:"d5769a6da13c15eeca4f1cabfcb00cdb"},{url:"en/config/themeConfig.html",revision:"35dbc4dd671d1f399bbe139481ad6f34"},{url:"en/demo/index.html",revision:"878b930a4bc274a7bd76c1d41cba27fc"},{url:"en/FAQ/index.html",revision:"3a798529d8170ffa4f4afe09b5bbe4b0"},{url:"en/guide/feature/blog.html",revision:"5cd030d2fd91d8d9ea572933172488e3"},{url:"en/guide/feature/comment.html",revision:"3e00e35f75de9d1f7252dc5cb7bcdedd"},{url:"en/guide/feature/component.html",revision:"b45b6a1e3634b60a30fe59184de8a716"},{url:"en/guide/feature/encrypt.html",revision:"fa0d993989f3f12144dd958a1fdbd4fd"},{url:"en/guide/feature/index.html",revision:"4fb280014ecbf9e0843920ba6680420c"},{url:"en/guide/feature/markdown/align.html",revision:"49531969cf8a8522f2fb050f9256d50e"},{url:"en/guide/feature/markdown/flowchart.html",revision:"0990a2c3b20e132296c3acaff366a4df"},{url:"en/guide/feature/markdown/footnote.html",revision:"4910c7a0ccff06eda851954157a7ed7b"},{url:"en/guide/feature/markdown/index.html",revision:"19e2d66f39829798ffea4e3804160bae"},{url:"en/guide/feature/markdown/mark.html",revision:"19a3e539c95049792e27f9c2af88943c"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"57678e2603fffae4781e84998362f185"},{url:"en/guide/feature/markdown/tex.html",revision:"7f4e700b1bc6fe34d4c9f291ee6e2e9f"},{url:"en/guide/feature/page-info.html",revision:"ae17d890ba7e02cd271e67c89f396eb2"},{url:"en/guide/feature/theme.html",revision:"d6b619d6d82c44de172e2e0b69e6b935"},{url:"en/guide/feature/typescript.html",revision:"c2effcb8b2883d7d4b6c06992353197d"},{url:"en/guide/index.html",revision:"6e5e1963e84eaa90135df4ee8fecbdb6"},{url:"en/guide/install.html",revision:"ab0fc9d987fc199ec84e3557b8034def"},{url:"en/guide/layout/blog.html",revision:"7daf68866db2c48e6c75432c3f3179e2"},{url:"en/guide/layout/home.html",revision:"d4357989ead40b90370028e57382ced4"},{url:"en/guide/layout/index.html",revision:"dd831443b69217c47f05dbb212abe628"},{url:"en/guide/layout/navbar.html",revision:"c3d9395e6abae040d9131eb19ff57fb7"},{url:"en/guide/layout/page.html",revision:"7b95a7e4f5f51a9e4563f6c0e07677cf"},{url:"en/guide/layout/sidebar.html",revision:"9efc5a33db810d51d274c4eaffea3d41"},{url:"en/index.html",revision:"974cd82026b7b3e57213723c8af8f131"},{url:"FAQ/index.html",revision:"f794f9ea5daa16c8e8918534e605474b"},{url:"guide/feature/blog.html",revision:"0090f0776ea475e5c8573b1d05214be3"},{url:"guide/feature/comment.html",revision:"30771d8d3393c32156b8a07e1e447657"},{url:"guide/feature/component.html",revision:"bbec5d192641eec1c4b570aa0c39075a"},{url:"guide/feature/encrypt.html",revision:"2c769acd14471cc0dd3039ca93f5f3e2"},{url:"guide/feature/index.html",revision:"92f852d2ecb62dbc8dfb0aaf9e396649"},{url:"guide/feature/markdown/align.html",revision:"e6bb05b847fc4409d90535669e67ddc4"},{url:"guide/feature/markdown/flowchart.html",revision:"23339695f96c2bd6dbd411c77c7922db"},{url:"guide/feature/markdown/footnote.html",revision:"df9b87f06058fe909306fef852d0bbee"},{url:"guide/feature/markdown/index.html",revision:"5916d5738e6630f73cf59e021bde2e9e"},{url:"guide/feature/markdown/mark.html",revision:"b46585b647d2f5c52dff265270c70579"},{url:"guide/feature/markdown/sup-sub.html",revision:"c83b26eb3360ee321c037299c1cbdeba"},{url:"guide/feature/markdown/tex.html",revision:"69ffe6181a60e7719bf9b42413e1f29d"},{url:"guide/feature/page-info.html",revision:"31b94096f9556dbd5ff1ed3d9d807c2e"},{url:"guide/feature/theme.html",revision:"0f3e91408556f5ea0c88c2b10b7521b0"},{url:"guide/feature/typescript.html",revision:"d36990e16ab0f92b9c92f657e3d1b240"},{url:"guide/index.html",revision:"6506efe443bd8f19f1ddbf8c6c3484cc"},{url:"guide/install.html",revision:"4d27f7151a847ed7167f4809b4271faa"},{url:"guide/layout/blog.html",revision:"5463d0efa75175d5d51ee82b173d4efd"},{url:"guide/layout/home.html",revision:"c825ec393ff630d7e8ef874de1c14fa7"},{url:"guide/layout/index.html",revision:"d2d31ba814cf37fc7ba3e01064117e8a"},{url:"guide/layout/navbar.html",revision:"72403588bf3a791755fd0d17f364d7af"},{url:"guide/layout/page.html",revision:"2020fd9a2722561bcbc8e899efcf1a15"},{url:"guide/layout/sidebar.html",revision:"af978a03f8275499444bfae09a6ca1c6"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"219d55e272d89592e22e58e8021b63a6"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"63e06c46b2d55c3d6785ee3e0ae007e3"},{url:"tag/comment/index.html",revision:"598b443def2abcc1c0cbc34a16ca41dc"},{url:"tag/components/index.html",revision:"38e70dbc615709e4aaf4fa61aeb97367"},{url:"tag/config/index.html",revision:"6521003451564ed966169e68b698e1cc"},{url:"tag/config/page/2/index.html",revision:"4d7cabfda0b569671ef935e602a15553"},{url:"tag/config/page/3/index.html",revision:"8e49458a45acac8d0448a1575b1c3339"},{url:"tag/emoji/index.html",revision:"4a989041681353a5c7d240bb98c6291b"},{url:"tag/emoji/page/2/index.html",revision:"ba9f659e696dfb0b23ec7f0104ab9eaa"},{url:"tag/encrypt/index.html",revision:"8900a529d2324940beeade269866ca1f"},{url:"tag/feature/index.html",revision:"4021aef7c9226be7d88caeac2b9235d6"},{url:"tag/feature/page/2/index.html",revision:"57e726bf15a7572da34db6bfa4d6c75a"},{url:"tag/frontmatter/index.html",revision:"e6c39eea88d1bf86a531cfc5b73ddbd1"},{url:"tag/function/index.html",revision:"d9bf21bb172b714b87997d1e77745c12"},{url:"tag/function/page/2/index.html",revision:"9e2105ee977795c5a288e145bf560b45"},{url:"tag/home/index.html",revision:"50e88b0a93aaa639ecd0d12c1682e485"},{url:"tag/index.html",revision:"0cbe3a01ce66d7952da4ff221dfb8609"},{url:"tag/intro/index.html",revision:"5963cd182594ca66e2c06c6f1e134504"},{url:"tag/layout/index.html",revision:"831f011dea348b66d7bb5d39ff57b48e"},{url:"tag/layout/page/2/index.html",revision:"943589a58279808341f37a74e4d2042b"},{url:"tag/markdown/index.html",revision:"a233c97d81ea3cb8884b81268bceefe1"},{url:"tag/markdown/page/2/index.html",revision:"4544f6ec7c3d124c7dcba4378fe58615"},{url:"tag/markdown/page/3/index.html",revision:"b34220fe03951f8d7fa9d36b26baf0e0"},{url:"tag/navbar/index.html",revision:"dfb2dcc2feb358c70dba84cecc245b10"},{url:"tag/page-info/index.html",revision:"7ea5f0f18b8acceedf11cc039539221d"},{url:"tag/plugin/index.html",revision:"17cc00e16e81243533f3d37656e1a841"},{url:"tag/plugin/page/2/index.html",revision:"e0cf8eabb387c67edd20b6cb4c726bb1"},{url:"tag/sidebar/index.html",revision:"228dd5c4181aa3ca1004c814e4fc2fbd"},{url:"tag/style/index.html",revision:"c17237ed4e7910d68900c2157d513d74"},{url:"tag/themeConfig/index.html",revision:"f0c7262805443984c8d3f117595f1a25"},{url:"tag/typescript/index.html",revision:"b12d9e600088afd36c7ebe8182c87d49"},{url:"tag/vuepress/index.html",revision:"b6d189882866b90af368f9f2ea4cf57a"},{url:"timeline/index.html",revision:"956d3b7bdcc1ff7f44d9afdb215c4d84"}],{})}));
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
