(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{335:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("f626a602",content,!0,{sourceMap:!1})},336:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("0012be4a",content,!0,{sourceMap:!1})},339:function(t,e,n){"use strict";n(335)},340:function(t,e,n){var r=n(58)(!1);r.push([t.i,".flicking-camera{display:flex}",""]),t.exports=r},341:function(t,e,n){"use strict";n(336)},342:function(t,e,n){var r=n(58)(!1);r.push([t.i,".view-flick[data-v-5a7b5660]{position:relative}.view-flick .naviFlick[data-v-5a7b5660]{position:absolute;top:-35px;z-index:3;right:5%}.view-flick .naviFlick .btnNav[data-v-5a7b5660]{border-radius:50%;background-color:#ff589e;border:1px solid #ff589e;color:#fff;font-weight:700}.view-flick .naviFlick .btnNav[data-v-5a7b5660]:hover{background-color:#8261ee;border:1px solid #ff589e}.view-flick .flicking-wrap[data-v-5a7b5660]{overflow-x:hidden}.view-flick .flicking-wrap .cont-flicking[data-v-5a7b5660]{width:500px;margin-top:20px}.view-flick .flicking-wrap .cont-flicking .text-card[data-v-5a7b5660]{height:150px;width:200px;display:flex;flex-direction:column;justify-content:space-between}.katalog[data-v-5a7b5660]{margin-bottom:100px}.group-header[data-v-5a7b5660]{padding:0}.group-header h4[data-v-5a7b5660]{color:#fff;padding:0 0 5px;font-weight:800;letter-spacing:2px}.view[data-v-5a7b5660]{text-transform:capitalize;padding:6px 10px}",""]),t.exports=r},348:function(t,e,n){"use strict";n.r(e);var r=n(31),o=(n(86),n(33)),c={data:function(){return{group:[{title:"Laptop Gaming"},{title:"Laptop Bisnis"},{title:"Laptop Sekolah"}],catalog:[{group:"Gaming",merk:"ASUS",seri:"ROG Nvidia Intel core i5",img:"images/rog.jpg"},{group:"Gaming",merk:"Acer",seri:"ROG Nvidia Intel core i5",img:"images/rog5.jpg"},{group:"Gaming",merk:"MSI",seri:"ROG Nvidia Intel core i5",img:"images/rog2.jpg"},{group:"Gaming",merk:"HP",seri:"ROG Nvidia Intel core i5",img:"images/rog3.jpg"},{group:"Gaming",merk:"DELL",seri:"ROG Nvidia Intel core i5",img:"images/rog4.jpg"}]}},methods:{modal:function(t){this.data=t,this.$refs["my-modal"].show()},nextBtn:function(i){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=i,e.next=4,t.$refs.flick[n].next();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0 instanceof o.e&&(e.t0.code===o.a.ANIMATION_ALREADY_PLAYING?console.log("Animation is already playing!"):e.t0.code===o.a.ANIMATION_INTERRUPTED&&console.log("Animation is interrupted by user."));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},prevBtn:function(i){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=i,e.next=4,t.$refs.flick[n].prev();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0 instanceof o.e&&(e.t0.code===o.a.ANIMATION_ALREADY_PLAYING?console.log("Animation is already playing!"):e.t0.code===o.a.ANIMATION_INTERRUPTED&&console.log("Animation is interrupted by user."));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},l=(n(339),n(341),n(72)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"mini",attrs:{id:"work-process"}},[n("div",{staticClass:"mini-content"},[n("div",{staticClass:"container"},[t._m(0),t._l(t.group,(function(g,i){return n("div",{key:i,staticClass:"row katalog"},[n("b-col",{staticClass:"group-header",attrs:{sm:"12"}},[n("h4",[t._v(t._s(g.title))])]),n("b-row",{staticClass:"view-flick",attrs:{"no-gutters":""}},[n("b-row",{staticClass:"navFlick justify-content-end"},[n("b-col",{staticClass:"\n                  d-flex\n                  naviFlick\n                  justify-content-around\n                  align-items-center\n                ",attrs:{sm:"3",md:"2"}},[n("b-button",{staticClass:"btnNav",attrs:{variant:"success"},on:{click:function(e){return t.prevBtn(i)}}},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1),n("b-button",{staticClass:"btnNav",attrs:{variant:"success"},on:{click:function(e){return t.nextBtn(i)}}},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-right"]}})],1)],1)],1),n("div",{staticClass:"wrapper flicking-wrap container mt-3 w-100"},[n("Flicking",{ref:"flick",refInFor:!0,attrs:{options:{align:"next",defaultIndex:0,circular:!0,duration:700}}},t._l(t.catalog,(function(e,i){return n("div",{key:i,staticClass:"cardSlider item mr-5 cont-flicking"},[n("div",{staticClass:"mini-box amodal h-100"},[n("b-img",{staticClass:"mx-auto",attrs:{src:e.img,height:"74"}}),n("b-col",{staticClass:"mt-4 text-card",attrs:{sm:"12"}},[n("strong",[t._v(t._s(e.merk))]),n("span",[t._v(t._s(e.seri))]),n("a",{staticClass:"main-button-slider view",attrs:{href:""}},[t._v("Lihat Deatil")])])],1)])})),0)],1)],1)],1)}))],2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"offset-lg-3 col-lg-6"},[n("div",{staticClass:"info"},[n("h1",[t._v("Katalog Kami")]),n("p",[t._v("\n                Aenean nec tempor metus. Maecenas ligula dolor, commodo in\n                imperdiet interdum, vehicula ut ex. Donec ante diam.\n              ")])])])])}],!1,null,"5a7b5660",null);e.default=component.exports}}]);