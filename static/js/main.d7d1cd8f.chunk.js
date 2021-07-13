(this["webpackJsonpreact-wipes-example"]=this["webpackJsonpreact-wipes-example"]||[]).push([[0],{267:function(e,a,t){e.exports=t(399)},272:function(e,a,t){},276:function(e,a,t){},397:function(e,a,t){},399:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(8),c=t.n(l),o=(t(272),t(22)),i=t(420),m=t(419),p=(t(276),t(9)),E=t(52),s=t(6),u=t(259),h=t(418),g=t(422),d=t(413),b=t(426),v=t(423),w=t(416),f=t(417),y=t(103),O=t(257);function k(e){return e.themeReducer}function W(e){return k(e).isDarkTheme}function j(e){return k(e).primaryColor}var R=t(424);t(397);function S(e){var a=e.primaryColor;return n.a.createElement(d.a,{container:!0,alignItems:"center"},n.a.createElement(v.a,{title:"React Wipes are reel fun."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"left-title-icon",className:"logo-icon",width:"20px",src:"/react-wipes/cinema_icon.svg"}))),n.a.createElement(w.a,{variant:"subtitle1"},n.a.createElement(E.b,{style:{color:a},to:"/"},"React Wipes")),n.a.createElement(v.a,{title:"Use them once, and they'll reel you in."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"right-title-icon",className:"right-logo-icon",width:"20px",src:"/react-wipes/cinema_icon.svg"}))))}function C(){var e=n.a.useState(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return n.a.createElement(R.a,{onClickAway:function(){return r(!1)}},n.a.createElement(v.a,{PopperProps:{disablePortal:!0},onClose:function(){return r(!1)},open:t,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Copied!"},n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"center",spacing:1},n.a.createElement(d.a,{item:!0},n.a.createElement(w.a,{variant:"caption"},"yarn add")),n.a.createElement(d.a,{item:!0},"foo"))))}function I(){var e=Object(o.b)(),a=Object(o.c)(j),t=Object(f.a)({target:window||void 0});return n.a.createElement("div",{className:"App-header"},n.a.createElement(b.a,{appear:!1,direction:"down",in:!t},n.a.createElement(h.a,{style:{zIndex:0,background:"#424242"}},n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between",spacing:2},n.a.createElement(d.a,{item:!0},n.a.createElement(S,{primaryColor:a})),n.a.createElement(d.a,{item:!0},n.a.createElement(C,null))))),n.a.createElement(g.a,{m:4}),n.a.createElement(w.a,{variant:"h2"},"Github"),n.a.createElement(g.a,{m:1},n.a.createElement(p.TransitionLink,{color:a,to:"https://github.com/rhigdon/react-wipes"},"https://github.com/rhigdon/react-wipes")),n.a.createElement(w.a,{variant:"h2"},"Examples"),n.a.createElement(T,{to:"/clock-wipe"},"Clock Wipe"),n.a.createElement(T,{to:"/star-wipe"},"Star Wipe"),n.a.createElement(T,{to:"/heart-wipe"},"Heart Wipe"),n.a.createElement(T,{to:"/matrix-wipe"},"Matrix Wipe"),n.a.createElement(T,{to:"/scale-up"},"Scale Up"),n.a.createElement(T,{to:"/vertical"},"Vertical"),n.a.createElement(T,{to:"/split-vertical"},"Split Vertical"),n.a.createElement(T,{to:"/diagonal"},"Diagonal"),n.a.createElement(T,{to:"/split-diagonal"},"Split Diagonal"),n.a.createElement(T,{to:"/horizontal"},"Horizontal"),n.a.createElement(T,{to:"/horizontal-reverse"},"Horizontal Reverse"),n.a.createElement(T,{to:"/split-horizontal"},"Split Horizontal"),n.a.createElement(T,{to:"/bounce"},"Bounce"),n.a.createElement(w.a,{variant:"h2"},"Color Support"),n.a.createElement(g.a,{m:3},n.a.createElement(O.a,{onChangeComplete:function(a){e(function(e){return{type:"SET_PRIMARY_COLOR",color:e}}(a.hex))}})),n.a.createElement(g.a,{m:5},n.a.createElement(d.a,{container:!0,alignItems:"baseline",justify:"center",spacing:1},n.a.createElement(d.a,{item:!0},n.a.createElement(w.a,null,"Made with \u2764 by")),n.a.createElement(d.a,{item:!0},n.a.createElement(p.TransitionLink,{color:a,overlay:y.Overlay,to:"https://ryanhigdon.com"},"Ryan Higdon")))))}function T(e){var a=e.children,t=e.to,r=Object(o.c)(j),l=(Object(s.f)(),Object(s.g)());return n.a.createElement(g.a,{m:1},n.a.createElement(E.b,{replace:!0,style:{color:r},onClick:function(e){l.href="/react-wipes#"+t,l.pathname===t&&(window.location.reload(!0),e.preventDefault())},to:t},a))}function L(){var e=Object(o.c)(j);return n.a.createElement(E.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/diagonal"},n.a.createElement(p.DiagonalWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/split-diagonal"},n.a.createElement(p.SplitDiagonalWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/vertical"},n.a.createElement(p.VerticalWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/split-vertical"},n.a.createElement(p.SplitVerticalWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/heart-wipe"},n.a.createElement(p.HeartWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/matrix-wipe"},n.a.createElement(p.MatrixWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/horizontal"},n.a.createElement(p.HorizontalWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/horizontal-reverse"},n.a.createElement(p.HorizontalWipe,{color:e,direction:"reverse"},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/split-horizontal"},n.a.createElement(p.SplitHorizontalWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/scale-up"},n.a.createElement(p.ScaleWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/star-wipe"},n.a.createElement(p.StarWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{component:Object(p.withBounceWipe)(I,e),path:"/bounce"}),n.a.createElement(s.a,{path:"/clock-wipe"},n.a.createElement(p.ClockWipe,{color:e},n.a.createElement(I,null))),n.a.createElement(s.a,{path:"/"},n.a.createElement(I,null))))}var z=t(258),x=t(13),D=t(255),H=t.n(D),G=(Object(z.a)({palette:{primary:x.a.orange,type:"dark"}}),Object(z.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:x.a.orange,type:"light"}}),function(e,a){var t=x.a.orange;return"GREEN"===e?t=x.a.green:"LIGHT_GREEN"===e?t=x.a.lightGreen:"BLUE"===e?t=x.a.blue:"PURPLE"===e?t=x.a.purple:"ORANGE"===e?t=x.a.orange:"LIME"===e?t=x.a.lime:"RED"===e?t=x.a.red:"LIGHT_BLUE"===e?t=x.a.lightBlue:"BLUE_GREY"===e?t=x.a.blueGrey:"LIGHT_BROWN"===e&&(t={main:H.a[300]}),Object(z.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:t,type:a?"dark":"light"}})}),_=t(69),B=t(256),M=t(109),N={isDarkTheme:localStorage.getItem("isDarkTheme")||!1,primaryColor:localStorage.getItem("primaryColor")||"ORANGE"};var A=Object(_.b)({themeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_DARK_THEME":return localStorage.setItem("isDarkTheme",!e.isDarkTheme),Object(M.a)({},e,{isDarkTheme:!e.isDarkTheme});case"SET_PRIMARY_COLOR":return localStorage.setItem("primaryColor",a.color),Object(M.a)({},e,{primaryColor:a.color});default:return e}}}),P=Object(_.c)(A,Object(_.a)(B.a));function U(){var e=Object(o.c)(j),a=Object(o.c)(W);return n.a.createElement(m.a,{theme:G(e,a)},n.a.createElement(i.a,null),n.a.createElement(L,null))}var V=function(){return n.a.createElement(o.a,{store:P},n.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[267,1,2]]]);
//# sourceMappingURL=main.d7d1cd8f.chunk.js.map