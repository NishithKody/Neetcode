function maxProfit(prices: number[]): number {

    let gmax =0;
    let index =0;

    for(let i =1; i<prices.length; i++){
        let localmax = prices[i]-prices[index];

        if(prices[i]<prices[index])
            index = i;

        if(localmax > gmax) 
            gmax = localmax;
    }

    return gmax;
    

};
// In this type of problem consider these things - globalMax, localMax, leftIndex and right Index;
// Global max is the optimal solution for the whole problem , and is the final result
// localMax is the total for the current iteration

//In sliding window / greedy problems, the right pointer will update normally each iteration. 
//We need to consider when to updatet the left pointer correctly;
//In this problem, we need to update the left pointer when prices[i]<prices[index]
//In kadanes algo, we update it when the sum becomes below zero
