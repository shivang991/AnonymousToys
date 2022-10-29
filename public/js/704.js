/*! For license information please see 704.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[704],{4174:(e,t,r)=>{r.d(t,{c7:()=>a,j_:()=>n});var n={PRODUCT_CREATED:{type:"success",message:"Producto creado con éxito"},PRODUCT_UPDATED:{type:"success",message:"¡Actualizó con éxito los datos del producto!"},PRODUCT_DELETED:{type:"success",message:"¡Eliminado el producto con éxito!"},CAROUSEL_IMAGE_CREATED:{type:"success",message:"¡Artículo agregado!"},CAROUSEL_IMAGE_DELETED:{type:"success",message:"¡Artículo eliminado con éxito!"},CAROUSEL_IMAGE_UPDATED:{type:"success",message:"¡Artículo actualizado con éxito!"},STAFF_CREATED:{type:"success",message:"¡Personal creado con éxito!"},STAFF_UPDATED:{type:"success",message:"¡El personal se actualizó con éxito!"},STAFF_DELETED:{type:"success",message:"¡Personal creado con éxito!"},LOGIN_SUCCESS:{type:"success",message:"¡Ingresó exitosamente!"},ADMIN_REGISTERED:{type:"success",message:"¡Administrador registrado con éxito!"},ADMIN_UPDATED:{type:"success",message:"¡Administrador actualizado con éxito!"},GENERAL_ERROR:{type:"error",message:"¡Ocurrió un error inesperado!"},INVALID_CREDENTIALS:{type:"error",message:"Verifique sus credenciales y vuelva a intentarlo."},USER_EXISTS:{type:"error",message:"Este correo electrónico ha sido tomado."}};function o(e){window.dispatchEvent(new CustomEvent("notificationreq",{detail:e}))}var a=o},752:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8222);const o={name:"BaseTextField",props:{modelValue:{type:String,default:""},label:{type:String,default:""},isTextArea:{type:Boolean,default:!1},type:{type:String,default:"text"},min:{type:Number,default:null},max:{type:Number,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e){var t=e.isTextArea?"textarea":"input",r=(0,n.iH)(!1);return function(o,a){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["grid rounded-md border-t border-b-2 px-4 py-1",e.isInvalid?"border-red-600 bg-red-50":"border-amber-500 bg-slate-100"])},[((0,n.wg)(),(0,n.j4)((0,n.LL)((0,n.SU)(t)),{rows:"5",class:"row-start-1 col-start-1 bg-transparent focus:outline-none resize-none",type:e.type,minlength:e.min,maxlength:e.max,value:e.modelValue,onInput:a[0]||(a[0]=function(e){return o.$emit("update:modelValue",e.target.value)}),onFocus:a[1]||(a[1]=function(e){return r.value=!0}),onBlur:a[2]||(a[2]=function(e){return r.value=!1})},null,40,["type","minlength","maxlength","value"])),(0,n._)("p",{class:(0,n.C_)([{"scale-75 -translate-y-6 -translate-x-2 opacity-100":r.value||e.modelValue.length},"pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"])},(0,n.zw)(e.label),3)],2)}}}},5704:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(8222),o=r(4174),a=r(4318),i=r(752),s=r(3907),u=r(2201);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){c=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return D()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function p(){}function m(){}function h(){}var y={};s(y,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==t&&r.call(g,o)&&(y=g);var w=h.prototype=p.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(o,a,i,s){var u=d(e[o],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==l(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,s)}))}s(u.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:D}}function D(){return{value:void 0,done:!0}}return m.prototype=h,s(w,"constructor",h),s(h,"constructor",m),m.displayName=s(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(b.prototype),s(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(w),s(w,i,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){p(a,n,o,i,s,"next",e)}function s(e){p(a,n,o,i,s,"throw",e)}i(void 0)}))}}var h=["onSubmit"],y={class:"space-y-8"},v=["disabled"],g={key:0,class:"w-4 mx-auto block h-4 my-1 border-2 border-white border-b-transparent rounded-full animate-spin"},w={key:1};const E={name:"RegisterForm",emits:["email-error","general-error"],setup:function(e,t){var r=t.emit,l=(0,s.oR)(),f=(0,u.tv)(),p=(0,a.bK)(),E=(0,n.iH)(!1),b=(0,n.iH)(new Set),x=(0,n.qj)({email:"",name:"",password:"",passwordConfirm:""});function _(){return S.apply(this,arguments)}function S(){return(S=m(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.value.clear(),Object.entries(x).forEach((function(e){var t=d(e,2),r=t[0];t[1]||b.value.add(r)})),/^\S+@\S+\.\S+$/.test(x.email)||b.value.add("email"),x.password!==x.passwordConfirm&&b.value.add("passwordConfirm"),!b.value.size){e.next=6;break}return e.abrupt("return");case 6:return E.value=!0,e.prev=7,e.next=10,p.authPost("/api/user/admin/register",{name:x.name,email:x.email,password:x.password});case 10:"success"===(t=e.sent).data.message&&(l.commit("auth/SET_PROFILE",{accessToken:t.data.token,profile:t.data.profile}),(0,o.c7)(o.j_.ADMIN_REGISTERED),E.value=!1,f.push({name:"AdminDashboard"})),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0.response),422===e.t0.response.status?r("email-error"):r("general-error"),E.value=!1;case 19:case"end":return e.stop()}}),e,null,[[7,14]])})))).apply(this,arguments)}return function(e,t){return(0,n.wg)(),(0,n.iD)("form",{onSubmit:(0,n.iM)(_,["prevent"])},[(0,n._)("div",y,[(0,n.Wm)(i.Z,{min:4,max:24,modelValue:x.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return x.name=e}),"is-invalid":b.value.has("name"),label:"Name"},null,8,["modelValue","is-invalid"]),(0,n.Wm)(i.Z,{modelValue:x.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return x.email=e}),"is-invalid":b.value.has("email"),label:"Email"},null,8,["modelValue","is-invalid"]),(0,n.Wm)(i.Z,{min:6,modelValue:x.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return x.password=e}),"is-invalid":b.value.has("password"),label:"Password",type:"password"},null,8,["modelValue","is-invalid"]),(0,n.Wm)(i.Z,{modelValue:x.passwordConfirm,"onUpdate:modelValue":t[3]||(t[3]=function(e){return x.passwordConfirm=e}),"is-invalid":b.value.has("passwordConfirm"),label:"Comfirm password",type:"password"},null,8,["modelValue","is-invalid"]),(0,n._)("button",{class:"w-full py-2 bg-amber-500 text-white rounded-md",disabled:E.value},[E.value?((0,n.wg)(),(0,n.iD)("span",g)):((0,n.wg)(),(0,n.iD)("span",w,"Crear"))],8,v)])],40,h)}}};var b={class:"py-8 px-8 max-w-lg mx-auto bg-white rounded-md shadow mt-8"},x=(0,n._)("h4",{class:"font-semibold mb-2 text-2xl"},"Registrar un administrador",-1),_=(0,n._)("p",{class:"text-slate-500 flex space-x-2 mb-8"},[(0,n._)("span",{class:"font-semibold"},"NOTA:"),(0,n._)("span",null," Esta acción lo desconectará de la cuenta de administrador actual. ")],-1);const S={name:"AdminRegister",setup:function(e){var t=o.c7.bind(this,o.j_.GENERAL_ERROR),r=o.c7.bind(this,o.j_.USER_EXISTS);return function(e,o){return(0,n.wg)(),(0,n.iD)("div",b,[x,_,(0,n.Wm)(E,{onEmailError:(0,n.SU)(r),onGeneralError:(0,n.SU)(t)},null,8,["onEmailError","onGeneralError"])])}}}}}]);