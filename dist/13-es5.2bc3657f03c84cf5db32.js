!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}function r(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return a=n.done,n},e:function(n){u=!0,c=n},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw c}}}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ArPJ:function(n,t,e){"use strict";function o(n,t){var e=function(n,t){if(!t||!t.filter)return n;var e=n;return Object.keys(t.filter).forEach(function(n){e=e.filter(function(e){return e[n]==t.filter[n]})}),e}(n,t);e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return n;var e={number:1,string:2};return n.filter(function(n){var o,i=!1,c=r(Object.keys(n).filter(function(t){return e[typeof n[t]]&&n[t]}));try{for(c.s();!(o=c.n()).done;){var a=o.value;if(n[a].toString().toLowerCase().indexOf(t)>-1){i=!0;break}}}catch(u){c.e(u)}finally{c.f()}return i})}(e,t.searchTerm),t.sorting.column&&(e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc";if(!t)return n;return n.sort(function(n,r){return n[t]<r[t]?"asc"===e?-1:1:n[t]>r[t]?"asc"===e?1:-1:0})}(e,t.sorting.column,t.sorting.direction));var o=e.length,i=(t.paginator.page-1)*t.paginator.pageSize;return{items:e=e.slice(i,i+t.paginator.pageSize),total:o}}e.d(t,"a",function(){return o})},Hn7t:function(t,r,o){"use strict";o.r(r),o.d(r,"ConveniosModule",function(){return k});var i=o("ofXK"),c=o("tyNb"),a=o("1kSV"),u=o("CV0D"),b=o("e8Ap"),s=o("JT8C"),l=o("AytR"),d=o("fXoL"),f=o("qpnr"),p=o("jT/F");function v(n,t){if(1&n){var e=d.Vb();d.Ub(0,"div",25),d.Ub(1,"a",26),d.ec("click",function(){d.xc(e);var n=t.$implicit;return d.ic(3).download(n.url,n.nombre)}),d.Hc(2),d.Tb(),d.Tb()}if(2&n){var r=t.$implicit;d.Cb(2),d.Ic(r.nombre)}}function g(n,t){if(1&n&&(d.Ub(0,"div",21),d.Ub(1,"button",22),d.Hc(2,"Documentaci\xf3n"),d.Tb(),d.Ub(3,"div",23),d.Fc(4,v,3,1,"div",24),d.Tb(),d.Tb()),2&n){var e=d.ic().$implicit,r=d.ic();d.Cb(4),d.oc("ngForOf",r.toArrayDocumentos(e.listDocumentos))}}function m(n,t){if(1&n&&(d.Ub(0,"div",25),d.Ub(1,"a",29),d.Hc(2),d.Tb(),d.Tb()),2&n){var e=t.$implicit;d.Cb(1),d.pc("href",e.nombre,d.zc),d.Cb(1),d.Ic(e.nombre)}}function h(n,t){if(1&n&&(d.Ub(0,"div",21),d.Ub(1,"button",27),d.Hc(2,"Enlaces"),d.Tb(),d.Ub(3,"div",28),d.Fc(4,m,3,2,"div",24),d.Tb(),d.Tb()),2&n){var e=d.ic().$implicit,r=d.ic();d.Cb(4),d.oc("ngForOf",r.toArrayEnlaces(e.listEnlaces))}}function w(n,t){if(1&n&&(d.Ub(0,"div",2),d.Ub(1,"div",3),d.Ub(2,"div",4),d.Ub(3,"div",5),d.Pb(4,"img",6),d.Tb(),d.Ub(5,"div",7),d.Ub(6,"div",8),d.Ub(7,"div",9),d.Ub(8,"div",10),d.Fc(9,g,5,1,"div",11),d.Fc(10,h,5,1,"div",11),d.Tb(),d.Tb(),d.Tb(),d.Ub(11,"div",12),d.Ub(12,"div",13),d.Ub(13,"h2",14),d.Hc(14),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(15,"div",15),d.Pb(16,"div",16),d.Ub(17,"div",17),d.Ub(18,"div",18),d.Ub(19,"div",19),d.Ub(20,"p",20),d.Hc(21),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb()),2&n){var e=t.$implicit;d.Cb(4),d.pc("src",e.imagenServidorBase64,d.zc),d.Cb(5),d.oc("ngIf",(null==e.listDocumentos?null:e.listDocumentos.length)>0),d.Cb(1),d.oc("ngIf",(null==e.listEnlaces?null:e.listEnlaces.length)>0),d.Cb(4),d.Ic(e.titulo),d.Cb(2),d.Dc("height","50px"),d.Cb(5),d.Ic(e.texto)}}var y,U,T=((U=function(){function t(e,r,o){n(this,t),this.ref=e,this.conveniosServices=r,this.uploadService=o,this.subscriptions=[],this.API_URL=""+l.a.apiUrl}return e(t,[{key:"ngOnInit",value:function(){var n=this,t=this.conveniosServices.obtenerConvenios().subscribe(function(t){n.list=t});this.subscriptions.push(t),this.ref.detectChanges()}},{key:"download",value:function(n,t){this.uploadService.download(n).subscribe(function(n){var e=new Blob([n],{type:"application/pdf"}),r=window.URL.createObjectURL(e),o=document.createElement("a");o.href=r,o.download=t,o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(function(){window.URL.revokeObjectURL(r),o.remove()},100)})}},{key:"toArrayDocumentos",value:function(n){return Object.keys(n).map(function(t){return n[t]})}},{key:"toArrayEnlaces",value:function(n){return Object.keys(n).map(function(t){return n[t]})}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(n){return n.unsubscribe()})}}]),t}()).\u0275fac=function(n){return new(n||U)(d.Ob(d.h),d.Ob(f.a),d.Ob(p.a))},U.\u0275cmp=d.Ib({type:U,selectors:[["app-convenios"]],decls:2,vars:1,consts:[[1,"row"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"card","card-custom","bg-gray-100","card-stretch","gutter-b"],[1,"card-header","border-0","bg-barataria","py-5","text-right"],[1,"col-md-4","order-2","order-md-1","text-center",2,"display","block","margin","auto"],["alt","Logo",1,"img-fluid","img-thumbnail",3,"src"],[1,"col-md-8","order-1","order-md-2"],[1,"row","pb-5"],[1,"col-12"],["ngbDropdown","","placement","bottom-right","title","Quick actions",1,"dropdown","dropdown-inline","text-right"],["ngbDropdown","","class","d-inline-block",4,"ngIf"],[1,"row","pt-10"],[1,"col-12","text-center","mb-5"],[1,"font-weight-bolder","text-white","mb-0"],[1,"card-body","p-0","position-relative","overflow-hidden"],["id","kt_mixed_widget_1_chart",1,"card-rounded-bottom","bg-barataria"],[1,"card-spacer","mt-n25"],[1,"row","m-0"],[1,"col","bg-secondary","px-6","py-8","rounded-xl","mr-7","mb-7"],[1,"text-dark","font-weight-bold","font-size-h6"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"btn","btn-transparent-white","btn-sm","font-weight-bolder","dropdown-toggle","px-5","dropdown-toggle","btn","btn-transparent"],["aria-labelledby","dropdownBasic1","ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-right"],["class","p-2",4,"ngFor","ngForOf"],[1,"p-2"],["target","_blank",3,"click"],["id","dropdownBasic2","ngbDropdownToggle","",1,"btn","btn-transparent-white","btn-sm","font-weight-bolder","dropdown-toggle","px-5","dropdown-toggle","btn","btn-transparent","ml-2"],["aria-labelledby","dropdownBasic2","ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-right"],["target","_blank",3,"href"]],template:function(n,t){1&n&&(d.Ub(0,"div",0),d.Fc(1,w,22,7,"div",1),d.Tb()),2&n&&(d.Cb(1),d.oc("ngForOf",t.list))},directives:[i.l,a.d,i.m,a.g,a.e],styles:[""]}),U),k=((y=function t(){n(this,t)}).\u0275mod=d.Mb({type:y}),y.\u0275inj=d.Lb({factory:function(n){return new(n||y)},imports:[[i.c,c.l.forChild([{path:"",component:T}]),s.a,b.b,u.a,a.f,a.j]]}),y)},"jT/F":function(t,r,o){"use strict";o.d(r,"a",function(){return s});var i=o("z6cu"),c=o("JIr8"),a=o("AytR"),u=o("fXoL"),b=o("tk/3"),s=function(){var t=function(){function t(e){n(this,t),this.http=e,this.API_URL=a.a.apiUrl+"api/File/"}return e(t,[{key:"uploadImagen",value:function(n){var t=new FormData;return t.append("file",n,n.name),this.http.post(this.API_URL+"Upload?carpeta=imagenes",t,{reportProgress:!0,observe:"events"}).pipe(Object(c.a)(this.errorMgmt))}},{key:"uploadDocumento",value:function(n){var t=new FormData;return t.append("file",n,n.name),this.http.post(this.API_URL+"Upload?carpeta=documentos",t,{reportProgress:!0,observe:"events"}).pipe(Object(c.a)(this.errorMgmt))}},{key:"download",value:function(n){return this.http.get(this.API_URL+"Download?fileUrl="+n,{responseType:"blob"})}},{key:"errorMgmt",value:function(n){var t;return t=n.error instanceof ErrorEvent?n.error.message:"Error Code: ".concat(n.status,"\nMessage: ").concat(n.message),console.log(t),Object(i.a)(function(){return t})}}]),t}();return t.\u0275fac=function(n){return new(n||t)(u.bc(b.c))},t.\u0275prov=u.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();