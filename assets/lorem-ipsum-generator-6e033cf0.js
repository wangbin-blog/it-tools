import{cm as y,d as C,n as c,v as L,o as j,c as I,w as l,k as e,i as u,x as d,g as A,l as g,cn as h,y as U,m as $,z as S}from"./index-67b5d19e.js";import{c as T}from"./computedRefreshable-f2e403a2.js";import{_ as B}from"./Slider-baab50a0.js";import{_ as N}from"./FormItem-a1423b1e.js";import{_ as P}from"./Switch-39845b46.js";import"./use-form-item-04c97352.js";const R=["a","ac","accumsan","ad","adipiscing","aenean","aliquam","aliquet","amet","ante","aptent","arcu","at","auctor","bibendum","blandit","class","commodo","condimentum","congue","consectetur","consequat","conubia","convallis","cras","cubilia","cum","curabitur","curae","dapibus","diam","dictum","dictumst","dignissim","dolor","donec","dui","duis","egestas","eget","eleifend","elementum","elit","enim","erat","eros","est","et","etiam","eu","euismod","facilisi","faucibus","felis","fermentum","feugiat","fringilla","fusce","gravida","habitant","habitasse","hac","hendrerit","himenaeos","iaculis","id","imperdiet","in","inceptos","integer","interdum","ipsum","justo","lacinia","lacus","laoreet","lectus","leo","ligula","litora","lobortis","lorem","luctus","maecenas","magna","magnis","malesuada","massa","mattis","mauris","metus","mi","molestie","mollis","montes","morbi","mus","nam","nascetur","natoque","nec","neque","netus","nisi","nisl","non","nostra","nulla","nullam","nunc","odio","orci","ornare","parturient","pellentesque","penatibus","per","pharetra","phasellus","placerat","platea","porta","porttitor","posuere","potenti","praesent","pretium","primis","proin","pulvinar","purus","quam","quis","quisque","rhoncus","ridiculus","risus","rutrum","sagittis","sapien","scelerisque","sed","sem","semper","senectus","sit","sociis","sociosqu","sodales","sollicitudin","suscipit","suspendisse","taciti","tellus","tempor","tempus","tincidunt","torquent","tortor","turpis","ullamcorper","ultrices","ultricies","urna","varius","vehicula","vel","velit","venenatis","vestibulum","vitae","vivamus","viverra","volutpat","vulputate"],V="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function W(f){const n=Array.from({length:f}).map(()=>y(R)).join(" ");return`${n.charAt(0).toUpperCase()+n.slice(1)}.`}function F({paragraphCount:f=1,sentencePerParagraph:n=3,wordCount:o=10,startWithLoremIpsum:i=!0,asHTML:r=!1}){const s=Array.from({length:f}).map(()=>Array.from({length:n}).map(()=>W(o)));return i&&(s[0][0]=V),r?`<p>${s.map(m=>m.join(" ")).join(`</p>

<p>`)}</p>`:s.map(m=>m.join(" ")).join(`

`)}const H={"mt-5":"",flex:"","justify-center":"","gap-3":""},K=C({__name:"lorem-ipsum-generator",setup(f){const n=c(1),o=c([3,8]),i=c([8,15]),r=c(!0),s=c(!1),[m,w]=T(()=>F({paragraphCount:n.value,asHTML:s.value,sentencePerParagraph:h(o.value[0],o.value[1]),wordCount:h(i.value[0],i.value[1]),startWithLoremIpsum:r.value})),{copy:q}=L({source:m,text:"Lorem ipsum copied to the clipboard"});return(M,a)=>{const _=B,p=N,v=P,x=U,b=$,k=S;return j(),I(k,null,{default:l(()=>[e(p,{label:"Paragraphs","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:l(()=>[e(_,{value:u(n),"onUpdate:value":a[0]||(a[0]=t=>d(n)?n.value=t:null),step:1,min:1,max:20},null,8,["value"])]),_:1}),e(p,{label:"Sentences per paragraph","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:l(()=>[e(_,{value:u(o),"onUpdate:value":a[1]||(a[1]=t=>d(o)?o.value=t:null),range:"",step:1,min:1,max:50},null,8,["value"])]),_:1}),e(p,{label:"Words per sentence","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:l(()=>[e(_,{value:u(i),"onUpdate:value":a[2]||(a[2]=t=>d(i)?i.value=t:null),range:"",step:1,min:1,max:50},null,8,["value"])]),_:1}),e(p,{label:"Start with lorem ipsum ?","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:l(()=>[e(v,{value:u(r),"onUpdate:value":a[3]||(a[3]=t=>d(r)?r.value=t:null)},null,8,["value"])]),_:1}),e(p,{label:"As html ?","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:l(()=>[e(v,{value:u(s),"onUpdate:value":a[4]||(a[4]=t=>d(s)?s.value=t:null)},null,8,["value"])]),_:1}),e(x,{value:u(m),multiline:"",placeholder:"Your lorem ipsum...",readonly:"","mt-5":"",rows:"5"},null,8,["value"]),A("div",H,[e(b,{autofocus:"",onClick:a[5]||(a[5]=t=>u(q)())},{default:l(()=>[g(" Copy ")]),_:1}),e(b,{onClick:u(w)},{default:l(()=>[g(" Refresh ")]),_:1},8,["onClick"])])]),_:1})}}});export{K as default};
