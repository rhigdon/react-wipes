(this["webpackJsonpreact-wipes-example"]=this["webpackJsonpreact-wipes-example"]||[]).push([[0],{281:function(e,a,t){e.exports=t(417)},286:function(e,a,t){},290:function(e,a,t){},411:function(e,a,t){},417:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(10),c=t.n(l),o=(t(286),t(25)),i=t(441),m=t(440),E=(t(290),t(12)),p=t(57),s=t(9),u=t(274),h=t(439),g=t(443),d=t(431),b=t(435),v=t(438),w=t(432),y=t(433),f=t(437),O=t(269),k=t.n(O),W=t(117),R=t(272);function j(e){return e.themeReducer}function C(e){return j(e).isDarkTheme}function S(e){return j(e).primaryColor}var I=t(434);t(411);function T(e){var a=e.primaryColor;return n.a.createElement(d.a,{container:!0,alignItems:"center"},n.a.createElement(w.a,{title:"React Wipes are reel fun."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"left-title-icon",className:"logo-icon",width:"25px",src:"/react-wipes/cinema_icon.svg"}))),n.a.createElement(y.a,{variant:"h6"},n.a.createElement(p.b,{style:{color:a},to:"/"},"React Wipes")),n.a.createElement(w.a,{title:"Use them once, and they'll reel you in."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"right-title-icon",className:"right-logo-icon",width:"25px",src:"/react-wipes/cinema_icon.svg"}))))}function L(){var e=n.a.useState(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return n.a.createElement(d.a,{container:!0,alignItems:"center",spacing:2},n.a.createElement(y.a,null,"yarn add react-wipes"),n.a.createElement(d.a,{item:!0},n.a.createElement(g.a,{m:1},n.a.createElement(I.a,{onClickAway:function(){return r(!1)}},n.a.createElement(w.a,{PopperProps:{disablePortal:!0},onClose:function(){return r(!1)},open:t,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Copied!"},n.a.createElement(b.a,{onClick:function(){navigator.clipboard.writeText("yarn add react-wipes"),r(!0)}},n.a.createElement(k.a,null)))))))}function x(){var e=Object(o.b)(),a=Object(o.c)(S),t=Object(f.a)({target:window||void 0});return n.a.createElement("div",{className:"App-header"},n.a.createElement(v.a,{appear:!1,direction:"down",in:!t},n.a.createElement(h.a,{style:{zIndex:0,background:"#424242"}},n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between",spacing:2},n.a.createElement(d.a,{item:!0},n.a.createElement(T,{primaryColor:a})),n.a.createElement(d.a,{item:!0},n.a.createElement(L,null))))),n.a.createElement(y.a,{variant:"h2"},"Github"),n.a.createElement(g.a,{m:1},n.a.createElement(E.TransitionLink,{color:a,to:"https://github.com/rhigdon/react-wipes"},"https://github.com/rhigdon/react-wipes")),n.a.createElement(y.a,{variant:"h2"},"Examples"),n.a.createElement(z,{to:"/clock-wipe"},"Clock Wipe"),n.a.createElement(z,{to:"/star-wipe"},"Star Wipe"),n.a.createElement(z,{to:"/heart-wipe"},"Heart Wipe"),n.a.createElement(z,{to:"/matrix-wipe"},"Matrix Wipe"),n.a.createElement(z,{to:"/scale-up"},"Scale Up"),n.a.createElement(z,{to:"/vertical"},"Vertical"),n.a.createElement(z,{to:"/split-vertical"},"Split Vertical"),n.a.createElement(z,{to:"/diagonal"},"Diagonal"),n.a.createElement(z,{to:"/split-diagonal"},"Split Diagonal"),n.a.createElement(z,{to:"/horizontal"},"Horizontal"),n.a.createElement(z,{to:"/horizontal-reverse"},"Horizontal Reverse"),n.a.createElement(z,{to:"/split-horizontal"},"Split Horizontal"),n.a.createElement(z,{to:"/bounce"},"Bounce"),n.a.createElement(y.a,{variant:"h2"},"Color Support"),n.a.createElement(g.a,{m:3},n.a.createElement(R.a,{onChangeComplete:function(a){e(function(e){return{type:"SET_PRIMARY_COLOR",color:e}}(a.hex))}})),n.a.createElement(g.a,{m:5},n.a.createElement(d.a,{container:!0,alignItems:"baseline",justify:"center",spacing:1},n.a.createElement(d.a,{item:!0},n.a.createElement(y.a,null,"Made with \u2764 by")),n.a.createElement(d.a,{item:!0},n.a.createElement(E.TransitionLink,{color:a,overlay:W.Overlay,to:"https://ryanhigdon.com"},"Ryan Higdon")))))}function z(e){var a=e.children,t=e.to,r=Object(o.c)(S);return n.a.createElement(g.a,{m:1},n.a.createElement(p.b,{style:{color:r},onClick:function(){},to:t},a))}function H(){var e=Object(o.c)(S);return n.a.createElement(p.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/diagonal"},n.a.createElement(E.DiagonalWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/split-diagonal"},n.a.createElement(E.SplitDiagonalWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/vertical"},n.a.createElement(E.VerticalWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/split-vertical"},n.a.createElement(E.SplitVerticalWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/heart-wipe"},n.a.createElement(E.HeartWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/matrix-wipe"},n.a.createElement(E.MatrixWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/horizontal"},n.a.createElement(E.HorizontalWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/horizontal-reverse"},n.a.createElement(E.HorizontalWipe,{color:e,direction:"reverse"},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/split-horizontal"},n.a.createElement(E.SplitHorizontalWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/scale-up"},n.a.createElement(E.ScaleWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/star-wipe"},n.a.createElement(E.StarWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{component:Object(E.withBounceWipe)(x,e),path:"/bounce"}),n.a.createElement(s.a,{path:"/clock-wipe"},n.a.createElement(E.ClockWipe,{color:e},n.a.createElement(x,null))),n.a.createElement(s.a,{path:"/"},n.a.createElement(x,null))))}var D=t(273),G=t(15),_=t(270),B=t.n(_),M=(Object(D.a)({palette:{primary:G.a.orange,type:"dark"}}),Object(D.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:G.a.orange,type:"light"}}),function(e,a){var t=G.a.orange;return"GREEN"===e?t=G.a.green:"LIGHT_GREEN"===e?t=G.a.lightGreen:"BLUE"===e?t=G.a.blue:"PURPLE"===e?t=G.a.purple:"ORANGE"===e?t=G.a.orange:"LIME"===e?t=G.a.lime:"RED"===e?t=G.a.red:"LIGHT_BLUE"===e?t=G.a.lightBlue:"BLUE_GREY"===e?t=G.a.blueGrey:"LIGHT_BROWN"===e&&(t={main:B.a[300]}),Object(D.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:t,type:a?"dark":"light"}})}),N=t(79),A=t(271),P=t(123),U={isDarkTheme:localStorage.getItem("isDarkTheme")||!1,primaryColor:localStorage.getItem("primaryColor")||"ORANGE"};var V=Object(N.b)({themeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_DARK_THEME":return localStorage.setItem("isDarkTheme",!e.isDarkTheme),Object(P.a)({},e,{isDarkTheme:!e.isDarkTheme});case"SET_PRIMARY_COLOR":return localStorage.setItem("primaryColor",a.color),Object(P.a)({},e,{primaryColor:a.color});default:return e}}}),Y=Object(N.c)(V,Object(N.a)(A.a));function J(){var e=Object(o.c)(S),a=Object(o.c)(C);return n.a.createElement(m.a,{theme:M(e,a)},n.a.createElement(i.a,null),n.a.createElement(H,null))}var F=function(){return n.a.createElement(o.a,{store:Y},n.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[281,1,2]]]);
//# sourceMappingURL=main.5135c524.chunk.js.map