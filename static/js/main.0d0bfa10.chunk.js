(this["webpackJsonpreact-wipes"]=this["webpackJsonpreact-wipes"]||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(16),r=a.n(l),c=(a(23),a(43)),o=a(13),s=a(1),u=(a(24),a(2)),d=a(4),h=a.n(d),m=function(e){var t=e.children,a=Object(n.useRef)(null),l=Object(n.useState)(!0),r=Object(u.a)(l,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var e=d.anime.timeline();e.add({targets:a.current,translateY:window.innerHeight,easing:"easeInOutSine"}).add({targets:a.current,translateY:"-=".concat(2*window.innerHeight)}),e.finished.then((function(){o(!1)}))})),i.a.createElement("div",null,i.a.createElement("div",{style:{display:c?"block":"none",position:"absolute",width:"100%",height:"100%",overflow:"hidden"}},i.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%"}},i.a.createElement("div",{ref:a,style:{width:"100%",height:"100%",backgroundColor:"#61dafb"}}))),t)};function f(e){var t=i.a.useState(!0),a=Object(u.a)(t,2),n=a[0],l=a[1];return i.a.useEffect((function(){var e=setTimeout((function(){l(!1)}),1e3);return function(){clearTimeout(e)}}),[]),i.a.createElement("div",{style:{display:n?"block":"none",position:"absolute",width:"100%",height:"100%",overflow:"hidden"}},i.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%"}},i.a.createElement(h.a,{delay:d.anime.stagger(1e3),duration:5e3,translateX:-1400,translateY:-1400},i.a.createElement("div",{style:{transform:"rotate(45deg)",background:"#0b556a",width:window.innerWidth,height:2.5*window.innerHeight,position:"fixed",top:"-450px"}}))))}function E(e){var t=e.children;return i.a.createElement("div",{className:"App-header"},i.a.createElement(f,null),t)}function v(e){var t=i.a.useState(!0),a=Object(u.a)(t,2),n=a[0],l=a[1];return i.a.useEffect((function(){var e=setTimeout((function(){l(!1)}),1e3);return function(){clearTimeout(e)}}),[]),i.a.createElement("div",{style:{display:n?"block":"none",position:"absolute",width:"100%",height:"100%",overflow:"hidden"}},i.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%"}},i.a.createElement(p,{direction:e.direction})))}function p(e){var t=i.a.useRef(null);return i.a.useEffect((function(){d.anime.timeline().add({targets:t.current,translateX:e.direction?"-=".concat(window.innerWidth):"".concat(window.innerWidth,"px"),duration:1e3,easing:"easeInOutSine"})}),[t,e]),i.a.createElement("div",{ref:t,style:{width:"100%",height:"100%",backgroundColor:"#61dafb"}})}function w(e){var t=e.children,a=e.direction;return i.a.createElement("div",{className:"App-header"},i.a.createElement(v,{direction:a}),t)}function g(e){var t=i.a.useState(!0),a=Object(u.a)(t,2),n=a[0],l=a[1];return i.a.useEffect((function(){var e=setTimeout((function(){l(!1)}),900);return function(){clearTimeout(e)}}),[]),i.a.createElement("div",{style:{display:n?"block":"none",position:"absolute",width:"100%",height:"100%",overflow:"hidden"}},i.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%"}},i.a.createElement(h.a,{delay:d.anime.stagger(100),duration:5e3,scale:[0,1]},i.a.createElement("div",{style:{background:"#0b556a",width:window.innerWidth,height:window.innerHeight}}))))}function b(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(g,null),t)}function y(e){var t=i.a.useState(!0),a=Object(u.a)(t,2),n=a[0],l=a[1],r=i.a.createRef(null),c=i.a.createRef(null);return i.a.useEffect((function(){var e=setTimeout((function(){l(!1)}),900);return function(){clearTimeout(e)}}),[]),i.a.useEffect((function(){r&&"100%"===r.current.style.width&&setTimeout((function(){r.current.style.width="0%"}),5),c&&"100%"===c.current.style.width&&setTimeout((function(){c.current.style.width="0%"}),5)}),[r,c]),i.a.createElement("div",{style:{display:n?"block":"none",position:"absolute",width:"100%",height:"100%"}},i.a.createElement("div",{style:{position:"absolute",width:"50%",height:"100%"}},i.a.createElement("div",{ref:r,className:"split-horizontal",style:{height:"100%",width:"100%",background:"#0b556a",transition:"height 1s, width 1s"}})),i.a.createElement("div",{style:{left:"50%",position:"absolute",width:"50%",height:"100%"}},i.a.createElement("div",{style:{width:"100%",display:"flex",height:"100%",justifyContent:"flex-end"}},i.a.createElement("div",{ref:c,className:"split-horizontal",style:{height:"100%",background:"#0b556a",width:"100%"}}))))}function k(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(y,null),t)}function x(e){var t=i.a.useState(!0),a=Object(u.a)(t,2),n=a[0],l=a[1];return i.a.useEffect((function(){var e=setTimeout((function(){l(!1)}),900);return function(){clearTimeout(e)}}),[]),i.a.createElement("div",{style:{display:n?"block":"none",position:"absolute",width:"100%",height:"100%"}},i.a.createElement("div",{style:{position:"absolute",width:"100%",height:"50%"}},i.a.createElement("div",{className:"split-vertical",style:{height:"100%",width:"100%",background:"#0b556a"}})),i.a.createElement("div",{style:{top:"50%",position:"absolute",width:"100%",height:"50%"}},i.a.createElement("div",{style:{width:"100%",display:"flex",height:"100%",alignItems:"flex-end"}},i.a.createElement("div",{className:"split-vertical",style:{height:"100%",background:"#0b556a",width:"100%"}}))))}function S(e){var t=e.children;return i.a.createElement("div",{className:"App-header"},i.a.createElement(x,null),t)}function T(e){var t=i.a.useState(!0),a=Object(u.a)(t,2),n=a[0],l=a[1];return i.a.useEffect((function(){var e=setTimeout((function(){l(!1)}),1e3);return function(){clearTimeout(e)}}),[]),i.a.createElement("div",{style:{display:n?"block":"none",position:"absolute",width:"100%",height:"100%"}},i.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%"}},i.a.createElement(O,null)))}function O(){var e=i.a.useRef(null);return i.a.useEffect((function(){d.anime.timeline().add({targets:e.current,scale:[1,55],duration:2e3,easing:"easeOutSine"})}),[e]),i.a.createElement("svg",{ref:e,width:"100%",height:"100%",id:"e350d5ca-b3f4-4409-80c7-c3f48cc0f93e","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 768",style:{position:"fixed",top:0,bottom:0,left:0,right:0}},i.a.createElement("path",{d:"M.5,767.5V.5h1023v767ZM540.55,436.78l-7-48.89,36.31-33.47L521.21,346,500.6,301.08l-23.08,43.66-49,5.74,34.39,35.44-9.7,48.42,44.33-21.75Z",fill:"#fff"}),i.a.createElement("path",{fill:"#61dafb",d:"M1023,1V767H1V1H1023M477.2,344.28l-47.78,5.58-2,.24,1.41,1.45,33.5,34.53-9.45,47.17-.4,2,1.82-.9,43.19-21.19,41.94,23.57,1.76,1-.28-2-6.81-47.63,35.37-32.6L571,354.1l-2-.34-47.4-8.25L501.48,301.8l-.85-1.85-.94,1.8L477.2,344.28M1024,0H0V768H1024V0ZM453.85,433.45l9.55-47.69-33.87-34.9,48.31-5.65,22.73-43,20.3,44.2,47.91,8.33L533,387.7l6.88,48.15L497.51,412l-43.66,21.43Z"}))}function j(e){var t=e.children;return i.a.createElement("div",{className:"App-header"},i.a.createElement(T,null),t)}function N(){var e=i.a.useState(!0),t=Object(u.a)(e,2),a=t[0],n=t[1];return i.a.useEffect((function(){var e=setTimeout((function(){n(!1)}),900);return function(){clearTimeout(e)}}),[]),i.a.createElement("div",{style:{display:a?"block":"none",position:"absolute",width:"100%",height:"100%",top:0}},i.a.createElement("div",{style:{width:"100%",background:"#0b556a"},className:"vertical"}),i.a.createElement("div",{style:{background:"#0b556a",width:"100%",transition:"height 1s"}}),i.a.createElement(H,null))}function z(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(N,null),t)}function H(){return i.a.createElement("svg",{className:"shape",preserveAspectRatio:"none",viewBox:"0 0 1440 100",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z"}))}function L(){return i.a.createElement("div",{className:"App-header"},i.a.createElement(c.a,{variant:"h1"},"React Wipes"),i.a.createElement(c.a,{variant:"h2"},"Github"),i.a.createElement("a",{href:"https://github.com/rhigdon/react-wipes",rel:"noopener noreferrer",target:"_blank"},"https://github.com/rhigdon/react-wipes"),i.a.createElement(c.a,{variant:"h2"},"Install"),i.a.createElement(c.a,{variant:"subtitle1"},"npm install react-wipes"),i.a.createElement(c.a,{variant:"h2"},"Usage"),i.a.createElement(c.a,{variant:"subtitle1"},"Internal Links / External Links"),i.a.createElement(c.a,{variant:"h2"},"Examples"),i.a.createElement(M,{to:"vertical"},"Vertical"),i.a.createElement(M,{to:"split-vertical"},"Split Vertical"),i.a.createElement(M,{to:"diagonal"},"Diagonal"),i.a.createElement(M,{to:"horizontal"},"Horizontal"),i.a.createElement(M,{to:"horizontal-reverse"},"Horizontal Reverse"),i.a.createElement(M,{to:"scale-up"},"Scale Up"),i.a.createElement(M,{to:"star-wipe"},"Star Wipe"),i.a.createElement(M,{to:"split-horizontal"},"Split Horizontal"),i.a.createElement(M,{to:"bounce"},"Bounce"))}function M(e){var t=e.to;return i.a.createElement(o.b,{className:"App-link",onClick:function(){window.location.href="/react-wipes#"+t,window.location.hash==="#"+t&&(console.log(t),window.location.reload())},to:t},t)}var R=function(){return i.a.createElement(o.a,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/diagonal"},i.a.createElement(E,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/vertical"},i.a.createElement(z,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/split-vertical"},i.a.createElement(S,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/horizontal"},i.a.createElement(w,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/horizontal-reverse"},i.a.createElement(w,{direction:"reverse"},i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/split-horizontal"},i.a.createElement(k,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/scale-up"},i.a.createElement(b,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/star-wipe"},i.a.createElement(j,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/bounce"},i.a.createElement(m,null,i.a.createElement(L,null))),i.a.createElement(s.a,{path:"/"},i.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0d0bfa10.chunk.js.map