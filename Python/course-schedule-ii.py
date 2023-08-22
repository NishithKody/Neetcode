class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:

        res = []
        graph = {}

        for i in range(numCourses):
            graph[i] = []
        
        for [first, sec] in prerequisites:
            graph[first].append(sec)
        
        # print('initial graph',graph)

        visit = set()
        


        def util(i, cycle):
            nonlocal res

            # print(i,cycle)
            
            if(i in cycle):
                # print('false for',i,cycle)
                return False
            
            

            if(i in visit):
                return True
            
            visit.add(i)
            cycle.add(i)

            

            for n in graph[i]:
                temp = util(n,cycle)
                if(temp==False):
                    return False
            
            res.append(i)
            cycle.remove(i)



        
        for i in range(numCourses):
            cycle = set()
            val = util(i,cycle)
            if(val==False):
                return []
        
        return res

        #1-0
        # -7-0
