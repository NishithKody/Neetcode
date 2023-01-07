function isPalindrome(s: string): boolean {

    let i = 0;
    let j = s.length -1;
    s=s.toLowerCase();

    while(i<j){
        let a = s[i];
        let b = s[j]
        if((a<'a' || a>'z') && (a<'0' || a>'9')){
            i++;
            continue;
        }
        if((b<'a' || b>'z') && (b<'0' || b>'9')){
            j--;
            continue;
        }
        if(a!=b){
            return false;
        }
        i++;
        j--;
    }

    return true;


};
