(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+75Z":function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s.d(e,"b",function(){return r});const i=[3,5,10,15,50,100];class r{constructor(){this.page=1,this.pageSize=i[2],this.total=0,this.pageSizes=[]}recalculatePaginator(t){return this.total=t,this}}},AO7m:function(t,e,s){"use strict";s.r(e),s.d(e,"EnlacesModule",function(){return f});var i=s("ofXK"),r=s("tyNb"),n=s("1kSV"),a=s("CV0D"),o=s("e8Ap"),c=s("JT8C"),h=s("AytR"),l=s("fXoL"),u=s("64N7");function g(t,e){if(1&t&&(l.Ub(0,"a",5),l.Ub(1,"div",6),l.Pb(2,"img",7),l.Tb(),l.Tb()),2&t){const t=l.ic().$implicit;l.pc("href",t.url,l.zc),l.Cb(2),l.pc("src",t.imagenServidorBase64,l.zc)}}function d(t,e){if(1&t&&(l.Ub(0,"div",6),l.Pb(1,"img",7),l.Tb()),2&t){const t=l.ic().$implicit;l.Cb(1),l.pc("src",t.imagenServidorBase64,l.zc)}}function p(t,e){if(1&t&&(l.Ub(0,"div",2),l.Fc(1,g,3,2,"a",3),l.Fc(2,d,2,1,"div",4),l.Tb()),2&t){const t=e.$implicit;l.Cb(1),l.oc("ngIf",t.url),l.Cb(1),l.oc("ngIf",!t.url)}}let b=(()=>{class t{constructor(t,e){this.ref=t,this.enlaceServices=e,this.subscriptions=[],this.API_URL=""+h.a.apiUrl}ngOnInit(){const t=this.enlaceServices.obtenerEnlaces().subscribe(t=>{this.list=t});this.subscriptions.push(t),this.ref.detectChanges()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(l.h),l.Ob(u.a))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-enlaces"]],decls:2,vars:1,consts:[[1,"row"],["class","col-lg-4 col-sm-6",4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-6"],["target","_blank",3,"href",4,"ngIf"],["class","thumbnail text-center",4,"ngIf"],["target","_blank",3,"href"],[1,"thumbnail","text-center"],[1,"img-enlaces",3,"src"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Fc(1,p,3,2,"div",1),l.Tb()),2&t&&(l.Cb(1),l.oc("ngForOf",e.list))},directives:[i.l,i.m],styles:[".img-enlaces[_ngcontent-%COMP%]{max-width:100%;max-height:150px;margin:50px 0}"]}),t})(),f=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[i.c,r.l.forChild([{path:"",component:b}]),c.a,o.b,a.a,n.f,n.j]]}),t})()},ArPJ:function(t,e,s){"use strict";function i(t,e){let s=function(t,e){if(!e||!e.filter)return t;let s=t;return Object.keys(e.filter).forEach(t=>{s=s.filter(s=>s[t]==e.filter[t])}),s}(t,e);s=function(t,e=""){if(!e)return t;const s={number:1,string:2};return t.filter(t=>{let i=!1;const r=Object.keys(t).filter(e=>s[typeof t[e]]&&t[e]);for(const s of r)if(t[s].toString().toLowerCase().indexOf(e)>-1){i=!0;break}return i})}(s,e.searchTerm),e.sorting.column&&(s=function(t,e="",s="asc"){if(!e)return t;let i=[];return i=t.sort((t,i)=>t[e]<i[e]?"asc"===s?-1:1:t[e]>i[e]?"asc"===s?1:-1:0),i}(s,e.sorting.column,e.sorting.direction));const i=s.length,r=(e.paginator.page-1)*e.paginator.pageSize;return s=s.slice(r,r+e.paginator.pageSize),{items:s,total:i}}s.d(e,"a",function(){return i})},BJ2y:function(t,e,s){"use strict";s.d(e,"b",function(){return d}),s.d(e,"a",function(){return m});class i{constructor(){this.column="id",this.direction="asc"}}var r=s("+75Z");class n{constructor(){this.selectedRowIds=new Set,this.itemIds=[]}checkAreAllRowsSelected(){return 0!==this.itemIds.length&&this.selectedRowIds.size===this.itemIds.length}selectRow(t){return this.selectedRowIds.has(t)?this.selectedRowIds.delete(t):this.selectedRowIds.add(t),this}clearRows(t){return this.itemIds=t,this.selectedRowIds=new Set,this}isRowSelected(t){return this.selectedRowIds.has(t)}selectAllRows(){return this.itemIds.length===this.selectedRowIds.size?this.selectedRowIds=new Set:(this.selectedRowIds=new Set,this.itemIds.forEach(t=>this.selectedRowIds.add(t))),this}getSelectedRows(){return Array.from(this.selectedRowIds)}getSelectedRowsCount(){return this.selectedRowIds.size}}var a=s("2Vo4"),o=s("LRne"),c=s("JIr8"),h=s("nYR2"),l=s("vkgz"),u=s("AytR");const g={filter:{},paginator:new r.b,sorting:new i,searchTerm:"",grouping:new n,entityId:void 0};class d{constructor(t){this._items$=new a.a([]),this._isLoading$=new a.a(!1),this._isFirstLoading$=new a.a(!0),this._tableState$=new a.a(g),this._errorMessage=new a.a(""),this._subscriptions=[],this.API_URL=u.a.apiUrl+"/endpoint",this.http=t}get items$(){return this._items$.asObservable()}get isLoading$(){return this._isLoading$.asObservable()}get isFirstLoading$(){return this._isFirstLoading$.asObservable()}get errorMessage$(){return this._errorMessage.asObservable()}get subscriptions(){return this._subscriptions}get paginator(){return this._tableState$.value.paginator}get filter(){return this._tableState$.value.filter}get sorting(){return this._tableState$.value.sorting}get searchTerm(){return this._tableState$.value.searchTerm}get grouping(){return this._tableState$.value.grouping}create(t){return this._isLoading$.next(!0),this._errorMessage.next(""),this.http.post(this.API_URL,t).pipe(Object(c.a)(t=>(this._errorMessage.next(t),console.error("CREATE ITEM",t),Object(o.a)({id:void 0}))),Object(h.a)(()=>this._isLoading$.next(!1)))}find(t){const e=this.API_URL+"/find";return this._errorMessage.next(""),this.http.post(e,t).pipe(Object(c.a)(t=>(this._errorMessage.next(t),console.error("FIND ITEMS",t),Object(o.a)({items:[],total:0}))))}getItemById(t){return this._isLoading$.next(!0),this._errorMessage.next(""),this.http.get(`${this.API_URL}/${t}`).pipe(Object(c.a)(e=>(this._errorMessage.next(e),console.error("GET ITEM BY IT",t,e),Object(o.a)({id:void 0}))),Object(h.a)(()=>this._isLoading$.next(!1)))}update(t){const e=`${this.API_URL}/${t.id}`;return this._isLoading$.next(!0),this._errorMessage.next(""),this.http.put(e,t).pipe(Object(c.a)(e=>(this._errorMessage.next(e),console.error("UPDATE ITEM",t,e),Object(o.a)(t))),Object(h.a)(()=>this._isLoading$.next(!1)))}updateStatusForItems(t,e){return this._isLoading$.next(!0),this._errorMessage.next(""),this.http.put(this.API_URL+"/updateStatus",{ids:t,status:e}).pipe(Object(c.a)(s=>(this._errorMessage.next(s),console.error("UPDATE STATUS FOR SELECTED ITEMS",t,e,s),Object(o.a)([]))),Object(h.a)(()=>this._isLoading$.next(!1)))}delete(t){return this._isLoading$.next(!0),this._errorMessage.next(""),this.http.delete(`${this.API_URL}/${t}`).pipe(Object(c.a)(e=>(this._errorMessage.next(e),console.error("DELETE ITEM",t,e),Object(o.a)({}))),Object(h.a)(()=>this._isLoading$.next(!1)))}deleteItems(t=[]){return this._isLoading$.next(!0),this._errorMessage.next(""),this.http.put(this.API_URL+"/deleteItems",{ids:t}).pipe(Object(c.a)(e=>(this._errorMessage.next(e),console.error("DELETE SELECTED ITEMS",t,e),Object(o.a)([]))),Object(h.a)(()=>this._isLoading$.next(!1)))}fetch(){this._isLoading$.next(!0),this._errorMessage.next("");const t=this.find(this._tableState$.value).pipe(Object(l.a)(t=>{this._items$.next(t.items),this.patchStateWithoutFetch({paginator:this._tableState$.value.paginator.recalculatePaginator(t.total)})}),Object(c.a)(t=>(this._errorMessage.next(t),Object(o.a)({items:[],total:0}))),Object(h.a)(()=>{this._isLoading$.next(!1);const t=this._items$.value.map(t=>t.id);this.patchStateWithoutFetch({grouping:this._tableState$.value.grouping.clearRows(t)})})).subscribe();this._subscriptions.push(t)}setDefaults(){this.patchStateWithoutFetch({filter:{}}),this.patchStateWithoutFetch({sorting:new i}),this.patchStateWithoutFetch({grouping:new n}),this.patchStateWithoutFetch({searchTerm:""}),this.patchStateWithoutFetch({paginator:new r.b}),this._isFirstLoading$.next(!0),this._isLoading$.next(!0),this._tableState$.next(g),this._errorMessage.next("")}patchState(t){this.patchStateWithoutFetch(t),this.fetch()}patchStateWithoutFetch(t){const e=Object.assign(this._tableState$.value,t);this._tableState$.next(e)}}s("tk/3");var p=s("fXoL"),b=s("ofXK"),f=s("3Pt+"),_=s("e8Ap");let m=(()=>{class t{}return t.\u0275mod=p.Mb({type:t}),t.\u0275inj=p.Lb({factory:function(e){return new(e||t)},imports:[[b.c,f.g,_.b]]}),t})()}}]);