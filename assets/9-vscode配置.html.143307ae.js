import{c as n}from"./app.a602c81b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u63D2\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u63D2\u4EF6\u5B89\u88C5</h1><ul><li>Auto Import</li><li>JS JSX Snippets</li><li>React/Redux/react-router Snippets // \u67E5\u770B\u63D2\u4EF6 Usage \u4F1A\u6709 \u5FEB\u901F\u5BFC\u5165 \u7B80\u5199</li></ul><h1 id="\u81EA\u5B9A\u4E49-react-\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-react-\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 React \u4EE3\u7801\u7247\u6BB5</h1><p>\u9996\u9009\u9879 -&gt; \u7528\u6237\u7247\u6BB5 -&gt; \u8F93\u5165 javascript.json / javascriptreact.json \u9009\u62E9</p><h2 id="\u914D\u7F6E\u5FEB\u901F\u521B\u5EFA\u4EE3\u7801\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5FEB\u901F\u521B\u5EFA\u4EE3\u7801\u547D\u4EE4" aria-hidden="true">#</a> \u914D\u7F6E\u5FEB\u901F\u521B\u5EFA\u4EE3\u7801\u547D\u4EE4</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u65E5\u5FD7\u8F93\u51FA</span>
  <span class="token property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u547D\u4EE4</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.log($1)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65E5\u5FD7\u8F93\u51FA&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u521B\u5EFA React Class \u7EC4\u4EF6</span>
  <span class="token property">&quot;Create React Class Component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rclass&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u547D\u4EE4</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import React, { Component } from &#39;react&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;class \${1:\${TM_FILENAME_BASE}} extends Component {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\trender() {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\treturn (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t\\t&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u521B\u5EFA React Class \u7EC4\u4EF6&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u521B\u5EFA React Function \u7EC4\u4EF6</span>
  <span class="token property">&quot;Create React Function Component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rfunh&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u547D\u4EE4</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import React, { useState, useEffect } from &#39;react&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function \${1:\${TM_FILENAME_BASE}}() {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const [$1] = useState()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\treturn (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t\\t&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u521B\u5EFA React Function \u7EC4\u4EF6&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u521B\u5EFA React Function Hooks \u7EC4\u4EF6</span>
  <span class="token property">&quot;Create React Function Hooks Component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rfun&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import React from &#39;react&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function \${1:\${TM_FILENAME_BASE}}() {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\treturn (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t\\t&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u521B\u5EFA React Function Hooks \u7EC4\u4EF6&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div>`,6);function p(o,e){return t}var r=s(a,[["render",p]]);export{r as default};
