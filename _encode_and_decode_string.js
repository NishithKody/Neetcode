"use strict";
let a= ["lint","code","love","you"]
let b = ["we", "say", "#", "yes"]
let c = ["w#e","sa#y","link","test"]
let d = ["3lint","co4e","link"]

let encode = (str) =>{
    let encoded = ""
    for(let cur of str){
        let len = cur.length
        encoded = encoded +len+'#'+cur
    }
    return encoded
}

let enc_str = encode(d)
console.log(enc_str)

let decode = (str) =>{
    let decoded = []
    let i = 0;
    let n = str.length
    while(i<n){
        let j=i;
        while(str[j]!='#'){
            j++;
        }   

        j=parseInt(j)
        let word_len = str.slice(i,j)
        word_len=parseInt(word_len)
        let word = str.slice(j+1, j+word_len+1)
        
        decoded.push(word)

        i = j+1+word_len

    }
    return decoded
}
let de_str = decode(enc_str)
console.log(de_str)

