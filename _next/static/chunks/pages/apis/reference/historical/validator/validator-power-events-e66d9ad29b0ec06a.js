(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{7378:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apis/reference/historical/validator/validator-power-events",function(){return n(9410)}])},9410:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return i}});var r=n(5893),a=n(2673),t=n(2643),o=n(4482);let i=[{depth:2,value:"[GET] /v1/:network/validators/:validatorAddress/powerEvents",id:"get-v1networkvalidatorsvalidatoraddresspowerevents"},{depth:3,value:"Request",id:"request"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",h2:"h2",strong:"strong",p:"p",h3:"h3",pre:"pre",code:"code",span:"span"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Validator Voting Power Events"}),"\n",(0,r.jsxs)(s.h2,{id:"get-v1networkvalidatorsvalidatoraddresspowerevents",children:[(0,r.jsx)(s.strong,{children:"[GET]"})," /v1/:network/validators/:validatorAddress/powerEvents"]}),"\n",(0,r.jsx)(s.p,{children:"Get voting power events of validator"}),"\n",(0,r.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,r.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Headers",children:(0,r.jsx)(s.code,{"data-language":"yaml","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Authorization"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Bearer {access_token}"})]})})}),"\n",(0,r.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Parameters",children:(0,r.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# The name of network"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, required)"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"network"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"cosmos"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# The address of account"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, required)"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"validatorAddress"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"cosmosvaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4epsluffn"})]})]})}),"\n",(0,r.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Queries",children:(0,r.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Reqeust per page"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (number, optional, default: 20)"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"take"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Value of `pagination.searchAfter` from previous request for pagination"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, optional)"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"searchAfter"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MTY4OTc1NTU4NjAwMA=="})]})]})}),"\n",(0,r.jsx)(o.j,{method:"GET",host:"https://apis.mintscan.io",url:"/v1/:network/validators/:validatorAddress/powerEvents",query:[{key:"take",type:"number",optional:!0,placeholder:"20"},{key:"searchAfter",type:"string",optional:!0,placeholder:"MTY4OTc1NTU4NjAwMA=="}],useBearerAuthorization:!0})]})}s.default=(0,a.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/apis/reference/historical/validator/validator-power-events.mdx",route:"/apis/reference/historical/validator/validator-power-events",timestamp:1693389556e3,title:"Validator Voting Power Events",headings:i},pageNextRoute:"/apis/reference/historical/validator/validator-power-events"})}},function(e){e.O(0,[2673,9659,5369,834,9774,2888,179],function(){return e(e.s=7378)}),_N_E=e.O()}]);