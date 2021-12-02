(function(e){function t(t){for(var a,s,l=t[0],o=t[1],c=t[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/plotly/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("img",{staticClass:"logo",attrs:{src:n("836a")}}),a("div",{staticClass:"header__titles"},[a("h1",[e._v("Emerging Structural Technologies")]),a("h2",[e._v("Dimensional (Frequency, Phase, Amplitude)")])])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"slider-group"},[n("div",{staticClass:"xSpacer"},[n("p",{staticClass:"label"},[e._v("Frequency")]),n("p",[n("vue-slider",{staticClass:"slider",attrs:{min:1,max:4,interval:.01,width:"17vw"},model:{value:e.f,callback:function(t){e.f=t},expression:"f"}})],1)]),n("div",{staticClass:"xSpacer"},[n("p",{staticClass:"label"},[e._v("Phase")]),n("p",[n("vue-slider",{staticClass:"slider",attrs:{min:0,max:4,interval:.01,width:"17vw"},model:{value:e.p,callback:function(t){e.p=t},expression:"p"}})],1)]),n("div",{staticClass:"xSpacer"},[n("p",{staticClass:"label"},[e._v("Amplitutde")]),n("p",[n("vue-slider",{staticClass:"slider",attrs:{min:.1,max:1.7,interval:.01,width:"17vw"},model:{value:e.a,callback:function(t){e.a=t},expression:"a"}})],1)])]),e._m(0),n("Plotly",{staticClass:"graph",attrs:{data:e.dataForYLine,layout:e.layout,"display-mode-bar":!1,"drag-mode":!1,responsive:!0}})],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"legend"},[n("div",{staticClass:"legend__item"},[n("div",{staticClass:"legend__item__square__blue"}),n("span",{staticClass:"legend__text"},[e._v("𝑠𝑖𝑛(2𝜋𝑓₀𝑡ϕ)")])]),n("div",{staticClass:"legend__item"},[n("div",{staticClass:"legend__item__square__orange"}),n("span",{staticClass:"legend__text"},[e._v("𝑐𝑜𝑠(2𝜋𝑓₀𝑡ϕ)")])]),n("div",{staticClass:"legend__item"},[n("div",{staticClass:"legend__item__square__green"}),n("span",{staticClass:"legend__text"},[e._v("e^i(2𝜋𝑓₀𝑡ϕ)")])])])}],o=(n("e9c4"),n("04d1")),c=n("4971"),u=n.n(c),d=(n("3e39"),{name:"HelloWorld",title:"Dimensional Graph",components:{Plotly:o["Plotly"],VueSlider:u.a},data:function(){return{f:3,p:0,a:1,data:[{x:[1,2,3,4],y:[10,15,13,17],z:[10,15,13,17],name:"𝑠𝑖𝑛(2𝜋𝑓₀𝑡ϕ)",type:"scatter3d",mode:"lines",opacity:1,line:{width:5,colorscale:"Viridis"}},{x:[1,2,3,4],y:[10,15,13,17],z:[10,15,13,17],type:"scatter3d",mode:"lines",name:"𝑐𝑜𝑠(2𝜋𝑓₀𝑡ϕ)",opacity:1,line:{width:5,colorscale:"Viridis"}},{x:[1,2,3,4],y:[10,15,13,17],z:[10,15,13,17],type:"scatter3d",mode:"lines",name:"e^i(2𝜋𝑓₀𝑡ϕ)",opacity:1,line:{width:5,colorscale:"Viridis"}}],layout:{autosize:!0,dragmode:!1,margin:{l:0,r:0,b:0,t:0,pad:0},scene:{dragmode:!1,scrollZoom:!1,aspectmode:"manual",aspectratio:{x:1,y:1,z:2},annotations:[{xref:"x",yref:"y",xshift:-190,x:-2,xanchor:"left",y:2,yanchor:"top",text:"Imaginary Axis",showarrow:!1,textangle:-90,font:{size:15}}],xaxis:{mirror:!0,title:"Real Axis",range:[-2,2],dtick:1,showspikes:!0,linecolor:"#000000",linewidth:"5"},yaxis:{mirror:!0,title:"",range:[-2,2],dtick:1,showspikes:!0,linecolor:"#000000",linewidth:"5"},zaxis:{mirror:!0,title:"Time",linecolor:"#000000",linewidth:"5",range:[-1,3],dtick:1,showspikes:!0},camera:{projection:{type:"orthographic"},center:{x:0,y:0,z:0},eye:{x:-1,y:.8,z:1.8},up:{x:0,y:1,z:0}}},showlegend:!1,legend:{y:1,x:-3,traceorder:"normal",font:{family:"Avenir, Helvetica, Arial, sans-serif",size:30,color:"#000"},bordercolor:"#FFFFFF",borderwidth:2}}}},methods:{YgenerateY:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return n*Math.sin(2*Math.PI*e*t)},YgenerateX:function(){return 2},YgenerateZ:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return-t+e},XgenerateX:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return n*Math.cos(2*Math.PI*e*t)},XgenerateY:function(){return-2},XgenerateZ:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return-t+e},signalGenerateX:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return n*Math.cos(2*Math.PI*e*t)},signalGenerateY:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return n*Math.sin(2*Math.PI*e*t)},signalGenerateZ:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return-t+e},createYLine:function(){for(var e={x:[],y:[],z:[]},t=0+this.p;t<2.5+this.p;t+=.01)e.x.push(this.YgenerateX()),e.y.push(this.YgenerateY(t,this.f,this.a)),e.z.push(this.YgenerateZ(t,this.p));return e},createXLine:function(){for(var e={x:[],y:[],z:[]},t=0+this.p;t<2.5+this.p;t+=.01)e.x.push(this.XgenerateX(t,this.f,this.a)),e.y.push(this.XgenerateY()),e.z.push(this.XgenerateZ(t,this.p));return e},createSignalLine:function(){for(var e={x:[],y:[],z:[]},t=0+this.p;t<2.5+this.p;t+=.01)e.x.push(this.signalGenerateX(t,this.f,this.a)),e.y.push(this.signalGenerateY(t,this.f,this.a)),e.z.push(this.signalGenerateZ(t,this.p));return e}},computed:{dataForYLine:function(){var e=this.createYLine();console.log("y data",e);var t=this.createXLine();console.log("x data",t);var n=this.createSignalLine(),a=JSON.parse(JSON.stringify(this.data));return a[0].x=e.x,a[1].x=t.x,a[2].x=n.x,a[0].y=e.y,a[1].y=t.y,a[2].y=n.y,a[0].z=e.z,a[1].z=t.z,a[2].z=t.z,console.log(a),a}}}),p=d,h=(n("a8aa"),n("2877")),f=Object(h["a"])(p,s,l,!1,null,"d509258a",null),v=f.exports,g={name:"App",title:"Dimensional Graph",components:{HelloWorld:v}},m=g,y=(n("034f"),Object(h["a"])(m,i,r,!1,null,null,null)),x=y.exports;function _(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var b={created:function(){var e=_(this);e&&(document.title=e)}};a["default"].mixin(b),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(x)}}).$mount("#app")},"836a":function(e,t,n){e.exports=n.p+"img/imp.svg.6f331f07.png"},"85ec":function(e,t,n){},a8aa:function(e,t,n){"use strict";n("ff75")},ff75:function(e,t,n){}});
//# sourceMappingURL=app.993501a1.js.map