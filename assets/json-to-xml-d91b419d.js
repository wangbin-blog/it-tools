import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-ba29dfef.js";import{c as s}from"./index-95317eb9.js";import{l as o}from"./index-231c3e11.js";import{w as m}from"./defaults-4d6daddf.js";import{d as i,o as p,c as u}from"./index-67b5d19e.js";import"./TextareaCopyable-3ff158f8.js";import"./Copy-e49d3bf2.js";import"./Scrollbar-88ad5471.js";import"./index-3aa13386.js";const l=`{"a":{"_attributes":{"x":"1.234","y":"It's"}}}`,N=i({__name:"json-to-xml",setup(c){function r(t){return m(()=>s.js2xml(o.parse(t),{compact:!0}),"")}const e=[{validator:t=>t===""||o.parse(t),message:"Provided JSON is not valid."}];return(t,f)=>{const a=n;return p(),u(a,{"input-label":"Your JSON content","input-default":l,"input-placeholder":"Paste your JSON content here...","output-label":"Converted XML","output-language":"xml",transformer:r,"input-validation-rules":e})}}});export{N as default};
