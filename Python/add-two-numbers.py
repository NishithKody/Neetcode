# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        head = ListNode()
        cur = head
        
        carry = 0

        while(l1!=None and l2!=None):
            val1 = l1.val
            val2 = l2.val
            newVal = val1 + val2
            if(carry == 1):
                newVal = newVal +1
                carry = 0
            
            if(newVal>9):
                carry =1
                newVal = newVal - 10
            
            newNode = ListNode(newVal)
            # print('newNode',newNode)

            cur.next = newNode
            cur = cur.next
            l1 = l1.next
            l2 = l2.next
        
        while(l1!=None):
            # print('l1 call',l1)
            val1 = l1.val

            if(carry == 1):
                val1 = val1 +1
                carry = 0
            
            if(val1>9):
                carry =1
                val1 = val1 - 10
            
            newNode=ListNode(val1)
            # print('newNode',newNode)
            cur.next = newNode
            cur = cur.next
            l1 = l1.next
        
        while(l2!=None):
            # print('l2 call',l2)

            val1 = l2.val

            if(carry == 1):
                val1 = val1 +1
                carry = 0
            
            if(val1>9):
                carry =1
                val1 = val1 - 10
            
            newNode=ListNode(val1)
            # print('newNode',newNode)
            cur.next = newNode
            cur = cur.next
            l2 = l2.next
        
        if(carry ==1):
            # print('carry check')
            newNode=ListNode(1)
            cur.next = newNode

        return head.next


# 9,9,9,9,9,9,9
# 9,9,9,9

# 8 9 9 9 0 0 0 1
#   1 1 1 1 1 1 1















