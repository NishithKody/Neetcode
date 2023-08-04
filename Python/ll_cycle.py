# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slw = head
        fast = head

        while(slw != None and fast!=None):
            slw = slw.next
            fast = fast.next

            if fast == None:
                return False
            
            fast = fast.next

            if(slw == fast):
                return True
