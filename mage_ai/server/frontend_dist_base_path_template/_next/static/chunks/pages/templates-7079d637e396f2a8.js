(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5240],{60523:function(e,n,t){"use strict";var i=t(21831),r=t(82394),u=t(82684),o=t(38626),l=t(34376),d=t(54750),s=t(71180),c=t(90299),a=t(44898),p=t(55485),f=t(88328),h=t(38276),v=t(4190),m=t(48381),j=t(5755),b=t(30160),x=t(35686),g=t(72473),y=t(84649),Z=t(32929),w=t(15610),O=t(19183),P=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n,t=e.contained,r=e.defaultLinkUUID,k=e.defaultTab,_=e.objectType,I=e.onClickCustomTemplate,T=e.pipelineUUID,M=e.showAddingNewTemplates,A=e.showBreadcrumbs,S=e.tabs,U=(0,l.useRouter)(),E=(0,u.useContext)(o.ThemeContext),N=(0,O.i)(),R=N.height,D=N.width,B=(0,u.useMemo)((function(){return S||Z.dP}),[S]),H=(0,u.useState)(M||!1),q=H[0],F=H[1],z=(0,u.useState)(r?Z.qy.find((function(e){return e.uuid===r})):Z.qy[0]),W=z[0],L=z[1],G=(0,u.useState)(k?B.find((function(e){return e.uuid===(null===k||void 0===k?void 0:k.uuid)})):B[0]),X=G[0],Y=G[1],V=(0,u.useState)(null),J=V[0],K=V[1],Q=x.ZP.custom_templates.list({object_type:a.Z},{},{pauseFetch:Z.n9.uuid!==(null===X||void 0===X?void 0:X.uuid)}),$=Q.data,ee=Q.mutate,ne=(0,u.useMemo)((function(){var e=(null===$||void 0===$?void 0:$.custom_templates)||[];return null!==W&&void 0!==W&&W.filterTemplates?null===W||void 0===W?void 0:W.filterTemplates(e):e}),[$,W]),te=x.ZP.custom_templates.list({object_type:a.R},{},{pauseFetch:Z.A2.uuid!==(null===X||void 0===X?void 0:X.uuid)}),ie=te.data,re=te.mutate,ue=(0,u.useMemo)((function(){var e=(null===ie||void 0===ie?void 0:ie.custom_templates)||[];return null!==W&&void 0!==W&&W.filterTemplates?null===W||void 0===W?void 0:W.filterTemplates(e):e}),[ie,W]),oe=(0,u.useMemo)((function(){return Z.qy.map((function(e){var n=e.Icon,t=e.label,i=e.selectedBackgroundColor,r=e.selectedIconProps,u=e.uuid,o=(null===W||void 0===W?void 0:W.uuid)===u,l=C({size:y.ZG},o&&r?r:{});return(0,P.jsx)(y.wj,{onClick:function(){return L(e)},selected:o,children:(0,P.jsxs)(p.ZP,{alignItems:"center",children:[(0,P.jsx)(y.ze,{backgroundColor:o&&i?i(E):null,children:n?(0,P.jsx)(n,C({},l)):(0,P.jsx)(g.pd,C({},l))}),(0,P.jsx)(b.ZP,{bold:!0,large:!0,children:t?t():u})]})},u)}))}),[W,E]),le=(0,u.useMemo)((function(){return Z.hS.map((function(e){var n=e.Icon,t=e.label,i=e.selectedBackgroundColor,r=e.selectedIconProps,u=e.uuid,o=(null===W||void 0===W?void 0:W.uuid)===u,l=C({size:y.ZG},o&&r?r:{});return(0,P.jsx)(y.wj,{onClick:function(){return L(e)},selected:o,children:(0,P.jsxs)(p.ZP,{alignItems:"center",children:[(0,P.jsx)(y.ze,{backgroundColor:o&&i?i(E):null,children:n?(0,P.jsx)(n,C({},l)):(0,P.jsx)(g.pd,C({},l))}),(0,P.jsx)(b.ZP,{bold:!0,large:!0,children:t?t():u})]})},u)}))}),[W,E]),de=(0,u.useMemo)((function(){return null===ne||void 0===ne?void 0:ne.map((function(e){var n=e.description,t=e.name,r=e.tags,u=e.template_uuid,o=e.user,l=[];return null!==r&&void 0!==r&&r.length?l.push.apply(l,(0,i.Z)(r)):null!==o&&void 0!==o&&o.username&&l.push(null===o||void 0===o?void 0:o.username),(0,P.jsxs)(y.UE,{onClick:function(){I?I(e):U.push("/templates/[...slug]","/templates/".concat(encodeURIComponent(u)))},children:[(0,P.jsx)(y.Tj,{children:(0,P.jsx)(b.ZP,{bold:!0,monospace:!0,textOverflow:!0,children:t||u})}),(0,P.jsx)(y.SL,{children:(0,P.jsx)(b.ZP,{default:!!n,italic:!n,muted:!n,textOverflowLines:2,children:n||"No description"})}),(0,P.jsx)(y.EN,{children:(null===l||void 0===l?void 0:l.length)>=1&&(0,P.jsx)(m.Z,{tags:null===l||void 0===l?void 0:l.map((function(e){return{uuid:e}}))})})]},u)}))}),[ne,I,U]),se=(0,u.useMemo)((function(){return null===ue||void 0===ue?void 0:ue.map((function(e){var n=e.description,t=e.name,r=e.tags,u=e.template_uuid,o=e.user,l=[];return null!==r&&void 0!==r&&r.length?l.push.apply(l,(0,i.Z)(r)):null!==o&&void 0!==o&&o.username&&l.push(null===o||void 0===o?void 0:o.username),(0,P.jsxs)(y.UE,{onClick:function(){I?I(e):U.push("/templates/[...slug]","/templates/".concat(encodeURIComponent(u),"?object_type=").concat(a.R))},children:[(0,P.jsx)(y.Tj,{children:(0,P.jsx)(b.ZP,{bold:!0,monospace:!0,textOverflow:!0,children:t||u})}),(0,P.jsx)(y.SL,{children:(0,P.jsx)(b.ZP,{default:!!n,italic:!n,muted:!n,textOverflowLines:2,children:n||"No description"})}),(0,P.jsx)(y.EN,{children:(null===l||void 0===l?void 0:l.length)>=1&&(0,P.jsx)(m.Z,{tags:null===l||void 0===l?void 0:l.map((function(e){return{uuid:e}}))})})]},u)}))}),[ue,I,U]),ce=(0,u.useMemo)((function(){if(!A)return null;var e=[];return q?e.push.apply(e,[{label:function(){return"Templates"},onClick:function(){F(!1)}},{bold:!0,label:function(){return"New custom template"}}]):e.push({label:function(){return"Templates"}}),(0,P.jsx)(y.FX,{children:(0,P.jsx)(d.Z,{breadcrumbs:e})})}),[q,A]),ae=(0,u.useMemo)((function(){return A?36:0}),[A]),pe=(0,u.useMemo)((function(){return R-ae}),[R,ae]);if(q)return n=a.R===_&&T?(0,P.jsx)(f.Z,{onMutateSuccess:re,pipelineUUID:T,templateAttributes:W&&(null===W||void 0===W?void 0:W.uuid)!==(null===Z.qy||void 0===Z.qy?void 0:Z.qy[0].uuid)?{pipeline_type:null===W||void 0===W?void 0:W.uuid}:null,templateUUID:null===J||void 0===J?void 0:J.template_uuid}):(0,P.jsx)(j.Z,{contained:t,heightOffset:ae,onCreateCustomTemplate:t?function(e){K(e)}:null,onMutateSuccess:ee,templateAttributes:W&&(null===W||void 0===W?void 0:W.uuid)!==(null===Z.qy||void 0===Z.qy?void 0:Z.qy[0].uuid)?{block_type:null===W||void 0===W?void 0:W.uuid}:null,templateUUID:null===J||void 0===J?void 0:J.template_uuid}),t?(0,P.jsxs)(P.Fragment,{children:[A&&ce,(0,P.jsx)(y.Rd,{height:pe,width:D,children:n})]}):n;var fe=(0,P.jsxs)(y.Nk,{children:[(0,P.jsxs)(y.bC,{height:t?pe:null,children:[(0,P.jsx)(y.Yf,{children:(0,P.jsx)(c.Z,{noPadding:!0,onClickTab:function(e){t?Y(e):(0,w.u7)({object_type:Z.A2.uuid===e.uuid?a.R:a.Z})},selectedTabUUID:null===X||void 0===X?void 0:X.uuid,tabs:B})}),(0,P.jsxs)(y.wl,{contained:t,heightOffset:ae,children:[Z.n9.uuid===(null===X||void 0===X?void 0:X.uuid)&&oe,Z.A2.uuid===(null===X||void 0===X?void 0:X.uuid)&&le]})]}),(0,P.jsxs)(y.w5,{children:[Z.n9.uuid===(null===X||void 0===X?void 0:X.uuid)&&(0,P.jsx)(y.HS,{children:(0,P.jsx)(s.Z,{beforeIcon:(0,P.jsx)(g.mm,{size:y.ZG}),onClick:function(){F(!0)},primary:!0,children:"New block template"})}),Z.n9.uuid===(null===X||void 0===X?void 0:X.uuid)&&(0,P.jsxs)(P.Fragment,{children:[!$&&(0,P.jsx)(h.Z,{p:2,children:(0,P.jsx)(v.Z,{inverted:!0})}),$&&!(null!==de&&void 0!==de&&de.length)&&(0,P.jsxs)(h.Z,{p:2,children:[(0,P.jsx)(b.ZP,{children:"There are currently no templates matching your search."}),(0,P.jsx)("br",{}),(0,P.jsx)(b.ZP,{children:"Add a new template by clicking the button above."})]}),(null===de||void 0===de?void 0:de.length)>=1&&(0,P.jsx)(y.n8,{children:de})]}),Z.A2.uuid===(null===X||void 0===X?void 0:X.uuid)&&(0,P.jsxs)(P.Fragment,{children:[!ie&&(0,P.jsx)(h.Z,{p:2,children:(0,P.jsx)(v.Z,{inverted:!0})}),ie&&!(null!==se&&void 0!==se&&se.length)&&(0,P.jsxs)(h.Z,{p:2,children:[(0,P.jsx)(b.ZP,{children:"There are currently no templates matching your search."}),(0,P.jsx)("br",{}),(0,P.jsx)(b.ZP,{children:'Add a new template by right-clicking a pipeline row from the Pipelines page and selecting "Create template".'})]}),(null===se||void 0===se?void 0:se.length)>=1&&(0,P.jsx)(y.n8,{children:se})]})]})]});return t?(0,P.jsxs)(P.Fragment,{children:[A&&ce,(0,P.jsx)(y.Rd,{height:pe,width:D,children:fe})]}):fe}},94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var i=t(82394),r=t(21831),u=t(82684),o=t(50724),l=t(82555),d=t(97618),s=t(70613),c=t(94636),a=t(68899),p=t(28598);function f(e,n){var t=e.children,i=e.noPadding;return(0,p.jsx)(a.HS,{noPadding:i,ref:n,children:t})}var h=u.forwardRef(f),v=t(62547),m=t(82571),j=t(35686),b=t(98464),x=t(46684),g=t(70515),y=t(53808),Z=t(19183);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e,n){var t,i=e.addProjectBreadcrumbToCustomBreadcrumbs,f=e.after,w=e.afterHeader,P=e.afterHidden,k=e.afterWidth,C=e.afterWidthOverride,_=e.appendBreadcrumbs,I=e.before,T=e.beforeWidth,M=e.breadcrumbs,A=e.children,S=e.errors,U=e.headerMenuItems,E=e.headerOffset,N=e.mainContainerHeader,R=e.navigationItems,D=e.setAfterHidden,B=e.setErrors,H=e.subheaderChildren,q=e.subheaderNoPadding,F=e.title,z=e.uuid,W=(0,Z.i)().width,L="dashboard_after_width_".concat(z),G="dashboard_before_width_".concat(z),X=(0,u.useRef)(null),Y=(0,u.useState)(C?k:(0,y.U2)(L,k)),V=Y[0],J=Y[1],K=(0,u.useState)(!1),Q=K[0],$=K[1],ee=(0,u.useState)(I?Math.max((0,y.U2)(G,T),13*g.iI):null),ne=ee[0],te=ee[1],ie=(0,u.useState)(!1),re=ie[0],ue=ie[1],oe=(0,u.useState)(null)[1],le=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,de=null===le||void 0===le?void 0:le.projects,se={label:function(){var e;return null===de||void 0===de||null===(e=de[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},ce=[];M&&(i&&ce.push(se),ce.push.apply(ce,(0,r.Z)(M))),(null===M||void 0===M||!M.length||_)&&(null===de||void 0===de?void 0:de.length)>=1&&(null!==M&&void 0!==M&&M.length||ce.unshift({bold:!_,label:function(){return F}}),ce.unshift(se)),(0,u.useEffect)((function(){null===X||void 0===X||!X.current||Q||re||null===oe||void 0===oe||oe(X.current.getBoundingClientRect().width)}),[Q,V,re,ne,X,oe,W]),(0,u.useEffect)((function(){Q||(0,y.t8)(L,V)}),[P,Q,V,L]),(0,u.useEffect)((function(){re||(0,y.t8)(G,ne)}),[re,ne,G]);var ae=(0,b.Z)(k);return(0,u.useEffect)((function(){C&&ae!==k&&J(k)}),[C,k,ae]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.Z,{title:F}),(0,p.jsx)(c.Z,{breadcrumbs:ce,menuItems:U,project:null===de||void 0===de?void 0:de[0],version:null===de||void 0===de||null===(t=de[0])||void 0===t?void 0:t.version}),(0,p.jsxs)(a.Nk,{ref:n,children:[0!==(null===R||void 0===R?void 0:R.length)&&(0,p.jsx)(a.lm,{showMore:!0,children:(0,p.jsx)(m.Z,{navigationItems:R,showMore:!0})}),(0,p.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(v.Z,{after:f,afterHeader:w,afterHeightOffset:x.Mz,afterHidden:P,afterMousedownActive:Q,afterWidth:V,before:I,beforeHeightOffset:x.Mz,beforeMousedownActive:re,beforeWidth:a.k1+(I?ne:0),headerOffset:E,hideAfterCompletely:!D,leftOffset:I?a.k1:null,mainContainerHeader:N,mainContainerRef:X,setAfterHidden:D,setAfterMousedownActive:$,setAfterWidth:J,setBeforeMousedownActive:ue,setBeforeWidth:te,children:[H&&(0,p.jsx)(h,{noPadding:q,children:H}),A]})})]}),S&&(0,p.jsx)(o.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===B||void 0===B?void 0:B(null)},children:(0,p.jsx)(l.Z,O(O({},S),{},{onClose:function(){return null===B||void 0===B?void 0:B(null)}}))})]})}var k=u.forwardRef(P)},48381:function(e,n,t){"use strict";var i=t(82684),r=t(31882),u=t(55485),o=t(30160),l=t(86735),d=t(28598);n.Z=function(e){var n=e.onClickTag,t=e.tags,s=void 0===t?[]:t,c=(0,i.useMemo)((function(){return(null===s||void 0===s?void 0:s.length)||0}),[s]),a=(0,i.useMemo)((function(){return(0,l.YC)(s||[],"uuid")}),[s]);return(0,d.jsx)(u.ZP,{alignItems:"center",flexWrap:"wrap",children:null===a||void 0===a?void 0:a.reduce((function(e,t){return e.push((0,d.jsx)("div",{style:{marginBottom:2,marginRight:c>=2?4:0,marginTop:2},children:(0,d.jsx)(r.Z,{onClick:n?function(){return n(t)}:null,small:!0,children:(0,d.jsx)(o.ZP,{children:t.uuid})})},"tag-".concat(t.uuid))),e}),[])})}},31882:function(e,n,t){"use strict";var i=t(38626),r=t(71180),u=t(55485),o=t(30160),l=t(44897),d=t(72473),s=t(70515),c=t(61896),a=t(28598),p=i.default.div.withConfig({displayName:"Chip__ChipStyle",componentId:"sc-1ok73g-0"})(["display:inline-block;"," "," "," "," "," ",""],(function(e){return!e.primary&&"\n    background-color: ".concat((e.theme.background||l.Z.background).tag,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.chart||l.Z.chart).primary,";\n  ")}),(function(e){return!e.small&&"\n    border-radius: ".concat((s.iI+c.Al)/2,"px;\n    height: ").concat(1.5*s.iI+c.Al,"px;\n    padding: ").concat(s.iI/1.5,"px ").concat(1.25*s.iI,"px;\n  ")}),(function(e){return e.small&&"\n    border-radius: ".concat((s.iI/2+c.Al)/2,"px;\n    height: ").concat(c.Al+s.iI/2+2,"px;\n    padding: ").concat(s.iI/4,"px ").concat(s.iI,"px;\n  ")}),(function(e){return e.xsmall&&"\n    border-radius: ".concat((s.iI/1+c.Al)/1,"px;\n    height: ").concat(20,"px;\n    padding: 4px 6px;\n  ")}),(function(e){return e.border&&"\n    border: 1px solid ".concat((e.theme.content||l.Z.content).muted,";\n  ")}));n.Z=function(e){var n=e.border,t=e.children,i=e.disabled,l=e.label,c=e.monospace,f=e.onClick,h=e.primary,v=e.small,m=e.xsmall;return(0,a.jsx)(p,{border:n,primary:h,small:v,xsmall:m,children:(0,a.jsx)(r.Z,{basic:!0,disabled:i,noBackground:!0,noPadding:!0,onClick:f,transparent:!0,children:(0,a.jsxs)(u.ZP,{alignItems:"center",children:[t,l&&(0,a.jsx)(o.ZP,{monospace:c,small:v,xsmall:m,children:l}),!i&&f&&(0,a.jsx)("div",{style:{marginLeft:2}}),!i&&f&&(0,a.jsx)(d.x8,{default:h,muted:!h,size:v?s.iI:1.25*s.iI})]})})})}},60820:function(e,n,t){"use strict";t.r(n);var i=t(77837),r=t(38860),u=t.n(r),o=t(82684),l=t(60523),d=t(94629),s=t(93808),c=t(32929),a=t(44898),p=t(69419),f=t(28598);function h(){var e=(0,o.useState)(!1),n=e[0],t=e[1],i=(0,o.useState)(null),r=i[0],u=i[1],s=(0,o.useState)(null),h=s[0],v=s[1],m=(0,p.iV)();(0,o.useEffect)((function(){var e=m.new,n=m.object_type,i=m.pipeline_uuid;n&&u(n),i&&v(i),t(!!e)}),[m]);var j=(0,o.useMemo)((function(){var e=[n?"New":"Browse"];return r&&e.push(r),h&&e.push(h),e}),[n,r,h]),b=(0,o.useMemo)((function(){return a.R===r}),[r]);return(0,f.jsx)(d.Z,{addProjectBreadcrumbToCustomBreadcrumbs:n,breadcrumbs:n?[{label:function(){return"Templates"},linkProps:{href:b?"/templates?object_type=".concat(a.R):"/templates"}},{bold:!0,label:function(){return"New"}}]:null,title:"Templates",uuid:"Templates/index",children:(0,f.jsx)(l.Z,{defaultTab:b?c.A2:null,objectType:r,pipelineUUID:h,showAddingNewTemplates:n},j.join("_"))})}h.getInitialProps=(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,s.Z)(h)},87710:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates",function(){return t(60820)}])}},function(e){e.O(0,[844,2083,2851,1124,341,8789,4913,1821,8013,600,4636,8264,4666,5499,4839,7055,5810,1769,3859,9264,9774,2888,179],(function(){return n=87710,e(e.s=n);var n}));var n=e.O();_N_E=n}]);