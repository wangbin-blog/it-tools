import{e as d,d as D,n as x,b as M,p as N,o as s,c as b,w as v,k as V,i as h,x as F,g as l,f as c,h as I,F as m,W as S,y as J,z as O,t as p,D as j}from"./index-67b5d19e.js";import{i as z}from"./boolean-c7e7c785.js";import{w as G}from"./defaults-4d6daddf.js";import{_ as L}from"./Table-275cb19c.js";function _(t){this.message=t}_.prototype=new Error,_.prototype.name="InvalidCharacterError";var k=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new _("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,i=0,a=0,o="";n=e.charAt(a++);~n&&(r=i%4?64*r+n:n,i++%4)?o+=String.fromCharCode(255&r>>(-2*i&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return o};function W(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(r){return decodeURIComponent(k(r).replace(/(.)/g,function(n,i){var a=i.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}(e)}catch{return k(e)}}function f(t){this.message=t}function C(t,e){if(typeof t!="string")throw new f("Invalid token specified");var r=(e=e||{}).header===!0?0:1;try{return JSON.parse(W(t.split(".")[r]))}catch(n){throw new f("Invalid token specified: "+n.message)}}f.prototype=new Error,f.prototype.name="InvalidTokenError";const K={HS256:"HMAC using SHA-256",HS384:"HMAC using SHA-384",HS512:"HMAC using SHA-512",RS256:"RSASSA-PKCS1-v1_5 using SHA-256",RS384:"RSASSA-PKCS1-v1_5 using SHA-384",RS512:"RSASSA-PKCS1-v1_5 using SHA-512",ES256:"ECDSA using P-256 and SHA-256",ES384:"ECDSA using P-384 and SHA-384",ES512:"ECDSA using P-521 and SHA-512",PS256:"RSASSA-PSS using SHA-256 and MGF1 with SHA-256",PS384:"RSASSA-PSS using SHA-384 and MGF1 with SHA-384",PS512:"RSASSA-PSS using SHA-512 and MGF1 with SHA-512",none:"No digital signature or MAC performed"},U={typ:"Type",alg:"Algorithm",iss:"Issuer",sub:"Subject",aud:"Audience",exp:"Expiration Time",nbf:"Not Before",iat:"Issued At",jti:"JWT ID",name:"Full name",given_name:"Given name(s) or first name(s)",family_name:"Surname(s) or last name(s)",middle_name:"Middle name(s)",nickname:"Casual name",preferred_username:"Shorthand name by which the End-User wishes to be referred to",profile:"Profile page URL",picture:"Profile picture URL",website:"Web page or blog URL",email:"Preferred e-mail address",email_verified:"True if the e-mail address has been verified; otherwise false",gender:"Gender",birthdate:"Birthday",zoneinfo:"Time zone",locale:"Locale",phone_number:"Preferred telephone number",phone_number_verified:"True if the phone number has been verified; otherwise false",address:"Preferred postal address",updated_at:"Time the information was last updated",azp:"Authorized party - the party to which the ID Token was issued",nonce:"Value used to associate a Client session with an ID Token",auth_time:"Time when the authentication occurred",at_hash:"Access Token hash value",c_hash:"Code hash value",acr:"Authentication Context Class Reference",amr:"Authentication Methods References",sub_jwk:"Public key used to check the signature of an ID Token",cnf:"Confirmation",sip_from_tag:"SIP From tag header field parameter value",sip_date:"SIP Date header field value",sip_callid:"SIP Call-Id header field value",sip_cseq_num:"SIP CSeq numeric header field parameter value",sip_via_branch:"SIP Via branch header field parameter value",orig:"Originating Identity String",dest:"Destination Identity String",mky:"Media Key Fingerprint String",events:"Security Events",toe:"Time of Event",txn:"Transaction Identifier",rph:"Resource Priority Header Authorization",sid:"Session ID",vot:"Vector of Trust value",vtm:"Vector of Trust trustmark URL",attest:"Attestation level as defined in SHAKEN framework",origid:"Originating Identifier as defined in SHAKEN framework",act:"Actor",scope:"Scope Values",client_id:"Client Identifier",may_act:"Authorized Actor - the party that is authorized to become the actor",jcard:"jCard data",at_use_nbr:"Number of API requests for which the access token can be used",div:"Diverted Target of a Call",opt:"Original PASSporT (in Full Form)",vc:"Verifiable Credential as specified in the W3C Recommendation",vp:"Verifiable Presentation as specified in the W3C Recommendation",sph:"SIP Priority header field",ace_profile:"ACE profile a token is supposed to be used with.",cnonce:"Client nonce",exi:"Expires in",roles:"Roles",groups:"Groups",entitlements:"Entitlements",token_introspection:"Token introspection response"};function P({jwt:t}){const e=C(t,{header:!0}),r=C(t),n=d.map(e,(a,o)=>T({claim:o,value:a})),i=d.map(r,(a,o)=>T({claim:o,value:a}));return{header:n,payload:i}}function T({claim:t,value:e}){const r=U[t],n=d.isPlainObject(e)||d.isArray(e)?JSON.stringify(e,null,3):d.toString(e),i=B({claim:t,value:e});return{value:n,friendlyValue:i,claim:t,claimDescription:r}}function B({claim:t,value:e}){if(["exp","nbf","iat"].includes(t))return q(e);if(t==="alg"&&d.isString(e))return K[e]}function q(t){if(d.isNil(t))return;const e=new Date(Number(t)*1e3);return`${e.toLocaleDateString()} ${e.toLocaleTimeString()}`}const Q={colspan:"2",class:"table-header"},$={class:"claims",style:{"vertical-align":"top"}},X={"font-bold":""},Y={key:0,"ml-2":"","op-70":""},Z={style:{"word-wrap":"break-word","word-break":"break-all"}},ee={key:0,"ml-2":"","op-70":""},te=D({__name:"jwt-parser",setup(t){const e=x("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"),r=M(()=>G(()=>P({jwt:e.value}),{header:[],payload:[]})),n=[{key:"header",title:"Header"},{key:"payload",title:"Payload"}],i=N({source:e,rules:[{validator:a=>a.length>0&&z(()=>P({jwt:e.value})),message:"Invalid JWT"}]});return(a,o)=>{const H=J,R=L,E=O;return s(),b(E,null,{default:v(()=>[V(H,{value:h(e),"onUpdate:value":o[0]||(o[0]=u=>F(e)?e.value=u:null),label:"JWT to decode",validation:h(i),placeholder:"Put your token here...",rows:"5",multiline:"","raw-text":"",autofocus:"","mb-3":""},null,8,["value","validation"]),h(i).isValid?(s(),b(R,{key:0},{default:v(()=>[l("tbody",null,[(s(),c(m,null,I(n,u=>(s(),c(m,{key:u.key},[l("th",Q,p(u.title),1),(s(!0),c(m,null,I(h(r)[u.key],({claim:g,claimDescription:w,friendlyValue:A,value:y})=>(s(),c("tr",{key:g+y},[l("td",$,[l("span",X,p(g),1),w?(s(),c("span",Y," ("+p(w)+") ",1)):S("",!0)]),l("td",Z,[l("span",null,p(y),1),A?(s(),c("span",ee," ("+p(A)+") ",1)):S("",!0)])]))),128))],64))),64))])]),_:1})):S("",!0)]),_:1})}}});const oe=j(te,[["__scopeId","data-v-70e80d9e"]]);export{oe as default};
