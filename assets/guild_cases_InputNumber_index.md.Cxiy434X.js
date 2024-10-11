import{p as k,C as E,o as p,b as o,d as u,c as m,j as a,a as l,H as r,a1 as d}from"./chunks/framework.DioSGhIs.js";const b={__name:"case1",setup(h){const i=k(111222);return(s,t)=>{const n=E("mx-number");return p(),o(n,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e)},null,8,["modelValue"])}}},g={__name:"case2",setup(h){const i=k(2223333);return(s,t)=>{const n=E("mx-number");return p(),o(n,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),isCurrency:!0},null,8,["modelValue"])}}},F=JSON.parse('{"title":"MxNumber 数值输入框","description":"","frontmatter":{},"headers":[],"relativePath":"guild/cases/InputNumber/index.md","filePath":"guild/cases/InputNumber/index.md"}'),c={name:"guild/cases/InputNumber/index.md"},v=u({...c,setup(h){return(i,s)=>(p(),m("div",null,[s[0]||(s[0]=a("h1",{id:"mxnumber-数值输入框",tabindex:"-1"},[l("MxNumber 数值输入框 "),a("a",{class:"header-anchor",href:"#mxnumber-数值输入框","aria-label":'Permalink to "MxNumber 数值输入框"'},"​")],-1)),s[1]||(s[1]=a("p",null,[l("数值输入框，输入相关数值。 "),a("br")],-1)),s[2]||(s[2]=a("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s[3]||(s[3]=a("p",null,"输入数值内容",-1)),r(b),s[4]||(s[4]=d(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-number</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;numVal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> numVal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">111222</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details><h2 id="货币类型数值" tabindex="-1">货币类型数值 <a class="header-anchor" href="#货币类型数值" aria-label="Permalink to &quot;货币类型数值&quot;">​</a></h2><p>isCurrency 属性设置为 true 时，输入框中的值会做千分位的格式化展示</p>`,3)),r(g),s[5]||(s[5]=d(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-number</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;numVal&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :isCurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> numVal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2223333</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details><h2 id="component-api" tabindex="-1">Component API <a class="header-anchor" href="#component-api" aria-label="Permalink to &quot;Component API&quot;">​</a></h2><p>MxNumber 组件API可参考 Element-plus 中的组件文档：<a href="https://element-plus.org/zh-CN/component/input.html#api" target="_blank" rel="noreferrer">参考文档</a></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>allow</td><td>能否编辑</td><td>R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值</td><td>W</td></tr><tr><td>formatter</td><td>内容值的格式化方式</td><td>String</td><td>—</td></tr><tr><td>isCurrency</td><td>是否是货币类型的值，是的话则展示的值的显示格式不同</td><td>Boolean</td><td>false</td></tr><tr><td>suffix</td><td>输入框尾部的内容文本</td><td>String</td><td>—</td></tr><tr><td>isNegative</td><td>值是否为负数</td><td>Boolean</td><td>false</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>示例 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>类型 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table>`,9))]))}});export{F as __pageData,v as default};
