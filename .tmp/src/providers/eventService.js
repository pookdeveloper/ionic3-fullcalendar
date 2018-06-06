var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//import { Inject, Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
var EventSesrvice = (function () {
    function EventSesrvice() {
    }
    EventSesrvice.prototype.getEvents = function () {
        var dateObj = new Date();
        var yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        var data = [{
                title: 'All Day Event',
                start: yearMonth + '-01'
            },
            {
                title: 'Long Event',
                start: yearMonth + '-07',
                end: yearMonth + '-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: yearMonth + '-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: yearMonth + '-16T16:00:00'
            },
            {
                title: 'Conference',
                start: yearMonth + '-11',
                end: yearMonth + '-13'
            },
            {
                title: 'Meeting',
                start: yearMonth + '-12T10:30:00',
                end: yearMonth + '-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: yearMonth + '-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: yearMonth + '-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: yearMonth + '-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: yearMonth + '-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: yearMonth + '-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: yearMonth + '-28'
            }];
        return Observable.of(data);
    };
    EventSesrvice = __decorate([
        Injectable()
    ], EventSesrvice);
    return EventSesrvice;
}());
export { EventSesrvice };
;
//# sourceMappingURL=eventService.js.map