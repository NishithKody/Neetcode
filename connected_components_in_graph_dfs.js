"use strict"

let n = 5
let edges = [[0,1],[1,2], [3,4]]
let adj = {}

for(let i=0; i<n; i++)
    adj[i]=[]

for(let i of edges){
    adj[i[0]].push(i[1])
    adj[i[1]].push(i[0])
}

let count = 0;
let visit = new Set();

let dfs = (node)=>{
    if(visit.has(node))
        return
    
    visit.add(node)
    for(let i of adj[node]){
        dfs(i)
    }
}

for(let i=0; i<n; i++){
    if(!visit.has(i)){
        count++;
        dfs(i)
    }
}

console.log(count)
