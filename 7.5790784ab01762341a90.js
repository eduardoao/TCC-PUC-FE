(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bDjW:function(t,r,e){"use strict";e.r(r),e.d(r,"ComponentsModule",function(){return W});var i=e("tyNb"),o=e("ofXK"),n=e("3Pt+"),a=e("1kSV"),c=e("fXoL"),l=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-aluno"]],decls:2,vars:0,template:function(t,r){1&t&&(c.Tb(0,"p"),c.Cc(1,"aluno works!"),c.Sb())},styles:[""]}),t}(),b=e("JIr8"),s=e("mI4i"),d=e("EqH7"),u=e("tk/3"),m=function(){function t(t,r){this.http=t,this.processHTTPMsgService=r}return t.prototype.retornaIptuContribuinte=function(t){return this.http.get(s.a+"/taxationbycitizen?contribuinte="+t).pipe(Object(b.a)(this.processHTTPMsgService.handleError))},t.prototype.retornaIptrContribuinte=function(t){return this.http.get(s.a+"/taxationbycitizeniptr?contribuinte="+t).pipe(Object(b.a)(this.processHTTPMsgService.handleError))},t.\u0275fac=function(r){return new(r||t)(c.ac(u.b),c.ac(d.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),p=e("i+Tk");function f(t,r){if(1&t&&(c.Tb(0,"tr"),c.Tb(1,"td"),c.Cc(2),c.Sb(),c.Tb(3,"td"),c.Cc(4),c.Sb(),c.Tb(5,"td"),c.Cc(6),c.gc(7,"currency"),c.Sb(),c.Tb(8,"td"),c.Cc(9),c.gc(10,"currency"),c.Sb(),c.Tb(11,"td"),c.Cc(12),c.Sb(),c.Sb()),2&t){var e=r.$implicit;c.Bb(2),c.Dc(e.parcela),c.Bb(2),c.Dc(e.referencia),c.Bb(2),c.Dc(c.ic(7,5,e.valor,"BRL")),c.Bb(3),c.Dc(c.ic(10,8,e.valorAtualizado,"BRL")),c.Bb(3),c.Dc(e.status)}}var g=function(){function t(t,r){this.taxationservice=t,this.authenticationService=r}return t.prototype.ngOnInit=function(){this.user=this.authenticationService.currentUserValue,this.login=this.authenticationService.decodeToken(this.user.accessToken),this.retornarIptuContribuinte(this.login.email)},t.prototype.retornarIptuContribuinte=function(t){var r=this;this.taxationservice.retornaIptuContribuinte(t).subscribe(function(t){return r.iptu=t},function(t){return r.errMess=t})},t.\u0275fac=function(r){return new(r||t)(c.Ob(m),c.Ob(p.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-iptu"]],decls:26,vars:2,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"title"],[1,"card-body"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(t,r){1&t&&(c.Pb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"div",3),c.Tb(4,"div",4),c.Tb(5,"div",5),c.Tb(6,"h5",6),c.Cc(7,"Impostos"),c.Sb(),c.Sb(),c.Tb(8,"div",7),c.Tb(9,"span"),c.Cc(10),c.Sb(),c.Tb(11,"table",8),c.Tb(12,"thead"),c.Tb(13,"tr"),c.Tb(14,"th",9),c.Cc(15,"Parcela"),c.Sb(),c.Tb(16,"th",9),c.Cc(17,"Ref\xeancia"),c.Sb(),c.Tb(18,"th",9),c.Cc(19,"Valor"),c.Sb(),c.Tb(20,"th",9),c.Cc(21,"Valor Atualizado"),c.Sb(),c.Tb(22,"th",9),c.Cc(23,"Status"),c.Sb(),c.Sb(),c.Sb(),c.Tb(24,"tbody"),c.Ac(25,f,13,11,"tr",10),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(10),c.Dc(r.iptu[0].contribuinte),c.Bb(15),c.lc("ngForOf",r.iptu))},directives:[o.k],pipes:[o.c],styles:[""]}),t}();function h(t,r){if(1&t&&(c.Tb(0,"tr"),c.Tb(1,"td"),c.Cc(2),c.Sb(),c.Tb(3,"td"),c.Cc(4),c.Sb(),c.Tb(5,"td"),c.Cc(6),c.gc(7,"currency"),c.Sb(),c.Tb(8,"td"),c.Cc(9),c.gc(10,"currency"),c.Sb(),c.Tb(11,"td"),c.Cc(12),c.Sb(),c.Sb()),2&t){var e=r.$implicit;c.Bb(2),c.Dc(e.parcela),c.Bb(2),c.Dc(e.referencia),c.Bb(2),c.Dc(c.ic(7,5,e.valor,"BRL")),c.Bb(3),c.Dc(c.ic(10,8,e.valorAtualizado,"BRL")),c.Bb(3),c.Dc(e.status)}}var v=function(){function t(t,r){this.taxationservice=t,this.authenticationService=r}return t.prototype.ngOnInit=function(){this.user=this.authenticationService.currentUserValue,this.login=this.authenticationService.decodeToken(this.user.accessToken),this.retornarIptuContribuinte(this.login.email)},t.prototype.retornarIptuContribuinte=function(t){var r=this;this.taxationservice.retornaIptrContribuinte(t).subscribe(function(t){return r.iptr=t},function(t){return r.errMess=t})},t.\u0275fac=function(r){return new(r||t)(c.Ob(m),c.Ob(p.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-iptr"]],decls:26,vars:2,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"title"],[1,"card-body"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(t,r){1&t&&(c.Pb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"div",3),c.Tb(4,"div",4),c.Tb(5,"div",5),c.Tb(6,"h5",6),c.Cc(7,"Impostos"),c.Sb(),c.Sb(),c.Tb(8,"div",7),c.Tb(9,"span"),c.Cc(10),c.Sb(),c.Tb(11,"table",8),c.Tb(12,"thead"),c.Tb(13,"tr"),c.Tb(14,"th",9),c.Cc(15,"Parcela"),c.Sb(),c.Tb(16,"th",9),c.Cc(17,"Ref\xeancia"),c.Sb(),c.Tb(18,"th",9),c.Cc(19,"Valor"),c.Sb(),c.Tb(20,"th",9),c.Cc(21,"Valor Atualizado"),c.Sb(),c.Tb(22,"th",9),c.Cc(23,"Status"),c.Sb(),c.Sb(),c.Sb(),c.Tb(24,"tbody"),c.Ac(25,h,13,11,"tr",10),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(10),c.Dc(r.iptr[0].contribuinte),c.Bb(15),c.lc("ngForOf",r.iptr))},directives:[o.k],pipes:[o.c],styles:[""]}),t}(),S=e("mLek"),T=e("pxUr");function C(t,r){if(1&t){var e=c.Ub();c.Tb(0,"agm-marker",11),c.dc("markerClick",function(){c.uc(e);var t=r.$implicit,i=r.index;return c.fc().clickedMarker(t.label,i)})("dragEnd",function(t){c.uc(e);var i=r.$implicit;return c.fc().markerDragEnd(i,t)}),c.Sb()}if(2&t){var i=r.$implicit;c.lc("latitude",i.lat)("longitude",i.long)("label",i.quantidade)("markerDraggable",i.draggable)}}var k=function(){function t(t){this.criminalidadeservice=t,this.zoom=12,this.lat=-23.5405,this.long=-46.6333,this.googleMapType="satellite",this.markers=[]}return t.prototype.ngOnInit=function(){this.retornarDadosHomicidio()},t.prototype.retornarDadosHomicidio=function(){var t=this;this.criminalidadeservice.retornaCriminalidadeAnoCorrente().subscribe(function(r){t.homicidio=r.filter(function(t){return"Homicidio"==t.tipo}),console.log(t.homicidio)},function(r){return t.errMess=r})},t.prototype.clickedMarker=function(t,r){console.log("clicked the marker: "+(t||r))},t.prototype.mapClicked=function(t){this.markers.push({lat:t.coords.lat,long:t.coords.lng,draggable:!0,label:"",quantidade:1,tipo:""})},t.prototype.markerDragEnd=function(t,r){console.log("dragEnd",t,r)},t.prototype.ngAfterViewInit=function(){},t.\u0275fac=function(r){return new(r||t)(c.Ob(S.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-homicidio"]],decls:12,vars:6,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"title"],[1,"card-body"],[1,"d-flex","align-items-center","justify-content-center"],[3,"latitude","longitude","zoom","disableDefaultUI","zoomControl","mapClick"],[3,"latitude","longitude","label","markerDraggable","markerClick","dragEnd",4,"ngFor","ngForOf"],[3,"latitude","longitude","label","markerDraggable","markerClick","dragEnd"]],template:function(t,r){1&t&&(c.Pb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"div",3),c.Tb(4,"div",4),c.Tb(5,"div",5),c.Tb(6,"h5",6),c.Cc(7,"Ocorr\xeancias de Homic\xeddios"),c.Sb(),c.Sb(),c.Tb(8,"div",7),c.Tb(9,"div",8),c.Tb(10,"agm-map",9),c.dc("mapClick",function(t){return r.mapClicked(t)}),c.Ac(11,C,1,4,"agm-marker",10),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(10),c.lc("latitude",r.lat)("longitude",r.long)("zoom",r.zoom)("disableDefaultUI",!1)("zoomControl",!1),c.Bb(1),c.lc("ngForOf",r.homicidio))},directives:[T.b,o.k,T.c],styles:[""]}),t}();function y(t,r){if(1&t){var e=c.Ub();c.Tb(0,"agm-marker",10),c.dc("markerClick",function(){c.uc(e);var t=r.$implicit,i=r.index;return c.fc().clickedMarker(t.label,i)})("dragEnd",function(t){c.uc(e);var i=r.$implicit;return c.fc().markerDragEnd(i,t)}),c.Sb()}if(2&t){var i=r.$implicit;c.lc("latitude",i.lat)("longitude",i.long)("label",i.quantidade)("markerDraggable",i.draggable)}}var I=function(){function t(t){this.criminalidadeservice=t,this.zoom=12,this.lat=-23.5405,this.long=-46.6333,this.googleMapType="satellite",this.markers=[]}return t.prototype.ngOnInit=function(){this.retornarDadosHomicidio()},t.prototype.retornarDadosHomicidio=function(){var t=this;this.criminalidadeservice.retornaCriminalidadeAnoCorrente().subscribe(function(r){t.homicidio=r.filter(function(t){return"Roubo"==t.tipo}),console.log(t.homicidio)},function(r){return t.errMess=r})},t.prototype.clickedMarker=function(t,r){console.log("clicked the marker: "+(t||r))},t.prototype.mapClicked=function(t){this.markers.push({lat:t.coords.lat,long:t.coords.lng,draggable:!0,label:"",quantidade:1,tipo:""})},t.prototype.markerDragEnd=function(t,r){console.log("dragEnd",t,r)},t.prototype.ngAfterViewInit=function(){},t.\u0275fac=function(r){return new(r||t)(c.Ob(S.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-ocorrenciaarmafogo"]],decls:11,vars:6,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"title"],[1,"card-body"],[3,"latitude","longitude","zoom","disableDefaultUI","zoomControl","mapClick"],[3,"latitude","longitude","label","markerDraggable","markerClick","dragEnd",4,"ngFor","ngForOf"],[3,"latitude","longitude","label","markerDraggable","markerClick","dragEnd"]],template:function(t,r){1&t&&(c.Pb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"div",3),c.Tb(4,"div",4),c.Tb(5,"div",5),c.Tb(6,"h5",6),c.Cc(7,"Ocorr\xeancias uso de arma de fogo"),c.Sb(),c.Sb(),c.Tb(8,"div",7),c.Tb(9,"agm-map",8),c.dc("mapClick",function(t){return r.mapClicked(t)}),c.Ac(10,y,1,4,"agm-marker",9),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(9),c.lc("latitude",r.lat)("longitude",r.long)("zoom",r.zoom)("disableDefaultUI",!1)("zoomControl",!1),c.Bb(1),c.lc("ngForOf",r.homicidio))},directives:[T.b,o.k,T.c],styles:[""]}),t}();function B(t,r){if(1&t){var e=c.Ub();c.Tb(0,"agm-marker",10),c.dc("markerClick",function(){c.uc(e);var t=r.$implicit,i=r.index;return c.fc().clickedMarker(t.label,i)})("dragEnd",function(t){c.uc(e);var i=r.$implicit;return c.fc().markerDragEnd(i,t)}),c.Sb()}if(2&t){var i=r.$implicit;c.lc("latitude",i.lat)("longitude",i.long)("label",i.quantidade)("markerDraggable",i.draggable)}}var D=function(){function t(t){this.criminalidadeservice=t,this.zoom=12,this.lat=-23.5405,this.long=-46.6333,this.googleMapType="satellite",this.markers=[]}return t.prototype.ngOnInit=function(){this.retornarDadosHomicidio()},t.prototype.retornarDadosHomicidio=function(){var t=this;this.criminalidadeservice.retornaCriminalidadeAnoCorrente().subscribe(function(r){t.homicidio=r.filter(function(t){return"Arma"==t.tipo}),console.log(t.homicidio)},function(r){return t.errMess=r})},t.prototype.clickedMarker=function(t,r){console.log("clicked the marker: "+(t||r))},t.prototype.mapClicked=function(t){this.markers.push({lat:t.coords.lat,long:t.coords.lng,draggable:!0,label:"",quantidade:1,tipo:""})},t.prototype.markerDragEnd=function(t,r){console.log("dragEnd",t,r)},t.prototype.ngAfterViewInit=function(){},t.\u0275fac=function(r){return new(r||t)(c.Ob(S.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-ocorrenciafurtoroubo"]],decls:11,vars:6,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"title"],[1,"card-body"],[3,"latitude","longitude","zoom","disableDefaultUI","zoomControl","mapClick"],[3,"latitude","longitude","label","markerDraggable","markerClick","dragEnd",4,"ngFor","ngForOf"],[3,"latitude","longitude","label","markerDraggable","markerClick","dragEnd"]],template:function(t,r){1&t&&(c.Pb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"div",3),c.Tb(4,"div",4),c.Tb(5,"div",5),c.Tb(6,"h5",6),c.Cc(7,"Ocorr\xeancias de Roubo e Furto"),c.Sb(),c.Sb(),c.Tb(8,"div",7),c.Tb(9,"agm-map",8),c.dc("mapClick",function(t){return r.mapClicked(t)}),c.Ac(10,B,1,4,"agm-marker",9),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(9),c.lc("latitude",r.lat)("longitude",r.long)("zoom",r.zoom)("disableDefaultUI",!1)("zoomControl",!1),c.Bb(1),c.lc("ngForOf",r.homicidio))},directives:[T.b,o.k,T.c],styles:[""]}),t}(),w=e("p3Fh"),A=e("SxV6");function O(t,r){if(1&t&&(c.Tb(0,"div",18),c.Cc(1),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.Dc(e.error)}}function F(t,r){if(1&t&&(c.Tb(0,"div",19),c.Cc(1),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.Dc(e.success)}}function P(t,r){1&t&&(c.Tb(0,"div"),c.Cc(1,"E-mail n\xe3o pode ser v\xe1zio"),c.Sb())}function z(t,r){if(1&t&&(c.Tb(0,"div",20),c.Ac(1,P,2,0,"div",21),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.lc("ngIf",e.f.email.errors.required)}}function E(t,r){1&t&&(c.Tb(0,"div"),c.Cc(1,"Senha n\xe3o pode ser vazia"),c.Sb())}function x(t,r){if(1&t&&(c.Tb(0,"div",20),c.Ac(1,E,2,0,"div",21),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.lc("ngIf",e.f.password.errors.required)}}function q(t,r){1&t&&c.Pb(0,"span",22)}var N=function(t){return{"is-invalid":t}};function M(t,r){if(1&t&&(c.Tb(0,"div",21),c.Cc(1),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.Dc(e.error)}}function L(t,r){1&t&&(c.Tb(0,"div"),c.Cc(1,"O Campo nome \xe9 obrigat\xf3rio"),c.Sb())}function R(t,r){if(1&t&&(c.Tb(0,"div",22),c.Ac(1,L,2,0,"div",23),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.lc("ngIf",e.f.firstName.errors.required)}}function U(t,r){1&t&&(c.Tb(0,"div"),c.Cc(1,"O Campo sobrenome \xe9 obrigat\xf3rio"),c.Sb())}function j(t,r){if(1&t&&(c.Tb(0,"div",22),c.Ac(1,U,2,0,"div",23),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.lc("ngIf",e.f.lastName.errors.required)}}function H(t,r){1&t&&(c.Tb(0,"div"),c.Cc(1," O Campo E-mail \xe9 obrigat\xf3rio"),c.Sb())}function V(t,r){if(1&t&&(c.Tb(0,"div",22),c.Ac(1,H,2,0,"div",23),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.lc("ngIf",e.f.email.errors.required)}}function $(t,r){1&t&&(c.Tb(0,"div"),c.Cc(1,"O Campo Senha \xe9 obrigat\xf3rio"),c.Sb())}function J(t,r){1&t&&(c.Tb(0,"div"),c.Cc(1,"Senha precisa ter pelo menos 6 caracteres"),c.Sb())}function G(t,r){if(1&t&&(c.Tb(0,"div",22),c.Ac(1,$,2,0,"div",23),c.Ac(2,J,2,0,"div",23),c.Sb()),2&t){var e=c.fc();c.Bb(1),c.lc("ngIf",e.f.password.errors.required),c.Bb(1),c.lc("ngIf",e.f.password.errors.minlength)}}function X(t,r){1&t&&c.Pb(0,"span",24)}var K=function(t){return{"is-invalid":t}},Q=[{path:"",children:[{path:"card",component:l,data:{title:"Aluno",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"Aluno"}]},canActivate:[w.a]},{path:"aluno",component:l,data:{title:"Aluno",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"Aluno"}]},canActivate:[w.a]},{path:"iptu",component:g,data:{title:"IPTU",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"IPTU"}]},canActivate:[w.a]},{path:"iptr",component:v,data:{title:"ITR",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"ITR"}]},canActivate:[w.a]},{path:"homicidio",component:k,data:{title:"Homic\xeddio",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"Homic\xeddio"}]},canActivate:[w.a]},{path:"ocorrenciaarmafogo",component:I,data:{title:"Arma de Fogo",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"Arma de Fogo"}]}},{path:"ocorrenciafurtoroubo",component:D,data:{title:"Furto e Roubo",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"Furto e Roubo"}]}},{path:"login",component:function(){function t(t,r,e,i,o){this.formBuilder=t,this.route=r,this.router=e,this.authenticationService=i,this.alertService=o,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return t.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({email:["",n.l.required],password:["",n.l.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/dashboard",this.route.snapshot.queryParams.registered&&(this.success="Registration successful")},Object.defineProperty(t.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!1,configurable:!0}),t.prototype.onSubmit=function(){var t=this;this.submitted=!0,this.error="",this.success="",this.loginForm.invalid||(this.loading=!0,this.authenticationService.login(this.f.email.value,this.f.password.value).pipe(Object(A.a)()).subscribe(function(r){t.router.navigate([t.returnUrl])},function(r){t.error=r,t.loading=!1}))},t.\u0275fac=function(r){return new(r||t)(c.Ob(n.b),c.Ob(i.a),c.Ob(i.f),c.Ob(p.b),c.Ob(p.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["ng-component"]],decls:28,vars:13,consts:[["id","login"],[1,"text-center","text-white","pt-5"],[1,"container"],["id","login-row",1,"row","justify-content-center","align-items-center"],["id","login-column",1,"col-md-6","login-column-bg"],["id","login-box",1,"col-md-12"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/component/register",1,"btn","btn-link"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(t,r){1&t&&(c.Tb(0,"div",0),c.Tb(1,"h3",1),c.Cc(2,"Login usu\xe1rio"),c.Sb(),c.Tb(3,"div",2),c.Tb(4,"div",3),c.Tb(5,"div",4),c.Tb(6,"div",5),c.Ac(7,O,2,1,"div",6),c.Ac(8,F,2,1,"div",7),c.Tb(9,"h2"),c.Cc(10,"Login"),c.Sb(),c.Tb(11,"form",8),c.dc("ngSubmit",function(){return r.onSubmit()}),c.Tb(12,"div",9),c.Tb(13,"label",10),c.Cc(14,"E-mail"),c.Sb(),c.Pb(15,"input",11),c.Ac(16,z,2,1,"div",12),c.Sb(),c.Tb(17,"div",9),c.Tb(18,"label",13),c.Cc(19,"Senha"),c.Sb(),c.Pb(20,"input",14),c.Ac(21,x,2,1,"div",12),c.Sb(),c.Tb(22,"div",9),c.Tb(23,"button",15),c.Ac(24,q,1,0,"span",16),c.Cc(25," Login "),c.Sb(),c.Tb(26,"a",17),c.Cc(27,"Registrar"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(7),c.lc("ngIf",r.error),c.Bb(1),c.lc("ngIf",r.success),c.Bb(3),c.lc("formGroup",r.loginForm),c.Bb(4),c.lc("ngClass",c.oc(9,N,r.submitted&&r.f.email.errors)),c.Bb(1),c.lc("ngIf",r.submitted&&r.f.email.errors),c.Bb(4),c.lc("ngClass",c.oc(11,N,r.submitted&&r.f.password.errors)),c.Bb(1),c.lc("ngIf",r.submitted&&r.f.password.errors),c.Bb(2),c.lc("disabled",r.loading),c.Bb(1),c.lc("ngIf",r.loading))},directives:[o.l,n.n,n.i,n.d,n.a,n.h,n.c,o.j,i.h],encapsulation:2}),t}(),data:{title:"Login",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"Login"}]}},{path:"register",component:function(){function t(t,r,e,i,o){this.formBuilder=t,this.router=r,this.authenticationService=e,this.userService=i,this.alertService=o,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return t.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({firstName:["",n.l.required],lastName:["",n.l.required],email:["",n.l.required],password:["",[n.l.required,n.l.minLength(6)]]})},Object.defineProperty(t.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!1,configurable:!0}),t.prototype.onSubmit=function(){var t=this;this.submitted=!0,this.alertService.clear(),this.registerForm.invalid||(this.loading=!0,this.userService.register(this.registerForm.value).pipe(Object(A.a)()).subscribe(function(r){t.router.navigate(["/login"],{queryParams:{registered:!0}})},function(r){t.error=r,t.loading=!1}))},t.\u0275fac=function(r){return new(r||t)(c.Ob(n.b),c.Ob(i.f),c.Ob(p.b),c.Ob(p.c),c.Ob(p.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["ng-component"]],decls:37,vars:20,consts:[["id","login"],[1,"text-center","text-white","pt-5"],[1,"container"],["id","login-row",1,"row","justify-content-center","align-items-center"],["id","login-column",1,"col-md-6","login-column-bg"],["id","login-box",1,"col-md-12"],["class","alert alert-danger",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","email"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/login",1,"btn","btn-link"],[1,"alert","alert-danger"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(t,r){1&t&&(c.Tb(0,"div",0),c.Tb(1,"h3",1),c.Cc(2,"Formul\xe1rio de registro"),c.Sb(),c.Tb(3,"div",2),c.Tb(4,"div",3),c.Tb(5,"div",4),c.Tb(6,"div",5),c.Ac(7,M,2,1,"div",6),c.Tb(8,"h2"),c.Cc(9,"Register"),c.Sb(),c.Tb(10,"form",7),c.dc("ngSubmit",function(){return r.onSubmit()}),c.Tb(11,"div",8),c.Tb(12,"label",9),c.Cc(13,"First Name"),c.Sb(),c.Pb(14,"input",10),c.Ac(15,R,2,1,"div",11),c.Sb(),c.Tb(16,"div",8),c.Tb(17,"label",12),c.Cc(18,"Last Name"),c.Sb(),c.Pb(19,"input",13),c.Ac(20,j,2,1,"div",11),c.Sb(),c.Tb(21,"div",8),c.Tb(22,"label",14),c.Cc(23,"E-mail"),c.Sb(),c.Pb(24,"input",15),c.Ac(25,V,2,1,"div",11),c.Sb(),c.Tb(26,"div",8),c.Tb(27,"label",16),c.Cc(28,"Password"),c.Sb(),c.Pb(29,"input",17),c.Ac(30,G,3,2,"div",11),c.Sb(),c.Tb(31,"div",8),c.Tb(32,"button",18),c.Ac(33,X,1,0,"span",19),c.Cc(34," Registrar "),c.Sb(),c.Tb(35,"a",20),c.Cc(36,"Cancelar"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(7),c.lc("ngIf",r.error),c.Bb(3),c.lc("formGroup",r.registerForm),c.Bb(4),c.lc("ngClass",c.oc(12,K,r.submitted&&r.f.firstName.errors)),c.Bb(1),c.lc("ngIf",r.submitted&&r.f.firstName.errors),c.Bb(4),c.lc("ngClass",c.oc(14,K,r.submitted&&r.f.lastName.errors)),c.Bb(1),c.lc("ngIf",r.submitted&&r.f.lastName.errors),c.Bb(4),c.lc("ngClass",c.oc(16,K,r.submitted&&r.f.email.errors)),c.Bb(1),c.lc("ngIf",r.submitted&&r.f.email.errors),c.Bb(4),c.lc("ngClass",c.oc(18,K,r.submitted&&r.f.password.errors)),c.Bb(1),c.lc("ngIf",r.submitted&&r.f.password.errors),c.Bb(2),c.lc("disabled",r.loading),c.Bb(1),c.lc("ngIf",r.loading))},directives:[o.l,n.n,n.i,n.d,n.a,n.h,n.c,o.j,i.h],encapsulation:2}),t}(),data:{title:"Register",urls:[{title:"Dashboard",url:"/dashboard"},{title:"ngComponent"},{title:"Register"}]}}]}],W=function(){function t(){}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(r){return new(r||t)},providers:[T.d],imports:[[o.b,i.i.forChild(Q),n.e,n.k,a.b,T.a.forRoot({apiKey:"AIzaSyAX6iL3kJwjA98L4PMQD2VcxBXJ8L8QTwQ"})]]}),t}()}}]);