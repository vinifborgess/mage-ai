(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{92709:function(e,n,i){"use strict";i.d(n,{IY:function(){return s},Jf:function(){return l},LR:function(){return r},NR:function(){return o},b7:function(){return t}});var t="edit",r="[ERR_BLOCK_EXISTS]",l={uuid:"All files"},s={uuid:"Files in pipeline"},o=[l,s]},74395:function(e,n,i){"use strict";i.d(n,{M:function(){return s},W:function(){return l}});var t=i(38626),r=i(46684),l=34*i(70515).iI,s=t.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],r.Mz)},8955:function(e,n,i){"use strict";i.d(n,{G7:function(){return _},ZP:function(){return P},u$:function(){return j}});var t=i(75582),r=i(82394),l=i(26304),s=i(90299),o=i(9134),c=i(17586),u=i(38276),a=i(30160),d=i(75499),p=i(70515),g=i(16488),f=i(42122),h=i(28598),v=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function x(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function m(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?x(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var j=76,Z={uuid:"Run details"},b={uuid:"Dependency tree"},_=[b,Z];function P(e){var n=e.height,i=e.heightOffset,r=e.pipeline,x=e.selectedRun,P=e.selectedTab,y=e.setSelectedTab,O=m({},(0,l.Z)(e,v));x?O.blockStatus=(0,g.IJ)(null===x||void 0===x?void 0:x.block_runs):O.noStatus=!0;var I=(0,f.Kn)(null===x||void 0===x?void 0:x.variables)?m({},null===x||void 0===x?void 0:x.variables):(null===x||void 0===x?void 0:x.variables)||{},w=null===x||void 0===x?void 0:x.event_variables;if(w&&(0,f.Kn)(w)&&!(0,f.Qr)(w))if((0,f.Kn)(I)&&I.hasOwnProperty("event")){var k=(0,f.Kn)(I.event)?I.event:{};I.event=m(m({},k),w)}else I.event=m({},w);var S=[];I&&JSON.stringify(I,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var E=x&&[["Run ID",null===x||void 0===x?void 0:x.id],["Variables",(0,h.jsx)(o.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],C=x&&(0,h.jsx)(u.Z,{pb:p.cd,px:p.cd,children:(0,h.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:E.map((function(e,n){var i=(0,t.Z)(e,2),r=i[0],l=i[1];return[(0,h.jsx)(a.ZP,{monospace:!0,muted:!0,children:r},"key_".concat(n)),(0,h.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:l},"val_".concat(n))]})),uuid:"LogDetail"})}),T=P&&y;return(0,h.jsxs)(h.Fragment,{children:[T&&(0,h.jsx)(u.Z,{py:p.cd,children:(0,h.jsx)(s.Z,{onClickTab:y,selectedTabUUID:null===P||void 0===P?void 0:P.uuid,tabs:_})}),(!T||b.uuid===(null===P||void 0===P?void 0:P.uuid))&&(0,h.jsx)(c.Z,m(m({},O),{},{height:n,heightOffset:(i||0)+(T?j:0),pipeline:r})),Z.uuid===(null===P||void 0===P?void 0:P.uuid)&&C]})}},48381:function(e,n,i){"use strict";var t=i(82684),r=i(31882),l=i(55485),s=i(30160),o=i(86735),c=i(28598);n.Z=function(e){var n=e.onClickTag,i=e.tags,u=void 0===i?[]:i,a=(0,t.useMemo)((function(){return(null===u||void 0===u?void 0:u.length)||0}),[u]),d=(0,t.useMemo)((function(){return(0,o.YC)(u||[],"uuid")}),[u]);return(0,c.jsx)(l.ZP,{alignItems:"center",flexWrap:"wrap",children:null===d||void 0===d?void 0:d.reduce((function(e,i){return e.push((0,c.jsx)("div",{style:{marginBottom:2,marginRight:a>=2?4:0,marginTop:2},children:(0,c.jsx)(r.Z,{onClick:n?function(){return n(i)}:null,small:!0,children:(0,c.jsx)(s.ZP,{children:i.uuid})})},"tag-".concat(i.uuid))),e}),[])})}},31882:function(e,n,i){"use strict";var t=i(38626),r=i(71180),l=i(55485),s=i(30160),o=i(44897),c=i(72473),u=i(70515),a=i(61896),d=i(28598),p=t.default.div.withConfig({displayName:"Chip__ChipStyle",componentId:"sc-1ok73g-0"})(["display:inline-block;"," "," "," "," "," ",""],(function(e){return!e.primary&&"\n    background-color: ".concat((e.theme.background||o.Z.background).tag,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.chart||o.Z.chart).primary,";\n  ")}),(function(e){return!e.small&&"\n    border-radius: ".concat((u.iI+a.Al)/2,"px;\n    height: ").concat(1.5*u.iI+a.Al,"px;\n    padding: ").concat(u.iI/1.5,"px ").concat(1.25*u.iI,"px;\n  ")}),(function(e){return e.small&&"\n    border-radius: ".concat((u.iI/2+a.Al)/2,"px;\n    height: ").concat(a.Al+u.iI/2+2,"px;\n    padding: ").concat(u.iI/4,"px ").concat(u.iI,"px;\n  ")}),(function(e){return e.xsmall&&"\n    border-radius: ".concat((u.iI/1+a.Al)/1,"px;\n    height: ").concat(20,"px;\n    padding: 4px 6px;\n  ")}),(function(e){return e.border&&"\n    border: 1px solid ".concat((e.theme.content||o.Z.content).muted,";\n  ")}));n.Z=function(e){var n=e.border,i=e.children,t=e.disabled,o=e.label,a=e.monospace,g=e.onClick,f=e.primary,h=e.small,v=e.xsmall;return(0,d.jsx)(p,{border:n,primary:f,small:h,xsmall:v,children:(0,d.jsx)(r.Z,{basic:!0,disabled:t,noBackground:!0,noPadding:!0,onClick:g,transparent:!0,children:(0,d.jsxs)(l.ZP,{alignItems:"center",children:[i,o&&(0,d.jsx)(s.ZP,{monospace:a,small:h,xsmall:v,children:o}),!t&&g&&(0,d.jsx)("div",{style:{marginLeft:2}}),!t&&g&&(0,d.jsx)(c.x8,{default:f,muted:!f,size:h?u.iI:1.25*u.iI})]})})})}},36604:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return se}});var t=i(75582),r=i(77837),l=i(82394),s=i(38860),o=i.n(s),c=i(82684),u=i(69864),a=i(34376),d=i(71180),p=i(39457),g=i(15338),f=i(55485),h=i(85854),v=i(48670),x=i(55072),m=i(75457),j=i(53943),Z=i(44265),b=i(30229),_=i(83784),P=i(44085),y=i(38276),O=i(4190),I=i(75499),w=i(48381),k=i(30160),S=i(12468),E=i(35686),C=i(8955),T=i(74395),D=i(44425),M=i(72473),N=i(70515),R=i(28795),A=i(97196),F=i(8916),U=i(16488),z=i(3917),H=i(44375),X=i(15610),q=i(86735),K=i(42122),V=i(50178),W=i(72619),G=i(3314),L=i(69419),B=i(70320),J=i(28598);function Q(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function Y(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Q(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var $=function(e){var n=e.errors,i=e.fetchPipelineSchedule,r=e.pipeline,l=e.pipelineSchedule,s=e.setErrors,o=e.variables,Q=(0,a.useRouter)(),$=(0,V.Ct)(),ee=(0,B.q)(),ne=(r||{}).uuid,ie=l||{},te=ie.description,re=ie.id,le=ie.event_matchers,se=ie.name,oe=ie.next_pipeline_run_date,ce=ie.schedule_interval,ue=ie.schedule_type,ae=ie.settings,de=ie.sla,pe=ie.start_time,ge=ie.status,fe=ie.tags,he=ie.variables,ve=void 0===he?{}:he,xe=(0,c.useMemo)((function(){return(0,U._U)(ce)}),[ce]),me=(0,L.iV)(),je={_limit:30,_offset:30*(null!==me&&void 0!==me&&me.page?me.page:0)};null!==me&&void 0!==me&&me.status&&(je.status=me.status),null!==l&&void 0!==l&&l.global_data_product_uuid&&(je.global_data_product_uuid=null===l||void 0===l?void 0:l.global_data_product_uuid);var Ze=E.ZP.pipeline_runs.pipeline_schedules.list(re,je,{refreshInterval:3e3,revalidateOnFocus:!0}),be=Ze.data,_e=Ze.mutate,Pe=(0,c.useMemo)((function(){return(null===be||void 0===be?void 0:be.pipeline_runs)||[]}),[be]),ye=(0,c.useMemo)((function(){var e;return(null===be||void 0===be||null===(e=be.metadata)||void 0===e?void 0:e.count)||[]}),[be]),Oe=(0,c.useState)(null),Ie=Oe[0],we=Oe[1],ke=(0,c.useMemo)((function(){var e=null!==me&&void 0!==me&&me.page?me.page:0;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(j.Z,{fetchPipelineRuns:_e,onClickRow:function(e){return we((function(n){var i=Pe[e];return(null===n||void 0===n?void 0:n.id)!==i.id?i:null}))},pipelineRuns:Pe,selectedRun:Ie,setErrors:s}),(0,J.jsx)(y.Z,{p:2,children:(0,J.jsx)(x.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),i=Y(Y({},me),{},{page:n>=0?n:0});Q.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(ne,"/triggers/").concat(re,"?").concat((0,L.uM)(i)))},page:Number(e),totalPages:Math.ceil(ye/30)})})]})}),[_e,Pe,re,ne,me,Q,Ie,s,ye]),Se=(0,c.useState)(C.G7[0]),Ee=Se[0],Ce=Se[1],Te=(0,u.Db)((function(e){return E.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:(0,K.gR)(e,["id"])})}),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){i()},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),De=(0,t.Z)(Te,2),Me=De[0],Ne=De[1].isLoading,Re=E.ZP.pipeline_triggers.pipelines.list(ne),Ae=Re.data,Fe=Re.mutate,Ue=(0,c.useMemo)((function(){return(0,q.HK)((null===Ae||void 0===Ae?void 0:Ae.pipeline_triggers)||[],(function(e){return e.name}))}),[Ae]),ze=(0,c.useMemo)((function(){return!(null===Ue||void 0===Ue||!Ue[null===l||void 0===l?void 0:l.name])}),[l,Ue]),He=(0,u.Db)(E.ZP.pipeline_triggers.pipelines.useCreate(ne),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){Fe()},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),Xe=(0,t.Z)(He,2),qe=Xe[0],Ke=Xe[1].isLoading,Ve=(0,c.useMemo)((function(){return b.fq.ACTIVE===ge}),[ge]),We=(0,c.useMemo)((function(){var e,n,i={default:!0,size:1.5*N.iI},t=[[(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.VW,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Trigger type"})]},"trigger_type_label"),(0,J.jsx)(k.ZP,{monospace:!0,children:null===(e=b.Z4[ue])||void 0===e?void 0:e.call(b.Z4)},"trigger_type")],[(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.rs,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Status"})]},"trigger_status_label"),(0,J.jsx)(k.ZP,{danger:!Ve,monospace:!0,success:Ve,children:ge},"trigger_status")]];if(te&&t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.KJ,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Description"})]},"trigger_description_label"),(0,J.jsx)(k.ZP,{children:te},"trigger_description")]),de){var r=(0,U.gU)(de),s=r.time,o=r.unit,c=1===s?o:"".concat(o,"s");t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.kI,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"SLA"})]},"trigger_sla_label"),(0,J.jsx)(k.ZP,{monospace:!0,children:"".concat(s," ").concat(c)},"trigger_sla")])}if(ce&&t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.Pf,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Frequency"})]},"trigger_frequency_label"),(0,J.jsx)(k.ZP,{monospace:!0,children:ee&&xe?(0,U.lO)(ce):ce.replace("@","")},"trigger_frequency")],[(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.aw,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Next run date"})]},"trigger_next_run_date_label"),(0,J.jsx)(k.ZP,{monospace:!0,children:oe?ee?(0,z.XG)(oe,ee):(0,z.d$)(oe,{includeSeconds:!0,utcFormat:!0}):"N/A"},"trigger_next_run_date")]),pe&&t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.aw,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Start date"})]},"trigger_start_date_label"),(0,J.jsx)(k.ZP,{monospace:!0,children:ee?(0,z.XG)(pe,ee):pe},"trigger_start_date")]),b.Xm.API===ue){var u=(0,U.M8)(l);t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(M.Ae,Y({},i)),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"API endpoint"})]},"trigger_api_endpoint_label"),(0,J.jsx)(p.Z,{copiedText:u,children:(0,J.jsx)(k.ZP,{monospace:!0,small:!0,children:u})},"trigger_api_endpoint")])}if(null!==ae&&void 0!==ae&&ae.timeout){var a=(0,U.gU)(null===ae||void 0===ae?void 0:ae.timeout),d=a.time,g=a.unit,h=1===d?g:"".concat(g,"s");t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(S.Z,{default:!0,label:"Timeout set for runs of this trigger",size:1.5*N.iI,widthFitContent:!0}),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Timeout"})]},"trigger_timeout"),(0,J.jsx)(k.ZP,{monospace:!0,children:"".concat(d," ").concat(h)},"trigger_timeout_label")])}null!==ae&&void 0!==ae&&ae.skip_if_previous_running&&t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(S.Z,{default:!0,label:"Skip current run if any previous runs are still in progress",size:1.5*N.iI,widthFitContent:!0}),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Skip if running"})]},"trigger_skip_if_running"),(0,J.jsx)(k.ZP,{monospace:!0,children:null===(n=ae.skip_if_previous_running)||void 0===n?void 0:n.toString()},"trigger_skip_if_running_label")]);return null!==ae&&void 0!==ae&&ae.allow_blocks_to_fail&&t.push([(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(S.Z,{default:!0,label:"Trigger runs will continue running blocks if other unrelated blocks fail",size:1.5*N.iI,widthFitContent:!0}),(0,J.jsx)(y.Z,{mr:1}),(0,J.jsx)(k.ZP,{default:!0,children:"Allow blocks to fail"})]},"trigger_allow_blocks_to_fail"),(0,J.jsx)(k.ZP,{monospace:!0,children:ae.allow_blocks_to_fail.toString()},"trigger_allow_blocks_to_fail_label")]),(0,J.jsx)(I.Z,{columnFlex:[null,1],rows:t})}),[te,ee,Ve,xe,oe,l,ce,ue,ae,de,pe,ge]),Ge=(0,c.useMemo)((function(){return ve||{}}),[ve]),Le=(0,c.useMemo)((function(){var e,n=[];return(0,K.Qr)(Ge)?n=(0,F.wx)(o,(function(e){return e.uuid===_.C})):Object.entries(Ge).forEach((function(e){var i=(0,t.Z)(e,2),r=i[0],l=i[1];Z.sZ!==r&&n.push({uuid:r,value:(0,F.FS)(l)})})),"undefined"!==typeof(n=(0,F.JZ)(n||[],ue))&&null!==(e=n)&&void 0!==e&&e.length?(0,J.jsx)(I.Z,{columnFlex:[null,1],rows:n.map((function(e){var n=e.uuid,i=e.value;return[(0,J.jsx)(k.ZP,{default:!0,monospace:!0,children:n},"settings_variable_label_".concat(n)),(0,J.jsx)(k.ZP,{monospace:!0,children:i},"settings_variable_".concat(n))]}))}):null}),[ue,Ge,o]),Be=(0,c.useMemo)((function(){var e,n,i=[],t=null===Ge||void 0===Ge||null===(e=Ge[Z.sZ])||void 0===e?void 0:e.blocks;return null===r||void 0===r||null===(n=r.blocks)||void 0===n||n.forEach((function(e){var n=e.type,r=e.uuid;if(D.tf.DBT===n){var l,s=(null===t||void 0===t||null===(l=t[r])||void 0===l?void 0:l.configuration)||{},o=s.flags,c=s.prefix,u=s.suffix,a=(0,H.IU)(e).name;(o||c||u)&&i.push({flags:o,prefix:c,suffix:u,uuid:a})}})),"undefined"!==typeof i&&null!==i&&void 0!==i&&i.length?(0,J.jsx)(I.Z,{columnFlex:[1,null],rows:i.map((function(e){var n=e.flags,i=e.prefix,t=e.suffix,r=e.uuid;return[(0,J.jsxs)(k.ZP,{monospace:!0,small:!0,children:[i&&(0,J.jsx)(k.ZP,{inline:!0,monospace:!0,muted:!0,small:!0,children:i}),r,t&&(0,J.jsx)(k.ZP,{inline:!0,monospace:!0,muted:!0,small:!0,children:t})]},"settings_variable_label_".concat(r)),(0,J.jsx)(k.ZP,{monospace:!0,muted:!0,small:!0,children:n&&n.join(", ")},"settings_variable_".concat(r))]}))}):null}),[r,Ge]),Je=(0,c.useMemo)((function(){return(0,J.jsx)(I.Z,{columnFlex:[null,1],columns:[{uuid:"Provider"},{uuid:"Event"}],rows:null===le||void 0===le?void 0:le.map((function(e,n){var i=e.event_type,t=e.name;return[(0,J.jsx)(k.ZP,{default:!0,monospace:!0,children:A._P[i].label()},"".concat(i,"_").concat(n,"_label")),(0,J.jsx)(k.ZP,{monospace:!0,children:t},"".concat(i,"_").concat(n,"_name"))]}))})}),[le]);return(0,J.jsxs)(m.Z,{afterHidden:!Ie,before:(0,J.jsxs)(T.M,{children:[(0,J.jsxs)(y.Z,{mb:N.HN,pt:N.cd,px:N.cd,children:[(0,J.jsxs)(y.Z,{mb:N.cd,children:[b.Xm.TIME===ue&&(0,J.jsx)(M.kO,{size:5*N.iI}),b.Xm.EVENT===ue&&(0,J.jsx)(M.Jp,{size:5*N.iI}),b.Xm.API===ue&&(0,J.jsx)(M.Bf,{size:5*N.iI}),!ue&&(0,J.jsx)(M.VW,{size:5*N.iI})]}),(0,J.jsx)(h.Z,{children:se})]}),(0,J.jsx)(y.Z,{px:N.cd,children:(0,J.jsx)(h.Z,{level:5,children:"Settings"})}),(0,J.jsx)(g.Z,{light:!0,mt:1,short:!0}),We,(null===le||void 0===le?void 0:le.length)>=1&&(0,J.jsxs)(y.Z,{my:N.HN,children:[(0,J.jsx)(y.Z,{px:N.cd,children:(0,J.jsx)(h.Z,{level:5,children:"Events"})}),(0,J.jsx)(g.Z,{light:!0,mt:1,short:!0}),Je]}),Le&&(0,J.jsxs)(y.Z,{my:N.HN,children:[(0,J.jsx)(y.Z,{px:N.cd,children:(0,J.jsx)(h.Z,{level:5,children:"Runtime variables"})}),(0,J.jsx)(g.Z,{light:!0,mt:1,short:!0}),Le]}),Be&&(0,J.jsxs)(y.Z,{my:N.HN,children:[(0,J.jsx)(y.Z,{px:N.cd,children:(0,J.jsx)(h.Z,{level:5,children:"dbt runtime settings"})}),(0,J.jsx)(g.Z,{light:!0,mt:1,short:!0}),Be]}),(null===fe||void 0===fe?void 0:fe.length)>=1&&(0,J.jsxs)(y.Z,{my:N.HN,children:[(0,J.jsx)(y.Z,{px:N.cd,children:(0,J.jsx)(h.Z,{level:5,children:"Tags"})}),(0,J.jsx)(g.Z,{light:!0,mt:1,short:!0}),(0,J.jsx)(y.Z,{mt:N.cd,px:N.cd,children:(0,J.jsx)(w.Z,{tags:null===fe||void 0===fe?void 0:fe.map((function(e){return{uuid:e}}))})})]}),(0,J.jsx)(y.Z,{my:N.HN,children:(0,J.jsxs)(y.Z,{px:N.cd,children:[(0,J.jsxs)(h.Z,{level:5,children:[ze&&"Trigger exists in code",!ze&&"Store trigger in code"]}),(0,J.jsx)(y.Z,{mt:1,children:(0,J.jsxs)(k.ZP,{default:!0,children:["Save or update the trigger and its settings in the pipeline\u2019s metadata and version control the trigger using Git. For more information, please read the ",(0,J.jsx)(v.Z,{href:"https://docs.mage.ai/guides/triggers/configure-triggers-in-code",openNewWindow:!0,children:"documentation"}),"."]})}),(0,J.jsxs)(y.Z,{mt:N.cd,children:[!Ae&&(0,J.jsx)(O.Z,{inverted:!0}),Ae&&(0,J.jsxs)(d.Z,{disabled:!(null!==l&&void 0!==l&&l.id),loading:Ke,onClick:function(){qe({pipeline_trigger:{pipeline_schedule_id:null===l||void 0===l?void 0:l.id}})},secondary:!0,children:[ze&&"Update trigger in code",!ze&&"Save trigger in code"]})]})]})})]}),beforeWidth:T.W,breadcrumbs:[{label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(ne,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{label:function(){return se},linkProps:{as:"/pipelines/".concat(ne,"/triggers/").concat(re),href:"/pipelines/[pipeline]/triggers/[...slug]"}}],buildSidekick:function(e){return(0,C.ZP)(Y(Y({},e),{},{selectedRun:Ie,selectedTab:Ee,setSelectedTab:Ce}))},errors:n,pageName:R.M.TRIGGERS,pipeline:r,setErrors:s,subheader:(0,J.jsxs)(f.ZP,{alignItems:"center",children:[(0,J.jsx)(d.Z,{beforeIcon:Ve?(0,J.jsx)(M.dz,{size:2*N.iI}):(0,J.jsx)(M.Py,{inverted:!$,size:2*N.iI}),danger:Ve&&!$,loading:Ne,onClick:function(e){(0,G.j)(e),Me({id:re,status:Ve?b.fq.INACTIVE:b.fq.ACTIVE})},outline:!0,success:!Ve&&!$,children:Ve?"Pause trigger":"Start trigger"}),(0,J.jsx)(y.Z,{mr:N.cd}),!$&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(d.Z,{linkProps:{as:"/pipelines/".concat(ne,"/triggers/").concat(re,"/edit"),href:"/pipelines/[pipeline]/triggers/[...slug]"},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Edit trigger"}),(0,J.jsx)(y.Z,{mr:N.cd})]}),(0,J.jsxs)(P.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?Q.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(ne,"/triggers/").concat(re)):(0,X.u7)({page:0,status:e.target.value})},paddingRight:4*N.iI,placeholder:"Select run status",value:(null===me||void 0===me?void 0:me.status)||"all",children:[(0,J.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Z.IK.map((function(e){return(0,J.jsx)("option",{value:e,children:Z.Do[e]},e)}))]})]}),title:function(){return se},uuid:"triggers/detail",children:[(0,J.jsx)(y.Z,{mt:N.cd,px:N.cd,children:(0,J.jsx)(h.Z,{level:5,children:"Runs for this trigger"})}),(0,J.jsx)(g.Z,{light:!0,mt:N.cd,short:!0}),ke]})},ee=i(12717),ne=i(93808),ie=i(92709);function te(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function re(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?te(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):te(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function le(e){var n=e.pipelineScheduleId,i=e.pipelineUUID,t=e.subpath,r=ie.b7===t,l=(0,c.useState)(null),s=l[0],o=l[1],u=E.ZP.variables.pipelines.list(i,{},{revalidateOnFocus:!1}).data,a=null===u||void 0===u?void 0:u.variables,d={};r&&(d._format="with_runtime_average");var p=E.ZP.pipeline_schedules.detail("undefined"!==typeof n&&n,d),g=p.data,f=p.mutate,h=null===g||void 0===g?void 0:g.pipeline_schedule,v=E.ZP.pipelines.detail(i,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,x=re(re({},null===v||void 0===v?void 0:v.pipeline),{},{uuid:i}),m=E.ZP.projects.list().data,j=(0,c.useMemo)((function(){var e;return null===m||void 0===m||null===(e=m.projects)||void 0===e?void 0:e[0]}),[m]);return r?(0,J.jsx)(ee.Z,{errors:s,fetchPipelineSchedule:f,pipeline:x,pipelineSchedule:h,project:j,setErrors:o,variables:a}):(0,J.jsx)($,{errors:s,fetchPipelineSchedule:f,pipeline:x,pipelineSchedule:h,setErrors:o,variables:a})}le.getInitialProps=function(){var e=(0,r.Z)(o().mark((function e(n){var i,r,l,s,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.query,r=i.pipeline,l=i.slug,!Array.isArray(l)){e.next=4;break}return s=(0,t.Z)(l,2),c=s[0],u=s[1],e.abrupt("return",{pipelineScheduleId:c,pipelineUUID:r,subpath:u});case 4:return e.abrupt("return",{pipelineUUID:r});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var se=(0,ne.Z)(le)},95488:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers/[...slug]",function(){return i(36604)}])}},function(e){e.O(0,[844,2083,2851,1124,341,9161,4495,9302,8013,600,4636,8264,4666,5499,4839,5457,7055,1769,3943,6333,9774,2888,179],(function(){return n=95488,e(e.s=n);var n}));var n=e.O();_N_E=n}]);