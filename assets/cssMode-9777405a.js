import{m as Fe}from"./text-diff-49edc708.js";import"./index-67b5d19e.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var Le=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Ne=Object.getOwnPropertyNames,We=Object.prototype.hasOwnProperty,J=(t,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of Ne(n))!We.call(t,e)&&e!==i&&Le(t,e,{get:()=>n[e],enumerable:!(r=je(n,e))||r.enumerable});return t},Ue=(t,n,i)=>(J(t,n,"default"),i&&J(i,n,"default")),c={};Ue(c,Fe);var Oe=2*60*1e3,Ve=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(t){this._defaults=t,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>Oe&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...t){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(t)}).then(i=>n)}},Y;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647})(Y||(Y={}));var W;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647})(W||(W={}));var k;(function(t){function n(r,e){return r===Number.MAX_VALUE&&(r=W.MAX_VALUE),e===Number.MAX_VALUE&&(e=W.MAX_VALUE),{line:r,character:e}}t.create=n;function i(r){var e=r;return s.objectLiteral(e)&&s.uinteger(e.line)&&s.uinteger(e.character)}t.is=i})(k||(k={}));var p;(function(t){function n(r,e,a,o){if(s.uinteger(r)&&s.uinteger(e)&&s.uinteger(a)&&s.uinteger(o))return{start:k.create(r,e),end:k.create(a,o)};if(k.is(r)&&k.is(e))return{start:r,end:e};throw new Error("Range#create called with invalid arguments["+r+", "+e+", "+a+", "+o+"]")}t.create=n;function i(r){var e=r;return s.objectLiteral(e)&&k.is(e.start)&&k.is(e.end)}t.is=i})(p||(p={}));var z;(function(t){function n(r,e){return{uri:r,range:e}}t.create=n;function i(r){var e=r;return s.defined(e)&&p.is(e.range)&&(s.string(e.uri)||s.undefined(e.uri))}t.is=i})(z||(z={}));var Z;(function(t){function n(r,e,a,o){return{targetUri:r,targetRange:e,targetSelectionRange:a,originSelectionRange:o}}t.create=n;function i(r){var e=r;return s.defined(e)&&p.is(e.targetRange)&&s.string(e.targetUri)&&(p.is(e.targetSelectionRange)||s.undefined(e.targetSelectionRange))&&(p.is(e.originSelectionRange)||s.undefined(e.originSelectionRange))}t.is=i})(Z||(Z={}));var X;(function(t){function n(r,e,a,o){return{red:r,green:e,blue:a,alpha:o}}t.create=n;function i(r){var e=r;return s.numberRange(e.red,0,1)&&s.numberRange(e.green,0,1)&&s.numberRange(e.blue,0,1)&&s.numberRange(e.alpha,0,1)}t.is=i})(X||(X={}));var K;(function(t){function n(r,e){return{range:r,color:e}}t.create=n;function i(r){var e=r;return p.is(e.range)&&X.is(e.color)}t.is=i})(K||(K={}));var ee;(function(t){function n(r,e,a){return{label:r,textEdit:e,additionalTextEdits:a}}t.create=n;function i(r){var e=r;return s.string(e.label)&&(s.undefined(e.textEdit)||x.is(e))&&(s.undefined(e.additionalTextEdits)||s.typedArray(e.additionalTextEdits,x.is))}t.is=i})(ee||(ee={}));var R;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(R||(R={}));var te;(function(t){function n(r,e,a,o,u){var g={startLine:r,endLine:e};return s.defined(a)&&(g.startCharacter=a),s.defined(o)&&(g.endCharacter=o),s.defined(u)&&(g.kind=u),g}t.create=n;function i(r){var e=r;return s.uinteger(e.startLine)&&s.uinteger(e.startLine)&&(s.undefined(e.startCharacter)||s.uinteger(e.startCharacter))&&(s.undefined(e.endCharacter)||s.uinteger(e.endCharacter))&&(s.undefined(e.kind)||s.string(e.kind))}t.is=i})(te||(te={}));var B;(function(t){function n(r,e){return{location:r,message:e}}t.create=n;function i(r){var e=r;return s.defined(e)&&z.is(e.location)&&s.string(e.message)}t.is=i})(B||(B={}));var y;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(y||(y={}));var re;(function(t){t.Unnecessary=1,t.Deprecated=2})(re||(re={}));var ne;(function(t){function n(i){var r=i;return r!=null&&s.string(r.href)}t.is=n})(ne||(ne={}));var U;(function(t){function n(r,e,a,o,u,g){var d={range:r,message:e};return s.defined(a)&&(d.severity=a),s.defined(o)&&(d.code=o),s.defined(u)&&(d.source=u),s.defined(g)&&(d.relatedInformation=g),d}t.create=n;function i(r){var e,a=r;return s.defined(a)&&p.is(a.range)&&s.string(a.message)&&(s.number(a.severity)||s.undefined(a.severity))&&(s.integer(a.code)||s.string(a.code)||s.undefined(a.code))&&(s.undefined(a.codeDescription)||s.string((e=a.codeDescription)===null||e===void 0?void 0:e.href))&&(s.string(a.source)||s.undefined(a.source))&&(s.undefined(a.relatedInformation)||s.typedArray(a.relatedInformation,B.is))}t.is=i})(U||(U={}));var D;(function(t){function n(r,e){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];var u={title:r,command:e};return s.defined(a)&&a.length>0&&(u.arguments=a),u}t.create=n;function i(r){var e=r;return s.defined(e)&&s.string(e.title)&&s.string(e.command)}t.is=i})(D||(D={}));var x;(function(t){function n(a,o){return{range:a,newText:o}}t.replace=n;function i(a,o){return{range:{start:a,end:a},newText:o}}t.insert=i;function r(a){return{range:a,newText:""}}t.del=r;function e(a){var o=a;return s.objectLiteral(o)&&s.string(o.newText)&&p.is(o.range)}t.is=e})(x||(x={}));var I;(function(t){function n(r,e,a){var o={label:r};return e!==void 0&&(o.needsConfirmation=e),a!==void 0&&(o.description=a),o}t.create=n;function i(r){var e=r;return e!==void 0&&s.objectLiteral(e)&&s.string(e.label)&&(s.boolean(e.needsConfirmation)||e.needsConfirmation===void 0)&&(s.string(e.description)||e.description===void 0)}t.is=i})(I||(I={}));var m;(function(t){function n(i){var r=i;return typeof r=="string"}t.is=n})(m||(m={}));var E;(function(t){function n(a,o,u){return{range:a,newText:o,annotationId:u}}t.replace=n;function i(a,o,u){return{range:{start:a,end:a},newText:o,annotationId:u}}t.insert=i;function r(a,o){return{range:a,newText:"",annotationId:o}}t.del=r;function e(a){var o=a;return x.is(o)&&(I.is(o.annotationId)||m.is(o.annotationId))}t.is=e})(E||(E={}));var O;(function(t){function n(r,e){return{textDocument:r,edits:e}}t.create=n;function i(r){var e=r;return s.defined(e)&&V.is(e.textDocument)&&Array.isArray(e.edits)}t.is=i})(O||(O={}));var M;(function(t){function n(r,e,a){var o={kind:"create",uri:r};return e!==void 0&&(e.overwrite!==void 0||e.ignoreIfExists!==void 0)&&(o.options=e),a!==void 0&&(o.annotationId=a),o}t.create=n;function i(r){var e=r;return e&&e.kind==="create"&&s.string(e.uri)&&(e.options===void 0||(e.options.overwrite===void 0||s.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||s.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||m.is(e.annotationId))}t.is=i})(M||(M={}));var T;(function(t){function n(r,e,a,o){var u={kind:"rename",oldUri:r,newUri:e};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(u.options=a),o!==void 0&&(u.annotationId=o),u}t.create=n;function i(r){var e=r;return e&&e.kind==="rename"&&s.string(e.oldUri)&&s.string(e.newUri)&&(e.options===void 0||(e.options.overwrite===void 0||s.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||s.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||m.is(e.annotationId))}t.is=i})(T||(T={}));var S;(function(t){function n(r,e,a){var o={kind:"delete",uri:r};return e!==void 0&&(e.recursive!==void 0||e.ignoreIfNotExists!==void 0)&&(o.options=e),a!==void 0&&(o.annotationId=a),o}t.create=n;function i(r){var e=r;return e&&e.kind==="delete"&&s.string(e.uri)&&(e.options===void 0||(e.options.recursive===void 0||s.boolean(e.options.recursive))&&(e.options.ignoreIfNotExists===void 0||s.boolean(e.options.ignoreIfNotExists)))&&(e.annotationId===void 0||m.is(e.annotationId))}t.is=i})(S||(S={}));var $;(function(t){function n(i){var r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(e){return s.string(e.kind)?M.is(e)||T.is(e)||S.is(e):O.is(e)}))}t.is=n})($||($={}));var N=function(){function t(n,i){this.edits=n,this.changeAnnotations=i}return t.prototype.insert=function(n,i,r){var e,a;if(r===void 0?e=x.insert(n,i):m.is(r)?(a=r,e=E.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),e=E.insert(n,i,a)),this.edits.push(e),a!==void 0)return a},t.prototype.replace=function(n,i,r){var e,a;if(r===void 0?e=x.replace(n,i):m.is(r)?(a=r,e=E.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),e=E.replace(n,i,a)),this.edits.push(e),a!==void 0)return a},t.prototype.delete=function(n,i){var r,e;if(i===void 0?r=x.del(n):m.is(i)?(e=i,r=E.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),e=this.changeAnnotations.manage(i),r=E.del(n,e)),this.edits.push(r),e!==void 0)return e},t.prototype.add=function(n){this.edits.push(n)},t.prototype.all=function(){return this.edits},t.prototype.clear=function(){this.edits.splice(0,this.edits.length)},t.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},t}(),ie=function(){function t(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return t.prototype.all=function(){return this._annotations},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),t.prototype.manage=function(n,i){var r;if(m.is(n)?r=n:(r=this.nextId(),i=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},t.prototype.nextId=function(){return this._counter++,this._counter.toString()},t}();(function(){function t(n){var i=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new ie(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(O.is(r)){var e=new N(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=e}})):n.changes&&Object.keys(n.changes).forEach(function(r){var e=new N(n.changes[r]);i._textEditChanges[r]=e})):this._workspaceEdit={}}return Object.defineProperty(t.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),t.prototype.getTextEditChange=function(n){if(V.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version},r=this._textEditChanges[i.uri];if(!r){var e=[],a={textDocument:i,edits:e};this._workspaceEdit.documentChanges.push(a),r=new N(e,this._changeAnnotations),this._textEditChanges[i.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var e=[];this._workspaceEdit.changes[n]=e,r=new N(e),this._textEditChanges[n]=r}return r}},t.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ie,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},t.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},t.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var e;I.is(i)||m.is(i)?e=i:r=i;var a,o;if(e===void 0?a=M.create(n,r):(o=m.is(e)?e:this._changeAnnotations.manage(e),a=M.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},t.prototype.renameFile=function(n,i,r,e){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;I.is(r)||m.is(r)?a=r:e=r;var o,u;if(a===void 0?o=T.create(n,i,e):(u=m.is(a)?a:this._changeAnnotations.manage(a),o=T.create(n,i,e,u)),this._workspaceEdit.documentChanges.push(o),u!==void 0)return u},t.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var e;I.is(i)||m.is(i)?e=i:r=i;var a,o;if(e===void 0?a=S.create(n,r):(o=m.is(e)?e:this._changeAnnotations.manage(e),a=S.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},t})();var ae;(function(t){function n(r){return{uri:r}}t.create=n;function i(r){var e=r;return s.defined(e)&&s.string(e.uri)}t.is=i})(ae||(ae={}));var oe;(function(t){function n(r,e){return{uri:r,version:e}}t.create=n;function i(r){var e=r;return s.defined(e)&&s.string(e.uri)&&s.integer(e.version)}t.is=i})(oe||(oe={}));var V;(function(t){function n(r,e){return{uri:r,version:e}}t.create=n;function i(r){var e=r;return s.defined(e)&&s.string(e.uri)&&(e.version===null||s.integer(e.version))}t.is=i})(V||(V={}));var se;(function(t){function n(r,e,a,o){return{uri:r,languageId:e,version:a,text:o}}t.create=n;function i(r){var e=r;return s.defined(e)&&s.string(e.uri)&&s.string(e.languageId)&&s.integer(e.version)&&s.string(e.text)}t.is=i})(se||(se={}));var F;(function(t){t.PlainText="plaintext",t.Markdown="markdown"})(F||(F={}));(function(t){function n(i){var r=i;return r===t.PlainText||r===t.Markdown}t.is=n})(F||(F={}));var q;(function(t){function n(i){var r=i;return s.objectLiteral(i)&&F.is(r.kind)&&s.string(r.value)}t.is=n})(q||(q={}));var l;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(l||(l={}));var Q;(function(t){t.PlainText=1,t.Snippet=2})(Q||(Q={}));var ue;(function(t){t.Deprecated=1})(ue||(ue={}));var ce;(function(t){function n(r,e,a){return{newText:r,insert:e,replace:a}}t.create=n;function i(r){var e=r;return e&&s.string(e.newText)&&p.is(e.insert)&&p.is(e.replace)}t.is=i})(ce||(ce={}));var de;(function(t){t.asIs=1,t.adjustIndentation=2})(de||(de={}));var fe;(function(t){function n(i){return{label:i}}t.create=n})(fe||(fe={}));var ge;(function(t){function n(i,r){return{items:i||[],isIncomplete:!!r}}t.create=n})(ge||(ge={}));var H;(function(t){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=n;function i(r){var e=r;return s.string(e)||s.objectLiteral(e)&&s.string(e.language)&&s.string(e.value)}t.is=i})(H||(H={}));var le;(function(t){function n(i){var r=i;return!!r&&s.objectLiteral(r)&&(q.is(r.contents)||H.is(r.contents)||s.typedArray(r.contents,H.is))&&(i.range===void 0||p.is(i.range))}t.is=n})(le||(le={}));var he;(function(t){function n(i,r){return r?{label:i,documentation:r}:{label:i}}t.create=n})(he||(he={}));var ve;(function(t){function n(i,r){for(var e=[],a=2;a<arguments.length;a++)e[a-2]=arguments[a];var o={label:i};return s.defined(r)&&(o.documentation=r),s.defined(e)?o.parameters=e:o.parameters=[],o}t.create=n})(ve||(ve={}));var P;(function(t){t.Text=1,t.Read=2,t.Write=3})(P||(P={}));var pe;(function(t){function n(i,r){var e={range:i};return s.number(r)&&(e.kind=r),e}t.create=n})(pe||(pe={}));var h;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(h||(h={}));var me;(function(t){t.Deprecated=1})(me||(me={}));var _e;(function(t){function n(i,r,e,a,o){var u={name:i,kind:r,location:{uri:a,range:e}};return o&&(u.containerName=o),u}t.create=n})(_e||(_e={}));var we;(function(t){function n(r,e,a,o,u,g){var d={name:r,detail:e,kind:a,range:o,selectionRange:u};return g!==void 0&&(d.children=g),d}t.create=n;function i(r){var e=r;return e&&s.string(e.name)&&s.number(e.kind)&&p.is(e.range)&&p.is(e.selectionRange)&&(e.detail===void 0||s.string(e.detail))&&(e.deprecated===void 0||s.boolean(e.deprecated))&&(e.children===void 0||Array.isArray(e.children))&&(e.tags===void 0||Array.isArray(e.tags))}t.is=i})(we||(we={}));var ke;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(ke||(ke={}));var be;(function(t){function n(r,e){var a={diagnostics:r};return e!=null&&(a.only=e),a}t.create=n;function i(r){var e=r;return s.defined(e)&&s.typedArray(e.diagnostics,U.is)&&(e.only===void 0||s.typedArray(e.only,s.string))}t.is=i})(be||(be={}));var Ee;(function(t){function n(r,e,a){var o={title:r},u=!0;return typeof e=="string"?(u=!1,o.kind=e):D.is(e)?o.command=e:o.edit=e,u&&a!==void 0&&(o.kind=a),o}t.create=n;function i(r){var e=r;return e&&s.string(e.title)&&(e.diagnostics===void 0||s.typedArray(e.diagnostics,U.is))&&(e.kind===void 0||s.string(e.kind))&&(e.edit!==void 0||e.command!==void 0)&&(e.command===void 0||D.is(e.command))&&(e.isPreferred===void 0||s.boolean(e.isPreferred))&&(e.edit===void 0||$.is(e.edit))}t.is=i})(Ee||(Ee={}));var xe;(function(t){function n(r,e){var a={range:r};return s.defined(e)&&(a.data=e),a}t.create=n;function i(r){var e=r;return s.defined(e)&&p.is(e.range)&&(s.undefined(e.command)||D.is(e.command))}t.is=i})(xe||(xe={}));var Ce;(function(t){function n(r,e){return{tabSize:r,insertSpaces:e}}t.create=n;function i(r){var e=r;return s.defined(e)&&s.uinteger(e.tabSize)&&s.boolean(e.insertSpaces)}t.is=i})(Ce||(Ce={}));var Ae;(function(t){function n(r,e,a){return{range:r,target:e,data:a}}t.create=n;function i(r){var e=r;return s.defined(e)&&p.is(e.range)&&(s.undefined(e.target)||s.string(e.target))}t.is=i})(Ae||(Ae={}));var ye;(function(t){function n(r,e){return{range:r,parent:e}}t.create=n;function i(r){var e=r;return e!==void 0&&p.is(e.range)&&(e.parent===void 0||t.is(e.parent))}t.is=i})(ye||(ye={}));var Ie;(function(t){function n(a,o,u,g){return new He(a,o,u,g)}t.create=n;function i(a){var o=a;return!!(s.defined(o)&&s.string(o.uri)&&(s.undefined(o.languageId)||s.string(o.languageId))&&s.uinteger(o.lineCount)&&s.func(o.getText)&&s.func(o.positionAt)&&s.func(o.offsetAt))}t.is=i;function r(a,o){for(var u=a.getText(),g=e(o,function(A,j){var G=A.range.start.line-j.range.start.line;return G===0?A.range.start.character-j.range.start.character:G}),d=u.length,v=g.length-1;v>=0;v--){var w=g[v],b=a.offsetAt(w.range.start),f=a.offsetAt(w.range.end);if(f<=d)u=u.substring(0,b)+w.newText+u.substring(f,u.length);else throw new Error("Overlapping edit");d=b}return u}t.applyEdits=r;function e(a,o){if(a.length<=1)return a;var u=a.length/2|0,g=a.slice(0,u),d=a.slice(u);e(g,o),e(d,o);for(var v=0,w=0,b=0;v<g.length&&w<d.length;){var f=o(g[v],d[w]);f<=0?a[b++]=g[v++]:a[b++]=d[w++]}for(;v<g.length;)a[b++]=g[v++];for(;w<d.length;)a[b++]=d[w++];return a}})(Ie||(Ie={}));var He=function(){function t(n,i,r,e){this._uri=n,this._languageId=i,this._version=r,this._content=e,this._lineOffsets=void 0}return Object.defineProperty(t.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),t.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},t.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},t.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],i=this._content,r=!0,e=0;e<i.length;e++){r&&(n.push(e),r=!1);var a=i.charAt(e);r=a==="\r"||a===`
`,a==="\r"&&e+1<i.length&&i.charAt(e+1)===`
`&&e++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},t.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,e=i.length;if(e===0)return k.create(0,n);for(;r<e;){var a=Math.floor((r+e)/2);i[a]>n?e=a:r=a+1}var o=r-1;return k.create(o,n-i[o])},t.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line],e=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,e),r)},Object.defineProperty(t.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),t}(),s;(function(t){var n=Object.prototype.toString;function i(f){return typeof f<"u"}t.defined=i;function r(f){return typeof f>"u"}t.undefined=r;function e(f){return f===!0||f===!1}t.boolean=e;function a(f){return n.call(f)==="[object String]"}t.string=a;function o(f){return n.call(f)==="[object Number]"}t.number=o;function u(f,A,j){return n.call(f)==="[object Number]"&&A<=f&&f<=j}t.numberRange=u;function g(f){return n.call(f)==="[object Number]"&&-2147483648<=f&&f<=2147483647}t.integer=g;function d(f){return n.call(f)==="[object Number]"&&0<=f&&f<=2147483647}t.uinteger=d;function v(f){return n.call(f)==="[object Function]"}t.func=v;function w(f){return f!==null&&typeof f=="object"}t.objectLiteral=w;function b(f,A){return Array.isArray(f)&&f.every(A)}t.typedArray=b})(s||(s={}));var ze=class{constructor(t,n,i){this._languageId=t,this._worker=n;const r=a=>{let o=a.getLanguageId();if(o!==this._languageId)return;let u;this._listener[a.uri.toString()]=a.onDidChangeContent(()=>{window.clearTimeout(u),u=window.setTimeout(()=>this._doValidate(a.uri,o),500)}),this._doValidate(a.uri,o)},e=a=>{c.editor.setModelMarkers(a,this._languageId,[]);let o=a.uri.toString(),u=this._listener[o];u&&(u.dispose(),delete this._listener[o])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(e)),this._disposables.push(c.editor.onDidChangeModelLanguage(a=>{e(a.model),r(a.model)})),this._disposables.push(i(a=>{c.editor.getModels().forEach(o=>{o.getLanguageId()===this._languageId&&(e(o),r(o))})})),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(e);for(let a in this._listener)this._listener[a].dispose()}}),c.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(t=>t&&t.dispose()),this._disposables.length=0}_doValidate(t,n){this._worker(t).then(i=>i.doValidation(t.toString())).then(i=>{const r=i.map(a=>Be(t,a));let e=c.editor.getModel(t);e&&e.getLanguageId()===n&&c.editor.setModelMarkers(e,n,r)}).then(void 0,i=>{console.error(i)})}};function Xe(t){switch(t){case y.Error:return c.MarkerSeverity.Error;case y.Warning:return c.MarkerSeverity.Warning;case y.Information:return c.MarkerSeverity.Info;case y.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}function Be(t,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:Xe(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}var $e=class{constructor(t,n){this._worker=t,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.doComplete(e.toString(),C(n))).then(a=>{if(!a)return;const o=t.getWordUntilPosition(n),u=new c.Range(n.lineNumber,o.startColumn,n.lineNumber,o.endColumn),g=a.items.map(d=>{const v={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:Ge(d.command),range:u,kind:Qe(d.kind)};return d.textEdit&&(qe(d.textEdit)?v.range={insert:_(d.textEdit.insert),replace:_(d.textEdit.replace)}:v.range=_(d.textEdit.range),v.insertText=d.textEdit.newText),d.additionalTextEdits&&(v.additionalTextEdits=d.additionalTextEdits.map(L)),d.insertTextFormat===Q.Snippet&&(v.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),v});return{isIncomplete:a.isIncomplete,suggestions:g}})}};function C(t){if(t)return{character:t.column-1,line:t.lineNumber-1}}function De(t){if(t)return{start:{line:t.startLineNumber-1,character:t.startColumn-1},end:{line:t.endLineNumber-1,character:t.endColumn-1}}}function _(t){if(t)return new c.Range(t.start.line+1,t.start.character+1,t.end.line+1,t.end.character+1)}function qe(t){return typeof t.insert<"u"&&typeof t.replace<"u"}function Qe(t){const n=c.languages.CompletionItemKind;switch(t){case l.Text:return n.Text;case l.Method:return n.Method;case l.Function:return n.Function;case l.Constructor:return n.Constructor;case l.Field:return n.Field;case l.Variable:return n.Variable;case l.Class:return n.Class;case l.Interface:return n.Interface;case l.Module:return n.Module;case l.Property:return n.Property;case l.Unit:return n.Unit;case l.Value:return n.Value;case l.Enum:return n.Enum;case l.Keyword:return n.Keyword;case l.Snippet:return n.Snippet;case l.Color:return n.Color;case l.File:return n.File;case l.Reference:return n.Reference}return n.Property}function L(t){if(t)return{range:_(t.range),text:t.newText}}function Ge(t){return t&&t.command==="editor.action.triggerSuggest"?{id:t.command,title:t.title,arguments:t.arguments}:void 0}var Je=class{constructor(t){this._worker=t}provideHover(t,n,i){let r=t.uri;return this._worker(r).then(e=>e.doHover(r.toString(),C(n))).then(e=>{if(e)return{range:_(e.range),contents:Ze(e.contents)}})}};function Ye(t){return t&&typeof t=="object"&&typeof t.kind=="string"}function Re(t){return typeof t=="string"?{value:t}:Ye(t)?t.kind==="plaintext"?{value:t.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:t.value}:{value:"```"+t.language+`
`+t.value+"\n```\n"}}function Ze(t){if(t)return Array.isArray(t)?t.map(Re):[Re(t)]}var Ke=class{constructor(t){this._worker=t}provideDocumentHighlights(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.findDocumentHighlights(r.toString(),C(n))).then(e=>{if(e)return e.map(a=>({range:_(a.range),kind:et(a.kind)}))})}};function et(t){switch(t){case P.Read:return c.languages.DocumentHighlightKind.Read;case P.Write:return c.languages.DocumentHighlightKind.Write;case P.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var tt=class{constructor(t){this._worker=t}provideDefinition(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.findDefinition(r.toString(),C(n))).then(e=>{if(e)return[Me(e)]})}};function Me(t){return{uri:c.Uri.parse(t.uri),range:_(t.range)}}var rt=class{constructor(t){this._worker=t}provideReferences(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.findReferences(e.toString(),C(n))).then(a=>{if(a)return a.map(Me)})}},nt=class{constructor(t){this._worker=t}provideRenameEdits(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.doRename(e.toString(),C(n),i)).then(a=>it(a))}};function it(t){if(!t||!t.changes)return;let n=[];for(let i in t.changes){const r=c.Uri.parse(i);for(let e of t.changes[i])n.push({resource:r,versionId:void 0,textEdit:{range:_(e.range),text:e.newText}})}return{edits:n}}var at=class{constructor(t){this._worker=t}provideDocumentSymbols(t,n){const i=t.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(e=>({name:e.name,detail:"",containerName:e.containerName,kind:ot(e.kind),range:_(e.location.range),selectionRange:_(e.location.range),tags:[]}))})}};function ot(t){let n=c.languages.SymbolKind;switch(t){case h.File:return n.Array;case h.Module:return n.Module;case h.Namespace:return n.Namespace;case h.Package:return n.Package;case h.Class:return n.Class;case h.Method:return n.Method;case h.Property:return n.Property;case h.Field:return n.Field;case h.Constructor:return n.Constructor;case h.Enum:return n.Enum;case h.Interface:return n.Interface;case h.Function:return n.Function;case h.Variable:return n.Variable;case h.Constant:return n.Constant;case h.String:return n.String;case h.Number:return n.Number;case h.Boolean:return n.Boolean;case h.Array:return n.Array}return n.Function}var vt=class{constructor(t){this._worker=t}provideLinks(t,n){const i=t.uri;return this._worker(i).then(r=>r.findDocumentLinks(i.toString())).then(r=>{if(r)return{links:r.map(e=>({range:_(e.range),url:e.target}))}})}},st=class{constructor(t){this._worker=t}provideDocumentFormattingEdits(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.format(r.toString(),null,Te(n)).then(a=>{if(!(!a||a.length===0))return a.map(L)}))}},ut=class{constructor(t){this._worker=t}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.format(e.toString(),De(n),Te(i)).then(o=>{if(!(!o||o.length===0))return o.map(L)}))}};function Te(t){return{tabSize:t.tabSize,insertSpaces:t.insertSpaces}}var ct=class{constructor(t){this._worker=t}provideDocumentColors(t,n){const i=t.uri;return this._worker(i).then(r=>r.findDocumentColors(i.toString())).then(r=>{if(r)return r.map(e=>({color:e.color,range:_(e.range)}))})}provideColorPresentations(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),n.color,De(n.range))).then(e=>{if(e)return e.map(a=>{let o={label:a.label};return a.textEdit&&(o.textEdit=L(a.textEdit)),a.additionalTextEdits&&(o.additionalTextEdits=a.additionalTextEdits.map(L)),o})})}},dt=class{constructor(t){this._worker=t}provideFoldingRanges(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),n)).then(e=>{if(e)return e.map(a=>{const o={start:a.startLine+1,end:a.endLine+1};return typeof a.kind<"u"&&(o.kind=ft(a.kind)),o})})}};function ft(t){switch(t){case R.Comment:return c.languages.FoldingRangeKind.Comment;case R.Imports:return c.languages.FoldingRangeKind.Imports;case R.Region:return c.languages.FoldingRangeKind.Region}}var gt=class{constructor(t){this._worker=t}provideSelectionRanges(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),n.map(C))).then(e=>{if(e)return e.map(a=>{const o=[];for(;a;)o.push({range:_(a.range)}),a=a.parent;return o})})}};function pt(t){const n=[],i=[],r=new Ve(t);n.push(r);const e=(...o)=>r.getLanguageServiceWorker(...o);function a(){const{languageId:o,modeConfiguration:u}=t;Se(i),u.completionItems&&i.push(c.languages.registerCompletionItemProvider(o,new $e(e,["/","-",":"]))),u.hovers&&i.push(c.languages.registerHoverProvider(o,new Je(e))),u.documentHighlights&&i.push(c.languages.registerDocumentHighlightProvider(o,new Ke(e))),u.definitions&&i.push(c.languages.registerDefinitionProvider(o,new tt(e))),u.references&&i.push(c.languages.registerReferenceProvider(o,new rt(e))),u.documentSymbols&&i.push(c.languages.registerDocumentSymbolProvider(o,new at(e))),u.rename&&i.push(c.languages.registerRenameProvider(o,new nt(e))),u.colors&&i.push(c.languages.registerColorProvider(o,new ct(e))),u.foldingRanges&&i.push(c.languages.registerFoldingRangeProvider(o,new dt(e))),u.diagnostics&&i.push(new ze(o,e,t.onDidChange)),u.selectionRanges&&i.push(c.languages.registerSelectionRangeProvider(o,new gt(e))),u.documentFormattingEdits&&i.push(c.languages.registerDocumentFormattingEditProvider(o,new st(e))),u.documentRangeFormattingEdits&&i.push(c.languages.registerDocumentRangeFormattingEditProvider(o,new ut(e)))}return a(),n.push(Pe(i)),Pe(n)}function Pe(t){return{dispose:()=>Se(t)}}function Se(t){for(;t.length;)t.pop().dispose()}export{$e as CompletionAdapter,tt as DefinitionAdapter,ze as DiagnosticsAdapter,ct as DocumentColorAdapter,st as DocumentFormattingEditProvider,Ke as DocumentHighlightAdapter,vt as DocumentLinkAdapter,ut as DocumentRangeFormattingEditProvider,at as DocumentSymbolAdapter,dt as FoldingRangeAdapter,Je as HoverAdapter,rt as ReferenceAdapter,nt as RenameAdapter,gt as SelectionRangeAdapter,Ve as WorkerManager,C as fromPosition,De as fromRange,pt as setupMode,_ as toRange,L as toTextEdit};
