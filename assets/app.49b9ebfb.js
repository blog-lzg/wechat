import{i as D,c as tt,e as nt,a as st,b as ot,d as rt,f as Ce,h as Ae,g as at,j as it,k as ct,l as Pe,m as lt,s as ut,r as dt,n as h,o as Te,p as ft,q as G,t as pt,w as ht,u as $,v as I,_ as L,x as d,y as p,z as l,A as b,B as te,C as A,D as f,E as Re,F as C,G as Ne,H as Ie,I as He,J as q,K as F,L as M,M as W,N as ne,O as g,P as k,Q as B,R as _t,S as Be,T as X,U as le,V as P}from"./plugin-vue_export-helper.abe1cdd2.js";const vt="modulepreload",ue={},mt="/wechat/",Y=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${mt}${s}`,s in ue)return;ue[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":vt,o||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),o)return new Promise((i,c)=>{r.addEventListener("load",i),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},gt="http://www.w3.org/2000/svg",N=typeof document!="undefined"?document:null,de=N&&N.createElement("template"),bt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?N.createElementNS(gt,e):N.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>N.createTextNode(e),createComment:e=>N.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>N.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,a){const r=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{de.innerHTML=s?`<svg>${e}</svg>`:e;const i=de.content;if(s){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $t(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wt(e,t,n){const s=e.style,o=D(n);if(n&&!o){for(const a in n)Q(s,a,n[a]);if(t&&!D(t))for(const a in t)n[a]==null&&Q(s,a,"")}else{const a=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const fe=/\s*!important$/;function Q(e,t,n){if(Ce(n))n.forEach(s=>Q(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=kt(e,t);fe.test(n)?e.setProperty(Ae(s),n.replace(fe,""),"important"):e[s]=n}}const pe=["Webkit","Moz","ms"],K={};function kt(e,t){const n=K[t];if(n)return n;let s=at(t);if(s!=="filter"&&s in e)return K[t]=s;s=it(s);for(let o=0;o<pe.length;o++){const a=pe[o]+s;if(a in e)return K[t]=a}return t}const he="http://www.w3.org/1999/xlink";function Lt(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(he,t.slice(6,t.length)):e.setAttributeNS(he,t,n);else{const a=ct(t);n==null||a&&!Pe(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function xt(e,t,n,s,o,a,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Pe(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[Oe,yt]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Z=0;const St=Promise.resolve(),Et=()=>{Z=0},Ct=()=>Z||(St.then(Et),Z=Oe());function At(e,t,n,s){e.addEventListener(t,n,s)}function Pt(e,t,n,s){e.removeEventListener(t,n,s)}function Tt(e,t,n,s,o=null){const a=e._vei||(e._vei={}),r=a[t];if(s&&r)r.value=s;else{const[i,c]=Rt(t);if(s){const u=a[t]=Nt(s,o);At(e,i,u,c)}else r&&(Pt(e,i,r,c),a[t]=void 0)}}const _e=/(?:Once|Passive|Capture)$/;function Rt(e){let t;if(_e.test(e)){t={};let n;for(;n=e.match(_e);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ae(e.slice(2)),t]}function Nt(e,t){const n=s=>{const o=s.timeStamp||Oe();(yt||o>=n.attached-1)&&lt(It(s,n.value),t,5,[s])};return n.value=e,n.attached=Ct(),n}function It(e,t){if(Ce(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const ve=/^on[a-z]/,Ht=(e,t,n,s,o=!1,a,r,i,c)=>{t==="class"?$t(e,s,o):t==="style"?wt(e,n,s):st(t)?ot(t)||Tt(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bt(e,t,s,o))?xt(e,t,s,a,r,i,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Lt(e,t,s,o))};function Bt(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ve.test(t)&&rt(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ve.test(t)&&D(n)?!1:t in e}const Ot=nt({patchProp:Ht},bt);let V,me=!1;function Dt(){return V=me?V:tt(Ot),me=!0,V}const Mt=(...e)=>{const t=Dt().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ut(s);if(o)return n(o,!0,o instanceof SVGElement)},t};function Ut(e){return D(e)?document.querySelector(e):e}var jt='{"lang":"en-US","title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","description":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6587\u6863","base":"/wechat/","head":[],"themeConfig":{"docsDir":"docs","editLinks":true,"editLinkText":"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875","lastUpdated":"\u4E0A\u6B21\u66F4\u65B0","notFound":["\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709","\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u6765\u4E86\uFF1F","\u8FD9\u662F\u4E00\u4E2A 404 \u9875\u9762","\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5"],"backToHome":"\u8FD4\u56DE\u9996\u9875","algolia":{"apiKey":"c57105e511faa5558547599f120ceeba","indexName":"vitepress"},"nav":[{"text":"Guide","link":"/","activeMatch":"^/$|^/guide/"},{"text":"Config Reference","link":"/config/basics","activeMatch":"^/config/"}],"sidebar":{"/":[{"text":"wechat","link":"/wechat/mds","children":[{"text":"1.\u8D77\u6B65","link":"/wechat/md1.html"}]}]}},"locales":{},"langs":{}}';const De=/^https?:/i,S=typeof window!="undefined";function qt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function ge(e,t){const n=qt(t,Object.keys(e));return n?e[n]:void 0}function Ft(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function Wt(e,t){t=zt(e,t);const n=ge(e.locales||{},t),s=ge(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:Ft(e)})}function zt(e,t){if(!S)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const Me=Symbol(),se=ut(Gt(jt));function Gt(e){return dt(JSON.parse(e))}function Kt(e){const t=h(()=>Wt(se.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(a=>n[a].lang===s);return H(o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function E(){const e=Te(Me);if(!e)throw new Error("vitepress data not properly injected in app");return e}function Vt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function H(e){return De.test(e)?e:Vt(se.value.base,e)}function Ue(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),S){const n="/wechat/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const je=Symbol(),be="http://a.com",Jt=()=>({path:"/",component:null,data:null});function Xt(e,t){const n=ft(Jt());function s(r=S?location.href:"/"){const i=new URL(r,be);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",r=i.pathname+i.search+i.hash),S&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",r)),a(r)}let o=null;async function a(r,i=0){const c=new URL(r,be),u=o=c.pathname;try{let _=e(u);if("then"in _&&typeof _.then=="function"&&(_=await _),o===u){o=null;const{default:v,__pageData:x}=_;if(!v)throw new Error(`Invalid route component: ${v}`);n.path=u,n.component=G(v),n.data=G(JSON.parse(x)),S&&pt(()=>{if(c.hash&&!i){let w=null;try{w=document.querySelector(decodeURIComponent(c.hash))}catch(y){console.warn(y)}if(w){$e(w,c.hash);return}}window.scrollTo(0,i)})}}catch(_){_.message.match(/fetch/)||console.error(_),o===u&&(o=null,n.path=u,n.component=t?G(t):null)}}return S&&(window.addEventListener("click",r=>{const i=r.target.closest("a");if(i){const{href:c,protocol:u,hostname:_,pathname:v,hash:x,target:w}=i,y=window.location,R=v.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&w!=="_blank"&&u===y.protocol&&_===y.hostname&&!(R&&R[0]!==".html")&&(r.preventDefault(),v===y.pathname?x&&x!==y.hash&&(history.pushState(null,"",x),window.dispatchEvent(new Event("hashchange")),$e(i,x,i.classList.contains("header-anchor"))):s(c))}},{capture:!0}),window.addEventListener("popstate",r=>{a(location.href,r.state&&r.state.scrollPosition||0)}),window.addEventListener("hashchange",r=>{r.preventDefault()})),{route:n,go:s}}function Yt(){const e=Te(je);if(!e)throw new Error("useRouter() is called without provider.");return e}function T(){return Yt().route}function $e(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(s){const o=s.offsetTop;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}function Qt(e,t){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const r=[],i=Math.min(n.length,a.length);for(let c=0;c<i;c++){let u=n[c];const[_,v,x=""]=a[c];if(u.tagName.toLocaleLowerCase()===_){for(const w in v)u.getAttribute(w)!==v[w]&&u.setAttribute(w,v[w]);for(let w=0;w<u.attributes.length;w++){const y=u.attributes[w].name;y in v||u.removeAttribute(y)}u.innerHTML!==x&&(u.innerHTML=x)}else document.head.removeChild(u),u=we(a[c]),document.head.append(u);r.push(u)}n.slice(i).forEach(c=>document.head.removeChild(c)),a.slice(i).forEach(c=>{const u=we(c);document.head.appendChild(u),r.push(u)}),n=r};ht(()=>{const a=e.data,r=t.value,i=a&&a.title,c=a&&a.description,u=a&&a.frontmatter.head;document.title=(i?i+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",c||r.description),o([...u?en(u):[]])})}function we([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function Zt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function en(e){return e.filter(t=>!Zt(t))}const tn=$({name:"VitePressContent",setup(){const e=T();return()=>I("div",{style:{position:"relative"}},[e.component?I(e.component):null])}});const nn=/#.*$/,sn=/(index)?\.(md|html)$/,U=/\/$/,on=/^[a-z]+:/i;function oe(e){return Array.isArray(e)}function re(e){return on.test(e)}function rn(e,t){if(t===void 0)return!1;const n=ke(`/${e.data.relativePath}`),s=ke(t);return n===s}function ke(e){return decodeURI(e).replace(nn,"").replace(sn,"")}function an(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function ee(e){return/^\//.test(e)?e:`/${e}`}function qe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function cn(e){return e===!1||e==="auto"||oe(e)}function ln(e){return e.children!==void 0}function un(e){return oe(e)?e.length===0:!e}function ae(e,t){if(cn(e))return e;t=ee(t);for(const n in e)if(t.startsWith(ee(n)))return e[n];return"auto"}function Fe(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:qe(n.link)}),ln(n)&&(t=[...t,...Fe(n.children)]),t),[])}const dn=["href","aria-label"],fn=["src"],pn=$({setup(e){const{site:t,theme:n,localePath:s}=E();return(o,a)=>(d(),p("a",{class:"nav-bar-title",href:l(s),"aria-label":`${l(t).title}, back to home`},[l(n).logo?(d(),p("img",{key:0,class:"logo",src:l(H)(l(n).logo),alt:"Logo"},null,8,fn)):b("",!0),te(" "+A(l(t).title),1)],8,dn))}});var hn=L(pn,[["__scopeId","data-v-4a583abe"]]);function _n(){const{site:e,localePath:t,theme:n}=E();return h(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const r=T().path.replace(t.value,""),i=o.map(u=>({text:s[u].label,link:`${u}${r}`}));return{text:n.value.selectText||"Languages",items:i}})}const vn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function mn(){const{site:e}=E();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=gn(n);return{text:bn(s,t.repoLabel),link:s}})}function gn(e){return De.test(e)?e:`https://github.com/${e}`}function bn(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=vn.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function We(e){const t=T(),n=re(e.value.link);return{props:h(()=>{const o=Le(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(o);else{const r=Le(e.value.link);a=r==="/"?r===o:o.startsWith(r)}return{class:{active:a,isExternal:n},href:n?e.value.link:H(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function Le(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const $n={},wn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},kn=f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Ln=f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),xn=[kn,Ln];function yn(e,t){return d(),p("svg",wn,xn)}var ie=L($n,[["render",yn]]);const Sn={class:"nav-link"},En=$({props:{item:null},setup(e){const n=Re(e),{props:s,isExternal:o}=We(n.item);return(a,r)=>(d(),p("div",Sn,[f("a",Ne({class:"item"},l(s)),[te(A(e.item.text)+" ",1),l(o)?(d(),C(ie,{key:0})):b("",!0)],16)]))}});var xe=L(En,[["__scopeId","data-v-b8818f8c"]]);const Cn=e=>(Ie("data-v-bbc27490"),e=e(),He(),e),An={class:"nav-dropdown-link-item"},Pn=Cn(()=>f("span",{class:"arrow"},null,-1)),Tn={class:"text"},Rn={class:"icon"},Nn=$({props:{item:null},setup(e){const n=Re(e),{props:s,isExternal:o}=We(n.item);return(a,r)=>(d(),p("div",An,[f("a",Ne({class:"item"},l(s)),[Pn,f("span",Tn,A(e.item.text),1),f("span",Rn,[l(o)?(d(),C(ie,{key:0})):b("",!0)])],16)]))}});var In=L(Nn,[["__scopeId","data-v-bbc27490"]]);const Hn=["aria-label"],Bn={class:"button-text"},On={class:"dialog"},Dn=$({props:{item:null},setup(e){const t=T(),n=q(!1);F(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(d(),p("div",{class:M(["nav-dropdown-link",{open:n.value}])},[f("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[f("span",Bn,A(e.item.text),1),f("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,Hn),f("ul",On,[(d(!0),p(W,null,ne(e.item.items,r=>(d(),p("li",{key:r.text,class:"dialog-item"},[g(In,{item:r},null,8,["item"])]))),128))])],2))}});var ye=L(Dn,[["__scopeId","data-v-56bf3a3f"]]);const Mn={key:0,class:"nav-links"},Un={key:1,class:"item"},jn={key:2,class:"item"},qn=$({setup(e){const{theme:t}=E(),n=_n(),s=mn(),o=h(()=>t.value.nav||s.value||n.value);return(a,r)=>l(o)?(d(),p("nav",Mn,[l(t).nav?(d(!0),p(W,{key:0},ne(l(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),C(ye,{key:0,item:i},null,8,["item"])):(d(),C(xe,{key:1,item:i},null,8,["item"]))]))),128)):b("",!0),l(n)?(d(),p("div",Un,[g(ye,{item:l(n)},null,8,["item"])])):b("",!0),l(s)?(d(),p("div",jn,[g(xe,{item:l(s)},null,8,["item"])])):b("",!0)])):b("",!0)}});var ze=L(qn,[["__scopeId","data-v-eab3edfe"]]);const Fn={emits:["toggle"]},Wn=f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),zn=[Wn];function Gn(e,t,n,s,o,a){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=r=>e.$emit("toggle"))},zn)}var Kn=L(Fn,[["render",Gn]]);const Vn=e=>(Ie("data-v-675d8756"),e=e(),He(),e),Jn={class:"nav-bar"},Xn=Vn(()=>f("div",{class:"flex-grow"},null,-1)),Yn={class:"nav"},Qn=$({emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",Jn,[g(Kn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),g(hn),Xn,f("div",Yn,[g(ze)]),k(t.$slots,"search",{},void 0,!0)]))}});var Zn=L(Qn,[["__scopeId","data-v-675d8756"]]);function es(){let e=null,t=null;const n=rs(s,300);function s(){const r=ts(),i=ns(r);for(let c=0;c<i.length;c++){const u=i[c],_=i[c+1],[v,x]=os(c,u,_);if(v){history.replaceState(null,document.title,x||" "),o(x);return}}}function o(r){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${r}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function a(r){r&&r.classList.remove("active")}B(()=>{s(),window.addEventListener("scroll",n)}),_t(()=>{o(decodeURIComponent(location.hash))}),Be(()=>{window.removeEventListener("scroll",n)})}function ts(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ns(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function ss(){return document.querySelector(".nav-bar").offsetHeight}function Se(e){const t=ss();return e.parentElement.offsetTop-t-15}function os(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Se(t)?[!1,null]:!n||s<Se(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function rs(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function as(){const e=T(),{site:t}=E();return es(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Ee(n,o);const a=ae(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?Ee(n,o):a})}function Ee(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:a,slug:r})=>{if(o-1>t)return;const i={text:a,link:`#${r}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const Ge=e=>{const t=T(),{site:n,frontmatter:s}=E(),o=e.depth||1,a=s.value.sidebarDepth||1/0,r=t.data.headers,i=e.item.text,c=is(n.value.base,e.item.link),u=e.item.children,_=rn(t,e.item.link),v=o<a?Ke(_,u,r,o+1):null;return I("li",{class:"sidebar-link"},[I(c?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:c},i),v])};function is(e,t){return t===void 0||t.startsWith("#")?t:an(e,t)}function Ke(e,t,n,s=1){return t&&t.length>0?I("ul",{class:"sidebar-links"},t.map(o=>I(Ge,{item:o,depth:s}))):e&&n?Ke(!1,cs(n),void 0,s):null}function cs(e){return Ve(ls(e))}function ls(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ve(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ve(t.children):void 0}))}const us={key:0,class:"sidebar-links"},ds=$({setup(e){const t=as();return(n,s)=>l(t).length>0?(d(),p("ul",us,[(d(!0),p(W,null,ne(l(t),o=>(d(),C(l(Ge),{item:o},null,8,["item"]))),256))])):b("",!0)}});const fs=$({props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:M(["sidebar",{open:e.open}])},[g(ze,{class:"nav"}),k(t.$slots,"sidebar-top",{},void 0,!0),g(ds),k(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var ps=L(fs,[["__scopeId","data-v-83e92a68"]]);const hs=/bitbucket.org/;function _s(){const{page:e,theme:t,frontmatter:n}=E(),s=h(()=>{const{repo:a,docsDir:r="",docsBranch:i="master",docsRepo:c=a,editLinks:u}=t.value,_=n.value.editLink!=null?n.value.editLink:u,{relativePath:v}=e.value;return!_||!v||!a?null:vs(a,c,r,i,v)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function vs(e,t,n,s,o){return hs.test(e)?gs(e,t,n,s,o):ms(e,t,n,s,o)}function ms(e,t,n,s,o){return(re(t)?t:`https://github.com/${t}`).replace(U,"")+`/edit/${s}/`+(n?n.replace(U,"")+"/":"")+o}function gs(e,t,n,s,o){return(re(t)?t:e).replace(U,"")+`/src/${s}/`+(n?n.replace(U,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const bs={class:"edit-link"},$s=["href"],ws=$({setup(e){const{url:t,text:n}=_s();return(s,o)=>(d(),p("div",bs,[l(t)?(d(),p("a",{key:0,class:"link",href:l(t),target:"_blank",rel:"noopener noreferrer"},[te(A(l(n))+" ",1),g(ie,{class:"icon"})],8,$s)):b("",!0)]))}});var ks=L(ws,[["__scopeId","data-v-1ed99556"]]);const Ls={key:0,class:"last-updated"},xs={class:"prefix"},ys={class:"datetime"},Ss=$({setup(e){const{theme:t,page:n}=E(),s=h(()=>{const r=t.value.lastUpdated;return r!==void 0&&r!==!1}),o=h(()=>{const r=t.value.lastUpdated;return r===!0?"Last Updated":r}),a=q("");return B(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(r,i)=>l(s)?(d(),p("p",Ls,[f("span",xs,A(l(o))+":",1),f("span",ys,A(a.value),1)])):b("",!0)}});var Es=L(Ss,[["__scopeId","data-v-5797b537"]]);const Cs={class:"page-footer"},As={class:"edit"},Ps={class:"updated"},Ts=$({setup(e){return(t,n)=>(d(),p("footer",Cs,[f("div",As,[g(ks)]),f("div",Ps,[g(Es)])]))}});var Rs=L(Ts,[["__scopeId","data-v-fb8d84c6"]]);function Ns(){const{page:e,theme:t}=E(),n=h(()=>qe(ee(e.value.relativePath))),s=h(()=>{const c=ae(t.value.sidebar,n.value);return oe(c)?Fe(c):[]}),o=h(()=>s.value.findIndex(c=>c.link===n.value)),a=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),r=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=h(()=>!!a.value||!!r.value);return{next:a,prev:r,hasLinks:i}}const Is={},Hs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Bs=f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Os=[Bs];function Ds(e,t){return d(),p("svg",Hs,Os)}var Ms=L(Is,[["render",Ds]]);const Us={},js={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},qs=f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Fs=[qs];function Ws(e,t){return d(),p("svg",js,Fs)}var zs=L(Us,[["render",Ws]]);const Gs={key:0,class:"next-and-prev-link"},Ks={class:"container"},Vs={class:"prev"},Js=["href"],Xs={class:"text"},Ys={class:"next"},Qs=["href"],Zs={class:"text"},eo=$({setup(e){const{hasLinks:t,prev:n,next:s}=Ns();return(o,a)=>l(t)?(d(),p("div",Gs,[f("div",Ks,[f("div",Vs,[l(n)?(d(),p("a",{key:0,class:"link",href:l(H)(l(n).link)},[g(Ms,{class:"icon icon-prev"}),f("span",Xs,A(l(n).text),1)],8,Js)):b("",!0)]),f("div",Ys,[l(s)?(d(),p("a",{key:0,class:"link",href:l(H)(l(s).link)},[f("span",Zs,A(l(s).text),1),g(zs,{class:"icon icon-next"})],8,Qs)):b("",!0)])])])):b("",!0)}});var to=L(eo,[["__scopeId","data-v-38ede35f"]]);const no={class:"page"},so={class:"container"},oo=$({setup(e){return(t,n)=>{const s=X("Content");return d(),p("main",no,[f("div",so,[k(t.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(Rs),g(to),k(t.$slots,"bottom",{},void 0,!0)])])}}});var ro=L(oo,[["__scopeId","data-v-7eddb2c4"]]);const ao={key:0,id:"ads-container"},io=$({setup(e){const t=le(()=>Y(()=>import("./Home.6306a1ca.js"),["assets/Home.6306a1ca.js","assets/plugin-vue_export-helper.abe1cdd2.js"])),n=()=>null,s=n,o=n,a=le(()=>Y(()=>import("./AlgoliaSearchBox.c78df1ea.js"),["assets/AlgoliaSearchBox.c78df1ea.js","assets/plugin-vue_export-helper.abe1cdd2.js"])),r=T(),{site:i,page:c,theme:u,frontmatter:_}=E(),v=h(()=>!!_.value.customLayout),x=h(()=>!!_.value.home),w=h(()=>Object.keys(i.value.langs).length>1),y=h(()=>{const m=u.value;return _.value.navbar===!1||m.navbar===!1?!1:i.value.title||m.logo||m.repo||m.nav}),R=q(!1),Xe=h(()=>_.value.home||_.value.sidebar===!1?!1:!un(ae(u.value.sidebar,r.data.relativePath))),z=m=>{R.value=typeof m=="boolean"?m:!R.value},Ye=z.bind(null,!1);F(r,Ye);const Qe=h(()=>[{"no-navbar":!y.value,"sidebar-open":R.value,"no-sidebar":!Xe.value}]);return(m,ce)=>{const Ze=X("Content"),et=X("Debug");return d(),p(W,null,[f("div",{class:M(["theme",l(Qe)])},[l(y)?(d(),C(Zn,{key:0,onToggle:z},{search:P(()=>[k(m.$slots,"navbar-search",{},()=>[l(u).algolia?(d(),C(l(a),{key:0,options:l(u).algolia,multilang:l(w)},null,8,["options","multilang"])):b("",!0)])]),_:3})):b("",!0),g(ps,{open:R.value},{"sidebar-top":P(()=>[k(m.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[k(m.$slots,"sidebar-bottom")]),_:3},8,["open"]),f("div",{class:"sidebar-mask",onClick:ce[0]||(ce[0]=Lo=>z(!1))}),l(v)?(d(),C(Ze,{key:1})):l(x)?k(m.$slots,"home",{key:2},()=>[g(l(t),null,{hero:P(()=>[k(m.$slots,"home-hero")]),features:P(()=>[k(m.$slots,"home-features")]),footer:P(()=>[k(m.$slots,"home-footer")]),_:3})]):(d(),C(ro,{key:3},{top:P(()=>[k(m.$slots,"page-top-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.carbon?(d(),p("div",ao,[(d(),C(l(s),{key:"carbon"+l(c).relativePath,code:l(u).carbonAds.carbon,placement:l(u).carbonAds.placement},null,8,["code","placement"]))])):b("",!0)]),k(m.$slots,"page-top")]),bottom:P(()=>[k(m.$slots,"page-bottom"),k(m.$slots,"page-bottom-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.custom?(d(),C(l(o),{key:"custom"+l(c).relativePath,code:l(u).carbonAds.custom,placement:l(u).carbonAds.placement},null,8,["code","placement"])):b("",!0)])]),_:3}))],2),g(et)],64)}}}),co={class:"theme"},lo=f("h1",null,"404",-1),uo=["href"],fo=$({setup(e){const{site:t}=E(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,a)=>(d(),p("div",co,[lo,f("blockquote",null,A(s()),1),f("a",{href:l(t).base,"aria-label":"go to home"},"Take me home.",8,uo)]))}}),j={Layout:io,NotFound:fo};const J=new Set,Je=()=>document.createElement("link"),po=e=>{const t=Je();t.rel="prefetch",t.href=e,document.head.appendChild(t)},ho=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let O;const _o=S&&(O=Je())&&O.relList&&O.relList.supports&&O.relList.supports("prefetch")?po:ho;function vo(){if(!S||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(r=>{if(r.isIntersecting){const i=r.target;n.unobserve(i);const{pathname:c}=i;if(!J.has(c)){J.add(c);const u=Ue(c);_o(u)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:r,hostname:i,pathname:c}=a,u=c.match(/\.\w+$/);u&&u[0]!==".html"||r!=="_blank"&&i===location.hostname&&(c!==location.pathname?n.observe(a):J.add(c))})})};B(s);const o=T();F(()=>o.path,s),Be(()=>{n&&n.disconnect()})}const mo=$({setup(e,{slots:t}){const n=q(!1);return B(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),go=j.NotFound||(()=>"404 Not Found"),bo={name:"VitePressApp",setup(){const{site:e}=E();return B(()=>{F(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),vo(),()=>I(j.Layout)}};function $o(){const e=ko(),t=wo();t.provide(je,e);const n=Kt(e.route);return t.provide(Me,n),S&&Qt(e.route,n.site),t.component("Content",tn),t.component("ClientOnly",mo),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),j.enhanceApp&&j.enhanceApp({app:t,router:e,siteData:se}),{app:t,router:e}}function wo(){return Mt(bo)}function ko(){let e=S,t;return Xt(n=>{let s=Ue(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),S?(e=!1,Y(()=>import(s),[])):require(s)},go)}if(S){const{app:e,router:t}=$o();t.go().then(()=>{e.mount("#app")})}export{xe as N,T as a,Yt as b,$o as createApp,E as u,H as w};
