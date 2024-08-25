"use strict";(self.webpackChunkreact_native_peertube_iframe=self.webpackChunkreact_native_peertube_iframe||[]).push([[248],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=y(a),s=r,m=g["".concat(p,".").concat(s)]||g[s]||u[s]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var y=2;y<l;y++)o[y]=a[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1690:(e,t,a)=>{a.r(t),a.d(t,{Important:()=>g,Type:()=>d,assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=a(8168),r=(a(6540),a(5680));const l={id:"component-props",title:"Props"},o=void 0,i={unversionedId:"component-props",id:"component-props",title:"Props",description:"---",source:"@site/../docs/props.mdx",sourceDirName:".",slug:"/component-props",permalink:"/react-native-peertube-iframe/component-props",draft:!1,tags:[],version:"current",frontMatter:{id:"component-props",title:"Props"},sidebar:"sideBar",previous:{title:"Basic Usage",permalink:"/react-native-peertube-iframe/basic-usage"},next:{title:"Player Functions",permalink:"/react-native-peertube-iframe/component-ref-methods"}},p={},y=[{value:"<code>allowWebViewZoom</code>",id:"allowwebviewzoom",level:3},{value:"<code>contentScale</code>",id:"contentscale",level:3},{value:"<code>forceAndroidAutoplay</code>",id:"forceandroidautoplay",level:3},{value:"<code>height</code>",id:"height",level:3},{value:"<code>initialPlayerParams</code>",id:"initialplayerparams",level:3},{value:"<code>onChangeState</code>",id:"onchangestate",level:3},{value:"<code>onFullScreenChange</code>",id:"onfullscreenchange",level:3},{value:"<code>onPlaybackQualityChange</code>",id:"onplaybackqualitychange",level:3},{value:"<code>onChangeDuration</code>",id:"onchangeduration",level:3},{value:"<code>onChangePosition</code>",id:"onchangeposition",level:3},{value:"<code>onChangeVolume</code>",id:"onchangevolume",level:3},{value:"<code>onReady</code>",id:"onready",level:3},{value:"<code>play</code>",id:"play",level:3},{value:"<code>playbackQuality</code>",id:"playbackquality",level:3},{value:"<code>playbackRate</code>",id:"playbackrate",level:3},{value:"<code>videoUrl</code>",id:"videourl",level:3},{value:"<code>ref</code>",id:"ref",level:3},{value:"Player Functions Documentation",id:"player-functions-documentation",level:2},{value:"<code>volume</code>",id:"volume",level:3},{value:"<code>webViewProps</code>",id:"webviewprops",level:3},{value:"<code>webViewStyle</code>",id:"webviewstyle",level:3},{value:"<code>width</code>",id:"width",level:3},{value:"<code>viewContainerStyle</code>",id:"viewcontainerstyle",level:3}],d=e=>{let{children:t,color:a}=e;return(0,r.yg)("span",{style:{backgroundColor:"#25c2a0",borderRadius:"20px",color:"#fff",padding:"0.2em 0.4em 0.2em 0.4em",fontSize:"0.8em"}},t)},g=e=>{let{children:t,color:a}=e;return(0,r.yg)("span",{style:{backgroundColor:"#ff0000",borderRadius:"20px",color:"#fff",padding:"0.2em 0.4em 0.3em 0.4em",fontSize:"0.8em"}},t)},u={toc:y,Type:d,Important:g},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"allowwebviewzoom"},(0,r.yg)("inlineCode",{parentName:"h3"},"allowWebViewZoom")),(0,r.yg)(d,{mdxType:"Type"},"Boolean"),(0,r.yg)("p",null,"Controls whether the embedded webview allows user to zoom in. Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"contentscale"},(0,r.yg)("inlineCode",{parentName:"h3"},"contentScale")),(0,r.yg)(d,{mdxType:"Type"},"Number"),(0,r.yg)("p",null,"scale factor for initial-scale and maximum-scale in ",(0,r.yg)("inlineCode",{parentName:"p"},"<meta />")," tag on the webpage. Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"1.0")),(0,r.yg)("admonition",{title:"zoom -",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"enabling the ",(0,r.yg)("inlineCode",{parentName:"p"},"allowWebViewZoom")," disabled the maximum-scale attribute in the webpage")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"forceandroidautoplay"},(0,r.yg)("inlineCode",{parentName:"h3"},"forceAndroidAutoplay")),(0,r.yg)(d,{mdxType:"Type"},"Boolean"),(0,r.yg)("p",null,"Changes user string to make autoplay work on the iframe player for some android devices."),(0,r.yg)("admonition",{title:"user agent string used -",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36';")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"height"},(0,r.yg)("inlineCode",{parentName:"h3"},"height")),(0,r.yg)(d,{mdxType:"Type"},"Number")," ",(0,r.yg)(g,{mdxType:"Important"},"Required"),(0,r.yg)("p",null,"height of the webview container"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Embedded players must have a viewport that is at least 200px by 200px. If the player displays controls, it must be large enough to fully display the controls without shrinking the viewport below the minimum size. We recommend 16:9 players are at least 480 pixels wide and 270 pixels tall.")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"initialplayerparams"},(0,r.yg)("inlineCode",{parentName:"h3"},"initialPlayerParams")),(0,r.yg)(d,{mdxType:"Type"},"InitialPlayerParams"),(0,r.yg)("p",null,"A set of parameters that are initialized when the player mounts."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"changing these parameters might cause the player to restart or not change at all till it is remounted")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"property"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"info"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#start"},"https://docs.joinpeertube.org/api/embed-player#start"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#stop"},"https://docs.joinpeertube.org/api/embed-player#stop"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"controls"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#controls"},"https://docs.joinpeertube.org/api/embed-player#controls"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"controlBar"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#controlBar"},"https://docs.joinpeertube.org/api/embed-player#controlBar"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"peertubeLink"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#peertubeLink"},"https://docs.joinpeertube.org/api/embed-player#peertubeLink"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"loop"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#loop"},"https://docs.joinpeertube.org/api/embed-player#loop"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"muted"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#muted"},"https://docs.joinpeertube.org/api/embed-player#muted"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"subtitle"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#subtitle"},"https://docs.joinpeertube.org/api/embed-player#subtitle"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"autoplay"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#autoplay"},"https://docs.joinpeertube.org/api/embed-player#autoplay"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"playbackRate"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#playbackRate"},"https://docs.joinpeertube.org/api/embed-player#playbackRate"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"title"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#title"},"https://docs.joinpeertube.org/api/embed-player#title"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warningTitle"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#warningTitle"},"https://docs.joinpeertube.org/api/embed-player#warningTitle"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"p2p"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#p2p"},"https://docs.joinpeertube.org/api/embed-player#p2p"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigPlayBackgroundColor"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#bigPlayBackgroundColor"},"https://docs.joinpeertube.org/api/embed-player#bigPlayBackgroundColor"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"foregroundColor"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#foregroundColor"},"https://docs.joinpeertube.org/api/embed-player#foregroundColor"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mode"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#mode"},"https://docs.joinpeertube.org/api/embed-player#mode"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"waitPasswordFromEmbed"),(0,r.yg)("td",{parentName:"tr",align:null},"Number or String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.joinpeertube.org/api/embed-player#waitPasswordFromEmbed"},"https://docs.joinpeertube.org/api/embed-player#waitPasswordFromEmbed"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"onchangestate"},(0,r.yg)("inlineCode",{parentName:"h3"},"onChangeState")),(0,r.yg)(d,{mdxType:"Type"},"function(event: string)"),(0,r.yg)("p",null,"This event fires whenever the player's state changes. The callback is fired with an event (string) that corresponds to the new player state. Possible values are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"events"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"unstarted"),(0,r.yg)("td",{parentName:"tr",align:null},"fired before the first video is loaded")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"playing"),(0,r.yg)("td",{parentName:"tr",align:null},"current video is playing")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paused"),(0,r.yg)("td",{parentName:"tr",align:null},"current video is paused")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ended"),(0,r.yg)("td",{parentName:"tr",align:null},"video has finished playing the video")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"onfullscreenchange"},(0,r.yg)("inlineCode",{parentName:"h3"},"onFullScreenChange")),(0,r.yg)(d,{mdxType:"Type"},"function(status: string)"),(0,r.yg)("p",null,"This event fires whenever the player goes in or out of fullscreen mode with a boolean that identifies the new fullscreen status"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"android only, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/LonelyCpp/react-native-youtube-iframe/issues/45"},"issue #45")," for work on ios support")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"onplaybackqualitychange"},(0,r.yg)("inlineCode",{parentName:"h3"},"onPlaybackQualityChange")),(0,r.yg)(d,{mdxType:"Type"},"function(quality: PeertubePlaybackQuality)"),(0,r.yg)("p",null,"This event fires whenever the video playback quality changes. It might signal a change in the viewer's playback environment."),(0,r.yg)("p",null,"The data value that the API passes to the event listener function will be a string that identifies the new playback quality. Possible values are:"),(0,r.yg)("p",null,"The PeertubePlaybackQuality object is the following:"),(0,r.yg)("p",null,"| Field | Description |\n| ------- | |\n| id   | unique id of quality |\n| label | label to display |\n| height | height resolution of the content |\n| active | string: 'disabled' or 'showing' |"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"onchangeduration"},(0,r.yg)("inlineCode",{parentName:"h3"},"onChangeDuration")),(0,r.yg)(d,{mdxType:"Type"},"function(duration: number)"),(0,r.yg)("p",null,"This event fires whenever the video duration changes."),(0,r.yg)("p",null,"Values are provided in seconds"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"onchangeposition"},(0,r.yg)("inlineCode",{parentName:"h3"},"onChangePosition")),(0,r.yg)(d,{mdxType:"Type"},"function(position: number)"),(0,r.yg)("p",null,"This event fires whenever the video playback position changes."),(0,r.yg)("p",null,"Values are provided in seconds"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"onchangevolume"},(0,r.yg)("inlineCode",{parentName:"h3"},"onChangeVolume")),(0,r.yg)(d,{mdxType:"Type"},"function(volume: number)"),(0,r.yg)("p",null,"This event fires whenever the video volume changes."),(0,r.yg)("p",null,"Possible values are between 0 and 1"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"onready"},(0,r.yg)("inlineCode",{parentName:"h3"},"onReady")),(0,r.yg)(d,{mdxType:"Type"},"function(event: string)"),(0,r.yg)("p",null,"This event fires when the player has finished loading and is ready to begin receiving API calls. Your application should implement this function if you want to automatically execute certain operations, such as playing the video or displaying information about the video, as soon as the player is ready."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"play"},(0,r.yg)("inlineCode",{parentName:"h3"},"play")),(0,r.yg)(d,{mdxType:"Type"},"Boolean"),(0,r.yg)("p",null,"Flag to tell the player to play or pause the video."),(0,r.yg)("p",null,"Make sure you match this flag ",(0,r.yg)("inlineCode",{parentName:"p"},"onChangeState")," to handle user pausing\nthe video from the peertube player UI"),(0,r.yg)("admonition",{title:"autoPlay",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The HTML5 ",(0,r.yg)("inlineCode",{parentName:"p"},"<video>")," element, in certain mobile browsers (such as Chrome and Safari), only allows playback to take place if it's initiated by user interaction (such as tapping on the player)."),(0,r.yg)("p",{parentName:"admonition"},"However, the webview provides APIs to overcome this and will allow auto play in most cases. Use the ",(0,r.yg)("a",{parentName:"p",href:"#forceandroidautoplay"},"forceAndroidAutoplay")," prop if autoplay still doesn't work. (usually is affected by older android devices)")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"playbackquality"},(0,r.yg)("inlineCode",{parentName:"h3"},"playbackQuality")),(0,r.yg)(d,{mdxType:"Type"},"Number"),(0,r.yg)("p",null,"This sets the playback quality for the current video."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"getAvailablePlaybackQualities")," method will return the possible playback qualities for the currently playing video."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"playbackrate"},(0,r.yg)("inlineCode",{parentName:"h3"},"playbackRate")),(0,r.yg)(d,{mdxType:"Type"},"Number"),(0,r.yg)("p",null,"This sets the suggested playback rate for the current video. If the playback rate changes, it will only change for the video that is already cued or being played."),(0,r.yg)("p",null,"Calling this function does not guarantee that the playback rate will actually change. However, if the playback rate does change, the ",(0,r.yg)("inlineCode",{parentName:"p"},"onPlaybackRateChange")," event will fire, and your code should respond to the event rather than the fact that it called the setPlaybackRate function."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"getAvailablePlaybackRates")," method will return the possible playback rates for the currently playing video. However, if you set the suggestedRate parameter to a non-supported integer or float value, the player will round that value down to the nearest supported value in the direction of 1."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"videourl"},(0,r.yg)("inlineCode",{parentName:"h3"},"videoUrl")),(0,r.yg)(d,{mdxType:"Type"},"String"),(0,r.yg)("p",null,"Specifies the Peertube Video url of the video to be played. You must pass the embed url."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"ref"},(0,r.yg)("inlineCode",{parentName:"h3"},"ref")),(0,r.yg)(d,{mdxType:"Type"},"PeertubeIframeRef"),(0,r.yg)("p",null,"Gives access to the player reference. This can be used to access player functions."),(0,r.yg)("h2",{id:"player-functions-documentation"},(0,r.yg)("a",{parentName:"h2",href:"component-ref-methods"},"Player Functions Documentation")),(0,r.yg)("h3",{id:"volume"},(0,r.yg)("inlineCode",{parentName:"h3"},"volume")),(0,r.yg)(d,{mdxType:"Type"},"Number"),(0,r.yg)("p",null,"Sets the volume. Accepts an integer between ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"100"),"."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"webviewprops"},(0,r.yg)("inlineCode",{parentName:"h3"},"webViewProps")),(0,r.yg)("p",null,"Props that are supplied to the underlying webview (react-native-webview). A full list of props can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md#props-index"},"here")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"webviewstyle"},(0,r.yg)("inlineCode",{parentName:"h3"},"webViewStyle")),(0,r.yg)("p",null,"A style prop that will be given to the webview"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"width"},(0,r.yg)("inlineCode",{parentName:"h3"},"width")),(0,r.yg)(d,{mdxType:"Type"},"Number"),(0,r.yg)("p",null,"width of the webview container"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The player will grow to fit the width of its parent, unless the parent has specified ",(0,r.yg)("inlineCode",{parentName:"p"},"alignItems")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"justifyContent")," (depending on flex direction) in which case a width is required.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Embedded players must have a viewport that is at least 200px by 200px. If the player displays controls, it must be large enough to fully display the controls without shrinking the viewport below the minimum size. We recommend 16:9 players are at least 480 pixels wide and 270 pixels tall.")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"viewcontainerstyle"},(0,r.yg)("inlineCode",{parentName:"h3"},"viewContainerStyle")),(0,r.yg)("p",null,"A style prop that will be given to the webview container"))}m.isMDXComponent=!0}}]);