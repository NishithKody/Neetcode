/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {

    let map = new Map()
    let lasttime = -1
    let res = 0

    for(let i =0; i<position.length; i++){
        map.set(position[i],speed[i])
    }

    let smap = [...map.keys()].sort((a,b)=>b-a)

    for(let i =0; i<position.length; i++){
        let time = (target - smap[i])/map.get(smap[i])

        if(time > lasttime){
            lasttime = time
            res++
        }
    }


    return res;
    
};
