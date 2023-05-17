/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = []

    for(let i =0; i<tokens.length; i++){
        if(isNaN(tokens[i])){
            let a = parseInt(stack.pop())
            let b = parseInt(stack.pop())
            let val = tokens[i]
            let res = 0
            if(val == '+'){
                res= b+a
            }
            else if( val == '-'){
                res= b-a
            }
            else if(val == '/'){
                res= parseInt(b/a)
            }
            else if(val == '*'){
                res= b*a
            }
            else{
                console.log('Did not recog the variable')
            }

            stack.push(res)

        }
        else{
            stack.push(tokens[i])
        }
    }

    return stack.pop()
    
};
