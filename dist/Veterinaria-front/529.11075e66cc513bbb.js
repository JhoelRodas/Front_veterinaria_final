"use strict";(self.webpackChunkfury=self.webpackChunkfury||[]).push([[529],{74061:(R,f,o)=>{o.d(f,{m:()=>C});var e=o(17705),p=o(60177),a=o(99213),l=o(52920),m=o(18498);function t(h,_){if(1&h&&(e.j41(0,"div",7)(1,"mat-icon",5),e.EFF(2,"chevron_right"),e.k0s(),e.j41(3,"div",6),e.EFF(4),e.k0s()()),2&h){const b=_.$implicit;e.R7$(4),e.JRh(b)}}const v=function(){return["/"]};let C=(()=>{class h{constructor(){this.crumbs=[]}ngOnInit(){}static{this.\u0275fac=function(x){return new(x||h)}}static{this.\u0275cmp=e.VBU({type:h,selectors:[["fury-breadcrumbs"]],inputs:{current:"current",crumbs:"crumbs"},decls:11,vars:5,consts:[[1,"title"],["fxLayout","row","fxLayoutAlign","start center",1,"crumbs"],[1,"crumb","home",3,"routerLink"],["class","crumb","fxLayout","row","fxLayoutAlign","start center",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb","current"],[1,"chevron"],[1,"link"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb"]],template:function(x,P){1&x&&(e.j41(0,"div",0),e.EFF(1),e.k0s(),e.j41(2,"div",1)(3,"a",2),e.EFF(4,"Home"),e.k0s(),e.DNE(5,t,5,1,"div",3),e.j41(6,"div",4)(7,"mat-icon",5),e.EFF(8,"chevron_right"),e.k0s(),e.j41(9,"div",6),e.EFF(10),e.k0s()()()),2&x&&(e.R7$(1),e.JRh(P.current),e.R7$(2),e.Y8G("routerLink",e.lJ4(4,v)),e.R7$(2),e.Y8G("ngForOf",P.crumbs),e.R7$(5),e.JRh(P.current))},dependencies:[p.Sq,a.An,l.DJ,l.sA,m.Wk],styles:["[_nghost-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font:var(--font-title);font-weight:400}.crumb[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]{text-decoration:none;transition:color .4s cubic-bezier(.25,.8,.25,1);font:var(--font-body-1)}.link[_ngcontent-%COMP%]{cursor:pointer}.chevron[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px;margin-left:6px;margin-right:6px;-webkit-user-select:none;user-select:none;cursor:default}"]})}}return h})()},75063:(R,f,o)=>{o.d(f,{s:()=>k});var e=o(17705),p=o(33726),a=o(23294),l=o(70152),m=o(60177),t=o(99213),v=o(88834),C=o(59115),h=o(82765),_=o(52920),b=o(89417);const x=["filter"];function P(y,T){if(1&y&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2),e.k0s(),e.j41(3,"div",7)(4,"mat-icon",8),e.EFF(5,"search"),e.k0s(),e.nrm(6,"input",9,10),e.k0s(),e.j41(8,"button",11)(9,"mat-icon"),e.EFF(10,"filter_list"),e.k0s()(),e.SdG(11,1),e.k0s()),2&y){const u=e.XpG(),c=e.sdS(3);e.R7$(2),e.JRh(u.name),e.R7$(6),e.Y8G("matMenuTriggerFor",c)}}function L(y,T){if(1&y){const u=e.RV6();e.j41(0,"div",12),e.bIt("click",function(d){const D=e.eBV(u).$implicit,j=e.XpG();return e.Njj(j.toggleColumnVisibility(D,d))}),e.j41(1,"mat-checkbox",13,14),e.bIt("ngModelChange",function(d){const D=e.eBV(u).$implicit;return e.Njj(D.visible=d)})("click",function(d){return d.stopPropagation()}),e.EFF(3),e.k0s()()}if(2&y){const u=T.$implicit;e.R7$(1),e.Y8G("ngModel",u.visible),e.R7$(2),e.SpI(" ",u.name," ")}}const O=["*",[["",8,"actions"]]],I=["*",".actions"];let k=(()=>{class y{constructor(u){this.cd=u,this.filterChange=new e.bkB}ngAfterViewInit(){this.hideHeader||(0,p.R)(this.filter.nativeElement,"keyup").pipe((0,a.F)(),(0,l.B)(150)).subscribe(()=>{this.filterChange.emit(this.filter.nativeElement.value)})}toggleColumnVisibility(u,c){c.stopPropagation(),c.stopImmediatePropagation(),u.visible=!u.visible,this.cd.markForCheck()}static{this.\u0275fac=function(c){return new(c||y)(e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:y,selectors:[["fury-list"]],viewQuery:function(c,d){if(1&c&&e.GBs(x,5),2&c){let M;e.mGM(M=e.lsd())&&(d.filter=M.first)}},inputs:{name:"name",columns:"columns",hideHeader:"hideHeader"},outputs:{filterChange:"filterChange"},ngContentSelectors:I,decls:6,vars:2,consts:[[1,"fury-list-table"],["class","fury-list-header","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",4,"ngIf"],["yPosition","below","xPosition","before"],["columnFilter","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",1,"fury-list-header"],[1,"fury-list-name"],["fxLayout","row","fxLayoutAlign","start center","fxFlex",""],[1,"fury-filter-input-icon"],["fxFlex","","placeholder","Search\u2026",1,"fury-filter-input"],["filter",""],["type","button","mat-icon-button","",1,"fury-column-filter",3,"matMenuTriggerFor"],[1,"checkbox-item","mat-menu-item",3,"click"],[1,"checkbox",3,"ngModel","ngModelChange","click"],["checkbox",""]],template:function(c,d){1&c&&(e.NAR(O),e.j41(0,"div",0),e.DNE(1,P,12,2,"div",1),e.j41(2,"mat-menu",2,3),e.DNE(4,L,4,2,"div",4),e.k0s(),e.SdG(5),e.k0s()),2&c&&(e.R7$(1),e.Y8G("ngIf",!d.hideHeader),e.R7$(3),e.Y8G("ngForOf",d.columns))},dependencies:[m.Sq,m.bT,t.An,v.iY,C.kk,C.Cp,h.So,_.DJ,_.BO,_.sA,_.UI,b.BC,b.vS],styles:[".fury-list-table{display:flex;flex-direction:column}.fury-list-table .fury-list-header{padding-left:24px;padding-right:24px;height:64px;border-top-left-radius:8px;border-top-right-radius:8px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header{height:auto;padding-top:24px;padding-bottom:24px}}.fury-list-table .fury-list-header .fury-list-name{font-size:20px;line-height:32px;font-weight:500;padding-right:24px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header .fury-list-name{border-right:none}}.fury-list-table .fury-list-header .fury-filter-input{font-size:16px;line-height:1.125;border:none;height:32px}.fury-list-table .fury-list-header .fury-filter-input:focus{outline:none}.fury-list-table .fury-list-header .fury-filter-input-icon{width:1.2em;vertical-align:bottom;height:22px;font-size:22px;margin-right:8px}.fury-list-table table{width:100%}.fury-list-table .mat-mdc-header-row .mat-mdc-header-cell .mat-sort-header-button{text-transform:uppercase}.fury-list-table .mat-mdc-cell.image-cell,.fury-list-table .mat-mdc-header-cell.image-cell{flex:0;width:59px}.fury-list-table .mat-mdc-cell.image-cell img,.fury-list-table .mat-mdc-header-cell.image-cell img{border-radius:50%;height:35px;width:35px;margin-right:24px;vertical-align:middle}.fury-list-table .mat-mdc-cell,.fury-list-table .mat-mdc-header-cell{white-space:nowrap;padding-left:12px;padding-right:12px}.fury-list-table .mat-mdc-cell.actions-cell,.fury-list-table .mat-mdc-header-cell.actions-cell{flex:0;width:40px;overflow:visible}.fury-list-table .paginator{display:block}.checkbox-item{padding-right:32px;padding-left:8px}\n"],encapsulation:2})}}return y})()},91398:(R,f,o)=>{o.d(f,{H:()=>m});var e=o(60177),p=o(89417),a=o(12198),l=o(17705);let m=(()=>{class t{static{this.\u0275fac=function(h){return new(h||t)}}static{this.\u0275mod=l.$C({type:t})}static{this.\u0275inj=l.G2t({imports:[e.MD,a.G,p.YN]})}}return t})()},15551:(R,f,o)=>{o.d(f,{M:()=>p});var e=o(17705);let p=(()=>{class a{constructor(){}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275dir=e.FsC({type:a,selectors:[["","furyPageLayoutContent",""],["fury-page-layout-content"]],hostAttrs:[1,"fury-page-layout-content"]})}}return a})()},53007:(R,f,o)=>{o.d(f,{M:()=>p});var e=o(17705);let p=(()=>{class a{constructor(){}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275dir=e.FsC({type:a,selectors:[["","furyPageLayoutHeader",""],["fury-page-layout-header"]],hostAttrs:[1,"fury-page-layout-header"]})}}return a})()},43655:(R,f,o)=>{o.d(f,{T:()=>p});var e=o(17705);let p=(()=>{class a{constructor(){this.mode="simple"}get isCard(){return"card"===this.mode}get isSimple(){return"simple"===this.mode}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275dir=e.FsC({type:a,selectors:[["","furyPageLayout",""],["fury-page-layout"]],hostAttrs:[1,"fury-page-layout"],hostVars:4,hostBindings:function(t,v){2&t&&e.AVh("fury-page-layout-card",v.isCard)("fury-page-layout-simple",v.isSimple)},inputs:{mode:"mode"}})}}return a})()},40529:(R,f,o)=>{o.r(f),o.d(f,{ProveedorModule:()=>rt});var e=o(60177),p=o(18498),a=o(9159),l=o(89417),m=o(34006),t=o(17705),v=o(52920),C=o(99631),h=o(86467),_=o(88834);function b(n,g){if(1&n&&(t.j41(0,"button",11),t.EFF(1,"Registrar Proveedor "),t.k0s()),2&n){const r=t.XpG();t.Y8G("disabled",!r.form.valid)}}function x(n,g){if(1&n&&(t.j41(0,"button",11),t.EFF(1,"Actualizar Proveedor "),t.k0s()),2&n){const r=t.XpG();t.Y8G("disabled",!r.form.valid)}}let P=(()=>{class n{constructor(r,i){this.defaults=r,this.dialogRef=i,this.mode="create"}ngOnInit(){this.defaults?this.mode="update":this.defaults={},this.form=new l.J3({nombre:new l.hs(this.defaults.nombre),telefono:new l.hs(this.defaults.telefono),correo:new l.hs(this.defaults.correo),direccion:new l.hs(this.defaults.direccion),encargado:new l.hs(this.defaults.encargado)})}save(){console.log(this.form.value),"create"===this.mode?this.createCustomer():"update"===this.mode&&this.updateCustomer()}createCustomer(){this.dialogRef.close(this.form.value)}updateCustomer(){const r=this.form.value;r.id=this.defaults.id,this.dialogRef.close(r)}isCreateMode(){return"create"===this.mode}isUpdateMode(){return"update"===this.mode}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(m.Vh),t.rXU(m.CP))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["fury-crear-actualizar-proveedor"]],decls:28,vars:4,consts:[["mat-dialog-title",""],[3,"formGroup","ngSubmit"],["fxLayout","column wrap"],["fxFlex",""],["type","text","formControlName","nombre","matInput",""],["type","text","formControlName","telefono","matInput",""],["type","text","formControlName","correo","matInput",""],["type","text","formControlName","direccion","matInput",""],["type","text","formControlName","encargado","matInput",""],["fxLayout","row","fxLayoutAlign","end center"],["mat-flat-button","","color","primary",3,"disabled",4,"ngIf"],["mat-flat-button","","color","primary",3,"disabled"]],template:function(i,s){1&i&&(t.j41(0,"div",0),t.EFF(1),t.k0s(),t.j41(2,"form",1),t.bIt("ngSubmit",function(){return s.save()}),t.j41(3,"mat-dialog-content")(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),t.EFF(7,"Nombre"),t.k0s(),t.nrm(8,"input",4),t.k0s(),t.j41(9,"mat-form-field",3)(10,"mat-label"),t.EFF(11,"Telefono"),t.k0s(),t.nrm(12,"input",5),t.k0s(),t.j41(13,"mat-form-field",3)(14,"mat-label"),t.EFF(15,"Correo"),t.k0s(),t.nrm(16,"input",6),t.k0s(),t.j41(17,"mat-form-field",3)(18,"mat-label"),t.EFF(19,"Direccion"),t.k0s(),t.nrm(20,"input",7),t.k0s(),t.j41(21,"mat-form-field",3)(22,"mat-label"),t.EFF(23,"Encargado"),t.k0s(),t.nrm(24,"input",8),t.k0s()()(),t.j41(25,"mat-dialog-actions",9),t.DNE(26,b,2,1,"button",10),t.DNE(27,x,2,1,"button",10),t.k0s()()),2&i&&(t.R7$(1),t.SpI("",s.isCreateMode()?"Crear":"Actualizar"," Proveedor"),t.R7$(1),t.Y8G("formGroup",s.form),t.R7$(24),t.Y8G("ngIf",s.isCreateMode()),t.R7$(1),t.Y8G("ngIf",s.isUpdateMode()))},dependencies:[e.bT,l.qT,l.me,l.BC,l.cb,l.j4,l.JD,v.DJ,v.sA,v.UI,m.BI,m.Yi,m.E7,C.fg,h.rl,h.nJ,_.$z]})}}return n})();var L=o(97405),O=o(74061),I=o(43655),k=o(53007),y=o(15551),T=o(75063),u=o(82765),c=o(99213),d=o(59115),M=o(96695),D=o(2042);function j(n,g){1&n&&(t.j41(0,"th",15)(1,"mat-checkbox",16),t.bIt("click",function(i){return i.stopPropagation()}),t.k0s()())}function A(n,g){1&n&&(t.j41(0,"td",17)(1,"mat-checkbox",16),t.bIt("click",function(i){return i.stopPropagation()}),t.k0s()())}function B(n,g){if(1&n&&(t.j41(0,"th",22),t.EFF(1),t.k0s()),2&n){const r=t.XpG(2).$implicit;t.R7$(1),t.SpI(" ",r.name,"")}}function G(n,g){if(1&n&&(t.j41(0,"td",23),t.EFF(1),t.k0s()),2&n){const r=g.$implicit,i=t.XpG(2).$implicit;t.R7$(1),t.SpI(" ",r[i.property]," ")}}function $(n,g){if(1&n&&(t.qex(0,19),t.DNE(1,B,2,1,"th",20),t.DNE(2,G,2,1,"td",21),t.bVm()),2&n){const r=t.XpG().$implicit;t.Y8G("matColumnDef",r.property)}}function S(n,g){if(1&n&&(t.qex(0),t.DNE(1,$,3,1,"ng-container",18),t.bVm()),2&n){const r=g.$implicit;t.R7$(1),t.Y8G("ngIf",r.isModelProperty)}}function U(n,g){1&n&&t.nrm(0,"th",24)}function N(n,g){if(1&n){const r=t.RV6();t.j41(0,"td",17)(1,"button",25),t.bIt("click",function(s){return s.stopPropagation()}),t.j41(2,"mat-icon"),t.EFF(3,"more_horiz"),t.k0s()(),t.j41(4,"mat-menu",26,27)(6,"button",28),t.bIt("click",function(){const E=t.eBV(r).$implicit,F=t.XpG();return t.Njj(F.updateProveedor(E))}),t.j41(7,"span"),t.EFF(8,"Modify"),t.k0s()(),t.j41(9,"button",28),t.bIt("click",function(){const E=t.eBV(r).$implicit,F=t.XpG();return t.Njj(F.deleteProveedor(E))}),t.j41(10,"span"),t.EFF(11,"Delete"),t.k0s()()()()}if(2&n){const r=t.sdS(5);t.R7$(1),t.Y8G("matMenuTriggerFor",r)}}function Y(n,g){1&n&&t.nrm(0,"tr",29)}function K(n,g){if(1&n){const r=t.RV6();t.j41(0,"tr",30),t.bIt("click",function(){const E=t.eBV(r).$implicit,F=t.XpG();return t.Njj(F.updateProveedor(E))}),t.k0s()}}const V=function(){return["Proveedores"]},W=function(){return[]},z=[{path:"",component:(()=>{class n{ngOnInit(){this.getProveedor()}get visibleColumns(){return this.columns.filter(r=>r.visible).map(r=>r.property)}constructor(r,i){this.apiClient=r,this.dialog=i,this.dataSource=new a.I6([]),this.columns=[{name:"ID",property:"id",visible:!0,isModelProperty:!0},{name:"Nombre",property:"nombre",visible:!0,isModelProperty:!0},{name:"Telefono",property:"telefono",visible:!0,isModelProperty:!0},{name:"Correo",property:"correo",visible:!0,isModelProperty:!0},{name:"Direccion",property:"direccion",visible:!0,isModelProperty:!0},{name:"Encargado",property:"encargado",visible:!0,isModelProperty:!0},{name:"Actions",property:"actions",visible:!0}],this.pageSize=10}getProveedor(){this.apiClient.getRequest("/api/proveedor").subscribe({next:r=>{this.dataSource.data=r,console.log(r)},error:r=>{console.error(r)}})}onFilterChange(r){console.info(event),this.dataSource&&(r=(r=r.trim()).toLowerCase(),this.dataSource.filter=r)}createProveedor(){console.info("Abre dialogo"),this.dialog.open(P,{width:"400px"}).afterClosed().subscribe(r=>{r?(console.info("Al cerrar",r),this.apiClient.postRequest("/api/proveedor",r).subscribe({next:i=>{console.info("OK",i),this.getProveedor()},error:i=>{console.error("error",i)}}),console.info("Fin api call")):console.info("Cancelado")}),console.info("Fin Metodo")}deleteProveedor(r){this.apiClient.deleteRequest(r.id,"/api/proveedor").subscribe({next:i=>{this.getProveedor()},error:i=>{}})}updateProveedor(r){console.info(r),this.dialog.open(P,{data:r,width:"400px"}).afterClosed().subscribe(i=>{i?this.apiClient.putRequest("/api/proveedor",i.id,i).subscribe({next:s=>{this.getProveedor()},error:s=>{console.error(s)}}):console.info("Cancelado")})}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(L.f),t.rXU(m.bZ))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["fury-proveedor"]],decls:20,vars:9,consts:[["mode","card"],["current","Proveedor",3,"crumbs"],["name","Proveedor",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","checkbox"],["class","actions-cell","mat-header-cell","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],["mat-header-cell","",1,"actions-cell"],["color","primary",3,"click"],["mat-cell","",1,"actions-cell"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements",3,"click"]],template:function(i,s){1&i&&(t.j41(0,"fury-page-layout",0)(1,"fury-page-layout-header"),t.nrm(2,"fury-breadcrumbs",1),t.k0s(),t.j41(3,"fury-page-layout-content")(4,"fury-list",2),t.bIt("filterChange",function(F){return s.onFilterChange(F)}),t.j41(5,"div",3)(6,"button",4),t.bIt("click",function(){return s.createProveedor()}),t.j41(7,"mat-icon"),t.EFF(8,"add"),t.k0s()()(),t.j41(9,"table",5),t.qex(10,6),t.DNE(11,j,2,0,"th",7),t.DNE(12,A,2,0,"td",8),t.bVm(),t.DNE(13,S,2,1,"ng-container",9),t.qex(14,10),t.DNE(15,U,1,0,"th",11),t.DNE(16,N,12,1,"td",8),t.bVm(),t.DNE(17,Y,1,0,"tr",12),t.DNE(18,K,1,0,"tr",13),t.k0s(),t.nrm(19,"mat-paginator",14),t.k0s()()()),2&i&&(t.R7$(2),t.Y8G("crumbs",t.lJ4(7,V)),t.R7$(2),t.Y8G("columns",t.lJ4(8,W)),t.R7$(5),t.Y8G("dataSource",s.dataSource),t.R7$(4),t.Y8G("ngForOf",s.columns),t.R7$(4),t.Y8G("matHeaderRowDef",s.visibleColumns),t.R7$(1),t.Y8G("matRowDefColumns",s.visibleColumns),t.R7$(1),t.Y8G("pageSize",s.pageSize))},dependencies:[e.Sq,e.bT,O.m,I.T,k.M,y.M,T.s,_.iY,_.$0,u.So,c.An,d.kk,d.fb,d.Cp,M.iy,D.B4,D.aE,a.Zl,a.tL,a.ji,a.cC,a.YV,a.iL,a.KS,a.$R,a.YZ,a.NB]})}}return n})()}];let H=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[p.iI.forChild(z),p.iI]})}}return n})();var w=o(3632),X=o(91398),J=o(49320),Q=o(26924),Z=o(5951),q=o(82798);let tt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[e.MD,l.YN,l.X1,Q.YF,m.hM,C.fS,_.Hl,c.m_,Z.Wk,q.Ve]})}}return n})();var et=o(60858),ot=o(11801);let rt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[e.MD,H,w.V,et.H,ot.g,J.S,X.H,_.Hl,u.g7,c.m_,d.Cn,M.Ou,D.NQ,a.tP,tt,l.YN]})}}return n})()}}]);