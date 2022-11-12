"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[606],{5345:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(8222),l=n(7810),r={key:0},u=(0,a._)("p",{class:"my-2 text-slate-500"},"Haga clic para cambiar la imagen",-1),o=["src"],i=["onClick"],s=["onDrop"],d={class:"text-xl mb-1 text-slate-500"},c=(0,a._)("p",{class:"text-slate-500 mb-2"},"Suelta un archivo o",-1),m={inheritAttrs:!1};const p=Object.assign(m,{name:"BaseImageInput",props:{label:{type:String,required:!0},modelValue:{type:Blob,default:null},defaultSrc:{type:String,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,m=e,p=(0,a.l1)(),f=Object.fromEntries(["drag","dragstart","dragend","dragover","dragenter","dragleave"].map((function(e){return[e,function(e){e.preventDefault(),e.stopPropagation()}]}))),b=(0,a.iH)(null),g=(0,a.iH)(!1);function v(e){if(e&&e.type.startsWith("image")){n("update:modelValue",e);var t=new FileReader;t.readAsDataURL(e),t.addEventListener("load",(function(e){b.value=e.target.result}))}}function h(e){var t;g.value=!1,v(null===(t=e.dataTransfer.files)||void 0===t?void 0:t[0])}function w(e){v(e.target.files[0])}function y(){n("update:modelValue",null),b.value=m.defaultSrc}return(0,a.YP)((function(){return m.modelValue}),(function(e){e?v(e):b.value=m.defaultSrc})),function(t,n){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.wy)((0,a._)("input",{type:"file",ref:"inputEl",onChange:w},null,544),[[a.F8,!1]]),(0,a._)("label",{class:(0,a.C_)(["py-1 px-2 rounded-t-md text-white",e.isInvalid?"bg-red-600":"bg-amber-500"])},(0,a.zw)(e.label),3),b.value||e.defaultSrc?((0,a.wg)(),(0,a.iD)("div",r,[u,(0,a._)("img",(0,a.dG)({src:b.value||e.defaultSrc},(0,a.SU)(p),{onClick:n[0]||(n[0]=function(e){return t.$refs.inputEl.click()})}),null,16,o),e.modelValue?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:(0,a.iM)(y,["prevent","stop"]),class:"py-1 text-amber-500 px-2 border border-amber-500 rounded-md mt-2"}," Quita la imagen ",8,i)):(0,a.kq)("",!0)])):((0,a.wg)(),(0,a.iD)("div",(0,a.dG)({key:1,class:["py-8 flex flex-col items-center rounded-b-md shadow bg-slate-100 ring-slate-200",[e.isInvalid?"bg-red-50":"bg-slate-100",{"ring-2":g.value}]],onDrop:(0,a.iM)(h,["prevent","stop"]),onDragover:n[2]||(n[2]=function(e){return g.value=!0}),onDragleave:n[3]||(n[3]=function(e){return g.value=!1})},(0,a.mx)((0,a.SU)(f))),[(0,a._)("p",d,[(0,a.Wm)((0,a.SU)(l.GN),{icon:"fa fa-upload"})]),c,(0,a._)("button",{class:"text-amber-500 hover:underline",onClick:n[1]||(n[1]=(0,a.iM)((function(e){return t.$refs.inputEl.click()}),["prevent"]))}," Haga clic para navegar ")],16,s))])}}})},6846:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(8222),l=n(7810),r={key:0,class:"z-20 bg-white my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"},u={class:"flex justify-end"};const o={name:"BaseModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["close"],setup:function(e,t){var n=t.emit,o=e,i=(0,a.iH)(!1),s=(0,a.iH)(0);return(0,a.YP)((function(){return o.shouldShow}),(function(e){e&&(s.value=document.body.scrollHeight)})),function(t,o){return(0,a.wg)(),(0,a.j4)(a.lR,{to:"#app-modals"},[(0,a.Wm)(a.uT,{name:"modal",onAfterEnter:o[2]||(o[2]=function(e){return i.value=!0})},{default:(0,a.w5)((function(){return[e.shouldShow?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"bg-gradient-to-b from-transparent to-slate-100 grid w-full justify-center z-10",style:(0,a.j5)({height:"".concat(s.value,"px")})},[(0,a.Wm)(a.uT,{name:"modal",onAfterLeave:o[1]||(o[1]=function(e){return n("close")})},{default:(0,a.w5)((function(){return[i.value?((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",u,[(0,a._)("button",{class:"text-xl text-slate-900 p-4",onClick:o[0]||(o[0]=function(e){return i.value=!1})},[(0,a.Wm)((0,a.SU)(l.GN),{icon:"fa fa-times"})])]),(0,a.WI)(t.$slots,"default")])):(0,a.kq)("",!0)]})),_:3})],4)):(0,a.kq)("",!0)]})),_:3})])}}}},752:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(8222);const l={name:"BaseTextField",props:{modelValue:{type:String,default:""},label:{type:String,default:""},isTextArea:{type:Boolean,default:!1},type:{type:String,default:"text"},min:{type:Number,default:null},max:{type:Number,default:null},isInvalid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e){var t=e.isTextArea?"textarea":"input",n=(0,a.iH)(!1);return function(l,r){return(0,a.wg)(),(0,a.iD)("div",{class:(0,a.C_)(["grid rounded-md border-t border-b-2 px-4 py-1",e.isInvalid?"border-red-600 bg-red-50":"border-amber-500 bg-slate-100"])},[((0,a.wg)(),(0,a.j4)((0,a.LL)((0,a.SU)(t)),{rows:"5",class:"row-start-1 col-start-1 bg-transparent focus:outline-none resize-none",type:e.type,minlength:e.min,maxlength:e.max,value:e.modelValue,onInput:r[0]||(r[0]=function(e){return l.$emit("update:modelValue",e.target.value)}),onFocus:r[1]||(r[1]=function(e){return n.value=!0}),onBlur:r[2]||(r[2]=function(e){return n.value=!1})},null,40,["type","minlength","maxlength","value"])),(0,a._)("p",{class:(0,a.C_)([{"scale-75 -translate-y-6 -translate-x-2 opacity-100":n.value||e.modelValue.length},"pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"])},(0,a.zw)(e.label),3)],2)}}}},606:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(8222),l=n(4318),r=n(752),u=n(5345),o=n(6846),i=n(4174);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,l,r=[],u=!0,o=!1;try{for(n=n.call(e);!(u=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);u=!0);}catch(e){o=!0,l=e}finally{try{u||null==n.return||n.return()}finally{if(o)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=["onSubmit"],m={class:"space-y-8 w-80"},p=["disabled"],f={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},b={key:1};const g={name:"AddModal",props:{shouldShow:{type:Boolean,default:!1}},emits:["update:shouldShow","item-added"],setup:function(e,t){var n=t.emit,d=(0,a.qj)({image:null,description:""}),g=(0,a.qj)(new Set),v=(0,a.iH)(!1),h=(0,l.ZP)();function w(){g.clear(),Object.entries(d).forEach((function(e){var t=s(e,2),n=t[0];return t[1]||g.add(n)})),g.size||(v.value=!0,h.postMultipart("/api/carousel/create",d).then((function(e){"success"===e.data.message&&(d.image=null,d.description="",n("update:shouldShow",!1),n("item-added"),(0,i.c7)(i.j_.CAROUSEL_IMAGE_CREATED))})).catch((function(e){console.log(e.response),(0,i.c7)(i.j_.GENERAL_ERROR)})).finally((function(){return v.value=!1})))}return function(t,l){return(0,a.wg)(),(0,a.j4)(o.Z,{"should-show":e.shouldShow,onClose:l[2]||(l[2]=function(e){return n("update:shouldShow",!1)})},{default:(0,a.w5)((function(){return[(0,a._)("form",{class:"px-4 pb-8",onSubmit:(0,a.iM)(w,["prevent"])},[(0,a._)("div",m,[(0,a.Wm)(u.Z,{"is-invalid":g.has("image"),modelValue:d.image,"onUpdate:modelValue":l[0]||(l[0]=function(e){return d.image=e}),class:"w-full h-40 object-cover",label:"Image"},null,8,["is-invalid","modelValue"]),(0,a.Wm)(r.Z,{"is-invalid":g.has("description"),modelValue:d.description,"onUpdate:modelValue":l[1]||(l[1]=function(e){return d.description=e}),label:"Description","is-text-area":""},null,8,["is-invalid","modelValue"])]),(0,a._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:v.value,type:"submit"},[v.value?((0,a.wg)(),(0,a.iD)("span",f)):((0,a.wg)(),(0,a.iD)("span",b," Create "))],8,p)],40,c)]})),_:1},8,["should-show"])}}};var v=n(2674),h={class:"px-4 pb-8 max-w-xs"},w=(0,a._)("p",{class:"text-slate-900 mb-8 text-center"}," Are you sure you want to delete that item? ",-1),y=["disabled"],x={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},_={key:1};const S={name:"RemoveModal",props:{carouselImageId:{type:Number,default:null}},emits:["cancel","success"],setup:function(e,t){var n=t.emit,r=e,u=(0,a.iH)(!1),s=(0,l.ZP)();function d(){r.carouselImageId&&(u.value=!0,s.authDelete("/api/carousel/".concat(r.carouselImageId)).then((function(e){"success"===e.data.message&&(n("success"),(0,i.c7)(i.j_.CAROUSEL_IMAGE_DELETED))})).catch((function(e){console.log(e.response),(0,i.c7)(i.j_.GENERAL_ERROR)})).finally((function(){return u.value=!1})))}return function(t,l){return(0,a.wg)(),(0,a.j4)(o.Z,{shouldShow:!!e.carouselImageId,onClose:l[0]||(l[0]=function(e){return n("cancel")})},{default:(0,a.w5)((function(){return[(0,a._)("div",h,[w,(0,a._)("button",{onClick:d,class:"bg-amber-500 py-2 text-white rounded-md w-full",disabled:u.value,type:"submit"},[u.value?((0,a.wg)(),(0,a.iD)("span",x)):((0,a.wg)(),(0,a.iD)("span",_," Yes "))],8,y)])]})),_:1},8,["shouldShow"])}}};var k=["onSubmit"],j={class:"space-y-8"},D=["disabled"],I={key:0,class:"h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"},E={key:1};const C={name:"EditModal",props:{carouselImageObj:{type:Object,default:null}},emits:["cancel","success"],setup:function(e,t){var n=t.emit,s=e,d=(0,a.qj)({image:null,description:""}),c=(0,a.iH)(!1),m=(0,a.iH)(null),p=(0,a.qj)(new Set),f=(0,l.ZP)();function b(){if(s.carouselImageObj){if(p.clear(),d.description||p.add("description"),p.size)return;c.value=!0,f.postMultipart("/api/carousel/update/".concat(s.carouselImageObj.id),d).then((function(e){"success"===e.data.message&&(n("success"),(0,i.c7)(i.j_.CAROUSEL_IMAGE_UPDATED))})).catch((function(e){console.log(e.response),(0,i.c7)(i.j_.GENERAL_ERROR)})).finally((function(){return c.value=!1}))}}return(0,a.YP)((function(){return s.carouselImageObj}),(function(e){e&&(m.value=e.image_url,d.description=e.description,d.image=null)})),function(t,l){return(0,a.wg)(),(0,a.j4)(o.Z,{"should-show":!!e.carouselImageObj,onClose:l[2]||(l[2]=function(e){return n("cancel")})},{default:(0,a.w5)((function(){return[(0,a._)("form",{class:"px-4 pb-8",onSubmit:(0,a.iM)(b,["prevent"])},[(0,a._)("div",j,[(0,a.Wm)(u.Z,{"default-src":m.value,class:"w-full h-40 object-cover",label:"Image",modelValue:d.image,"onUpdate:modelValue":l[0]||(l[0]=function(e){return d.image=e})},null,8,["default-src","modelValue"]),(0,a.Wm)(r.Z,{modelValue:d.description,"onUpdate:modelValue":l[1]||(l[1]=function(e){return d.description=e}),label:"Description","is-text-area":""},null,8,["modelValue"])]),(0,a._)("button",{class:"bg-amber-500 py-2 mt-8 text-white rounded-md w-full",disabled:c.value,type:"submit"},[c.value?((0,a.wg)(),(0,a.iD)("span",I)):((0,a.wg)(),(0,a.iD)("span",E," Update "))],8,D)],40,k)]})),_:1},8,["should-show"])}}};var A={class:"mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow"},V={class:"px-12"},R=(0,a._)("h4",{class:"font-semibold mb-8 text-2xl"},"Image Carousel Manager",-1),H={key:0,class:"py-8 flex justify-center"},M=[(0,a._)("div",{class:"w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"},null,-1)],O={key:1},U={key:0,class:"grid grid-cols-2 gap-4 mb-4"},Z={class:"text-slate-900 text-center mb-4"},W={class:"col-start-2 flex justify-center space-x-2"},L=["onClick"],B=["onClick"],G={key:1,class:"p-4 text-center bg-slate-100 rounded-md shadow text-slate-900"};const T={name:"CarouselManager",setup:function(e){var t=(0,l.ZP)(),n=(0,a.iH)(!0),r=(0,a.iH)([]),u=function(){t.get("/api/carousel").then((function(e){n.value=!1,r.value=e.data}))};u();var o=(0,a.iH)(!1),i=(0,a.iH)(null),s=(0,a.iH)(null);function d(){r.value=r.value.filter((function(e){return e.id!==i.value})),i.value=null}function c(){s.value=null,u()}return function(e,t){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",V,[R,n.value?((0,a.wg)(),(0,a.iD)("div",H,M)):((0,a.wg)(),(0,a.iD)("div",O,[r.value.length?((0,a.wg)(),(0,a.iD)("ul",U,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.value,(function(e,t){return(0,a.wg)(),(0,a.iD)("li",{key:t,class:"px-4 rounded-md shadow py-8"},[(0,a.Wm)(v.Z,{src:e.image_url,class:"w-full h-40 object-cover rounded-md","is-external":""},null,8,["src"]),(0,a._)("div",Z,(0,a.zw)(e.description),1),(0,a._)("div",W,[(0,a._)("button",{class:"px-2 py-1 border border-amber-500 rounded-md text-amber-500",onClick:function(t){return i.value=e.id}}," Remove ",8,L),(0,a._)("button",{class:"px-2 py-1 border border-amber-500 rounded-md text-amber-500",onClick:function(t){return s.value=e}}," Edit ",8,B)])])})),128))])):((0,a.wg)(),(0,a.iD)("p",G," Ningún elemento para mostrar aquí ")),(0,a._)("button",{class:"py-2 px-8 bg-amber-500 text-white mt-8 rounded-md",onClick:t[0]||(t[0]=function(e){return o.value=!0})}," Add an item ")]))]),(0,a.Wm)(g,{"should-show":o.value,"onUpdate:should-show":t[1]||(t[1]=function(e){return o.value=e}),onItemAdded:u},null,8,["should-show"]),(0,a.Wm)(S,{"carousel-image-id":i.value,onCancel:t[2]||(t[2]=function(e){return i.value=null}),onSuccess:d},null,8,["carousel-image-id"]),(0,a.Wm)(C,{"carousel-image-obj":s.value,onCancel:t[3]||(t[3]=function(e){return s.value=null}),onSuccess:c},null,8,["carousel-image-obj"])])}}}}}]);