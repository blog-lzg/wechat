import{_ as a,y as n,x as s,W as p}from"./plugin-vue_export-helper.abe1cdd2.js";const b='{"title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6A21\u677F\u4E0E\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u6570\u636E\u7ED1\u5B9A","slug":"_1-\u6570\u636E\u7ED1\u5B9A"},{"level":3,"title":"1.\u5728 data \u4E2D\u5B9A\u4E49\u9875\u9762\u7684\u6570\u636E","slug":"_1-\u5728-data-\u4E2D\u5B9A\u4E49\u9875\u9762\u7684\u6570\u636E"},{"level":3,"title":"2.`Mustache` \u8BED\u6CD5\u7684\u683C\u5F0F","slug":"_2-mustache-\u8BED\u6CD5\u7684\u683C\u5F0F"},{"level":3,"title":"3.`Mustache `\u8BED\u6CD5\u7684\u5E94\u7528\u573A\u666F","slug":"_3-mustache-\u8BED\u6CD5\u7684\u5E94\u7528\u573A\u666F"},{"level":3,"title":"4.\u52A8\u6001\u7ED1\u5B9A\u5185\u5BB9","slug":"_4-\u52A8\u6001\u7ED1\u5B9A\u5185\u5BB9"},{"level":3,"title":"5.\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027","slug":"_5-\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027"}],"relativePath":"wechat/md2.md","lastUpdated":1651564124902}',e={},t=p(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6A21\u677F\u4E0E\u914D\u7F6E" tabindex="-1">\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6A21\u677F\u4E0E\u914D\u7F6E <a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6A21\u677F\u4E0E\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="_1-\u6570\u636E\u7ED1\u5B9A" tabindex="-1">1.\u6570\u636E\u7ED1\u5B9A <a class="header-anchor" href="#_1-\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a></h2><p>\u6570\u636E\u7ED1\u5B9A\u57FA\u672C\u539F\u5219</p><ul><li>\u5728 data \u4E2D\u5B9A\u4E49\u6570\u636E</li><li>\u5728 <code>WXML</code> \u4E2D\u4F7F\u7528\u6570\u636E</li></ul><h3 id="_1-\u5728-data-\u4E2D\u5B9A\u4E49\u9875\u9762\u7684\u6570\u636E" tabindex="-1">1.\u5728 data \u4E2D\u5B9A\u4E49\u9875\u9762\u7684\u6570\u636E <a class="header-anchor" href="#_1-\u5728-data-\u4E2D\u5B9A\u4E49\u9875\u9762\u7684\u6570\u636E" aria-hidden="true">#</a></h3><p>\u5728\u9875\u9762\u5BF9\u5E94\u7684<code>.js</code>\u6587\u4EF6\u4E2D\uFF0C\u628A\u6570\u636E\u5B9A\u4E49\u5230 data \u5BF9\u8C61\u4E2D\u5373\u53EF\uFF1A</p><div class="language-javascript line-numbers-mode"><pre><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// \u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;init data&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6570\u7EC4\u7C7B\u578B\u7684\u6570\u636E</span>
        <span class="token literal-property property">msgList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-mustache-\u8BED\u6CD5\u7684\u683C\u5F0F" tabindex="-1">2.<code>Mustache</code> \u8BED\u6CD5\u7684\u683C\u5F0F <a class="header-anchor" href="#_2-mustache-\u8BED\u6CD5\u7684\u683C\u5F0F" aria-hidden="true">#</a></h3><p>\u628Adata\u4E2D\u7684\u6570\u636E\u7ED1\u5B9A\u5230\u9875\u9762\u4E2D\u6E32\u67D3\uFF0C\u4F7F\u7528 Mustache \u8BED\u6CD5\uFF08\u53CC\u5927\u62EC\u53F7\uFF09\u5C06\u53D8\u91CF\u5305\u8D77\u6765\u5373\u53EF\u3002\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{ \u8981\u7ED1\u5B9A\u7684\u6570\u636E\u540D\u79F0 }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_3-mustache-\u8BED\u6CD5\u7684\u5E94\u7528\u573A\u666F" tabindex="-1">3.<code>Mustache </code>\u8BED\u6CD5\u7684\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#_3-mustache-\u8BED\u6CD5\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h3><p>Mustache \u8BED\u6CD5\u7684\u4E3B\u8981\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A</p><ul><li>\u7ED1\u5B9A\u5185\u5BB9</li><li>\u7ED1\u5B9A\u5C5E\u6027</li><li>\u8FD0\u7B97\uFF08\u4E09\u5143\u8FD0\u7B97\u3001\u7B97\u672F\u8FD0\u7B97\u7B49\uFF09</li></ul><h3 id="_4-\u52A8\u6001\u7ED1\u5B9A\u5185\u5BB9" tabindex="-1">4.\u52A8\u6001\u7ED1\u5B9A\u5185\u5BB9 <a class="header-anchor" href="#_4-\u52A8\u6001\u7ED1\u5B9A\u5185\u5BB9" aria-hidden="true">#</a></h3><p>\u9875\u9762\u7684\u6570\u636E\u5982\u4E0B\uFF1A</p><div class="language-javascript line-numbers-mode"><pre><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// \u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;init data&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6570\u7EC4\u7C7B\u578B\u7684\u6570\u636E</span>
        <span class="token literal-property property">msgList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u9875\u9762\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-javascript line-numbers-mode"><pre><code><span class="token operator">&lt;</span>view<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> info <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_5-\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" tabindex="-1">5.\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027 <a class="header-anchor" href="#_5-\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" aria-hidden="true">#</a></h3><p>\u9875\u9762\u7684\u6570\u636E\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">imgSrc</span><span class="token operator">:</span><span class="token string">&#39;\u56FE\u7247\u8DEF\u5F84&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9875\u9762\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgSrc}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,23),o=[t];function l(c,r,i,u,d,k){return s(),n("div",null,o)}var h=a(e,[["render",l]]);export{b as __pageData,h as default};
