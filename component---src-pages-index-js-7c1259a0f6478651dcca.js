(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);a(302);var r=a(526),n=a.n(r),c=(a(305),a(153)),i=a.n(c),s=a(307),o=a.n(s),l=(a(308),a(522)),u=a.n(l),d=a(0),p=a.n(d),b=a(154),g=a(234),m=a(290),y=a(165),h=(a(240),a(268)),f=a.n(h),j=(a(311),a(507)),O=a.n(j),v=(a(313),a(505)),I=a.n(v),w=(a(315),a(500)),x=a.n(w),C=(a(318),a(466)),k=a.n(C),P=(a(324),a(463)),S=a.n(P),q=(a(34),a(326),a(334)),A=a.n(q),Z=(a(329),a(451)),E=a.n(Z),T=(a(330),a(452)),G=a.n(T),H=(a(186),a(453)),z=a.n(H),R=a(7),D=a.n(R);a(75),a(55),a(331),a(333);var F={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:19}}},M={0:"0%",25:{style:{color:"#ddd"},label:"25%"},55:{style:{color:"#ddd"},label:"55%"},100:"100%"},N={0:"0%",20:{style:{color:"#ddd"},label:"20%"},55:{style:{color:"#ddd"},label:"55%"},100:"100%"},L={0:"0%",15:{style:{color:"#ddd"},label:"15%"},45:{style:{color:"#ddd"},label:"45%"},100:"100%"},U=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={checked:!1},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},t.handleHeightUnit=function(){t.setState(function(e){return{checked:!e.checked}})},t}D()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.form.validateFields()},a.render=function(){var e,t=this.props.form,a=t.getFieldDecorator,r=t.getFieldsError,n=t.getFieldError,c=t.isFieldTouched,i=c("userName")&&n("userName"),s=c("password")&&n("password"),o=c("dob")&&n("dob"),l=c("activity")&&n("activity"),u=c("carb")&&n("carb"),p=c("protein")&&n("protein"),b=c("fat")&&n("fast");return Object(g.c)(A.a,{onSubmit:this.handleSubmit},Object(g.c)(A.a.Item,Object.assign({validateStatus:i?"error":"",help:i||"",label:"Enter Weight"},F),Object(g.c)(E.a,{gutter:8},Object(g.c)(G.a,{span:8},a("userName",{rules:[{required:!0,message:"Please input your username!"}]})(Object(g.c)(z.a,{placeholder:"Weight"}))))),Object(g.c)(A.a.Item,Object.assign({},F,{validateStatus:s?"error":"",help:s||"",label:"Enter Height"}),Object(g.c)(E.a,{gutter:8},Object(g.c)(S.a,{checkedChildren:"cm",unCheckedChildren:"cm",onChange:this.handleHeightUnit}),this.state.checked?Object(g.c)(G.a,{span:8},a("cm",{rules:[{required:!0,message:"Please input your Password!"}]})(Object(g.c)(z.a,{placeholder:"cm"}))):Object(g.c)(d.Fragment,null,Object(g.c)(G.a,{span:8},a("foot",{rules:[{required:!0,message:"Please input your Password!"}]})(Object(g.c)(z.a,{placeholder:"Foot"}))),Object(g.c)(G.a,{span:8},a("inch",{rules:[{required:!0,message:"Please input your Password!"}]})(Object(g.c)(z.a,{placeholder:"Inch"})))))),Object(g.c)(A.a.Item,Object.assign({label:"Select DOB"},F,{validateStatus:o?"error":"",help:o||""}),a("dob",{rules:[{required:!0,message:"Please select your DOB!"}]})(Object(g.c)(k.a,{showToday:!1}))),Object(g.c)(A.a.Item,Object.assign({},F,{label:"Select",validateStatus:l?"error":"",help:l||""}),a("activity",{rules:[{required:!0,message:"Please select your country!"}]})(Object(g.c)(x.a,{placeholder:"Please select an activity level"},Object(g.c)(x.a.Option,{value:"sedentary"},"Sedentary: little or no exercise"),Object(g.c)(x.a.Option,{value:"lightly_active"},"Lightly Active: light exercise or sports 1-3 days per week"),Object(g.c)(x.a.Option,{value:"active"},"Active: moderate exercise or sports 3-5 days per week"),Object(g.c)(x.a.Option,{value:"very_active"},"Very Active: hard exercise or sports 6-7 days per week")))),Object(g.c)(A.a.Item,Object.assign({label:"Select Carb"},F,{validateStatus:u?"error":"",help:u||""}),Object(g.c)(E.a,{gutter:32},Object(g.c)(G.a,{span:6},a("carb",{rules:[{required:!0,message:"Please select your carb!"}],initialValue:45})(Object(g.c)(I.a,{style:{width:"78px"},formatter:function(e){return e+"%"}}))),Object(g.c)(G.a,{span:18},a("carb",{rules:[{required:!0,message:"Please select your carb!"}],initialValue:45})(Object(g.c)(O.a,{marks:M,step:1}))))),Object(g.c)(A.a.Item,Object.assign({label:"Select Protein"},F,{validateStatus:p?"error":"",help:p||""}),Object(g.c)(E.a,{gutter:32},Object(g.c)(G.a,{span:6},a("protein",{rules:[{required:!0,message:"Please select your carb!"}],initialValue:30})(Object(g.c)(I.a,{style:{width:"78px"},formatter:function(e){return e+"%"}}))),Object(g.c)(G.a,{span:18},a("protein",{rules:[{required:!0,message:"Please select your carb!"}],initialValue:30})(Object(g.c)(O.a,{marks:N,step:1}))," "))),Object(g.c)(A.a.Item,Object.assign({label:"Select Fat"},F,{validateStatus:b?"error":"",help:b||""}),Object(g.c)(E.a,{gutter:32},Object(g.c)(G.a,{span:6},a("fat",{rules:[{required:!0,message:"Please select your fat!"}],initialValue:25})(Object(g.c)(I.a,{style:{width:"78px"},formatter:function(e){return e+"%"}}))),Object(g.c)(G.a,{span:18},a("fat",{rules:[{required:!0,message:"Please select your fat!"}],initialValue:25})(Object(g.c)(O.a,{marks:L,step:1}))))),Object(g.c)(A.a.Item,null,Object(g.c)(E.a,{type:"flex",justify:"center"},Object(g.c)(G.a,{span:12,offset:6},Object(g.c)(f.a,{type:"primary",htmlType:"submit",disabled:(e=r(),Object.keys(e).some(function(t){return e[t]}))},"Calculate")))))},t}(p.a.Component),B=(A.a.create()(U),a(521)),Q=a.n(B);function V(){var e=o()(["\n  color: #013f8e;\n  text-align: center;\n"]);return V=function(){return e},e}function W(){var e=o()(["\n  width: 120px;\n  height: 31px;\n  margin: 16px 24px 16px 20px;\n  float: left;\n"]);return W=function(){return e},e}var J=u.a.Header,X=u.a.Content,Y=u.a.Footer,K=(u.a.Sider,Object(g.b)(W())),_=m.a.h1(V());t.default=function(){return Object(g.c)(u.a,null,Object(g.c)(y.a,{title:"everting about NFL",keywords:["NFL","player","football"]}),Object(g.c)(J,{style:{position:"fixed",zIndex:1,width:"100%",padding:"0px"}},Object(g.c)(b.Link,{to:"/"},Object(g.c)("img",{src:Q.a,alt:"logo",css:K})),Object(g.c)(n.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},Object(g.c)(n.a.Item,{key:"1"},Object(g.c)(i.a,{type:"home"}),Object(g.c)("span",{className:"nav-text"},"Home")),Object(g.c)(n.a.Item,{key:"2"},Object(g.c)(b.Link,{to:"/players/"},Object(g.c)(i.a,{type:"read"}),Object(g.c)("span",{className:"nav-text"},"Players"))),Object(g.c)(n.a.Item,{key:"3"},Object(g.c)(b.Link,{to:"/news/"},Object(g.c)(i.a,{type:"read"}),Object(g.c)("span",{className:"nav-text"},"News"))))),Object(g.c)(X,{style:{padding:"0 50px",marginTop:64,background:"#DAE3EE"}},Object(g.c)("div",{style:{background:"#DAE3EE",padding:24,height:"86vh",display:"flex",justifyContent:"center",alignItems:"center"}},Object(g.c)(_,null,"Hi, I am AntSport. I have everthing about NFL you are looking for..."))),Object(g.c)(Y,{style:{textAlign:"center"}},"Mustafa Kahraman || Boston ©2019"))}},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return b});var r=a(0),n=a.n(r),c=a(4),i=a.n(c),s=a(148),o=a.n(s);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(158),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var p=n.a.createContext({}),b=function(e){return n.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,a){var r;e.exports=(r=a(164))&&r.default||r},164:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),c=a(4),i=a.n(c),s=a(54),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},165:function(e,t,a){"use strict";var r=a(166),n=a(0),c=a.n(n),i=a(4),s=a.n(i),o=a(184),l=a.n(o),u=a(154);function d(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,s=e.title;return c.a.createElement(u.StaticQuery,{query:p,render:function(e){var r=t||e.site.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:r})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},333:function(e,t,a){},521:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTkiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxMTkgMzUiPgogIDxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZm9udC1mYW1pbHk9IlBUU2Fucy1OYXJyb3dCb2xkLCBQVCBTYW5zIE5hcnJvdyIgZm9udC1zaXplPSIzNyIgZm9udC1zdHlsZT0iY29uZGVuc2VkIiBmb250LXdlaWdodD0iYm9sZCI+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTExKSI+CiAgICAgIDx0ZXh0IGlkPSJBbnRTcG9ydCI+CiAgICAgICAgPHRzcGFuIHg9IjEuMTUxIiB5PSIzOCIgZmlsbD0iI0RCNEQ0RCI+QW50PC90c3Bhbj4gPHRzcGFuIHg9IjQ3LjA2OSIgeT0iMzgiIGZpbGw9IiNEQUUzRUUiPlNwb3J0PC90c3Bhbj4KICAgICAgPC90ZXh0PgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-7c1259a0f6478651dcca.js.map