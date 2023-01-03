function isValid(s: string): boolean {

    let res = true;

    let stk = [];

    for(let i of s){
        if(i=='('|| i=='{' || i =='[')
        {
            stk.push(i)
            continue;
        }
        if(i==')'){
            let temp = stk.pop();
            if(temp!='('){
                res = false;
                break;
            }
        }
        else if(i=='}'){
            let temp = stk.pop();
            if(temp!='{'){
                res = false;
                break;
            }
        }
        else if(i==']'){
            let temp = stk.pop();
            if(temp!='['){
                res = false;
                break;
            }
        }
        console.log(stk)
    }

    if(stk.length!=0){
        res = false;
    }


    return res;

};
