_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"5KOd":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pools/[id]",function(){return i("r8DF")}])},r8DF:function(e,t,i){"use strict";i.r(t),i.d(t,"__N_SSG",(function(){return g}));var a=i("nKUr"),l=i("Kvkj"),s=i("R/WZ"),r=i("tr08"),n=i("tRbT"),c=i("hlFM"),o=i("ofer"),d=i("kKAo"),h=i("x7I7"),j=i("g4pe"),p=i.n(j),u=(i("YRlH"),i("+vyA")),b=i("+TN3"),x=i("20a2"),v=Object(s.a)((function(e){return{root:{}}}));var g=!0;t.default=function(){var e=Object(x.useRouter)();if(e.isFallback)return Object(a.jsx)(l.a,{});var t=v(),i=(Object(r.a)(),e.query.id),s=Object(b.a)(h.ab,{variables:{id:i},context:{clientName:"masterchef"}}).data.pool,j=Object(b.a)(h.Z,{variables:{id:i},context:{clientName:"masterchef"}}).data.poolHistories,g=Object(b.a)(h.n,{pollInterval:6e4}).data.bundles,O=Object(b.a)(h.gb,{variables:{id:"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"}}).data.token,m=(parseFloat(null===O||void 0===O?void 0:O.derivedETH),parseFloat(g[0].ethPrice),j.reduce((function(e,t){var i=1e3*t.timestamp;e.slpAge.push({date:i,value:t.slpAge});var a=parseFloat(t.slpAge)/parseFloat(t.slpBalance);return e.slpAgeAverage.push({date:i,value:Number.isNaN(a)?0:a}),e.slpAgeRemoved.push({date:i,value:t.slpAgeRemoved}),e.slpBalance.push({date:i,value:parseFloat(t.slpBalance)}),e.slpDeposited.push({date:i,value:parseFloat(t.slpDeposited)}),e.slpWithdrawn.push({date:i,value:parseFloat(t.slpWithdrawn)}),e.tvl.push({date:i,value:parseFloat(s.liquidityPair.reserveUSD)/parseFloat(s.liquidityPair.totalSupply)*parseFloat(t.slpBalance)}),e.userCount.push({date:i,value:parseFloat(t.userCount)}),e}),{entries:[],exits:[],slpAge:[],slpAgeAverage:[],slpAgeRemoved:[],slpBalance:[],slpDeposited:[],slpWithdrawn:[],tvl:[],userCount:[]})),f=m.slpAge,y=m.slpAgeRemoved,w=m.userCount,A=m.slpDeposited,P=m.slpWithdrawn,F=m.slpAgeAverage,S=m.slpBalance,k=m.tvl;return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(p.a,{children:Object(a.jsxs)("title",{children:["Pool ",i," | SUNI Analytics"]})}),Object(a.jsx)(l.m,{mb:3,children:Object(a.jsxs)(n.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(a.jsx)(n.a,{item:!0,xs:12,sm:"auto",className:t.title,children:Object(a.jsxs)(c.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(l.n,{base:s.liquidityPair.token0.id,quote:s.liquidityPair.token1.id}),Object(a.jsxs)(o.a,{variant:"h5",component:"h1",children:[s.liquidityPair.token0.symbol,"-",s.liquidityPair.token1.symbol," POOL"]})]})}),Object(a.jsx)(n.a,{item:!0,xs:12,sm:"auto",className:t.links,children:Object(a.jsx)(l.i,{href:"https://sushiswapclassic.org/farms/".concat(s.liquidityPair.token0.symbol,"-").concat(s.liquidityPair.token1.symbol.replace("WETH","ETH"),"%20SLP"),target:"_blank",variant:"body1",children:"Stake SLP"})})]})}),Object(a.jsxs)(n.a,{container:!0,spacing:3,children:[Object(a.jsx)(n.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(l.h,{title:"~ SLP Age",value:"".concat((parseFloat(s.slpAge)/parseFloat(s.balance/1e18)).toFixed(2)," Days")})}),Object(a.jsx)(n.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(l.h,{title:"Users",value:s.userCount})}),Object(a.jsx)(n.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(l.h,{title:"Staked",value:"".concat((s.balance/1e18).toFixed(4)," SLP")})}),Object(a.jsx)(n.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"outlined",style:{display:"flex",position:"relative",height:400,flex:1},children:Object(a.jsx)(u.a,{children:function(e){var t=e.width,i=e.height;return Object(a.jsx)(l.e,{width:t,height:i,margin:{top:64,right:32,bottom:0,left:64},data:[f,y],labels:["SLP Age","SLP Age Removed"]})}})})}),Object(a.jsx)(n.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"outlined",style:{display:"flex",position:"relative",height:400,flex:1},children:Object(a.jsx)(u.a,{children:function(e){var t=e.width,i=e.height;return Object(a.jsx)(l.e,{width:t,height:i,margin:{top:64,right:32,bottom:0,left:64},data:[A,P],labels:["SLP Deposited","SLP Age Withdrawn"]})}})})}),Object(a.jsx)(n.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"outlined",style:{display:"flex",position:"relative",height:400,flex:1},children:Object(a.jsx)(u.a,{children:function(e){var t=e.width,i=e.height;return Object(a.jsx)(l.e,{title:"~ SLP Age (Days)",width:t,height:i,margin:{top:64,right:32,bottom:0,left:64},data:[F]})}})})}),Object(a.jsx)(n.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"outlined",style:{display:"flex",position:"relative",height:400,flex:1},children:Object(a.jsx)(u.a,{children:function(e){var t=e.width,i=e.height;return Object(a.jsx)(l.e,{title:"Users",width:t,height:i,margin:{top:64,right:32,bottom:0,left:64},data:[w]})}})})}),Object(a.jsx)(n.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"outlined",style:{display:"flex",position:"relative",height:400,flex:1},children:Object(a.jsx)(u.a,{children:function(e){var t=e.width,i=e.height;return Object(a.jsx)(l.e,{title:"SLP Balance",width:t,height:i,margin:{top:64,right:32,bottom:0,left:64},data:[S]})}})})}),Object(a.jsx)(n.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"outlined",style:{display:"flex",position:"relative",height:400,flex:1},children:Object(a.jsx)(u.a,{children:function(e){var t=e.width,i=e.height;return Object(a.jsx)(l.e,{title:"TVL (USD)",width:t,height:i,margin:{top:64,right:32,bottom:0,left:64},data:[k]})}})})})]}),Object(a.jsx)(l.j,{pool:s,orderBy:"amount",title:"Top Liquidity Providers"})]})}}},[["5KOd",1,2,0,3,4]]]);