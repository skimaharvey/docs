"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[954],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3039),u=n(6010),p="tabItem_1uMI";function c(e){var t,n,a,o=e.lazy,l=e.block,c=e.defaultValue,d=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),b=w.tabGroupChoices,N=w.setTabGroupChoices,y=(0,r.useState)(g),x=y[0],T=y[1],E=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=b[m];null!=C&&C!==x&&v.some((function(e){return e.value===C}))&&T(C)}var L=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==x&&(O(t),T(a),null!=m&&N(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},k)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":x===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:L,onClick:L},null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},7761:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(5064),i=n(8215),s=["components"],u={sidebar_position:3},p="L15 Public Testnet",c={unversionedId:"networks/l15-testnet",id:"networks/l15-testnet",isDocsHomePage:!1,title:"L15 Public Testnet",description:"This testnet is ephemeral, meaning it is not meant to be fully stable and usable yet for more persistent test smart contracts. Assume the network could be reset at any time. The L16 Public Testnet is meant as a more stable persistent testnet before mainnet (Not yet running).",source:"@site/docs/networks/l15-testnet.md",sourceDirName:"networks",slug:"/networks/l15-testnet",permalink:"/networks/l15-testnet",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l15-testnet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"networksSidebar",previous:{title:"L16 Public Testnet",permalink:"/networks/l16-testnet"},next:{title:"L14 Public Testnet",permalink:"/networks/l14-testnet"}},d=[{value:"How to participate",id:"how-to-participate",children:[{value:"How to run an archive node",id:"how-to-run-an-archive-node",children:[],level:3},{value:"How to become a validator",id:"how-to-become-a-validator",children:[],level:3},{value:"Metamask",id:"metamask",children:[],level:3}],level:2},{value:"Links",id:"links",children:[],level:2},{value:"Repositories",id:"repositories",children:[],level:2}],m={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"l15-public-testnet"},"L15 Public Testnet"),(0,o.kt)("p",null,"This testnet is ephemeral, meaning it is not meant to be fully stable and usable yet for more persistent test smart contracts. Assume the network could be reset at any time. The ",(0,o.kt)("a",{parentName:"p",href:"/networks/l16-testnet"},"L16 Public Testnet")," is meant as a more stable persistent testnet before mainnet (Not yet running)."),(0,o.kt)("h2",{id:"how-to-participate"},"How to participate"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Currently the L15-Testnet is not running.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We are currently working on a fix and as soon as the fix is thorougly tested, we will start it again."))),(0,o.kt)("h3",{id:"how-to-run-an-archive-node"},"How to run an archive node"),(0,o.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl https://install.l15.lukso.network | bash\n$ lukso start --node-name "REPLACE-WITH-NODE-NAME"\n'))),(0,o.kt)(i.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo curl https://install.l15.lukso.network | bash\n$ sudo lukso start --node-name "REPLACE-WITH-NODE-NAME"\n')))),(0,o.kt)("p",null,"This starts your node as an archive node."),(0,o.kt)("p",null,"For all options and Windows please look at our ",(0,o.kt)("a",{parentName:"p",href:"/networks/lukso-cli"},"LUKSO CLI documentation"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/G2DSFqYwteI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h3",{id:"how-to-become-a-validator"},"How to become a validator"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In case you are currently running a node, please run ",(0,o.kt)("inlineCode",{parentName:"p"},"lukso stop")," (",(0,o.kt)("inlineCode",{parentName:"p"},"sudo lukso stop")," for MacOS) before continuing."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:"),"\nGo to the ",(0,o.kt)("a",{parentName:"p",href:"https://launchpad.l15.lukso.network"},"LUKSO Launchpad")," and follow the steps to become a validator."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:"),"\nYou can check your validator status in the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.vanguard.l15.lukso.network"},"Vanguard Block Explorer"),". You can find your validator via its public key."),(0,o.kt)("h3",{id:"metamask"},"Metamask"),(0,o.kt)("p",null,"To add the L15 Network to Metamask, these are the settings:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,o.kt)("td",{parentName:"tr",align:null},"L15")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://rpc.l15.lukso.network"},"https://rpc.l15.lukso.network"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,o.kt)("td",{parentName:"tr",align:null},"23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,o.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://explorer.pandora.l15.lukso.network"},"https://explorer.pandora.l15.lukso.network"))))),(0,o.kt)("p",null,"And if you need it, ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"here is a tutorial on how to do it"),"."),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Currently the L15-Testnet is not running.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We are currently working on a fix and as soon as the fix is thorougly tested, we will start it again."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://faucet.l15.lukso.network"},"https://faucet.l15.lukso.network")," To get some LYXt (test LYX) (coming soon)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://launchpad.l15.lukso.network"},"https://launchpad.l15.lukso.network")," The Launchpad to participate as a validator (coming soon)")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stats.vanguard.l15.lukso.network"},"https://stats.vanguard.l15.lukso.network")," Statistic page for the vanguard consensus chain (coming soon)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.vanguard.l15.lukso.network"},"https://explorer.vanguard.l15.lukso.network")," Block Explorer page for the vanguard consensus chain (coming soon)")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stats.pandora.l15.lukso.network"},"https://stats.pandora.l15.lukso.network")," Statistic page for the pandora shard chain (coming soon)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.pandora.l15.lukso.network"},"https://explorer.pandora.l15.lukso.network")," Block Explorer page for the pandora shard chain (coming soon)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc.l15.lukso.network"},"https://rpc.l15.lukso.network")," Public RPC endpoint for the pandora shard chain (coming soon)")),(0,o.kt)("h2",{id:"repositories"},"Repositories"),(0,o.kt)("p",null,"The network configuration files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs"},"https://github.com/lukso-network/network-configs"))),(0,o.kt)("p",null,"Clients:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Vanguard"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/vanguard-consensus-engine/"},"https://github.com/lukso-network/vanguard-consensus-engine/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pandora"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/pandora-execution-engine/"},"https://github.com/lukso-network/pandora-execution-engine/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Orchestrator"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lukso-orchestrator"},"https://github.com/lukso-network/lukso-orchestrator"))))}k.isMDXComponent=!0}}]);