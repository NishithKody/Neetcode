class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        visit = set()
        res = []

        graph = {}
        for i in range(0,numCourses):
            graph[i] = []
        
        for [first, second] in prerequisites:
            
            graph[first].append(second)
        
        # print('initial graph',graph)

        def util(node, cycle):
            
            # print('node',node)
            if(node in cycle):
                return False
            
            if(node in visit):
                return True

            visit.add(node)

            val = graph[node]
            cycle.add(node)
            # print('node values',val)

            for n in val:
                temp = util(n,cycle)
                if(temp == False):
                    return False
            cycle.remove(node)


        for i in range(0,numCourses):
            cycle = set()
            check = util(i,cycle)
            if(check == False):
                return False
        
        return True
