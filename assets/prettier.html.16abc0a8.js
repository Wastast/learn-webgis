import{_ as a,o as n,c as s,d as e}from"./app.559f79f4.js";const t={},o=e(`<h1 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h1><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li>通过 <code>npm</code> 或 <code>yarn</code> 等包管理工具下载 <code>prettier</code> 配合 <code>eslint</code> 使用</li><li>在文件根目录中创建 <code>.prettierrc</code> 文件，配合 vscode 使用</li></ol><h2 id="规则说明" tabindex="-1"><a class="header-anchor" href="#规则说明" aria-hidden="true">#</a> 规则说明</h2><h3 id="print-width" tabindex="-1"><a class="header-anchor" href="#print-width" aria-hidden="true">#</a> Print Width</h3><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token comment">// 指定自动换行的长度，默认为 80</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="tab-width" tabindex="-1"><a class="header-anchor" href="#tab-width" aria-hidden="true">#</a> Tab Width</h3><p>指定每个缩进级别的空格数，默认为两个空格</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="usetabs" tabindex="-1"><a class="header-anchor" href="#usetabs" aria-hidden="true">#</a> UseTabs</h3><p>用 tab 键代替空格缩进，默认值为 false</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="semi" tabindex="-1"><a class="header-anchor" href="#semi" aria-hidden="true">#</a> Semi</h3><p>在语句的末尾是否自动添加分号，默认值为 true</p><blockquote><p>true 在每个语句的默认添加一个分号</p><p>false 只在可能导致 ASI 失败的行开头添加分号</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="quote" tabindex="-1"><a class="header-anchor" href="#quote" aria-hidden="true">#</a> Quote</h3><p>是否使用单引号，代替双引号，默认值为 false</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;quote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="quote-props" tabindex="-1"><a class="header-anchor" href="#quote-props" aria-hidden="true">#</a> Quote Props</h3><p>当对象中的属性是 <code>quote</code> 时启用，默认为 <code>as-needed</code></p><blockquote><p>as-needed 只在需要的对象属性周围添加引号。</p><p>consistent 如果对象中至少有一个属性需要引用，则需要引用所有属性</p><p>preserve 对象属性中引号的输入使用</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;quoteProps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="jsx-quotes" tabindex="-1"><a class="header-anchor" href="#jsx-quotes" aria-hidden="true">#</a> JSX Quotes</h3><p>在 JSX 中使用单引号而不是双引号，默认为 false</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="trailing-commas" tabindex="-1"><a class="header-anchor" href="#trailing-commas" aria-hidden="true">#</a> Trailing Commas</h3><p>在多行逗号分隔的语法结构中，尽可能打印尾随逗号。默认为 <code>es5</code></p><blockquote><p>es5 尾随逗号在 ES5 中有效(对象，数组等)。在 TS 中，类型参数中没有后面的逗号</p><p>none 不会添加逗号。</p><p>all 尽可能以逗号结尾</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="bracket-spacing" tabindex="-1"><a class="header-anchor" href="#bracket-spacing" aria-hidden="true">#</a> Bracket Spacing</h3><p>在对象字面量的括号之间打印空格，默认为 true</p><blockquote><p>true -- <code>{ isBool: true }</code> false --- <code>{isBool:true}</code></p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="bracket-line" tabindex="-1"><a class="header-anchor" href="#bracket-line" aria-hidden="true">#</a> Bracket Line</h3><p>将多行 HTML 元素的 <code>&gt;</code> 放在最后一行的末尾，而不是单独放在下一行(不适用于自关闭元素，比如 img)</p><p><strong>true</strong></p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
&lt;button
  className=&quot;prettier-class&quot;
  id=&quot;prettier-id&quot;
  onClick=&quot;{this.handleClick}&quot;&gt;
  Click Here
&lt;/button&gt;
--&gt;</span>
</code></pre></div><p><strong>false</strong></p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prettier-class<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prettier-id<span class="token punctuation">&quot;</span></span>
  <span class="token special-attr"><span class="token attr-name">onClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&quot;</span></span></span>
<span class="token punctuation">&gt;</span></span>
  Click Here
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="arrow-function-parentheses" tabindex="-1"><a class="header-anchor" href="#arrow-function-parentheses" aria-hidden="true">#</a> Arrow Function Parentheses</h3><p>在只有一个参数的箭头函数时候包含圆括号</p><blockquote><p>always 总是包含括号 (x) =&gt; x</p><p>avoid 尽可能省略括号：x =&gt; x</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> Range</h3><p>只格式文件的几个片段</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;rangeEnd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Infinity&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rangeStart&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> Parser</h3><p>指定要使用的解析器，会自动从输入文件路径判断采用的解析器</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="file-path" tabindex="-1"><a class="header-anchor" href="#file-path" aria-hidden="true">#</a> File Path</h3><p>指定要使用的文件名，以推断要使用哪个解析器</p><blockquote><p>该配置仅在 cli 和 API 中有效果。在配置文件中使用没有意义</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;filepath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="require-pragma" tabindex="-1"><a class="header-anchor" href="#require-pragma" aria-hidden="true">#</a> Require Pragma</h3><p>Prettier 可以限制自己只格式化在文件顶部包含特殊注释的文件。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;requirePragma&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="insert-pragma" tabindex="-1"><a class="header-anchor" href="#insert-pragma" aria-hidden="true">#</a> Insert Pragma</h3><p>Prettier 可以在文件顶部插入一个特殊的 <code>@format</code> 标记，指定该文件已使用 Prettier 进行格式化。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;insertPragma&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="prose-wrap" tabindex="-1"><a class="header-anchor" href="#prose-wrap" aria-hidden="true">#</a> Prose Wrap</h3><p>默认情况下，由于一些服务使用对换行敏感的渲染器，例如 GiuHub comments 和 BitBucket，因此 pretty 不会更改标记文本的换行。</p><blockquote><p>always 将散文包装的打印宽度</p><p>never 将散文都拆成一行</p><p>preserve 什么都不做</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="html-whitespace-sensitivity" tabindex="-1"><a class="header-anchor" href="#html-whitespace-sensitivity" aria-hidden="true">#</a> HTML Whitespace Sensitivity</h3><blockquote><p>css CSS display 属性的默认值。对于处理一样严格</p><p>strict 所有标记周围的空白(或没有空白)被认为是重要的</p><p>ignore 所有标记周围的空白(或没有空白)被认为是无关紧要的</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;htmlWhitespaceSensitivity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="vue-files-script-and-style-tags-indentation" tabindex="-1"><a class="header-anchor" href="#vue-files-script-and-style-tags-indentation" aria-hidden="true">#</a> Vue files script and style tags indentation</h3><p>是否缩进 Vue 文件中 <code>script</code> 和 <code>style</code> 标签内的代码，默认为 false</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vueIndentScriptAndStyle&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="end-of-line" tabindex="-1"><a class="header-anchor" href="#end-of-line" aria-hidden="true">#</a> End Of Line</h3><p>换行符格式</p><blockquote><p>lf 仅限换行(/n) Linux 的换行符</p><p>crlf 回车 + 换行字符(/r/n)，Windows 换行符</p><p>cr 只返回字符(/r)，很少使用]</p><p>auto 不修改，维持现状</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="embedded-language-formatting" tabindex="-1"><a class="header-anchor" href="#embedded-language-formatting" aria-hidden="true">#</a> Embedded Language Formatting</h3><p>控制 Prettier 是否格式化文件中嵌入的引用代码。</p><blockquote><p>auto 如果可以识别，则格式化嵌入的代码</p><p>off 永远不要自动格式化嵌入代码</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;embeddedLanguageFormatting&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="single-attribute-per-line" tabindex="-1"><a class="header-anchor" href="#single-attribute-per-line" aria-hidden="true">#</a> Single Attribute Per Line</h3><p>在 HTML、Vue 和 JSX 中强制每行使用单个属性，默认为 false</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;singleAttributePerLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div>`,82),p=[o];function c(r,l){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","prettier.html.vue"]]);export{u as default};
