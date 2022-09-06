"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),u=r,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_label:"Read Profile Data",sidebar_position:2},o="Read Universal Profile Data",l={unversionedId:"guides/universal-profile/read-profile-data",id:"guides/universal-profile/read-profile-data",title:"Read Universal Profile Data",description:"In this guide, we will learn how to read data from a Universal Profile.",source:"@site/docs/guides/universal-profile/read-profile-data.md",sourceDirName:"guides/universal-profile",slug:"/guides/universal-profile/read-profile-data",permalink:"/guides/universal-profile/read-profile-data",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/read-profile-data.md",tags:[],version:"current",lastUpdatedAt:1662449766,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:2,frontMatter:{sidebar_label:"Read Profile Data",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Create a Universal Profile",permalink:"/guides/universal-profile/create-profile"},next:{title:"Edit a Universal Profile",permalink:"/guides/universal-profile/edit-profile"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Step 1 - Call the Universal Profile",id:"step-1---call-the-universal-profile",level:2},{value:"Step 2 - Get Specific Information",id:"step-2---get-specific-information",level:2},{value:"Final Code",id:"final-code",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"read-universal-profile-data"},"Read Universal Profile Data"),(0,r.kt)("p",null,"In this guide, we will learn how to read data from a ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/introduction"},"Universal Profile"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A complete ",(0,r.kt)("em",{parentName:"p"},'"ready to use"')," JS file is available at the end in the ",(0,r.kt)("a",{parentName:"p",href:"#final-code"},(0,r.kt)("strong",{parentName:"a"},"Final Code"))," section. If you want to run the code as standalone JavaScript files within the terminal or the browser, you can open the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lukso-playground"},(0,r.kt)("inlineCode",{parentName:"a"},"lukso-playground"))," repository or use the correlated ",(0,r.kt)("a",{parentName:"p",href:"https://stackblitz.com/github/lukso-network/lukso-playground"},"StackBlitz")," page.")),(0,r.kt)("div",{style:{textAlign:"center",color:"grey"}},(0,r.kt)("img",{src:n(1301).Z,alt:"Universal Profile example on universalprofile.cloud"}),(0,r.kt)("br",null),(0,r.kt)("i",null,"A ",(0,r.kt)("a",{href:"https://universalprofile.cloud/0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e"},"Universal Profile")," as seen on UniversalProfile.cloud")),(0,r.kt)("p",null,"We will use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.7.0/"},"web3.js")," for utility as well as connecting to the LUKSO L16 network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../tools/erc725js/getting-started/"},"erc725.js")," library to check the interface of a profile."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/matthew-andrews/isomorphic-fetch"},"isomorphic-fetch")," to enable you to use ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch()")," in Node.js code.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Open a terminal in the project's folder of your choice and install all required libraries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install web3 @erc725/erc725.js isomorphic-fetch\n")),(0,r.kt)("h2",{id:"step-1---call-the-universal-profile"},"Step 1 - Call the Universal Profile"),(0,r.kt)("admonition",{title:"Recommendation",type:"success"},(0,r.kt)("p",{parentName:"admonition"},'Complete "ready to use" JSON and JS files are available at the end in the ',(0,r.kt)("a",{parentName:"p",href:"#final-code"},(0,r.kt)("strong",{parentName:"a"},"Final Code"))," section.")),(0,r.kt)("p",null,"To inspect the address and check if it has an ERC725 contract, we can call its interface through the ",(0,r.kt)("inlineCode",{parentName:"p"},"erc725.js")," library. The instance of the contract will need the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 - Universal Profile Metadata")," describes the data in the Universal Profile contract storage, and which keys to use to retrieve it. We can import the schema directly from the ",(0,r.kt)("a",{parentName:"p",href:"../../tools/erc725js/schemas#standard-lsp-schemas"},"erc725.js")," library."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SupportedStandards")," shows the interface using a Metadata Standard with a key. In our case we use ",(0,r.kt)("inlineCode",{parentName:"li"},"SupportedStandards:LSP3UniversalProfile")," from to check if the contract is an Universal Profile."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP3Profile")," shows the data of the Universal Profile."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP12IssuedAssets[]")," shows assets the Universal Profile issued."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP5ReceivedAssets[]")," shows assets the Universal Profile received."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP1UniversalReceiverDelegate")," will point to the ",(0,r.kt)("a",{parentName:"li",href:"../../standards/generic-standards/lsp1-universal-receiver/"},"Universal Receiver")," of the Universal Profile."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"address"),": the address of the contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"provider"),": a ",(0,r.kt)("a",{parentName:"p",href:"../../tools/erc725js/providers"},"provider")," object. Usually used with the RPC endpoint URL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"config"),": used to configure the IPFS gateway"))),(0,r.kt)("p",null,"Besides the schema, we also use ",(0,r.kt)("inlineCode",{parentName:"p"},"isomorphic-fetch")," to fetch the HTTP response from the profile while using ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," for execution. You may not need this library if you use browser environments like ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactJS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"VueJS"),"."),(0,r.kt)("p",null,"After importing the ERC725 object, we can declare all data needed to instantiate the Universal Profile as ERC725 contract instance."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After initializing the ERC725 profile, we can choose between calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getData()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData()")," function on it."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getData()")," will give the basic profile information with keys, names, and the values, including its hash and URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchData()")," will also fetch the linked data from the storage URLs and include it within the response.")),(0,r.kt)("p",{parentName:"admonition"},"We will use the convenient ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData()")," function since we only need one command to return the complete profile information list without separately grazing the storage files afterward.  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"// Import and Network Setup\nimport Web3 from 'web3';\nimport { ERC725 } from '@erc725/erc725.js';\nimport 'isomorphic-fetch';\nimport erc725schema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';\n\n// Our static variables\nconst SAMPLE_PROFILE_ADDRESS = '0xa907c1904c22DFd37FF56c1f3c3d795682539196';\nconst RPC_ENDPOINT = 'https://rpc.l16.lukso.network';\nconst IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';\n\n// Parameters for ERC725 Instance\nconst provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);\nconst config = { ipfsGateway: IPFS_GATEWAY };\n\n/*\n * Try fetching the @param's Universal Profile\n *\n * @param address of Universal Profile\n * @return string JSON or custom error\n */\nasync function fetchProfile(address) {\n  try {\n    const profile = new ERC725(erc725schema, address, provider, config);\n    return await profile.fetchData();\n  } catch (error) {\n    return console.log('This is not an ERC725 Contract');\n  }\n}\n\n// Debug\nfetchProfile(SAMPLE_PROFILE_ADDRESS).then((profileData) =>\n  console.log(JSON.stringify(profileData, undefined, 2)),\n);\n")),(0,r.kt)("p",null,"If everything went fine, we now have the profile's ",(0,r.kt)("a",{parentName:"p",href:"../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 - Universal Profile Metadata")," JSON. It should look like this JSON file:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show JSON response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "key": "...",\n    "name": "SupportedStandards:LSP3UniversalProfile",\n    "value": null\n  },\n  {\n    "key": "...",\n    "name": "LSP3Profile",\n    "value": {\n      "LSP3Profile": {\n        "name": "...",\n        "links": [\n          {\n            "title": "...",\n            "url": "..."\n          },\n          ...\n        ],\n        "description": "...",\n        "profileImage": [\n          {\n            "width": 1512,\n            "height": 1998,\n            "hashFunction": "keccak256(bytes)",\n            "hash": "0x...",\n            "url": "ipfs://..."\n          },\n          ...\n        ],\n        "backgroundImage": [\n          {\n            "width": 1512,\n            "height": 1998,\n            "hashFunction": "keccak256(bytes)",\n            "hash": "0x...",\n            "url": "ipfs://..."\n          },\n          ...\n        ],\n        "tags": [\n          "...",\n          ...\n        ]\n      }\n    }\n  },\n  {\n    "key": "0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd",\n    "name": "LSP12IssuedAssets[]",\n    "value": []\n  },\n  {\n    "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",\n    "name": "LSP5ReceivedAssets[]",\n    "value": []\n  },\n  {\n    "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",\n    "name": "LSP1UniversalReceiverDelegate",\n    "value": "0x..."\n  }\n]\n'))),(0,r.kt)("h2",{id:"step-2---get-specific-information"},"Step 2 - Get Specific Information"),(0,r.kt)("p",null,"With the JSON response, we can fetch all sorts of data including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SupportedStandards:LSP3UniversalProfile"),": Check if the smart contract is an LSP3 Universal Profile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP3Profile"),": The data of the Universal Profile (name, description, tags, links, pictures)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP12IssuedAssets[]"),": Assets the Universal Profile issued"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP5ReceivedAssets[]"),": Assets the Universal Profile received"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LSP1UniversalReceiverDelegate"),": The Universal Receiver that belongs to the Universal Profile")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To only get one specific part of information from the Universal Profile, you can define a specific name within the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData()")," function of the ",(0,r.kt)("a",{parentName:"p",href:"../../tools/erc725js/getting-started/"},"erc725.js")," library.")),(0,r.kt)("p",null,"In our case, to only read the profile's information, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData('LSP3Profile')"),". Otherwise, you could just search trough the full JSON array from step before to extract the desired element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"// ...\n\n/*\n * Fetch the @param's Universal Profile's\n * LSP3 data\n *\n * @param address of Universal Profile\n * @return string JSON or custom error\n */\nasync function fetchProfileData(address) {\n  try {\n    const profile = new ERC725(erc725schema, address, provider, config);\n    return await profile.fetchData('LSP3Profile');\n  } catch (error) {\n    return console.log('This is not an ERC725 Contract');\n  }\n}\n\n// Debug\nfetchProfileData(SAMPLE_PROFILE_ADDRESS).then((profileData) =>\n  console.log(JSON.stringify(profileData, undefined, 2)),\n);\n")),(0,r.kt)("h2",{id:"final-code"},"Final Code"),(0,r.kt)("p",null,"Below is the complete code snippet of this guide, with all the steps compiled together."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"// Import and Network Setup\nimport Web3 from 'web3';\nimport { ERC725 } from '@erc725/erc725.js';\nimport from 'isomorphic-fetch';\nimport erc725schema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';\n\n// Our static variables\nconst SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';\nconst RPC_ENDPOINT = 'https://rpc.l16.lukso.network';\nconst IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';\n\n// Parameters for ERC725 Instance\nconst provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);\nconst config = { ipfsGateway: IPFS_GATEWAY };\n\n/*\n * Try fetching the @param's Universal Profile\n *\n * @param address of Universal Profile\n * @return string JSON or custom error\n */\nasync function fetchProfile(address) {\n  try {\n    const profile = new ERC725(erc725schema, address, provider, config);\n    return await profile.fetchData();\n  } catch (error) {\n      return console.log('This is not an ERC725 Contract');\n  }\n}\n\n/*\n * Fetch the @param's Universal Profile's\n * LSP3 data\n *\n * @param address of Universal Profile\n * @return string JSON or custom error\n */\nasync function fetchProfileData(address) {\n  try {\n    const profile = new ERC725(erc725schema, address, provider, config);\n    return await profile.fetchData('LSP3Profile');\n  } catch (error) {\n      return console.log('This is not an ERC725 Contract');\n  }\n}\n\n// Step 1\nfetchProfile(SAMPLE_PROFILE_ADDRESS).then((profileData) =>\n  console.log(JSON.stringify(profileData, undefined, 2)),\n);\n\n// Step 2\nfetchProfileData(SAMPLE_PROFILE_ADDRESS).then((profileData) =>\n  console.log(JSON.stringify(profileData, undefined, 2)),\n);\n\n")))}d.isMDXComponent=!0},1301:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-up-2016580464323b8f0345c4a8535bb372.png"}}]);