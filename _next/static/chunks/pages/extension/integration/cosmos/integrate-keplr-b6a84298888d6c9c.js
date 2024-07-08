(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{6701:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extension/integration/cosmos/integrate-keplr",function(){return n(37307)}])},37307:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return i}});var o=n(11527),l=n(77178),r=n(12783);let i=[{depth:2,value:"Guide",id:"guide"},{depth:2,value:"defaultOptions",id:"defaultoptions"},{depth:2,value:"Event",id:"event"}];function t(s){let e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",span:"span"},(0,r.a)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"Use Cosmostation with Keplr Interface"}),"\n",(0,o.jsx)(e.p,{children:"Cosmostation is providing Keplr's interface. The purpose is to make it easier for the developers to integrate Cosmostation to dApps that have Keplr integrated already."}),"\n",(0,o.jsx)(e.p,{children:"Supported functions/variables are as belows:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"defaultOptions"}),"\n",(0,o.jsx)(e.li,{children:"enable"}),"\n",(0,o.jsx)(e.li,{children:"getKey"}),"\n",(0,o.jsx)(e.li,{children:"experimentalSuggestChain"}),"\n",(0,o.jsx)(e.li,{children:"getOfflineSigner"}),"\n",(0,o.jsx)(e.li,{children:"getOfflineSignerAuto"}),"\n",(0,o.jsx)(e.li,{children:"getOfflineSignerOnlyAmino"}),"\n",(0,o.jsx)(e.li,{children:"sendTx"}),"\n",(0,o.jsx)(e.li,{children:"signAmino"}),"\n",(0,o.jsx)(e.li,{children:"signDirect"}),"\n",(0,o.jsx)(e.li,{children:"signArbitrary"}),"\n",(0,o.jsx)(e.li,{children:"verifyArbitrary"}),"\n",(0,o.jsx)(e.li,{children:"suggestToken"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"In case of an error, use the Cosmostation interface."}),"\n",(0,o.jsx)(e.p,{children:"You need to use methods provided by Cosmostation for the event handling and defaultOptions change.\nHere's the guide:"}),"\n",(0,o.jsx)(e.h2,{id:"guide",children:"Guide"}),"\n",(0,o.jsxs)(e.p,{children:["Use ",(0,o.jsx)(e.code,{children:"window.cosmostation.providers.keplr"})," instead of ",(0,o.jsx)(e.code,{children:"window.keplr"}),"."]}),"\n",(0,o.jsx)(e.pre,{"data-language":"javascript","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"javascript","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onload"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".cosmostation) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alert"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Please install cosmostation extension'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  } "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"chainId"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cosmoshub-4'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"cosmostation"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"providers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"keplr"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".enable"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(chainId);"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"offlineSigner"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"cosmostation"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"providers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"keplr"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".getOfflineSigner"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(chainId);"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"accounts"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"offlineSigner"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".getAccounts"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n",(0,o.jsx)(e.pre,{"data-language":"javascript","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"javascript","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"async "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getKeplr"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(): "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Keplr "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (window.cosmostation) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"cosmostation"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"providers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".keplr;"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (document.readyState === "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"complete"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"cosmostation"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"providers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".keplr;"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    return new "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"((resolve) "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"documentStateChange"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (event"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Event"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"event"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".target "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                ("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"event"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".target "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Document"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:").readyState "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"complete"'})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            ) {"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"resolve"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"cosmostation"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"providers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".keplr);"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"document"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".removeEventListener"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"readystatechange"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" documentStateChange);"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        };"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"document"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addEventListener"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"readystatechange"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"documentStateChange"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    });"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,o.jsx)(e.h2,{id:"defaultoptions",children:"defaultOptions"}),"\n",(0,o.jsx)(e.pre,{"data-language":"javascript","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"javascript","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"cosmostation"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"providers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"keplr"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".defaultOptions "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  sign"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    preferNoSetFee"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    preferNoSetMemo"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n",(0,o.jsx)(e.h2,{id:"event",children:"Event"}),"\n",(0,o.jsx)(e.pre,{"data-language":"javascript","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"javascript","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addEventListener"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cosmostation_keystorechange'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Key store in Cosmostation is changed. You may need to refetch the account info.'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})]})}e.default=(0,l.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),s.components);return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/extension/integration/cosmos/integrate-keplr.mdx",route:"/extension/integration/cosmos/integrate-keplr",frontMatter:{sidebar_position:13},timestamp:1714709597e3,title:"Use Cosmostation with Keplr Interface",headings:i},pageNextRoute:"/extension/integration/cosmos/integrate-keplr"})}},function(s){s.O(0,[7178,9774,2888,179],function(){return s(s.s=6701)}),_N_E=s.O()}]);