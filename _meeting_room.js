import {
  Interval,
} from '/opt/node/lib/lintcode/index.js';

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
    
    intervals.sort((a,b)=>a.start - b.start)

    // console.log(intervals)
    let res = []
    res.push(intervals[0])

    for(let i =0 ; i<intervals.length-1; i++){

      if(intervals[i].end>intervals[i+1].start){
        return false;
      }
    }
    return true;
  }
}
