(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-end\">\n    <div class=\"col offset-11\">\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"invertPlayersSwitch()\">\n                    <fa-icon [icon]=\"['fas', 'exchange-alt']\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"hideMyHandSwitch()\" [ngClass]=\"{'active': hideMyHand}\">\n                    <fa-icon [icon]=\"['fas', 'eye-slash']\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"undo()\">\n                    <fa-icon [icon]=\"['fas', 'undo-alt']\"></fa-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<main class=\"p-3\">\n  <div class=\"fluid-container\">\n    \n    <div class=\"row justify-content-md-center\">\n      <div [ngClass]=\"{'col order-1': !inverted, 'col-2 order-2': inverted}\">\n          <button type=\"button\" class=\"btn btn-light d-block action-button\" (click)=\"opponent1Action.open()\" title=\"Opponent 1\">\n                <fa-icon [icon]=\"['fas', 'user-ninja']\"></fa-icon>\n          </button> \n          <canasta-card-back [count]=\"state.play.opponent1.handCount\" ></canasta-card-back>\n      </div>\n      <div [ngClass]=\"{'col-2 order-2': !inverted, 'col order-1': inverted}\">\n          <button type=\"button\" class=\"btn btn-light d-block action-button\" (click)=\"partnerAction.open()\" title=\"Partner\">\n                <fa-icon [icon]=\"['far', 'grin-beam-sweat']\"></fa-icon>\n          </button> \n          <canasta-card-back [count]=\"state.play.partner.handCount\"></canasta-card-back>\n      </div>\n    </div>\n    <div class=\"game-table\">\n      <div class=\"row\">\n          <div class=\"col-2\">\n              <p>Red threes</p>\n              <canasta-card *ngFor=\"let card of state.play.table.opponentGame.redThrees\" [card]=\"card\"></canasta-card>\n          </div>\n          <div class=\"col\">\n              <p>Oponnent's table</p>\n              <canasta-card-meld *ngFor=\"let meld of state.play.table.opponentGame.melds\" [meld]=\"meld\"></canasta-card-meld>\n          </div>\n      </div>\n      <div class=\"row neutral-zone\">\n          <div class=\"col\">\n              <p>Side deck</p>\n              <canasta-card-back *ngIf=\"state.play.table.sideDeck1Avaible\"></canasta-card-back>\n              <canasta-card-back *ngIf=\"state.play.table.sideDeck2Avaible\"></canasta-card-back>\n          </div>\n          <div class=\"col\">\n              <p>Discard</p>\n              <canasta-card *ngIf=\"lastDiscard\" [card]=\"lastDiscard\"></canasta-card>\n          </div>\n          <div class=\"col\">\n              <p>Main deck</p>\n              <canasta-card-back [count]=\"state.play.table.maindDeckCount\"></canasta-card-back>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-2\">\n              <p>Red threes</p>\n              <canasta-card *ngFor=\"let card of state.play.table.myGame.redThrees\" [card]=\"card\"></canasta-card>\n          </div>\n          <div class=\"col\">\n              <p>My table</p>\n              <canasta-card-meld *ngFor=\"let meld of state.play.table.myGame.melds; let i = index\" \n                [meld]=\"meld\"\n                (addCardClick)=\"addMeldCard($event, i)\"></canasta-card-meld>\n          </div>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col\" [ngClass]=\"{'order-1': !inverted, 'order-2': inverted}\">\n        <button type=\"button\" class=\"btn btn-light d-block action-button\" (click)=\"meAction.open()\" \n            title=\"Me\"\n            [ngClass]=\"{'float-right': inverted}\">\n                <fa-icon [icon]=\"['far', 'grin-beam']\"></fa-icon>\n        </button> \n        <div class=\"d-inline\" *ngFor=\"let card of state.play.me.hand\">\n            <canasta-card *ngIf=\"!hideMyHand\" [card]=\"card\" [ngClass]=\"{'float-right': inverted}\"></canasta-card>\n            <canasta-card-back *ngIf=\"hideMyHand\"></canasta-card-back>\n        </div>\n        \n      </div>\n      <div class=\"col-2\" [ngClass]=\"{'order-2': !inverted, 'order-1': inverted}\">\n          <button type=\"button\" class=\"btn btn-light d-block action-button\" (click)=\"opponent2Action.open()\" title=\"Opponent 2\">\n            <fa-icon [icon]=\"['fas', 'user-ninja']\"></fa-icon>\n          </button> \n          <canasta-card-back [count]=\"state.play.opponent2.handCount\"></canasta-card-back>\n      </div>\n    </div>\n    </div>\n</main>\n\n<canasta-player-action [player]=\"me\" [hand]=\"state.play.me.hand\" modalId=\"meAction\" (actionDone)=\"actionDone($event)\" #meAction></canasta-player-action>\n<canasta-player-action [player]=\"partner\" [hand]=\"state.play.partner.hand\" modalId=\"partnerAction\" (actionDone)=\"actionDone($event)\" #partnerAction></canasta-player-action>\n<canasta-player-action [player]=\"opponent1\" [hand]=\"state.play.opponent1.hand\" modalId=\"opponent1Action\" (actionDone)=\"actionDone($event)\" #opponent1Action></canasta-player-action>\n<canasta-player-action [player]=\"opponent2\" [hand]=\"state.play.opponent2.hand\" modalId=\"opponent2Action\" (actionDone)=\"actionDone($event)\" #opponent2Action></canasta-player-action>\n\n<pre hidden>\n  {{ state.table | json }}\n</pre>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/player/player.service */ "./src/app/model/player/player.service.ts");
/* harmony import */ var _model_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/state/state.service */ "./src/app/model/state/state.service.ts");
/* harmony import */ var _player_action_player_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-action/player-action.component */ "./src/app/player-action/player-action.component.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(state, me, partner, opponent1, opponent2) {
        this.state = state;
        this.me = me;
        this.partner = partner;
        this.opponent1 = opponent1;
        this.opponent2 = opponent2;
        this.title = 'Canasta';
        this.myHandSelection = [];
        this.inverted = false;
        this.hideMyHand = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.actionDone = function (action) {
        this.checkLastDiscard();
        this.state.registerState();
    };
    AppComponent.prototype.checkLastDiscard = function () {
        if (this.state.play.table.discardPile.length == 0)
            this.lastDiscard = null;
        else
            this.lastDiscard = this.state.play.table.discardPile[this.state.play.table.discardPile.length - 1];
    };
    AppComponent.prototype.undo = function () {
        this.state.undo();
        this.checkLastDiscard();
    };
    AppComponent.prototype.invertPlayersSwitch = function () {
        this.inverted = !this.inverted;
    };
    AppComponent.prototype.hideMyHandSwitch = function () {
        this.hideMyHand = !this.hideMyHand;
    };
    AppComponent.prototype.addMeldCard = function (cardIndex, meldIndex) {
        this.meAction.open(meldIndex, cardIndex);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meAction'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _player_action_player_action_component__WEBPACK_IMPORTED_MODULE_4__["PlayerActionComponent"])
    ], AppComponent.prototype, "meAction", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('me')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('partner')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('opponent1')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('opponent2')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _model_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _model_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _model_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _model_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _card_back_card_back_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-back/card-back.component */ "./src/app/card-back/card-back.component.ts");
/* harmony import */ var _card_selection_card_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-selection/card-selection.component */ "./src/app/card-selection/card-selection.component.ts");
/* harmony import */ var _card_meld_card_meld_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-meld/card-meld.component */ "./src/app/card-meld/card-meld.component.ts");
/* harmony import */ var _model_game_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/game.service */ "./src/app/model/game.service.ts");
/* harmony import */ var _model_player_me_player_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/player/me-player.service */ "./src/app/model/player/me-player.service.ts");
/* harmony import */ var _model_player_other_player_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/player/other-player.service */ "./src/app/model/player/other-player.service.ts");
/* harmony import */ var _player_action_player_action_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player-action/player-action.component */ "./src/app/player-action/player-action.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _model_state_state_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./model/state/state.service */ "./src/app/model/state/state.service.ts");
/* harmony import */ var _model_table_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./model/table.service */ "./src/app/model/table.service.ts");




















var myGameFactory = function (stateService) {
    return new _model_game_service__WEBPACK_IMPORTED_MODULE_10__["GameService"](stateService.createMyGame());
};
var opponentGameFactory = function (stateService) {
    return new _model_game_service__WEBPACK_IMPORTED_MODULE_10__["GameService"](stateService.createOpponentGame());
};
var mePlayerFactory = function (tableService, game, stateService) {
    return new _model_player_me_player_service__WEBPACK_IMPORTED_MODULE_11__["MePlayerService"](tableService, game, stateService.createMePlayer());
};
var partnerPlayerFactory = function (tableService, game, stateService) {
    return new _model_player_other_player_service__WEBPACK_IMPORTED_MODULE_12__["OtherPlayerService"](tableService, game, stateService.createPartnerPlayer());
};
var opponent1PlayerFactory = function (tableService, game, stateService) {
    return new _model_player_other_player_service__WEBPACK_IMPORTED_MODULE_12__["OtherPlayerService"](tableService, game, stateService.createOponent1Player());
};
var opponent2PlayerFactory = function (tableService, game, stateService) {
    return new _model_player_other_player_service__WEBPACK_IMPORTED_MODULE_12__["OtherPlayerService"](tableService, game, stateService.createOponent2Player());
};
var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faUserNinja"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faUser"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faGrinBeam"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faGrinBeamSweat"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faExchangeAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faUndoAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faCaretRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faCaretLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faEyeSlash"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _card_back_card_back_component__WEBPACK_IMPORTED_MODULE_7__["CardBackComponent"],
                _card_selection_card_selection_component__WEBPACK_IMPORTED_MODULE_8__["CardSelectionComponent"],
                _card_meld_card_meld_component__WEBPACK_IMPORTED_MODULE_9__["CardMeldComponent"],
                _player_action_player_action_component__WEBPACK_IMPORTED_MODULE_13__["PlayerActionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
            ],
            providers: [
                _model_state_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"],
                _model_table_service__WEBPACK_IMPORTED_MODULE_19__["TableService"],
                { provide: 'myGame', useFactory: myGameFactory, deps: [_model_state_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"]] },
                { provide: 'opponentGame', useFactory: opponentGameFactory, deps: [_model_state_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"]] },
                { provide: 'me', useFactory: mePlayerFactory, deps: [_model_table_service__WEBPACK_IMPORTED_MODULE_19__["TableService"], 'myGame', _model_state_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"]] },
                { provide: 'partner', useFactory: partnerPlayerFactory, deps: [_model_table_service__WEBPACK_IMPORTED_MODULE_19__["TableService"], 'myGame', _model_state_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"]] },
                { provide: 'opponent1', useFactory: opponent1PlayerFactory, deps: [_model_table_service__WEBPACK_IMPORTED_MODULE_19__["TableService"], 'opponentGame', _model_state_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"]] },
                { provide: 'opponent2', useFactory: opponent2PlayerFactory, deps: [_model_table_service__WEBPACK_IMPORTED_MODULE_19__["TableService"], 'opponentGame', _model_state_state_service__WEBPACK_IMPORTED_MODULE_18__["StateService"]] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-back/card-back.component.html":
/*!****************************************************!*\
  !*** ./src/app/card-back/card-back.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <div class=\"card-back\">\n      <span class=\"middle_center\">\n          <img src=\"assets/img/back.png\" />\n          <span class=\"card-count\">{{ count }}</span>\n      </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/card-back/card-back.component.less":
/*!****************************************************!*\
  !*** ./src/app/card-back/card-back.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtYmFjay9jYXJkLWJhY2suY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/card-back/card-back.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-back/card-back.component.ts ***!
  \**************************************************/
/*! exports provided: CardBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBackComponent", function() { return CardBackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardBackComponent = /** @class */ (function () {
    function CardBackComponent() {
    }
    CardBackComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardBackComponent.prototype, "count", void 0);
    CardBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'canasta-card-back',
            template: __webpack_require__(/*! ./card-back.component.html */ "./src/app/card-back/card-back.component.html"),
            styles: [__webpack_require__(/*! ./card-back.component.less */ "./src/app/card-back/card-back.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardBackComponent);
    return CardBackComponent;
}());



/***/ }),

/***/ "./src/app/card-meld/card-meld.component.html":
/*!****************************************************!*\
  !*** ./src/app/card-meld/card-meld.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-4 d-inline-block\">\n    <div class=\"d-flex flex-row\">\n        <canasta-card-selection [source]=\"cardSelectionSource\" [singleSelection]=\"true\"></canasta-card-selection>\n    </div>\n    \n    <div class=\"d-flex flex-row justify-content-center\">\n        <div class=\"btn-toolbar\" role=\"toolbar\" *ngIf=\"showToolbar()\">\n            <div class=\"btn-group mr-2\" role=\"group\">\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"addCardLeft()\">\n                    <fa-icon [icon]=\"['fas', 'plus']\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"moveLeft()\">\n                    <fa-icon [icon]=\"['fas', 'caret-left']\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"moveRight()\">\n                    <fa-icon [icon]=\"['fas', 'caret-right']\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"addCardRight()\">\n                    <fa-icon [icon]=\"['fas', 'plus']\"></fa-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/card-meld/card-meld.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-meld/card-meld.component.ts ***!
  \**************************************************/
/*! exports provided: CardMeldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMeldComponent", function() { return CardMeldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/game.service */ "./src/app/model/game.service.ts");



var CardMeldComponent = /** @class */ (function () {
    function CardMeldComponent() {
        this.addCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardMeldComponent.prototype.ngOnInit = function () {
        this.cardSelectionSource = this.meld.cards.map(function (card) { return ({ card: card }); });
    };
    CardMeldComponent.prototype.showToolbar = function () {
        return !!this.cardSelectionSource.find(function (selection) { return selection.selected; });
    };
    CardMeldComponent.prototype.moveLeft = function () {
        var card = this.cardSelectionSource.find(function (card) { return card.selected; });
        this.move(this.cardSelectionSource, card, -1);
    };
    ;
    CardMeldComponent.prototype.moveRight = function () {
        var card = this.cardSelectionSource.find(function (card) { return card.selected; });
        this.move(this.cardSelectionSource, card, 1);
    };
    ;
    CardMeldComponent.prototype.addCardLeft = function () {
        var card = this.cardSelectionSource.find(function (card) { return card.selected; });
        var index = this.cardSelectionSource.indexOf(card);
        this.addCardClick.emit(index);
    };
    CardMeldComponent.prototype.addCardRight = function () {
        var card = this.cardSelectionSource.find(function (card) { return card.selected; });
        var index = this.cardSelectionSource.indexOf(card);
        index++;
        this.addCardClick.emit(index);
    };
    CardMeldComponent.prototype.move = function (array, element, delta) {
        var index = array.indexOf(element);
        var newIndex = index + delta;
        if (newIndex < 0 || newIndex == array.length)
            return; //Already at the top or bottom.
        var indexes = [index, newIndex].sort(); //Sort the indixes
        array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]); //Replace from lowest index, two elements, reverting the order
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_game_service__WEBPACK_IMPORTED_MODULE_2__["Meld"])
    ], CardMeldComponent.prototype, "meld", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardMeldComponent.prototype, "addCardClick", void 0);
    CardMeldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'canasta-card-meld',
            template: __webpack_require__(/*! ./card-meld.component.html */ "./src/app/card-meld/card-meld.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardMeldComponent);
    return CardMeldComponent;
}());



/***/ }),

/***/ "./src/app/card-selection/card-selection.component.html":
/*!**************************************************************!*\
  !*** ./src/app/card-selection/card-selection.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<canasta-card *ngFor=\"let sourceIem of source; let i = index\" \n  [card]=\"sourceIem.card\"\n  (click)=\"selectCard(i)\"\n  [ngClass]=\"{ 'selected': sourceIem.selected }\" \n  class=\"selection\"></canasta-card>"

/***/ }),

/***/ "./src/app/card-selection/card-selection.component.ts":
/*!************************************************************!*\
  !*** ./src/app/card-selection/card-selection.component.ts ***!
  \************************************************************/
/*! exports provided: CardSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSelectionComponent", function() { return CardSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardSelectionComponent = /** @class */ (function () {
    function CardSelectionComponent() {
        this.singleSelection = false;
    }
    CardSelectionComponent.prototype.ngOnInit = function () {
    };
    CardSelectionComponent.prototype.selectCard = function (index) {
        if (this.singleSelection)
            this.source
                .filter(function (item, currentIndex) { return item.selected && index != currentIndex; })
                .forEach(function (item) { item.selected = false; });
        this.source[index].selected = !this.source[index].selected;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardSelectionComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardSelectionComponent.prototype, "singleSelection", void 0);
    CardSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'canasta-card-selection',
            template: __webpack_require__(/*! ./card-selection.component.html */ "./src/app/card-selection/card-selection.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardSelectionComponent);
    return CardSelectionComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div [ngClass]=\"card.value.styleClass + ' ' + card.suit.styleClass\">\n      <div class=\"corner top\">\n          <span class=\"number\">{{ card.value.label }}</span>\n          <span class=\"suit-corner\">{{ card.suit.symbol }}</span>\n      </div>\n      \n      <span *ngIf=\"card.value.rank > 10\" class=\"face middle_center\">\n          <img [src]=\"getImagePath()\">\n      </span>\n      <div *ngIf=\"card.value.rank <= 10\">\n        <span class=\"suit top_left\">{{ card.suit.symbol }}</span>\n        <span class=\"suit top_right\">{{ card.suit.symbol }}</span>\n        <span class=\"suit top_center\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_left\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_right\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_top_left\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_top_center\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_top_right\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_center\">{{ card.suit.symbol }}</span>\n        <span class=\"suit bottom_left\">{{ card.suit.symbol }}</span>\n        <span class=\"suit bottom_right\">{{ card.suit.symbol }}</span>\n        <span class=\"suit bottom_center\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_bottom_center\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_bottom_left\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_bottom_right\">{{ card.suit.symbol }}</span>\n        <span class=\"suit middle_center\">{{ card.suit.symbol }}</span>\n      </div>\n  \n\n      <div class=\"corner bottom\">\n          <span class=\"number\">{{ card.value.label }}</span>\n          <span class=\"suit-corner\">{{ card.suit.symbol }}</span>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/card/card.component.less":
/*!******************************************!*\
  !*** ./src/app/card/card.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-ace .suit.top_left,\n.card-ace .suit.top_center,\n.card-ace .suit.top_right,\n.card-ace .suit.middle_left,\n.card-ace .suit.middle_right,\n.card-ace .suit.middle_top_left,\n.card-ace .suit.middle_top_center,\n.card-ace .suit.middle_top_right,\n.card-ace .suit.bottom_left,\n.card-ace .suit.bottom_right,\n.card-ace .suit.bottom_center,\n.card-ace .suit.middle_bottom_center,\n.card-ace .suit.middle_bottom_left,\n.card-ace .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-two .suit.top_left,\n.card-two .suit.top_right,\n.card-two .suit.middle_left,\n.card-two .suit.middle_right,\n.card-two .suit.middle_top_left,\n.card-two .suit.middle_top_center,\n.card-two .suit.middle_top_right,\n.card-two .suit.middle_center,\n.card-two .suit.bottom_left,\n.card-two .suit.bottom_right,\n.card-two .suit.middle_bottom_center,\n.card-two .suit.middle_bottom_left,\n.card-two .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-three .suit.top_left,\n.card-three .suit.top_right,\n.card-three .suit.middle_left,\n.card-three .suit.middle_right,\n.card-three .suit.middle_top_left,\n.card-three .suit.middle_top_center,\n.card-three .suit.middle_top_right,\n.card-three .suit.bottom_left,\n.card-three .suit.bottom_right,\n.card-three .suit.middle_bottom_center,\n.card-three .suit.middle_bottom_left,\n.card-three .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-four .suit.middle_center,\n.card-four .suit.top_center,\n.card-four .suit.middle_left,\n.card-four .suit.middle_right,\n.card-four .suit.middle_top_left,\n.card-four .suit.middle_top_center,\n.card-four .suit.middle_top_right,\n.card-four .suit.bottom_center,\n.card-four .suit.middle_bottom_center,\n.card-four .suit.middle_bottom_left,\n.card-four .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-five .suit.top_center,\n.card-five .suit.middle_top_left,\n.card-five .suit.middle_left,\n.card-five .suit.middle_right,\n.card-five .suit.middle_top_center,\n.card-five .suit.middle_top_right,\n.card-five .suit.bottom_center,\n.card-five .suit.middle_bottom_center,\n.card-five .suit.middle_bottom_left,\n.card-five .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-six .suit.middle_center,\n.card-six .suit.top_center,\n.card-six .suit.middle_top_left,\n.card-six .suit.middle_top_center,\n.card-six .suit.middle_top_right,\n.card-six .suit.bottom_center,\n.card-six .suit.middle_bottom_center,\n.card-six .suit.middle_bottom_left,\n.card-six .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-seven .suit.middle_center,\n.card-seven .suit.top_center,\n.card-seven .suit.middle_top_left,\n.card-seven .suit.middle_top_right,\n.card-seven .suit.bottom_center,\n.card-seven .suit.middle_bottom_center,\n.card-seven .suit.middle_bottom_left,\n.card-seven .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-eight .suit.middle_center,\n.card-eight .suit.top_center,\n.card-eight .suit.middle_top_left,\n.card-eight .suit.middle_top_right,\n.card-eight .suit.bottom_center,\n.card-eight .suit.middle_bottom_left,\n.card-eight .suit.middle_bottom_right {\n  display: none !important;\n}\n.card-nine .suit.top_center,\n.card-nine .suit.middle_left,\n.card-nine .suit.middle_right,\n.card-nine .suit.middle_top_center,\n.card-nine .suit.bottom_center,\n.card-nine .suit.middle_bottom_center {\n  display: none !important;\n}\n.card-ten .suit.middle_center,\n.card-ten .suit.top_center,\n.card-ten .suit.middle_left,\n.card-ten .suit.middle_right,\n.card-ten .suit.bottom_center {\n  display: none !important;\n}\n.card-joker .suit.middle_center,\n.card-joker .suit.top_left,\n.card-joker .suit.top_center,\n.card-joker .suit.top_right,\n.card-joker .suit.middle_left,\n.card-joker .suit.middle_right,\n.card-joker .suit.middle_top_left,\n.card-joker .suit.middle_top_center,\n.card-joker .suit.middle_top_right,\n.card-joker .suit.bottom_left,\n.card-joker .suit.bottom_right,\n.card-joker .suit.bottom_center,\n.card-joker .suit.middle_bottom_center,\n.card-joker .suit.middle_bottom_left,\n.card-joker .suit.middle_bottom_right {\n  display: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DYXJyaWpvL2NhbmFzdGEvc3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Ozs7Ozs7Ozs7RUFjSSx3QkFBQTtBQ0RKO0FESUE7Ozs7Ozs7Ozs7Ozs7RUFhSSx3QkFBQTtBQ0ZKO0FES0E7Ozs7Ozs7Ozs7OztFQVlJLHdCQUFBO0FDSEo7QURPQTs7Ozs7Ozs7Ozs7RUFXSSx3QkFBQTtBQ0xKO0FEUUE7Ozs7Ozs7Ozs7RUFVSSx3QkFBQTtBQ05KO0FEU0E7Ozs7Ozs7OztFQVNJLHdCQUFBO0FDUEo7QURVQTs7Ozs7Ozs7RUFRSSx3QkFBQTtBQ1JKO0FEV0E7Ozs7Ozs7RUFPSSx3QkFBQTtBQ1RKO0FEWUE7Ozs7OztFQU1JLHdCQUFBO0FDVko7QURhQTs7Ozs7RUFLSSx3QkFBQTtBQ1hKO0FEY0E7Ozs7Ozs7Ozs7Ozs7OztFQWVJLHdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNhcmQtYWNlIC5zdWl0LnRvcF9sZWZ0LFxuLmNhcmQtYWNlIC5zdWl0LnRvcF9jZW50ZXIsXG4uY2FyZC1hY2UgLnN1aXQudG9wX3JpZ2h0LFxuLmNhcmQtYWNlIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtYWNlIC5zdWl0Lm1pZGRsZV9yaWdodCxcbi5jYXJkLWFjZSAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC1hY2UgLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC1hY2UgLnN1aXQubWlkZGxlX3RvcF9yaWdodCxcbi5jYXJkLWFjZSAuc3VpdC5ib3R0b21fbGVmdCxcbi5jYXJkLWFjZSAuc3VpdC5ib3R0b21fcmlnaHQsXG4uY2FyZC1hY2UgLnN1aXQuYm90dG9tX2NlbnRlcixcbi5jYXJkLWFjZSAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLWFjZSAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1hY2UgLnN1aXQubWlkZGxlX2JvdHRvbV9yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC10d28gLnN1aXQudG9wX2xlZnQsXG4uY2FyZC10d28gLnN1aXQudG9wX3JpZ2h0LFxuLmNhcmQtdHdvIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtdHdvIC5zdWl0Lm1pZGRsZV9yaWdodCxcbi5jYXJkLXR3byAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC10d28gLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC10d28gLnN1aXQubWlkZGxlX3RvcF9yaWdodCxcbi5jYXJkLXR3byAuc3VpdC5taWRkbGVfY2VudGVyLFxuLmNhcmQtdHdvIC5zdWl0LmJvdHRvbV9sZWZ0LFxuLmNhcmQtdHdvIC5zdWl0LmJvdHRvbV9yaWdodCxcbi5jYXJkLXR3byAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLXR3byAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC10d28gLnN1aXQubWlkZGxlX2JvdHRvbV9yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC10aHJlZSAuc3VpdC50b3BfbGVmdCxcbi5jYXJkLXRocmVlIC5zdWl0LnRvcF9yaWdodCxcbi5jYXJkLXRocmVlIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtdGhyZWUgLnN1aXQubWlkZGxlX3JpZ2h0LFxuLmNhcmQtdGhyZWUgLnN1aXQubWlkZGxlX3RvcF9sZWZ0LFxuLmNhcmQtdGhyZWUgLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC10aHJlZSAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtdGhyZWUgLnN1aXQuYm90dG9tX2xlZnQsXG4uY2FyZC10aHJlZSAuc3VpdC5ib3R0b21fcmlnaHQsXG4uY2FyZC10aHJlZSAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLXRocmVlIC5zdWl0Lm1pZGRsZV9ib3R0b21fbGVmdCxcbi5jYXJkLXRocmVlIC5zdWl0Lm1pZGRsZV9ib3R0b21fcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4uY2FyZC1mb3VyIC5zdWl0Lm1pZGRsZV9jZW50ZXIsXG4uY2FyZC1mb3VyIC5zdWl0LnRvcF9jZW50ZXIsXG4uY2FyZC1mb3VyIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfcmlnaHQsXG4uY2FyZC1mb3VyIC5zdWl0Lm1pZGRsZV90b3BfbGVmdCxcbi5jYXJkLWZvdXIgLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC1mb3VyIC5zdWl0Lm1pZGRsZV90b3BfcmlnaHQsXG4uY2FyZC1mb3VyIC5zdWl0LmJvdHRvbV9jZW50ZXIsXG4uY2FyZC1mb3VyIC5zdWl0Lm1pZGRsZV9ib3R0b21fY2VudGVyLFxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1mb3VyIC5zdWl0Lm1pZGRsZV9ib3R0b21fcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtZml2ZSAuc3VpdC50b3BfY2VudGVyLFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC1maXZlIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfcmlnaHQsXG4uY2FyZC1maXZlIC5zdWl0Lm1pZGRsZV90b3BfY2VudGVyLFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtZml2ZSAuc3VpdC5ib3R0b21fY2VudGVyLFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLWZpdmUgLnN1aXQubWlkZGxlX2JvdHRvbV9sZWZ0LFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXNpeCAuc3VpdC5taWRkbGVfY2VudGVyLFxuLmNhcmQtc2l4IC5zdWl0LnRvcF9jZW50ZXIsXG4uY2FyZC1zaXggLnN1aXQubWlkZGxlX3RvcF9sZWZ0LFxuLmNhcmQtc2l4IC5zdWl0Lm1pZGRsZV90b3BfY2VudGVyLFxuLmNhcmQtc2l4IC5zdWl0Lm1pZGRsZV90b3BfcmlnaHQsXG4uY2FyZC1zaXggLnN1aXQuYm90dG9tX2NlbnRlcixcbi5jYXJkLXNpeCAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLXNpeCAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1zaXggLnN1aXQubWlkZGxlX2JvdHRvbV9yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1zZXZlbiAuc3VpdC5taWRkbGVfY2VudGVyLFxuLmNhcmQtc2V2ZW4gLnN1aXQudG9wX2NlbnRlcixcbi5jYXJkLXNldmVuIC5zdWl0Lm1pZGRsZV90b3BfbGVmdCxcbi5jYXJkLXNldmVuIC5zdWl0Lm1pZGRsZV90b3BfcmlnaHQsXG4uY2FyZC1zZXZlbiAuc3VpdC5ib3R0b21fY2VudGVyLFxuLmNhcmQtc2V2ZW4gLnN1aXQubWlkZGxlX2JvdHRvbV9jZW50ZXIsXG4uY2FyZC1zZXZlbiAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1zZXZlbiAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWVpZ2h0IC5zdWl0Lm1pZGRsZV9jZW50ZXIsXG4uY2FyZC1laWdodCAuc3VpdC50b3BfY2VudGVyLFxuLmNhcmQtZWlnaHQgLnN1aXQubWlkZGxlX3RvcF9sZWZ0LFxuLmNhcmQtZWlnaHQgLnN1aXQubWlkZGxlX3RvcF9yaWdodCxcbi5jYXJkLWVpZ2h0IC5zdWl0LmJvdHRvbV9jZW50ZXIsXG4uY2FyZC1laWdodCAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1laWdodCAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLW5pbmUgLnN1aXQudG9wX2NlbnRlcixcbi5jYXJkLW5pbmUgLnN1aXQubWlkZGxlX2xlZnQsXG4uY2FyZC1uaW5lIC5zdWl0Lm1pZGRsZV9yaWdodCxcbi5jYXJkLW5pbmUgLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC1uaW5lIC5zdWl0LmJvdHRvbV9jZW50ZXIsXG4uY2FyZC1uaW5lIC5zdWl0Lm1pZGRsZV9ib3R0b21fY2VudGVyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRlbiAuc3VpdC5taWRkbGVfY2VudGVyLFxuLmNhcmQtdGVuIC5zdWl0LnRvcF9jZW50ZXIsXG4uY2FyZC10ZW4gLnN1aXQubWlkZGxlX2xlZnQsXG4uY2FyZC10ZW4gLnN1aXQubWlkZGxlX3JpZ2h0LFxuLmNhcmQtdGVuIC5zdWl0LmJvdHRvbV9jZW50ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX2NlbnRlcixcbi5jYXJkLWpva2VyIC5zdWl0LnRvcF9sZWZ0LFxuLmNhcmQtam9rZXIgLnN1aXQudG9wX2NlbnRlcixcbi5jYXJkLWpva2VyIC5zdWl0LnRvcF9yaWdodCxcbi5jYXJkLWpva2VyIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX3JpZ2h0LFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX3RvcF9sZWZ0LFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC1qb2tlciAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtam9rZXIgLnN1aXQuYm90dG9tX2xlZnQsXG4uY2FyZC1qb2tlciAuc3VpdC5ib3R0b21fcmlnaHQsXG4uY2FyZC1qb2tlciAuc3VpdC5ib3R0b21fY2VudGVyLFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX2JvdHRvbV9jZW50ZXIsXG4uY2FyZC1qb2tlciAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1qb2tlciAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59IiwiLmNhcmQtYWNlIC5zdWl0LnRvcF9sZWZ0LFxuLmNhcmQtYWNlIC5zdWl0LnRvcF9jZW50ZXIsXG4uY2FyZC1hY2UgLnN1aXQudG9wX3JpZ2h0LFxuLmNhcmQtYWNlIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtYWNlIC5zdWl0Lm1pZGRsZV9yaWdodCxcbi5jYXJkLWFjZSAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC1hY2UgLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC1hY2UgLnN1aXQubWlkZGxlX3RvcF9yaWdodCxcbi5jYXJkLWFjZSAuc3VpdC5ib3R0b21fbGVmdCxcbi5jYXJkLWFjZSAuc3VpdC5ib3R0b21fcmlnaHQsXG4uY2FyZC1hY2UgLnN1aXQuYm90dG9tX2NlbnRlcixcbi5jYXJkLWFjZSAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLWFjZSAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1hY2UgLnN1aXQubWlkZGxlX2JvdHRvbV9yaWdodCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jYXJkLXR3byAuc3VpdC50b3BfbGVmdCxcbi5jYXJkLXR3byAuc3VpdC50b3BfcmlnaHQsXG4uY2FyZC10d28gLnN1aXQubWlkZGxlX2xlZnQsXG4uY2FyZC10d28gLnN1aXQubWlkZGxlX3JpZ2h0LFxuLmNhcmQtdHdvIC5zdWl0Lm1pZGRsZV90b3BfbGVmdCxcbi5jYXJkLXR3byAuc3VpdC5taWRkbGVfdG9wX2NlbnRlcixcbi5jYXJkLXR3byAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtdHdvIC5zdWl0Lm1pZGRsZV9jZW50ZXIsXG4uY2FyZC10d28gLnN1aXQuYm90dG9tX2xlZnQsXG4uY2FyZC10d28gLnN1aXQuYm90dG9tX3JpZ2h0LFxuLmNhcmQtdHdvIC5zdWl0Lm1pZGRsZV9ib3R0b21fY2VudGVyLFxuLmNhcmQtdHdvIC5zdWl0Lm1pZGRsZV9ib3R0b21fbGVmdCxcbi5jYXJkLXR3byAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtdGhyZWUgLnN1aXQudG9wX2xlZnQsXG4uY2FyZC10aHJlZSAuc3VpdC50b3BfcmlnaHQsXG4uY2FyZC10aHJlZSAuc3VpdC5taWRkbGVfbGVmdCxcbi5jYXJkLXRocmVlIC5zdWl0Lm1pZGRsZV9yaWdodCxcbi5jYXJkLXRocmVlIC5zdWl0Lm1pZGRsZV90b3BfbGVmdCxcbi5jYXJkLXRocmVlIC5zdWl0Lm1pZGRsZV90b3BfY2VudGVyLFxuLmNhcmQtdGhyZWUgLnN1aXQubWlkZGxlX3RvcF9yaWdodCxcbi5jYXJkLXRocmVlIC5zdWl0LmJvdHRvbV9sZWZ0LFxuLmNhcmQtdGhyZWUgLnN1aXQuYm90dG9tX3JpZ2h0LFxuLmNhcmQtdGhyZWUgLnN1aXQubWlkZGxlX2JvdHRvbV9jZW50ZXIsXG4uY2FyZC10aHJlZSAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC10aHJlZSAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfY2VudGVyLFxuLmNhcmQtZm91ciAuc3VpdC50b3BfY2VudGVyLFxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfbGVmdCxcbi5jYXJkLWZvdXIgLnN1aXQubWlkZGxlX3JpZ2h0LFxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC1mb3VyIC5zdWl0Lm1pZGRsZV90b3BfY2VudGVyLFxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtZm91ciAuc3VpdC5ib3R0b21fY2VudGVyLFxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLWZvdXIgLnN1aXQubWlkZGxlX2JvdHRvbV9sZWZ0LFxuLmNhcmQtZm91ciAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtZml2ZSAuc3VpdC50b3BfY2VudGVyLFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC1maXZlIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfcmlnaHQsXG4uY2FyZC1maXZlIC5zdWl0Lm1pZGRsZV90b3BfY2VudGVyLFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtZml2ZSAuc3VpdC5ib3R0b21fY2VudGVyLFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfYm90dG9tX2NlbnRlcixcbi5jYXJkLWZpdmUgLnN1aXQubWlkZGxlX2JvdHRvbV9sZWZ0LFxuLmNhcmQtZml2ZSAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtc2l4IC5zdWl0Lm1pZGRsZV9jZW50ZXIsXG4uY2FyZC1zaXggLnN1aXQudG9wX2NlbnRlcixcbi5jYXJkLXNpeCAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC1zaXggLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC1zaXggLnN1aXQubWlkZGxlX3RvcF9yaWdodCxcbi5jYXJkLXNpeCAuc3VpdC5ib3R0b21fY2VudGVyLFxuLmNhcmQtc2l4IC5zdWl0Lm1pZGRsZV9ib3R0b21fY2VudGVyLFxuLmNhcmQtc2l4IC5zdWl0Lm1pZGRsZV9ib3R0b21fbGVmdCxcbi5jYXJkLXNpeCAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtc2V2ZW4gLnN1aXQubWlkZGxlX2NlbnRlcixcbi5jYXJkLXNldmVuIC5zdWl0LnRvcF9jZW50ZXIsXG4uY2FyZC1zZXZlbiAuc3VpdC5taWRkbGVfdG9wX2xlZnQsXG4uY2FyZC1zZXZlbiAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtc2V2ZW4gLnN1aXQuYm90dG9tX2NlbnRlcixcbi5jYXJkLXNldmVuIC5zdWl0Lm1pZGRsZV9ib3R0b21fY2VudGVyLFxuLmNhcmQtc2V2ZW4gLnN1aXQubWlkZGxlX2JvdHRvbV9sZWZ0LFxuLmNhcmQtc2V2ZW4gLnN1aXQubWlkZGxlX2JvdHRvbV9yaWdodCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jYXJkLWVpZ2h0IC5zdWl0Lm1pZGRsZV9jZW50ZXIsXG4uY2FyZC1laWdodCAuc3VpdC50b3BfY2VudGVyLFxuLmNhcmQtZWlnaHQgLnN1aXQubWlkZGxlX3RvcF9sZWZ0LFxuLmNhcmQtZWlnaHQgLnN1aXQubWlkZGxlX3RvcF9yaWdodCxcbi5jYXJkLWVpZ2h0IC5zdWl0LmJvdHRvbV9jZW50ZXIsXG4uY2FyZC1laWdodCAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1laWdodCAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtbmluZSAuc3VpdC50b3BfY2VudGVyLFxuLmNhcmQtbmluZSAuc3VpdC5taWRkbGVfbGVmdCxcbi5jYXJkLW5pbmUgLnN1aXQubWlkZGxlX3JpZ2h0LFxuLmNhcmQtbmluZSAuc3VpdC5taWRkbGVfdG9wX2NlbnRlcixcbi5jYXJkLW5pbmUgLnN1aXQuYm90dG9tX2NlbnRlcixcbi5jYXJkLW5pbmUgLnN1aXQubWlkZGxlX2JvdHRvbV9jZW50ZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY2FyZC10ZW4gLnN1aXQubWlkZGxlX2NlbnRlcixcbi5jYXJkLXRlbiAuc3VpdC50b3BfY2VudGVyLFxuLmNhcmQtdGVuIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtdGVuIC5zdWl0Lm1pZGRsZV9yaWdodCxcbi5jYXJkLXRlbiAuc3VpdC5ib3R0b21fY2VudGVyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX2NlbnRlcixcbi5jYXJkLWpva2VyIC5zdWl0LnRvcF9sZWZ0LFxuLmNhcmQtam9rZXIgLnN1aXQudG9wX2NlbnRlcixcbi5jYXJkLWpva2VyIC5zdWl0LnRvcF9yaWdodCxcbi5jYXJkLWpva2VyIC5zdWl0Lm1pZGRsZV9sZWZ0LFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX3JpZ2h0LFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX3RvcF9sZWZ0LFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX3RvcF9jZW50ZXIsXG4uY2FyZC1qb2tlciAuc3VpdC5taWRkbGVfdG9wX3JpZ2h0LFxuLmNhcmQtam9rZXIgLnN1aXQuYm90dG9tX2xlZnQsXG4uY2FyZC1qb2tlciAuc3VpdC5ib3R0b21fcmlnaHQsXG4uY2FyZC1qb2tlciAuc3VpdC5ib3R0b21fY2VudGVyLFxuLmNhcmQtam9rZXIgLnN1aXQubWlkZGxlX2JvdHRvbV9jZW50ZXIsXG4uY2FyZC1qb2tlciAuc3VpdC5taWRkbGVfYm90dG9tX2xlZnQsXG4uY2FyZC1qb2tlciAuc3VpdC5taWRkbGVfYm90dG9tX3JpZ2h0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model */ "./src/app/model/index.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.getImagePath = function () {
        var _this = this;
        if (this.card.suit) {
            var image = this.card.suit.getImageFaces().find(function (face) { return face.value == _this.card.value.rank; }).image;
            ;
            return 'assets/img/faces/' + image;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model__WEBPACK_IMPORTED_MODULE_2__["Card"])
    ], CardComponent.prototype, "card", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'canasta-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.less */ "./src/app/card/card.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/model/action.ts":
/*!*********************************!*\
  !*** ./src/app/model/action.ts ***!
  \*********************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.getAll = function () {
        return [this.DRAW, this.ADD_RED_THREE, this.DISCARD, this.PICK_UP_DISCARD, this.MELD];
    };
    Action.DRAW = 'Draw';
    Action.ADD_RED_THREE = 'Add red three';
    Action.DISCARD = 'Discard';
    Action.PICK_UP_DISCARD = 'Pick up discard';
    Action.MELD = 'Add meld';
    return Action;
}());



/***/ }),

/***/ "./src/app/model/card-suit.ts":
/*!************************************!*\
  !*** ./src/app/model/card-suit.ts ***!
  \************************************/
/*! exports provided: CardSuit, ImageFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSuit", function() { return CardSuit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFace", function() { return ImageFace; });
var CardSuit = /** @class */ (function () {
    function CardSuit() {
    }
    CardSuit.getAll = function () {
        return [this.DIAMOND, this.CLUB, this.HEART, this.SPADE];
    };
    CardSuit.DIAMOND = {
        id: 'D',
        symbol: '♦',
        styleClass: 'diamond',
        getImageFaces: function () {
            return [
                { value: 11, image: 'face-jack-diamond.png' },
                { value: 12, image: 'face-queen-diamond.png' },
                { value: 13, image: 'face-king-diamond.png' }
            ];
        }
    };
    CardSuit.CLUB = {
        id: 'C',
        symbol: '♣',
        styleClass: 'club',
        getImageFaces: function () {
            return [
                { value: 11, image: 'face-jack-club.png' },
                { value: 12, image: 'face-queen-club.png' },
                { value: 13, image: 'face-king-club.png' }
            ];
        }
    };
    CardSuit.HEART = {
        id: 'H',
        symbol: '♥',
        styleClass: 'heart',
        getImageFaces: function () {
            return [
                { value: 11, image: 'face-jack-heart.png' },
                { value: 12, image: 'face-queen-heart.png' },
                { value: 13, image: 'face-king-heart.png' }
            ];
        }
    };
    CardSuit.SPADE = {
        id: 'S',
        symbol: '♠',
        styleClass: 'spade',
        getImageFaces: function () {
            return [
                { value: 11, image: 'face-jack-spade.png' },
                { value: 12, image: 'face-queen-spade.png' },
                { value: 13, image: 'face-king-spade.png' }
            ];
        }
    };
    return CardSuit;
}());

var ImageFace = /** @class */ (function () {
    function ImageFace() {
    }
    return ImageFace;
}());



/***/ }),

/***/ "./src/app/model/card-value.ts":
/*!*************************************!*\
  !*** ./src/app/model/card-value.ts ***!
  \*************************************/
/*! exports provided: CardValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardValue", function() { return CardValue; });
var CardValue = /** @class */ (function () {
    function CardValue() {
    }
    CardValue.getAll = function () {
        return [
            this.JOKER, this.ACE, this.TWO, this.THREE, this.FOUR, this.FIVE, this.SIX,
            this.SEVEN, this.EIGHT, this.NINE, this.TEN, this.JACK, this.QUEEN, this.KING
        ];
    };
    CardValue.JOKER = { label: 'JOKER', rank: 0, styleClass: 'card-joker' };
    CardValue.ACE = { label: 'A', rank: 1, styleClass: 'card-ace' };
    CardValue.TWO = { label: '2', rank: 2, styleClass: 'card-two' };
    CardValue.THREE = { label: '3', rank: 3, styleClass: 'card-three' };
    CardValue.FOUR = { label: '4', rank: 4, styleClass: 'card-four' };
    CardValue.FIVE = { label: '5', rank: 5, styleClass: 'card-five' };
    CardValue.SIX = { label: '6', rank: 6, styleClass: 'card-six' };
    CardValue.SEVEN = { label: '7', rank: 7, styleClass: 'card-seven' };
    CardValue.EIGHT = { label: '8', rank: 8, styleClass: 'card-eight' };
    CardValue.NINE = { label: '9', rank: 9, styleClass: 'card-nine' };
    CardValue.TEN = { label: '10', rank: 10, styleClass: 'card-ten' };
    CardValue.JACK = { label: 'J', rank: 11, styleClass: 'card-jack' };
    CardValue.QUEEN = { label: 'Q', rank: 12, styleClass: 'card-queen' };
    CardValue.KING = { label: 'K', rank: 13, styleClass: 'card-king' };
    return CardValue;
}());



/***/ }),

/***/ "./src/app/model/card.ts":
/*!*******************************!*\
  !*** ./src/app/model/card.ts ***!
  \*******************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/model/game.service.ts":
/*!***************************************!*\
  !*** ./src/app/model/game.service.ts ***!
  \***************************************/
/*! exports provided: GameService, Meld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meld", function() { return Meld; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_suit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-suit */ "./src/app/model/card-suit.ts");
/* harmony import */ var _state_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/game */ "./src/app/model/state/game.ts");




var GameService = /** @class */ (function () {
    function GameService(game) {
        this.game = game;
    }
    GameService.prototype.addRedThree = function (card) {
        if (!this.isRedThree(card)) {
            throw new Error('The card is not a red three');
        }
        this.game.redThrees.push(card);
    };
    GameService.prototype.isRedThree = function (card) {
        return card.value.rank == 3 && (card.suit.id == _card_suit__WEBPACK_IMPORTED_MODULE_2__["CardSuit"].HEART.id || card.suit.id == _card_suit__WEBPACK_IMPORTED_MODULE_2__["CardSuit"].DIAMOND.id);
    };
    GameService.prototype.addMeld = function (cardList, meldIndex, cardIndex) {
        var _a;
        if (meldIndex != undefined && cardIndex != undefined) {
            var meld = JSON.parse(JSON.stringify(this.game.melds[meldIndex]));
            (_a = meld.cards).splice.apply(_a, [cardIndex, 0].concat(cardList));
            this.game.melds[meldIndex] = meld;
        }
        else {
            this.game.melds.push({ cards: cardList });
        }
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_game__WEBPACK_IMPORTED_MODULE_3__["Game"]])
    ], GameService);
    return GameService;
}());

var Meld = /** @class */ (function () {
    function Meld() {
        this.cards = [];
    }
    return Meld;
}());



/***/ }),

/***/ "./src/app/model/index.ts":
/*!********************************!*\
  !*** ./src/app/model/index.ts ***!
  \********************************/
/*! exports provided: GameService, Meld, PlayerService, CardSuit, ImageFace, Card, CardValue, Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.service */ "./src/app/model/game.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return _game_service__WEBPACK_IMPORTED_MODULE_0__["GameService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Meld", function() { return _game_service__WEBPACK_IMPORTED_MODULE_0__["Meld"]; });

/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/player.service */ "./src/app/model/player/player.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return _player_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/app/model/card.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_2__["Card"]; });

/* harmony import */ var _card_suit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-suit */ "./src/app/model/card-suit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardSuit", function() { return _card_suit__WEBPACK_IMPORTED_MODULE_3__["CardSuit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageFace", function() { return _card_suit__WEBPACK_IMPORTED_MODULE_3__["ImageFace"]; });

/* harmony import */ var _card_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-value */ "./src/app/model/card-value.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardValue", function() { return _card_value__WEBPACK_IMPORTED_MODULE_4__["CardValue"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action */ "./src/app/model/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _action__WEBPACK_IMPORTED_MODULE_5__["Action"]; });









/***/ }),

/***/ "./src/app/model/player/me-player.service.ts":
/*!***************************************************!*\
  !*** ./src/app/model/player/me-player.service.ts ***!
  \***************************************************/
/*! exports provided: MePlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePlayerService", function() { return MePlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ "./src/app/model/player/player.service.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/model/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/player */ "./src/app/model/state/player.ts");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../table.service */ "./src/app/model/table.service.ts");






var MePlayerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MePlayerService, _super);
    function MePlayerService(tableService, game, player) {
        var _this = _super.call(this, game) || this;
        _this.tableService = tableService;
        _this.player = player;
        return _this;
    }
    MePlayerService.prototype.getMustShowHandAction = function () {
        return true;
    };
    MePlayerService.prototype.drawCard = function (card) {
        this.tableService.removeCardFromMaindDeck();
        this.player.hand.push(card);
    };
    MePlayerService.prototype.discard = function (card) {
        var myHandCard = this.removeCardFromMyHand(card);
        this.tableService.addCardToDiscardPile(myHandCard);
    };
    MePlayerService.prototype.addRedThree = function (card) {
        this._game.addRedThree(card);
        this.removeCardFromMyHand(card);
    };
    MePlayerService.prototype.pickUpDiscardPile = function () {
        var _a;
        (_a = this.player.hand).push.apply(_a, this.tableService.pickUpDiscardPile());
    };
    MePlayerService.prototype.removeCardFromMyHand = function (card) {
        var myHandCard = this.findCardInMyHand(card);
        var myHandCardIndex = this.player.hand.indexOf(myHandCard);
        this.player.hand.splice(myHandCardIndex, 1);
        return myHandCard;
    };
    MePlayerService.prototype.findCardInMyHand = function (card) {
        var myHandCard = this.player.hand
            .find(function (c) { return c.value.rank == card.value.rank
            && c.suit.id == card.suit.id; });
        if (!myHandCard)
            throw new Error('Card not found');
        return myHandCard;
    };
    MePlayerService.prototype.addMeld = function (cardList, meldIndex, cardIndex) {
        var _this = this;
        this.validateMeld(cardList);
        this._game.addMeld(cardList, meldIndex, cardIndex);
        cardList.forEach(function (card) { return _this.removeCardFromMyHand(card); });
    };
    MePlayerService.prototype.validateMeld = function (cardList) {
        var _this = this;
        if (!cardList.length)
            throw new Error('Meld empty');
        cardList.forEach(function (card) { return _this.findCardInMyHand(card); });
    };
    MePlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('myGame')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"], _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _state_player__WEBPACK_IMPORTED_MODULE_4__["Player"]])
    ], MePlayerService);
    return MePlayerService;
}(_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]));



/***/ }),

/***/ "./src/app/model/player/other-player.service.ts":
/*!******************************************************!*\
  !*** ./src/app/model/player/other-player.service.ts ***!
  \******************************************************/
/*! exports provided: OtherPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPlayerService", function() { return OtherPlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ "./src/app/model/player/player.service.ts");


var OtherPlayerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OtherPlayerService, _super);
    function OtherPlayerService(tableService, game, player) {
        var _this = _super.call(this, game) || this;
        _this.tableService = tableService;
        _this.player = player;
        return _this;
    }
    OtherPlayerService.prototype.getMustShowHandAction = function () {
        return false;
    };
    OtherPlayerService.prototype.drawCard = function (card) {
        this.player.handCount++;
        this.tableService.removeCardFromMaindDeck();
    };
    OtherPlayerService.prototype.discard = function (card) {
        this.player.handCount--;
        this.tableService.addCardToDiscardPile(card);
    };
    OtherPlayerService.prototype.addRedThree = function (card) {
        this.player.handCount--;
        this._game.addRedThree(card);
    };
    OtherPlayerService.prototype.pickUpDiscardPile = function () {
        this.player.handCount += this.tableService.pickUpDiscardPile().length;
    };
    OtherPlayerService.prototype.addMeld = function (cardList, meldIndex, cardIndex) {
        this._game.addMeld(cardList, meldIndex, cardIndex);
    };
    return OtherPlayerService;
}(_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]));



/***/ }),

/***/ "./src/app/model/player/player.service.ts":
/*!************************************************!*\
  !*** ./src/app/model/player/player.service.ts ***!
  \************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
var PlayerService = /** @class */ (function () {
    function PlayerService(game) {
        this._game = game;
    }
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/model/state/game.ts":
/*!*************************************!*\
  !*** ./src/app/model/state/game.ts ***!
  \*************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game() {
        this.redThrees = [];
        this.melds = [];
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/model/state/play.ts":
/*!*************************************!*\
  !*** ./src/app/model/state/play.ts ***!
  \*************************************/
/*! exports provided: Play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return Play; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/app/model/state/player.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/app/model/state/table.ts");


var Play = /** @class */ (function () {
    function Play() {
        this.me = new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]();
        this.partner = new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]();
        this.opponent1 = new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]();
        this.opponent2 = new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]();
        this.table = new _table__WEBPACK_IMPORTED_MODULE_1__["Table"]();
    }
    return Play;
}());



/***/ }),

/***/ "./src/app/model/state/player.ts":
/*!***************************************!*\
  !*** ./src/app/model/state/player.ts ***!
  \***************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
        this.hand = [];
        this.handCount = Player.HAND_COUNT;
    }
    Player.HAND_COUNT = 11;
    return Player;
}());



/***/ }),

/***/ "./src/app/model/state/state.service.ts":
/*!**********************************************!*\
  !*** ./src/app/model/state/state.service.ts ***!
  \**********************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ "./src/app/model/state/table.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/app/model/state/game.ts");
/* harmony import */ var _undo_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./undo-history */ "./src/app/model/state/undo-history.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/app/model/state/player.ts");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play */ "./src/app/model/state/play.ts");







var StateService = /** @class */ (function () {
    function StateService() {
        this.initialize();
    }
    StateService.prototype.initialize = function () {
        this.play = new _play__WEBPACK_IMPORTED_MODULE_6__["Play"]();
        this.undoHistory = new _undo_history__WEBPACK_IMPORTED_MODULE_4__["UndoHistory"](this.play);
    };
    StateService.prototype.createTable = function () {
        this.play.table = new _table__WEBPACK_IMPORTED_MODULE_2__["Table"]();
        return this.play.table;
    };
    StateService.prototype.createMyGame = function () {
        this.play.table.myGame = new _game__WEBPACK_IMPORTED_MODULE_3__["Game"]();
        return this.play.table.myGame;
    };
    StateService.prototype.createOpponentGame = function () {
        this.play.table.opponentGame = new _game__WEBPACK_IMPORTED_MODULE_3__["Game"]();
        return this.play.table.opponentGame;
    };
    StateService.prototype.createMePlayer = function () {
        this.play.me = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"]();
        return this.play.me;
    };
    StateService.prototype.createPartnerPlayer = function () {
        this.play.partner = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"]();
        return this.play.partner;
    };
    StateService.prototype.createOponent1Player = function () {
        this.play.opponent1 = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"]();
        return this.play.opponent1;
    };
    StateService.prototype.createOponent2Player = function () {
        this.play.opponent2 = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"]();
        return this.play.opponent2;
    };
    StateService.prototype.registerState = function () {
        this.undoHistory.do(this.play);
    };
    StateService.prototype.undo = function () {
        var previousState = this.undoHistory.undo();
        this.restoreState(previousState);
    };
    StateService.prototype.restoreState = function (previousState) {
        this.play.table.maindDeckCount = previousState.table.maindDeckCount;
        this.play.table.discardPile = previousState.table.discardPile;
        this.play.table.sideDeck1Avaible = previousState.table.sideDeck1Avaible;
        this.play.table.sideDeck2Avaible = previousState.table.sideDeck2Avaible;
        this.play.table.myGame.redThrees = previousState.table.myGame.redThrees;
        this.play.table.myGame.melds = previousState.table.myGame.melds;
        this.play.table.opponentGame.redThrees = previousState.table.opponentGame.redThrees;
        this.play.table.opponentGame.melds = previousState.table.opponentGame.melds;
        this.play.me.hand = previousState.me.hand;
        this.play.partner.handCount = previousState.partner.handCount;
        this.play.opponent1.handCount = previousState.opponent1.handCount;
        this.play.opponent2.handCount = previousState.opponent2.handCount;
    };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/model/state/table.ts":
/*!**************************************!*\
  !*** ./src/app/model/state/table.ts ***!
  \**************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/app/model/state/game.ts");

var Table = /** @class */ (function () {
    function Table() {
        this.discardPile = [];
        this.sideDeck1Avaible = true;
        this.sideDeck2Avaible = true;
        var totalCardsOutsideDeck = Table.HAND_COUNT * 5;
        this.maindDeckCount = ((Table.TOTAl_DECK_CARDS * 2) - totalCardsOutsideDeck) + Table.TOTAL_EXTRA_JOKER;
        this.myGame = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
        this.opponentGame = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
    }
    Table.TOTAl_DECK_CARDS = 52;
    Table.TOTAL_EXTRA_JOKER = 0;
    Table.HAND_COUNT = 11;
    return Table;
}());



/***/ }),

/***/ "./src/app/model/state/undo-history.ts":
/*!*********************************************!*\
  !*** ./src/app/model/state/undo-history.ts ***!
  \*********************************************/
/*! exports provided: UndoHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoHistory", function() { return UndoHistory; });
var UndoHistory = /** @class */ (function () {
    function UndoHistory(initialState) {
        this.history = [];
        this.do(initialState);
    }
    UndoHistory.prototype.do = function (state) {
        var stateClone = JSON.parse(JSON.stringify(state));
        if (this.currentState)
            this.history.push(this.currentState);
        this.currentState = stateClone;
    };
    UndoHistory.prototype.undo = function () {
        var previousState;
        if (this.history.length > 1)
            previousState = this.history.pop();
        else
            previousState = this.history[0];
        this.currentState = JSON.parse(JSON.stringify(previousState));
        ;
        return previousState;
    };
    return UndoHistory;
}());



/***/ }),

/***/ "./src/app/model/table.service.ts":
/*!****************************************!*\
  !*** ./src/app/model/table.service.ts ***!
  \****************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/state.service */ "./src/app/model/state/state.service.ts");



var TableService = /** @class */ (function () {
    function TableService(state) {
        this.state = state;
    }
    TableService.prototype.removeCardFromMaindDeck = function () {
        this.state.play.table.maindDeckCount--;
    };
    TableService.prototype.addCardToDiscardPile = function (card) {
        this.state.play.table.discardPile.push(card);
    };
    TableService.prototype.pickUpDiscardPile = function () {
        var pile = JSON.parse(JSON.stringify(this.state.play.table.discardPile));
        this.state.play.table.discardPile = [];
        return pile;
    };
    TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "./src/app/player-action/player-action.component.html":
/*!************************************************************!*\
  !*** ./src/app/player-action/player-action.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal fade\" id=\"{{modalId}}\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Action</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n                <div class=\"d-flex flex-row justify-content-center\">\n                    <div class=\"btn-toolbar\" role=\"toolbar\">\n                        <div class=\"btn-group mr-2\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-secondary\" \n                              *ngFor=\"let action of actionList; let i = index\"\n                              (click)=\"selectAction(action)\"\n                              id=\"{{ 'btnAction' + i }}\"\n                              [ngClass]=\"{ 'active': currentAction.type == action}\"\n                              [hidden]=\"desactiveAction\">{{action}}</button>\n                        </div>\n                    </div>\n                    <span *ngIf=\"desactiveAction\">{{ currentAction.type }}</span>\n                </div>\n            </div>\n            <div *ngIf=\"isCardSelectionNeeded() && !mustShowMyHandAction()\" id=\"newCardSelectionSection2\">\n \n                <div class=\"d-flex flex-row justify-content-center\">\n                  <canasta-card [card]=\"{ value: currentAction.value, suit: currentAction.suit }\"></canasta-card>\n                </div>\n                <div class=\"d-flex flex-row justify-content-center mt-3\">\n                    <div class=\"btn-toolbar\" role=\"toolbar\">\n                        <div class=\"btn-group mr-2\" role=\"group\">\n                            <button *ngFor=\"let suit of cardSuitList\"\n                              type=\"button\" \n                              class=\"btn btn-light\"\n                              (click)=\"selectSuit(suit)\"\n                              class=\"{{ suit.styleClass }}\"\n                              id=\"{{ 'btnSuit' + suit.id }}\"\n                              [ngClass]=\"{ 'active': currentAction.suit == suit}\">{{suit.symbol}}</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"d-flex flex-row justify-content-center mt-3\">\n                    <div class=\"btn-toolbar\" role=\"toolbar\">\n                        <div class=\"btn-group mr-2\" role=\"group\">\n                            <button *ngFor=\"let value of cardValueList\"\n                              type=\"button\" \n                              class=\"btn btn-light\"\n                              (click)=\"selectValue(value)\"\n                              id=\"{{ 'btnValue' + value.rank }}\"\n                              [ngClass]=\"{ 'active': currentAction.value == value}\">{{value.label}}</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            \n            <div class=\"d-flex flex-row justify-content-center mt-3\" *ngIf=\"isCardSelectionNeeded() && mustShowMyHandAction()\" id=\"handCardSelectionSection\">\n                <canasta-card-selection [source]=\"handSelection\"></canasta-card-selection>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" id=\"do-action-and-close-button\" class=\"btn btn-primary\" (click)=\"doActionAndClose()\">Do action and close</button>\n          <button type=\"button\" id=\"do-action-button\" class=\"btn btn-secondary\" (click)=\"doAction()\">Do action</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/player-action/player-action.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/player-action/player-action.component.ts ***!
  \**********************************************************/
/*! exports provided: PlayerActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerActionComponent", function() { return PlayerActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model */ "./src/app/model/index.ts");



var PlayerActionComponent = /** @class */ (function () {
    function PlayerActionComponent() {
        this.actionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handSelection = [];
        this.currentAction = {
            type: _model__WEBPACK_IMPORTED_MODULE_2__["Action"].DRAW,
            value: _model__WEBPACK_IMPORTED_MODULE_2__["CardValue"].ACE,
            suit: _model__WEBPACK_IMPORTED_MODULE_2__["CardSuit"].DIAMOND
        };
    }
    PlayerActionComponent.prototype.ngOnInit = function () {
        this.cardSuitList = _model__WEBPACK_IMPORTED_MODULE_2__["CardSuit"].getAll();
        this.cardValueList = _model__WEBPACK_IMPORTED_MODULE_2__["CardValue"].getAll();
        this.actionList = _model__WEBPACK_IMPORTED_MODULE_2__["Action"].getAll();
    };
    PlayerActionComponent.prototype.isCardSelectionNeeded = function () {
        return this.currentAction.type == _model__WEBPACK_IMPORTED_MODULE_2__["Action"].ADD_RED_THREE ||
            this.currentAction.type == _model__WEBPACK_IMPORTED_MODULE_2__["Action"].MELD ||
            this.currentAction.type == _model__WEBPACK_IMPORTED_MODULE_2__["Action"].DISCARD ||
            (this.currentAction.type == _model__WEBPACK_IMPORTED_MODULE_2__["Action"].DRAW && this.player.getMustShowHandAction());
    };
    PlayerActionComponent.prototype.open = function (meldIndex, cardIndex) {
        this.meldIndex = meldIndex;
        this.cardIndex = cardIndex;
        if (meldIndex != undefined && cardIndex != undefined) {
            this.currentAction.type = _model__WEBPACK_IMPORTED_MODULE_2__["Action"].MELD;
            this.desactiveAction = true;
        }
        else {
            this.desactiveAction = false;
        }
        this.setHandSelection();
        $("#" + this.modalId).modal('show');
    };
    PlayerActionComponent.prototype.doActionAndClose = function () {
        this.doAction();
        $("#" + this.modalId).modal('hide');
    };
    PlayerActionComponent.prototype.doAction = function () {
        var cardActionList = this.getCardActionList();
        switch (this.currentAction.type) {
            case _model__WEBPACK_IMPORTED_MODULE_2__["Action"].DRAW:
                this.player.drawCard(this.getFirstSelectedCard(cardActionList));
                break;
            case _model__WEBPACK_IMPORTED_MODULE_2__["Action"].DISCARD:
                this.player.discard(this.getFirstSelectedCard(cardActionList));
                break;
            case _model__WEBPACK_IMPORTED_MODULE_2__["Action"].ADD_RED_THREE:
                this.player.addRedThree(this.getFirstSelectedCard(cardActionList));
                break;
            case _model__WEBPACK_IMPORTED_MODULE_2__["Action"].PICK_UP_DISCARD:
                this.player.pickUpDiscardPile();
                break;
            case _model__WEBPACK_IMPORTED_MODULE_2__["Action"].MELD:
                this.player.addMeld(cardActionList, this.meldIndex, this.cardIndex);
                break;
        }
        this.setHandSelection();
        this.actionDone.emit(this.currentAction.type);
    };
    PlayerActionComponent.prototype.getCardActionList = function () {
        var cardAction;
        if (this.mustShowMyHandAction()) {
            var selectionCardList = this.handSelection.filter(function (selection) { return selection.selected; });
            cardAction = selectionCardList.map(function (selection) { return selection.card; });
        }
        else {
            cardAction = [{ suit: this.currentAction.suit, value: this.currentAction.value }];
        }
        return cardAction;
    };
    PlayerActionComponent.prototype.getFirstSelectedCard = function (cardSelectionList) {
        if (cardSelectionList.length)
            return cardSelectionList[0];
        else
            return null;
    };
    PlayerActionComponent.prototype.setHandSelection = function () {
        if (this.player.getMustShowHandAction()) {
            this.handSelection = this.hand.map(function (card) { return ({ selected: false, card: card }); });
        }
    };
    PlayerActionComponent.prototype.mustShowMyHandAction = function () {
        return (this.currentAction.type == _model__WEBPACK_IMPORTED_MODULE_2__["Action"].MELD
            || this.currentAction.type == _model__WEBPACK_IMPORTED_MODULE_2__["Action"].DISCARD
            || this.currentAction.type == _model__WEBPACK_IMPORTED_MODULE_2__["Action"].ADD_RED_THREE)
            && this.player.getMustShowHandAction();
    };
    PlayerActionComponent.prototype.selectSuit = function (suit) {
        this.currentAction.suit = suit;
    };
    PlayerActionComponent.prototype.selectValue = function (value) {
        this.currentAction.value = value;
    };
    PlayerActionComponent.prototype.selectAction = function (action) {
        this.currentAction.type = action;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model__WEBPACK_IMPORTED_MODULE_2__["PlayerService"])
    ], PlayerActionComponent.prototype, "player", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PlayerActionComponent.prototype, "modalId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerActionComponent.prototype, "actionDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PlayerActionComponent.prototype, "hand", void 0);
    PlayerActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'canasta-player-action',
            template: __webpack_require__(/*! ./player-action.component.html */ "./src/app/player-action/player-action.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerActionComponent);
    return PlayerActionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Carrijo/canasta/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map