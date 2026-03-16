/**
 * @param {string} s
 * @return {boolean}
 */
let mp=new Map();
var areOccurrencesEqual = function(s) {
    for(let i=0;i<s.length;i++){
        if(!mp.has(s[i]))
            mp.set(s[i],1);
        else{
            mp.set(s[i],mp.get(s[i])+1);
        }
    }
    let occ=mp.get(s[0]);
    for(let [key,value] of mp){
        if(value!==occ)
            return false;
    }
    mp.clear();
    return true;

};
console.log(areOccurrencesEqual("vvvvvvvvvvvvvvvvvvv"));