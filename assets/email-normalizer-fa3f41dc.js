import{d,n as _,b as v,v as z,o as g,f as w,k as m,i as u,x as D,g as c,w as p,l as f,y as h,m as C}from"./index-67b5d19e.js";import{w as b}from"./defaults-4d6daddf.js";const k={"gmail.com":{removeDots:!0,stripPlus:!0},"googlemail.com":{removeDots:!0,stripPlus:!0,renameDomain:"gmail.com"},"hotmail.com":{removeDots:!1,stripPlus:!0},"live.com":{removeDots:!0,stripPlus:!0},"outlook.com":{removeDots:!1,stripPlus:!0}};function x({email:t}){if(!P({email:t}))throw new Error("Invalid email");const e=t.trim().toLowerCase(),[l,o]=e.split("@"),i=k[o];if(!i)return e;const{removeDots:a,stripPlus:r,renameDomain:s}=i,{normalizedIdentifier:n}=y({identifier:l,removeDots:a,stripPlus:r});return`${n}@${s??o}`}function y({identifier:t,removeDots:e,stripPlus:l}){let o=t;return e&&(o=o.replace(/\./g,"")),l&&(o=o.split("+")[0]),{normalizedIdentifier:o}}function P({email:t}){return typeof t!="string"?!1:t.trim().match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)!==null}const E=c("div",{class:"mb-2"}," Raw emails to normalize: ",-1),N=c("div",{class:"mb-2 mt-4"}," Normalized emails: ",-1),$={class:"mt-4 flex justify-center gap-2"},j=d({__name:"email-normalizer",setup(t){const e=_(""),l=v(()=>e.value?e.value.split(`
`).map(i=>b(()=>x({email:i}),`Unable to parse email: ${i}`)).join(`
`):""),{copy:o}=z({source:l,text:"Normalized emails copied to the clipboard",createToast:!0});return(i,a)=>{const r=h,s=C;return g(),w("div",null,[E,m(r,{value:u(e),"onUpdate:value":a[0]||(a[0]=n=>D(e)?e.value=n:null),placeholder:"Put your emails here (one per line)...",rows:"3",multiline:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",autofocus:"",monospace:""},null,8,["value"]),N,m(r,{value:u(l),placeholder:"Normalized emails will appear here...",rows:"3",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",multiline:"",readonly:"",monospace:""},null,8,["value"]),c("div",$,[m(s,{onClick:a[1]||(a[1]=n=>e.value="")},{default:p(()=>[f(" Clear emails ")]),_:1}),m(s,{disabled:!u(l),onClick:a[2]||(a[2]=n=>u(o)())},{default:p(()=>[f(" Copy normalized emails ")]),_:1},8,["disabled"])])])}}});export{j as default};
