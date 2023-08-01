# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        prev = None
        nex = None
        ##null- 1 -> 2 -> 3 ->
        #       c
        #            n
        #   p

        while(cur!=None):
            nex = cur.next
            cur.next = prev
            prev = cur
            cur=nex
        
        return prev
            
