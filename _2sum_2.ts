function twoSum(numbers: number[], target: number): number[] {
    let res = []

    let i = 0;
    let j = numbers.length-1;

    while(i<j){
        if(numbers[i] + numbers[j] == target){
            res.push(i+1);
            res.push(j+1);
            break;
        }
        else if(numbers[i] + numbers[j] < target){
            i++;
        }
        else if(numbers[i] + numbers[j] > target){
            j--;
        }
    }

    return res;

};
