"use strict";(self.webpackChunkfury=self.webpackChunkfury||[]).push([[209],{74061:(D,p,n)=>{n.d(p,{m:()=>C});var e=n(17705),h=n(60177),i=n(99213),l=n(52920),c=n(18498);function t(d,x){if(1&d&&(e.j41(0,"div",7)(1,"mat-icon",5),e.EFF(2,"chevron_right"),e.k0s(),e.j41(3,"div",6),e.EFF(4),e.k0s()()),2&d){const v=x.$implicit;e.R7$(4),e.JRh(v)}}const y=function(){return["/"]};let C=(()=>{class d{constructor(){this.crumbs=[]}ngOnInit(){}static{this.\u0275fac=function(b){return new(b||d)}}static{this.\u0275cmp=e.VBU({type:d,selectors:[["fury-breadcrumbs"]],inputs:{current:"current",crumbs:"crumbs"},decls:11,vars:5,consts:[[1,"title"],["fxLayout","row","fxLayoutAlign","start center",1,"crumbs"],[1,"crumb","home",3,"routerLink"],["class","crumb","fxLayout","row","fxLayoutAlign","start center",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb","current"],[1,"chevron"],[1,"link"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb"]],template:function(b,E){1&b&&(e.j41(0,"div",0),e.EFF(1),e.k0s(),e.j41(2,"div",1)(3,"a",2),e.EFF(4,"Home"),e.k0s(),e.DNE(5,t,5,1,"div",3),e.j41(6,"div",4)(7,"mat-icon",5),e.EFF(8,"chevron_right"),e.k0s(),e.j41(9,"div",6),e.EFF(10),e.k0s()()()),2&b&&(e.R7$(1),e.JRh(E.current),e.R7$(2),e.Y8G("routerLink",e.lJ4(4,y)),e.R7$(2),e.Y8G("ngForOf",E.crumbs),e.R7$(5),e.JRh(E.current))},dependencies:[h.Sq,i.An,l.DJ,l.sA,c.Wk],styles:["[_nghost-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font:var(--font-title);font-weight:400}.crumb[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]{text-decoration:none;transition:color .4s cubic-bezier(.25,.8,.25,1);font:var(--font-body-1)}.link[_ngcontent-%COMP%]{cursor:pointer}.chevron[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px;margin-left:6px;margin-right:6px;-webkit-user-select:none;user-select:none;cursor:default}"]})}}return d})()},75063:(D,p,n)=>{n.d(p,{s:()=>T});var e=n(17705),h=n(33726),i=n(23294),l=n(70152),c=n(60177),t=n(99213),y=n(88834),C=n(59115),d=n(82765),x=n(52920),v=n(89417);const b=["filter"];function E(f,P){if(1&f&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2),e.k0s(),e.j41(3,"div",7)(4,"mat-icon",8),e.EFF(5,"search"),e.k0s(),e.nrm(6,"input",9,10),e.k0s(),e.j41(8,"button",11)(9,"mat-icon"),e.EFF(10,"filter_list"),e.k0s()(),e.SdG(11,1),e.k0s()),2&f){const s=e.XpG(),u=e.sdS(3);e.R7$(2),e.JRh(s.name),e.R7$(6),e.Y8G("matMenuTriggerFor",u)}}function V(f,P){if(1&f){const s=e.RV6();e.j41(0,"div",12),e.bIt("click",function(g){const R=e.eBV(s).$implicit,k=e.XpG();return e.Njj(k.toggleColumnVisibility(R,g))}),e.j41(1,"mat-checkbox",13,14),e.bIt("ngModelChange",function(g){const R=e.eBV(s).$implicit;return e.Njj(R.visible=g)})("click",function(g){return g.stopPropagation()}),e.EFF(3),e.k0s()()}if(2&f){const s=P.$implicit;e.R7$(1),e.Y8G("ngModel",s.visible),e.R7$(2),e.SpI(" ",s.name," ")}}const I=["*",[["",8,"actions"]]],O=["*",".actions"];let T=(()=>{class f{constructor(s){this.cd=s,this.filterChange=new e.bkB}ngAfterViewInit(){this.hideHeader||(0,h.R)(this.filter.nativeElement,"keyup").pipe((0,i.F)(),(0,l.B)(150)).subscribe(()=>{this.filterChange.emit(this.filter.nativeElement.value)})}toggleColumnVisibility(s,u){u.stopPropagation(),u.stopImmediatePropagation(),s.visible=!s.visible,this.cd.markForCheck()}static{this.\u0275fac=function(u){return new(u||f)(e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:f,selectors:[["fury-list"]],viewQuery:function(u,g){if(1&u&&e.GBs(b,5),2&u){let M;e.mGM(M=e.lsd())&&(g.filter=M.first)}},inputs:{name:"name",columns:"columns",hideHeader:"hideHeader"},outputs:{filterChange:"filterChange"},ngContentSelectors:O,decls:6,vars:2,consts:[[1,"fury-list-table"],["class","fury-list-header","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",4,"ngIf"],["yPosition","below","xPosition","before"],["columnFilter","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",1,"fury-list-header"],[1,"fury-list-name"],["fxLayout","row","fxLayoutAlign","start center","fxFlex",""],[1,"fury-filter-input-icon"],["fxFlex","","placeholder","Search\u2026",1,"fury-filter-input"],["filter",""],["type","button","mat-icon-button","",1,"fury-column-filter",3,"matMenuTriggerFor"],[1,"checkbox-item","mat-menu-item",3,"click"],[1,"checkbox",3,"ngModel","ngModelChange","click"],["checkbox",""]],template:function(u,g){1&u&&(e.NAR(I),e.j41(0,"div",0),e.DNE(1,E,12,2,"div",1),e.j41(2,"mat-menu",2,3),e.DNE(4,V,4,2,"div",4),e.k0s(),e.SdG(5),e.k0s()),2&u&&(e.R7$(1),e.Y8G("ngIf",!g.hideHeader),e.R7$(3),e.Y8G("ngForOf",g.columns))},dependencies:[c.Sq,c.bT,t.An,y.iY,C.kk,C.Cp,d.So,x.DJ,x.BO,x.sA,x.UI,v.BC,v.vS],styles:[".fury-list-table{display:flex;flex-direction:column}.fury-list-table .fury-list-header{padding-left:24px;padding-right:24px;height:64px;border-top-left-radius:8px;border-top-right-radius:8px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header{height:auto;padding-top:24px;padding-bottom:24px}}.fury-list-table .fury-list-header .fury-list-name{font-size:20px;line-height:32px;font-weight:500;padding-right:24px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header .fury-list-name{border-right:none}}.fury-list-table .fury-list-header .fury-filter-input{font-size:16px;line-height:1.125;border:none;height:32px}.fury-list-table .fury-list-header .fury-filter-input:focus{outline:none}.fury-list-table .fury-list-header .fury-filter-input-icon{width:1.2em;vertical-align:bottom;height:22px;font-size:22px;margin-right:8px}.fury-list-table table{width:100%}.fury-list-table .mat-mdc-header-row .mat-mdc-header-cell .mat-sort-header-button{text-transform:uppercase}.fury-list-table .mat-mdc-cell.image-cell,.fury-list-table .mat-mdc-header-cell.image-cell{flex:0;width:59px}.fury-list-table .mat-mdc-cell.image-cell img,.fury-list-table .mat-mdc-header-cell.image-cell img{border-radius:50%;height:35px;width:35px;margin-right:24px;vertical-align:middle}.fury-list-table .mat-mdc-cell,.fury-list-table .mat-mdc-header-cell{white-space:nowrap;padding-left:12px;padding-right:12px}.fury-list-table .mat-mdc-cell.actions-cell,.fury-list-table .mat-mdc-header-cell.actions-cell{flex:0;width:40px;overflow:visible}.fury-list-table .paginator{display:block}.checkbox-item{padding-right:32px;padding-left:8px}\n"],encapsulation:2})}}return f})()},91398:(D,p,n)=>{n.d(p,{H:()=>c});var e=n(60177),h=n(89417),i=n(12198),l=n(17705);let c=(()=>{class t{static{this.\u0275fac=function(d){return new(d||t)}}static{this.\u0275mod=l.$C({type:t})}static{this.\u0275inj=l.G2t({imports:[e.MD,i.G,h.YN]})}}return t})()},15551:(D,p,n)=>{n.d(p,{M:()=>h});var e=n(17705);let h=(()=>{class i{constructor(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=e.FsC({type:i,selectors:[["","furyPageLayoutContent",""],["fury-page-layout-content"]],hostAttrs:[1,"fury-page-layout-content"]})}}return i})()},53007:(D,p,n)=>{n.d(p,{M:()=>h});var e=n(17705);let h=(()=>{class i{constructor(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=e.FsC({type:i,selectors:[["","furyPageLayoutHeader",""],["fury-page-layout-header"]],hostAttrs:[1,"fury-page-layout-header"]})}}return i})()},43655:(D,p,n)=>{n.d(p,{T:()=>h});var e=n(17705);let h=(()=>{class i{constructor(){this.mode="simple"}get isCard(){return"card"===this.mode}get isSimple(){return"simple"===this.mode}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=e.FsC({type:i,selectors:[["","furyPageLayout",""],["fury-page-layout"]],hostAttrs:[1,"fury-page-layout"],hostVars:4,hostBindings:function(t,y){2&t&&e.AVh("fury-page-layout-card",y.isCard)("fury-page-layout-simple",y.isSimple)},inputs:{mode:"mode"}})}}return i})()},85209:(D,p,n)=>{n.r(p),n.d(p,{VacunaModule:()=>Q});var e=n(60177),h=n(18498),i=n(9159),l=n(89417),c=n(34006),t=n(17705),y=n(52920),C=n(88834),d=n(86467),x=n(99631);function v(a,_){if(1&a&&(t.j41(0,"button",7),t.EFF(1,"Actualizar descripcion "),t.k0s()),2&a){const o=t.XpG();t.Y8G("disabled",!o.form.valid)}}let b=(()=>{class a{constructor(o,r){this.defaults=o,this.dialogRef=r}ngOnInit(){this.defaults&&(this.mode="update"),this.form=new l.J3({descripcion:new l.hs(this.defaults.descripcion)})}save(){this.updateCustomer()}updateCustomer(){const o=this.form.value;o.id=this.defaults.id,this.dialogRef.close(o)}isUpdateMode(){return"update"===this.mode}static{this.\u0275fac=function(r){return new(r||a)(t.rXU(c.Vh),t.rXU(c.CP))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["fury-update-descripcion-vacuna"]],decls:11,vars:3,consts:[["mat-dialog-title",""],[3,"formGroup","ngSubmit"],["fxLayout","column wrap"],["fxFlex",""],["type","text","formControlName","descripcion","matInput",""],["fxLayout","row","fxLayoutAlign","end center"],["mat-flat-button","","color","primary",3,"disabled",4,"ngIf"],["mat-flat-button","","color","primary",3,"disabled"]],template:function(r,m){1&r&&(t.j41(0,"div",0),t.EFF(1),t.k0s(),t.j41(2,"form",1),t.bIt("ngSubmit",function(){return m.save()}),t.j41(3,"mat-dialog-content")(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),t.EFF(7,"Descripcion"),t.k0s(),t.nrm(8,"input",4),t.k0s()()(),t.j41(9,"mat-dialog-actions",5),t.DNE(10,v,2,1,"button",6),t.k0s()()),2&r&&(t.R7$(1),t.SpI("","Actualizar"," Vacuna"),t.R7$(1),t.Y8G("formGroup",m.form),t.R7$(8),t.Y8G("ngIf",m.isUpdateMode()))},dependencies:[e.bT,y.DJ,y.sA,y.UI,C.$z,c.BI,c.Yi,c.E7,d.rl,d.nJ,x.fg,l.qT,l.me,l.BC,l.cb,l.j4,l.JD]})}}return a})();var E=n(97405),V=n(74061),I=n(75063),O=n(82765),T=n(99213),f=n(59115),P=n(96695),s=n(2042),u=n(43655),g=n(53007),M=n(15551);function R(a,_){1&a&&(t.j41(0,"th",13)(1,"mat-checkbox",14),t.bIt("click",function(r){return r.stopPropagation()}),t.k0s()())}function k(a,_){1&a&&(t.j41(0,"td",15)(1,"mat-checkbox",14),t.bIt("click",function(r){return r.stopPropagation()}),t.k0s()())}function j(a,_){if(1&a&&(t.j41(0,"th",20),t.EFF(1),t.k0s()),2&a){const o=t.XpG(2).$implicit;t.R7$(1),t.SpI(" ",o.name,"")}}function A(a,_){if(1&a&&(t.j41(0,"td",21),t.EFF(1),t.k0s()),2&a){const o=_.$implicit,r=t.XpG(2).$implicit;t.R7$(1),t.SpI(" ",o[r.property]," ")}}function B(a,_){if(1&a&&(t.qex(0,17),t.DNE(1,j,2,1,"th",18),t.DNE(2,A,2,1,"td",19),t.bVm()),2&a){const o=t.XpG().$implicit;t.Y8G("matColumnDef",o.property)}}function G(a,_){if(1&a&&(t.qex(0),t.DNE(1,B,3,1,"ng-container",16),t.bVm()),2&a){const o=_.$implicit;t.R7$(1),t.Y8G("ngIf",o.isModelProperty)}}function $(a,_){1&a&&t.nrm(0,"th",22)}function U(a,_){if(1&a){const o=t.RV6();t.j41(0,"td",15)(1,"button",23),t.bIt("click",function(m){return m.stopPropagation()}),t.j41(2,"mat-icon"),t.EFF(3,"more_horiz"),t.k0s()(),t.j41(4,"mat-menu",24,25)(6,"button",26),t.bIt("click",function(){const F=t.eBV(o).$implicit,L=t.XpG();return t.Njj(L.updateDescripcionVacuna(F))}),t.j41(7,"span"),t.EFF(8,"Modify"),t.k0s()()()()}if(2&a){const o=t.sdS(5);t.R7$(1),t.Y8G("matMenuTriggerFor",o)}}function S(a,_){1&a&&t.nrm(0,"tr",27)}function Y(a,_){if(1&a){const o=t.RV6();t.j41(0,"tr",28),t.bIt("click",function(){const F=t.eBV(o).$implicit,L=t.XpG();return t.Njj(L.updateDescripcionVacuna(F))}),t.k0s()}}const K=function(){return["Vacunas"]},N=function(){return[]},W=[{path:"",component:(()=>{class a{ngOnInit(){this.getVacunas()}get visibleColumns(){return this.columns.filter(o=>o.visible).map(o=>o.property)}constructor(o,r){this.apiClient=o,this.dialog=r,this.dataSource=new i.I6([]),this.columns=[{name:"ID",property:"id",visible:!0,isModelProperty:!0},{name:"Nombre",property:"nombre",visible:!0,isModelProperty:!0},{name:"Stock",property:"stock",visible:!0,isModelProperty:!0},{name:"Descripcion",property:"descripcion",visible:!0,isModelProperty:!0},{name:"Actions",property:"actions",visible:!0}],this.pageSize=10}getVacunas(){this.apiClient.getRequest("/api/vacuna").subscribe({next:o=>{this.dataSource.data=o,console.log(o)},error:o=>{console.error(o)}})}updateDescripcionVacuna(o){console.info(o),this.dialog.open(b,{data:o,width:"400px"}).afterClosed().subscribe(r=>{r?this.apiClient.putRequest("/api/vacuna",r.id,r).subscribe({next:m=>{this.getVacunas()},error:m=>{console.info(m)}}):console.info("Cancelado")})}onFilterChange(o){console.info(event),this.dataSource&&(o=(o=o.trim()).toLowerCase(),this.dataSource.filter=o)}static{this.\u0275fac=function(r){return new(r||a)(t.rXU(E.f),t.rXU(c.bZ))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["fury-vacuna"]],decls:16,vars:9,consts:[["mode","card"],["current","Vacunas",3,"crumbs"],["name","Vacunas",3,"columns","filterChange"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","checkbox"],["class","actions-cell","mat-header-cell","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],["mat-header-cell","",1,"actions-cell"],["color","primary",3,"click"],["mat-cell","",1,"actions-cell"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements",3,"click"]],template:function(r,m){1&r&&(t.j41(0,"fury-page-layout",0)(1,"fury-page-layout-header"),t.nrm(2,"fury-breadcrumbs",1),t.k0s(),t.j41(3,"fury-page-layout-content")(4,"fury-list",2),t.bIt("filterChange",function(L){return m.onFilterChange(L)}),t.j41(5,"table",3),t.qex(6,4),t.DNE(7,R,2,0,"th",5),t.DNE(8,k,2,0,"td",6),t.bVm(),t.DNE(9,G,2,1,"ng-container",7),t.qex(10,8),t.DNE(11,$,1,0,"th",9),t.DNE(12,U,9,1,"td",6),t.bVm(),t.DNE(13,S,1,0,"tr",10),t.DNE(14,Y,1,0,"tr",11),t.k0s(),t.nrm(15,"mat-paginator",12),t.k0s()()()),2&r&&(t.R7$(2),t.Y8G("crumbs",t.lJ4(7,K)),t.R7$(2),t.Y8G("columns",t.lJ4(8,N)),t.R7$(1),t.Y8G("dataSource",m.dataSource),t.R7$(4),t.Y8G("ngForOf",m.columns),t.R7$(4),t.Y8G("matHeaderRowDef",m.visibleColumns),t.R7$(1),t.Y8G("matRowDefColumns",m.visibleColumns),t.R7$(1),t.Y8G("pageSize",m.pageSize))},dependencies:[e.Sq,e.bT,V.m,I.s,C.iY,O.So,T.An,f.kk,f.fb,f.Cp,P.iy,s.B4,s.aE,i.Zl,i.tL,i.ji,i.cC,i.YV,i.iL,i.KS,i.$R,i.YZ,i.NB,u.T,g.M,M.M]})}}return a})()}];let w=(()=>{class a{static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275mod=t.$C({type:a})}static{this.\u0275inj=t.G2t({imports:[h.iI.forChild(W),h.iI]})}}return a})();var H=n(3632),X=n(91398),z=n(49320);let J=(()=>{class a{static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275mod=t.$C({type:a})}static{this.\u0275inj=t.G2t({imports:[e.MD,y.w2,C.Hl,c.hM,d.RG,x.fS,l.X1]})}}return a})(),Q=(()=>{class a{static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275mod=t.$C({type:a})}static{this.\u0275inj=t.G2t({imports:[e.MD,w,H.V,X.H,C.Hl,O.g7,T.m_,f.Cn,P.Ou,s.NQ,i.tP,z.S,J]})}}return a})()}}]);