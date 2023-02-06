/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let temp = new Array(arr.length).fill(-1)
    let max=arr[arr.length-1]

    for(let i =arr.length-1; i>0; i--){
        if(arr[i]>=max){
            max=arr[i]
        }
        temp[i-1]=max;
    }

    // console.log(temp)

    // for(let i=0; i<arr.length-1; i++){
    //     res.push(temp[i+1])
    // }
    // res.push(-1)


    return temp;
    
};
