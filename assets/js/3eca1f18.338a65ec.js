"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[919],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3063:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:2,title:"Build on LUKSO",slug:"/build-on-lukso"},s=void 0,u={unversionedId:"build-on-lukso",id:"build-on-lukso",isDocsHomePage:!1,title:"Build on LUKSO",description:"Using wallet extensions",source:"@site/docs/build-on-lukso.md",sourceDirName:".",slug:"/build-on-lukso",permalink:"/build-on-lukso",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/build-on-lukso.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Build on LUKSO",slug:"/build-on-lukso"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Contribute",permalink:"/contribute"}},c=[{value:"Using wallet extensions",id:"using-wallet-extensions",children:[],level:2},{value:"Faucet",id:"faucet",children:[],level:2},{value:"Using Remix to deploy smart contracts",id:"using-remix-to-deploy-smart-contracts",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"Developer tools",id:"developer-tools",children:[],level:2},{value:"Network information",id:"network-information",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-wallet-extensions"},"Using wallet extensions"),(0,a.kt)("p",null,"If you simply want to play around with smart contracts, you can use a wallet extension like ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid"},"Nifty")," or ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"Meta-Mask"),", connect to ",(0,a.kt)("a",{parentName:"p",href:"https://rpc.l14.lukso.network"},"https://rpc.l14.lukso.network")," and use ",(0,a.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"Remix")," to develop and deploy smart contracts."),(0,a.kt)("h2",{id:"faucet"},"Faucet"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"http://faucet.l14.lukso.network"},"L14 Faucet")," allows you to retrieve 5 LYX for your development. Simply enter your address, and they should appear within a few seconds on your account."),(0,a.kt)("h2",{id:"using-remix-to-deploy-smart-contracts"},"Using Remix to deploy smart contracts"),(0,a.kt)("p",null,"To connect ",(0,a.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"Remix")," to the L14 testnet, connect your wallet extension to your own, or ",(0,a.kt)("a",{parentName:"p",href:"https://rpc.l14.lukso.network"},"our custom RPC endpoint"),". In Remix simply choose from the tab ",(0,a.kt)("em",{parentName:"p"},'"Run" > "Environment"')," and select ",(0,a.kt)("em",{parentName:"p"},'"Injected Web3"'),"."),(0,a.kt)("p",null,"This will allow you to program and deploy smart contracts, using the Remix interface on the L14 testnet."),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("p",null,"There are a number of tutorials which teach you the basics of ",(0,a.kt)("a",{parentName:"p",href:"http://solidity.readthedocs.io/en/latest/"},"Solidity"),", the most used EVM smart contract language.\nHere are two that you can start with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ethereumbuilders.gitbooks.io/guide/content/en/solidity_tutorials.html"},"EthereumBuilder's Solidity Tutorials")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codeburst.io/build-your-first-ethereum-smart-contract-with-solidity-tutorial-94171d6b1c4b"},"Codeburst Solidity Tutorial"),' - Start here at the heading "Remix Web Browser IDE"')),(0,a.kt)("p",null,"You can find the documentation for Solidity ",(0,a.kt)("a",{parentName:"p",href:"http://solidity.readthedocs.io/en/latest/"},"here"),"."),(0,a.kt)("h2",{id:"developer-tools"},"Developer tools"),(0,a.kt)("p",null,"To develop DApps, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/"},"web3.js"),", the most comprehensive tool for developing DApps in JavaScript. You can find the documentation ",(0,a.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/1.0/"},"here"),"."),(0,a.kt)("h2",{id:"network-information"},"Network information"),(0,a.kt)("p",null,"You can see all transaction on our ",(0,a.kt)("a",{parentName:"p",href:"http://explorer.l14.lukso.network/"},"BlockScout explorer"),"."),(0,a.kt)("p",null,"There are apps for ",(0,a.kt)("a",{parentName:"p",href:"http://validators.l14.lukso.network/"},"validators")," and ",(0,a.kt)("a",{parentName:"p",href:"http://voting.l14.lukso.network/"},"validator voting"),", which you can have a look if your wallet extension is connected to the L14 testnet."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://solidity.readthedocs.io/en/latest/"},"Solidity Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ethereumbuilders.gitbooks.io/guide/content/en/solidity_tutorials.html"},"Solidty Tutorials")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/1.0/"},"Web3.js Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ethereum/wiki/wiki/Glossary"},"Ethereum Glossary"))))}d.isMDXComponent=!0}}]);