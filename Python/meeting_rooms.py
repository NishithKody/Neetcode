from typing import (
    List,
)
from lintcode import (
    Interval,
)

"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    """
    @param intervals: an array of meeting time intervals
    @return: if a person could attend all meetings
    """
    def can_attend_meetings(self, intervals: List[Interval]) -> bool:
        # Write your code here

        inters = sorted(intervals, key= lambda x:x.start)
        n = len(intervals)

        for i in range(0,n-1):
          first = inters[i]
          second = inters[i+1]

          if(first.end>second.start):
            return False

        return True
