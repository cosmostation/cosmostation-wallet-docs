(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7655],{9526:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mintstation/contracts/query",function(){return n(3388)}])},3388:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return a}});var t=n(5893),r=n(2673),o=n(2643);let a=[{depth:2,value:"Command Line Interface",id:"command-line-interface"},{depth:2,value:"Rest API Query",id:"rest-api-query"},{depth:2,value:"Cosmology Smart Contract Query",id:"cosmology-smart-contract-query"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",span:"span",strong:"strong",br:"br",a:"a",ul:"ul",li:"li"},(0,o.a)(),s.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{children:"Query Contracts"}),"\n",(0,t.jsx)(e.h2,{id:"command-line-interface",children:"Command Line Interface"}),"\n",(0,t.jsxs)(e.p,{children:["The most common way to query a cosmwasm smart contract is within the mintstationd wasm smart query command. This follows the following format where query is a JSON string with no spaces. By default, the least amount of data this can be is an empty JSON payload ",(0,t.jsx)(e.code,{children:"'{}'."})]}),"\n",(0,t.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(e.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"mintstationd query wasm contract-state smart [contract_bech32] [query] [flags]"})})})}),"\n",(0,t.jsx)(e.p,{children:"For this example, we are going to use a random NFT contract on the mint chain. This will show you how to brute force query a contract if you have no idea what the query schema of the contract is. At this time, there is no way to query the format of a contract's requests, but this is something many are actively working on."}),"\n",(0,t.jsx)(e.p,{children:"Now we attempt to query this contract address and extract some data from it and get which queries are allowed. As you can see, we pass through a random payload for abcde so that the contract will return actual valid query requests"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"NOTE"}),": A Query can never be empty such as ",(0,t.jsx)(e.code,{children:"'{}'"})," given you need to specify the path of data you want to reach."]}),"\n",(0,t.jsx)(e.pre,{className:"language-sh",children:(0,t.jsxs)(e.code,{className:"lang-sh",children:["CONTRACT=mint1anh4pf98fe8uh64uuhaasqdmg89qe6kk5xsklxuvtjmu6rhpg53sj9uejj\nmintstationd q wasm contract-state smart $CONTRACT '{\"abcde\":{}}'\n\n",(0,t.jsx)(e.strong,{children:"# Error parsing into type \n"}),(0,t.jsx)(e.strong,{children:"#    cw721_base::msg::QueryMsg<cosmwasm_std::results::empty::Empty>\n"}),"#    unknown variant `abcde`, \n#    expected one of `owner_of`, `approval`, `approvals`, `all_operators`, \n#    `num_tokens`, `contract_info`, `nft_info`, `all_nft_info`, `tokens`, \n#    `all_tokens`, `minter`, `extension`\n"]})}),"\n",(0,t.jsxs)(e.p,{children:['{% hint style="info" %}\nThe query shows CW721 Base is this contracts name. As this is a standard contract, all messages can be found in the CosmWasm/cw-nfts repository on github',(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs",children:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs"}),"\n{% endhint %}"]}),"\n",(0,t.jsx)(e.p,{children:"From this, we now know all of the query endpoints and can requests something more specific from the contract for our usage. Let's get"}),"\n",(0,t.jsx)(e.pre,{"data-language":"sh","data-theme":"default",children:(0,t.jsxs)(e.code,{"data-language":"sh","data-theme":"default",children:[(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"CONTRACT"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"mint1anh4pf98fe8uh64uuhaasqdmg89qe6kk5xsklxuvtjmu6rhpg53sj9uejj"})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"q"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"wasm"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"contract-state"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"smart"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" $CONTRACT "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'{\"all_tokens\":{}}'"})]}),"\n",(0,t.jsx)(e.span,{className:"line",children:" "}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"data:"})}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"tokens:"})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"2"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"3"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"4"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"5"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"6"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"7"'})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"8"'})]}),"\n",(0,t.jsx)(e.span,{className:"line",children:" "}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# You can use --output=json to read it via JSON form"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# mintstationd q wasm contract-state smart $CONTRACT '{\"all_tokens\":{}}' --output=json | jq .data"})})]})}),"\n",(0,t.jsx)(e.p,{children:"Here we can see there are 8 tokens in this set. Lets query one of the NFTs information"}),"\n",(0,t.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"CONTRACT"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"mint1anh4pf98fe8uh64uuhaasqdmg89qe6kk5xsklxuvtjmu6rhpg53sj9uejj"})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"q"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"wasm"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"contract-state"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"smart"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" $CONTRACT "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'{\"nft_info\":{}}'"})]}),"\n",(0,t.jsx)(e.span,{className:"line",children:" "}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# missing field `token_id`: query wasm contract failed"})})]})}),"\n",(0,t.jsx)(e.p,{children:"Just like the first query, we can see that the payload needs more information. It returned an error that we need to specify the token_id we want the nft_info for. Note, Uint128 sized numbers are read as a string"}),"\n",(0,t.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"CONTRACT"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"mint1anh4pf98fe8uh64uuhaasqdmg89qe6kk5xsklxuvtjmu6rhpg53sj9uejj"})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"q"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"wasm"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"contract-state"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"smart"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" $CONTRACT "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'\'{"nft_info":{"token_id":"8"}}\''})]}),"\n",(0,t.jsx)(e.span,{className:"line",children:" "}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# data:"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"#   extension: null"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"#   token_uri: ipfs://bafyreib42csdu7426ki7mxk6firvbz4uk3fo4dxpjy2kkskzdhtgj3rriq/metadata.json"})})]})}),"\n",(0,t.jsx)(e.h2,{id:"rest-api-query",children:"Rest API Query"}),"\n",(0,t.jsxs)(e.p,{children:["If you wish to query the data more programmatically with an application such as Python, you may be better suited to use the rest API. You can find these endpoints on ",(0,t.jsx)(e.a,{href:"https://cosmos.directory/mint/nodes",children:"https://cosmos.directory/mint/nodes"})," in the REST section."]}),"\n",(0,t.jsxs)(e.p,{children:["This query endpoint can be found via Mintstation's SwaggerUI. However, some modules you will not be able to easily find the endpoint. To do this, you will need to search through the proto files. Here we know we want to query the cosmwasm module, which is called wasmd on chain. This repo is found at ",(0,t.jsx)(e.a,{href:"https://github.com/cosmwasm/wasmd",children:"https://github.com/cosmwasm/wasmd"}),".",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.br,{}),"\nIn this module, you can see the proto folder in the root of the repo. This will house the endpoints the module exposes so we can find the above path which. This is a query so we find the query proto file",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://github.com/CosmWasm/wasmd/blob/main/proto/cosmwasm/wasm/v1/query.proto",children:"https://github.com/CosmWasm/wasmd/blob/main/proto/cosmwasm/wasm/v1/query.proto"}),"\\"]}),"\n",(0,t.jsx)(e.pre,{"data-language":"protobuf","data-theme":"default",children:(0,t.jsxs)(e.code,{"data-language":"protobuf","data-theme":"default",children:[(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'option go_package = "github.com/CosmWasm/wasmd/x/wasm/types";'})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"option (gogoproto.goproto_getters_all) = false;"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"option (gogoproto.equal_all) = false;"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"// Query provides defines the gRPC querier service"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"service Query {"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   ..."})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  // SmartContractState get smart query result from the contract"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  rpc SmartContractState(QuerySmartContractStateRequest)"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      returns (QuerySmartContractStateResponse) {"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    option (google.api.http).get ="})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'        "/cosmwasm/wasm/v1/contract/{address}/smart/{query_data}";'})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ..."})})]})}),"\n",(0,t.jsxs)(e.p,{children:['{% hint style="info" %}\nYou must base64 encode the JSON payload for REST API Request. Just take your JSON payload and',(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.br,{}),"\n- put it into ",(0,t.jsx)(e.a,{href:"https://www.base64encode.org/",children:"https://www.base64encode.org/"}),(0,t.jsx)(e.br,{}),"\n- or use Mac / Linux built in command",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.br,{}),"\necho '{\"all_tokens\":{}}' | base64",(0,t.jsx)(e.br,{}),"\n# eyJhbGxfdG9rZW5zIjp7fX0K\n{% endhint %}"]}),"\n",(0,t.jsxs)(e.p,{children:["With this, we can now query the contract and gather the data. You can use your web browser, or a library like httpx / requests in Python for automated bots. Be aware that many API providers will late limit the number of requests you can make.",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://api.mint.strange.love/cosmwasm/wasm/v1/contract/mint1anh4pf98fe8uh64uuhaasqdmg89qe6kk5xsklxuvtjmu6rhpg53sj9uejj/smart/eyJhbGxfdG9rZW5zIjp7fX0K",children:"https://api.mint.strange.love/cosmwasm/wasm/v1/contract/mint1anh4pf98fe8uh64uuhaasqdmg89qe6kk5xsklxuvtjmu6rhpg53sj9uejj/smart/eyJhbGxfdG9rZW5zIjp7fX0K"})]}),"\n",(0,t.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,t.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"data"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(e.span,{className:"line",children:[(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"tokens"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"2"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"3"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"4"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"5"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"6"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"7"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"8"'}),(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,t.jsx)(e.span,{className:"line",children:(0,t.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(e.h2,{id:"cosmology-smart-contract-query",children:"Cosmology Smart Contract Query"}),"\n",(0,t.jsxs)(e.p,{children:["Using ",(0,t.jsx)(e.a,{href:"https://github.com/CosmWasm/ts-codegen",children:"CosmWasm/ts-codegen"}),", you can create an NPM module to make interactions and queries into dev-friendly Typescript classes to allow you to focus on shipping code."]}),"\n",(0,t.jsx)(e.p,{children:"Here are a few tutorials from cosmology:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cosmology.tech/learn/video/overview-of-cosmwasm-ts-codegen",children:"ts-codegen overview for CosmWasm"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cosmology.tech/learn/video/turn-your-cosmwasm-smart-contracts-into-a-typescript-npm-module",children:"CosmWasm Contract to Typescript npm module"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cosmology.tech/learn/video/configuring-cosmwasm-ts-codegen-to-create-sdks-for-your-smart-contracts",children:"Configure CosmWasm ts-codegen in your Contracts repo"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cosmology.tech/learn/video/how-to-query-cosmwasm-smart-contracts",children:"Query a CosmWasm smart contract from ts-codegen"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cosmology.tech/learn/video/how-to-use-react-query-for-interacting-with-cosmwasm-smart-contracts",children:"Enable React Query"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cosmology.tech/learn/video/how-to-use-recoil-for-interacting-with-cosmwasm-smart-contracts",children:"Enable Recoil"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cosmology.tech/learn/video/integrating-telescope-and-cosmwasm-ts-codegen",children:"Integrate Telescope with ts-codegen"})}),"\n"]})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/mintstation/contracts/query.md",route:"/mintstation/contracts/query",timestamp:1700119354e3,title:"Query Contracts",headings:a},pageNextRoute:"/mintstation/contracts/query"})}},function(s){s.O(0,[2673,9774,2888,179],function(){return s(s.s=9526)}),_N_E=s.O()}]);