(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1085:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return b}));var c=n(4),r=n.n(c),a=n(9),i=n(119),o=n.n(i),s=n(99),l=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},d=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},1087:function(e,t,n){"use strict";var c,r=n(5),a=(n(0),n(3)),i=n(15),o=n(1),s=a.e.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),l=function(e){var t=e.onClick,n=e.expanded;return Object(o.jsxs)(s,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(o.jsx)(i.A,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(o.jsx)(i.l,{}):Object(o.jsx)(i.k,{})]})};l.defaultProps={expanded:!1},t.a=l},1111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ee}));var c,r,a,i,o,s,l,d,b,j,u,x,p,O,m,h,f,k,g,y,v=n(2),S=n(16),w=n(0),A=n(42),C=n(33),T=n(11),L=n.n(T),I=n(67),P=n(289),q=n(497),U=n(166),D=n(69),z=n(205),N=n(39),Q=n(32),E=n(43),B=n(5),M=n(3),W=n(15),F=n(294),H=n(1087),R=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[56],a=c[56];return"".concat(r,"/").concat(a)},V=n(1),G=M.e.div(c||(c=Object(B.a)(["\n  margin-top: 24px;\n"]))),J=Object(M.e)(W.t)(r||(r=Object(B.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),K=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,r=e.lpLabel,a=e.addLiquidityUrl,i=Object(E.a)();return Object(V.jsxs)(G,{children:[Object(V.jsxs)(W.n,{justifyContent:"space-between",children:[Object(V.jsxs)(W.A,{children:[i(316,"Stake"),":"]}),Object(V.jsx)(J,{href:a,children:r})]}),!n&&Object(V.jsxs)(W.n,{justifyContent:"space-between",children:[Object(V.jsxs)(W.A,{children:[i(23,"Total Liquidity"),":"]}),Object(V.jsx)(W.A,{children:c})]}),Object(V.jsx)(W.n,{justifyContent:"flex-start",children:Object(V.jsx)(W.s,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},X=Object(M.e)(W.n)(a||(a=Object(B.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n  flex-wrap: wrap;\n"]))),$=(Object(M.e)(W.z)(i||(i=Object(B.a)(["\n  margin-left: 4px;\n"]))),function(e){var t=e.lpLabel,n=(e.multiplier,e.isCommunityFarm,e.farmImage),c=e.tokenSymbol;return Object(V.jsxs)(X,{justifyContent:"center",alignItems:"center",mb:"12px",children:[Object(V.jsx)(W.n,{flexDirection:"column",alignItems:"flex-end",children:Object(V.jsx)(W.o,{mb:"4px",children:t})}),Object(V.jsx)(W.q,{src:"/images/farms/".concat(n,".svg"),alt:c,width:128,height:128})]})}),Y=n(4),Z=n.n(Y),_=n(9),ee=n(1085),te=n(23),ne=n(292),ce=n(299),re=n(500),ae=n(501),ie=n(63),oe=n(125),se=M.e.div(o||(o=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,c=e.theme;return n?c.shadows.warning:c.shadows.inset}),(function(e){return e.theme.colors.text})),le=Object(M.e)(W.r)(s||(s=Object(B.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),de=Object(M.e)(W.A)(l||(l=Object(B.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),be=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,o=e.inputTitle,s=Object(E.a)(),l="0"===t||!t,d=l?"0":parseFloat(t).toFixed(4);return Object(V.jsxs)("div",{style:{position:"relative"},children:[Object(V.jsxs)(se,{isWarning:l,children:[Object(V.jsxs)(W.n,{justifyContent:"space-between",pl:"16px",children:[Object(V.jsx)(W.A,{fontSize:"14px",children:o}),Object(V.jsxs)(W.A,{fontSize:"14px",children:[s(999,"Balance"),": ",d.toLocaleString()]})]}),Object(V.jsxs)(W.n,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(V.jsx)(le,{onChange:c,placeholder:"0",value:a}),Object(V.jsx)(W.d,{size:"sm",onClick:r,mr:"8px",children:s(452,"Max")}),Object(V.jsx)(W.A,{fontSize:"16px",children:n})]})]}),l&&Object(V.jsxs)(de,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",Object(V.jsxs)(W.s,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:[s(999,"get")," ",n]})]})]})},je=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,i=e.addLiquidityUrl,o=Object(w.useState)(""),s=Object(S.a)(o,2),l=s[0],d=s[1],b=Object(w.useState)(!1),j=Object(S.a)(b,2),u=j[0],x=j[1],p=Object(E.a)(),O=Object(w.useMemo)((function(){return Object(ie.b)(t)}),[t]),m=Object(w.useCallback)((function(e){d(e.currentTarget.value)}),[d]),h=Object(w.useCallback)((function(){d(O)}),[O,d]);return Object(V.jsxs)(W.v,{title:p(999,"Stake LP tokens"),onDismiss:c,children:[Object(V.jsx)(be,{value:l,onSelectMax:h,onChange:m,max:O,symbol:a,addLiquidityUrl:i,inputTitle:p(999,"Stake")}),Object(V.jsxs)(oe.a,{children:[Object(V.jsx)(W.d,{variant:"secondary",onClick:c,fullWidth:!0,children:p(462,"Cancel")}),Object(V.jsx)(W.d,{fullWidth:!0,disabled:u||"0"===O||"0"===l,onClick:Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(l);case 3:x(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:u?p(488,"Pending Confirmation"):p(464,"Confirm")})]}),Object(V.jsxs)(W.t,{href:i,style:{alignSelf:"center"},children:[p(999,"Get")," ",a]})]})},ue=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,i=Object(w.useState)(""),o=Object(S.a)(i,2),s=o[0],l=o[1],d=Object(w.useState)(!1),b=Object(S.a)(d,2),j=b[0],u=b[1],x=Object(E.a)(),p=Object(w.useMemo)((function(){return Object(ie.b)(c)}),[c]),O=Object(w.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(w.useCallback)((function(){l(p)}),[p,l]);return Object(V.jsxs)(W.v,{title:x(999,"Unstake LP tokens"),onDismiss:n,children:[Object(V.jsx)(be,{onSelectMax:m,onChange:O,value:s,max:p,symbol:a,inputTitle:x(999,"Unstake")}),Object(V.jsxs)(oe.a,{children:[Object(V.jsx)(W.d,{variant:"secondary",onClick:n,fullWidth:!0,children:x(462,"Cancel")}),Object(V.jsx)(W.d,{disabled:j,onClick:Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(s);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),fullWidth:!0,children:j?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},xe=n(66),pe=M.e.div(d||(d=Object(B.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Oe=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.addLiquidityUrl,i=Object(E.a)(),o=Object(re.a)(r).onStake,s=Object(ae.a)(r).onUnstake,l=Object(ie.a)(t),d=l.toLocaleString(),b=Object(xe.c)(Object(V.jsx)(je,{max:n,onConfirm:o,tokenName:c,addLiquidityUrl:a})),j=Object(S.a)(b,1)[0],u=Object(xe.c)(Object(V.jsx)(ue,{max:t,onConfirm:s,tokenName:c})),x=Object(S.a)(u,1)[0];return Object(V.jsxs)(W.n,{justifyContent:"space-between",alignItems:"center",children:[Object(V.jsx)(W.o,{color:0===l?"textDisabled":"text",children:d}),0===l?Object(V.jsx)(W.d,{onClick:j,children:i(999,"Stake LP")}):Object(V.jsxs)(pe,{children:[Object(V.jsx)(W.p,{variant:"tertiary",onClick:x,mr:"6px",children:Object(V.jsx)(W.u,{color:"primary"})}),Object(V.jsx)(W.p,{variant:"tertiary",onClick:j,children:Object(V.jsx)(W.a,{color:"primary"})})]})]})},me=n(300),he=function(e){var t=e.earnings,n=e.pid,c=Object(E.a)(),r=Object(w.useState)(!1),a=Object(S.a)(r,2),i=a[0],o=a[1],s=Object(me.b)(n).onReward,l=Object(ie.a)(t),d=l.toLocaleString();return Object(V.jsxs)(W.n,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(V.jsx)(W.o,{color:0===l?"textDisabled":"text",children:d}),Object(V.jsx)(W.d,{disabled:0===l||i,onClick:Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,s();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(562,"Pay Day")})]})},fe=M.e.div(b||(b=Object(B.a)(["\n  padding-top: 16px;\n"]))),ke=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=e.addLiquidityUrl,a=Object(E.a)(),i=Object(w.useState)(!1),o=Object(S.a)(i,2),s=o[0],l=o[1],d=Object(D.a)(t.lpSymbol),b=d.pid,j=d.lpAddresses,u=Object(D.b)(b),x=u.allowance,p=u.tokenBalance,O=u.stakedBalance,m=u.earnings,h=Object(te.a)(j),f=t.lpSymbol.toUpperCase(),k=c&&x&&x.isGreaterThan(0);console.log("account: ".concat(JSON.stringify(c))),console.log("allowance: ".concat(x.toFormat())),console.log("isApproved: ".concat(k));var g=Object(w.useMemo)((function(){return Object(ee.b)(n,h)}),[n,h]),y=Object(ce.a)(g).onApprove,v=Object(w.useCallback)(Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,y();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[y]);return Object(V.jsxs)(fe,{children:[Object(V.jsxs)(W.n,{children:[Object(V.jsx)(W.A,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"MEOWTH"}),Object(V.jsx)(W.A,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Earned")})]}),Object(V.jsx)(he,{earnings:m,pid:b}),Object(V.jsxs)(W.n,{children:[Object(V.jsx)(W.A,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:f}),Object(V.jsx)(W.A,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Staked")})]}),c?k?Object(V.jsx)(Oe,{stakedBalance:O,tokenBalance:p,tokenName:f,pid:b,addLiquidityUrl:r}):Object(V.jsx)(W.d,{mt:"8px",fullWidth:!0,disabled:s,onClick:v,children:a(758,"Approve Contract")}):Object(V.jsx)(ne.a,{mt:"8px",fullWidth:!0})]})},ge=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,i=a*Math.pow(1+c/365,365*r);return t=i-a,Math.round(100*t)/100},ye=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},ve=M.e.div(j||(j=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Se=M.e.div(u||(u=Object(B.a)(["\n  margin-bottom: '10px';\n"]))),we=Object(M.e)(W.A)(x||(x=Object(B.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Ae=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.cakePrice,r=e.apy,a=e.addLiquidityUrl,i=Object(E.a)(),o=r.times(new L.a(1e4)).toNumber(),s=1e3/c.toNumber(),l=ge({numberOfDays:1,farmApy:o,cakePrice:c}),d=ge({numberOfDays:7,farmApy:o,cakePrice:c}),b=ge({numberOfDays:30,farmApy:o,cakePrice:c}),j=ge({numberOfDays:365,farmApy:o,cakePrice:c});return Object(V.jsxs)(W.v,{title:"ROI",onDismiss:t,children:[Object(V.jsxs)(ve,{children:[Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(860,"Timeframe")})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(858,"ROI")})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(864,"MEOWTH per $1000")})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:"1d"})}),Object(V.jsx)(Se,{children:Object(V.jsxs)(W.A,{children:[ye({amountEarned:l,amountInvested:s}),"%"]})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:l})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:"7d"})}),Object(V.jsx)(Se,{children:Object(V.jsxs)(W.A,{children:[ye({amountEarned:d,amountInvested:s}),"%"]})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:d})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:"30d"})}),Object(V.jsx)(Se,{children:Object(V.jsxs)(W.A,{children:[ye({amountEarned:b,amountInvested:s}),"%"]})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:b})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:"365d(APY)"})}),Object(V.jsx)(Se,{children:Object(V.jsxs)(W.A,{children:[ye({amountEarned:j,amountInvested:s}),"%"]})}),Object(V.jsx)(Se,{children:Object(V.jsx)(W.A,{children:j})})]}),Object(V.jsx)(we,{fontSize:"12px",color:"textSubtle",children:i(866,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(V.jsx)(W.n,{justifyContent:"center",children:Object(V.jsxs)(W.t,{href:a,children:[i(999,"Get")," ",n]})})]})},Ce=function(e){var t=e.lpLabel,n=e.cakePrice,c=e.apy,r=e.addLiquidityUrl,a=Object(xe.c)(Object(V.jsx)(Ae,{lpLabel:t,cakePrice:n,apy:c,addLiquidityUrl:r})),i=Object(S.a)(a,1)[0];return Object(V.jsx)(W.p,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(V.jsx)(W.g,{})})},Te=Object(M.f)(p||(p=Object(B.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),Le=(M.e.div(O||(O=Object(B.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(8px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n  opacity: 0.5\n"])),Te),M.e.div(m||(m=Object(B.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 16px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.2), 0px 4px 4px rgba(25, 19, 38, 0.1);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background}))),Ie=M.e.div(h||(h=Object(B.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Pe=M.e.div(f||(f=Object(B.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),qe=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=(e.ethPrice,e.ethereum),i=e.account,o=Object(E.a)(),s=Object(w.useState)(!1),l=Object(S.a)(s,2),d=l[0],b=l[1],j=F.a.includes(t.tokenSymbol),u=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),x=Object(w.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===Q.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===Q.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),p=x?"$".concat(Number(x).toLocaleString(void 0,{maximumFractionDigits:0})):"-",O=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),m=t.dual?t.dual.earnLabel:"MEOWTH",h=t.apy&&t.apy.times(new L.a(100)).times(t.rewardMultiplier).toNumber().toLocaleString("en-US").slice(0,-1),f=t.quoteTokenAdresses,k=t.quoteTokenSymbol,g=t.tokenAddresses,y=R({quoteTokenAdresses:f,quoteTokenSymbol:k,tokenAddresses:g}),v="".concat(P.a,"/").concat(y);return Object(V.jsxs)(Le,{children:[Object(V.jsx)($,{lpLabel:O,multiplier:t.multiplier,isCommunityFarm:j,farmImage:u,tokenSymbol:t.tokenSymbol}),!n&&Object(V.jsxs)(W.n,{justifyContent:"space-between",alignItems:"center",children:[Object(V.jsxs)(W.A,{children:[o(352,"APR"),":"]}),Object(V.jsx)(W.A,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Ce,{lpLabel:O,addLiquidityUrl:v,cakePrice:c,apy:t.apy}),h,"%"]}):Object(V.jsx)(W.y,{height:24,width:80})})]}),Object(V.jsxs)(W.n,{justifyContent:"space-between",children:[Object(V.jsxs)(W.A,{children:[o(318,"Earn"),":"]}),Object(V.jsx)(W.A,{bold:!0,children:m})]}),Object(V.jsx)(ke,{farm:t,ethereum:a,account:i,addLiquidityUrl:v}),Object(V.jsx)(Ie,{}),Object(V.jsx)(H.a,{onClick:function(){return b(!d)},expanded:d}),Object(V.jsx)(Pe,{expanded:d,children:Object(V.jsx)(K,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:p,lpLabel:O,addLiquidityUrl:v})})]})},Ue=n(54),De=function(e){var t=e.stackedOnly,n=e.setStackedOnly,c=Object(A.g)(),r=c.url,a=c.isExact,i=Object(E.a)();return Object(V.jsxs)(ze,{children:[Object(V.jsxs)(Ne,{children:[Object(V.jsx)(W.C,{checked:t,onChange:function(){return n(!t)}}),Object(V.jsxs)(W.A,{children:[" ",i(999,"Staked only")]})]}),Object(V.jsxs)(W.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(V.jsx)(W.f,{as:Ue.b,to:"".concat(r),children:i(698,"Active")}),Object(V.jsx)(W.f,{as:Ue.b,to:"".concat(r,"/history"),children:i(700,"Inactive")})]})]})},ze=M.e.div(k||(k=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ne=M.e.div(g||(g=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),W.A),Qe=M.e.div(y||(y=Object(B.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Ee=function(){var e=Object(A.g)().path,t=(Object(E.a)(),Object(D.c)()),n=Object(D.h)(),c=Object(D.g)(),r=Object(I.j)(),a=r.account,i=r.ethereum,o=Object(C.b)(),s=Object(z.a)().fastRefresh;Object(w.useEffect)((function(){a&&o(Object(N.b)(a))}),[a,o,s]);var l=Object(w.useState)(!1),d=Object(S.a)(l,2),b=d[0],j=d[1],u=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})),x=t.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier})),p=u.filter((function(e){return e.userData&&new L.a(e.userData.stakedBalance).isGreaterThan(0)})),O=Object(w.useCallback)((function(e,r){var o,s=new L.a((null===(o=t.find((function(e){return e.pid===P.d})))||void 0===o?void 0:o.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=P.c.times(e.poolWeight),n=t.times(P.b),r=s.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===Q.b.BUSD)r=s.times(n).div(e.lpTotalInQuoteToken).times(c);else if(e.quoteTokenSymbol===Q.b.CAKE)r=n.div(e.lpTotalInQuoteToken);else if(e.dual){var a=e&&s.times(t).times(P.b).div(e.lpTotalInQuoteToken),i=e.tokenPriceVsQuote&&new L.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(P.b).div(e.lpTotalInQuoteToken);r=a&&i&&a.plus(i)}return Object(v.a)(Object(v.a)({},e),{},{apy:r})})).map((function(e){return Object(V.jsx)(qe,{farm:e,removed:r,bnbPrice:c,cakePrice:n,ethereum:i,account:a},e.pid)}))}),[t,c,n,i,a]);return Object(V.jsxs)(U.a,{children:[Object(V.jsxs)("div",{className:"Hero",children:[Object(V.jsx)("img",{src:"/images/wynaut.svg",alt:"Wynaut",className:"center"}),Object(V.jsx)("img",{src:"/images/meowth.svg",alt:"Meowth",className:"center"}),Object(V.jsx)("br",{})]}),Object(V.jsx)(De,{stackedOnly:b,setStackedOnly:j}),Object(V.jsxs)("div",{children:[Object(V.jsx)(Qe,{}),Object(V.jsxs)(q.a,{children:[Object(V.jsx)(A.a,{exact:!0,path:"".concat(e),children:O(b?p:u,!1)}),Object(V.jsx)(A.a,{exact:!0,path:"".concat(e,"/history"),children:O(x,!0)})]})]})]})}}}]);
//# sourceMappingURL=7.b6e14e00.chunk.js.map