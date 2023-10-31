(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8032],{9143:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mintstation/contracts/compile",function(){return r(4748)}])},4748:function(s,e,r){"use strict";r.r(e),r.d(e,{__toc:function(){return t}});var n=r(5893),o=r(2673),i=r(2643);let t=[{depth:2,value:"Single Contract Repository",id:"single-contract-repository"},{depth:2,value:"Multiple Contract Repository (Mono Repo)",id:"multiple-contract-repository-mono-repo"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre",span:"span",strong:"strong"},(0,i.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Compile a Contract"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://github.com/CosmWasm/rust-optimizer",children:"This guide is from the official CosmWasm/rust-optimizer repository"}),". This method of compiling the contract will optimize the final build so that it reduces gas consumption."]}),"\n",(0,n.jsxs)(e.p,{children:["Example contracts for this can be found at ",(0,n.jsx)(e.a,{href:"https://github.com/CosmWasm/cw-examples",children:"https://github.com/CosmWasm/cw-examples"}),". This repository ",(0,n.jsx)(e.a,{href:"compile-a-contract#multiple-contract-repository-mono-repo",children:"requires this section to compile"})," since multiple contracts are involved in a single repository."]}),"\n",(0,n.jsx)(e.h2,{id:"single-contract-repository",children:"Single Contract Repository"}),"\n",(0,n.jsxs)(e.p,{children:["The easiest way is to simply use the ",(0,n.jsx)(e.a,{href:"https://hub.docker.com/r/cosmwasm/rust-optimizer",children:"published docker image"}),". You must run this in the root of the smart contract repository you wish to compile. It will produce an ",(0,n.jsx)(e.code,{children:"artifacts"})," directory with ",(0,n.jsx)(e.code,{children:"<crate_name>.wasm"})," and ",(0,n.jsx)(e.code,{children:"contracts.txt"})," containing the hashes. This is just one file."]}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--rm"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-v"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:":/code"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"basename"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')")_cache"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:",target=/code/target"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source=registry_cache,target=/usr/local/cargo/registry"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cosmwasm/rust-optimizer:0.12.11"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# If you you use an ARM machine (Ex: Mac M1), you need to use the following"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# This is experimental and should not be used for production use"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--rm"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-v"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:":/code"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"basename"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')")_cache"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:",target=/code/target"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source=registry_cache,target=/usr/local/cargo/registry"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cosmwasm/rust-optimizer-arm64:0.12.11"})]})]})}),"\n",(0,n.jsx)(e.p,{children:"By running this in the root of your project, it will compile your contract into an artifacts/ folder. From here you can upload it to chain, collect the store code, and interact with it as you design"}),"\n",(0,n.jsx)(e.h2,{id:"multiple-contract-repository-mono-repo",children:"Multiple Contract Repository (Mono Repo)"}),"\n",(0,n.jsxs)(e.p,{children:["Sometime you want many contracts to be related and import common functionality. This is exactly the case of ",(0,n.jsx)(e.a,{href:"https://github.com/CosmWasm/cosmwasm-plus",children:(0,n.jsx)(e.code,{children:"cosmwasm-plus"})}),". In such a case, we can often not just compile from root, as the compile order is not deterministic and there are feature flags shared among the repos. This has lead to ",(0,n.jsx)(e.a,{href:"https://github.com/CosmWasm/rust-optimizer/issues/21",children:"issues in the past"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["For this use-case there is second docker image, which will compile all the ",(0,n.jsx)(e.code,{children:"contracts/*"})," folders inside the workspace and do so one-by-one in alphabetical order. It will then add all the generated wasm files to an ",(0,n.jsx)(e.code,{children:"artifacts"})," directory with a checksum, just like the basic docker image (same output format)."]}),"\n",(0,n.jsx)(e.p,{children:"To compile all contracts in the workspace deterministically, you can run:"}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--rm"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-v"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:":/code"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"basename"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')")_cache"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:",target=/code/target"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source=registry_cache,target=/usr/local/cargo/registry"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cosmwasm/workspace-optimizer:0.12.11"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# If you you use an ARM machine (Ex: Mac M1), you need to use the following"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# This is experimental and should not be used for production use"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--rm"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-v"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:":/code"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"basename"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$('}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pwd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:')")_cache"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:",target=/code/target"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--mount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"type=volume,source=registry_cache,target=/usr/local/cargo/registry"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cosmwasm/workspace-optimizer-arm64:0.12.11"})]})]})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"NOTE"}),": See the difference with ",(0,n.jsx)(e.strong,{children:"workspace-optimizer"})," vs ",(0,n.jsx)(e.strong,{children:"rust-optimizer"})," in the previous single contract example.\\"]})]})}e.default=(0,o.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/mintstation/contracts/compile.md",route:"/mintstation/contracts/compile",timestamp:1698218973e3,title:"Compile a Contract",headings:t},pageNextRoute:"/mintstation/contracts/compile"})}},function(s){s.O(0,[2673,9774,2888,179],function(){return s(s.s=9143)}),_N_E=s.O()}]);