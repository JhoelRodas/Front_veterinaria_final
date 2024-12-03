"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_coming-soon_coming-soon_module_ts"],{

/***/ 60167:
/*!*****************************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonRoutingModule: () => (/* binding */ ComingSoonRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon.component */ 91495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _coming_soon_component__WEBPACK_IMPORTED_MODULE_0__.ComingSoonComponent
}];
class ComingSoonRoutingModule {
  static {
    this.ɵfac = function ComingSoonRoutingModule_Factory(t) {
      return new (t || ComingSoonRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ComingSoonRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComingSoonRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91495:
/*!************************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonComponent: () => (/* binding */ ComingSoonComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebook */ 17772);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ 18201);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faPinterest */ 22428);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGithub */ 5295);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faInstagram */ 7750);
/* harmony import */ var _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/animations/fade-in-up.animation */ 71001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 17518);













class ComingSoonComponent {
  constructor() {
    this.faFacebook = _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_1__.faFacebook;
    this.faTwitter = _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__.faTwitter;
    this.faInstagram = _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3__.faInstagram;
    this.faPinterest = _fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_4__.faPinterest;
    this.faGithub = _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_5__.faGithub;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ComingSoonComponent_Factory(t) {
      return new (t || ComingSoonComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ComingSoonComponent,
      selectors: [["fury-coming-soon"]],
      decls: 33,
      vars: 6,
      consts: [[1, "card"], [1, "card-content"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "logo"], ["viewBox", "0 0 33.74 33.99", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M26.83,19.33c-.36.37-.73.71-1.09,1l.31,3.22a5.41,5.41,0,0,1-2.43,5.14L15.72,34l-.67-8.74a6.54,6.54,0,0,1-6.57-6.53L0,18.18l5-7.93a5.41,5.41,0,0,1,5.23-2.54l3.1.31q.49-.55,1.05-1.11C20.78.54,30.82-.62,33.48.26,34.37,2.93,33.2,13,26.83,19.33Zm-.45-12a3.77,3.77,0,1,0,0,5.33A3.77,3.77,0,0,0,26.38,7.36ZM2.82,23.72l3.24-3.24a8.24,8.24,0,0,0,7.11,7.1L10.5,30.25,7.74,33V29.46L2.41,31.23l1.78-5.32H.64Z"], [1, "socials"], [1, "social", "facebook"], ["size", "lg", 3, "icon"], [1, "social", "twitter"], [1, "social", "instagram"], [1, "social", "pinterest"], [1, "social", "github"], ["fxLayout", "column", 1, "card-footer"], ["matInput", ""], ["matSuffix", ""], ["color", "primary", "mat-raised-button", "", "type", "button"]],
      template: function ComingSoonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 3)(4, "title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "COMING SOON");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Our website is under construction.");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5)(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "fa-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12)(23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "If you would like to get notified as soon as we launch, subscribe below and follow us on socials!");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-form-field")(26, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "E-Mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "SUBSCRIBE");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeInUp", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faFacebook);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faTwitter);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faInstagram);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faPinterest);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faGithub);
        }
      },
      dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-items: center;\n  align-content: center;\n  align-items: center;\n  background: #fff url(\"/assets/img/backgrounds/editor.jpg\");\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  width: 380px;\n  max-width: 100%;\n  text-align: center;\n  overflow: hidden;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n\n.socials[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.socials[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]    + .social[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.socials[_ngcontent-%COMP%]   .social.facebook[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n.socials[_ngcontent-%COMP%]   .social.twitter[_ngcontent-%COMP%] {\n  color: #00aced;\n}\n.socials[_ngcontent-%COMP%]   .social.instagram[_ngcontent-%COMP%] {\n  color: #cd486b;\n}\n.socials[_ngcontent-%COMP%]   .social.pinterest[_ngcontent-%COMP%] {\n  color: #C92228;\n}\n.socials[_ngcontent-%COMP%]   .social.github[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nh1[_ngcontent-%COMP%] {\n  font: var(--font-display-1);\n  font-weight: 500;\n  margin: 24px 0 0;\n}\n\np[_ngcontent-%COMP%] {\n  font: var(--font-body-2);\n  margin: 0 0 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9jb21pbmctc29vbi9jb21pbmctc29vbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGhlbWUvX2Nzcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3ZHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMERBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZ0JGOztBQWJBO0VBQ0Usa0JESmM7RUNLZCxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUN5REUsMkhBQUE7QUR4Q0o7O0FBYkE7RUFDRSxhRGRRO0FDOEJWOztBQWJBO0VBQ0UsYURsQlE7QUNrQ1Y7O0FBYkE7RUFDRSxjQUFBO0FBZ0JGO0FBZEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWdCSjs7QUFMRTtFQUNFLGVBQUE7QUFRSjtBQU5JO0VBQ0UsaUJBQUE7QUFRTjtBQUxJO0VBQ0UsY0FkYTtBQXFCbkI7QUFKSTtFQUNFLGNBakJZO0FBdUJsQjtBQUhJO0VBQ0UsY0FwQmM7QUF5QnBCO0FBRkk7RUFDRSxjQXZCYztBQTJCcEI7QUFESTtFQUNFLFdBMUJXO0FBNkJqQjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcbkBpbXBvcnQgXCJ2YXJcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9lZGl0b3IuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIHdpZHRoOiAzODBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIEBpbmNsdWRlIG1hdC5lbGV2YXRpb24oOCk7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAkc3BhY2luZztcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogJHNwYWNpbmc7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAkc3BhY2luZyAwO1xuXG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG59XG5cbi5zb2NpYWxzIHtcbiAgJGNvbG9yLWZhY2Vib29rOiAjM2I1OTk4O1xuICAkY29sb3ItdHdpdHRlcjogIzAwYWNlZDtcbiAgJGNvbG9yLWluc3RhZ3JhbTogI2NkNDg2YjtcbiAgJGNvbG9yLXBpbnRlcmVzdDogI0M5MjIyODtcbiAgJGNvbG9yLWdpdGh1YjogIzAwMDtcblxuICAuc29jaWFsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmICsgLnNvY2lhbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmLmZhY2Vib29rIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZmFjZWJvb2s7XG4gICAgfVxuXG4gICAgJi50d2l0dGVyIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItdHdpdHRlcjtcbiAgICB9XG5cbiAgICAmLmluc3RhZ3JhbSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWluc3RhZ3JhbTtcbiAgICB9XG5cbiAgICAmLnBpbnRlcmVzdCB7XG4gICAgICBjb2xvcjogJGNvbG9yLXBpbnRlcmVzdDtcbiAgICB9XG5cbiAgICAmLmdpdGh1YiB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdpdGh1YjtcbiAgICB9XG4gIH1cbn1cblxuaDEge1xuICBmb250OiB2YXIoLS1mb250LWRpc3BsYXktMSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogJHNwYWNpbmcgMCAwO1xufVxuXG5wIHtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTIpO1xuICBtYXJnaW46IDAgMCAkc3BhY2luZztcbn1cbiIsIi8vXG4vLyBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG4vL1xuXG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4vZ3NzJztcblxuLy8vIFdoZW4gdHJ1ZSwgYWRkIGFuIGFkZGl0aW9uYWwgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gYmVmb3JlIGRlY2xhcmF0aW9uc1xuLy8vIHRoYXQgdXNlIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2ggYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucy4gVGhpc1xuLy8vIGFkZHMgZmFsbGJhY2sgc3VwcG9ydCBmb3Igb2xkZXIgYnJvd3NlcnMgc3VjaCBhcyBJRTExIHRoYXQgZG8gbm90IHN1cHBvcnRcbi8vLyB0aGVzZSBmZWF0dXJlcyBhdCB0aGUgY29zdCBvZiBhZGRpdGlvbmFsIENTUy4gU2V0IHRoaXMgdmFyaWFibGUgdG8gZmFsc2UgdG9cbi8vLyBkaXNhYmxlIGdlbmVyYXRpbmcgZmFsbGJhY2sgZGVjbGFyYXRpb25zLlxuJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBXcml0ZXMgYSBDU1MgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uIFRoaXMgbWl4aW4gaXMgdXNlZCB0aHJvdWdob3V0IHRoZVxuLy8vIHRoZW1lIHBhY2thZ2UgZm9yIGNvbnNpc3RlbmN5IGZvciBkeW5hbWljYWxseSBzZXR0aW5nIENTUyBwcm9wZXJ0eSB2YWx1ZXMuXG4vLy9cbi8vLyBUaGlzIG1peGluIG1heSBvcHRpb25hbGx5IHRha2UgYSBmYWxsYmFjayB2YWx1ZS4gRm9yIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2hcbi8vLyBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zIGxpa2UgbWluIGFuZCBtYXgsIGEgZmFsbGJhY2sgdmFsdWUgaXNcbi8vLyByZWNvbW1lbmRlZCB0byBzdXBwb3J0IG9sZGVyIGJyb3dzZXJzLlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRwcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgb2YgdGhlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBDU1MgZGVjbGFyYXRpb24uIFRoZSB2YWx1ZSBzaG91bGQgYmVcbi8vLyAgICAgcmVzb2x2ZWQgYnkgb3RoZXIgdGhlbWUgZnVuY3Rpb25zIGZpcnN0IChpLmUuIGN1c3RvbSBwcm9wZXJ0eSBNYXBzIGFuZFxuLy8vICAgICBNYXRlcmlhbCB0aGVtZSBrZXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgbWl4aW4pLiBJZiB0aGUgdmFsdWUgaXNcbi8vLyAgICAgbnVsbCwgbm8gZGVjbGFyYXRpb25zIHdpbGwgYmUgZW1pdHRlZC5cbi8vLyBAcGFyYW0geyp9ICRmYWxsYmFjayAtIEFuIG9wdGlvbmFsIGZhbGxiYWNrIHZhbHVlIGZvciBvbGRlciBicm93c2Vycy4gSWZcbi8vLyAgICAgcHJvdmlkZWQsIGEgc2Vjb25kIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIHdpbGwgYmUgYWRkZWQgYmVmb3JlIHRoZVxuLy8vICAgICBtYWluIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7TWFwfSAkZ3NzIC0gQW4gb3B0aW9uYWwgTWFwIG9mIEdTUyBhbm5vdGF0aW9ucyB0byBhZGQuXG4vLy8gQHBhcmFtIHtCb29sfSAkaW1wb3J0YW50IC0gSWYgdHJ1ZSwgYWRkIGAhaW1wb3J0YW50YCB0byB0aGUgZGVjbGFyYXRpb24uXG5AbWl4aW4gZGVjbGFyYXRpb24oXG4gICRwcm9wZXJ0eSxcbiAgJHZhbHVlLFxuICAkZmFsbGJhY2stdmFsdWU6IG51bGwsXG4gICRnc3M6ICgpLFxuICAkaW1wb3J0YW50OiBmYWxzZVxuKSB7XG4gIC8vIE5vcm1hbGx5IHNldHRpbmcgYSBudWxsIHZhbHVlIHRvIGEgcHJvcGVydHkgd2lsbCBub3QgZW1pdCBDU1MsIHNvIG1peGluc1xuICAvLyB3b3VsZG4ndCBuZWVkIHRvIGNoZWNrIHRoaXMuIEhvd2V2ZXIsIFNhc3Mgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVcbiAgLy8gaW50ZXJwb2xhdGVkIHByb3BlcnR5IGlzIGEgY3VzdG9tIHByb3BlcnR5LlxuICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICRpbXBvcnRhbnQtcnVsZTogaWYoJGltcG9ydGFudCwgJyAhaW1wb3J0YW50JywgJycpO1xuXG4gICAgQGlmICRmYWxsYmFjay12YWx1ZSBhbmQgJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICAgI3skcHJvcGVydHl9OiAjeyRmYWxsYmFjay12YWx1ZX0gI3skaW1wb3J0YW50LXJ1bGV9O1xuXG4gICAgICAvLyBBZGQgQGFsdGVybmF0ZSB0byBhbm5vdGF0aW9ucy5cbiAgICAgICRnc3M6IG1hcC5tZXJnZShcbiAgICAgICAgJGdzcyxcbiAgICAgICAgKFxuICAgICAgICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX0jeyRpbXBvcnRhbnQtcnVsZX07XG4gIH1cbn1cblxuLy8vIFVucGFja3Mgc2hvcnRoYW5kIHZhbHVlcyBmb3IgQ1NTIHByb3BlcnRpZXMgKGkuZS4gbGlzdHMgb2YgMS0zIHZhbHVlcykuXG4vLy8gSWYgYSBsaXN0IG9mIDQgdmFsdWVzIGlzIGdpdmVuLCBpdCBpcyByZXR1cm5lZCBhcy1pcy5cbi8vL1xuLy8vIEV4YW1wbGVzOlxuLy8vXG4vLy8gdW5wYWNrLXZhbHVlKDRweCkgPT4gNHB4IDRweCA0cHggNHB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHgpID0+IDRweCAycHggNHB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDJweCkgPT4gNHB4IDJweCAycHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMCAycHgpID0+IDRweCAycHggMCAycHhcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyIHwgTWFwIHwgTGlzdH0gJHZhbHVlIC0gTGlzdCBvZiAxIHRvIDQgdmFsdWUgbnVtYmVycy5cbi8vLyBAcmV0dXJuIHtMaXN0fSBhIExpc3Qgb2YgNCB2YWx1ZSBudW1iZXJzLlxuQGZ1bmN0aW9uIHVucGFjay12YWx1ZSgkdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdmFsdWUpID09ICdtYXAnIG9yIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMSB7XG4gICAgQHJldHVybiAkdmFsdWUgJHZhbHVlICR2YWx1ZSAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSA0IHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDMge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMylcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAyIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDEpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGVycm9yIFwiSW52YWxpZCBDU1MgcHJvcGVydHkgdmFsdWU6ICcjeyR2YWx1ZX0nIGlzIG1vcmUgdGhhbiA0IHZhbHVlc1wiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUpAnimation]
      }
    });
  }
}


/***/ }),

/***/ 12150:
/*!*********************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonModule: () => (/* binding */ ComingSoonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon-routing.module */ 60167);
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-soon.component */ 91495);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/fury-shared.module */ 80253);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/card/card.module */ 60858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






class ComingSoonModule {
  static {
    this.ɵfac = function ComingSoonModule_Factory(t) {
      return new (t || ComingSoonModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ComingSoonModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComingSoonModule, {
    declarations: [_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule]
  });
})();

/***/ }),

/***/ 17772:
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faFacebook.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'facebook';
var width = 512;
var height = 512;
var aliases = [62000];
var unicode = 'f09a';
var svgPathData = 'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faFacebook = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 5295:
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faGithub.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'github';
var width = 496;
var height = 512;
var aliases = [];
var unicode = 'f09b';
var svgPathData = 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faGithub = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 7750:
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'instagram';
var width = 448;
var height = 512;
var aliases = [];
var unicode = 'f16d';
var svgPathData = 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faInstagram = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 22428:
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faPinterest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'pinterest';
var width = 496;
var height = 512;
var aliases = [];
var unicode = 'f0d2';
var svgPathData = 'M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faPinterest = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 18201:
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'twitter';
var width = 512;
var height = 512;
var aliases = [];
var unicode = 'f099';
var svgPathData = 'M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faTwitter = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coming-soon_coming-soon_module_ts.js.map