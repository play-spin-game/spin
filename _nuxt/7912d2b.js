(window.webpackJsonp=window.webpackJsonp||[]).push([[152,86,127],{303:function(t,e,n){},307:function(t,e,n){"use strict";n.r(e);n(12);var o=n(6),r=n(7),l=n(8),c=n(2),d=n(5),f=(n(10),n(0));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(c.a)(t);if(e){var r=Object(c.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},v=function(t){Object(r.a)(n,t);var e=h(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(f.d);m([Object(f.c)({type:Array,default:[]})],v.prototype,"breadcrumb",void 0);var y=v=m([Object(f.a)({})],v),w=(n(308),n(4)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"d-flex align-items-center flex-wrap m-0 p-0 font-12 font-500 text-theme-secondary"},[t._l(t.breadcrumb,(function(e,o){return[e.active?t._e():n("li",{key:o+"list",staticClass:"d-flex align-items-center text-inherit breadcrum"},[n("router-link",{staticClass:"d-inline-block text-clip line-height-2 text-theme-primary text-blue-v2:hover",attrs:{to:e.to}},[t._v(t._s(e.text))])],1),t._v(" "),e.active?t._e():n("svg",{key:o+"icon",staticClass:"ml-8 mr-8",attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M11 7.99165L5.99167 13L4.8125 11.8217L8.64583 7.98832L4.8125 4.15497L5.99167 2.98247L11 7.99165Z",fill:"currentColor"}})]),t._v(" "),e.active?n("li",{key:o,staticClass:"text-theme-secondary breadcrum"},[t._v("\n      "+t._s(e.text)+"\n    ")]):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n(303)},450:function(t,e,n){"use strict";n.r(e);n(12);var o=n(17),r=n(6),l=n(9),c=n(7),d=n(8),f=n(2),h=n(5),m=(n(59),n(10),n(43),n(25),n(66),n(41),n(0)),v=n(75);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var w=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(c.a)(d,t);var e,n=y(d);function d(){var t;return Object(r.a)(this,d),(t=n.apply(this,arguments)).photoName="",t.formSubmittedSuccess=!1,t.dialogToggle=!1,t.isSubmitting=!1,t.resetTimeOut=null,t.formInput={email:"",description:""},t.formError={email:"",description:""},t}return Object(l.a)(d,[{key:"selectImage",value:function(){this.formInput.file=this.$refs.image.click()}},{key:"imageSelected",value:function(t){this.$emit("input",t.target.files[0]),this.formInput.file=this.$refs.image.files[0],this.photoName=this.formInput.file.name}},{key:"onContactSubmit",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,data,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isSubmitting=!0,e={headers:{"content-type":"multipart/form-data"}},(data=new FormData).append("email",this.formInput.email),data.append("description",this.formInput.description),data.append("gameId","0"),data.append("fraudUsers[0]","0"),data.append("fraudUsers[1]","0"),data.append("category","Fair Play"),this.formInput.file&&data.append("files",this.formInput.file),t.prev=10,t.next=13,this.$axios.$post("".concat(this.$config.PAPI_URL,"/reportedIssues"),data,e);case 13:t.sent.status.success&&(this.formSubmittedSuccess=!0,this.dialogToggle=!0,this.resetTimeOut=setTimeout((function(){n.formSubmittedSuccess=!1,n.dialogToggle=!1,n.formInput.email="",n.formInput.description="",delete n.formInput.file,n.photoName="",n.resetTimeOut=null;var t=document.querySelector("#description-contact");t&&(t.value="")}),5e3)),t.next=22;break;case 17:t.prev=17,t.t0=t.catch(10),console.log(t.t0),this.formSubmittedSuccess=!1,this.dialogToggle=!0;case 22:this.isSubmitting=!1;case 23:case"end":return t.stop()}}),t,this,[[10,17]])}))),function(){return e.apply(this,arguments)})},{key:"onAction",value:function(t){"dialog:closed"===t.action&&(this.formSubmittedSuccess&&(this.resetTimeOut&&(clearTimeout(this.resetTimeOut),this.resetTimeOut=null),this.formSubmittedSuccess=!1,this.dialogToggle=!1,this.formInput.email="",this.formInput.description="",delete this.formInput.file,this.photoName=""),this.dialogToggle=!1)}}]),d}(m.d),_=x=w([Object(m.a)({components:{AppDialog:v.default}})],x),C=n(4),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("form",{staticClass:"mt-32",on:{submit:function(e){return e.preventDefault(),t.onContactSubmit.apply(null,arguments)}}},[n("MdTextField",{attrs:{required:!0,uid:"email-contact'",type:"email",name:"email",placeholder:"Email Id (we will respond on this)","helper-text":t.formError.email},model:{value:t.formInput.email,callback:function(e){t.$set(t.formInput,"email",e)},expression:"formInput.email"}}),t._v(" "),n("MdTextField",{staticClass:"mt-24",attrs:{rows:5,required:!0,uid:"description-contact",type:"textarea",name:"description",placeholder:"Explain your issue","helper-text":t.formError.description},model:{value:t.formInput.description,callback:function(e){t.$set(t.formInput,"description",e)},expression:"formInput.description"}}),t._v(" "),n("div",{staticClass:"d-flex flex-col mt-24"},[n("div",{staticClass:"text-field h-64 border-radius-12 position-relative d-inline-flex w-full duration-300 transition-all text-field--outlined text-field--invalid"},[n("input",{ref:"image",staticClass:"z-index-2 hidden-file-input w-full h-full position-absolute top-0 left-0 opacity-0",staticStyle:{cursor:"pointer"},attrs:{id:"file_upload",type:"file",name:"file_upload",accept:"image/*"},on:{change:t.imageSelected}}),t._v(" "),n("div",{staticClass:"position-absolute d-flex pl-16 align-items-center w-full h-full top-0 right-0"},[n("div",{staticClass:"flex-shrink-0"},[n("p",{staticClass:"mb-0"},[t._v("Upload app screenshots")]),t._v(" "),n("p",{staticClass:"mb-0 text-ellipsis overflow-hidden font-14 text-theme-secondary font-500",staticStyle:{width:"200px"}},[t._v(t._s(t.photoName?t.photoName:"Optional"))])]),t._v(" "),n("div",{staticClass:"flex-1"}),t._v(" "),n("div",{staticClass:"d-flex flex-shrink-0 justify-content-center border-radius-circle h-32 w-48",staticStyle:{"min-width":"0"}},[n("img",{staticClass:"icon-button__icon w-24 h-auto overflow-hidden",attrs:{loading:"lazy",height:"20",width:"20",src:t.$config.CDN_URL+"/img/svg/file-upload.svg",alt:"file upload"}})])])])]),t._v(" "),n("div",{staticClass:"d-flex flex-nowrap mt-24 md:mt-32 row md:col pl-0 pr-0 ml-0 mr-0"},[n("router-link",{staticClass:"md:d-flex text-underline d-none align-items-center justify-content-center button--lg border-radius-12 border-1 border-transparent text-white h-48 button pl-72 pr-72",staticStyle:{width:"274px"},attrs:{to:"/contact-us/"}},[n("span",{staticClass:"button__label font-600 font-14 md:font-16 line-height-20 md:line-height-24 line-height-24"},[t._v("Cancel Ticket")])]),t._v(" "),n("router-link",{staticClass:"md:d-none text-underline d-flex align-items-center justify-content-center button--lg border-radius-12 border-1 border-transparent text-white h-48 button pl-24 pr-24",attrs:{to:"/contact-us/"}},[n("span",{staticClass:"button__label font-600 font-14 md:font-16 line-height-20 md:line-height-24 line-height-24"},[t._v("Cancel Ticket")])]),t._v(" "),t.isSubmitting?n("button",{staticClass:"md:d-flex d-none align-items-center justify-content-center button--lg border-radius-12 border-1 border-white text-white h-48 button gradiant-green pl-72 pr-72 md:ml-24 ml-16",staticStyle:{width:"274px"},attrs:{disabled:""}},[n("span",{staticClass:"apk-download-button__bg position-absolute w-full h-full top-0 left-0"}),t._v(" "),n("img",{attrs:{src:t.$config.CDN_URL+"/img/loader.svg",height:"24",width:"24",alt:"loader"}})]):n("button",{staticClass:"md:d-flex d-none align-items-center justify-content-center button--lg border-radius-12 border-1 border-white text-white h-48 button gradiant-green pl-72 pr-72 md:ml-24 ml-16",staticStyle:{width:"274px"}},[n("span",{staticClass:"apk-download-button__bg position-absolute w-full h-full top-0 left-0"}),t._v(" "),n("span",{staticClass:"button__label font-600 font-14 md:font-16 line-height-20 md:line-height-24"},[t._v("Submit Ticket")])]),t._v(" "),t.isSubmitting?n("button",{staticClass:"md:d-none d-flex align-items-center justify-content-center button--lg border-radius-12 border-1 border-white text-white h-48 button gradiant-green pl-72 pr-72 md:ml-24 ml-16",staticStyle:{width:"148px"},attrs:{disabled:""}},[n("span",{staticClass:"apk-download-button__bg position-absolute w-full h-full top-0 left-0"}),t._v(" "),n("img",{attrs:{src:t.$config.CDN_URL+"/img/loader.svg",height:"24",width:"24",alt:"loader"}})]):n("button",{staticClass:"md:d-none d-flex align-items-center justify-content-center button--lg border-radius-12 border-1 border-white text-white h-48 button gradiant-green pl-72 pr-72 md:ml-24 ml-16",staticStyle:{width:"148px"}},[n("span",{staticClass:"apk-download-button__bg position-absolute w-full h-full top-0 left-0"}),t._v(" "),n("span",{staticClass:"button__label font-600 font-14 md:font-16 line-height-20 md:line-height-24"},[t._v("Submit Ticket")])])],1)],1),t._v(" "),n("portal",{attrs:{to:"popup-dialog"}},[n("app-dialog",{staticClass:"dialog--bottom-sheet",attrs:{"close-on-button-click":!1,show:t.dialogToggle},on:{"update:show":function(e){t.dialogToggle=e},"dialog:action":t.onAction},scopedSlots:t._u([{key:"surface",fn:function(){return[n("div",{staticClass:"marketing-landing-popup p-16 md:p-56 d-flex flex-col bg-theme-surface align-items-center justify-content-center border-1 border-radius-12 border-white"},[n("div",{staticClass:"w-full align-items-center d-flex flex-row md:flex-col-reverse"},[n("p",{staticClass:"font-24 flex-1 mt-0 md:mt-24"},[t._v("\n              "+t._s(t.formSubmittedSuccess?"Your ticket has been submitted.":"Your ticket cannot be submitted.")+"\n            ")]),t._v(" "),t.formSubmittedSuccess?n("img",{staticClass:"flex-shrink-0 w-40 md:w-56 h-auto overflow-hidden",attrs:{width:"56",height:"56",src:t.$config.CDN_URL+"/img/svg/email-verified.svg",alt:"success"}}):n("img",{staticClass:"flex-shrink-0 w-40 md:w-56 h-auto overflow-hidden",attrs:{width:"56",height:"56",src:t.$config.CDN_URL+"/img/svg/error-circle.svg",alt:"failed"}})]),t._v(" "),n("p",{staticClass:"md:font-20 mt-16 w-full font-16 font-500 text-theme-secondary text-left md:text-center"},[t._v("\n            "+t._s(t.formSubmittedSuccess?"We will get back to you shortly.":"Please try again.")+"\n          ")]),t._v(" "),n("button",{staticClass:"d-flex align-items-center justify-content-center button--lg border-radius-12 border-1 border-white text-white h-48 button gradiant-green pl-64 pr-64 mt-32 md:mt-48",attrs:{"data-dialog-action":"dialog:closed"}},[n("span",{staticClass:"apk-download-button__bg position-absolute w-full h-full top-0 left-0"}),t._v(" "),n("span",{staticClass:"button__label font-500 font-16"},[t._v("Okay")])])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppDialog:n(107).default})},495:function(t,e,n){},541:function(t,e,n){"use strict";n(495)},601:function(t,e,n){"use strict";n.r(e);n(12);var o=n(6),r=n(9),l=n(7),c=n(8),d=n(2),f=n(5),h=(n(10),n(0)),m=n(450),v=n(307);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var w=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(l.a)(n,t);var e=y(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"breadcrumb",get:function(){return[{text:"Contact us",to:"/contact-us/"},{text:"Submit ticket",active:!0}]}},{key:"mounted",value:function(){this.$imgObserver()}},{key:"beforeDestroy",value:function(){this.$destroyImgObserver()}}]),n}(h.d),_=x=w([Object(h.a)({components:{ContactForm:m.default,AppBreadcrumbs:v.default},head:function(){return{title:"Submit Ticket",meta:[{hid:"description",name:"description",content:"Submit Ticket - Playship"}]}}})],x),C=(n(541),n(4)),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pt-40 pb-0 md:pt-96 md:pb-96"},[n("div",{staticClass:"container ticket-form-container pb-64 md:pb-96 gutter-4 md:gutter-3"},[n("div",{staticClass:"row flex-nowrap position-relative"},[n("div",{staticClass:"d-flex flex-1",attrs:{id:"app-article-container"}},[n("div",{staticClass:"w-full"},[n("app-breadcrumbs",{staticStyle:{"margin-left":"-8px"},attrs:{breadcrumb:t.breadcrumb}}),t._v(" "),n("main",[n("article",[n("h1",{staticClass:"font-20 mt-32 md:font-48 font-500 line-height-28 md:line-height-56 pb-16 mb-0",attrs:{"data-aos":"animation-scale-y"}},[t._v("Submit Ticket")]),t._v(" "),n("div",{staticClass:"content",attrs:{"data-aos":"animation-translate-y","data-aos-delay":"200"}},[n("p",{staticClass:"md:font-20 font-16 text-theme-secondary font-500 md:line-height-32 line-height-24"},[t._v("At Playship, we are always open to hearing what our users have to say about us. Yes, we are weird like that. We don’t like anyone to mince their words. This is why we take it on the chin when the pain puri bhaiya says one shouldn’t make the puri so spicy, or when the filter coffee shop owner gives us looks for giving him too much business. Neither do our bosses sugarcoat their feedback nor do the juniors sweeten their opinions. We are weird like that, which is why we can take almost any feedback that you give us. Having said that, why is the world so against constructive criticism? Isn’t it rather helpful? Where you, the user, tell us what you genuinely feel, and we the passionate tech nerds incorporate it in the app that you love so much.")]),t._v(" "),n("p",{staticClass:"mt-32 md:font-20 font-16 text-theme-secondary font-500 md:line-height-32 line-height-24"},[t._v("So think of yourself as your favourite teacher, or the strict parent or the chirpy sibling or the ever-caring friend. The one who does not hesitate from telling us things the way they are. The one who tells us when the app doesn’t live up to the standards or if any service or feature just wasn’t up to the mark.")]),t._v(" "),n("p",{staticClass:"mt-32 md:font-20 font-16 text-theme-secondary font-500 md:line-height-32 line-height-24"},[t._v("So, go ahead, if you have any feedback, areas of concern, or issues with Playship, don’t hesitate. Just feel free to share it with us. And if you just want to compliment us, we are open to hearing that too from you.")]),t._v(" "),n("h4",{staticClass:"mt-32 md:font-24 font-16 text-white font-500 md:line-height-32 line-height-24"},[t._v("How to raise a ticket?")]),t._v(" "),n("p",{staticClass:"mt-20 md:font-20 font-16 text-theme-secondary font-500 md:line-height-32 line-height-24"},[t._v("At the end of every game, you will get an option to raise a ticket for various reasons. If you feel any of the reasons fits your query, just mark it, add app screenshots if necessary, and you’re good to go. We guarantee 100% fair play on Playship and the ticket system helps us keep it that way.")]),t._v(" "),n("contact-form")],1)])])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=7912d2b.js.map