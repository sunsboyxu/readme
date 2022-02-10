import{r as t,o as p,a as o,b as n,d as a,F as r,c,e}from"./app.4088d041.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=c(`<h1 id="create-react-app-antd" tabindex="-1"><a class="header-anchor" href="#create-react-app-antd" aria-hidden="true">#</a> create-react-app + antd</h1><ul><li>npx create-react-app antd-app1 \u6216</li><li>yarn create react-app antd-app1</li></ul><p>yarn add antd</p><h1 id="\u914D\u7F6E\u9879\u76EE\u6309\u9700\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE\u6309\u9700\u52A0\u8F7D</h1><ul><li>1 yarn add react-app-rewired customize-cra babel-plugin-import</li><li>2 //\u6839\u2F6C\u5F55\u521B\u5EFAconfig-overrides.js, \u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E // config-overrides.js const { override, fixBabelImports } = require(&#39;customize-cra&#39;) module.exports = override( fixBabelImports({ libraryName: &#39;antd&#39;, libraryDirectory: &#39;es&#39;, style: &#39;css&#39; }) )</li><li>3 \u4FEE\u6539 package.json &quot;scripts&quot;: { &quot;start&quot;: &quot;react-app-rewired start&quot;, &quot;build&quot;: &quot;react-app-rewired build&quot;, &quot;test&quot;: &quot;react-app-rewired test&quot;, &quot;eject&quot;: &quot;react-app-rewired eject&quot; }</li></ul><h1 id="less-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#less-\u4F7F\u7528" aria-hidden="true">#</a> less \u4F7F\u7528</h1><p>yarn add less less-loader</p><h1 id="\u81EA\u5B9A\u4E49\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E3B\u9898" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u4E3B\u9898</h1><p>\u2F83\u5B9A\u4E49\u4E3B\u9898\u9700\u8981\u2F64\u5230 less \u53D8\u91CF\u8986\u76D6\u529F\u80FD\uFF0C\u53EF\u4EE5\u5F15\u2F0A customize-cra \u4E2D\u63D0 \u4F9B\u7684 less \u76F8\u5173\u7684\u51FD\u6570 addLessLoader \u6765\u5E2E\u52A9\u52A0\u8F7D less \u6837\u5F0F\uFF0C\u540C\u65F6\u4FEE\u6539 config-overrides.js \u2F42\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// config-overrides.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> override<span class="token punctuation">,</span> fixBabelImports<span class="token punctuation">,</span> addLessLoader <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;customize-cra&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span>
	<span class="token comment">// antd \u6309\u9700\u52A0\u8F7D</span>
	<span class="token function">fixBabelImports</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;antd&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">libraryDirectory</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token comment">// \u81EA\u5B9A\u4E49\u4E3B\u9898</span>
	<span class="token function">addLessLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&#39;@primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h1 id="react-\u652F\u6301\u88C5\u9970\u5668-decorators" tabindex="-1"><a class="header-anchor" href="#react-\u652F\u6301\u88C5\u9970\u5668-decorators" aria-hidden="true">#</a> React \u652F\u6301\u88C5\u9970\u5668(decorators)</h1><h2 id="_1-\u5B89\u88C5-babel-\u76F8\u5173\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-babel-\u76F8\u5173\u4F9D\u8D56" aria-hidden="true">#</a> 1 \u5B89\u88C5 babel \u76F8\u5173\u4F9D\u8D56</h2><ul><li>yarn add @babel/core @babel/plugin-proposal-decorators @babel/preset-env</li><li>yarn add react-app-rewired customize-cra</li></ul><h2 id="_2-\u4FEE\u6539-package-json" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539-package-json" aria-hidden="true">#</a> 2 \u4FEE\u6539 package.json</h2><p>&quot;scripts&quot;: { &quot;start&quot;: &quot;react-app-rewired start&quot;, &quot;build&quot;: &quot;react-app-rewired build&quot;, &quot;test&quot;: &quot;react-app-rewired test&quot;, &quot;eject&quot;: &quot;react-app-rewired eject&quot; }</p><h2 id="_3-\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA-config-overrides-js" tabindex="-1"><a class="header-anchor" href="#_3-\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA-config-overrides-js" aria-hidden="true">#</a> 3 \u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA config-overrides.js</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> override<span class="token punctuation">,</span> addDecoratorsLegacy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;customize-cra&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">dir</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">customize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u914D\u7F6E\u522B\u540D</span>
	config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias<span class="token punctuation">[</span><span class="token string">&#39;@&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u914D\u7F6E\u6253\u5305\u6392\u9664\u5305</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>env <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		config<span class="token punctuation">.</span>externals <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&#39;react&#39;</span><span class="token operator">:</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&#39;react-dom&#39;</span><span class="token operator">:</span> <span class="token string">&#39;ReactDOM&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span>
  <span class="token function">customize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">addDecoratorsLegacy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_4-\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA-babelrc-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA-babelrc-\u6587\u4EF6" aria-hidden="true">#</a> 4 \u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA .babelrc \u6587\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;legacy&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="vscode-\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#vscode-\u4FEE\u6539" aria-hidden="true">#</a> vscode \u4FEE\u6539</h2><p>\u9876\u90E8\u83DC\u5355 Code -&gt; \u9996\u9009\u9879 -&gt; \u8BBE\u7F6E -&gt; \u8F93\u5165 decorator\uFF0C\u52FE\u9009\u4E0A</p><h2 id="\u76F8\u5173\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u53C2\u8003" aria-hidden="true">#</a> \u76F8\u5173\u53C2\u8003</h2>`,22),d={href:"https://blog.csdn.net/XH_jing/article/details/107570926",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/weixin_30484247/article/details/102070391",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/weixin_44157964/article/details/108292457",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/g1437353759/article/details/109293224",target:"_blank",rel:"noopener noreferrer"},m=e("React \u4E2D\u5982\u4F55\u4F7F\u7528\u88C5\u9970\u5668\uFF08decorators\uFF09"),g={href:"https://blog.csdn.net/Charissa2017/article/details/105853351",target:"_blank",rel:"noopener noreferrer"},f=e("react\u9879\u76EE\u4E2D\u4F7F\u7528\u88C5\u9970\u5668decorators\u548CtypeScript"),_={href:"https://blog.csdn.net/qq_40689037/article/details/104618713",target:"_blank",rel:"noopener noreferrer"},q=n("h1",{id:"\u95EE\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u95EE\u9898","aria-hidden":"true"},"#"),e(" \u95EE\u9898")],-1),y={href:"https://github.com/DocSpring/craco-less/issues/30",target:"_blank",rel:"noopener noreferrer"};function v(x,j){const s=t("ExternalLinkIcon");return p(),o(r,null,[u,n("p",null,[n("a",d,[a(s)]),n("a",k,[a(s)]),n("a",b,[a(s)]),n("a",h,[m,a(s)]),n("a",g,[f,a(s)]),n("a",_,[a(s)])]),q,n("p",null,[n("a",y,[a(s)])])],64)}var z=l(i,[["render",v]]);export{z as default};
