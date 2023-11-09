(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3192],{6794:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apis/reference/utilities/prices",function(){return n(2287)}])},2287:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return t}});var a=n(1527),i=n(7178),l=n(2783),r=n(2044);let t=[{depth:2,value:"[GET] /v1/prices/:symbol/coingeckoId",id:"get-v1pricessymbolcoingeckoid"},{depth:3,value:"Request",id:"request"},{depth:2,value:"[GET] /v1/prices/symbol/:symbol",id:"get-v1pricessymbolsymbol"},{depth:3,value:"Request",id:"request-1"},{depth:2,value:"[GET] /v1/prices/coingeckoId/:geckoId",id:"get-v1pricescoingeckoidgeckoid"},{depth:3,value:"Request",id:"request-2"}];function o(e){let s=Object.assign({h1:"h1",h2:"h2",strong:"strong",p:"p",h3:"h3",pre:"pre",code:"code",span:"span"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{children:"Prices"}),"\n",(0,a.jsxs)(s.h2,{id:"get-v1pricessymbolcoingeckoid",children:[(0,a.jsx)(s.strong,{children:"[GET]"})," /v1/prices/:symbol/coingeckoId"]}),"\n",(0,a.jsx)(s.p,{children:"Get coingecko ID via symbol"}),"\n",(0,a.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Headers",children:(0,a.jsx)(s.code,{"data-language":"yaml","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Authorization"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Bearer {access_token}"})]})})}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Parameters",children:(0,a.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Symbol of the asset to be queried"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, required)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"symbol"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"uatom"})]})]})}),"\n",(0,a.jsx)(r.j,{method:"GET",host:"https://apis.mintscan.io",url:"/v1/prices/:symbol/coingeckoId",useBearerAuthorization:!0}),"\n",(0,a.jsxs)(s.h2,{id:"get-v1pricessymbolsymbol",children:[(0,a.jsx)(s.strong,{children:"[GET]"})," /v1/prices/symbol/:symbol"]}),"\n",(0,a.jsx)(s.p,{children:"Get hourly prices via symbol"}),"\n",(0,a.jsx)(s.h3,{id:"request-1",children:"Request"}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Headers",children:(0,a.jsx)(s.code,{"data-language":"yaml","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Authorization"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Bearer {access_token}"})]})})}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Parameters",children:(0,a.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Symbol of the asset to be queried"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, required)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"symbol"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"uatom"})]})]})}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Queries",children:(0,a.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# End datetime for obtaining prices"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (datetime, optional, default: CURRENT_TIMESTAMP)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"toDateTime"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 2023-04-21 23:59:59"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:" "}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Reqeust per page"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (number, optional, default: 24)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"ticks"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"24"})]})]})}),"\n",(0,a.jsx)(r.j,{method:"GET",host:"https://apis.mintscan.io",url:"/v1/prices/symbol/:symbol",query:[{key:"ticks",type:"number",optional:!0,placeholder:"24"},{key:"toDateTime",type:"datetime",optional:!0,placeholder:"YYYY-MM-DD OR YYYY-MM-DD HH:mm:ii"}],useBearerAuthorization:!0}),"\n",(0,a.jsxs)(s.h2,{id:"get-v1pricescoingeckoidgeckoid",children:[(0,a.jsx)(s.strong,{children:"[GET]"})," /v1/prices/coingeckoId/:geckoId"]}),"\n",(0,a.jsx)(s.p,{children:"Get hourly prices via coingeckoId"}),"\n",(0,a.jsx)(s.h3,{id:"request-2",children:"Request"}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Headers",children:(0,a.jsx)(s.code,{"data-language":"yaml","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Authorization"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Bearer {access_token}"})]})})}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Parameters",children:(0,a.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# CoingeckoId of the asset to be queried"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, required)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"geckoId"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"cosmos"})]})]})}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Queries",children:(0,a.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# End datetime for obtaining prices"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (datetime, optional, default: CURRENT_TIMESTAMP)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"toDateTime"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 2023-04-21 23:59:59"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:" "}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Reqeust per page"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (number, optional, default: 24)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"ticks"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"24"})]})]})}),"\n",(0,a.jsx)(r.j,{method:"GET",host:"https://apis.mintscan.io",url:"/v1/prices/coingeckoId/:geckoId",query:[{key:"ticks",type:"number",optional:!0,placeholder:"24"},{key:"toDateTime",type:"datetime",optional:!0,placeholder:"YYYY-MM-DD OR YYYY-MM-DD HH:mm:ii"}],useBearerAuthorization:!0})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"pages/apis/reference/utilities/prices.mdx",route:"/apis/reference/utilities/prices",timestamp:1693389556e3,title:"Prices",headings:t},pageNextRoute:"/apis/reference/utilities/prices"})}},function(e){e.O(0,[7178,3836,1789,935,9774,2888,179],function(){return e(e.s=6794)}),_N_E=e.O()}]);