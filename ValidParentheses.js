function isValid(s) {
    if(s.length%2!==0){
        return false;
    }
    let StackPush=[];
    const ParMapped=new Map();
    ParMapped.set(')','(');
    ParMapped.set(']','[');
    ParMapped.set('}','{');
    for(let i=0;i<s.length;i++){
        if(s[i]==='('||s[i]==='['||s[i]==='{'){
            StackPush.push(s[i]);
        }
        else if(s[i]===')'||s[i]===']'||s[i]==='}'){
            const lastOpen=StackPush.pop();
            if(lastOpen!==ParMapped.get(s[i]))
                return false;

        }
    }
    if(StackPush.length!==0){return false;}   
    return true; 
}
console.log(isValid("(("));