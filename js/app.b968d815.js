(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/sellhugs/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("c-loader",{attrs:{loaderFlag:t.loaderFlag}}),n("c-login",{attrs:{notLoggedIn:t.notLoggedIn}})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loaderFlag?n("div",{staticClass:"site-loader"},[n("svg",{attrs:{height:"38",viewbox:"0 0 38 38",width:"38",xmlns:"http://www.w3.org/2000/svg"}},[n("defs",[n("lineargradient",{attrs:{id:"a",x1:"8.042%",x2:"65.682%",y1:"0%",y2:"23.865%"}},[n("stop",{attrs:{offset:"0%","stop-color":"#fff","stop-opacity":"0"}}),n("stop",{attrs:{offset:"63.146%","stop-color":"#fff","stop-opacity":".631"}}),n("stop",{attrs:{offset:"100%","stop-color":"#fff"}})],1)],1),n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)"}},[n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:"url(#a)","stroke-width":"2"}},[n("animatetransform",{attrs:{attributename:"transform",dur:"0.9s",from:"0 18 18",repeatcount:"indefinite",to:"360 18 18",type:"rotate"}})],1),n("circle",{attrs:{cx:"36",cy:"18",fill:"#fff",r:"1"}},[n("animatetransform",{attrs:{attributename:"transform",dur:"0.9s",from:"0 18 18",repeatcount:"indefinite",to:"360 18 18",type:"rotate"}})],1)])])])]):t._e()},s=[],l={props:{loaderFlag:Boolean}},c=l,u=n("2877"),f=Object(u["a"])(c,i,s,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.notLoggedIn?n("v-container",{staticClass:"login-container",attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-card",{staticClass:"login-wrap px-6 py-4 rounded-lg",class:{shake:!0===t.loginData.shakeCard},attrs:{"max-width":"320"}},[n("v-card-title",{staticClass:"login-title center pa-0 my-5",attrs:{justify:"center"}},[t._v(" Sellhugs "),n("v-icon",{staticClass:"red--text",attrs:{size:"15"}},[t._v("favorite")])],1),n("v-form",{ref:"loginForm"},[n("v-text-field",{attrs:{"append-icon":"account_circle",rules:t.inputRules,label:"Username"},model:{value:t.loginData.username,callback:function(e){t.$set(t.loginData,"username",e)},expression:"loginData.username"}}),n("v-text-field",{attrs:{"append-icon":t.loginData.show1?"mdi-eye":"mdi-eye-off",type:t.loginData.show1?"text":"password",name:"input-10-1",rules:t.inputRules,label:"Password"},on:{"click:append":function(e){t.loginData.show1=!t.loginData.show1},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginToSite(e)}},model:{value:t.loginData.password,callback:function(e){t.$set(t.loginData,"password",e)},expression:"loginData.password"}}),n("v-btn",{staticClass:"login-btn my-5",attrs:{depressed:"",rounded:"",center:"",dark:"",loading:t.loginData.loginFlag,color:"primary"},on:{click:t.loginToSite}},[t._v("Login")])],1)],1)],1)],1):t._e()},g=[],h=(n("b0c0"),n("d3b7"),n("bc3a")),m=n.n(h),v={props:{notLoggedIn:Boolean},created:function(){console.log(this.baseURL,this.appTitle)},data:function(){return{baseURL:"https://njnithin.github.io",appTitle:"Sellhugs Title",inputRules:[function(t){return t.length>0||"Please Fill"}],loginData:{username:"",password:"",show1:!1,loginFlag:!1,shakeCard:!1},userInfo:{name:"guest",token:""}}},methods:{loginToSite:function(){var t=this;this.$refs.loginForm.validate()&&(t.loginData.loginFlag=!0,m.a.post(t.baseURL+"/auth/login",{username:this.loginData.username,password:this.loginData.password}).then((function(e){t.userInfo.name=e.data.username,t.userInfo.token=e.data.authenticationToken;var n={headers:{Authorization:"Bearer "+t.userInfo.token}};console.log(n),m.a.get(t.baseURL+"/user/greet",n).then((function(t){alert(t.data)})).catch((function(t){console.log(t)}))})).catch((function(){t.loginData.shakeCard=!0,setTimeout((function(){t.loginData.shakeCard=!1}),1e3)})).finally((function(){t.loginData.loginFlag=!1})))}}},b=v,y=(n("eff5"),n("6544")),w=n.n(y),k=n("8336"),x=n("b0af"),D=n("99d9"),_=n("a523"),O=n("4bd4"),j=n("132d"),C=n("0fd9"),F=n("8654"),T=Object(u["a"])(b,p,g,!1,null,"7dafcb70",null),I=T.exports;w()(T,{VBtn:k["a"],VCard:x["a"],VCardTitle:D["a"],VContainer:_["a"],VForm:O["a"],VIcon:j["a"],VRow:C["a"],VTextField:F["a"]});var L={data:function(){return{loaderFlag:!1,notLoggedIn:!0}},components:{"c-loader":d,"c-login":I}},S=L,P=n("7496"),V=Object(u["a"])(S,o,r,!1,null,null,null),R=V.exports;w()(V,{VApp:P["a"]});n("d1e78");var $=n("f309");a["a"].use($["a"]);var M=new $["a"]({icons:{iconfont:"md"},theme:{themes:{light:{primary:"#57b846",secondary:"#227e12",accent:"#289615"}}}}),U=n("a7fe"),B=n.n(U);n("c0b5"),n("6fcb");a["a"].config.productionTip=!1,a["a"].use(B.a,m.a),new a["a"]({vuetify:M,render:function(t){return t(R)}}).$mount("#app")},"6fcb":function(t,e,n){},c0b5:function(t,e,n){},e564:function(t,e,n){},eff5:function(t,e,n){"use strict";var a=n("e564"),o=n.n(a);o.a}});
//# sourceMappingURL=app.b968d815.js.map