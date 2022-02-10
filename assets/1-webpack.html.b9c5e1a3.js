import{r as t,o as c,a as o,b as n,d as e,F as r,e as a,c as p}from"./app.4088d041.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"webpack",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),a(" webpack")],-1),d=n("h1",{id:"webpack-\u6587\u6863",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack-\u6587\u6863","aria-hidden":"true"},"#"),a(" webpack \u6587\u6863")],-1),k={href:"https://v4.webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"},b=a("webpack4"),h={href:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"},m=a("webpack5"),_={href:"https://www.bilibili.com/video/BV1uy4y1n7Yf?p=1",target:"_blank",rel:"noopener noreferrer"},g=a("\u65B0\u7248Webpack\u5B9E\u6218\u4E0E\u5E94\u7528"),w=p(`<h2 id="\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5</h2><ul><li>webpack 4.x \u4EE5\u4E0A\u7684\u9700\u8981\u5B89\u88C5 webpack-cli npm install webpack -g npm install webpack-cli -g</li></ul><h2 id="\u539F\u7406\u548C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u548C\u6982\u5FF5" aria-hidden="true">#</a> \u539F\u7406\u548C\u6982\u5FF5</h2><p>\u6811\u7ED3\u6784\uFF1A\u5728\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u7528\u6240\u9700\u8D44\u6E90\uFF0C\u5F62\u6210\u4F9D\u8D56\u5173\u7CFB\u6811 \u6A21\u5757\uFF1A webpack \u4E2D\u4E00\u5207\u7686\u6A21\u5757\uFF08js/img/css\uFF09ES6\u6A21\u5757\uFF0CCommonJs\u6A21\u5757\uFF0CAMD\u6A21\u5757\u7B49 chunk\uFF1A webpack \u6253\u5305\u8FC7\u7A0B\u4E2D\u88AB\u64CD\u4F5C\u7684\u6A21\u5757\u79F0\u4E3A chunk bundle\uFF1Awebpack \u6253\u5305\u540E\u7684\u6587\u4EF6\uFF0C\u4E00\u4E2A\u6216\u8005\u591A\u4E2A chunk\u7684\u96C6\u5408</p><h2 id="\u57FA\u672C\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6838\u5FC3" aria-hidden="true">#</a> \u57FA\u672C\u6838\u5FC3</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// webpack\u4F1A\u5148\u8BFB\u53D6 webpack.config.js</span>
<span class="token comment">// webpack.config.js</span>
<span class="token comment">// webpack \u57FA\u672C\u89E3\u6784\uFF0C\u4ECE\u8FD9\u51E0\u4E2A\u70B9\u6DF1\u5165</span>
const path = require(&#39;path&#39;)
module.exports = <span class="token punctuation">{</span>
  entry<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u6709\u90A3\u4E9B\u4F18\u5316 webpack5 mode:production, \u4F1A\u5BF9\u4EE3\u7801\u8FDB\u884C\u5206\u6790\uFF0C\u5982\u679C\u672A\u4F7F\u7528\u7684\u53D8\u91CF\uFF0C\u6253\u5305\u4F1A\u5220\u9664 \u5982\u679C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u672A\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u6253\u5305\u65F6\u4F1A\u81EA\u52A8\u53BB\u9664\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E09\u65B9\u5E93\uFF0C\u53EA\u4F7F\u7528\u4E86\u51E0\u4E2A\u65B9\u6CD5\u4F1A\u81EA\u5B9A\u53BB\u9664(tree shaking) tree shaking,\u57FA\u4E8E exports \u6587\u6863\u6D41\uFF0C\u65E0\u6CD5\u81EA\u62D4\u5254\u9664\u5BF9\u8C61\u4E0B\u7684\u65B9\u6CD5</li></ul><h2 id="mode-webpack4x\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#mode-webpack4x\u652F\u6301" aria-hidden="true">#</a> mode(webpack4x\u652F\u6301)</h2><p>mode:&#39;production|development&#39; production(\u751F\u4EA7\u6A21\u5F0F): \u5F00\u542F\u538B\u7F29\u4EE3\u7801\uFF0C\u5F00\u542Ftree-shaking development(\u5F00\u53D1\u6A21\u5F0F): \u5F00\u542Fsource-map</p><h2 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h2><p>\u6253\u5305\u5165\u53E3\u6587\u4EF6</p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h2><p>output: { path: path.resolve(__dirname, &#39;./dist&#39;) filename: &#39;[name].[hash].js&#39; }</p><ul><li>[hash] // \u4F18\u5316\u8D44\u6E90\u7F13\u5B58 // \u6D4F\u89C8\u5668\u7B2C\u4E00\u6B21\u52A0\u8F7D js/css/image \u540E\uFF0C\u4F1A\u7F13\u5B58\u8FD9\u4E9B\u6587\u4EF6 // webpack\u6BCF\u6B21\u6253\u5305\uFF0Chash\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u8BBF\u95EE\u6253\u5305\u540E\u7684\u6587\u4EF6\u4E0D\u4F1A\u51FA\u73B0\u7F13\u5B58</li></ul><h1 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h1><p>module: { // webpack \u672C\u8EAB\u53EA\u8BC6\u522Bjs\u6587\u4EF6\uFF0C\u5176\u4ED6\u7C7B\u578B\u6587\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528 loader \u6765\u5904\u7406 // \u5904\u7406\u5176\u4ED6\u6587\u4EF6\u7C7B\u578B\uFF08css/image/font\u7B49\uFF09 // rules \u914D\u7F6E\u89C4\u5219 // loader \u7684\u6267\u884C\u987A\u5E8F\u662F\u4ECE\u540E\u5F80\u524D\u4F9D\u6B21\u6267\u884C rules: [] }</p>`,16),f={href:"https://edu.csdn.net/course/detail/7872",target:"_blank",rel:"noopener noreferrer"},j=a("webpack4.x\u5165\u95E8\u5230\u8FDB\u9636"),v={href:"https://blog.csdn.net/x550392236/category_7258485.html",target:"_blank",rel:"noopener noreferrer"},x=a("\u732B\u8001\u677F\u7684\u8C46webpack"),y={href:"https://blog.csdn.net/qq593249106/category_8511113.html",target:"_blank",rel:"noopener noreferrer"},q=a("qq593249106\u7684\u535A\u5BA2 webpack"),V={href:"https://segmentfault.com/a/1190000020778740",target:"_blank",rel:"noopener noreferrer"},B=a("webpack-\u5904\u7406css/scss\u6587\u4EF6"),D={href:"https://segmentfault.com/a/1190000010198627",target:"_blank",rel:"noopener noreferrer"},E=a("webpack-dev-server\u5B8C\u6574demo"),N={href:"https://juejin.im/post/5e01de37f265da33ab637daf",target:"_blank",rel:"noopener noreferrer"},F=a("\u770B\u5B8C\u8FD9\u7BC7\u8FD8\u641E\u4E0D\u61C2webpack\uFF0C\u6C42\u4F60\u6253\u6211"),W={href:"https://blog.csdn.net/liangklfang/article/details/54944012",target:"_blank",rel:"noopener noreferrer"},C=a("webpack-dev-server\u7B80\u5355\u4F7F\u7528"),I={href:"https://www.jianshu.com/p/871aa7a78bb6",target:"_blank",rel:"noopener noreferrer"},L=a("webpack \u4ECE\u96F6\u5F00\u59CB\u642D\u5EFA Vue \u524D\u7AEF\u5F00\u53D1\u73AF\u5883"),S={href:"https://www.jianshu.com/p/8da5ab3ac157",target:"_blank",rel:"noopener noreferrer"},T=a("Webpack 4.X \u4ECE\u5165\u95E8\u5230\u653E\u8086"),Y={href:"https://juejin.cn/post/6989491439243624461",target:"_blank",rel:"noopener noreferrer"},A=a("webpack4 \u4ECE\u96F6\u642D\u5EFA vue \u9879\u76EE\u5F00\u53D1\u73AF\u5883"),J=p(`<h1 id="\u642D\u5EFA\u524D\u7AEF\u5DE5\u7A0B\u5316" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u524D\u7AEF\u5DE5\u7A0B\u5316" aria-hidden="true">#</a> \u642D\u5EFA\u524D\u7AEF\u5DE5\u7A0B\u5316</h1><p>\u5168\u5C40\u5B89\u88C5 webpack npm install webpack -g npm install webpack-cli -g</p><h1 id="_1-\u65B0\u5EFA\u9879\u76EE-mkdir-webpack5-1-cd-webpack5-1" tabindex="-1"><a class="header-anchor" href="#_1-\u65B0\u5EFA\u9879\u76EE-mkdir-webpack5-1-cd-webpack5-1" aria-hidden="true">#</a> 1 \u65B0\u5EFA\u9879\u76EE mkdir webpack5-1 &amp;&amp; cd webpack5-1</h1><h1 id="_2-\u521D\u59CB\u5316\u4E00\u4E2A\u5DE5\u7A0B-npm-init-y" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u59CB\u5316\u4E00\u4E2A\u5DE5\u7A0B-npm-init-y" aria-hidden="true">#</a> 2 \u521D\u59CB\u5316\u4E00\u4E2A\u5DE5\u7A0B npm init -y</h1><p>#3 \u5B89\u88C5\u9879\u76EE webpack \u4F9D\u8D56 npm install webpack -D npm install webpack-cli -D npm install webpack-dev-server -D</p><h1 id="_4-\u65B0\u5EFA\u5165\u53E3\u6587\u4EF6-src-main-js-\u548C\u5176\u4ED6\u8D44\u6E90\u76EE\u5F55-src\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_4-\u65B0\u5EFA\u5165\u53E3\u6587\u4EF6-src-main-js-\u548C\u5176\u4ED6\u8D44\u6E90\u76EE\u5F55-src\u76EE\u5F55" aria-hidden="true">#</a> 4 \u65B0\u5EFA\u5165\u53E3\u6587\u4EF6\uFF08src/main.js\uFF09\u548C\u5176\u4ED6\u8D44\u6E90\u76EE\u5F55(src\u76EE\u5F55)</h1><p>src/ images/ img1.jpg img2.png avatar.jpg js/ a1.js a2.js style/ reset.css app.scss main.js</p><h1 id="_5-webpack-\u672C\u8EAB\u53EA\u5904\u7406-js\u548C-json-\u6587\u4EF6-\u5148\u5EFA-a1-js-\u548C-a2-js" tabindex="-1"><a class="header-anchor" href="#_5-webpack-\u672C\u8EAB\u53EA\u5904\u7406-js\u548C-json-\u6587\u4EF6-\u5148\u5EFA-a1-js-\u548C-a2-js" aria-hidden="true">#</a> 5 webpack \u672C\u8EAB\u53EA\u5904\u7406 js\u548C json \u6587\u4EF6\uFF0C\u5148\u5EFA a1.js \u548C a2.js</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/js/a1.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">a1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is a1.js\u6587\u4EF6&#39;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/js/a2.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">a2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is a2.js\u6587\u4EF6&#39;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/main.js</span>
<span class="token comment">// webpack \u5165\u53E3\u6587\u4EF6\uFF08entry\uFF09</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> a1 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./js/a1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> a2 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./js/a2&#39;</span><span class="token punctuation">)</span>

<span class="token function">a1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">a2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>#6 webpack \u9ED8\u8BA4\u4F1A\u8BFB\u53D6 \u6839\u76EE\u5F55 webpack.config.js \u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[chunlk]&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="webpack\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack\u4F18\u5316" aria-hidden="true">#</a> webpack\u4F18\u5316</h1>`,14),M={href:"https://mp.weixin.qq.com/s/TB7Oy5VmyhZboQF9Y8eiDg",target:"_blank",rel:"noopener noreferrer"},O=a("\u4E00\u884C\u53EF\u4EE5\u8BA9\u9879\u76EE\u542F\u52A8\u5FEB 70% \u4EE5\u4E0A\u7684\u4EE3\u7801(\u5B9E\u7528)");function Q(X,Z){const s=t("ExternalLinkIcon");return c(),o(r,null,[u,d,n("p",null,[n("a",k,[b,e(s)]),n("a",h,[m,e(s)]),n("a",_,[g,e(s)])]),w,n("p",null,[n("a",f,[j,e(s)]),n("a",v,[x,e(s)]),n("a",y,[q,e(s)]),n("a",V,[B,e(s)]),n("a",D,[E,e(s)]),n("a",N,[F,e(s)]),n("a",W,[C,e(s)]),n("a",I,[L,e(s)]),n("a",S,[T,e(s)]),n("a",Y,[A,e(s)])]),J,n("p",null,[n("a",M,[O,e(s)])])],64)}var H=l(i,[["render",Q]]);export{H as default};
