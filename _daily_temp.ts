function dailyTemperatures(temp: number[]): number[] {

    let res = Array(temp.length).fill(0)

    let stack =[];

    for(let [index, current] of temp.entries()){
        while(stack.length>0 && temp[stack[stack.length-1]]<current ){

            let ind= stack.pop();
            res[ind] = index-ind;

        }
        stack.push(index)
    }




   
   return res;
    

};
