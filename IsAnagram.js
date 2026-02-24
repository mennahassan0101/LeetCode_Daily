function isAnagram(s, t) {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    /*
    s="bbcc"
    t="ccbc"
    */ 
    if(s.length!=t.length){
        return false;
    }

    let seen =new Map();

    for(let i=0;i<t.length;i++){      
       if(seen.has(t[i])){
        let val=seen.get(t[i]);
        seen.set(t[i],val+1);
       }
       else{
        seen.set(t[i],1);
       }
    }

    console.log(seen);

    let freq=new Map();

    for(let i=0;i<s.length;i++){
        if(freq.has(s[i])){
            let val=freq.get(s[i]);
            freq.set(s[i],val+1);
        }
        else{
        freq.set(s[i],1);
        }
    }


    console.log(freq);
    for(let i=0;i<s.length;i++){
        if(seen.get(s[i])!=freq.get(s[i]))
            return false;
    }
    return true;
}
console.log(isAnagram(s="racecar",t="carrace"));
