(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7972],{1353:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mintscan/registry/erc20",function(){return n(3762)}])},3762:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return t},default:function(){return a}});var r=n(1527),i=n(7178),l=n(2783),o={src:"/_next/static/media/mintscan-erc.cfeca470.png",height:754,width:1283,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUeHyoYGSOa1r+PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNggANGCAAzGEA0CgMkAwAB1gAYAeTBVgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5};let t=[];function c(s){let e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",img:"img",a:"a",ol:"ol",li:"li",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr",ul:"ul"},(0,l.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"How to add your ERC20 token info"}),"\n",(0,r.jsx)(e.p,{children:"To add erc20 asset metadata on mintscan assets."}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Erc20",placeholder:"blur",src:o})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://github.com/cosmostation/chainlist/blob/main/chain/evmos/contract.json",children:"Evmos Erc20"})," list supporting"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Fork this repo to your own github account"}),"\n",(0,r.jsx)(e.li,{children:"Clone fork and create new branch"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"shell","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"shell","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com:YOUR_ACCOUNT/chainlist.git"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"chainlist"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"branch"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"branch_nam"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"checkout"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"branch_nam"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})]})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"Add the info of your token in the chain that your token needs to be displayed\nIf there is no chain in the list, create a folder for the chain and add info in the folder\nThen add the name of the folder in: supports.json\nChanges will be updated within 24 hours after merged to master"}),"\n"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"key"}),(0,r.jsx)(e.th,{children:"value"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"chainId"})}),(0,r.jsx)(e.td,{children:"ChainId of the chain"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"address"})}),(0,r.jsx)(e.td,{children:"Token's contract_address"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"chainName"})}),(0,r.jsx)(e.td,{children:"Name of the displayed token"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"symbol"})}),(0,r.jsx)(e.td,{children:"Name of token's symbol"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"decimals"})}),(0,r.jsx)(e.td,{children:"Decimal of the token"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"image"})}),(0,r.jsxs)(e.td,{children:["Image route of the token",(0,r.jsx)("br",{}),(0,r.jsx)(e.code,{children:"/${targetChain}/asset"})," add image in the folder",(0,r.jsx)("br",{})," Make sure to upload a ",(0,r.jsx)(e.code,{children:"png"}),"file"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"default"})}),(0,r.jsxs)(e.td,{children:["default value is ",(0,r.jsx)(e.code,{children:"false"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"coinGeckoId"})," (optional)"]}),(0,r.jsxs)(e.td,{children:["Coin gecko site's API ID",(0,r.jsx)("br",{})," Empty string if none"]})]})]})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["ERC20 Token\n",(0,r.jsx)(e.code,{children:"/${targetChain}/contract.json"})]}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"chainId"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"9001"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"chainName"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"evmos"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"address"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0xD4949664cD82660AaE99bEdc034a0deA8A0bd517"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"symbol"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"WEVMOS"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"description"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Wrapped Evmos"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"decimals"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"18"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"image"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"evmos/asset/wevmos.png"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"default"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"coinGeckoId"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"evmos"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"chainId"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"9001"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"chainName"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"evmos"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"address"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0xb72A7567847abA28A2819B855D7fE679D4f59846"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"symbol"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ceUSDT"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"description"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Tether USD (Celer)"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"decimals"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"6"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"image"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ethereum/asset/usdt.png"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"default"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"coinGeckoId"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"tether"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})})]})}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsx)(e.li,{children:"Commit and push to your fork"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"shell","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"shell","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-A"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"commit"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-m"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"“Add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"YOUR"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"TOKEN"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"NAM"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"E"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"”"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"push"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"origin"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"branch_nam"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})]})}),"\n",(0,r.jsxs)(e.ol,{start:"5",children:["\n",(0,r.jsx)(e.li,{children:"From your repository, make pull request (PR)"}),"\n"]}),"\n"]}),"\n"]})]})}var a=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(c,{...s})}):c(s)},pageOpts:{filePath:"pages/mintscan/registry/erc20.mdx",route:"/mintscan/registry/erc20",timestamp:1693389556e3,title:"How to add your ERC20 token info",headings:t},pageNextRoute:"/mintscan/registry/erc20"})}},function(s){s.O(0,[7178,9774,2888,179],function(){return s(s.s=1353)}),_N_E=s.O()}]);