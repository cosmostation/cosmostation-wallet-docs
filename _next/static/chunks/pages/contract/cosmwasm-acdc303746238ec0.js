(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8396],{83706:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contract/cosmwasm",function(){return n(65518)}])},42064:function(e,t,n){"use strict";var i=n(11527);n(50959);var a=n(45924),c=n(68750),r=n(35483),s=n.n(r);t.Z=e=>{let t=(0,c.Z)(["emptyColor"],e);return(0,i.jsx)("div",{children:(0,i.jsx)("button",{...t,className:(0,a.Z)(s().button,e.emptyColor&&s().emptyColor),children:e.children})})}},85435:function(e,t,n){"use strict";var i=n(11527),a=n(45924),c=n(53310),r=n.n(c);t.Z=e=>{let{children:t,border:n}=e;return(0,i.jsx)("div",{className:(0,a.Z)(r().title,n&&r().border),children:t})}},84449:function(e,t,n){"use strict";var i=n(11527),a=n(79351),c=n.n(a);t.Z=e=>{let{title:t,children:n,optional:a}=e;return(0,i.jsxs)("div",{className:c().contentValue,children:[(0,i.jsxs)("div",{className:c().title,children:[t,a&&(0,i.jsx)("span",{className:c().essential,children:"*"})]}),(0,i.jsx)("div",{className:c().value,children:n})]})}},46818:function(e,t,n){"use strict";var i=n(11527);n(50959);var a=n(68750),c=n(36096),r=n.n(c);t.Z=e=>{let t=(0,a.Z)(["label","optional","type"],e);return(0,i.jsx)("input",{...t,className:r().input})}},4997:function(e,t,n){"use strict";var i=n(11527),a=n(73884),c=n(50959),r=n(68750),s=n(2677),o=n.n(s);let l={container:o().container,basicChildStyle:o().basicChildStyle,expander:o().expander,label:o().label,nullValue:o().nullValue,undefinedValue:o().undefinedValue,numberValue:o().numberValue,stringValue:o().stringValue,booleanValue:o().booleanValue,otherValue:o().otherValue,punctuation:o().punctuation,pointer:o().pointer};t.Z=e=>{let t=(0,r.Z)(["style"],e),n=(0,c.useMemo)(()=>(0,i.jsx)(a.gc,{...t,style:l}),[e.data]);return n}},65518:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return A},default:function(){return L}});var i,a,c,r,s=n(11527),o=n(77178),l=n(12783),u=n(50959),d=n(65558),h=n.n(d),_=e=>{let{children:t,...n}=e;return(0,s.jsx)("div",{className:h().container,children:(0,s.jsx)("select",{...n,className:h().select,children:e.children})})},p=n(24933),m=n(85435),v=n(84449),j=n(46818),x=n(42064);n(42121);var f=n(4997),C=n(35467),b=n.n(C),g=e=>{let{result:t,responseTime:n}=e;if(!t)return null;let i=t.status,a=t.headers,c=t.config.headers,r=t.config.url,o=t.data,l=c.Authorization,u=c.Accept,d=a["content-type"],h=a["content-length"],_=i>=400;return(0,s.jsxs)("section",{className:b().container,children:[(0,s.jsx)(m.Z,{children:"Request"}),(0,s.jsxs)("div",{className:b().sectionContent,children:[(0,s.jsx)(v.Z,{title:"Request URL",children:decodeURIComponent(r)}),!!l&&(0,s.jsx)(v.Z,{title:"Authorization",children:l}),(0,s.jsx)(v.Z,{title:"Accept",children:u})]}),(0,s.jsx)(m.Z,{border:!0,children:"Response"}),(0,s.jsxs)("div",{className:b().sectionContent,children:[(0,s.jsxs)(v.Z,{title:"Status Code",children:[i,_&&(0,s.jsx)("span",{className:b().error,children:"(Error Occurred)"})]}),(0,s.jsx)(v.Z,{title:"Content Type",children:d}),(0,s.jsx)(v.Z,{title:"Content Length",children:h}),!_&&n&&(0,s.jsxs)(v.Z,{title:"Response Time",children:[n,"ms"]})]}),(0,s.jsx)(m.Z,{border:!0,children:"Body Response"}),(0,s.jsx)(f.Z,{data:o})]})};let w=["0.15.1","0.15.0","0.14.0","0.13.0","0.12.13","0.12.12","0.12.11","0.12.10","0.12.9","0.12.8","0.12.7","0.12.6","0.12.5","0.12.4","0.12.3","0.12.1","0.12.0","0.11.5","0.11.4","0.11.3","0.11.2","0.11.0","0.10.9","0.10.8","0.10.7","0.10.6","0.10.5","0.10.4","0.10.3","0.10.2"];(i=c||(c={})).WORKSPACE="workspace",i.CONTRACT="contract",(a=r||(r={})).X86_64="x86_64",a.ARM64="arm64";var y=n(36912),V=n.n(y);let k=/^https:\/\/github.com\/([\w\.@\:/\-]+)(\.git)(\/)?$/;var N=()=>{let e=r.X86_64,[t,n]=(0,u.useState)(w[0]),[i,a]=(0,u.useState)(c.WORKSPACE),[o,l]=(0,u.useState)(""),[d,h]=(0,u.useState)(""),[f,C]=(0,u.useState)(!1),[b,y]=(0,u.useState)(),N=(0,u.useCallback)(e=>{let t=e.target.value;n(t)},[]),Z=(0,u.useCallback)(e=>{let t=e.target.value;a(t)},[]),S=(0,u.useCallback)(e=>{let t=e.target.value;l(t)},[]),R=(0,u.useCallback)(e=>{let t=e.target.value;h(t)},[]),T=(0,u.useMemo)(()=>w.includes(t)&&Object.values(c).includes(i)&&k.test(o)&&d,[t,i,o,d]),A=(0,u.useMemo)(()=>({optimizerVersion:t,projectType:i,git:o,branch:d,platform:e}),[t,i,o,d]),O=(0,u.useCallback)(async()=>{try{C(!0);let e=await p.Z.post("https://api.verify.mintscan.io/cosmwasm/verify",A);y(e)}catch(e){y(e.response)}finally{C(!1)}},[A]),L=(0,u.useCallback)(()=>{n(w[0]),a(c.WORKSPACE),l(""),h(""),y(void 0)},[]);return(0,s.jsxs)("div",{className:V().container,children:[(0,s.jsxs)("div",{className:V().contentContainer,children:[(0,s.jsxs)("div",{className:V().sectionContent,children:[(0,s.jsx)(m.Z,{children:"Parameters"}),(0,s.jsx)(v.Z,{title:"Optimizer Type",optional:!0,children:(0,s.jsxs)(_,{onChange:Z,value:i,children:[(0,s.jsx)("option",{value:c.WORKSPACE,children:"cosmwasm/workspace-optimizer"}),(0,s.jsx)("option",{value:c.CONTRACT,children:"cosmwasm/rust-optimizer"})]})}),(0,s.jsx)(v.Z,{title:"Optimizer Version",optional:!0,children:(0,s.jsx)(_,{onChange:N,value:t,children:w.map(e=>(0,s.jsx)("option",{value:e,children:e},e))})}),(0,s.jsx)(v.Z,{title:"Repository Url",optional:!0,children:(0,s.jsx)(j.Z,{onChange:S,value:o,placeholder:"https://github.com/CosmWasm/cw-plus.git"})}),(0,s.jsx)(v.Z,{title:"Branch Name",optional:!0,children:(0,s.jsx)(j.Z,{onChange:R,value:d,placeholder:"v2.0.0"})})]}),(0,s.jsxs)("div",{className:V().buttonContainer,children:[(0,s.jsx)(x.Z,{onClick:O,disabled:!T,children:"Verify"}),(0,s.jsx)(x.Z,{onClick:L,children:"Clear"})]})]}),f&&(0,s.jsx)("div",{className:V().loading,children:"Loading..."}),!f&&(0,s.jsx)(g,{result:b})]})},Z=n(97559),S=n.n(Z);let R=/^\d+$/;var T=()=>{let[e,t]=(0,u.useState)(""),[n,i]=(0,u.useState)(!1),[a,c]=(0,u.useState)(),r=(0,u.useCallback)(e=>{let n=e.target.value;t(n)},[]),o=(0,u.useMemo)(()=>R.test(e),[e]),l=(0,u.useCallback)(async()=>{try{i(!0);let t=await p.Z.get("https://api.verify.mintscan.io/cosmwasm/verify/".concat(e));c(t)}catch(e){c(e.response)}finally{i(!1)}},[e]),d=(0,u.useCallback)(()=>{t(""),c(void 0)},[]);return(0,s.jsxs)("div",{className:S().container,children:[(0,s.jsxs)("div",{className:S().contentContainer,children:[(0,s.jsxs)("div",{className:S().sectionContent,children:[(0,s.jsx)(m.Z,{children:"Parameters"}),(0,s.jsx)(v.Z,{title:"Result ID",optional:!0,children:(0,s.jsx)(j.Z,{onChange:r,value:e,placeholder:"1"})})]}),(0,s.jsxs)("div",{className:S().buttonContainer,children:[(0,s.jsx)(x.Z,{onClick:l,disabled:!o,children:"Check"}),(0,s.jsx)(x.Z,{onClick:d,children:"Clear"})]})]}),n&&(0,s.jsx)("div",{className:S().loading,children:"Loading..."}),!n&&(0,s.jsx)(g,{result:a})]})};let A=[{depth:2,value:"Unverifiable Contracts",id:"unverifiable-contracts"},{depth:2,value:"Check Verification",id:"check-verification"},{depth:2,value:"Verify Contract",id:"verify-contract"}];function O(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,l.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Cosmwasm"}),"\n",(0,s.jsx)(t.p,{children:"Please provide guidance on how to verify a Cosmwasm contract provided in the form of a cw-template or workspace template (cw-plus)."}),"\n",(0,s.jsx)(t.p,{children:"The purpose of verification is to allow users to inspect the verified contract code and ensure its trustworthiness."}),"\n",(0,s.jsx)(t.p,{children:"Cosmwasm supports verification via checksum, allowing users to verify the deployed contract code using its codeId."}),"\n",(0,s.jsx)(t.p,{children:"Verification can be conducted through the following form, where the built checksum, contract code, and schema are extracted and provided to the user."}),"\n",(0,s.jsx)(t.h2,{id:"unverifiable-contracts",children:"Unverifiable Contracts"}),"\n",(0,s.jsx)(t.p,{children:"Types of contracts that are unable to verify are the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Projects that do not match the compiler (cosmwasm/rust-optimizer, cosmwasm/workspace-optimizer)"}),"\n",(0,s.jsxs)(t.li,{children:["Contracts without corresponding script aliases in ",(0,s.jsx)(t.code,{children:"cargo schema"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'If there is no alias like schema = "run --example schema" in the .cargo/config file'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"check-verification",children:"Check Verification"}),"\n",(0,s.jsx)(t.p,{children:'After executing the "verify contract" command, you can enter the queueId from "result" to check the outcome of the verification.'}),"\n",(0,s.jsx)(T,{}),"\n",(0,s.jsx)(t.h2,{id:"verify-contract",children:"Verify Contract"}),"\n",(0,s.jsx)(t.p,{children:"You can proceed with verification by aligning the values according to the contract."}),"\n",(0,s.jsx)(N,{})]})}var L=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(O,{...e})}):O(e)},pageOpts:{filePath:"pages/contract/cosmwasm.mdx",route:"/contract/cosmwasm",timestamp:1715322796e3,title:"Cosmwasm",headings:A},pageNextRoute:"/contract/cosmwasm"})},35483:function(e){e.exports={button:"button_button__TNzCV",emptyColor:"button_emptyColor__OwiGb"}},53310:function(e){e.exports={title:"cardListTitle_title__jb7XQ",border:"cardListTitle_border__dN_aW"}},79351:function(e){e.exports={contentValue:"cardListValue_contentValue__S_bzg",title:"cardListValue_title__wT3sJ",essential:"cardListValue_essential___8Z23",value:"cardListValue_value__DbJSi"}},36096:function(e){e.exports={input:"input_input__U5Bq_"}},2677:function(e){e.exports={container:"json-viewer_container__QwONa",basicChildStyle:"json-viewer_basicChildStyle__I3vJP",expander:"json-viewer_expander__HUpK_",label:"json-viewer_label__en5Af",nullValue:"json-viewer_nullValue__mcAqL",undefinedValue:"json-viewer_undefinedValue__Tn4YA",numberValue:"json-viewer_numberValue__LdHiD",stringValue:"json-viewer_stringValue__mwJm3",booleanValue:"json-viewer_booleanValue__i9Jku",otherValue:"json-viewer_otherValue__gCYh1",punctuation:"json-viewer_punctuation__bd6C4",pointer:"json-viewer_pointer__2sfEa"}},65558:function(e){e.exports={container:"select_container__g1FNT",select:"select_select__god4Y"}},97559:function(e){e.exports={container:"check-verification_container__M8wSl",disabledDescription:"check-verification_disabledDescription__mLQ_d",cautionIcon:"check-verification_cautionIcon__p3DtY",contentContainer:"check-verification_contentContainer__i7xuR",sectionContent:"check-verification_sectionContent__cdY7o",method:"check-verification_method__zS_Hj",buttonContainer:"check-verification_buttonContainer__6kued",loading:"check-verification_loading__ENxPN"}},35467:function(e){e.exports={container:"result-section_container__iTGnR",sectionContent:"result-section_sectionContent__MRqjY",error:"result-section_error__81Soa"}},36912:function(e){e.exports={container:"verify-contract_container___RVbL",disabledDescription:"verify-contract_disabledDescription__VrqnF",cautionIcon:"verify-contract_cautionIcon__eKNL5",contentContainer:"verify-contract_contentContainer__APfBy",sectionContent:"verify-contract_sectionContent__BF20r",method:"verify-contract_method__FHpTY",buttonContainer:"verify-contract_buttonContainer__tTAeh",loading:"verify-contract_loading__2Q99o"}}},function(e){e.O(0,[7178,3836,5641,9774,2888,179],function(){return e(e.s=83706)}),_N_E=e.O()}]);