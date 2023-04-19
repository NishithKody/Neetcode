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
// c = 1
// s= 5, 15 25
// e = 10, 20 30
export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: the minimum number of conference rooms required
   */
  minMeetingRooms(intervals) {
    // Write your code here
    let sA = []
    let eA = []
    let count = 0;
    let res = 0;

    for (let cur of intervals){
      sA.push(cur.start)
      eA.push(cur.end)
    }

    let n = intervals.length
    sA.sort((a,b)=>a-b)
    eA.sort((a,b)=>a-b)

    let p1 = 0
    let p2 = 0

    while(p1<sA.length && p2<eA.length){
      if(sA[p1]<eA[p2]){
        p1++;
        count++;
      }
      else{
        p2++;
        count--;
      }
      res = Math.max(count,res)

    }

    return res
  



  }
}

//

//complete using priority queue
