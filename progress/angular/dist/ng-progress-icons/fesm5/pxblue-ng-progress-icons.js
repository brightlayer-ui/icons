import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressIconsService = /** @class */ (function () {
    function NgProgressIconsService() {
    }
    NgProgressIconsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgProgressIconsService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgProgressIconsService.ngInjectableDef = defineInjectable({ factory: function NgProgressIconsService_Factory() { return new NgProgressIconsService(); }, token: NgProgressIconsService, providedIn: "root" });
    return NgProgressIconsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressIconsComponent = /** @class */ (function () {
    function NgProgressIconsComponent() {
    }
    /**
     * @return {?}
     */
    NgProgressIconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgProgressIconsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'progress-ng-progress-icons',
                    template: "\n    <p>\n      ng-progress-icons works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgProgressIconsComponent.ctorParameters = function () { return []; };
    return NgProgressIconsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
var getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius) {
    if (radius === void 0) { radius = 12; }
    return {
        x: radius + (radius * Math.cos((percent / 100) * 2 * Math.PI)),
        y: radius + (radius * Math.sin((percent / 100) * 2 * Math.PI))
    };
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BatteryComponent = /** @class */ (function () {
    function BatteryComponent() {
        this.percent = 100;
        this.size = 24;
        this.charging = false;
        this.outlined = false;
        this.basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
        this.chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
        this.outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
        this.baseID = 'pxb-battery-clip';
        this.chargeID = 'pxb-battery-clip-charge';
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    BatteryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.maskIDleft = 'maskLeft-' + this.percent;
        this.maskIDright = 'maskRight-' + this.percent;
        this.startX = this.outlined ? 3.9 : 2;
        this.fillWidth = this.outlined ? 14.2 : 18;
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getBasepath = /**
     * @return {?}
     */
    function () {
        return (this.outlined ? this.outlinedPath : this.basePath);
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getClipPath = /**
     * @return {?}
     */
    function () {
        return (this.charging ? this.chargePath : this.basePath);
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getID = /**
     * @return {?}
     */
    function () {
        return (this.charging ? this.chargeID : this.baseID);
    };
    BatteryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'battery-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"> \n    \n    <defs>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDleft\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <polygon fill=\"black\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 \" />\n      </mask>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDright\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <rect [attr.x]=\"startX\" y=\"7\" fill=\"black\"  [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\" />\n      </mask>\n    </defs>\n    <path [attr.fill]=\"color || 'currentColor'\"  [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.d]=\"getBasepath()\"/>\n      <clipPath [id]=\"getID()\">\n        <path overflow=\"visible\" [attr.d]=\"getClipPath()\"/>\n      </clipPath>\n      <g  [attr.fill]= \"color || 'currentColor'\">\n      \n<rect [attr.fill]=\"color || 'currentColor'\" [attr.x]=\"startX\" y=\"7\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\"  [attr.mask]=\"outlined && charging ? 'url(#' + maskIDleft + ')' : null\"/>\n<polygon  *ngIf = \"outlined && charging\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13\" [attr.mask]=\"'url(#' + maskIDright + ')'\" />\n      </g>\n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'charging', 'outlined']
                },] },
    ];
    /** @nocollapse */
    BatteryComponent.ctorParameters = function () { return []; };
    return BatteryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeartComponent = /** @class */ (function () {
    function HeartComponent() {
        this.percent = 100;
        this.size = 24;
        this.outlined = false;
        this.basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
        this.outlinedPath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    HeartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.startY = this.outlined ? 19.45 : 21.35;
        this.startX = this.outlined ? 14.55 : 18.35;
    };
    /**
     * @return {?}
     */
    HeartComponent.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return (this.outlined ? this.outlinedPath : this.basePath);
    };
    HeartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'heart-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n      <path [attr.fill]=\"color || 'currentColor'\" [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.d]=\"getPath()\"/>\n      <clipPath id=\"pxb-heart-clip\">\n        <path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>\n      </clipPath>\n      <rect [attr.fill]=\"color || 'currentColor'\" clip-path=\"url(#pxb-heart-clip)\" x=\"2\" [attr.y]=\"startY-(rv(percent,0,100))*startX/100\" width=\"20\" height=\"20\" />\n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'outlined']
                },] },
    ];
    /** @nocollapse */
    HeartComponent.ctorParameters = function () { return []; };
    return HeartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
        this.outlined = false;
        this.iconStroke = 2;
        // Ring properties
        this.centerX = 12;
        this.centerY = 12;
        // Outer ring
        this.outerRadiusLarge = 10;
    }
    /**
     * @return {?}
     */
    PieComponent.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return "M 12,12 H 24 A 12,12,0," + (this.percent >= 50 ? 1 : 0) + ",1," + getCoordinates(this.percent)['x'] + "," + getCoordinates(this.percent)['y'] + "Z";
    };
    /**
     * @return {?}
     */
    PieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        this.outlineBase = "\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  Z\n";
        this.twoToneBase = "\nM " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nZ\n";
        this.clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - this.stroke) + " \nA " + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,1,1," + (22 - this.stroke) + ",12,\n" + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,0,1,12," + (22 - this.stroke) + "\nZ\n";
    };
    PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pie-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" \n    [attr.width]=\"size+'px'\" \n    x=\"0px\" y=\"0px\" \n    viewBox=\"0 0 24 24\" \n    style=\"transform: rotate(-.25turn)\">\n\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"clipPath\"/>\n      </clipPath>\n      <path [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\"\n      [attr.fill]=\"color || 'currentColor'\" \n      [attr.fill-opacity]=\"outlined || percent >= 100 ? '1' : '0.3'\"\n      [attr.d]=\"outlined ? outlineBase : twoToneBase\"\n    />\n    <path *ngIf=\"percent > 0 && percent < 100\" \n    [attr.fill]=\"color || 'currentColor'\" \n    [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" \n    [attr.d]= \"getPath()\"  />\n\n      <circle *ngIf=\"percent === 100 && outlined\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\"></circle>\n      \n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'ring', 'outlined']
                },] },
    ];
    /** @nocollapse */
    PieComponent.ctorParameters = function () { return []; };
    return PieComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressIconsModule = /** @class */ (function () {
    function NgProgressIconsModule() {
    }
    NgProgressIconsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent],
                    exports: [
                        NgProgressIconsComponent,
                        BatteryComponent, HeartComponent, PieComponent
                    ]
                },] },
    ];
    return NgProgressIconsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgProgressIconsService, NgProgressIconsComponent, NgProgressIconsModule, BatteryComponent, HeartComponent, PieComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhibHVlLW5nLXByb2dyZXNzLWljb25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5zZXJ2aWNlLnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL3V0aWxpdGllcy50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvYmF0dGVyeS9iYXR0ZXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvaGVhcnQvaGVhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9waWUvcGllLmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvbmctcHJvZ3Jlc3MtaWNvbnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9ncmVzc0ljb25zU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLW5nLXByb2dyZXNzLWljb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLXByb2dyZXNzLWljb25zIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiZXhwb3J0IGNvbnN0IHJhbmdlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvb3JkaW5hdGVzID0gZnVuY3Rpb24ocGVyY2VudCwgcmFkaXVzID0gMTIpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLmNvcyggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKSxcbiAgICAgICAgeTogcmFkaXVzICsgKHJhZGl1cyAqIE1hdGguc2luKCAocGVyY2VudC8xMDApICogMipNYXRoLlBJKSApXG4gICAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmF0dGVyeS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+IFxuICAgIFxuICAgIDxkZWZzPlxuICAgICAgPG1hc2sgKm5nSWYgPSBcIm91dGxpbmVkIFwiIFthdHRyLmlkXT1cIm1hc2tJRGxlZnRcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxwb2x5Z29uIGZpbGw9XCJibGFja1wiIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxMyBcIiAvPlxuICAgICAgPC9tYXNrPlxuICAgICAgPG1hc2sgKm5nSWYgPSBcIm91dGxpbmVkIFwiIFthdHRyLmlkXT1cIm1hc2tJRHJpZ2h0XCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8cmVjdCBbYXR0ci54XT1cInN0YXJ0WFwiIHk9XCI3XCIgZmlsbD1cImJsYWNrXCIgIFthdHRyLndpZHRoXT1cInJ2KHBlcmNlbnQvMTAwKmZpbGxXaWR0aCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICAgIDwvbWFzaz5cbiAgICA8L2RlZnM+XG4gICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiICBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIuZF09XCJnZXRCYXNlcGF0aCgpXCIvPlxuICAgICAgPGNsaXBQYXRoIFtpZF09XCJnZXRJRCgpXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIFthdHRyLmRdPVwiZ2V0Q2xpcFBhdGgoKVwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8ZyAgW2F0dHIuZmlsbF09IFwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj5cbiAgICAgIFxuPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLnhdPVwic3RhcnRYXCIgeT1cIjdcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjJyArIGdldElEKCkgKyAnKSdcIiBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCpmaWxsV2lkdGgsIDAsIDEwMClcIiBoZWlnaHQ9XCIxMFwiICBbYXR0ci5tYXNrXT1cIm91dGxpbmVkICYmIGNoYXJnaW5nID8gJ3VybCgjJyArIG1hc2tJRGxlZnQgKyAnKScgOiBudWxsXCIvPlxuPHBvbHlnb24gICpuZ0lmID0gXCJvdXRsaW5lZCAmJiBjaGFyZ2luZ1wiIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxM1wiIFthdHRyLm1hc2tdPVwiJ3VybCgjJyArIG1hc2tJRHJpZ2h0ICsgJyknXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdjaGFyZ2luZycsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICBjaGFyZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBvdXRsaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICBtYXNrSURsZWZ0O1xuICBtYXNrSURyaWdodDtcbiAgc3RhcnRYO1xuICBmaWxsV2lkdGg7XG5cblxuICBiYXNlUGF0aCA9ICdNMjAsMTBWOC4zQzIwLDcuNiwxOS40LDcsMTguNyw3SDMuM0MyLjYsNywyLDcuNiwyLDguM3Y3LjNDMiwxNi40LDIuNiwxNywzLjMsMTdoMTUuM2MwLjcsMCwxLjMtMC42LDEuMy0xLjNWMTRoMnYtNEgyMHonO1xuICBjaGFyZ2VQYXRoID0gJ00yMCwxMFY4LjMzYTEuMzE5LDEuMzE5LDAsMCwwLTEtMS4yNjNBMS4yNTcsMS4yNTcsMCwwLDAsMTguNjcsN0gzLjM0QTEuMzM4LDEuMzM4LDAsMCwwLDIsOC4zM3Y3LjMzQTEuMzM4LDEuMzM4LDAsMCwwLDMuMzMsMTdIMTguNjdhMS4yNTcsMS4yNTcsMCwwLDAsLjMzLS4wNjcsMS4zMTksMS4zMTksMCwwLDAsMS0xLjI2M1YxNGgyVjEwWm0tOC41LDN2Mkw0LDExSDkuNVY5TDE3LDEzWic7XG4gIG91dGxpbmVkUGF0aCA9ICdNMTgsOXY2SDRWOUgxOG0uNy0ySDMuM0ExLjMyNCwxLjMyNCwwLDAsMCwyLDguM3Y3LjNBMS4zNDcsMS4zNDcsMCwwLDAsMy4zLDE3SDE4LjZhMS4zMjQsMS4zMjQsMCwwLDAsMS4zLTEuM1YxNGgyVjEwSDIwVjguM0ExLjMyNCwxLjMyNCwwLDAsMCwxOC43LDdaJztcbiAgYmFzZUlEID0gJ3B4Yi1iYXR0ZXJ5LWNsaXAnO1xuICBjaGFyZ2VJRCA9ICdweGItYmF0dGVyeS1jbGlwLWNoYXJnZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1hc2tJRGxlZnQgPSAnbWFza0xlZnQtJyArIHRoaXMucGVyY2VudDtcbiAgICB0aGlzLm1hc2tJRHJpZ2h0ID0gJ21hc2tSaWdodC0nICsgdGhpcy5wZXJjZW50O1xuXG4gICAgdGhpcy5zdGFydFggPSB0aGlzLm91dGxpbmVkID8gMy45IDogMjtcbiAgICB0aGlzLmZpbGxXaWR0aCA9IHRoaXMub3V0bGluZWQgPyAxNC4yIDogMTg7XG4gIH1cblxuXG4gIGdldEJhc2VwYXRoKCkge1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0Q2xpcFBhdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0SUQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VJRCA6IHRoaXMuYmFzZUlEKTtcbiAgfVxuXG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhcnQtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLmZpbGwtb3BhY2l0eV09XCIob3V0bGluZWQgfHwgcGVyY2VudCA+PSAxMDApID8gJzEnIDogJzAuMydcIiBbYXR0ci5kXT1cImdldFBhdGgoKVwiLz5cbiAgICAgIDxjbGlwUGF0aCBpZD1cInB4Yi1oZWFydC1jbGlwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIGNsaXAtcGF0aD1cInVybCgjcHhiLWhlYXJ0LWNsaXApXCIgeD1cIjJcIiBbYXR0ci55XT1cInN0YXJ0WS0ocnYocGVyY2VudCwwLDEwMCkpKnN0YXJ0WC8xMDBcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICBvdXRsaW5lZDpib29sZWFuID0gZmFsc2U7XG4gIHN0YXJ0WTtcbiAgc3RhcnRYO1xuXG4gIGJhc2VQYXRoID0gJ00xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1eic7XG4gIG91dGxpbmVkUGF0aCA9ICdNMTYuNSw1QTMuNDYyLDMuNDYyLDAsMCwxLDIwLDguNWMwLDIuODg1LTMuMTI1LDUuNzI1LTcuODU2LDEwLjAyNGwtLjAzNS4wMzItLjEuMDk0LS4xMjQtLjExM0M3LjEzNSwxNC4yMzQsNCwxMS4zOTEsNCw4LjVBMy40NjIsMy40NjIsMCwwLDEsNy41LDVhMy45NiwzLjk2LDAsMCwxLDIuOTc3LDEuMzg3TDEyLDguMTc1bDEuNTIzLTEuNzg4QTMuOTYsMy45NiwwLDAsMSwxNi41LDVtMC0yQTUuOTg4LDUuOTg4LDAsMCwwLDEyLDUuMDksNS45ODgsNS45ODgsMCwwLDAsNy41LDMsNS40NDcsNS40NDcsMCwwLDAsMiw4LjVjMCwzLjc4LDMuNCw2Ljg2LDguNTUsMTEuNTNMMTIsMjEuMzVsMS40NS0xLjMxQzE4LjYsMTUuMzYsMjIsMTIuMjgsMjIsOC41QTUuNDQ3LDUuNDQ3LDAsMCwwLDE2LjUsM1onO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gICBcblxuICBuZ09uSW5pdCgpIHsgIFxuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5vdXRsaW5lZCA/IDE5LjQ1IDogMjEuMzU7XG4gICAgdGhpcy5zdGFydFggPSB0aGlzLm91dGxpbmVkID8gMTQuNTUgOiAxOC4zNTtcblxuICB9XG5cbiAgZ2V0UGF0aCgpe1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgcnYgPSByYW5nZVZhbHVlO1xuXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUsIGdldENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGllLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBcbiAgICBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiBcbiAgICB4PVwiMHB4XCIgeT1cIjBweFwiIFxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBcbiAgICBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKC0uMjV0dXJuKVwiPlxuXG4gICAgICA8Y2xpcFBhdGggW2F0dHIuaWRdPVwiJ3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlXCI+XG4gICAgICAgIDxwYXRoIFthdHRyLmRdPVwiY2xpcFBhdGhcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPHBhdGggW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiXG4gICAgICBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgXG4gICAgICBbYXR0ci5maWxsLW9wYWNpdHldPVwib3V0bGluZWQgfHwgcGVyY2VudCA+PSAxMDAgPyAnMScgOiAnMC4zJ1wiXG4gICAgICBbYXR0ci5kXT1cIm91dGxpbmVkID8gb3V0bGluZUJhc2UgOiB0d29Ub25lQmFzZVwiXG4gICAgLz5cbiAgICA8cGF0aCAqbmdJZj1cInBlcmNlbnQgPiAwICYmIHBlcmNlbnQgPCAxMDBcIiBcbiAgICBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgXG4gICAgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIFxuICAgIFthdHRyLmRdPSBcImdldFBhdGgoKVwiICAvPlxuXG4gICAgICA8Y2lyY2xlICpuZ0lmPVwicGVyY2VudCA9PT0gMTAwICYmIG91dGxpbmVkXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiPjwvY2lyY2xlPlxuICAgICAgXG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAncmluZycsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIFBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6IG51bWJlciA9IDEwMDtcbiAgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHJpbmc6IG51bWJlciA9IDEwO1xuICBvdXRsaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICBvdXRsaW5lQmFzZTtcbiAgdHdvVG9uZUJhc2U7XG4gIGNsaXBQYXRoO1xuICBpY29uU3Ryb2tlID0gMjtcbiAgc3Ryb2tlO1xuICBcblxuICAvLyBSaW5nIHByb3BlcnRpZXNcbiAgY2VudGVyWCA9IDEyO1xuICBjZW50ZXJZID0gMTI7XG5cbiAgLy8gT3V0ZXIgcmluZ1xuICBvdXRlclJhZGl1c0xhcmdlID0gMTA7XG4gIGlubmVyUmFkaXVzTGFyZ2U7XG5cbiAgLy8gSW5uZXIgUmluZ1xuICBvdXRlclJhZGl1c1NtYWxsO1xuICBpbm5lclJhZGl1c1NtYWxsO1xuICBcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuZ2V0UGF0aCgpe1xuICByZXR1cm4gYE0gMTIsMTIgSCAyNCBBIDEyLDEyLDAsJHt0aGlzLnBlcmNlbnQgPj0gNTAgPyAxIDogMH0sMSwke2dldENvb3JkaW5hdGVzKHRoaXMucGVyY2VudClbJ3gnXX0sJHtnZXRDb29yZGluYXRlcyh0aGlzLnBlcmNlbnQpWyd5J119WmBcbn1cbm5nT25Jbml0KCkge1xuICB0aGlzLnN0cm9rZSA9ICBNYXRoLm1heCgxLCBNYXRoLm1pbigxMCwgTWF0aC5yb3VuZCh0aGlzLnJpbmcpKSk7XG4gIHRoaXMuc3Ryb2tlID0gdGhpcy5vdXRsaW5lZCA/IE1hdGgubWF4KHRoaXMuc3Ryb2tlLCAyICogdGhpcy5pY29uU3Ryb2tlICsgMSkgOiB0aGlzLnN0cm9rZTtcbiAgdGhpcy5pbm5lclJhZGl1c0xhcmdlID0gMTAgLSB0aGlzLmljb25TdHJva2U7XG4gIHRoaXMub3V0ZXJSYWRpdXNTbWFsbCA9IDEwIC0gdGhpcy5zdHJva2UgKyB0aGlzLmljb25TdHJva2U7XG4gIHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9IDEwIC0gdGhpcy5zdHJva2U7XG4gIGlmKHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9PT0gMClcbiAge1xuICAgIHRoaXMub3V0ZXJSYWRpdXNTbWFsbCA9IDA7XG4gIH1cbiBcbiBcbiAgdGhpcy5vdXRsaW5lQmFzZSA9IGBcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIFpcbmA7XG50aGlzLnR3b1RvbmVCYXNlID0gIGBcbk0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbkEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5aXG5gO1xudGhpcy5jbGlwUGF0aCA9IGBcbk0xMiwyXG5BMTAsMTAsMCwxLDAsMjIsMTIsXG4xMCwxMCwwLDAsMCwxMiwyXG5aXG5tMCwkezIwLXRoaXMuc3Ryb2tlfSBcbkEgJHsxMC10aGlzLnN0cm9rZX0sJHsxMC10aGlzLnN0cm9rZX0sMCwxLDEsJHsyMi10aGlzLnN0cm9rZX0sMTIsXG4kezEwLXRoaXMuc3Ryb2tlfSwkezEwLXRoaXMuc3Ryb2tlfSwwLDAsMSwxMiwkezIyLXRoaXMuc3Ryb2tlfVxuWlxuYFxuICB9XG5cblxufVxuXG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nOyAgXG5pbXBvcnQgeyBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQgfSBmcm9tICcuL25nLXByb2dyZXNzLWljb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXR0ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9iYXR0ZXJ5L2JhdHRlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9oZWFydC9oZWFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGllQ29tcG9uZW50IH0gZnJvbSAnLi9waWUvcGllLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50LCBCYXR0ZXJ5Q29tcG9uZW50LCBIZWFydENvbXBvbmVudCwgUGllQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIE5nUHJvZ3Jlc3NJY29uc0NvbXBvbmVudCwgXG4gICAgQmF0dGVyeUNvbXBvbmVudCwgSGVhcnRDb21wb25lbnQsIFBpZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nUHJvZ3Jlc3NJY29uc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O2lDQUpEO0NBUUM7Ozs7OztBQ1JEO0lBYUU7S0FBaUI7Ozs7SUFFakIsMkNBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUseURBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7SUFRRCwrQkFBQztDQUFBOzs7Ozs7O0FDbEJELElBQWEsVUFBVTs7Ozs7O0FBQUcsVUFBUyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0NBQzNDLENBQUE7O0FBRUQsSUFBYSxjQUFjOzs7OztBQUFHLFVBQVMsT0FBTyxFQUFFLE1BQVc7SUFBWCx1QkFBQSxFQUFBLFdBQVc7SUFDdkQsT0FBTztRQUNILENBQUMsRUFBRSxNQUFNLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxPQUFPLEdB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