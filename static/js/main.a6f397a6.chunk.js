(this["webpackJsonpreact-wipes-example"]=this["webpackJsonpreact-wipes-example"]||[]).push([[0],{281:function(e,a,t){e.exports=t(417)},286:function(e,a,t){},290:function(e,a,t){},411:function(e,a,t){},417:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(10),c=t.n(l),o=(t(286),t(25)),i=t(441),m=t(440),p=(t(290),t(12)),E=t(57),s=t(9),u=t(274),h=t(439),g=t(443),d=t(431),b=t(435),v=t(438),w=t(432),f=t(433),y=t(437),O=t(269),k=t.n(O),W=t(117),j=t(272);function R(e){return e.themeReducer}function C(e){return R(e).isDarkTheme}function S(e){return R(e).primaryColor}var I=t(434);t(411);function T(e){var a=e.primaryColor;return n.a.createElement(d.a,{container:!0,alignItems:"center"},n.a.createElement(w.a,{title:"React Wipes are reel fun."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"left-title-icon",className:"logo-icon",width:"25px",src:"/react-wipes/cinema_icon.svg"}))),n.a.createElement(f.a,{variant:"subtitle1"},n.a.createElement(E.b,{style:{color:a},to:"/"},"React Wipes")),n.a.createElement(w.a,{title:"Use them once, and they'll reel you in."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"right-title-icon",className:"right-logo-icon",width:"25px",src:"/react-wipes/cinema_icon.svg"}))))}function z(){var e=n.a.useState(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return n.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},n.a.createElement(f.a,{variant:"subtitle2"},"yarn add react-wipes"),n.a.createElement(g.a,{m:1},n.a.createElement(I.a,{onClickAway:function(){return r(!1)}},n.a.createElement(w.a,{PopperProps:{disablePortal:!0},onClose:function(){return r(!1)},open:t,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Copied!"},n.a.createElement(b.a,{size:"small",onClick:function(){navigator.clipboard.writeText("yarn add react-wipes"),r(!0)}},n.a.createElement(k.a,null))))))}function L(){var e=Object(o.b)(),a=Object(o.c)(S),t=Object(y.a)({target:window||void 0});return n.a.createElement("div",{className:"App-header"},n.a.createElement(v.a,{appear:!1,direction:"down",in:!t},n.a.createElement(h.a,{style:{zIndex:0,background:"#424242"}},n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between",spacing:2},n.a.createElement(d.a,{item:!0},n.a.createElement(T,{primaryColor:a})),n.a.createElement(d.a,{item:!0},n.a.createElement(z,null))))),n.a.createElement(g.a,{m:4}),n.a.createElement(f.a,{variant:"h2"},"Github"),n.a.createElement(g.a,{m:1},n.a.createElement(p.TransitionLink,{color:a,to:"https://github.com/rhigdon/react-wipes"},"https://github.com/rhigdon/react-wipes")),n.a.createElement(f.a,{variant:"h2"},"Examples"),n.a.createElement(x,{to:"/clock-wipe"},"Clock Wipe"),n.a.createElement(x,{to:"/star-wipe"},"Star Wipe"),n.a.createElement(x,{to:"/heart-wipe"},"Heart Wipe"),n.a.createElement(x,{to:"/matrix-wipe"},"Matrix Wipe"),n.a.createElement(x,{to:"/scale-up"},"Scale Up"),n.a.createElement(x,{to:"/vertical"},"Vertical"),n.a.createElement(x,{to:"/split-vertical"},"Split Vertical"),n.a.createElement(x,{to:"/diagonal"},"Diagonal"),n.a.createElement(x,{to:"/split-diagonal"},"Split Diagonal"),n.a.createElement(x,{to:"/horizontal"},"Horizontal"),n.a.createElement(x,{to:"/horizontal-reverse"},"Horizontal Reverse"),n.a.createElement(x,{to:"/split-horizontal"},"Split Horizontal"),n.a.createElement(x,{to:"/bounce"},"Bounce"),n.a.createElement(f.a,{variant:"h2"},"Color Support"),n.a.createElement(g.a,{m:3},n.a.createElement(j.a,{onChangeComplete:function(a){e(function(e){return{type:"SET_PRIMARY_COLOR",color:e}}(a.hex))}})),n.a.createElement(g.a,{m:5},n.a.createElement(d.a,{container:!0,alignItems:"baseline",justify:"center",spacing:1},n.a.createElement(d.a,{item:!0},n.a.createElement(f.a,null,"Made with \u2764 by")),n.a.createElement(d.a,{item:!0},n.a.createElement(p.TransitionLink,{color:a,overlay:W.Overlay,to:"https://ryanhigdon.com"},"Ryan Higdon")))))}function x(e){var a=e.children,t=e.to,r=Object(o.c)(S),l=Object(s.f)(),c=Object(s.g)();return n.a.createElement(g.a,{m:1},n.a.createElement(E.b,{replace:!0,style:{color:r},onClick:function(e){c.href="/react-wipes#"+t,c.pathname===t&&(l.go(0),e.preventDefault())},to:t},a))}function D(){var e=Object(o.c)(S);return n.a.createElement(E.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/diagonal"},n.a.createElement(p.DiagonalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/split-diagonal"},n.a.createElement(p.SplitDiagonalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/vertical"},n.a.createElement(p.VerticalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/split-vertical"},n.a.createElement(p.SplitVerticalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/heart-wipe"},n.a.createElement(p.HeartWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/matrix-wipe"},n.a.createElement(p.MatrixWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/horizontal"},n.a.createElement(p.HorizontalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/horizontal-reverse"},n.a.createElement(p.HorizontalWipe,{color:e,direction:"reverse"},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/split-horizontal"},n.a.createElement(p.SplitHorizontalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/scale-up"},n.a.createElement(p.ScaleWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/star-wipe"},n.a.createElement(p.StarWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{component:Object(p.withBounceWipe)(L,e),path:"/bounce"}),n.a.createElement(s.a,{path:"/clock-wipe"},n.a.createElement(p.ClockWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/"},n.a.createElement(L,null))))}var H=t(273),G=t(15),_=t(270),B=t.n(_),M=(Object(H.a)({palette:{primary:G.a.orange,type:"dark"}}),Object(H.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:G.a.orange,type:"light"}}),function(e,a){var t=G.a.orange;return"GREEN"===e?t=G.a.green:"LIGHT_GREEN"===e?t=G.a.lightGreen:"BLUE"===e?t=G.a.blue:"PURPLE"===e?t=G.a.purple:"ORANGE"===e?t=G.a.orange:"LIME"===e?t=G.a.lime:"RED"===e?t=G.a.red:"LIGHT_BLUE"===e?t=G.a.lightBlue:"BLUE_GREY"===e?t=G.a.blueGrey:"LIGHT_BROWN"===e&&(t={main:B.a[300]}),Object(H.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:t,type:a?"dark":"light"}})}),N=t(79),A=t(271),P=t(123),U={isDarkTheme:localStorage.getItem("isDarkTheme")||!1,primaryColor:localStorage.getItem("primaryColor")||"ORANGE"};var V=Object(N.b)({themeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_DARK_THEME":return localStorage.setItem("isDarkTheme",!e.isDarkTheme),Object(P.a)({},e,{isDarkTheme:!e.isDarkTheme});case"SET_PRIMARY_COLOR":return localStorage.setItem("primaryColor",a.color),Object(P.a)({},e,{primaryColor:a.color});default:return e}}}),Y=Object(N.c)(V,Object(N.a)(A.a));function J(){var e=Object(o.c)(S),a=Object(o.c)(C);return n.a.createElement(m.a,{theme:M(e,a)},n.a.createElement(i.a,null),n.a.createElement(D,null))}var F=function(){return n.a.createElement(o.a,{store:Y},n.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[281,1,2]]]);
//# sourceMappingURL=main.a6f397a6.chunk.js.map