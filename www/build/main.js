webpackJsonp([5],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_apis_apis__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirePage = /** @class */ (function () {
    function FirePage(api, toastCtrl, geolocation, camera, navCtrl, navParams) {
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.image = null;
        this.cordinates = { lat: null, long: null };
        this.FIRE = { image: "", city: "", lat: null, long: null, description: "", user: "", status: true };
    }
    FirePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.cordinates.lat = resp.coords.latitude;
            _this.cordinates.long = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    FirePage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
            _this.FIRE.image = imageData;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    FirePage.prototype.send_fire = function () {
        var toast = this.toastCtrl.create({
            message: 'Noticia enviada con exito',
            duration: 3000
        });
        this.FIRE.user = "zicaxzx@gmail.com";
        var img_name = Math.random().toString(36).substring(2);
        this.api.up_image(img_name, this.FIRE.image);
        this.FIRE.image = img_name + ".jpg";
        this.FIRE.lat = this.cordinates.lat;
        this.FIRE.long = this.cordinates.long;
        console.log(this.FIRE.description);
        this.api.addNotice(this.FIRE).then(function (val) {
            toast.present();
        });
    };
    FirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fire',template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/fire/fire.html"*/'<!--\n  Generated template for the FirePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reportar Incendio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: #2e2e30;">\n  <ion-card>\n    <ion-item>\n      <ion-input [(ngModel)]="FIRE.description" type="text" placeholder="Description"></ion-input>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      {{cordinates.lat|number:\'1.1-2\'}}, {{cordinates.long|number:\'1.1-2\'}}\n      <ion-icon name="pin" item-end></ion-icon>\n    </ion-item>\n  </ion-card>\n    <img [src]="image" *ngIf="image" />\n    <button *ngIf="!image" block (click)="getPicture()" ion-button>\n      <ion-icon name="camera" item-center></ion-icon>\n    </button>\n  <button (click)="send_fire()" style="width: 100%; background-color: #962c0c" ion-button>\n    <ion-icon name="flame" item-end></ion-icon>FIRE!!<ion-icon name="flame" item-end></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/fire/fire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_apis_apis__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FirePage);
    return FirePage;
}());

//# sourceMappingURL=fire.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apis_apis__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticePage = /** @class */ (function () {
    function NoticePage(apis, navCtrl, navParams) {
        this.apis = apis;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoticePage.prototype.ionViewDidLoad = function () {
        this.apis.create_map('map2');
    };
    NoticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notice',template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/notice/notice.html"*/'<!--\n  Generated template for the NoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #2b3042;">\n  <ion-item><img src="assets/imgs/incendio.jpg"></ion-item>\n  <ion-item style="background-color: #a83939; color:rgb(240, 238, 238)">\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/incendio.jpg">\n    </ion-thumbnail>\n    <h2>Sinaloa<ion-icon name="pin" item-end></ion-icon></h2>\n    <p style="color: wheat">Se incendiaron unas parcelas</p>\n  </ion-item>\n  <ion-item class="map" id="map2"></ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/notice/notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_apis_apis__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NoticePage);
    return NoticePage;
}());

//# sourceMappingURL=notice.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/perfil/perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #2b3042;">\n\n</ion-content>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_notice__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apis_apis__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__notice_notice__["a" /* NoticePage */];
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        this.api.getNoticeList().valueChanges(); //.subscribe((datas) => { console.log("datas", datas) }, (err) => { console.log("probleme : ", err) });
    };
    NewsPage.prototype.see_new = function () {
        this.navCtrl.push(this.rootPage);
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notificaciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #2b3042;">\n  \n  <ion-list>\n\n    <ion-item style="background-color: #a83939; color:rgb(240, 238, 238)">\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/hackaton2018-220018.appspot.com/o/notices%2Fz3xt8pj40a.jpg?alt=media&token=1e9420e1-bada-4a13-87ec-2b13e9e90c18">\n      </ion-thumbnail>\n      <h2>Sinaloa</h2>\n      <p style="color: wheat">se incendiarion unas parcelas.</p>\n      <button (click)="see_new()" ion-button clear item-end><ion-icon name="arrow-forward" style="zoom:2.0"></ion-icon></button>\n    </ion-item>\n\n    <ion-item style="background-color: #a83939; color:rgb(240, 238, 238)">\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/hackaton2018-220018.appspot.com/o/notices%2Fz3xt8pj40a.jpg?alt=media&token=1e9420e1-bada-4a13-87ec-2b13e9e90c18">\n      </ion-thumbnail>\n      <h2>Tijuana</h2>\n      <p style="color: wheat">un edificio de la nada se empezo ha incendiar</p>\n      <button (click)="see_new()" ion-button clear item-end>\n        <ion-icon name="arrow-forward" style="zoom:2.0"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item style="background-color: #a83939; color:rgb(240, 238, 238)">\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/hackaton2018-220018.appspot.com/o/notices%2Fz3xt8pj40a.jpg?alt=media&token=1e9420e1-bada-4a13-87ec-2b13e9e90c18">\n      </ion-thumbnail>\n      <h2>Sonora</h2>\n      <p style="color: wheat">un vidrio hizo que empezara a incendiarse todo</p>\n      <button (click)="see_new()" ion-button clear item-end>\n        <ion-icon name="arrow-forward" style="zoom:2.0"></ion-icon>\n      </button>\n    </ion-item>\n    \n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_apis_apis__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camera/camera.module": [
		723,
		0
	],
	"../pages/fire/fire.module": [
		722,
		4
	],
	"../pages/news/news.module": [
		726,
		3
	],
	"../pages/notice/notice.module": [
		724,
		2
	],
	"../pages/perfil/perfil.module": [
		725,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fire_fire__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__fire_fire__["a" /* FirePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__["a" /* PerfilPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/tabs/tabs.html"*/'<ion-tabs style="background-color: red;">\n  <ion-tab class="home" [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab class="fire" [root]="tab2Root" tabTitle="Fire!" tabIcon="flame"></ion-tab>\n  <ion-tab class="news" [root]="tab3Root" tabTitle="News" tabIcon="list"></ion-tab>\n  <!-- <ion-tab class="perfil" [root]="tab4Root" tabTitle="Perfil" tabIcon="person"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apis_apis__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(api, navCtrl) {
        var _this = this;
        this.api = api;
        this.navCtrl = navCtrl;
        this.weather_response = 0;
        this.api.get_wheater("mochis").subscribe(function (data) { return _this.weather_response = ((data['main']['temp']) - 273.15); });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>HTF Hack the fire</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #2b3042;">\n\n  <ion-content style="background-color: #2b3042;">\n    <ion-item class="map" id="map"></ion-item>\n    <ion-item style="color:#b1770a">\n      <h2 style="color: #991111"><strong>Temperatura de mochis</strong></h2>\n      <strong><ion-icon name="sunny"></ion-icon>  {{ weather_response|number:\'1.1-2\' }}ºC</strong>\n    </ion-item>\n    <ion-item style="color:#b1770a">\n      <h2 style="color: #991111"><strong>Temperatura minima</strong></h2>\n      <strong>{{ pressure|number:\'1.1-2\' }}ºC</strong>\n    </ion-item>\n    <ion-item style="color:#b1770a">\n      <h2 style="color: #991111"><strong>Temperatura maxima</strong></h2>\n      <strong>{{ humedad|number:\'1.1-2\' }}ºC</strong>\n    </ion-item>\n    \n  </ion-content>\n  \n  <!-- \n  \n    <img src="assets/imgs/map.png">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button> \n    </ion-fab>\n  \n     <ion-item>\n      <ion-icon name="football" item-start large></ion-icon>\n      <h2>Museum of Fotball</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name="wine" item-start large></ion-icon>\n      <h2>Institute of Fine Cocktails</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n  \n    <ion-item>\n      <span item-start>18 min</span>\n      <span item-start>(2.6 mi)</span>\n      <button ion-button icon-start clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item> \n  \n  </ion-card>\n  <ion-grid style="bottom:0px;">\n    <ion-row>\n      <ion-col col-6>\n        <ion-card center>\n          <ion-grid style="background-color:#372a5796; border: solid; border-color: #68281d">\n            <ion-row style="text-align:center;">\n              <ion-col col-12>\n                <ion-icon name="car" style="zoom:2" center large></ion-icon>\n              </ion-col>\n              <ion-col col-12>Traffic</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card>\n          <ion-grid style="background-color:#372a5796">\n            <ion-row style="text-align:center;">\n              <ion-col col-12>\n                <ion-icon name="cloud" style="zoom:2" center large></ion-icon>\n              </ion-col>\n              <ion-col col-12>Weather</ion-col>\n            </ion-row>\n          </ion-grid>\n          \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card>\n\n  </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_apis_apis__["a" /* ApisProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_fire_fire__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_news__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notice_notice__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_apis_apis__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDynmE3QxbH_Qeq4IRZKURrYUdWLhYF1dc",
    authDomain: "hackaton2018-220018.firebaseapp.com",
    databaseURL: "https://hackaton2018-220018.firebaseio.com",
    projectId: "hackaton2018-220018",
    storageBucket: "hackaton2018-220018.appspot.com",
    messagingSenderId: "249163217980"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_fire_fire__["a" /* FirePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notice_notice__["a" /* NoticePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fire/fire.module#FirePageModule', name: 'FirePage', segment: 'fire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notice/notice.module#NoticePageModule', name: 'NoticePage', segment: 'notice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["AngularFireModule"].initializeApp(FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notice_notice__["a" /* NoticePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_fire_fire__["a" /* FirePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_apis_apis__["a" /* ApisProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ApisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApisProvider = /** @class */ (function () {
    // private db: AngularFireDatabase,
    function ApisProvider(afStorage, db, http) {
        this.afStorage = afStorage;
        this.db = db;
        this.http = http;
        this.apiurl = "http://api.openweathermap.org/data/2.5/weather?APPID=91133df127c96d761d618924474da2ac&q=";
        this.noteListRef = this.db.list('notices');
        console.log('Hello ApisProvider Provider');
    }
    ApisProvider.prototype.get_wheater = function (data) {
        return this.http.get(this.apiurl + data);
    };
    ApisProvider.prototype.create_map = function (id) {
        var mapOptions = {
            center: { lat: 25.7667, lng: -108.9667 },
            zoom: 8
        };
        var map2 = new google.maps.Map(document.getElementById(id), mapOptions);
    };
    ApisProvider.prototype.getNoticeList = function () {
        return this.noteListRef;
    };
    ApisProvider.prototype.addNotice = function (data) {
        return this.noteListRef.push(data);
    };
    ApisProvider.prototype.updateNotice = function (data) {
        return this.noteListRef.update(data.key, data);
    };
    ApisProvider.prototype.removeNotice = function (data) {
        return this.noteListRef.remove(data.key);
    };
    ApisProvider.prototype.get_city = function (lat, long) {
        return this.http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat.toFixed(2) + "," + long.toFixed(2));
    };
    ApisProvider.prototype.up_image = function (name, base64) {
        this.ImagesRef = this.afStorage.storage.ref();
        this.ImagesRef.child("notices/" + name + ".jpg").putString(base64, 'base64').then(function (snapshot) {
            console.log('Uploaded a base64 string!');
        });
    };
    ApisProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["AngularFireStorage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["AngularFireStorage"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], ApisProvider);
    return ApisProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=apis.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/zicaxzx/portafolio/Hack-That-Fire/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map