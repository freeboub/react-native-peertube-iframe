"use strict";(self.webpackChunkreact_native_peertube_iframe=self.webpackChunkreact_native_peertube_iframe||[]).push([[221],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||c[y]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8992:(e,t,n)=>{n.r(t),n.d(t,{Type:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={id:"component-ref-methods",title:"Player Functions"},o=void 0,l={unversionedId:"component-ref-methods",id:"component-ref-methods",title:"Player Functions",description:"Basic usage",source:"@site/../docs/ref_methods.mdx",sourceDirName:".",slug:"/component-ref-methods",permalink:"/react-native-peertube-iframe/component-ref-methods",draft:!1,tags:[],version:"current",frontMatter:{id:"component-ref-methods",title:"Player Functions"},sidebar:"sideBar",previous:{title:"Props",permalink:"/react-native-peertube-iframe/component-props"},next:{title:"Module Methods",permalink:"/react-native-peertube-iframe/module-methods"}},s={},u=[{value:"Basic usage",id:"basic-usage",level:3},{value:"<code>getDuration</code>",id:"getduration",level:3},{value:"<code>getCurrentTime</code>",id:"getcurrenttime",level:3},{value:"<code>isMuted</code>",id:"ismuted",level:3},{value:"<code>getVolume</code>",id:"getvolume",level:3},{value:"<code>getPlaybackRate</code>",id:"getplaybackrate",level:3},{value:"<code>getAvailablePlaybackRates</code>",id:"getavailableplaybackrates",level:3},{value:"<code>getAvailablePlaybackQualities</code>",id:"getavailableplaybackqualities",level:3},{value:"<code>seekTo</code>",id:"seekto",level:3},{value:"fix it is google developer link",id:"fix-it-is-google-developer-link",level:4},{value:"<code>setResolution</code>",id:"setresolution",level:3},{value:"<code>setRate</code>",id:"setrate",level:3},{value:"setVolume",id:"setvolume",level:3}],p=e=>{let{children:t,color:n}=e;return(0,a.yg)("span",{style:{backgroundColor:"#25c2a0",borderRadius:"20px",color:"#fff",padding:"0.2em 0.4em 0.2em 0.4em",fontSize:"0.8em"}},t)},d={toc:u,Type:p},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"basic-usage"},"Basic usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import React, {useRef} from 'react';\nimport PeertubePlayer, {PeertubeIframeRef} from \"react-native-peertube-iframe\";\n\nconst App = () => {\n\n  const playerRef = useRef();\n\n  // typescript\n  // const playerRef = useRef<PeertubeIframeRef>(null);\n\n  return (\n    <PeertubePlayer\n        ref={playerRef}\n        height={400}\n        width={400}\n        videoUrl={'https://vidz.julien.ovh/videos/embed/105fd6ef-3048-43c3-b877-fdb8aaab11d5'}\n      />\n\n    <Button\n        title=\"log details\"\n        onPress={() => {\n          playerRef.current?.getCurrentTime().then(\n            currentTime => console.log({currentTime})\n          );\n\n          playerRef.current?.getDuration().then(\n            getDuration => console.log({getDuration})\n          );\n        }}\n      />\n  );\n};\n")),(0,a.yg)("h3",{id:"getduration"},(0,a.yg)("inlineCode",{parentName:"h3"},"getDuration")),(0,a.yg)(p,{mdxType:"Type"},"function(): Promise[Number]"),(0,a.yg)("p",null,"returns a promise that resolves to the total duration of the video."),(0,a.yg)("p",null,"If the currently playing video is a live event, the getDuration() function will resolve the elapsed time since the live video stream began. Specifically, this is the amount of time that the video has streamed without being reset or interrupted. In addition, this duration is commonly longer than the actual event time since streaming may begin before the event's start time."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"getDuration() will return 0 until the video's metadata is loaded, which normally happens just after the video starts playing.")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getcurrenttime"},(0,a.yg)("inlineCode",{parentName:"h3"},"getCurrentTime")),(0,a.yg)(p,{mdxType:"Type"},"function(): Promise[Number]"),(0,a.yg)("p",null,"returns a promise that resolves to the elapsed time in seconds since the video started playing."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"ismuted"},(0,a.yg)("inlineCode",{parentName:"h3"},"isMuted")),(0,a.yg)(p,{mdxType:"Type"},"function(): Promise[Boolean]"),(0,a.yg)("p",null,"returns a promise that resolves to true if the video is muted, false if not."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getvolume"},(0,a.yg)("inlineCode",{parentName:"h3"},"getVolume")),(0,a.yg)(p,{mdxType:"Type"},"function(): Promise[Number]"),(0,a.yg)("p",null,"returns a promise that resolves to the player's current volume, an integer between 0 and 100. Note that ",(0,a.yg)("inlineCode",{parentName:"p"},"getVolume()")," will return the volume even if the player is muted."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getplaybackrate"},(0,a.yg)("inlineCode",{parentName:"h3"},"getPlaybackRate")),(0,a.yg)(p,{mdxType:"Type"},"function(): Promise[Number]"),(0,a.yg)("p",null,"returns a promise that resolves to the current playback rate of the video."),(0,a.yg)("p",null,"The default playback rate is 1, which indicates that the video is playing at normal speed. Playback rates may include values like 0.25, 0.5, 1, 1.5, and 2."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getavailableplaybackrates"},(0,a.yg)("inlineCode",{parentName:"h3"},"getAvailablePlaybackRates")),(0,a.yg)(p,{mdxType:"Type"},"function(): Promise[Array[Number]]"),(0,a.yg)("p",null,"returns a promise that resolves to a list of available playback rates."),(0,a.yg)("p",null,"The array of numbers are ordered from slowest to fastest playback speed. Even if the player does not support variable playback speeds, the array should always contain at least one value (1)."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getavailableplaybackqualities"},(0,a.yg)("inlineCode",{parentName:"h3"},"getAvailablePlaybackQualities")),(0,a.yg)(p,{mdxType:"Type"},"function(): Promise[Array[PeertubePlaybackQuality]]"),(0,a.yg)("p",null,"returns a promise that resolves to a list of available playback quality."),(0,a.yg)("p",null,"PeertubePlaybackQuality represent a video selectable track with and id, a labal, the resolution and a boolean indicating if the tracks is selected."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"seekto"},(0,a.yg)("inlineCode",{parentName:"h3"},"seekTo")),(0,a.yg)(p,{mdxType:"Type"},"function(seconds:Number, allowSeekAhead:Boolean):Void"),(0,a.yg)("p",null,"Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused. If the function is called from another state (playing, etc.), the player will play the video.\nThe seconds parameter identifies the time to which the player should advance."),(0,a.yg)("p",null,"The player will advance to the closest keyframe before that time unless the player has already downloaded the portion of the video to which the user is seeking."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://developers.google.com/peertube/iframe_api_reference#seekTo"},"https://developers.google.com/peertube/iframe_api_reference#seekTo")),(0,a.yg)("h4",{id:"fix-it-is-google-developer-link"},"fix it is google developer link"),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"setresolution"},(0,a.yg)("inlineCode",{parentName:"h3"},"setResolution")),(0,a.yg)(p,{mdxType:"Type"},"function(index:Number):Void"),(0,a.yg)("p",null,"FIXME descruption"),(0,a.yg)("h3",{id:"setrate"},(0,a.yg)("inlineCode",{parentName:"h3"},"setRate")),(0,a.yg)(p,{mdxType:"Type"},"function(rate:Number):Void"),(0,a.yg)("p",null,"FIXME description"),(0,a.yg)("h3",{id:"setvolume"},"setVolume"),(0,a.yg)("p",null,"FIXME setCaption"))}y.isMDXComponent=!0}}]);