(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(M,N,D){"use strict";D.r(N);var j=D(175),T=D.n(j),z=(D(176),D(181)),t=D.n(z),e=(D(0),D(174)),O=D(184),n=D(182),c=D(178);function y(){var M=T()(["\n  margin-top: 48px;\n  background: #dae3ee;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return y=function(){return M},M}function u(){var M=T()(["\n  color: #013f8e;\n  text-align: center;\n  font-size: 24px;\n"]);return u=function(){return M},M}function g(){var M=T()(["\n  color: #03326e;\n  text-align: center;\n"]);return g=function(){return M},M}var I=t.a.Content,i=O.a.h1(g()),L=O.a.p(u()),w=Object(O.a)(I)(y());N.default=function(){return Object(e.d)(c.a,null,Object(e.d)(n.a,{title:"everting about sport",keywords:["NFL","player","football"]}),Object(e.d)(w,null,Object(e.d)(i,null,"Hi, This is AntSport."),Object(e.d)(i,null,"We have the best sport contents on the planet"),Object(e.d)(L,null,"All you need to do click on my page tabs")))}},166:function(M,N,D){"use strict";D.r(N),D.d(N,"graphql",function(){return I}),D.d(N,"StaticQueryContext",function(){return u}),D.d(N,"StaticQuery",function(){return g});var j=D(0),T=D.n(j),z=D(1),t=D.n(z),e=D(162),O=D.n(e);D.d(N,"Link",function(){return O.a}),D.d(N,"withPrefix",function(){return e.withPrefix}),D.d(N,"navigate",function(){return e.navigate}),D.d(N,"push",function(){return e.push}),D.d(N,"replace",function(){return e.replace}),D.d(N,"navigateTo",function(){return e.navigateTo});var n=D(171),c=D.n(n);D.d(N,"PageRenderer",function(){return c.a});var y=D(37);D.d(N,"parsePath",function(){return y.a});var u=T.a.createContext({}),g=function(M){return T.a.createElement(u.Consumer,null,function(N){return M.data||N[M.query]&&N[M.query].data?(M.render||M.children)(M.data?M.data.data:N[M.query].data):T.a.createElement("div",null,"Loading (StaticQuery)")})};function I(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:t.a.object,query:t.a.string.isRequired,render:t.a.func,children:t.a.func}},171:function(M,N,D){var j;M.exports=(j=D(177))&&j.default||j},177:function(M,N,D){"use strict";D.r(N);D(38);var j=D(0),T=D.n(j),z=D(1),t=D.n(z),e=D(61),O=D(3),n=function(M){var N=M.location,D=O.default.getResourcesForPathnameSync(N.pathname);return T.a.createElement(e.a,Object.assign({location:N,pageResources:D},D.json))};n.propTypes={location:t.a.shape({pathname:t.a.string.isRequired}).isRequired},N.default=n},178:function(M,N,D){"use strict";D.d(N,"a",function(){return v});D(191);var j=D(200),T=D.n(j),z=(D(192),D(169)),t=D.n(z),e=D(8),O=D.n(e),n=D(175),c=D.n(n),y=(D(176),D(181)),u=D.n(y),g=D(179),I=D(0),i=D.n(I),L=D(1),w=D.n(L),a=D(166),s=D(24),E=D(174),x=D(184),r=D(180),A=D.n(r);function o(){var M=c()(["\n                html,\n                body,\n                #root {\n                  height: 100%;\n                  margin: 0;\n                }\n              "]);return o=function(){return M},M}function k(){var M=c()(["\n  position: fixed;\n  z-index: 99999999;\n  display: flex;\n  height: 100%;\n  background: #051f48;\n"]);return k=function(){return M},M}function U(){var M=c()(["\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.7;\n"]);return U=function(){return M},M}function Q(){var M=c()(["\n  cursor: pointer;\n  @media (min-width: 576px) {\n    display: none;\n  }\n"]);return Q=function(){return M},M}function Y(){var M=c()(["\n  font-size: 24px;\n  margin-right: 20px;\n  color: #dae3ee;\n"]);return Y=function(){return M},M}function d(){var M=c()(["\n  @media (max-width: 576px) {\n    display: none;\n  }\n"]);return d=function(){return M},M}function l(){var M=c()(["\n  width: 50%;\n  height: 50%;\n  margin: 12px 24px 20px 20px;\n  float: left;\n"]);return l=function(){return M},M}var S=u.a.Header,C=u.a.Footer,p=Object(E.c)(l()),b=Object(E.c)(d()),f=Object(E.c)(Y()),m=x.a.div(Q()),h=x.a.aside(U()),B=x.a.aside(k()),v=function(M){function N(N){var D;return(D=M.call(this,N)||this).state={toggleMenu:!1},D}return O()(N,M),N.prototype.render=function(){var M=this,N=function(){M.setState(function(M){return{toggleMenu:!M.toggleMenu}})},D=function(){M.setState(function(M){return{toggleMenu:!M.toggleMenu}})};return Object(E.d)(a.StaticQuery,{query:"1044757290",render:function(j){return Object(E.d)(i.a.Fragment,null,Object(E.d)(E.a,{styles:Object(E.c)(o())}),Object(E.d)(u.a,{style:{minHeight:"100vh"}},Object(E.d)(S,{style:{position:"fixed",zIndex:1,width:"100%",padding:"0px",display:"flex",justifyContent:"space-between",height:"48px"}},Object(E.d)(a.Link,{to:"/"},Object(E.d)("img",{src:A.a,alt:"logo",css:p})),Object(E.d)(s.Location,null,function(M){var N;switch(M.location.pathname){case"/":N="1";break;case"/players/":N="2";break;case"/news/":N="3"}return Object(E.d)(T.a,{css:b,mode:"horizontal",selectedKeys:[N],style:{lineHeight:"46px",borderBottom:"1px solid blue"}},Object(E.d)(T.a.Item,{key:"1"},Object(E.d)(a.Link,{to:"/"}),Object(E.d)(t.a,{type:"home"}),Object(E.d)("span",{className:"nav-text"},"Home")),Object(E.d)(T.a.Item,{key:"2"},Object(E.d)(a.Link,{to:"/players/"}),Object(E.d)(t.a,{type:"team"}),Object(E.d)("span",{className:"nav-text"},"Players")),Object(E.d)(T.a.Item,{key:"3"},Object(E.d)(a.Link,{to:"/news/"}),Object(E.d)(t.a,{type:"read"}),Object(E.d)("span",{className:"nav-text"},"News")))}),Object(E.d)(m,{onClick:N},Object(E.d)(t.a,{type:"menu-unfold",css:f}))),M.props.children,M.state.toggleMenu&&Object(E.d)(h,{onClick:D}),M.state.toggleMenu&&Object(E.d)(B,null,Object(E.d)(s.Location,null,function(M){var N;switch(M.location.pathname){case"/":N="1";break;case"/players/":N="2";break;case"/news/":N="3"}return Object(E.d)(T.a,{style:{width:256,paddingTop:20},theme:"dark",selectedKeys:[N],mode:"inline"},Object(E.d)(T.a.Item,{key:"1"},Object(E.d)(a.Link,{to:"/"},Object(E.d)(t.a,{type:"home"}),Object(E.d)("span",{className:"nav-text"},"Home"))),Object(E.d)(T.a.Item,{key:"2"},Object(E.d)(a.Link,{to:"/players/"},Object(E.d)(t.a,{type:"team"}),Object(E.d)("span",{className:"nav-text"},"Players"))),Object(E.d)(T.a.Item,{key:"3"},Object(E.d)(a.Link,{to:"/news/"},Object(E.d)(t.a,{type:"read"}),Object(E.d)("span",{className:"nav-text"},"News"))))})),Object(E.d)(C,{style:{textAlign:"center",color:"#9DC3F4",height:"48px",paddingTop:"12px"}},"Mustafa Kahraman || Boston ©2019")))},data:g})},N}(I.Component);v.propTypes={children:w.a.node.isRequired}},179:function(M){M.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},180:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMjAgMzYiPgogIDxnIGlkPSJBcnRib2FyZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGlkPSJBbnQiIGZpbGw9IiNEQjRENEQiIGQ9Ik0xMi4yOTg4NjkxLDIyLjU5ODMyNjQgTDYuMTY4MDEyOTIsMjIuNTk4MzI2NCBMNC42NDQ1ODgwNSwyOC41NDgxMTcyIEwwLDI4LjU0ODExNzIgTDcuNTQyODEwOTksMiBMMTEuMjIxMzI0NywyIEwxOC44MDEyOTI0LDI4LjU0ODExNzIgTDEzLjg5NjYwNzQsMjguNTQ4MTE3MiBMMTIuMjk4ODY5MSwyMi41OTgzMjY0IFogTTcuMTcxMjQzOTQsMTguNjgyMDA4NCBMMTEuNDgxNDIxNiwxOC42ODIwMDg0IEw5Ljk5NTE1MzQ3LDEyLjU0MzkzMzEgTDkuNDAwNjQ2Miw4LjQwMTY3MzY0IEw5LjI1MjAxOTM5LDguNDAxNjczNjQgTDguNjIwMzU1NDEsMTIuNTgxNTkgTDcuMTcxMjQzOTQsMTguNjgyMDA4NCBaIE0yOS41Mzk1OCwyOC41NDgxMTcyIEwyOS41Mzk1OCwxNy4xMDA0MTg0IEMyOS41Mzk1OCwxNS43MTk2NTg0IDI5LjM3ODU2OTIsMTQuNzUzMTQwOCAyOS4wNTY1NDI4LDE0LjIwMDgzNjggQzI4LjczNDUxNjQsMTMuNjQ4NTMyOCAyOC4xODk1NTY5LDEzLjM3MjM4NDkgMjcuNDIxNjQ3OCwxMy4zNzIzODQ5IEMyNi43Nzc1OTUxLDEzLjM3MjM4NDkgMjYuMjIwMjUwMSwxMy41NzMyMTk3IDI1Ljc0OTU5NjEsMTMuOTc0ODk1NCBDMjUuMjc4OTQyMiwxNC4zNzY1NzEgMjQuOTQ0NTM1MiwxNC44Nzg2NTgxIDI0Ljc0NjM2NTEsMTUuNDgxMTcxNSBMMjQuNzQ2MzY1MSwyOC41NDgxMTcyIEwyMC4zMjQ3MTczLDI4LjU0ODExNzIgTDIwLjMyNDcxNzMsOS43MTk2NjUyNyBMMjMuODU0NjA0Miw5LjcxOTY2NTI3IEwyNC4zNzQ3OTgxLDExLjkwMzc2NTcgTDI0LjQ4NjI2ODIsMTEuOTAzNzY1NyBDMjQuOTMyMTUwOSwxMS4xNzU3Mjg2IDI1LjUzOTAzNzYsMTAuNTU0Mzk1OSAyNi4zMDY5NDY3LDEwLjAzOTc0OSBDMjcuMDc0ODU1OCw5LjUyNTEwMjAzIDI4LjA3ODA3NjcsOS4yNjc3ODI0MyAyOS4zMTY2Mzk3LDkuMjY3NzgyNDMgQzMwLjA1OTc3NzUsOS4yNjc3ODI0MyAzMC43MjIzOTg4LDkuMzgwNzUyMDEgMzEuMzA0NTIzNCw5LjYwNjY5NDU2IEMzMS44ODY2NDgsOS44MzI2MzcxMSAzMi4zNzU4NzMxLDEwLjIwMjkyNjMgMzIuNzcyMjEzMiwxMC43MTc1NzMyIEMzMy4xNjg1NTM0LDExLjIzMjIyMDEgMzMuNDY1ODA0MSwxMS45MjI1ODk4IDMzLjY2Mzk3NDIsMTIuNzg4NzAyOSBDMzMuODYyMTQ0MiwxMy42NTQ4MTYgMzMuOTYxMjI3OCwxNC43MjgwMjcxIDMzLjk2MTIyNzgsMTYuMDA4MzY4MiBMMzMuOTYxMjI3OCwyOC41NDgxMTcyIEwyOS41Mzk1OCwyOC41NDgxMTcyIFogTTM1LjU1ODk2NjEsOS43MTk2NjUyNyBMMzcuNjAyNTg0OCw5LjcxOTY2NTI3IEwzNy42MDI1ODQ4LDYuMTc5OTE2MzIgTDQyLjAyNDIzMjYsNC43ODY2MTA4OCBMNDIuMDI0MjMyNiw5LjcxOTY2NTI3IEw0NS42Mjg0MzMsOS43MTk2NjUyNyBMNDUuNjI4NDMzLDEzLjcxMTI5NzEgTDQyLjAyNDIzMjYsMTMuNzExMjk3MSBMNDIuMDI0MjMyNiwyMS45MjA1MDIxIEM0Mi4wMjQyMzI2LDIzLjAwMDAwNTQgNDIuMTI5NTA4OSwyMy43NjU2ODgxIDQyLjM0MDA2NDYsMjQuMjE3NTczMiBDNDIuNTUwNjIwMywyNC42Njk0NTgzIDQyLjkyODM3NjQsMjQuODk1Mzk3NSA0My40NzMzNDQxLDI0Ljg5NTM5NzUgQzQzLjg0NDkxMywyNC44OTUzOTc1IDQ0LjE3OTMyLDI0Ljg1Nzc0MSA0NC40NzY1NzUxLDI0Ljc4MjQyNjggQzQ0Ljc3MzgzMDIsMjQuNzA3MTEyNiA0NS4wOTU4NTE4LDI0LjU5NDE0MyA0NS40NDI2NDk0LDI0LjQ0MzUxNDYgTDQ2LDI4LjAyMDkyMDUgQzQ1LjQ1NTAzMjMsMjguMjk3MDcyNSA0NC44MjMzNzQ2LDI4LjUyOTI4NzggNDQuMTA1MDA4MSwyOC43MTc1NzMyIEM0My4zODY2NDE1LDI4LjkwNTg1ODcgNDIuNjMxMTI5NCwyOSA0MS44Mzg0NDkxLDI5IEM0MC40MjY0ODczLDI5IDM5LjM2NzUzMTgsMjguNTg1Nzc4MiAzOC42NjE1NTA5LDI3Ljc1NzMyMjIgQzM3Ljk1NTU3LDI2LjkyODg2NjIgMzcuNjAyNTg0OCwyNS41MzU1NzQ2IDM3LjYwMjU4NDgsMjMuNTc3NDA1OSBMMzcuNjAyNTg0OCwxMy43MTEyOTcxIEwzNS41NTg5NjYxLDEzLjcxMTI5NzEgTDM1LjU1ODk2NjEsOS43MTk2NjUyNyBaIi8+CiAgICA8cGF0aCBpZD0iU3BvcnQiIGZpbGw9IiNEQUUzRUUiIGQ9Ik01OC4wNDc1MTk2LDIwLjg2NDMzMjYgQzU4LjA0NzUxOTYsMjAuMDcwNzQ3MyA1Ny44MTI3MDksMTkuMzk0OTcgNTcuMzQzMDgwOSwxOC44MzY5ODAzIEM1Ni44NzM0NTI4LDE4LjI3ODk5MDYgNTYuMjg2NDI2NSwxNy43NTIwMDgzIDU1LjU4MTk4NDMsMTcuMjU2MDE3NSBDNTQuODc3NTQyMiwxNi43NjAwMjY3IDU0LjExMTMxODMsMTYuMjUxNjQzNyA1My4yODMyODk4LDE1LjczMDg1MzQgQzUyLjQ1NTI2MTMsMTUuMjEwMDYzIDUxLjY4OTAzNzUsMTQuNjAyNDgzNCA1MC45ODQ1OTUzLDEzLjkwODA5NjMgQzUwLjI4MDE1MzEsMTMuMjEzNzA5MSA0OS42OTMxMjY4LDEyLjM5NTMzNjYgNDkuMjIzNDk4NywxMS40NTI5NTQgQzQ4Ljc1Mzg3MDYsMTAuNTEwNTcxNSA0OC41MTkwNjAxLDkuMzU3NDEwMTggNDguNTE5MDYwMSw3Ljk5MzQzNTQ1IEM0OC41MTkwNjAxLDYuNzI4NjU4ODggNDguNzEwNjE2LDUuNjU2MDk0ODUgNDkuMDkzNzMzNyw0Ljc3NTcxMTE2IEM0OS40NzY4NTEzLDMuODk1MzI3NDcgNTAuMDAyMDg1NCwzLjE3NjE1MTU5IDUwLjY2OTQ1MTcsMi42MTgxNjE5MyBDNTEuMzM2ODE4LDIuMDYwMTcyMjYgNTIuMTI3NzU4NywxLjY1MDk4NTk4IDUzLjA0MjI5NzcsMS4zOTA1OTA4MSBDNTMuOTU2ODM2NiwxLjEzMDE5NTYzIDU0LjkzMzE1NDEsMSA1NS45NzEyNzk0LDEgQzU3LjIzMTg2MDEsMSA1OC40MDU5MTI4LDEuMTIzOTk1ODQgNTkuNDkzNDcyNiwxLjM3MTk5MTI1IEM2MC41ODEwMzI0LDEuNjE5OTg2NjUgNjEuNDgzMTk5MiwxLjk1NDc3NTQzIDYyLjIsMi4zNzYzNjc2MSBMNjAuNzU0MDQ3LDYuNTA1NDcwNDYgQzYwLjMzMzg1MzQsNi4yMDc4NzU5NyA1OS43MDk3NTE3LDUuOTM1MDg1MTIgNTguODgxNzIzMiw1LjY4NzA4OTcyIEM1OC4wNTM2OTQ3LDUuNDM5MDk0MzEgNTcuMTU3NzA3Miw1LjMxNTA5ODQ3IDU2LjE5MzczMzcsNS4zMTUwOTg0NyBDNTUuMjI5NzYwMiw1LjMxNTA5ODQ3IDU0LjQ4ODI1MzIsNS41MTM0OTE4MiA1My45NjkxOTA2LDUuOTEwMjg0NDYgQzUzLjQ1MDEyOCw2LjMwNzA3NzExIDUzLjE5MDYwMDUsNi44ODk4NTc1NyA1My4xOTA2MDA1LDcuNjU4NjQzMzMgQzUzLjE5MDYwMDUsOC4zNTMwMzA0NiA1My40MjU0MTExLDguOTY2ODA5ODggNTMuODk1MDM5Miw5LjUgQzU0LjM2NDY2NzMsMTAuMDMzMTkwMSA1NC45NTE2OTM2LDEwLjU0Nzc3MjkgNTUuNjU2MTM1OCwxMS4wNDM3NjM3IEM1Ni4zNjA1Nzc5LDExLjUzOTc1NDUgNTcuMTI2ODAxOCwxMi4wNTQzMzcyIDU3Ljk1NDgzMDMsMTIuNTg3NTI3NCBDNTguNzgyODU4OCwxMy4xMjA3MTc1IDU5LjU0OTA4MjYsMTMuNzQwNjk2NyA2MC4yNTM1MjQ4LDE0LjQ0NzQ4MzYgQzYwLjk1Nzk2NywxNS4xNTQyNzA1IDYxLjU0NDk5MzMsMTUuOTg1MDQyNiA2Mi4wMTQ2MjE0LDE2LjkzOTgyNDkgQzYyLjQ4NDI0OTUsMTcuODk0NjA3MyA2Mi43MTkwNjAxLDE5LjAyOTE2OTIgNjIuNzE5MDYwMSwyMC4zNDM1NDQ5IEM2Mi43MTkwNjAxLDIxLjY1NzkyMDUgNjIuNTI3NTA0MSwyMi43OTg2ODIzIDYyLjE0NDM4NjQsMjMuNzY1ODY0MyBDNjEuNzYxMjY4OCwyNC43MzMwNDY0IDYxLjIxNzQ5NywyNS41MzI4MTk2IDYwLjUxMzA1NDgsMjYuMTY1MjA3OSBDNTkuODA4NjEyNywyNi43OTc1OTYyIDU4Ljk2MjA1ODksMjcuMjc0OTgwMiA1Ny45NzMzNjgxLDI3LjU5NzM3NDIgQzU2Ljk4NDY3NzQsMjcuOTE5NzY4MiA1NS44ODQ3NzU0LDI4LjA4MDk2MjggNTQuNjczNjI5MiwyOC4wODA5NjI4IEM1My4xNDExNTg2LDI4LjA4MDk2MjggNTEuODAwMjY2OCwyNy45MzIxNjc4IDUwLjY1MDkxMzgsMjcuNjM0NTczMyBDNDkuNTAxNTYwOCwyNy4zMzY5Nzg4IDQ4LjYxNzkzMTcsMjcuMDAyMTkgNDgsMjYuNjMwMTk2OSBMNDkuNTIwMTA0NCwyMi40MjY2OTU4IEM1MC4wMTQ0NDk4LDIyLjcyNDI5MDMgNTAuNjk0MTY0NSwyMy4wMjE4ODA0IDUxLjU1OTI2ODksMjMuMzE5NDc0OCBDNTIuNDI0MzczMywyMy42MTcwNjkzIDUzLjM1MTI1NywyMy43NjU4NjQzIDU0LjMzOTk0NzgsMjMuNzY1ODY0MyBDNTYuODExNjc0NywyMy43NjU4NjQzIDU4LjA0NzUxOTYsMjIuNzk4Njk2OCA1OC4wNDc1MTk2LDIwLjg2NDMzMjYgWiBNNjUuMTY2MDU3NCw4Ljk2MDYxMjY5IEw2OC40NjU3OTYzLDguOTYwNjEyNjkgTDY4LjkxMDcwNSwxMS4wODA5NjI4IEw2OS4wMjE5MzIxLDExLjA4MDk2MjggQzY5LjU5MDQyOTMsMTAuMTg4MTc5MyA3MC4yMjY4ODk0LDkuNTM3MjAxMTcgNzAuOTMxMzMxNiw5LjEyODAwODc1IEM3MS42MzU3NzM4LDguNzE4ODE2MzMgNzIuNTA3MDQ0NCw4LjUxNDIyMzE5IDczLjU0NTE2OTcsOC41MTQyMjMxOSBDNzUuNDIzNjgyMiw4LjUxNDIyMzE5IDc2LjgzODcyNDYsOS4yMjcxOTkyOSA3Ny43OTAzMzk0LDEwLjY1MzE3MjkgQzc4Ljc0MTk1NDMsMTIuMDc5MTQ2NCA3OS4yMTc3NTQ2LDE0LjQ1MzY2NjggNzkuMjE3NzU0NiwxNy43NzY4MDUzIEM3OS4yMTc3NTQ2LDIxLjA5OTk0MzcgNzguNjI0NTQ5LDIzLjY0ODA1ODIgNzcuNDM4MTIwMSwyNS40MjEyMjU0IEM3Ni4yNTE2OTEyLDI3LjE5NDM5MjUgNzQuNTMzODY2OCwyOC4wODA5NjI4IDcyLjI4NDU5NTMsMjguMDgwOTYyOCBDNzEuNjkxMzgwOCwyOC4wODA5NjI4IDcxLjE4NDY4NDQsMjguMDMxMzY0NSA3MC43NjQ0OTA5LDI3LjkzMjE2NjMgQzcwLjM0NDI5NzMsMjcuODMyOTY4MSA2OS45NDg4MjY5LDI3LjY3MTc3MzUgNjkuNTc4MDY3OSwyNy40NDg1Nzc3IEw2OS41NzgwNjc5LDM1IEw2NS4xNjYwNTc0LDM1IEw2NS4xNjYwNTc0LDguOTYwNjEyNjkgWiBNNjkuNTc4MDY3OSwyMy4zOTM4NzMxIEM2OS44MjUyNDA2LDIzLjY0MTg2ODUgNzAuMTAzMzA1NywyMy44Mjc4NjIzIDcwLjQxMjI3MTUsMjMuOTUxODYgQzcwLjcyMTIzNzQsMjQuMDc1ODU3NyA3MS4xMjI4ODcsMjQuMTM3ODU1NiA3MS42MTcyMzI0LDI0LjEzNzg1NTYgQzcyLjYwNTkyMzEsMjQuMTM3ODU1NiA3My4zNTk3ODg1LDIzLjY0ODA3MiA3My44Nzg4NTEyLDIyLjY2ODQ5MDIgQzc0LjM5NzkxMzgsMjEuNjg4OTA4MyA3NC42NTc0NDEzLDIwLjAyMTE2NDIgNzQuNjU3NDQxMywxNy42NjUyMDc5IEM3NC42NTc0NDEzLDE1LjkwNDQ0MDUgNzQuNDU5NzA2MSwxNC41OTYyODQ0IDc0LjA2NDIyOTgsMTMuNzQwNzAwMiBDNzMuNjY4NzUzNSwxMi44ODUxMTYxIDczLjAxMzc1NTcsMTIuNDU3MzMwNCA3Mi4wOTkyMTY3LDEyLjQ1NzMzMDQgQzcwLjg2MzM1MzMsMTIuNDU3MzMwNCA3MC4wMjI5Nzg3LDEzLjE4ODkwNTkgNjkuNTc4MDY3OSwxNC42NTIwNzg4IEw2OS41NzgwNjc5LDIzLjM5Mzg3MzEgWiBNODEuMDcxNTQwNSwxOC4yNjAzOTM5IEM4MS4wNzE1NDA1LDE0Ljk2MjA1NSA4MS43MTQxNzk4LDEyLjUwNjkzNzMgODIuOTk5NDc3OCwxMC44OTQ5NjcyIEM4NC4yODQ3NzU4LDkuMjgyOTk3MDUgODYuMDc2NzUwOSw4LjQ3NzAyNDA3IDg4LjM3NTQ1NjksOC40NzcwMjQwNyBDOTAuODQ3MTgzOCw4LjQ3NzAyNDA3IDkyLjY4ODU5MjcsOS4yOTUzOTY2MyA5My44OTk3Mzg5LDEwLjkzMjE2NjMgQzk1LjExMDg4NTEsMTIuNTY4OTM2IDk1LjcxNjQ0OTEsMTUuMDExNjU0MSA5NS43MTY0NDkxLDE4LjI2MDM5MzkgQzk1LjcxNjQ0OTEsMjEuNTgzNTMyMyA5NS4wNzM4MDk3LDI0LjA0NDg0OTggOTMuNzg4NTExNywyNS42NDQ0MjAxIEM5Mi41MDMyMTM4LDI3LjI0Mzk5MDUgOTAuNjk4ODgwMiwyOC4wNDM3NjM3IDg4LjM3NTQ1NjksMjguMDQzNzYzNyBDODMuNTA2MTU0OSwyOC4wNDM3NjM3IDgxLjA3MTU0MDUsMjQuNzgyNjczIDgxLjA3MTU0MDUsMTguMjYwMzkzOSBaIE04NS42MzE4NTM4LDE4LjI2MDM5MzkgQzg1LjYzMTg1MzgsMjAuMTIwMzU5NCA4NS44NDE5NDc0LDIxLjU1ODcxMTIgODYuMjYyMTQxLDIyLjU3NTQ5MjMgQzg2LjY4MjMzNDYsMjMuNTkyMjczNSA4Ny4zODY3NjYyLDI0LjEwMDY1NjUgODguMzc1NDU2OSwyNC4xMDA2NTY1IEM4OS4zMTQ3MTMxLDI0LjEwMDY1NjUgOTAuMDEyOTY1NSwyMy42NjA0NzEyIDkwLjQ3MDIzNSwyMi43ODAwODc1IEM5MC45Mjc1MDQ1LDIxLjg5OTcwMzggOTEuMTU2MTM1OCwyMC4zOTMxNTQ0IDkxLjE1NjEzNTgsMTguMjYwMzkzOSBDOTEuMTU2MTM1OCwxNi4zNTA4MjkzIDkwLjk0NjA0MjEsMTQuOTAwMDc3OSA5MC41MjU4NDg2LDEzLjkwODA5NjMgQzkwLjEwNTY1NSwxMi45MTYxMTQ3IDg5LjM4ODg2NDksMTIuNDIwMTMxMyA4OC4zNzU0NTY5LDEyLjQyMDEzMTMgQzg3LjUxMDM1MjUsMTIuNDIwMTMxMyA4Ni44MzY4MTcsMTIuODYwMzE2NSA4Ni4zNTQ4MzAzLDEzLjc0MDcwMDIgQzg1Ljg3Mjg0MzUsMTQuNjIxMDgzOSA4NS42MzE4NTM4LDE2LjEyNzYzMzQgODUuNjMxODUzOCwxOC4yNjAzOTM5IFogTTEwNi45ODc0NjcsMTMuMzUwMTA5NCBDMTA2LjM5NDI1MywxMy4xMjY5MTM1IDEwNS44NTA0ODEsMTMuMDE1MzE3MyAxMDUuMzU2MTM2LDEzLjAxNTMxNzMgQzEwNC42ODg3NywxMy4wMTUzMTczIDEwNC4xMTQxMDIsMTMuMjAxMzExMSAxMDMuNjMyMTE1LDEzLjU3MzMwNDIgQzEwMy4xNTAxMjgsMTMuOTQ1Mjk3MyAxMDIuODIyNjI5LDE0LjQ2NjA3OTggMTAyLjY0OTYwOCwxNS4xMzU2Njc0IEwxMDIuNjQ5NjA4LDI3LjU2MDE3NTEgTDk4LjIzNzU5NzksMjcuNTYwMTc1MSBMOTguMjM3NTk3OSw4Ljk2MDYxMjY5IEwxMDEuNjExNDg4LDguOTYwNjEyNjkgTDEwMi4xMzA1NDgsMTEuMTkyNTYwMiBMMTAyLjI3ODg1MSwxMS4xOTI1NjAyIEMxMDIuNjAwMTc2LDEwLjM3NDE3NTMgMTAzLjA2MzYxOCw5LjczNTU5Njc1IDEwMy42NjkxOTEsOS4yNzY4MDUyNSBDMTA0LjI3NDc2NCw4LjgxODAxMzc1IDEwNC45NzMwMTYsOC41ODg2MjE0NCAxMDUuNzYzOTY5LDguNTg4NjIxNDQgQzEwNi4zNTcxODMsOC41ODg2MjE0NCAxMDYuOTM4MDMsOC43MTI2MTcyOSAxMDcuNTA2NTI3LDguOTYwNjEyNjkgTDEwNi45ODc0NjcsMTMuMzUwMTA5NCBaIE0xMDguNTgxNzIzLDguOTYwNjEyNjkgTDExMC42MjA4ODgsOC45NjA2MTI2OSBMMTEwLjYyMDg4OCw1LjQ2Mzg5NDk3IEwxMTUuMDMyODk4LDQuMDg3NTI3MzUgTDExNS4wMzI4OTgsOC45NjA2MTI2OSBMMTE4LjYyOTI0Myw4Ljk2MDYxMjY5IEwxMTguNjI5MjQzLDEyLjkwMzcxOTkgTDExNS4wMzI4OTgsMTIuOTAzNzE5OSBMMTE1LjAzMjg5OCwyMS4wMTMxMjkxIEMxMTUuMDMyODk4LDIyLjA3OTUwOTMgMTE1LjEzNzk0NSwyMi44MzU4ODQgMTE1LjM0ODA0MiwyMy4yODIyNzU3IEMxMTUuNTU4MTM5LDIzLjcyODY2NzQgMTE1LjkzNTA3MSwyMy45NTE4NiAxMTYuNDc4ODUxLDIzLjk1MTg2IEMxMTYuODQ5NjEsMjMuOTUxODYgMTE3LjE4MzI4OCwyMy45MTQ2NjEyIDExNy40Nzk4OTYsMjMuODQwMjYyNiBDMTE3Ljc3NjUwMywyMy43NjU4NjQgMTE4LjA5NzgyMiwyMy42NTQyNjc3IDExOC40NDM4NjQsMjMuNTA1NDcwNSBMMTE5LDI3LjAzOTM4NzMgQzExOC40NTYyMiwyNy4zMTIxODIzIDExNy44MjU5MzksMjcuNTQxNTc0NiAxMTcuMTA5MTM4LDI3LjcyNzU3MTEgQzExNi4zOTIzMzgsMjcuOTEzNTY3NyAxMTUuNjM4NDcyLDI4LjAwNjU2NDYgMTE0Ljg0NzUyLDI4LjAwNjU2NDYgQzExMy40Mzg2MzUsMjguMDA2NTY0NiAxMTIuMzgxOTg4LDI3LjU5NzM3ODMgMTExLjY3NzU0NiwyNi43Nzg5OTM0IEMxMTAuOTczMTA0LDI1Ljk2MDYwODYgMTEwLjYyMDg4OCwyNC41ODQyNTQ3IDExMC42MjA4ODgsMjIuNjQ5ODkwNiBMMTEwLjYyMDg4OCwxMi45MDM3MTk5IEwxMDguNTgxNzIzLDEyLjkwMzcxOTkgTDEwOC41ODE3MjMsOC45NjA2MTI2OSBaIi8+CiAgPC9nPgo8L3N2Zz4K"},182:function(M,N,D){"use strict";var j=D(183),T=D(0),z=D.n(T),t=D(1),e=D.n(t),O=D(206),n=D.n(O),c=D(166);function y(M){var N=M.description,D=M.lang,T=M.meta,t=M.keywords,e=M.title;return z.a.createElement(c.StaticQuery,{query:u,render:function(M){var j=N||M.site.siteMetadata.description;return z.a.createElement(n.a,{htmlAttributes:{lang:D},title:e,titleTemplate:"%s | "+M.site.siteMetadata.title,meta:[{name:"description",content:j},{property:"og:title",content:e},{property:"og:description",content:j},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.site.siteMetadata.author},{name:"twitter:title",content:e},{name:"twitter:description",content:j}].concat(t.length>0?{name:"keywords",content:t.join(", ")}:[]).concat(T)})},data:j})}y.defaultProps={lang:"en",meta:[],keywords:[]},y.propTypes={description:e.a.string,lang:e.a.string,meta:e.a.array,keywords:e.a.arrayOf(e.a.string),title:e.a.string.isRequired},N.a=y;var u="1025518380"},183:function(M){M.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-47eef46c0ad69546b818.js.map