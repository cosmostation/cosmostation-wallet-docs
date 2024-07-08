(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6474],{36969:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mintstation/cli/setup",function(){return s(75928)}])},75928:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return l}});var t=s(11527),i=s(77178),a=s(12783);let l=[{depth:3,value:"Build",id:"build"},{depth:2,value:"Configure",id:"configure"}];function r(e){let n=Object.assign({h1:"h1",h3:"h3",p:"p",pre:"pre",code:"code",span:"span",h2:"h2"},(0,a.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Setup CLI"}),"\n",(0,t.jsx)(n.h3,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.p,{children:"Build Requirements"}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Go 1.20.+"})})})}),"\n",(0,t.jsx)(n.p,{children:"Clone source from repository:"}),"\n",(0,t.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/cosmostation/mintstation"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"mintstation"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"checkout"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"{SET_CURRENT_VERSION}"})]})]})}),"\n",(0,t.jsx)(n.p,{children:"Once you're on the correct tag, you can build:"}),"\n",(0,t.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# from mintstation dir"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"make"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"install"})]})]})}),"\n",(0,t.jsx)(n.p,{children:"To confirm that the installation has succeeded, you can run:"}),"\n",(0,t.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"version"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"#v0.0.1"})})]})}),"\n",(0,t.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"chain-id"})," & ",(0,t.jsx)(n.code,{children:"node"}),","]}),"\n",(0,t.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"#Update config.toml"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"config"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"chain-id"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"mintstation-1"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"config"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"node"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"{NODE_RPC_ENDPOINT:PORT}"})]})]})})]})}n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)},pageOpts:{filePath:"pages/mintstation/cli/setup.md",route:"/mintstation/cli/setup",timestamp:1700119354e3,title:"Setup CLI",headings:l},pageNextRoute:"/mintstation/cli/setup"})}},function(e){e.O(0,[7178,9774,2888,179],function(){return e(e.s=36969)}),_N_E=e.O()}]);