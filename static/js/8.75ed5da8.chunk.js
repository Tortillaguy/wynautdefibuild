(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{904:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var c=n(4),a=n.n(c),r=n(9),i=n(108),o=n.n(i),s=n(90),u=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},b=function(){var e=Object(r.a)(a.a.mark((function e(t,n,c){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(t,n),e.prev=1,e.next=4,r.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},917:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return pe}));var c,a,r,i,o,s,u,b,l,j,p,d,O,f=n(5),m=n(0),x=n(3),h=n(16),g=n(39),v=n(146),k=n(4),w=n.n(k),y=n(9),T=n(17),S=n(61),Q=n(254),z=n(2),E=n(11),N=n.n(E),I=n(50),P=n(23),W=n(94),M=n(250),C=n(180),H=function(){var e=Object(m.useState)([]),t=Object(T.a)(e,2),n=t[0],c=t[1],a=Object(S.j)().account,r=Object(C.a)().fastRefresh;return Object(m.useEffect)((function(){a&&function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=M.b.map((function(e){return{address:Object(P.d)(),name:"pendingMeowth",params:[e.pid,a]}})),e.next=3,Object(I.a)(W,t);case 3:n=e.sent,r=M.b.map((function(e,t){return Object(z.a)(Object(z.a)({},e),{},{balance:new N.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},U=n(253),D=function(){var e=Object(m.useState)([]),t=Object(T.a)(e,2),n=t[0],c=t[1],a=Object(S.j)().account,r=Object(C.a)().fastRefresh;return Object(m.useEffect)((function(){a&&function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=M.b.map((function(e){return{address:Object(P.d)(),name:"pendingMeowth",params:[e.pid,a]}})),e.next=3,Object(I.a)(W,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},L=n(411),R=n(1),A=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=Object(L.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),i=r.countUp,o=r.update,s=Object(m.useRef)(o);return Object(m.useEffect)((function(){s.current(t)}),[t,s]),Object(R.jsx)(h.y,{bold:!0,fontSize:a,children:i})},B=function(){var e=Object(g.a)(),t=Object(S.j)().account,n=D().reduce((function(e,t){return e+new N.a(t).div(new N.a(10).pow(18)).toNumber()}),0);return t?Object(R.jsx)(A,{value:n}):Object(R.jsx)(h.y,{color:"textDisabled",style:{lineHeight:"60px"},children:e(298,"Locked")})},F=n(358),V=n(63),q=n(904),_=function(e){var t=Object(m.useState)(new N.a(0)),n=Object(T.a)(t,2),c=n[0],a=n[1],r=Object(S.j)(),i=r.account,o=r.ethereum,s=Object(C.a)().fastRefresh;return Object(m.useEffect)((function(){i&&o&&function(){var t=Object(y.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(q.b)(o,e,i);case 2:n=t.sent,a(new N.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,o,e,s]),c},J=n(60),K=function(){var e=Object(g.a)(),t=_(Object(P.e)());return Object(S.j)().account?Object(R.jsx)(A,{value:Object(J.a)(t),fontSize:"24px"}):Object(R.jsx)(h.y,{color:"textDisabled",style:{lineHeight:"36px"},children:e(298,"Locked")})},$=Object(x.e)(h.h)(c||(c=Object(f.a)(["\n  // background-image: url('/images/meowth-head.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),G=x.e.div(a||(a=Object(f.a)(["\n  margin-bottom: 16px;\n"]))),X=x.e.img(r||(r=Object(f.a)(["\n  margin-bottom: 16px;\n"]))),Y=x.e.div(i||(i=Object(f.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Z=x.e.div(o||(o=Object(f.a)(["\n  margin-top: 24px;\n"]))),ee=function(){var e=Object(m.useState)(!1),t=Object(T.a)(e,2),n=t[0],c=t[1],a=Object(S.j)().account,r=Object(g.a)(),i=H().filter((function(e){return e.balance.toNumber()>0})),o=Object(Q.a)(i.map((function(e){return e.pid}))).onReward,s=Object(m.useCallback)(Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(R.jsx)($,{children:Object(R.jsxs)(h.i,{children:[Object(R.jsx)(h.n,{size:"xl",mb:"24px",children:r(542,"Farms & Staking")}),Object(R.jsx)(X,{src:"/images/meowth-head.svg",alt:"meowth logo",width:128,height:128}),Object(R.jsxs)(G,{children:[Object(R.jsx)(B,{}),Object(R.jsx)(Y,{children:r(544,"MEOWTH to Pick Up")})]}),Object(R.jsxs)(G,{children:[Object(R.jsx)(K,{}),Object(R.jsx)(Y,{children:r(546,"MEOWTH in Wallet")})]}),Object(R.jsx)(Z,{children:a?Object(R.jsx)(h.d,{id:"harvest-all",disabled:i.length<=0||n,onClick:s,fullWidth:!0,children:n?r(548,"Picking Up MEOWTH"):r(532,"Pick Up (".concat(i.length," pools)"))}):Object(R.jsx)(U.a,{fullWidth:!0})})]})})},te=Object(x.e)(h.h)(s||(s=Object(f.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ne=x.e.div(u||(u=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ce=function(){var e=Object(g.a)(),t=function(){var e=Object(C.a)().slowRefresh,t=Object(m.useState)(),n=Object(T.a)(t,2),c=n[0],a=n[1];return Object(m.useEffect)((function(){function e(){return(e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(V.a)(F,Object(P.e)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new N.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(m.useState)(new N.a(0)),n=Object(T.a)(t,2),c=n[0],a=n[1],r=Object(S.j)(),i=r.account,o=r.ethereum,s=Object(C.a)().slowRefresh;return Object(m.useEffect)((function(){i&&o&&function(){var t=Object(y.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(q.b)(o,e,"0x000000000000000000000000000000000000dEaD");case 2:n=t.sent,a(new N.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,o,e,s]),c}(Object(P.e)()),c=t?Object(J.a)(t)-Object(J.a)(n):0;return Object(R.jsx)(te,{children:Object(R.jsxs)(h.i,{children:[Object(R.jsx)(h.n,{size:"xl",mb:"36px",children:e(534,"Stats")}),Object(R.jsx)(h.n,{size:"xs",mb:"8px",children:e(534,"Meowth")}),Object(R.jsxs)(ne,{children:[Object(R.jsx)(h.y,{fontSize:"14px",children:e(536,"Total MEOWTH Supply")}),c&&Object(R.jsx)(A,{fontSize:"14px",value:c})]}),Object(R.jsxs)(ne,{children:[Object(R.jsx)(h.y,{fontSize:"14px",children:e(538,"Total MEOWTH Burned")}),Object(R.jsx)(A,{fontSize:"14px",value:Object(J.a)(n)})]}),Object(R.jsxs)(ne,{children:[Object(R.jsx)(h.y,{fontSize:"14px",children:e(540,"New MEOWTH/block")}),Object(R.jsx)(A,{fontSize:"14px",decimals:0,value:250})]})]})})},ae=n(53),re=n(62),ie=n(248),oe=n(34),se=Object(x.e)(h.h)(b||(b=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  width: 100%;\n  text-align: center;\n"]))),ue=Object(x.f)(l||(l=Object(f.a)([" \n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),be=(x.e.div(j||(j=Object(f.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(8px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n  opacity: 0.5;\n"])),ue),function(){var e=Object(S.j)(),t=e.account,n=(e.ethereum,Object(re.h)()),c=Object(re.g)(),a=Object(re.c)(),r=Object(re.f)(t),i=Object(m.useCallback)((function(e,t){var r,i=new N.a((null===(r=a.find((function(e){return e.pid===ie.d})))||void 0===r?void 0:r.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=ie.c.times(e.poolWeight),n=t.times(ie.b),a=i.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===oe.b.BUSD)a=i.times(n).div(e.lpTotalInQuoteToken).times(c);else if(e.quoteTokenSymbol===oe.b.CAKE)a=n.div(e.lpTotalInQuoteToken);else if(e.dual){var r=e&&i.times(t).times(ie.b).div(e.lpTotalInQuoteToken),o=e.tokenPriceVsQuote&&new N.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(ie.b).div(e.lpTotalInQuoteToken);a=r&&o&&r.plus(o)}return Object(z.a)(Object(z.a)({},e),{},{apy:a})})).map((function(e){new N.a("0");return e.lpTotalInQuoteToken?e.quoteTokenSymbol===oe.b.BNB?c.times(e.lpTotalInQuoteToken):e.quoteTokenSymbol===oe.b.CAKE?n.times(e.lpTotalInQuoteToken):e.lpTotalInQuoteToken:null}))}),[a,c,n]),o=r.map((function(e){var t=e.poolCategory===oe.a.BINANCE,n=a.find((function(t){return t.tokenSymbol===e.stakingTokenName}));return(t?new N.a(1):new N.a(null===n||void 0===n?void 0:n.tokenPriceVsQuote).times(1)).times(Object(J.a)(e.totalStaked)).times(c)})),s=[].concat(Object(ae.a)(i(a,!1)),Object(ae.a)(o)).reduce((function(e,t){return(e||new N.a(0)).plus(t)})),u=s.isNaN()?null:Number(s).toLocaleString("en-US",{maximumFractionDigits:0}),b=Object(g.a)(),l=function(){var e=Object(m.useState)(null),t=Object(T.a)(e,2),n=t[0],c=t[1];return Object(m.useEffect)((function(){!function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.pancakeswap.com/api/v1","/stat"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}();l&&l.total_value_locked_all.toLocaleString("en-US",{maximumFractionDigits:0});return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(se,{children:Object(R.jsxs)(h.i,{style:{width:"100%",textAlign:"center"},children:[Object(R.jsx)(h.n,{size:"lg",mb:"24px",children:b(762,"Total Value Locked (TVL)")}),l&&u?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(h.n,{size:"xl",children:"$".concat(u)}),Object(R.jsx)(h.y,{color:"textSubtle",children:b(764,"Across all LPs and Pay Day Pool")})]}):Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(h.w,{height:66})})]})})})}),le=(x.e.div(p||(p=Object(f.a)(["\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 162px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/meowth-coins.svg'), url('/images/wynaut-coins.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Object(x.e)(h.b)(d||(d=Object(f.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}))),je=Object(x.e)(h.b)(O||(O=Object(f.a)(["\n  align-items: center;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 12;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),pe=function(){Object(g.a)();return Object(R.jsxs)(v.a,{children:[Object(R.jsxs)("div",{className:"Hero",children:[Object(R.jsx)("img",{src:"/images/wynaut.svg",alt:"Wynaut",className:"center"}),Object(R.jsx)("img",{src:"/images/meowth.svg",alt:"Meowth",className:"center"}),Object(R.jsx)("br",{})]}),Object(R.jsxs)("div",{children:[Object(R.jsxs)(le,{children:[Object(R.jsx)(ee,{}),Object(R.jsx)(ce,{})]}),Object(R.jsx)(je,{children:Object(R.jsx)(be,{})})]})]})}}}]);
//# sourceMappingURL=8.75ed5da8.chunk.js.map