import { Pipe, PipeTransform } from '@angular/core';
import { differenceInHours,differenceInDays,differenceInMinutes } from 'date-fns';
@Pipe({
  name: 'formatRunningTime'
})
export class FormatRunningTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let now:any=new Date();
    let diff=now-value*1000;
    let diffD=Math.floor(diff/(24*3600*1000))
    //计算天数后剩余的毫秒数
    let leave1=diff%(24*3600*1000)  
    let diffH=Math.floor(leave1/(3600*1000))
    //计算小时数后剩余的毫秒数
    var leave2=leave1%(3600*1000)        
    let diffM=Math.floor(leave2/(60*1000))
    return `${diffD}天${diffH}时${diffM}分`;
  }
}
