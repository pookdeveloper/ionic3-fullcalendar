var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { EventSesrvice } from '../../providers/eventService';
var AboutPage = (function () {
    function AboutPage(eventService) {
        this.eventService = eventService;
        this.events = null;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: []
        };
    };
    AboutPage.prototype.loadevents = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (data) {
            _this.events = data;
        });
    };
    AboutPage.prototype.clickButton = function (model) {
        this.displayEvent = model;
    };
    AboutPage.prototype.dayClick = function (model) {
        console.log(model);
    };
    AboutPage.prototype.eventClick = function (model) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
                // other params
            },
            duration: {}
        };
        this.displayEvent = model;
    };
    AboutPage.prototype.updateEvent = function (model) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        };
        this.displayEvent = model;
    };
    __decorate([
        ViewChild(CalendarComponent),
        __metadata("design:type", CalendarComponent)
    ], AboutPage.prototype, "ucCalendar", void 0);
    AboutPage = __decorate([
        Component({
            selector: 'page-about',template:/*ion-inline-start:"/Users/davidgarcia/Desktop/ionic/ionic3-fullcalendar/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <a (click)="loadevents()"> loadevents</a>\n  <p>Display event : {{displayEvent | json}}</p>\n  <div *ngIf="calendarOptions">\n\n    <ng-fullcalendar #ucCalendar [options]="calendarOptions" (eventClick)="eventClick($event.detail)" (eventDrop)="updateEvent($event.detail)"\n      (eventResize)="updateEvent($event.detail)" (dayClick)="dayClick($event.detail)" (clickButton)="clickButton($event.detail)"\n      [(eventsModel)]="events"></ng-fullcalendar>\n\n  </div>\n\n</ion-content>22"'/*ion-inline-end:"/Users/davidgarcia/Desktop/ionic/ionic3-fullcalendar/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [EventSesrvice])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map