import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caTime'
})
export class CaTimePipe implements PipeTransform {

  transform(time: any, ...args: any[]): any {
    if(time == '12:00') return "12:00 PM";
    if(time == '24:00') return "12:00 AM";
    let times = time.split(":");
    if(times[0] >= 12) {
      let mins = times[1];
      if (mins.length == 1) mins = '0' + mins; 
      return times[0] - 12 + ":" + mins + " PM";
    }
    else return time + " AM";
  }

}
