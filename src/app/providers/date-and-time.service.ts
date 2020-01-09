import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
//import * as mt from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class DateAndTimeService {
  public convertNumberToNGBDate(date:any = moment()) {
    if(typeof date == 'string') date = moment(date);
    return new CADate(date.year(), date.month() + 1, date.date());
  }
  public convertNGBDateToDateObject(date) {
    let newDate = moment.utc(new Date(date.year, date.month-1, date.day)).format();
    return newDate;
  }
  public convertStringToNGBTime(timeAsString) {
    let times = timeAsString.split(":");
    return {
      hour : +times[0],
      minute : +times[1]
    }
  }
  public convertNGBTimeToString(time) {
    return time.hour + ":" + time.minute;
  }
  public sortByDateAndTime(items) {
    let len = items.length;
    for(let searchItem of items) {
      for(let i = 0; i < len - 1; i++) {
        if(moment(searchItem.date).isAfter(items[i+1].date)) {
          [items[i],items[i+1]] = [items[i+1],items[i]];
          }
      }
    }
    let temp = [];
    let timeSortedItems = []
    for(let i = 0; i < len; i++) {
      temp.push(items[i]);
      if(i == len - 1 || items[i].date != items[i+1].date) {
        temp.sort( (item1,item2) => {
            let time1 = item1.time.replace(":",".");
            let time2 = item2.time.replace(":",".");
            if( +time1 > +time2 ) return 1;
            if( +time2 > +time1 ) return -1;
            return 0;
        })
        timeSortedItems = [...timeSortedItems,...temp]
        temp = [];
      }
    }
    return timeSortedItems;
  }
}

export class CADate {
  private year;
  private month;
  private day;
  constructor(year,month,day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}