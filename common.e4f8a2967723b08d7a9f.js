(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{EqH7:function(r,t,n){"use strict";n.d(t,"a",function(){return i});var e=n("z6cu"),o=n("fXoL"),i=function(){function r(){}return r.prototype.handleError=function(r){var t;return t=r.error instanceof ErrorEvent?r.error.message:r.status+" - "+(r.statusText||""),Object(e.a)(t)},r.\u0275prov=o.Kb({token:r,factory:r.\u0275fac=function(t){return new(t||r)},providedIn:"root"}),r}()},mLek:function(r,t,n){"use strict";n.d(t,"a",function(){return s});var e=n("JIr8"),o=n("mI4i"),i=n("EqH7"),c=n("fXoL"),a=n("tk/3"),s=function(){function r(r,t){this.http=r,this.processHTTPMsgService=t}return r.prototype.retornaHomicidioAnoCorrente=function(){return this.http.get(o.a+"/homicidiosanocorrente").pipe(Object(e.a)(this.processHTTPMsgService.handleError))},r.prototype.retornaCriminalidadeAnoCorrente=function(){return this.http.get(o.a+"/criminalidadeanocorrente").pipe(Object(e.a)(this.processHTTPMsgService.handleError))},r.\u0275fac=function(t){return new(t||r)(c.ac(a.b),c.ac(i.a))},r.\u0275prov=c.Kb({token:r,factory:r.\u0275fac,providedIn:"root"}),r}()}}]);