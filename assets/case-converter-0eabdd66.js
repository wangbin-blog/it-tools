import{d as P,n as R,b as U,o as p,c as C,w as k,k as E,at as b,i as g,x as T,f as y,h as F,F as Z,g as j,y as z,z as B}from"./index-67b5d19e.js";import{_ as S}from"./InputCopyable.vue_vue_type_script_setup_true_lang-2671dce2.js";var t=function(){return t=Object.assign||function(e){for(var r,l=1,n=arguments.length;l<n;l++){r=arguments[l];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},t.apply(this,arguments)};function D(a){return a.toLowerCase()}var N=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],O=/[^A-Z0-9]+/gi;function c(a,e){e===void 0&&(e={});for(var r=e.splitRegexp,l=r===void 0?N:r,n=e.stripRegexp,u=n===void 0?O:n,s=e.transform,m=s===void 0?D:s,o=e.delimiter,i=o===void 0?" ":o,f=h(h(a,l,"$1\0$2"),u,"\0"),d=0,_=f.length;f.charAt(d)==="\0";)d++;for(;f.charAt(_-1)==="\0";)_--;return f.slice(d,_).split("\0").map(m).join(i)}function h(a,e,r){return e instanceof RegExp?a.replace(e,r):e.reduce(function(l,n){return l.replace(n,r)},a)}function w(a,e){var r=a.charAt(0),l=a.substr(1).toLowerCase();return e>0&&r>="0"&&r<="9"?"_"+r+l:""+r.toUpperCase()+l}function L(a,e){return e===void 0&&(e={}),c(a,t({delimiter:"",transform:w},e))}function $(a,e){return e===0?a.toLowerCase():w(a,e)}function G(a,e){return e===void 0&&(e={}),L(a,t({transform:$},e))}function x(a){return a.charAt(0).toUpperCase()+a.substr(1)}function I(a){return x(a.toLowerCase())}function A(a,e){return e===void 0&&(e={}),c(a,t({delimiter:" ",transform:I},e))}function V(a){return a.toUpperCase()}function X(a,e){return e===void 0&&(e={}),c(a,t({delimiter:"_",transform:V},e))}function v(a,e){return e===void 0&&(e={}),c(a,t({delimiter:"."},e))}function Y(a,e){return e===void 0&&(e={}),A(a,t({delimiter:"-"},e))}function H(a,e){return e===void 0&&(e={}),v(a,t({delimiter:"-"},e))}function M(a,e){return e===void 0&&(e={}),v(a,t({delimiter:"/"},e))}function W(a,e){var r=a.toLowerCase();return e===0?x(r):r}function q(a,e){return e===void 0&&(e={}),c(a,t({delimiter:" ",transform:W},e))}function J(a,e){return e===void 0&&(e={}),v(a,t({delimiter:"_"},e))}const K=j("div",{"my-16px":"",divider:""},null,-1),ae=P({__name:"case-converter",setup(a){const e={stripRegexp:/[^A-Za-zÀ-ÖØ-öø-ÿ]+/gi},r=R("lorem ipsum dolor sit amet"),l=U(()=>[{label:"Lowercase:",value:r.value.toLocaleLowerCase()},{label:"Uppercase:",value:r.value.toLocaleUpperCase()},{label:"Camelcase:",value:G(r.value,e)},{label:"Capitalcase:",value:A(r.value,e)},{label:"Constantcase:",value:X(r.value,e)},{label:"Dotcase:",value:v(r.value,e)},{label:"Headercase:",value:Y(r.value,e)},{label:"Nocase:",value:c(r.value,e)},{label:"Paramcase:",value:H(r.value,e)},{label:"Pascalcase:",value:L(r.value,e)},{label:"Pathcase:",value:M(r.value,e)},{label:"Sentencecase:",value:q(r.value,e)},{label:"Snakecase:",value:J(r.value,e)},{label:"Mockingcase:",value:r.value.split("").map((u,s)=>s%2===0?u.toUpperCase():u.toLowerCase()).join("")}]),n={labelPosition:"left",labelWidth:"120px",labelAlign:"right"};return(u,s)=>{const m=z,o=B;return p(),C(o,null,{default:k(()=>[E(m,b({value:g(r),"onUpdate:value":s[0]||(s[0]=i=>T(r)?r.value=i:null),label:"Your string:",placeholder:"Your string...","raw-text":""},n),null,16,["value"]),K,(p(!0),y(Z,null,F(g(l),i=>(p(),C(S,b({key:i.label,value:i.value,label:i.label},n,{"mb-1":""}),null,16,["value","label"]))),128))]),_:1})}}});export{ae as default};
