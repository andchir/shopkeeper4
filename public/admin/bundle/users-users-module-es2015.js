(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4p3S":function(t,e,i){"use strict";i.d(e,"a",function(){return h});var o=i("XNiG"),s=i("1G5W"),n=i("RwQR"),r=i("7AsP"),a=i("Y2tp"),l=i("fXoL"),c=i("1kSV"),d=i("sYmb");const b=["table"];let h=(()=>{class t{constructor(t,e,i,s){this.dataService=t,this.activeModal=e,this.modalService=i,this.translateService=s,this.items=[],this.loading=!1,this.selectedIds=[],this.collectionSize=0,this.queryOptions=new n.a("name","asc",1,10,0,0),this.destroyed$=new o.a}ngOnInit(){this.getList(),this.afterInit()}afterInit(){}onSearchClear(){this.getList()}onModalClose(t){}onSearchWordUpdate(t){if(void 0!==t)return this.queryOptions.search_word=t,this.queryOptions.page=1,void(this.queryOptions.search_word?this.getList():this.onSearchClear());clearTimeout(this.searchTimer),this.searchTimer=setTimeout(()=>{this.queryOptions.page=1,this.getList()},700)}getModalElementId(t){return["modal",t||0].join("-")}setModalInputs(t,e=!1,i=""){const o=void 0!==t&&!e;this.modalRef.componentInstance.modalTitle=this.getLangString(o?"EDITING":"ADD"),this.modalRef.componentInstance.modalId=i,this.modalRef.componentInstance.itemId=t||0,this.modalRef.componentInstance.isItemCopy=e||!1,this.modalRef.componentInstance.isEditMode=o}modalOpen(t,e=!1){const i=this.getModalElementId(t);if(window.document.body.classList.add("modal-open"),window.document.getElementById(i)){const t=window.document.getElementById(i),e=t.previousElementSibling;return t.classList.add("d-block"),t.classList.remove("modal-minimized"),void e.classList.remove("d-none")}this.modalRef=this.modalService.open(this.getModalContent(),{size:"lg",backdrop:"static",keyboard:!1,backdropClass:"modal-backdrop-left45",windowClass:"modal-left45",container:"#modals-container"}),this.setModalInputs(t,e,i),this.modalRef.result.then(t=>{this.destroyed$.isStopped||(this.onModalClose(t),this.getList())},t=>{this.destroyed$.isStopped||(this.onModalClose(t),t&&["submit","updated"].indexOf(t)>-1&&this.getList())})}deleteItemConfirm(t){this.modalRef=this.modalService.open(a.b),this.modalRef.componentInstance.modalTitle=this.getLangString("CONFIRM"),this.modalRef.componentInstance.modalContent=this.getLangString("YOU_SURE_YOU_WANT_DELETE"),this.modalRef.result.then(e=>{"accept"===e&&this.deleteItem(t)})}getLangString(t){return this.translateService.store.translations[this.translateService.currentLang]&&this.translateService.store.translations[this.translateService.currentLang][t]||t}confirmAction(t){return this.modalRef=this.modalService.open(a.b),this.modalRef.componentInstance.modalTitle=this.getLangString("CONFIRM"),this.modalRef.componentInstance.modalContent=t,this.modalRef.result}blockSelected(){0!==this.selectedIds.length?this.dataService.actionBatch(this.selectedIds,"block").subscribe(t=>{this.clearSelected(),this.getList()},t=>this.showAlert(t.error||this.getLangString("ERROR"))):this.showAlert(this.getLangString("NOTHING_IS_SELECTED"))}deleteSelected(){0!==this.selectedIds.length?this.confirmAction(this.getLangString("YOU_SURE_YOU_WANT_DELETE_SELECTED")).then(t=>{"accept"===t&&this.dataService.actionBatch(this.selectedIds,"delete").subscribe(t=>{this.clearSelected(),this.getList()},t=>this.showAlert(t.error||this.getLangString("ERROR")))}):this.showAlert(this.getLangString("NOTHING_IS_SELECTED"))}showAlert(t){this.modalRef=this.modalService.open(a.a),this.modalRef.componentInstance.modalContent=t,this.modalRef.componentInstance.modalTitle=this.getLangString("ERROR"),this.modalRef.componentInstance.messageType="error"}deleteItem(t){this.confirmAction(this.getLangString("YOU_SURE_YOU_WANT_DELETE")).then(e=>{"accept"===e&&this.dataService.deleteItem(t).subscribe(t=>{this.getList()},t=>{t.error&&this.showAlert(t.error)})})}clearSelected(){this.table&&this.table.clearSelected()}actionRequest(t){switch(t[0]){case"edit":this.modalOpen(t[1]);break;case"copy":this.modalOpen(t[1],!0);break;case"delete":this.deleteItem(t[1]);break;case"changeQuery":this.getList()}}getList(){this.loading=!0,this.dataService.getListPage(this.queryOptions).pipe(Object(s.a)(this.destroyed$)).subscribe({next:t=>{this.items=t.items,this.collectionSize=t.total,this.loading=!1},error:t=>{this.items=[],this.collectionSize=0,t.error&&this.showAlert(t.error),this.loading=!1}})}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}}return t.title="",t.\u0275fac=function(e){return new(e||t)(l.Ob(r.a),l.Ob(c.b),l.Ob(c.h),l.Ob(d.d))},t.\u0275dir=l.Jb({type:t,viewQuery:function(t,e){if(1&t&&l.Mc(b,3),2&t){let t;l.yc(t=l.fc())&&(e.table=t.first)}}}),t})()},ot8b:function(t,e,i){"use strict";i.d(e,"a",function(){return h});var o=i("3Pt+"),s=i("XNiG"),n=i("1G5W"),r=i("7AsP"),a=i("qbpQ"),l=i("fXoL"),c=i("1kSV"),d=i("sYmb");const b=["formEl"];let h=(()=>{class t{constructor(t,e,i,o,n,r){this.fb=t,this.activeModal=e,this.translateService=i,this.systemNameService=o,this.dataService=n,this.elRef=r,this.modalId="",this._formFieldsErrors={},this.submitted=!1,this.loading=!1,this.dataLoaded=!1,this.closeReason="canceled",this.files={},this.formFields=[],this.arrayFields={},this.isSaveButtonDisabled=!1,this.localeDefault="",this.localeCurrent="",this.localeFieldsAllowed=[],this.localePreviousValues={},this.uniqueId="",this.destroyed$=new s.a}set formErrors(t){for(const e in t)if(t.hasOwnProperty(e)){const t=this.getControl(this.form,null,e);t&&t.setErrors({incorrect:!0})}this._formFieldsErrors=t}get formErrors(){return this._formFieldsErrors}ngOnInit(){this.uniqueId=this.createUniqueId(),this.elRef&&this.getRootElement().setAttribute("id",this.modalId),this.onBeforeInit(),this.buildForm(),this.isEditMode||this.isItemCopy?this.getModelData().then(()=>{this.onAfterGetData()}):this.onAfterGetData(),this.onAfterInit()}onBeforeInit(){}onAfterInit(){}onAfterGetData(){this.dataLoaded=!0,this.buildControls(this.form,this.formFields)}getSystemFieldName(){return""}getLangString(t){return this.translateService.store.translations[this.translateService.currentLang][t]||t}getModelData(){return this.loading=!0,new Promise((t,e)=>{this.dataService.getItem(this.itemId).pipe(Object(n.a)(this.destroyed$)).subscribe({next:e=>{if(this.isItemCopy){e.id=null;const t=this.getSystemFieldName();t&&(e[t]="")}Object.assign(this.model,e),this.loading=!1,t(e)},error:t=>{this.errorMessage=t.error||this.getLangString("ERROR"),this.loading=!1,e(t)}})})}buildForm(t="form",e=null,i=null,o="model"){e||(e=this.formFields),this[t]=this.fb.group(this.buildControls(null,e,o)),this[t].valueChanges.pipe(Object(n.a)(this.destroyed$)).subscribe(()=>this.onValueChanged(t,i))}buildControls(t=null,e=[],i="model"){const o={};return e.forEach(e=>{const s=t?this.getControl(t,e):null;let n=null;if(i&&this[i]?(this[i].options||(this[i].options={}),n=0===e.name.indexOf("options_")?this[i].options[e.name.substr(8)]||null:this[i][e.name]||null):n=null,s)if(e.disabled&&s.disable(),e.children){const t=n,i=s;i.clear(),t.forEach((t,o)=>{const s=this.getFormFieldByName(e.name),n=this.buildControls(null,s.children,null);i.push(this.fb.group(n))}),i.patchValue(t)}else s.setValue(n);else e.children?(o[e.name]=this.fb.array([]),this.createArrayFieldsProperty(e.name)):o[e.name]=this.fb.control({value:n,disabled:e.disabled||!1},e.validators)}),o}onValueChanged(t="form",e=null){this[t]&&(e||(e=this.formErrors),this[t].valid&&(this.errorMessage=""),Object.keys(this[t].value).forEach(i=>{e[i]="";const o=this.getControl(this[t],null,i);if(o&&!o.valid&&o.errors){let t="";Object.keys(o.errors).forEach(e=>{t+=(t?" ":"")+this.getLangString("INVALID_"+e.toUpperCase())}),e[i]=t}}))}getFormFieldByName(t){const e=this.formFields.filter(e=>e.name===t);return e.length>0?e[0]:null}createArrayFieldsProperty(t){Object.defineProperty(this.arrayFields,t,{get:()=>this.form?this.form.get(t):null})}getControl(t,e,i){return t?t.get(i||e.name):null}focusFormError(){setTimeout(()=>{this.formEl.nativeElement.querySelector(".form-control.is-invalid")&&this.formEl.nativeElement.querySelector(".form-control.is-invalid").focus()},1)}formGroupMarkTouched(t){Object.keys(t.controls).forEach(e=>{t.controls[e].markAsTouched(),t.controls[e]instanceof o.c&&Array.from(this.form.controls[e].controls).forEach(t=>{this.formGroupMarkTouched(t)})})}getSaveRequest(t){return t.id||"root"===t.name?this.dataService.update(t):this.dataService.create(t)}getFormData(){const t=this.form.value;return t.id=this.model.id||0,void 0!==this.model.translations&&(t.translations=this.model.translations||null),t}arrayFieldDelete(t,e,i){i&&i.preventDefault(),this.arrayFields[t].removeAt(e)}arrayFieldAdd(t,e){e&&e.preventDefault();const i=this.getFormFieldByName(t);if(!i)return;const o=this.buildControls(null,i.children,null);this.arrayFields[t].push(this.fb.group(o))}generateName(t,e,i=null){e&&e.preventDefault(),i||(i=this.form);const o=this.getControl(i,null,"title").value||"";t.name=this.systemNameService.generateName(o),this.getControl(i,null,"name").setValue(t.name)}closeModal(t){t&&t.preventDefault(),this.close(this.closeReason)}close(t,e){e&&e.preventDefault(),"submit"===t?this.activeModal.close(t):this.activeModal.dismiss(t)}minimize(t){t&&t.preventDefault(),window.document.body.classList.remove("modal-open");const e=this.getRootElement(),i=e.previousElementSibling;e.classList.remove("d-block"),e.classList.add("modal-minimized"),i.classList.add("d-none")}maximize(t){t&&t.preventDefault(),window.document.body.classList.add("modal-open");const e=this.getRootElement(),i=e.previousElementSibling;e.classList.add("d-block"),e.classList.remove("modal-minimized"),i.classList.remove("d-none")}save(t=!1,e){e&&e.preventDefault(),this.onSubmit(t)}saveFiles(t){if(0===Object.keys(this.files).length)return void this.close("submit");const e=new FormData;for(const i in this.files)this.files.hasOwnProperty(i)&&this.files[i]instanceof File&&e.append(i,this.files[i],this.files[i].name);e.append("itemId",String(t)),this.dataService.postFormData(e).pipe(Object(n.a)(this.destroyed$)).subscribe({next:()=>{this.close("submit")},error:t=>{this.errorMessage=t.error||this.getLangString("ERROR"),this.submitted=!1,this.loading=!1}})}onSubmit(t=!1){if(this.formGroupMarkTouched(this.form),!this.form.valid)return this.errorMessage=this.getLangString("PLEASE_FIX_FORM_ERRORS"),void this.focusFormError();this.errorMessage="",this.loading=!0,this.submitted=!0;const e=this.getFormData();this.getSaveRequest(e).pipe(Object(n.a)(this.destroyed$)).subscribe({next:e=>{Object.keys(this.files).length>0?this.saveFiles(e._id||e.id):t&&this.close("submit"),e&&e.id&&(this.model.id=e.id),this.closeReason="updated",this.loading=!1,this.submitted=!1},error:t=>{t.error&&(this.errorMessage=t.error),t.errors&&(this.formErrors=t.errors,this.errorMessage=this.getLangString("PLEASE_FIX_FORM_ERRORS")),this.loading=!1,this.submitted=!1}})}onLocaleSwitch(){if(this.localeCurrent===this.localeDefault)return this.localeFieldsAllowed.forEach(t=>{this.model[t]=this.localePreviousValues[t],this.getControl(this.form,null,t).setValue(this.localePreviousValues[t])}),void(this.isSaveButtonDisabled=!1);this.model.translations||(this.model.translations={}),this.isSaveButtonDisabled=!0,this.localeFieldsAllowed.forEach(t=>{this.localePreviousValues[t]=this.getControl(this.form,null,t).value,this.model.translations[t]?(this.model[t]=this.model.translations[t][this.localeCurrent]||"",this.getControl(this.form,null,t).setValue(this.model[t])):(this.model[t]="",this.getControl(this.form,null,t).setValue(""))})}saveTranslations(t){t&&t.preventDefault(),this.localeFieldsAllowed.forEach(t=>{this.getControl(this.form,null,t)&&this.getControl(this.form,null,t).value?(this.model.translations[t]||(this.model.translations[t]={}),this.model.translations[t][this.localeCurrent]=this.getControl(this.form,null,t).value):this.model.translations[t]&&(this.model.translations[t][this.localeCurrent]&&delete this.model.translations[t][this.localeCurrent],0===Object.keys(this.model.translations[t]).length&&delete this.model.translations[t])}),this.localeCurrent=this.localeDefault,this.onLocaleSwitch()}emailValidator(t){return t.value?/\S+@\S+\.\S+/.test(t.value)?void 0:{email:!0}:{required:!0}}getRootElement(){return this.elRef.nativeElement.parentNode.parentNode.parentNode}createUniqueId(){return Math.random().toString(36).substr(2,9)}displayToggle(t,e,i){i&&i.preventDefault(),t.style.display=(e=e||"none"===t.style.display)?"block":"none"}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(o.e),l.Ob(c.b),l.Ob(d.d),l.Ob(a.a),l.Ob(r.a),l.Ob(l.l))},t.\u0275cmp=l.Ib({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&l.Mc(b,1),2&t){let t;l.yc(t=l.fc())&&(e.formEl=t.first)}},inputs:{modalTitle:"modalTitle",itemId:"itemId",modalId:"modalId",isItemCopy:"isItemCopy",isEditMode:"isEditMode"},decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})()},zrcO:function(t,e,i){"use strict";i.r(e),i.d(e,"UsersModule",function(){return j});var o=i("ofXK"),s=i("d2mR"),n=i("tyNb"),r=i("3Pt+"),a=i("1G5W"),l=i("lJxs"),c=i("LvDl");class d{constructor(t,e,i,o,s,n,r,a,l,c,d){this.id=t,this.email=e,this.fullName=i,this.roles=o,this.isActive=s,this.options=n,this.role=r,this.phone=a,this.password=l,this.confirmPassword=c,this.apiToken=d}}var b=i("4p3S"),h=i("qbpQ"),m=i("JIr8"),u=i("7AsP"),f=i("fXoL"),p=i("tk/3");let g=(()=>{class t extends u.a{constructor(t){super(t),this.setRequestUrl("/admin/users")}getRolesList(){const t=this.getRequestUrl()+"/roles";return this.http.get(t,{headers:this.headers}).pipe(Object(m.a)(this.handleError()))}createApiToken(){const t=this.getRequestUrl()+"/create_api_token";return this.http.post(t,{},{headers:this.headers}).pipe(Object(m.a)(this.handleError()))}}return t.\u0275fac=function(e){return new(e||t)(f.bc(p.a))},t.\u0275prov=f.Kb({token:t,factory:t.\u0275fac}),t})();var v=i("wgQU"),T=i("RwQR"),C=i("ot8b"),I=i("1kSV"),S=i("sYmb"),U=i("hecf");function y(t,e){if(1&t&&(f.Ub(0,"div",52),f.Ic(1),f.Tb()),2&t){const t=f.gc();f.Cb(1),f.Kc(" ",t.formErrors.email," ")}}function E(t,e){if(1&t&&(f.Ub(0,"div",52),f.Ic(1),f.Tb()),2&t){const t=f.gc();f.Cb(1),f.Kc(" ",t.formErrors.fullName," ")}}function O(t,e){if(1&t&&(f.Ub(0,"div",52),f.Ic(1),f.Tb()),2&t){const t=f.gc();f.Cb(1),f.Kc(" ",t.formErrors.phone," ")}}function w(t,e){if(1&t&&(f.Sb(0),f.Ub(1,"option",53),f.Ic(2),f.Tb(),f.Rb()),2&t){const t=e.$implicit;f.Cb(1),f.nc("value",t.name),f.Cb(1),f.Jc(t.title)}}function R(t,e){if(1&t&&(f.Ub(0,"div",52),f.Ic(1),f.Tb()),2&t){const t=f.gc();f.Cb(1),f.Kc(" ",t.formErrors.password," ")}}function L(t,e){if(1&t&&(f.Ub(0,"div",52),f.Ic(1),f.Tb()),2&t){const t=f.gc();f.Cb(1),f.Kc(" ",t.formErrors.password," ")}}function k(t,e){if(1&t&&(f.Ub(0,"div",52),f.Ic(1),f.Tb()),2&t){const t=f.gc();f.Cb(1),f.Kc(" ",t.formErrors.confirmPassword," ")}}const A=function(t){return{"is-invalid":t}};function M(t,e){if(1&t){const t=f.Vb();f.Ub(0,"tr",65),f.Ub(1,"td"),f.Pb(2,"input",66),f.Tb(),f.Ub(3,"td"),f.Pb(4,"input",67),f.Tb(),f.Ub(5,"td",68),f.Pb(6,"input",69),f.Tb(),f.Ub(7,"td",68),f.Ub(8,"button",70),f.ec("click",function(i){f.Ac(t);const o=e.index;return f.gc(3).arrayFieldDelete("options",o,i)}),f.hc(9,"translate"),f.Pb(10,"i",11),f.Tb(),f.Tb(),f.Tb()}if(2&t){const t=e.$implicit;f.nc("formGroupName",e.index+""),f.Cb(2),f.nc("ngClass",f.sc(7,A,t.controls.name.touched&&!t.controls.name.valid)),f.Cb(2),f.nc("ngClass",f.sc(9,A,t.controls.title.touched&&!t.controls.title.valid)),f.Cb(2),f.nc("ngClass",f.sc(11,A,t.controls.value.touched&&!t.controls.value.valid)),f.Cb(2),f.oc("ngbTooltip",f.ic(9,5,"DELETE"))}}function N(t,e){if(1&t&&(f.Ub(0,"tbody"),f.Gc(1,M,11,13,"tr",64),f.Tb()),2&t){const t=f.gc(2);f.Cb(1),f.nc("ngForOf",t.arrayFields.options.controls)}}function P(t,e){if(1&t){const t=f.Vb();f.Ub(0,"div",54),f.Ub(1,"table",55),f.Ub(2,"colgroup"),f.Pb(3,"col",56),f.Pb(4,"col",56),f.Pb(5,"col",57),f.Pb(6,"col",58),f.Tb(),f.Ub(7,"thead"),f.Ub(8,"tr"),f.Ub(9,"th"),f.Ic(10),f.hc(11,"translate"),f.Tb(),f.Ub(12,"th"),f.Ic(13),f.hc(14,"translate"),f.Tb(),f.Ub(15,"th"),f.Ic(16),f.hc(17,"translate"),f.Tb(),f.Pb(18,"th"),f.Tb(),f.Tb(),f.Gc(19,N,2,1,"tbody",59),f.Ub(20,"tfoot"),f.Ub(21,"tr",60),f.Ub(22,"td",61),f.Ub(23,"button",62),f.ec("click",function(e){return f.Ac(t),f.gc().arrayFieldAdd("options",e)}),f.Pb(24,"i",63),f.Ic(25," \xa0 "),f.Ub(26,"span"),f.Ic(27),f.hc(28,"translate"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb()}if(2&t){const t=f.gc();f.Cb(10),f.Jc(f.ic(11,5,"SYSTEM_NAME")),f.Cb(3),f.Jc(f.ic(14,7,"NAME")),f.Cb(3),f.Jc(f.ic(17,9,"VALUE")),f.Cb(3),f.nc("ngIf",t.arrayFields.options),f.Cb(8),f.Jc(f.ic(28,11,"ADD"))}}function D(t,e){if(1&t){const t=f.Vb();f.Ub(0,"div",71),f.Ub(1,"button",72),f.ec("click",function(){return f.Ac(t),f.gc().errorMessage=""}),f.Ub(2,"span",73),f.Ic(3,"\xd7"),f.Tb(),f.Tb(),f.Ic(4),f.Tb()}if(2&t){const t=f.gc();f.Cb(4),f.Kc(" ",t.errorMessage," ")}}function F(t,e){if(1&t&&(f.Ub(0,"div",74),f.Ub(1,"a",75),f.Ub(2,"span"),f.Ic(3),f.hc(4,"translate"),f.Tb(),f.Tb(),f.Tb()),2&t){const t=f.gc();f.Cb(1),f.qc("href","",t.baseUrl,"?_switch_user=",t.model.email,"",f.Cc),f.Cb(2),f.Jc(f.ic(4,3,"IMPERSONATION"))}}const _=function(t){return{"no-events":t}},q=function(t){return{"form-control-search-clear":t}};let x=(()=>{class t extends C.a{constructor(t,e,i,o,s,n,a){super(t,e,i,o,s,n),this.fb=t,this.activeModal=e,this.translateService=i,this.systemNameService=o,this.dataService=s,this.elRef=n,this.appSettings=a,this.allowImpersonation=!1,this.model=new d(0,"","",[],!0,[]),this.formFields=[{name:"email",validators:[r.v.required,this.emailValidator]},{name:"fullName",validators:[r.v.required]},{name:"phone",validators:[]},{name:"role",validators:[r.v.required]},{name:"isActive",validators:[]},{name:"password",validators:[]},{name:"confirmPassword",validators:[]},{name:"apiToken",validators:[]},{name:"options",validators:[],children:[{name:"name",validators:[r.v.required]},{name:"title",validators:[r.v.required]},{name:"value",validators:[r.v.required]}]}]}onBeforeInit(){if(!this.isEditMode){const t=Object(c.findIndex)(this.formFields,{name:"password"});t>-1&&(this.formFields[t].validators.push(r.v.required),this.formFields[t+1].validators.push(r.v.required))}this.baseUrl=v.a.getBaseUrl(),this.getUserRoles()}onAfterGetData(){this.buildControls(this.form,this.formFields),this.isEditMode&&this.appSettings.isSuperAdmin&&this.appSettings.settings.userEmail!==this.model.email&&(this.allowImpersonation=!0)}getUserRoles(){this.userRoles$=this.dataService.getRolesList().pipe(Object(a.a)(this.destroyed$),Object(l.a)(t=>t.roles))}clearApiToken(t){t&&t.preventDefault(),this.getControl(this.form,null,"apiToken").setValue("")}generateApiToken(t){t&&t.preventDefault(),this.loading=!0,this.dataService.createApiToken().pipe(Object(a.a)(this.destroyed$)).subscribe({next:t=>{this.getControl(this.form,null,"apiToken").setValue(t.token),this.loading=!1},error:t=>{this.errorMessage=t.error||this.getLangString("ERROR"),this.loading=!1}})}}return t.\u0275fac=function(e){return new(e||t)(f.Ob(r.e),f.Ob(I.b),f.Ob(S.d),f.Ob(h.a),f.Ob(g),f.Ob(f.l),f.Ob(v.a))},t.\u0275cmp=f.Ib({type:t,selectors:[["app-modal-user"]],features:[f.Bb([]),f.zb],decls:119,vars:96,consts:[[1,"position-relative","modal-on-maximized"],[1,"tabs-top"],["type","button",1,"btn","btn-outline-primary","btn-sm","d-block",3,"disabled","click"],[1,"icon-cross","mr-1"],[1,"icon-minimize","mr-1"],[1,"modal-header","d-block"],[1,"position-relative","modal-on-minimized"],[1,"pos-absolute-right"],["type","button",1,"btn","btn-no-border","btn-sm-sm",3,"title","click"],[1,"icon-maximize"],["type","button",1,"btn","btn-no-border","btn-sm-sm","ml-1",3,"title","click"],[1,"icon-cross"],[1,"modal-title","text-overflow","mr-5"],["method","post",3,"formGroup","ngClass","ngSubmit"],["formEl",""],[1,"modal-body","py-0"],[1,"row"],[1,"col-lg-6"],[1,"form-group","form-group-message"],[1,"label-filled"],["type","text","autocomplete","off","formControlName","email",1,"form-control",3,"ngClass"],["class","alert alert-danger",4,"ngIf"],["type","text","autocomplete","off","formControlName","fullName",1,"form-control",3,"ngClass"],["type","text","formControlName","phone","autocomplete","off",1,"form-control"],["formControlName","role",1,"custom-select",3,"ngClass"],[4,"ngFor","ngForOf"],["type","password","autocomplete","off","formControlName","password",1,"form-control",3,"ngClass"],["type","password","autocomplete","off","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"input-group"],["type","text","name","apiToken","autocomplete","off","formControlName","apiToken",1,"form-control"],[1,"input-group-append"],["type","button","container","body",1,"btn","btn-secondary",3,"ngbTooltip","click"],[1,"icon-reload"],[1,"form-group","mt-0","mt-lg-4"],[1,"card","card-body","p-2","pl-3"],[1,"custom-control","custom-checkbox","m-0"],["type","checkbox","value","1","formControlName","isActive",1,"custom-control-input",3,"id"],[1,"custom-control-label",3,"for"],["activeIds","accordion-user-options",1,"ngb-accordion",3,"closeOthers"],["id","accordion-user-options",3,"title"],["ngbPanelContent",""],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"modal-footer","display-block"],["class","float-right",4,"ngIf"],[1,"btn-group","mr-1"],["type","button",1,"btn","btn-success","btn-wide",3,"disabled","click"],["ngbDropdown","","role","group","placement","top-right",1,"btn-group"],["type","button","ngbDropdownToggle","",1,"btn","btn-success","dropdown-toggle-split",3,"disabled"],["ngbDropdownMenu","",1,"dropdown-menu"],["type","button","ngbDropdownItem","",3,"click"],["type","button",1,"btn","btn-secondary","btn-wide",3,"click"],[1,"alert","alert-danger"],[3,"value"],["formArrayName","options"],[1,"table","table-bordered","mb-0"],["width","27%"],["width","39%"],["width","7%"],[4,"ngIf"],[1,"bg-faded"],["colspan","4",1,"text-center"],["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],[1,"icon-plus"],[3,"formGroupName",4,"ngFor","ngForOf"],[3,"formGroupName"],["type","text","formControlName","name",1,"form-control","form-control-sm",3,"ngClass"],["type","text","formControlName","title",1,"form-control","form-control-sm",3,"ngClass"],[1,"text-center"],["type","text","formControlName","value",1,"form-control","form-control-sm",3,"ngClass"],["type","button",1,"btn","btn-secondary","btn-sm",3,"ngbTooltip","click"],[1,"alert","alert-danger","mt-3","mb-0"],["type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"float-right"],[1,"btn","btn-primary",3,"href"]],template:function(t,e){1&t&&(f.Ub(0,"div",0),f.Ub(1,"div",1),f.Ub(2,"button",2),f.ec("click",function(t){return e.closeModal(t)}),f.Pb(3,"i",3),f.Ub(4,"span"),f.Ic(5),f.hc(6,"translate"),f.Tb(),f.Tb(),f.Ub(7,"button",2),f.ec("click",function(t){return e.minimize(t)}),f.Pb(8,"i",4),f.Ub(9,"span"),f.Ic(10),f.hc(11,"translate"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(12,"div",5),f.Ub(13,"div",6),f.Ub(14,"div",7),f.Ub(15,"button",8),f.ec("click",function(t){return e.maximize(t)}),f.hc(16,"translate"),f.Pb(17,"i",9),f.Tb(),f.Ub(18,"button",10),f.ec("click",function(t){return e.closeModal(t)}),f.hc(19,"translate"),f.Pb(20,"i",11),f.Tb(),f.Tb(),f.Tb(),f.Ub(21,"h4",12),f.Ic(22),f.Tb(),f.Tb(),f.Ub(23,"form",13,14),f.ec("ngSubmit",function(){return e.onSubmit()}),f.Ub(25,"div",15),f.Ub(26,"div",16),f.Ub(27,"div",17),f.Ub(28,"div",18),f.Ub(29,"label",19),f.Ic(30),f.hc(31,"translate"),f.Tb(),f.Pb(32,"input",20),f.Gc(33,y,2,1,"div",21),f.Tb(),f.Tb(),f.Ub(34,"div",17),f.Ub(35,"div",18),f.Ub(36,"label",19),f.Ic(37),f.hc(38,"translate"),f.Tb(),f.Pb(39,"input",22),f.Gc(40,E,2,1,"div",21),f.Tb(),f.Tb(),f.Tb(),f.Ub(41,"div",16),f.Ub(42,"div",17),f.Ub(43,"div",18),f.Ub(44,"label",19),f.Ic(45),f.hc(46,"translate"),f.Tb(),f.Pb(47,"input",23),f.Gc(48,O,2,1,"div",21),f.Tb(),f.Tb(),f.Ub(49,"div",17),f.Ub(50,"div",18),f.Ub(51,"label",19),f.Ic(52),f.hc(53,"translate"),f.Tb(),f.Ub(54,"select",24),f.Gc(55,w,3,2,"ng-container",25),f.hc(56,"async"),f.Tb(),f.Gc(57,R,2,1,"div",21),f.Tb(),f.Tb(),f.Tb(),f.Ub(58,"div",16),f.Ub(59,"div",17),f.Ub(60,"div",18),f.Ub(61,"label",19),f.Ic(62),f.hc(63,"translate"),f.Tb(),f.Pb(64,"input",26),f.Gc(65,L,2,1,"div",21),f.Tb(),f.Tb(),f.Ub(66,"div",17),f.Ub(67,"div",18),f.Ub(68,"label",19),f.Ic(69),f.hc(70,"translate"),f.Tb(),f.Pb(71,"input",27),f.Gc(72,k,2,1,"div",21),f.Tb(),f.Tb(),f.Tb(),f.Ub(73,"div",16),f.Ub(74,"div",17),f.Ub(75,"div",28),f.Ub(76,"label",19),f.Ic(77),f.hc(78,"translate"),f.Tb(),f.Ub(79,"div",29),f.Pb(80,"input",30),f.Ub(81,"div",31),f.Ub(82,"button",32),f.ec("click",function(t){return e.clearApiToken(t)}),f.hc(83,"translate"),f.Pb(84,"i",11),f.Tb(),f.Ub(85,"button",32),f.ec("click",function(t){return e.generateApiToken(t)}),f.hc(86,"translate"),f.Pb(87,"i",33),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(88,"div",17),f.Ub(89,"div",28),f.Ub(90,"div",34),f.Ub(91,"div",35),f.Ub(92,"div",36),f.Pb(93,"input",37),f.Ub(94,"label",38),f.Ic(95),f.hc(96,"translate"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(97,"ngb-accordion",39),f.Ub(98,"ngb-panel",40),f.hc(99,"translate"),f.Gc(100,P,29,13,"ng-template",41),f.Tb(),f.Tb(),f.Gc(101,D,5,1,"div",42),f.Tb(),f.Ub(102,"div",43),f.Gc(103,F,5,5,"div",44),f.Ub(104,"div",45),f.Ub(105,"button",46),f.ec("click",function(t){return e.save(!0,t)}),f.Ub(106,"span"),f.Ic(107),f.hc(108,"translate"),f.Tb(),f.Tb(),f.Ub(109,"div",47),f.Pb(110,"button",48),f.Ub(111,"div",49),f.Ub(112,"button",50),f.ec("click",function(t){return e.save(!1,t)}),f.Ic(113),f.hc(114,"translate"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(115,"button",51),f.ec("click",function(t){return e.closeModal(t)}),f.Ub(116,"span"),f.Ic(117),f.hc(118,"translate"),f.Tb(),f.Tb(),f.Tb(),f.Tb()),2&t&&(f.Cb(2),f.nc("disabled",e.submitted),f.Cb(3),f.Jc(f.ic(6,46,"CLOSE")),f.Cb(2),f.nc("disabled",e.submitted),f.Cb(3),f.Jc(f.ic(11,48,"MINIMIZE")),f.Cb(5),f.nc("title",f.ic(16,50,"EXPAND")),f.Cb(3),f.nc("title",f.ic(19,52,"CLOSE")),f.Cb(4),f.Jc(e.modalTitle),f.Cb(1),f.nc("formGroup",e.form)("ngClass",f.sc(84,_,e.submitted)),f.Cb(2),f.Gb("loading",e.loading),f.Cb(5),f.Kc(" ",f.ic(31,54,"EMAIL")," "),f.Cb(2),f.nc("ngClass",f.sc(86,A,e.form.controls.email.touched&&!e.form.controls.email.valid)),f.Cb(1),f.nc("ngIf",e.formErrors.email),f.Cb(4),f.Kc(" ",f.ic(38,56,"FULL_NAME")," "),f.Cb(2),f.nc("ngClass",f.sc(88,A,e.form.controls.fullName.touched&&!e.form.controls.fullName.valid)),f.Cb(1),f.nc("ngIf",e.formErrors.fullName),f.Cb(5),f.Kc(" ",f.ic(46,58,"PHONE")," "),f.Cb(3),f.nc("ngIf",e.formErrors.phone),f.Cb(4),f.Kc(" ",f.ic(53,60,"ROLE")," "),f.Cb(2),f.nc("ngClass",f.sc(90,A,e.form.controls.role.touched&&!e.form.controls.role.valid)),f.Cb(1),f.nc("ngForOf",f.ic(56,62,e.userRoles$)),f.Cb(2),f.nc("ngIf",e.formErrors.password),f.Cb(5),f.Kc(" ",f.ic(63,64,"PASSWORD")," "),f.Cb(2),f.nc("ngClass",f.sc(92,A,e.form.controls.password.touched&&!e.form.controls.password.valid)),f.Cb(1),f.nc("ngIf",e.formErrors.password),f.Cb(4),f.Kc(" ",f.ic(70,66,"CONFIRM_PASSWORD")," "),f.Cb(2),f.nc("ngClass",f.sc(94,A,e.form.controls.confirmPassword.touched&&!e.form.controls.confirmPassword.valid)),f.Cb(1),f.nc("ngIf",e.formErrors.confirmPassword),f.Cb(5),f.Kc(" ",f.ic(78,68,"API_TOKEN")," "),f.Cb(2),f.Gb("is-invalid",e.formErrors.name),f.Cb(3),f.oc("ngbTooltip",f.ic(83,70,"CLEAR")),f.Cb(3),f.oc("ngbTooltip",f.ic(86,72,"GENERATE")),f.Cb(8),f.pc("id","fieldIsActive",e.model.id,""),f.Cb(1),f.pc("for","fieldIsActive",e.model.id,""),f.Cb(1),f.Jc(f.ic(96,74,"ACTIVE")),f.Cb(2),f.nc("closeOthers",!0),f.Cb(1),f.nc("title",f.ic(99,76,"OPTIONS")),f.Cb(3),f.nc("ngIf",e.errorMessage),f.Cb(2),f.nc("ngIf",e.allowImpersonation),f.Cb(2),f.nc("disabled",e.submitted),f.Cb(2),f.Jc(f.ic(108,78,"SAVE_AND_CLOSE")),f.Cb(3),f.nc("disabled",e.submitted),f.Cb(3),f.Jc(f.ic(114,80,"SAVE")),f.Cb(4),f.Jc(f.ic(118,82,"CLOSE")))},directives:[r.w,r.o,r.h,o.n,r.b,r.n,r.g,o.p,r.u,o.o,I.v,r.a,I.a,I.p,I.q,I.d,I.g,I.f,I.e,r.q,r.x,r.d,r.i],pipes:[S.c,o.b],encapsulation:2}),t})();const G=[{path:"",redirectTo:"/users/",pathMatch:"full"},{path:":userEmail",component:(()=>{class t extends b.a{constructor(t,e,i,o,s,n){super(t,e,i,o),this.dataService=t,this.activeModal=e,this.modalService=i,this.translateService=o,this.route=s,this.router=n,this.queryOptions=new T.a("id","desc",1,10,0,0),this.tableFields=[{name:"id",sortName:"id",title:"ID",outputType:"text",outputProperties:{}},{name:"email",sortName:"email",title:"EMAIL",outputType:"text",outputProperties:{}},{name:"fullName",sortName:"fullName",title:"FULL_NAME",outputType:"text",outputProperties:{}},{name:"role",sortName:"roles",title:"ROLE",outputType:"userRole",outputProperties:{}},{name:"createdDate",sortName:"createdDate",title:"DATE_TIME",outputType:"date",outputProperties:{format:"dd/MM/y H:mm:s"}},{name:"isActive",sortName:"isActive",title:"STATUS",outputType:"boolean",outputProperties:{}}]}ngOnInit(){this.afterInit()}afterInit(){this.route.paramMap.subscribe(t=>{this.queryOptions.search_word=t.get("userEmail"),this.getList()})}onSearchClear(){this.route.snapshot.url&&this.route.snapshot.url[0].path?this.router.navigate(["/users",""]):this.getList()}setModalInputs(t,e=!1,i=""){const o=void 0!==t&&!e;this.modalRef.componentInstance.modalTitle=o?`${this.getLangString("USER")} #${t}`:this.getLangString("ADD_USER"),this.modalRef.componentInstance.modalId=i,this.modalRef.componentInstance.itemId=t||0,this.modalRef.componentInstance.isItemCopy=e||!1,this.modalRef.componentInstance.isEditMode=o}getModalElementId(t){return["modal","user",t||0].join("-")}getModalContent(){return x}changeRequest(t){}}return t.title="USERS",t.\u0275fac=function(e){return new(e||t)(f.Ob(g),f.Ob(I.b),f.Ob(I.h),f.Ob(S.d),f.Ob(n.a),f.Ob(n.c))},t.\u0275cmp=f.Ib({type:t,selectors:[["app-shk-users"]],features:[f.Bb([g]),f.zb],decls:37,vars:29,consts:[[1,"card"],[1,"card-body"],[1,"icon-head"],[1,"mb-3"],[1,"float-md-left"],[1,"form-control-search","mb-2","mb-md-0",3,"ngClass"],["type","text",1,"form-control","min-width250",3,"placeholder","ngModel","ngModelChange"],[3,"click"],[1,"float-md-right"],["ngbDropdown","","placement","bottom-right",1,"d-block","d-md-inline-block","mb-2","mb-md-0"],["ngbDropdownToggle","",1,"btn","btn-info","d-block","d-md-inline-block","width-100","width-md-auto"],["ngbDropdownMenu",""],[1,"dropdown-item",3,"click"],["type","button",1,"btn","btn-success","btn-wide","d-block","d-md-inline-block","width-100","width-md-auto","ml-md-2","mb-2","mb-md-0",3,"click"],[1,"icon-plus"],[1,"float-left"],[1,"clearfix"],[1,"min-height400"],[3,"items","selectedIds","collectionSize","queryOptions","tableFields","loading","isCloneAllowed","selectedIdsChange","loadingChange","actionRequest","changeRequest"],["table",""]],template:function(t,e){1&t&&(f.Ub(0,"div",0),f.Ub(1,"div",1),f.Ub(2,"h3"),f.Pb(3,"i",2),f.Ic(4),f.hc(5,"translate"),f.Tb(),f.Pb(6,"hr"),f.Ub(7,"div",3),f.Ub(8,"div",4),f.Ub(9,"div",5),f.Ub(10,"input",6),f.ec("ngModelChange",function(t){return e.queryOptions.search_word=t})("ngModelChange",function(){return e.onSearchWordUpdate()}),f.hc(11,"translate"),f.Tb(),f.Ub(12,"span",7),f.ec("click",function(){return e.onSearchWordUpdate("")}),f.Tb(),f.Tb(),f.Tb(),f.Ub(13,"div",8),f.Ub(14,"div",9),f.Ub(15,"button",10),f.Ub(16,"span"),f.Ic(17),f.hc(18,"translate"),f.Tb(),f.Tb(),f.Ub(19,"div",11),f.Ub(20,"button",12),f.ec("click",function(){return e.blockSelected()}),f.Ic(21),f.hc(22,"translate"),f.Tb(),f.Ub(23,"button",12),f.ec("click",function(){return e.deleteSelected()}),f.Ic(24),f.hc(25,"translate"),f.Tb(),f.Tb(),f.Tb(),f.Ub(26,"button",13),f.ec("click",function(){return e.modalOpen()}),f.Pb(27,"i",14),f.Ic(28," \xa0 "),f.Ub(29,"span"),f.Ic(30),f.hc(31,"translate"),f.Tb(),f.Tb(),f.Tb(),f.Pb(32,"div",15),f.Pb(33,"div",16),f.Tb(),f.Ub(34,"div",17),f.Ub(35,"app-table",18,19),f.ec("selectedIdsChange",function(t){return e.selectedIds=t})("loadingChange",function(t){return e.loading=t})("actionRequest",function(t){return e.actionRequest(t)})("changeRequest",function(t){return e.changeRequest(t)}),f.Tb(),f.Tb(),f.Tb(),f.Tb()),2&t&&(f.Cb(4),f.Kc(" ",f.ic(5,15,"USERS")," "),f.Cb(5),f.nc("ngClass",f.sc(27,q,!!e.queryOptions.search_word)),f.Cb(1),f.pc("placeholder","",f.ic(11,17,"SEARCH"),"..."),f.nc("ngModel",e.queryOptions.search_word),f.Cb(7),f.Jc(f.ic(18,19,"BATCH_ACTIONS")),f.Cb(4),f.Jc(f.ic(22,21,"DISABLE_ENABLE")),f.Cb(3),f.Jc(f.ic(25,23,"DELETE")),f.Cb(6),f.Jc(f.ic(31,25,"ADD")),f.Cb(5),f.nc("items",e.items)("selectedIds",e.selectedIds)("collectionSize",e.collectionSize)("queryOptions",e.queryOptions)("tableFields",e.tableFields)("loading",e.loading)("isCloneAllowed",!1))},directives:[o.n,r.b,r.n,r.p,I.d,I.g,I.f,U.a],pipes:[S.c],encapsulation:2}),t})()}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.Mb({type:t}),t.\u0275inj=f.Lb({imports:[[n.f.forChild(G)],n.f]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.Mb({type:t}),t.\u0275inj=f.Lb({providers:[g],imports:[[o.c,s.a,V]]}),t})()}}]);