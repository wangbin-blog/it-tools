import{o as l,f as o,a3 as c,d as i,a4 as s,a5 as n,k as f,i as e,D as g}from"./index-67b5d19e.js";const h={class:"markdown-body"},y=c('<h3>Normal characters</h3><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>.</code> or <code>[^\\n\\r]</code></td><td style="text-align:left;">any character <em>excluding</em> a newline or carriage return</td></tr><tr><td style="text-align:left;"><code>[A-Za-z]</code></td><td style="text-align:left;">alphabet</td></tr><tr><td style="text-align:left;"><code>[a-z]</code></td><td style="text-align:left;">lowercase alphabet</td></tr><tr><td style="text-align:left;"><code>[A-Z]</code></td><td style="text-align:left;">uppercase alphabet</td></tr><tr><td style="text-align:left;"><code>\\d</code> or <code>[0-9]</code></td><td style="text-align:left;">digit</td></tr><tr><td style="text-align:left;"><code>\\D</code> or <code>[^0-9]</code></td><td style="text-align:left;">non-digit</td></tr><tr><td style="text-align:left;"><code>_</code></td><td style="text-align:left;">underscore</td></tr><tr><td style="text-align:left;"><code>\\w</code> or <code>[A-Za-z0-9_]</code></td><td style="text-align:left;">alphabet, digit or underscore</td></tr><tr><td style="text-align:left;"><code>\\W</code> or <code>[^A-Za-z0-9_]</code></td><td style="text-align:left;">inverse of <code>\\w</code></td></tr><tr><td style="text-align:left;"><code>\\S</code></td><td style="text-align:left;">inverse of <code>\\s</code></td></tr></tbody></table><h3>Whitespace characters</h3><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code></code></td><td style="text-align:left;">space</td></tr><tr><td style="text-align:left;"><code>\\t</code></td><td style="text-align:left;">tab</td></tr><tr><td style="text-align:left;"><code>\\n</code></td><td style="text-align:left;">newline</td></tr><tr><td style="text-align:left;"><code>\\r</code></td><td style="text-align:left;">carriage return</td></tr><tr><td style="text-align:left;"><code>\\s</code></td><td style="text-align:left;">space, tab, newline or carriage return</td></tr></tbody></table><h3>Character set</h3><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[xyz]</code></td><td style="text-align:left;">either <code>x</code>, <code>y</code> or <code>z</code></td></tr><tr><td style="text-align:left;"><code>[^xyz]</code></td><td style="text-align:left;">neither <code>x</code>, <code>y</code> nor <code>z</code></td></tr><tr><td style="text-align:left;"><code>[1-3]</code></td><td style="text-align:left;">either <code>1</code>, <code>2</code> or <code>3</code></td></tr><tr><td style="text-align:left;"><code>[^1-3]</code></td><td style="text-align:left;">neither <code>1</code>, <code>2</code> nor <code>3</code></td></tr></tbody></table><ul><li>Think of a character set as an <code>OR</code> operation on the single characters that are enclosed between the square brackets.</li><li>Use <code>^</code> after the opening <code>[</code> to “negate” the character set.</li><li>Within a character set, <code>.</code> means a literal period.</li></ul><h3>Characters that require escaping</h3><h4>Outside a character set</h4><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>\\.</code></td><td style="text-align:left;">period</td></tr><tr><td style="text-align:left;"><code>\\^</code></td><td style="text-align:left;">caret</td></tr><tr><td style="text-align:left;"><code>\\$</code></td><td style="text-align:left;">dollar sign</td></tr><tr><td style="text-align:left;"><code>|</code></td><td style="text-align:left;">pipe</td></tr><tr><td style="text-align:left;"><code>\\\\</code></td><td style="text-align:left;">back slash</td></tr><tr><td style="text-align:left;"><code>\\/</code></td><td style="text-align:left;">forward slash</td></tr><tr><td style="text-align:left;"><code>\\(</code></td><td style="text-align:left;">opening bracket</td></tr><tr><td style="text-align:left;"><code>\\)</code></td><td style="text-align:left;">closing bracket</td></tr><tr><td style="text-align:left;"><code>\\[</code></td><td style="text-align:left;">opening square bracket</td></tr><tr><td style="text-align:left;"><code>\\]</code></td><td style="text-align:left;">closing square bracket</td></tr><tr><td style="text-align:left;"><code>\\{</code></td><td style="text-align:left;">opening curly bracket</td></tr><tr><td style="text-align:left;"><code>\\}</code></td><td style="text-align:left;">closing curly bracket</td></tr></tbody></table><h4>Inside a character set</h4><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>\\\\</code></td><td style="text-align:left;">back slash</td></tr><tr><td style="text-align:left;"><code>\\]</code></td><td style="text-align:left;">closing square bracket</td></tr></tbody></table><ul><li>A <code>^</code> must be escaped only if it occurs immediately after the opening <code>[</code> of the character set.</li><li>A <code>-</code> must be escaped only if it occurs between two alphabets or two digits.</li></ul><h3>Quantifiers</h3><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>{2}</code></td><td style="text-align:left;">exactly 2</td></tr><tr><td style="text-align:left;"><code>{2,}</code></td><td style="text-align:left;">at least 2</td></tr><tr><td style="text-align:left;"><code>{2,7}</code></td><td style="text-align:left;">at least 2 but no more than 7</td></tr><tr><td style="text-align:left;"><code>*</code></td><td style="text-align:left;">0 or more</td></tr><tr><td style="text-align:left;"><code>+</code></td><td style="text-align:left;">1 or more</td></tr><tr><td style="text-align:left;"><code>?</code></td><td style="text-align:left;">exactly 0 or 1</td></tr></tbody></table><ul><li>The quantifier goes <em>after</em> the expression to be quantified.</li></ul><h3>Boundaries</h3><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>^</code></td><td style="text-align:left;">start of string</td></tr><tr><td style="text-align:left;"><code>$</code></td><td style="text-align:left;">end of string</td></tr><tr><td style="text-align:left;"><code>\\b</code></td><td style="text-align:left;">word boundary</td></tr></tbody></table><ul><li>How word boundary matching works: <ul><li>At the beginning of the string if the first character is <code>\\w</code>.</li><li>Between two adjacent characters within the string, if the first character is <code>\\w</code> and the second character is <code>\\W</code>.</li><li>At the end of the string if the last character is <code>\\w</code>.</li></ul></li></ul><h3>Matching</h3><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>foo|bar</code></td><td style="text-align:left;">match either <code>foo</code> or <code>bar</code></td></tr><tr><td style="text-align:left;"><code>foo(?=bar)</code></td><td style="text-align:left;">match <code>foo</code> if it’s before <code>bar</code></td></tr><tr><td style="text-align:left;"><code>foo(?!bar)</code></td><td style="text-align:left;">match <code>foo</code> if it’s <em>not</em> before <code>bar</code></td></tr><tr><td style="text-align:left;"><code>(?&lt;=bar)foo</code></td><td style="text-align:left;">match <code>foo</code> if it’s after <code>bar</code></td></tr><tr><td style="text-align:left;"><code>(?&lt;!bar)foo</code></td><td style="text-align:left;">match <code>foo</code> if it’s <em>not</em> after <code>bar</code></td></tr></tbody></table><h3>Grouping and capturing</h3><table><thead><tr><th style="text-align:left;">Expression</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>(foo)</code></td><td style="text-align:left;">capturing group; match and capture <code>foo</code></td></tr><tr><td style="text-align:left;"><code>(?:foo)</code></td><td style="text-align:left;">non-capturing group; match <code>foo</code> but <em>without</em> capturing <code>foo</code></td></tr><tr><td style="text-align:left;"><code>(foo)bar\\1</code></td><td style="text-align:left;"><code>\\1</code> is a backreference to the 1st capturing group; match <code>foobarfoo</code></td></tr></tbody></table><ul><li>Capturing groups are only relevant in the following methods: <ul><li><code>string.match(regexp)</code></li><li><code>string.matchAll(regexp)</code></li><li><code>string.replace(regexp, callback)</code></li></ul></li><li><code>\\N</code> is a backreference to the <code>Nth</code> capturing group. Capturing groups are numbered starting from 1.</li></ul><h2>References and tools</h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">MDN</a></li><li><a href="https://leaverou.github.io/regexplained/">RegExplained</a></li></ul>',26),x=[y],b={__name:"regex-memo.content",setup(a,{expose:t}){return t({frontmatter:{}}),(r,m)=>(l(),o("div",h,x))}},p=b,u=i({__name:"regex-memo",setup(a){s(d=>({"58748f16":e(t).cardColor,"048b5790":e(t).textColor1}));const t=n();return(d,r)=>(l(),o("div",null,[f(e(p))]))}});const w=g(u,[["__scopeId","data-v-ed11f126"]]);export{w as default};
