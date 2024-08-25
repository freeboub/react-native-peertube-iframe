"use strict";(self.webpackChunkreact_native_peertube_iframe=self.webpackChunkreact_native_peertube_iframe||[]).push([[221],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),y=r,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8992:(e,t,a)=>{a.r(t),a.d(t,{Type:()=>c,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(8168),r=(a(6540),a(5680));const i={id:"component-ref-methods",title:"Player Functions"},l=void 0,o={unversionedId:"component-ref-methods",id:"component-ref-methods",title:"Player Functions",description:"Basic usage",source:"@site/../docs/ref_methods.mdx",sourceDirName:".",slug:"/component-ref-methods",permalink:"/react-native-peertube-iframe/component-ref-methods",draft:!1,tags:[],version:"current",frontMatter:{id:"component-ref-methods",title:"Player Functions"},sidebar:"sideBar",previous:{title:"Props",permalink:"/react-native-peertube-iframe/component-props"},next:{title:"Remove Context Menu",permalink:"/react-native-peertube-iframe/remove-context-share"}},s={},u=[{value:"Basic usage",id:"basic-usage",level:3},{value:"<code>getDuration</code>",id:"getduration",level:3},{value:"<code>getCurrentTime</code>",id:"getcurrenttime",level:3},{value:"<code>isMuted</code>",id:"ismuted",level:3},{value:"<code>getVolume</code>",id:"getvolume",level:3},{value:"<code>getPlaybackRate</code>",id:"getplaybackrate",level:3},{value:"<code>getAvailablePlaybackRates</code>",id:"getavailableplaybackrates",level:3},{value:"<code>getAvailablePlaybackQualities</code>",id:"getavailableplaybackqualities",level:3},{value:"<code>seekTo</code>",id:"seekto",level:3},{value:"<code>setPlaybackQuality</code>",id:"setplaybackquality",level:3},{value:"<code>setRate</code>",id:"setrate",level:3},{value:"setVolume",id:"setvolume",level:3},{value:"setCaption",id:"setcaption",level:3},{value:"getAvailableCaption",id:"getavailablecaption",level:3}],c=e=>{let{children:t,color:a}=e;return(0,r.yg)("span",{style:{backgroundColor:"#25c2a0",borderRadius:"20px",color:"#fff",padding:"0.2em 0.4em 0.2em 0.4em",fontSize:"0.8em"}},t)},p={toc:u,Type:c},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"basic-usage"},"Basic usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"import React, {useRef} from 'react';\nimport PeertubePlayer, {PeertubeIframeRef} from \"react-native-peertube-iframe\";\n\nconst App = () => {\n\n  const playerRef = useRef();\n\n  // typescript\n  // const playerRef = useRef<PeertubeIframeRef>(null);\n\n  return (\n    <PeertubePlayer\n        ref={playerRef}\n        height={400}\n        width={400}\n        videoUrl={'https://vidz.julien.ovh/videos/embed/105fd6ef-3048-43c3-b877-fdb8aaab11d5'}\n      />\n\n    <Button\n        title=\"log details\"\n        onPress={() => {\n          playerRef.current?.getCurrentTime().then(\n            currentTime => console.log({currentTime})\n          );\n\n          playerRef.current?.getDuration().then(\n            getDuration => console.log({getDuration})\n          );\n        }}\n      />\n  );\n};\n")),(0,r.yg)("h3",{id:"getduration"},(0,r.yg)("inlineCode",{parentName:"h3"},"getDuration")),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Number]"),(0,r.yg)("p",null,"returns a promise that resolves to the total duration of the video."),(0,r.yg)("p",null,"If the currently playing video is a live event, the getDuration() function will resolve the elapsed time since the live video stream began. Specifically, this is the amount of time that the video has streamed without being reset or interrupted. In addition, this duration is commonly longer than the actual event time since streaming may begin before the event's start time."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"getDuration() will return 0 until the video's metadata is loaded, which normally happens just after the video starts playing.")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getcurrenttime"},(0,r.yg)("inlineCode",{parentName:"h3"},"getCurrentTime")),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Number]"),(0,r.yg)("p",null,"returns a promise that resolves to the elapsed time in seconds since the video started playing."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"ismuted"},(0,r.yg)("inlineCode",{parentName:"h3"},"isMuted")),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Boolean]"),(0,r.yg)("p",null,"returns a promise that resolves to true if the video is muted, false if not."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getvolume"},(0,r.yg)("inlineCode",{parentName:"h3"},"getVolume")),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Number]"),(0,r.yg)("p",null,"returns a promise that resolves to the player's current volume, an integer between 0 and 100. Note that ",(0,r.yg)("inlineCode",{parentName:"p"},"getVolume()")," will return the volume even if the player is muted."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getplaybackrate"},(0,r.yg)("inlineCode",{parentName:"h3"},"getPlaybackRate")),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Number]"),(0,r.yg)("p",null,"returns a promise that resolves to the current playback rate of the video."),(0,r.yg)("p",null,"The default playback rate is 1, which indicates that the video is playing at normal speed. Playback rates may include values like 0.25, 0.5, 1, 1.5, and 2."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getavailableplaybackrates"},(0,r.yg)("inlineCode",{parentName:"h3"},"getAvailablePlaybackRates")),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Array[Number]]"),(0,r.yg)("p",null,"returns a promise that resolves to a list of available playback rates."),(0,r.yg)("p",null,"The array of numbers are ordered from slowest to fastest playback speed. Even if the player does not support variable playback speeds, the array should always contain at least one value (1)."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getavailableplaybackqualities"},(0,r.yg)("inlineCode",{parentName:"h3"},"getAvailablePlaybackQualities")),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Array[PeertubePlaybackQuality]]"),(0,r.yg)("p",null,"returns a promise that resolves to a list of available playback quality."),(0,r.yg)("p",null,"PeertubePlaybackQuality represent a video selectable track with and id, a labal, the resolution and a boolean indicating if the tracks is selected."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"seekto"},(0,r.yg)("inlineCode",{parentName:"h3"},"seekTo")),(0,r.yg)(c,{mdxType:"Type"},"function(seconds:Number):Void"),(0,r.yg)("p",null,"Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused. If the function is called from another state (playing, etc.), the player will play the video.\nThe seconds parameter identifies the time to which the player should advance."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setplaybackquality"},(0,r.yg)("inlineCode",{parentName:"h3"},"setPlaybackQuality")),(0,r.yg)(c,{mdxType:"Type"},"function(index:Number):Void"),(0,r.yg)("p",null,"Set the current resolution / Playback quality to specified index. You should list the available resolutions with getAvailablePlaybackQualities or by listening on onPlaybackQualityChange."),(0,r.yg)("h3",{id:"setrate"},(0,r.yg)("inlineCode",{parentName:"h3"},"setRate")),(0,r.yg)(c,{mdxType:"Type"},"function(rate:Number):Void"),(0,r.yg)("p",null,"Set the current playback rate. You can list the available playback rates with getAvailablePlaybackRates "),(0,r.yg)("h3",{id:"setvolume"},"setVolume"),(0,r.yg)(c,{mdxType:"Type"},"function(volume:Number):Void"),(0,r.yg)("p",null,"Set the current playback volume. Volumes is defined bewen 0 (muted) and 1 (100% volume)"),(0,r.yg)("h3",{id:"setcaption"},"setCaption"),(0,r.yg)(c,{mdxType:"Type"},"function(id:String):Void"),(0,r.yg)("p",null,"Set the current playback caption (subtitle track). Pass the id of the track retrieved with getAvailableCaption function\nSetting an invalid id, will disable caption."),(0,r.yg)("h3",{id:"getavailablecaption"},"getAvailableCaption"),(0,r.yg)(c,{mdxType:"Type"},"function(): Promise[Array[PeertubeCaption]]"),(0,r.yg)("p",null,"retrieve in a promise the list of available caption for the ongoing content.\nPeertubeCaption is composed of an id, a label, a src (the subtitle url) and a mode 'disabled' or 'showing'."))}y.isMDXComponent=!0}}]);