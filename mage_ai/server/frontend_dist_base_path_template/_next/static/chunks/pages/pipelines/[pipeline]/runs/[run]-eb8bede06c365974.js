(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8662],{8955:function(e,n,t){"use strict";t.d(n,{G7:function(){return y},ZP:function(){return P},u$:function(){return j}});var i=t(75582),r=t(82394),o=t(26304),u=t(90299),l=t(9134),c=t(24138),s=t(38276),a=t(30160),d=t(75499),p=t(70515),f=t(16488),v=t(42122),h=t(28598),b=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=44,O={uuid:"Run details"},x={uuid:"Dependency tree"},y=[x,O];function P(e){var n=e.height,t=e.heightOffset,r=e.pipeline,g=e.selectedRun,P=e.selectedTab,k=e.setSelectedTab,Z=m({},(0,o.Z)(e,b));g?Z.blockStatus=(0,f.IJ)(null===g||void 0===g?void 0:g.block_runs):Z.noStatus=!0;var _=(0,v.Kn)(null===g||void 0===g?void 0:g.variables)?m({},null===g||void 0===g?void 0:g.variables):(null===g||void 0===g?void 0:g.variables)||{},w=null===g||void 0===g?void 0:g.event_variables;if(w&&(0,v.Kn)(w)&&!(0,v.Qr)(w))if((0,v.Kn)(_)&&_.hasOwnProperty("event")){var T=(0,v.Kn)(_.event)?_.event:{};_.event=m(m({},T),w)}else _.event=m({},w);var S=[];_&&JSON.stringify(_,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var E=g&&[["Run ID",null===g||void 0===g?void 0:g.id],["Variables",(0,h.jsx)(l.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],I=g&&(0,h.jsx)(s.Z,{pb:p.cd,px:p.cd,children:(0,h.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:E.map((function(e,n){var t=(0,i.Z)(e,2),r=t[0],o=t[1];return[(0,h.jsx)(a.ZP,{monospace:!0,muted:!0,children:r},"key_".concat(n)),(0,h.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:o},"val_".concat(n))]})),uuid:"LogDetail"})}),D=P&&k;return(0,h.jsxs)(h.Fragment,{children:[D&&(0,h.jsx)(u.Z,{onClickTab:k,selectedTabUUID:null===P||void 0===P?void 0:P.uuid,tabs:y,underlineStyle:!0}),(!D||x.uuid===(null===P||void 0===P?void 0:P.uuid))&&(0,h.jsx)(c.ZP,m(m({},Z),{},{height:n,heightOffset:(t||0)+(D?j:0),pipeline:r})),O.uuid===(null===P||void 0===P?void 0:P.uuid)&&I]})}},66909:function(e,n,t){"use strict";t.d(n,{Eh:function(){return s},t0:function(){return a}});var i=t(25976),r=t(2842),o=t(4982),u=t(61896),l=t(47041),c=t(70515),s=(c.iI,o.O$+3*c.iI+u.dN),a=i.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-15ofupc-0"})([""," overflow:auto;position:absolute;width:100%;"," ",""],l.w5,(function(e){return"\n    height: calc(100vh - ".concat(r.uX,"px - ").concat(e.heightOffset,"px);\n  ")}),(function(e){return e.overflowHidden&&"\n    overflow: hidden;\n  "}));i.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-15ofupc-1"})(["padding:","px;",""],2*c.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}))},16488:function(e,n,t){"use strict";t.d(n,{IJ:function(){return h},M8:function(){return Z},Uc:function(){return O},XM:function(){return k},_U:function(){return v},eI:function(){return j},gU:function(){return y},lO:function(){return E},ri:function(){return g},tL:function(){return x},vJ:function(){return P},xH:function(){return m}});var i,r=t(82394),o=t(92083),u=t.n(o),l=t(3917),c=t(4383),s=t(30229),a=t(42122),d=t(86735);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(e){return!!e&&!Object.values(s.U5).includes(e)};function h(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,i=n.completed_at,o=n.started_at,l=n.status,c=null;o&&i&&(c=u()(i).valueOf()-u()(o).valueOf());return f(f({},e),{},(0,r.Z)({},t,{runtime:c,status:l}))}),{})}var b,g=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:s.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:s.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:s.Xm.API}];return e?n.slice(0,1):n};function m(e){var n=(0,a.gR)(e,[s.gm.INTERVAL,s.gm.TYPE]),t=e[s.gm.INTERVAL];t&&(n["schedule_interval[]"]=encodeURIComponent(t));var i=e[s.gm.TYPE];return i&&(n["schedule_type[]"]=i),n}function j(e){return e?new Date(u()(e).valueOf()):null}function O(e,n){return n?(0,l.XG)(e,n):function(e){if("string"!==typeof e)return e;var n=e.split("+")[0];return u()(j(n)).format(l.Nx)}(e)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(b||(b={}));var x=(i={},(0,r.Z)(i,b.DAY,86400),(0,r.Z)(i,b.HOUR,3600),(0,r.Z)(i,b.MINUTE,60),(0,r.Z)(i,b.SECOND,1),i);function y(e){var n=b.SECOND,t=e;return e%86400===0?(t/=86400,n=b.DAY):e%3600===0?(t/=3600,n=b.HOUR):e%60===0&&(t/=60,n=b.MINUTE),{time:t,unit:n}}function P(e,n){return e*x[n]}function k(e,n,t){var i,r=u()(e);return r.set("hour",+(null===n||void 0===n?void 0:n.hour)||0),r.set("minute",+(null===n||void 0===n?void 0:n.minute)||0),r.set("second",0),i=r.format(l.TD),null!==t&&void 0!==t&&t.includeSeconds&&(i=i.concat(":00")),null!==t&&void 0!==t&&t.localTimezone&&(i=r.format(l.lE),null!==t&&void 0!==t&&t.convertToUtc&&(i=(0,l.d$)(i,{includeSeconds:null===t||void 0===t?void 0:t.includeSeconds,utcFormat:!0}))),i}function Z(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",i=!0;if(i){var r=(0,c.XF)();n?t="".concat(r,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/api_trigger"):(t="".concat(r,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(t="".concat(t,"/").concat(e.token)))}return t}function _(e,n,t){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,t){var i=t.indexOf(e),r=0;if(n<0)for(var o=0;o>n;o--)0===i?(i=t.length-1,r-=1):i-=1;else if(n>0)for(var u=0;u<n;u++)i===t.length-1?(i=0,r+=1):i+=1;var l="number"===typeof t[i]?t[i]:e;return{additionalOffset:r,cronValue:String(l)}}(+e,n,t)}var w=(0,d.m5)(60),T=(0,d.m5)(24),S=(0,l.Cs)();function E(e,n){if(!e)return e;var t=u()().local().format("Z"),i=t.split(":"),r="-"===t[0],o=3===i[0].length?Number(i[0].slice(1)):Number(i[0]),l=Number(i[1]);(r&&!n||!r&&n)&&(o=-o,l=-l);var c=e.split(" "),s=c[0],a=c[1],d=c[2],p=_(s,l,w),f=_(a,o+p.additionalOffset,T);if(c[0]=p.cronValue,c[1]=f.cronValue,0!==(null===f||void 0===f?void 0:f.additionalOffset)){var v=_(d,f.additionalOffset,S);c[2]=v.cronValue}return c.join(" ")}},55072:function(e,n,t){"use strict";t.d(n,{Et:function(){return p},Q:function(){return d}});t(82684);var i=t(71180),r=t(55485),o=t(38276),u=t(31748),l=t(72473),c=t(79633),s=t(70515),a=t(28598),d=30,p=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,p=e.totalPages,f=[],v=t;if(v>p)f=Array.from({length:p},(function(e,n){return n}));else{var h=Math.floor(v/2),b=n-h;n+h>=p?(b=p-v+2,v-=2):n-h<=0?(b=0,v-=2):(v-=4,b=n-Math.floor(v/2)),f=Array.from({length:v},(function(e,n){return n+b}))}return(0,a.jsx)(a.Fragment,{children:p>0&&(0,a.jsxs)(r.ZP,{alignItems:"center",children:[(0,a.jsx)(i.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,a.jsx)(l.PaginateArrowLeft,{size:1.5*s.iI,stroke:u.Av})}),!f.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(i.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!f.includes(1)&&(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(i.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),f.map((function(e){return(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(i.ZP,{backgroundColor:e===n&&c.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!f.includes(p-1)&&(0,a.jsxs)(a.Fragment,{children:[!f.includes(p-2)&&(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(i.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(i.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(p-1)},children:p})},p-1)]}),(0,a.jsx)(o.Z,{ml:1}),(0,a.jsx)(i.ZP,{disabled:n===p-1,onClick:function(){return d(n+1)},children:(0,a.jsx)(l.PaginateArrowRight,{size:1.5*s.iI,stroke:u.Av})})]})})}},9134:function(e,n,t){"use strict";var i=t(82684),r=t(21124),o=t(68432),u=t(25976),l=t(65292),c=t(44897),s=t(95363),a=t(70515),d=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,p=e.showLineNumbers,f=e.small,v=e.source,h=e.wrapLines,b=(0,i.useContext)(u.ThemeContext);function g(e){var i=e.value;return(0,d.jsx)(o.Z,{customStyle:{backgroundColor:(b.background||c.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:s.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*a.iI,paddingTop:2*a.iI},language:n,lineNumberStyle:{color:(b.content||c.Z.content).muted},showLineNumbers:p,style:l._4,useInlineStyles:!0,wrapLines:h,children:i})}return(0,d.jsx)(r.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(g,{value:n})}},children:v})}},14532:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ue}});var i=t(77837),r=t(75582),o=t(82394),u=t(38860),l=t.n(u),c=t(82684),s=t(69864),a=t(34376),d=t(23192),p=t(71180),f=t(15338),v=t(97618),h=t(55485),b=t(85854),g=t(55072),m=t(75457),j=t(44265),O=t(57653),x=t(93808),y=t(38276),P=t(4190),k=t(30160),Z=t(35686),_=t(21831),w=t(26304),T=t(90299),S=t(93859),E=t(24138),I=t(62302),D=t(88494),C=t(28256),N=t(48339),R=t(46684),M=t(70515),U=t(66909),L=t(8955),A=t(16488),B=t(81728),G=t(86735),F=t(28598),H=["blockRuns","blocks","blocksOverride","columns","dataType","height","heightOffset","loadingData","outputs","pipeline","renderColumnHeader","rows","selectedRun","selectedTab","setSelectedTab","textData","width"];function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z={uuid:"Dependency tree"},J={uuid:"Block output"},Y=[J,z];var K=t(28795),$=t(81655),q=t(3917),W=t(72619),Q=t(95924),ee=t(69419),ne=t(70320);function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re=200;function oe(e){var n=e.pipeline,t=e.pipelineRun,i=(0,ne.qB)(),o=(0,a.useRouter)(),u=(0,ee.iV)(),l=null!==u&&void 0!==u&&u.page?u.page:0,x=(0,c.useState)(null),X=x[0],te=x[1],oe=(0,c.useState)(Y[0]),ue=oe[0],le=oe[1],ce=(0,c.useState)(null),se=ce[0],ae=ce[1],de=(0,c.useState)(null),pe=de[0],fe=de[1],ve=(0,c.useMemo)((function(){return!!pe&&pe!==j.VO.RUNNING}),[pe]),he=n.uuid,be=Z.ZP.pipelines.detail(he,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,ge=(0,c.useMemo)((function(){return ie(ie({},null===be||void 0===be?void 0:be.pipeline),{},{uuid:he})}),[be,he]),me=Z.ZP.pipeline_runs.detail(t.id,{_format:"with_basic_details"},{refreshInterval:ve?null:3e3,revalidateOnFocus:!0}),je=me.data,Oe=me.mutate,xe=(0,c.useMemo)((function(){return(null===je||void 0===je?void 0:je.pipeline_run)||{}}),[je]),ye=xe.execution_date,Pe=xe.id,ke=xe.status,Ze={_limit:re,_offset:l*re,pipeline_run_id:Pe},_e=null===u||void 0===u?void 0:u[$.lG.SORT_COL_IDX],we=null===u||void 0===u?void 0:u[$.lG.SORT_DIRECTION];if(_e){var Te=d.fi[_e],Se=we||$.sh.ASC;Ze.order_by="".concat(Te,"%20").concat(Se)}(0,c.useEffect)((function(){pe!==ke&&fe(ke)}),[pe,ke]);var Ee=Z.ZP.block_runs.list(Ze,{refreshInterval:ve?null:5e3},{pauseFetch:"undefined"===typeof Pe||null===Pe}),Ie=Ee.data,De=Ee.mutate,Ce=(0,c.useMemo)((function(){return(null===Ie||void 0===Ie?void 0:Ie.block_runs)||[]}),[Ie]),Ne=Ce.map((function(e){return e.block_uuid})),Re=(0,c.useMemo)((function(){return Ne}),[Ne]),Me=Z.ZP.blocks.pipeline_runs.list(null===t||void 0===t?void 0:t.id,{_limit:re,block_uuid:Re},{refreshInterval:ve?null:5e3}).data,Ue=(0,s.Db)(Z.ZP.pipeline_runs.useUpdate(Pe),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(e){e.pipeline_run;te(null),null===De||void 0===De||De(),Oe()},onErrorCallback:function(e,n){return ae({errors:n,response:e})}})}}),Le=(0,r.Z)(Ue,2),Ae=Le[0],Be=Le[1].isLoading,Ge=Z.ZP.outputs.block_runs.list(null===X||void 0===X?void 0:X.id),Fe=Ge.data,He=Ge.loading;(0,c.useEffect)((function(){X||(null===ue||void 0===ue?void 0:ue.uuid)!==J.uuid||le(z)}),[X,null===ue||void 0===ue?void 0:ue.uuid]);var Xe=(0,c.useMemo)((function(){return(0,F.jsx)(d.ZP,{blockRuns:Ce,onClickRow:function(e){te((function(n){var t=Ce[e],i=(null===n||void 0===n?void 0:n.id)!==t.id?t:null;return i&&le((function(e){return e!==J?J:e})),i}))},pipeline:ge,selectedRun:X,setErrors:ae,sortableColumnIndexes:d.lG})}),[Ce,ge,X]),Ve=(null===ge||void 0===ge?void 0:ge.type)!==O.qL.STREAMING&&pe&&pe!==j.VO.COMPLETED,ze=((null===ge||void 0===ge?void 0:ge.type)===O.qL.PYTHON||(null===ge||void 0===ge?void 0:ge.type)===O.qL.INTEGRATION)&&X&&j.Az.includes(pe),Je=(0,c.useMemo)((function(){var e;return(null===Ie||void 0===Ie||null===(e=Ie.metadata)||void 0===e?void 0:e.count)||[]}),[Ie]),Ye=(0,c.useMemo)((function(){return(0,F.jsx)(y.Z,{p:2,children:(0,F.jsx)(g.ZP,{maxPages:g.Et,onUpdate:function(e){var n=Number(e),t=ie(ie({},u),{},{page:n>=0?n:0});te(null),o.push("/pipelines/[pipeline]/runs/[run]","/pipelines/".concat(he,"/runs/").concat(Pe,"?").concat((0,ee.uM)(t)))},page:Number(l),totalPages:Math.ceil(Je/re)})})}),[l,Pe,he,u,o,Je]),Ke=(0,c.useCallback)((function(e){return function(e){var n,t,i,o=e.blockRuns,u=e.blocks,l=e.blocksOverride,c=(e.columns,e.dataType,e.height),s=e.heightOffset,a=e.loadingData,d=e.outputs,p=e.pipeline,v=e.renderColumnHeader,b=(e.rows,e.selectedRun),g=e.selectedTab,m=e.setSelectedTab,j=(e.textData,e.width),O=V({},(0,w.Z)(e,H));O.blockStatus=(0,A.IJ)(o);var x=(0,G.HK)(u,(function(e){return e.uuid})),Z=(0,G.HK)(l,(function(e){return e.uuid})),X=V(V({},x),Z),K=null===X||void 0===X?void 0:X[null===b||void 0===b||null===(n=b.block_uuid)||void 0===n||null===(t=n.split)||void 0===t||null===(i=t.call(n,":"))||void 0===i?void 0:i[0]],$=[],q=[],W=(0,B.bH)();if(!a){var Q,ee={};null===d||void 0===d||d.forEach((function(e){var n=e.type;ee[n]||(ee[n]={outputs:[],priority:Object.keys(ee).length}),ee[n].outputs.push(e)})),null===(Q=(0,G.YC)(Object.entries(ee),(function(e){var n=(0,r.Z)(e,2);return n[0],n[1].priority})))||void 0===Q||Q.forEach((function(e,n){var t=(0,r.Z)(e,2),i=t[0],o=t[1].outputs,u=[];null===o||void 0===o||o.forEach((function(e,t){var r=e.sample_data,l=e.text_data,a=e.type,d=(0,F.jsx)(y.Z,{ml:2,children:(0,F.jsx)(k.ZP,{children:"This block run has no output."})},"output-empty-".concat(n,"-").concat(t)),p=(0,F.jsx)("div",{});if(a)p=(0,F.jsx)(C.Z,{block:K,contained:!0,containerWidth:j,disableSpacingBetweenGroups:!0,first:0===t,height:c-(s+90)-102,index:t,last:t===o.length-1,normalPadding:!0,output:e,selected:!0},"output-".concat(t));else if(a===N.Gi.TABLE){var f=((null===r||void 0===r?void 0:r.columns)||[]).slice(0,40),h=(null===r||void 0===r?void 0:r.rows)||[];p=h&&(null===h||void 0===h?void 0:h.length)>=1?(0,F.jsx)(S.Z,{columnHeaderHeight:v?U.Eh:0,columns:f,height:c-s-90,noBorderBottom:!0,noBorderLeft:!0,noBorderRight:!0,renderColumnHeader:v,rows:h},"output-table-".concat(n,"-").concat(t)):d}else if(N.Gi.IMAGE_PNG===a&&l)p=(0,F.jsx)("div",{style:{backgroundColor:"white",maxHeight:c-s-90,overflow:"auto"},children:(0,F.jsx)("img",{alt:"Image from code output",src:"data:image/png;base64, ".concat(l)})});else if(N.Gi.TEXT_HTML===a&&l){var b=String((0,B.un)(l));p=(0,F.jsx)(D.T5,{contained:!0,normalPadding:!0,children:(0,F.jsx)(D.wx,{monospace:!0,children:(0,F.jsx)(I.Z,{html:l})})},b)}else{var g=(0,B.Pb)(l)?JSON.stringify(JSON.parse(l),null,2):l;p="undefined"!==typeof l&&null!==l?(0,F.jsx)(y.Z,{ml:2,children:(0,F.jsx)(k.ZP,{monospace:!0,children:(0,F.jsx)("pre",{children:g})})},"output-text-".concat(n,"-").concat(t)):d}var m=W[n];N.Gi.TEXT===i?(u.push(p),0===t&&q.push({uuid:"Block output ".concat(t+1).concat(m)})):($.push(p),q.push({uuid:"Block output ".concat(t+1).concat(m)}))})),N.Gi.TEXT===i&&$.push(u)}))}var ne=$,te=q,ie=Y;(null===te||void 0===te?void 0:te.length)>=2&&(ie=[J].concat((0,_.Z)(te.slice(1)),[z]));var re=g&&m,oe=ne[ie.findIndex((function(e){return e.uuid===(null===g||void 0===g?void 0:g.uuid)}))];return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{style:{position:"fixed",top:R.Mz},children:re&&(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(y.Z,{py:0,children:(0,F.jsx)(T.Z,{onClickTab:m,regularSizeText:!0,selectedTabUUID:null===g||void 0===g?void 0:g.uuid,tabs:b?ie:[z],underlineStyle:!0})})})}),(0,F.jsxs)("div",{style:{position:"relative",top:L.u$},children:[re&&(0,F.jsx)(f.Z,{light:!0}),(!b||z.uuid===(null===g||void 0===g?void 0:g.uuid))&&(0,F.jsx)(E.ZP,V(V({},O),{},{blocksOverride:l,enablePorts:!1,height:c,heightOffset:(s||0)+(re?L.u$+1:0),pipeline:p})),b&&g&&z.uuid!==(null===g||void 0===g?void 0:g.uuid)&&(0,F.jsxs)(F.Fragment,{children:[a&&(0,F.jsx)(y.Z,{mt:2,children:(0,F.jsx)(h.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,F.jsx)(P.Z,{color:"white",large:!0})})}),!a&&(0,F.jsx)(y.Z,{py:M.cd,children:oe})]})]})]})}(ie(ie({},e),{},{blocks:null===Me||void 0===Me?void 0:Me.blocks,blockRuns:Ce,blocksOverride:Je<=re?null===Me||void 0===Me?void 0:Me.blocks:null,loadingData:He,outputs:null===Fe||void 0===Fe?void 0:Fe.outputs,selectedRun:X,selectedTab:ue,setSelectedTab:le,showDynamicBlocks:!0}))}),[Ce,Me,Fe,He,X,ue,le,Je]);return(0,F.jsxs)(m.Z,{breadcrumbs:[{label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(he,"/runs"),href:"/pipelines/[pipeline]/runs"}},{label:function(){return i?(0,q.XG)(ye,i):ye}}],buildSidekick:Ke,errors:se,pageName:K.M.RUNS,pipeline:ge,setErrors:ae,subheader:(Ve||ze)&&(0,F.jsxs)(h.ZP,{alignItems:"center",children:[j.BF.includes(pe)&&(0,F.jsxs)(v.Z,{children:[(0,F.jsx)(k.ZP,{bold:!0,default:!0,large:!0,children:"Pipeline is running"}),(0,F.jsx)(y.Z,{mr:1}),(0,F.jsx)(P.Z,{inverted:!0}),(0,F.jsx)(y.Z,{mr:2})]}),Ve&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(p.ZP,{danger:!0,loading:Be,onClick:function(e){(0,Q.j)(e),Ae({pipeline_run:{pipeline_run_action:"retry_blocks"}})},outline:!0,children:"Retry incomplete blocks"}),(0,F.jsx)(y.Z,{mr:2})]}),ze&&(0,F.jsxs)(p.ZP,{loading:Be,onClick:function(e){(0,Q.j)(e),Ae({pipeline_run:{from_block_uuid:X.block_uuid,pipeline_run_action:"retry_blocks"}})},outline:!0,primary:!0,children:["Retry from selected block (",X.block_uuid,")"]})]}),title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"pipelines/detail/".concat(K.M.RUNS),children:[(0,F.jsx)(y.Z,{mt:M.cd,px:M.cd,children:(0,F.jsx)(b.Z,{level:5,children:"Block runs"})}),(0,F.jsx)(f.Z,{light:!0,mt:M.cd,short:!0}),Xe,Ye]})}oe.getInitialProps=function(){var e=(0,i.Z)(l().mark((function e(n){var t,i,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,i=t.pipeline,r=t.run,e.abrupt("return",{pipeline:{uuid:i},pipelineRun:{id:r}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var ue=(0,x.Z)(oe)},39525:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs/[run]",function(){return t(14532)}])}},function(e){e.O(0,[125,1799,9161,7162,1557,3782,8095,4982,9774,2888,179],(function(){return n=39525,e(e.s=n);var n}));var n=e.O();_N_E=n}]);