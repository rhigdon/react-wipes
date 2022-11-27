(this["webpackJsonpreact-wipes-example"]=this["webpackJsonpreact-wipes-example"]||[]).push([[0],{278:function(e,a,t){e.exports=t(412)},283:function(e,a,t){},287:function(e,a,t){},406:function(e,a,t){},412:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(8),c=t.n(l),o=(t(283),t(23)),i=t(434),m=t(433),p=(t(287),t(10)),E=t(54),s=t(6),u=t(270),h=t(432),g=t(436),d=t(425),w=t(431),v=t(426),b=t(427),f=t(430),y=t(265),k=t.n(y),O=t(112),j=t(268);function W(e){return e.themeReducer}function T(e){return W(e).isDarkTheme}function R(e){return W(e).primaryColor}var S=t(428);t(406);function C(e){var a=e.primaryColor;return n.a.createElement(d.a,{container:!0,alignItems:"center"},n.a.createElement(v.a,{title:"React Wipes are reel fun."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"left-title-icon",className:"logo-icon",width:"20px",src:"/react-wipes/cinema_icon.svg"}))),n.a.createElement(b.a,{variant:"subtitle1"},n.a.createElement(E.b,{style:{color:a},to:"/"},"React Wipes")),n.a.createElement(v.a,{title:"Use them once, and they'll reel you in."},n.a.createElement(g.a,{m:1},n.a.createElement("img",{alt:"right-title-icon",className:"right-logo-icon",width:"20px",src:"/react-wipes/cinema_icon.svg"}))))}function I(){var e=n.a.useState(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return n.a.createElement(d.a,{container:!0,direction:"row",justify:"center"},n.a.createElement(d.a,{item:!0},n.a.createElement(b.a,{variant:"caption"},"yarn add react-wipes")),n.a.createElement(d.a,{item:!0},n.a.createElement(g.a,{m:1},n.a.createElement(S.a,{onClickAway:function(){return r(!1)}},n.a.createElement(v.a,{PopperProps:{disablePortal:!0},onClose:function(){return r(!1)},open:t,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Copied!"},n.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){navigator.clipboard.writeText("yarn add react-wipes"),r(!0)}},n.a.createElement(k.a,{fontSize:"small"})))))))}function L(){var e=Object(o.b)(),a=Object(o.c)(R),t=Object(f.a)({target:window||void 0});return n.a.createElement("div",{className:"App-header"},n.a.createElement(w.a,{appear:!1,direction:"down",in:!t},n.a.createElement(h.a,{style:{zIndex:0,background:"#424242"}},n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between",spacing:2},n.a.createElement(d.a,{item:!0},n.a.createElement(C,{primaryColor:a})),n.a.createElement(d.a,{item:!0},n.a.createElement(I,null))))),n.a.createElement(g.a,{m:4}),n.a.createElement(b.a,{variant:"h2"},"Github"),n.a.createElement(g.a,{m:1},n.a.createElement(p.TransitionLink,{color:a,to:"https://github.com/rhigdon/react-wipes"},"https://github.com/rhigdon/react-wipes")),n.a.createElement(b.a,{variant:"h2"},"Examples"),n.a.createElement(x,{to:"/clock-wipe"},"Clock Wipe"),n.a.createElement(x,{to:"/star-wipe"},"Star Wipe"),n.a.createElement(x,{to:"/heart-wipe"},"Heart Wipe"),n.a.createElement(x,{to:"/matrix-wipe"},"Matrix Wipe"),n.a.createElement(x,{to:"/scale-up"},"Scale Up"),n.a.createElement(x,{to:"/vertical"},"Vertical"),n.a.createElement(x,{to:"/split-vertical"},"Split Vertical"),n.a.createElement(x,{to:"/diagonal"},"Diagonal"),n.a.createElement(x,{to:"/split-diagonal"},"Split Diagonal"),n.a.createElement(x,{to:"/horizontal"},"Horizontal"),n.a.createElement(x,{to:"/horizontal-reverse"},"Horizontal Reverse"),n.a.createElement(x,{to:"/split-horizontal"},"Split Horizontal"),n.a.createElement(x,{to:"/bounce"},"Bounce"),n.a.createElement(b.a,{variant:"h2"},"Color Support"),n.a.createElement(g.a,{m:3},n.a.createElement(j.a,{onChangeComplete:function(a){e(function(e){return{type:"SET_PRIMARY_COLOR",color:e}}(a.hex))}})),n.a.createElement(b.a,{variant:"h2"},"NPM"),n.a.createElement(g.a,{m:1},n.a.createElement(p.TransitionLink,{color:a,to:"https://www.npmjs.com/package/react-wipes"},"https://www.npmjs.com/package/react-wipes")),n.a.createElement(g.a,{m:5},n.a.createElement(d.a,{container:!0,alignItems:"baseline",justify:"center",spacing:1},n.a.createElement(d.a,{item:!0},n.a.createElement(b.a,null,"Made with ",n.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," by")),n.a.createElement(d.a,{item:!0},n.a.createElement(p.TransitionLink,{color:a,overlay:O.Overlay,to:"https://ryanhigdon.com"},"Ryan Higdon")))))}function x(e){var a=e.children,t=e.to,r=Object(o.c)(R),l=Object(s.f)();return n.a.createElement(g.a,{m:1},n.a.createElement(E.b,{replace:!0,style:{color:r},onClick:function(e){l.href="/react-wipes#"+t,l.pathname===t&&(window.location.reload(!0),e.preventDefault())},to:t},a))}function z(){var e=Object(o.c)(R);return n.a.createElement(E.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/diagonal"},n.a.createElement(p.DiagonalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/split-diagonal"},n.a.createElement(p.SplitDiagonalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/vertical"},n.a.createElement(p.VerticalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/split-vertical"},n.a.createElement(p.SplitVerticalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/heart-wipe"},n.a.createElement(p.HeartWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/matrix-wipe"},n.a.createElement(p.MatrixWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/horizontal"},n.a.createElement(p.HorizontalWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/horizontal-reverse"},n.a.createElement(p.HorizontalWipe,{color:e,direction:"reverse"},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/split-horizontal"},n.a.createElement(p.SplitHorizontalWipe,{color:e,message:"Testing"},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/scale-up"},n.a.createElement(p.ScaleWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/star-wipe"},n.a.createElement(p.StarWipe,{color:e},n.a.createElement(L,null))),n.a.createElement(s.a,{component:Object(p.withBounceWipe)(L,e),path:"/bounce"}),n.a.createElement(s.a,{path:"/clock-wipe"},n.a.createElement(p.ClockWipe,{color:e,message:n.a.createElement("div",{style:{background:"white"}},"This is an example of a custom message!")},n.a.createElement(L,null))),n.a.createElement(s.a,{path:"/"},n.a.createElement(L,null))))}var D=t(269),H=t(15),G=t(266),_=t.n(G),B=(Object(D.a)({palette:{primary:H.a.orange,type:"dark"}}),Object(D.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:H.a.orange,type:"light"}}),function(e,a){var t=H.a.orange;return"GREEN"===e?t=H.a.green:"LIGHT_GREEN"===e?t=H.a.lightGreen:"BLUE"===e?t=H.a.blue:"PURPLE"===e?t=H.a.purple:"ORANGE"===e?t=H.a.orange:"LIME"===e?t=H.a.lime:"RED"===e?t=H.a.red:"LIGHT_BLUE"===e?t=H.a.lightBlue:"BLUE_GREY"===e?t=H.a.blueGrey:"LIGHT_BROWN"===e&&(t={main:_.a[300]}),Object(D.a)({zIndex:{appBar:1200,drawer:1100},palette:{primary:t,type:a?"dark":"light"}})}),M=t(76),N=t(267),P=t(118),A={isDarkTheme:localStorage.getItem("isDarkTheme")||!1,primaryColor:localStorage.getItem("primaryColor")||"#e91e63"};var U=Object(M.b)({themeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_DARK_THEME":return localStorage.setItem("isDarkTheme",!e.isDarkTheme),Object(P.a)({},e,{isDarkTheme:!e.isDarkTheme});case"SET_PRIMARY_COLOR":return localStorage.setItem("primaryColor",a.color),Object(P.a)({},e,{primaryColor:a.color});default:return e}}}),V=Object(M.c)(U,Object(M.a)(N.a));function Y(){var e=Object(o.c)(R),a=Object(o.c)(T);return n.a.createElement(m.a,{theme:B(e,a)},n.a.createElement(i.a,null),n.a.createElement(z,null))}var J=function(){return n.a.createElement(o.a,{store:V},n.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[278,1,2]]]);
//# sourceMappingURL=main.0dd950b9.chunk.js.map