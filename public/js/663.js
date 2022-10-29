"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[663],{4174:(e,t,a)=>{a.d(t,{c7:()=>r,j_:()=>n});var n={PRODUCT_CREATED:{type:"success",message:"Producto creado con éxito"},PRODUCT_UPDATED:{type:"success",message:"¡Actualizó con éxito los datos del producto!"},PRODUCT_DELETED:{type:"success",message:"¡Eliminado el producto con éxito!"},CAROUSEL_IMAGE_CREATED:{type:"success",message:"¡Artículo agregado!"},CAROUSEL_IMAGE_DELETED:{type:"success",message:"¡Artículo eliminado con éxito!"},CAROUSEL_IMAGE_UPDATED:{type:"success",message:"¡Artículo actualizado con éxito!"},STAFF_CREATED:{type:"success",message:"¡Personal creado con éxito!"},STAFF_UPDATED:{type:"success",message:"¡El personal se actualizó con éxito!"},STAFF_DELETED:{type:"success",message:"¡Personal creado con éxito!"},LOGIN_SUCCESS:{type:"success",message:"¡Ingresó exitosamente!"},ADMIN_REGISTERED:{type:"success",message:"¡Administrador registrado con éxito!"},ADMIN_UPDATED:{type:"success",message:"¡Administrador actualizado con éxito!"},GENERAL_ERROR:{type:"error",message:"¡Ocurrió un error inesperado!"},INVALID_CREDENTIALS:{type:"error",message:"Verifique sus credenciales y vuelva a intentarlo."},USER_EXISTS:{type:"error",message:"Este correo electrónico ha sido tomado."}};function l(e){window.dispatchEvent(new CustomEvent("notificationreq",{detail:e}))}var r=l},5345:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(8222),l=a(7810),r={key:0},o=(0,n._)("p",{class:"my-2 text-slate-500"},"Haga clic para cambiar la imagen",-1),u=["src"],s=["onClick"],i=["onDrop"],c={class:"text-xl mb-1 text-slate-500"},d=(0,n._)("p",{class:"text-slate-500 mb-2"},"Suelta un archivo o",-1),m={inheritAttrs:!1};const f=Object.assign(m,{name:"BaseImageInput",props:{label:{type:String,required:!0},modelValue:{type:Blob,default:null},defaultSrc:{type:String,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e,t){var a=t.emit,m=e,f=(0,n.l1)(),p=Object.fromEntries(["drag","dragstart","dragend","dragover","dragenter","dragleave"].map((function(e){return[e,function(e){e.preventDefault(),e.stopPropagation()}]}))),b=(0,n.iH)(null),v=(0,n.iH)(!1);function h(e){if(e&&e.type.startsWith("image")){a("update:modelValue",e);var t=new FileReader;t.readAsDataURL(e),t.addEventListener("load",(function(e){b.value=e.target.result}))}}function w(e){var t;v.value=!1,h(null===(t=e.dataTransfer.files)||void 0===t?void 0:t[0])}function g(e){h(e.target.files[0])}function y(){a("update:modelValue",null),b.value=m.defaultSrc}return(0,n.YP)((function(){return m.modelValue}),(function(e){return e&&h(e)})),function(t,a){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n._)("input",{type:"file",ref:"inputEl",onChange:g},null,544),[[n.F8,!1]]),(0,n._)("label",{class:(0,n.C_)(["py-1 px-2 rounded-t-md text-white",e.isInvalid?"bg-red-600":"bg-amber-500"])},(0,n.zw)(e.label),3),b.value||e.defaultSrc?((0,n.wg)(),(0,n.iD)("div",r,[o,(0,n._)("img",(0,n.dG)({src:b.value||e.defaultSrc},(0,n.SU)(f),{onClick:a[0]||(a[0]=function(e){return t.$refs.inputEl.click()})}),null,16,u),e.modelValue?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:(0,n.iM)(y,["prevent","stop"]),class:"py-1 text-amber-500 px-2 border border-amber-500 rounded-md mt-2"}," Quita la imagen ",8,s)):(0,n.kq)("",!0)])):((0,n.wg)(),(0,n.iD)("div",(0,n.dG)({key:1,class:["py-8 flex flex-col items-center rounded-b-md shadow bg-slate-100 ring-slate-200",[e.isInvalid?"bg-red-50":"bg-slate-100",{"ring-2":v.value}]],onDrop:(0,n.iM)(w,["prevent","stop"]),onDragover:a[2]||(a[2]=function(e){return v.value=!0}),onDragleave:a[3]||(a[3]=function(e){return v.value=!1})},(0,n.mx)((0,n.SU)(p))),[(0,n._)("p",c,[(0,n.Wm)((0,n.SU)(l.GN),{icon:"fa fa-upload"})]),d,(0,n._)("button",{class:"text-amber-500 hover:underline",onClick:a[1]||(a[1]=(0,n.iM)((function(e){return t.$refs.inputEl.click()}),["prevent"]))}," Haga clic para navegar ")],16,i))])}}})},6846:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(8222),l=a(7810),r={key:0,class:"z-20 bg-white mx-auto my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"},o={class:"flex justify-end"};const u={name:"BaseModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["close"],setup:function(e,t){var a=t.emit,u=e,s=(0,n.iH)(!1),i=(0,n.iH)(0);return(0,n.YP)((function(){return u.shouldShow}),(function(e){e&&(i.value=document.body.scrollHeight)})),function(t,u){return(0,n.wg)(),(0,n.j4)(n.lR,{to:"#app-modals"},[(0,n.Wm)(n.uT,{name:"modal",onAfterEnter:u[2]||(u[2]=function(e){return s.value=!0})},{default:(0,n.w5)((function(){return[e.shouldShow?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"bg-gradient-to-b from-transparent to-slate-100 grid",style:(0,n.j5)({height:"".concat(i.value,"px")})},[(0,n.Wm)(n.uT,{name:"modal",onAfterLeave:u[1]||(u[1]=function(e){return a("close")})},{default:(0,n.w5)((function(){return[s.value?((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",o,[(0,n._)("button",{class:"text-xl text-slate-900 p-4",onClick:u[0]||(u[0]=function(e){return s.value=!1})},[(0,n.Wm)((0,n.SU)(l.GN),{icon:"fa fa-times"})])]),(0,n.WI)(t.$slots,"default")])):(0,n.kq)("",!0)]})),_:3})],4)):(0,n.kq)("",!0)]})),_:3})])}}}},752:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(8222);const l={name:"BaseTextField",props:{modelValue:{type:String,default:""},label:{type:String,default:""},isTextArea:{type:Boolean,default:!1},type:{type:String,default:"text"},min:{type:Number,default:null},max:{type:Number,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e){var t=e.isTextArea?"textarea":"input",a=(0,n.iH)(!1);return function(l,r){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["grid rounded-md border-t border-b-2 px-4 py-1",e.isInvalid?"border-red-600 bg-red-50":"border-amber-500 bg-slate-100"])},[((0,n.wg)(),(0,n.j4)((0,n.LL)((0,n.SU)(t)),{rows:"5",class:"row-start-1 col-start-1 bg-transparent focus:outline-none resize-none",type:e.type,minlength:e.min,maxlength:e.max,value:e.modelValue,onInput:r[0]||(r[0]=function(e){return l.$emit("update:modelValue",e.target.value)}),onFocus:r[1]||(r[1]=function(e){return a.value=!0}),onBlur:r[2]||(r[2]=function(e){return a.value=!1})},null,40,["type","minlength","maxlength","value"])),(0,n._)("p",{class:(0,n.C_)([{"scale-75 -translate-y-6 -translate-x-2 opacity-100":a.value||e.modelValue.length},"pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"])},(0,n.zw)(e.label),3)],2)}}}},9663:(e,t,a)=>{a.r(t),a.d(t,{default:()=>qe});var n=a(8222),l=a(2674),r=a(3907),o={key:0},u={class:"mb-4"},s=(0,n._)("caption",{class:"text-xl text-slate-900 text-left"}," Admins: ",-1),i=(0,n._)("tr",{class:"text-slate-900 h-10 px-12"},[(0,n._)("th"),(0,n._)("th",{class:"text-left px-4"},"Name"),(0,n._)("th",{class:"text-left px-4"},"Email"),(0,n._)("th",{class:"text-left px-4"},"Joined")],-1),c={class:"px-4 py-2"},d={class:"px-4"},m={class:"px-4"},f={class:"px-4"},p=(0,n.Uk)(" Register a new account ");const b={name:"AdminsTable",props:{data:{type:Array,default:null}},setup:function(e){var t=(0,r.oR)(),a=(0,n.Fl)((function(){var e;return null===(e=t.state.auth.profile)||void 0===e?void 0:e.id}));return function(t,r){var b=(0,n.up)("router-link");return e.data?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("table",u,[s,i,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.data,(function(e,t){return(0,n.wg)(),(0,n.iD)("tr",{key:t,class:(0,n.C_)({"bg-slate-100 shadow rounded":(0,n.SU)(a)===e.id})},[(0,n._)("td",c,[e.profile_image_url?((0,n.wg)(),(0,n.j4)(l.Z,{key:0,src:e.profile_image_url,"is-external":"",class:"w-10 h-10 rounded-full shadow object-cover"},null,8,["src"])):((0,n.wg)(),(0,n.j4)(l.Z,{key:1,src:"/user.jpg",class:"w-10 h-10 rounded-full shadow"}))]),(0,n._)("td",d,(0,n.zw)(e.name),1),(0,n._)("td",m,(0,n.zw)(e.email),1),(0,n._)("td",f,(0,n.zw)((r=e.created_at,new Date(r).toLocaleDateString("es",{day:"numeric",year:"2-digit",month:"short",time:"full"}))),1)],2);var r})),128))]),(0,n.Wm)(b,{to:{name:"AdminRegister"},class:"text-amber-500 hover:underline"},{default:(0,n.w5)((function(){return[p]})),_:1})])):(0,n.kq)("",!0)}}};var v=a(752),h=a(5345),w=a(6846),g=a(4318),y=a(4174),x=["onSubmit"],_={class:"space-y-8"},S={key:0,class:"w-4 block h-4 border-2 my-1 border-b-transparent border-amber-500 animate-spin rounded-full"},D={key:1},E=["disabled"],k={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},j={key:1};const A={name:"EditSelfModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["update:shouldShow","success"],setup:function(e,t){var a=t.emit,l=e,o=(0,n.qj)({name:"",image:null}),u=(0,n.iH)(null),s=(0,n.iH)(!1),i=(0,n.qj)(new Set),c=(0,n.iH)(!1),d=(0,r.oR)(),m=(0,n.Fl)((function(){return d.state.auth.profile})),f=(0,g.ZP)();function p(){s.value||(s.value=!0,f.authDelete("/api/user/admin/image").then((function(e){"success"===e.data.message&&(d.commit("auth/SET_PROFILE",{profile:e.data.profile}),s.value=!1,u.value=null)})))}function b(){i.clear(),o.name||i.add("name"),i.size||(c.value=!0,f.postMultipart("/api/user/admin/update/",{name:o.name,image:o.image}).then((function(e){"success"===e.data.message&&(d.commit("auth/SET_PROFILE",{profile:e.data.profile}),a("update:shouldShow",!1),a("success"),(0,y.c7)(y.j_.ADMIN_UPDATED))})).catch((function(e){console.log(e.response),(0,y.c7)(y.j_.GENERAL_ERROR)})).finally((function(){return c.value=!1})))}return(0,n.YP)((function(){return l.shouldShow}),(function(e){e&&(o.name=m.value.name,u.value=m.value.profile_image_url,o.image=null)})),function(t,l){return(0,n.wg)(),(0,n.j4)(w.Z,{"should-show":e.shouldShow,onClose:l[2]||(l[2]=function(e){return a("update:shouldShow",!1)})},{default:(0,n.w5)((function(){return[(0,n._)("form",{class:"w-80 px-4 pb-8",onSubmit:(0,n.iM)(b,["prevent"])},[(0,n._)("div",_,[(0,n._)("div",null,[(0,n.Wm)(h.Z,{"default-src":u.value,modelValue:o.image,"onUpdate:modelValue":l[0]||(l[0]=function(e){return o.image=e}),class:"w-40 h-40 object-cover rounded-full shadow mx-auto",label:"Profile Image"},null,8,["default-src","modelValue"]),u.value?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:p,type:"button",class:"mt-2 py-1 px-2 border border-amber-500 rounded-md text-amber-500"},[s.value?((0,n.wg)(),(0,n.iD)("span",S)):((0,n.wg)(),(0,n.iD)("span",D," Quita la imagen "))])):(0,n.kq)("",!0)]),(0,n.Wm)(v.Z,{modelValue:o.name,"onUpdate:modelValue":l[1]||(l[1]=function(e){return o.name=e}),label:"Name",min:4,max:24,"is-invalid":i.has("name")},null,8,["modelValue","is-invalid"])]),(0,n._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:c.value,type:"submit"},[c.value?((0,n.wg)(),(0,n.iD)("span",k)):((0,n.wg)(),(0,n.iD)("span",j," Update "))],8,E)],40,x)]})),_:1},8,["should-show"])}}};var O=a(7810),U=a(3465);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,l,r=[],o=!0,u=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==a.return||a.return()}finally{if(u)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var T=["onSubmit"],I={class:"space-y-8"},H={class:"flex space-x-4"},Z={class:"flex space-x-4"},N=(0,n._)("p",{class:"mb-2 text-slate-500"},"Access:",-1),W={class:"grid grid-cols-2 gap-x-4"},z=["value"],L={class:"capitalize"},M=["disabled"],F={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},G={key:1};const q={name:"AddStaffModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["update:shouldShow","success"],setup:function(e,t){var a=t.emit,l=(0,n.qj)({name:"",password:"",passwordConfirm:"",email:"",image:null}),r=(0,n.iH)(new Set),o=(0,n.qj)(new Set),u=(0,n.iH)(!1),s=(0,g.ZP)();function i(){o.clear(),Object.entries(l).forEach((function(e){var t=R(e,2),a=t[0],n=t[1];"image"!==a&&(n||o.add(a))})),/^\S+@\S+\.\S+$/.test(l.email)||o.add("email"),l.password!==l.passwordConfirm&&o.add("passwordConfirm"),o.size||(u.value=!0,s.postMultipart("/api/user/staff/create",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){P(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({name:l.name,email:l.email,image:l.image,password:l.password},Object.fromEntries(U.x.map((function(e){return[e,Number(r.value.has(e))]}))))).then((function(e){"success"===e.data.message&&(l.image=null,l.name="",l.email="",l.password="",l.passwordConfirm="",r.value=[],a("update:shouldShow",!1),a("success"),(0,y.c7)(y.j_.STAFF_CREATED))})).catch((function(e){422===e.response.status?(0,y.c7)(y.j_.USER_EXISTS):(0,y.c7)(y.j_.GENERAL_ERROR),console.log(e.response)})).finally((function(){return u.value=!1})))}return function(t,s){return(0,n.wg)(),(0,n.j4)(w.Z,{"should-show":e.shouldShow,onClose:s[6]||(s[6]=function(e){return a("update:shouldShow",!1)})},{default:(0,n.w5)((function(){return[(0,n._)("form",{class:"px-4 pb-8",onSubmit:(0,n.iM)(i,["prevent"])},[(0,n._)("div",I,[(0,n.Wm)(h.Z,{"is-invalid":o.has("image"),modelValue:l.image,"onUpdate:modelValue":s[0]||(s[0]=function(e){return l.image=e}),class:"w-40 h-40 object-cover rounded-full shadow mx-auto",label:"Profile Image"},null,8,["is-invalid","modelValue"]),(0,n._)("div",H,[(0,n.Wm)(v.Z,{modelValue:l.name,"onUpdate:modelValue":s[1]||(s[1]=function(e){return l.name=e}),label:"Name",min:4,max:24,"is-invalid":o.has("name")},null,8,["modelValue","is-invalid"]),(0,n.Wm)(v.Z,{"is-invalid":o.has("email"),modelValue:l.email,"onUpdate:modelValue":s[2]||(s[2]=function(e){return l.email=e}),label:"Email"},null,8,["is-invalid","modelValue"])]),(0,n._)("div",Z,[(0,n.Wm)(v.Z,{"is-invalid":o.has("password"),modelValue:l.password,"onUpdate:modelValue":s[3]||(s[3]=function(e){return l.password=e}),type:"password",min:6,label:"Password"},null,8,["is-invalid","modelValue"]),(0,n.Wm)(v.Z,{"is-invalid":o.has("passwordConfirm"),modelValue:l.passwordConfirm,"onUpdate:modelValue":s[4]||(s[4]=function(e){return l.passwordConfirm=e}),type:"password",label:"Confirm Password"},null,8,["is-invalid","modelValue"])]),(0,n._)("div",null,[N,(0,n._)("div",W,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,n.SU)(U.x),(function(e,t){return(0,n.wg)(),(0,n.iD)("div",{class:"flex space-x-2 items-center",key:t},[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":s[5]||(s[5]=function(e){return r.value=e}),value:e,class:"accent-amber-500"},null,8,z),[[n.e8,r.value]]),(0,n._)("p",L,(0,n.zw)(e),1)])})),128))])])]),(0,n._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:u.value,type:"submit"},[u.value?((0,n.wg)(),(0,n.iD)("span",F)):((0,n.wg)(),(0,n.iD)("span",G," Create "))],8,M)],40,T)]})),_:1},8,["should-show"])}}};var B={class:"px-4 pb-8 max-w-xs"},Y={class:"text-slate-900 mb-8 text-center"},$=(0,n._)("p",null,"Are you sure you want to delete the staff:",-1),K={class:"font-semibold"},Q=["disabled"],X={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},J={key:1};const ee={name:"RemoveStaffModal",props:{shouldShow:{type:Boolean,default:!1},staff:{type:Object,default:null}},emits:["update:shouldShow","success"],setup:function(e,t){var a=t.emit,l=e,r=(0,n.iH)(!1),o=(0,g.ZP)();function u(){l.staff&&(r.value=!0,o.authDelete("/api/user/staff/".concat(l.staff.id)).then((function(e){"success"===e.data.message&&(a("update:shouldShow",!1),a("success"),(0,y.c7)(y.j_.STAFF_DELETED))})).catch((function(e){console.log(e.response),(0,y.c7)(y.j_.GENERAL_ERROR)})).finally((function(){return r.value=!1})))}return function(t,l){return(0,n.wg)(),(0,n.j4)(w.Z,{shouldShow:e.shouldShow,onClose:l[0]||(l[0]=function(e){return a("update:shouldShow",!1)})},{default:(0,n.w5)((function(){var t;return[(0,n._)("div",B,[(0,n._)("div",Y,[$,(0,n._)("p",K,'"'+(0,n.zw)(null===(t=e.staff)||void 0===t?void 0:t.name)+'" ?',1)]),(0,n._)("button",{onClick:u,class:"bg-amber-500 py-2 text-white rounded-md w-full",disabled:r.value,type:"submit"},[r.value?((0,n.wg)(),(0,n.iD)("span",X)):((0,n.wg)(),(0,n.iD)("span",J," Yes "))],8,Q)])]})),_:1},8,["shouldShow"])}}};function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,l,r=[],o=!0,u=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==a.return||a.return()}finally{if(u)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return le(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return le(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var re={key:0,class:"py-8 flex justify-center w-80"},oe=[(0,n._)("div",{class:"w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"},null,-1)],ue=["onSubmit"],se={class:"space-y-8"},ie={key:0,class:"w-4 block h-4 border-2 my-1 border-b-transparent border-amber-500 animate-spin rounded-full"},ce={key:1},de=(0,n._)("p",{class:"mb-2 text-slate-500"},"Access:",-1),me={class:"grid grid-cols-2 gap-x-4"},fe=["value"],pe={class:"capitalize"},be=["disabled"],ve={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},he={key:1};const we={name:"EditStaffModal",props:{shouldShow:{type:Boolean,default:!1},staff:{type:Object,default:null}},emits:["update:shouldShow","success"],setup:function(e,t){var a=t.emit,l=e,r=(0,n.qj)({name:"",image:null}),o=(0,n.iH)(null),u=(0,n.iH)(!1),s=(0,n.iH)(new Set),i=(0,n.qj)(new Set),c=(0,n.iH)(!1),d=(0,n.iH)(!1),m=(0,g.ZP)();function f(){u.value||(u.value=!0,m.authDelete("/api/user/staff/image/".concat(l.staff.id)).then((function(e){"success"===e.data.message&&(u.value=!1,o.value=null)})))}function p(){i.clear(),r.name||i.add("name"),i.size||(c.value=!0,m.postMultipart("/api/user/staff/update/".concat(l.staff.id),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(Object(a),!0).forEach((function(t){ae(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({name:r.name,image:r.image},Object.fromEntries(U.x.map((function(e){return[e,Number(s.value.has(e))]}))))).then((function(e){"success"===e.data.message&&(a("update:shouldShow",!1),a("success"),(0,y.c7)(y.j_.STAFF_UPDATED))})).catch((function(e){console.log(e.response),(0,y.c7)(y.j_.GENERAL_ERROR)})).finally((function(){return c.value=!1})))}return(0,n.YP)((function(){return l.shouldShow}),(function(e){var t=l.staff;e&&t&&(r.name=t.name,r.image=null,o.value=t.profile_image_url,d.value=!0,s.value.clear(),m.authGet("/api/user/staff/".concat(t.id)).then((function(e){e.data&&(Object.entries(e.data).forEach((function(e){var t=ne(e,2),a=t[0];t[1]&&U.x.includes(a)&&s.value.add(a)})),d.value=!1)})))})),function(t,l){return(0,n.wg)(),(0,n.j4)(w.Z,{"should-show":e.shouldShow,onClose:l[3]||(l[3]=function(e){return a("update:shouldShow",!1)})},{default:(0,n.w5)((function(){return[d.value?((0,n.wg)(),(0,n.iD)("div",re,oe)):((0,n.wg)(),(0,n.iD)("form",{key:1,class:"px-4 pb-8",onSubmit:(0,n.iM)(p,["prevent"])},[(0,n._)("div",se,[(0,n._)("div",null,[(0,n.Wm)(h.Z,{"default-src":o.value,modelValue:r.image,"onUpdate:modelValue":l[0]||(l[0]=function(e){return r.image=e}),class:"w-40 h-40 object-cover rounded-full shadow mx-auto",label:"Profile Image"},null,8,["default-src","modelValue"]),o.value?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:f,type:"button",class:"mt-2 py-1 px-2 border border-amber-500 rounded-md text-amber-500"},[u.value?((0,n.wg)(),(0,n.iD)("span",ie)):((0,n.wg)(),(0,n.iD)("span",ce," Quita la imagen "))])):(0,n.kq)("",!0)]),(0,n.Wm)(v.Z,{modelValue:r.name,"onUpdate:modelValue":l[1]||(l[1]=function(e){return r.name=e}),label:"Name",min:4,max:24,"is-invalid":i.has("name")},null,8,["modelValue","is-invalid"]),(0,n._)("div",null,[de,(0,n._)("div",me,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,n.SU)(U.x),(function(e,t){return(0,n.wg)(),(0,n.iD)("div",{class:"flex space-x-2 items-center",key:t},[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=function(e){return s.value=e}),value:e,class:"accent-amber-500"},null,8,fe),[[n.e8,s.value]]),(0,n._)("p",pe,(0,n.zw)(e),1)])})),128))])])]),(0,n._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:c.value,type:"submit"},[c.value?((0,n.wg)(),(0,n.iD)("span",ve)):((0,n.wg)(),(0,n.iD)("span",he," Update "))],8,be)],40,ue))]})),_:1},8,["should-show"])}}};var ge={key:0},ye=(0,n._)("h5",{class:"text-xl text-slate-900 text-left mx-12"},"Staff:",-1),xe={class:"flex justify-end mb-4 space-x-4 px-12"},_e=(0,n.Uk)(" Add "),Se=["disabled"],De=(0,n.Uk)(" Edit "),Ee=["disabled"],ke=(0,n.Uk)(" Remove "),je={class:"grid"},Ae=(0,n._)("div",{class:"col-start-1 row-start-1 h-16 bg-gray-200"},null,-1),Oe={class:"mx-12 col-start-1 row-start-1"},Ue=(0,n._)("tr",{class:"text-slate-900 h-16 px-12"},[(0,n._)("th"),(0,n._)("th",{class:"text-left px-4"},"Name"),(0,n._)("th",{class:"text-left px-4"},"Email"),(0,n._)("th",{class:"text-left px-4"},"Created")],-1),Ce=["onClick"],Pe={class:"px-4 py-2"},Re={key:0,class:"text-slate-500 leading-10 w-10 text-center"},Ve={key:1,class:"rounded-full shadow overflow-hidden w-10 h-10"},Te={class:"px-4 py-2"},Ie={class:"px-4 py-2"},He={class:"px-4 py-2"};const Ze={name:"StaffTable",props:{data:{type:Array,default:null}},emits:["update"],setup:function(e,t){var a=t.emit,r=(0,n.iH)(null),o=(0,n.iH)(!1),u=(0,n.iH)(!1),s=(0,n.iH)(!1);(0,n.YP)([o,u,s],(function(e){e.some((function(e){return e}))&&scrollTo({top:0,behavior:"smooth"})}));return function(t,i){return e.data?((0,n.wg)(),(0,n.iD)("div",ge,[ye,(0,n._)("div",xe,[(0,n._)("button",{class:"rounded-md shadow-lg px-4 py-2 text-slate-500",onClick:i[0]||(i[0]=function(e){return o.value=!0})},[_e,(0,n.Wm)((0,n.SU)(O.GN),{icon:"fa fa-plus"})]),(0,n._)("button",{class:"rounded-md shadow-lg px-4 py-2 text-amber-500 disabled:opacity-50",disabled:null===r.value,onClick:i[1]||(i[1]=function(e){return s.value=!0})},[De,(0,n.Wm)((0,n.SU)(O.GN),{icon:"fa fa-pen"})],8,Se),(0,n._)("button",{class:"rounded-md shadow-lg px-4 py-2 text-red-600 disabled:opacity-50",disabled:null===r.value,onClick:i[2]||(i[2]=function(e){return u.value=!0})},[ke,(0,n.Wm)((0,n.SU)(O.GN),{icon:"fa fa-times"})],8,Ee)]),(0,n._)("div",je,[Ae,(0,n._)("table",Oe,[Ue,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.data,(function(e,t){return(0,n.wg)(),(0,n.iD)("tr",{key:t,class:(0,n.C_)(["hover:bg-slate-100 cursor-pointer border-b",r.value===e?"border-transparent bg-gray-100 shadow rounded":"border-amber-500"]),onClick:function(t){return r.value=e}},[(0,n._)("td",Pe,[r.value===e?((0,n.wg)(),(0,n.iD)("p",Re,[(0,n.Wm)((0,n.SU)(O.GN),{icon:"fa fa-check-square"})])):((0,n.wg)(),(0,n.iD)("div",Ve,[e.profile_image_url?((0,n.wg)(),(0,n.j4)(l.Z,{key:0,src:e.profile_image_url,"is-external":"",class:"block object-cover"},null,8,["src"])):((0,n.wg)(),(0,n.j4)(l.Z,{key:1,src:"/user.jpg",class:"block"}))]))]),(0,n._)("td",Te,(0,n.zw)(e.name),1),(0,n._)("td",Ie,(0,n.zw)(e.email),1),(0,n._)("td",He,(0,n.zw)((a=e.created_at,new Date(a).toLocaleDateString("es",{day:"numeric",year:"2-digit",month:"short",time:"full"}))),1)],10,Ce);var a})),128))])]),(0,n.Wm)(q,{onSuccess:i[3]||(i[3]=function(e){return a("update")}),"should-show":o.value,"onUpdate:should-show":i[4]||(i[4]=function(e){return o.value=e})},null,8,["should-show"]),(0,n.Wm)(ee,{onSuccess:i[5]||(i[5]=function(e){return a("update")}),"should-show":u.value,"onUpdate:should-show":i[6]||(i[6]=function(e){return u.value=e}),staff:r.value},null,8,["should-show","staff"]),(0,n.Wm)(we,{onSuccess:i[7]||(i[7]=function(e){return a("update")}),"should-show":s.value,"onUpdate:should-show":i[8]||(i[8]=function(e){return s.value=e}),staff:r.value},null,8,["should-show","staff"])])):(0,n.kq)("",!0)}}};var Ne={class:"mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow"},We={class:"mb-12 px-12"},ze=(0,n._)("h4",{class:"font-semibold mb-8 text-2xl"},"User Manager",-1),Le={class:"mb-12"},Me=(0,n._)("h5",{class:"text-slate-900 mb-4 text-xl"},"Your profile:",-1),Fe={class:"flex space-x-4 items-center"},Ge={class:"text-slate-500 mb-2"};const qe={name:"UserManager",setup:function(e){var t=(0,n.iH)(null),a=(0,n.iH)(null),o=(0,g.ZP)();function u(){o.authGet("/api/user/all").then((function(e){t.value=e.data.admins,a.value=e.data.staff}))}u();var s=(0,r.oR)(),i=(0,n.Fl)((function(){var e;return null===(e=s.state.auth)||void 0===e?void 0:e.profile})),c=(0,n.iH)(!1);return function(e,r){return(0,n.wg)(),(0,n.iD)("div",Ne,[(0,n._)("div",We,[ze,(0,n._)("div",Le,[Me,(0,n._)("div",Fe,[(0,n.SU)(i).profile_image_url?((0,n.wg)(),(0,n.j4)(l.Z,{key:0,src:(0,n.SU)(i).profile_image_url,class:"w-16 h-16 rounded-full shadow","is-external":""},null,8,["src"])):((0,n.wg)(),(0,n.j4)(l.Z,{key:1,src:"/user.jpg",class:"w-16 h-16 rounded-full shadow"})),(0,n._)("div",null,[(0,n._)("p",null,(0,n.zw)((0,n.SU)(i).name),1),(0,n._)("p",Ge,(0,n.zw)((0,n.SU)(i).email),1),(0,n._)("button",{class:"text-amber-500 hover:underline",onClick:r[0]||(r[0]=function(e){return c.value=!0})}," Edit ")])])]),(0,n.Wm)(b,{data:t.value},null,8,["data"])]),(0,n.Wm)(Ze,{onUpdate:u,data:a.value},null,8,["data"]),(0,n.Wm)(A,{shouldShow:c.value,"onUpdate:shouldShow":r[1]||(r[1]=function(e){return c.value=e})},null,8,["shouldShow"])])}}}}}]);