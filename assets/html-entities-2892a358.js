import{d as T,n as d,b as m,cl as f,v,o as b,f as h,k as e,w as n,i as o,x as g,g as y,l as x,F as Y,y as k,m as z,z as E}from"./index-67b5d19e.js";import{_ as I}from"./FormItem-a1423b1e.js";import"./use-form-item-04c97352.js";const U={flex:"","justify-center":""},B={flex:"","justify-center":""},O=T({__name:"html-entities",setup(N){const s=d("<title>IT Tool</title>"),i=m(()=>f.escape(s.value)),{copy:w}=v({source:i}),a=d("&lt;title&gt;IT Tool&lt;/title&gt;"),c=m(()=>f.unescape(a.value)),{copy:C}=v({source:c});return(V,t)=>{const u=k,p=I,r=z,_=E;return b(),h(Y,null,[e(_,{title:"Escape html entities"},{default:n(()=>[e(p,{label:"Your string :"},{default:n(()=>[e(u,{value:o(s),"onUpdate:value":t[0]||(t[0]=l=>g(s)?s.value=l:null),multiline:"",placeholder:"The string to escape",rows:"3",autosize:"","raw-text":""},null,8,["value"])]),_:1}),e(p,{label:"Your string escaped :"},{default:n(()=>[e(u,{multiline:"",readonly:"",placeholder:"Your string escaped",value:o(i),rows:"3",autosize:""},null,8,["value"])]),_:1}),y("div",U,[e(r,{onClick:t[1]||(t[1]=l=>o(w)())},{default:n(()=>[x(" Copy ")]),_:1})])]),_:1}),e(_,{title:"Unescape html entities"},{default:n(()=>[e(p,{label:"Your escaped string :"},{default:n(()=>[e(u,{value:o(a),"onUpdate:value":t[2]||(t[2]=l=>g(a)?a.value=l:null),multiline:"",placeholder:"The string to unescape",rows:"3",autosize:"","raw-text":""},null,8,["value"])]),_:1}),e(p,{label:"Your string unescaped :"},{default:n(()=>[e(u,{value:o(c),multiline:"",readonly:"",placeholder:"Your string unescaped",rows:"3",autosize:""},null,8,["value"])]),_:1}),y("div",B,[e(r,{onClick:t[3]||(t[3]=l=>o(C)())},{default:n(()=>[x(" Copy ")]),_:1})])]),_:1})],64)}}});export{O as default};
