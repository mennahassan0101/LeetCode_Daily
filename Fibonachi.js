/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0){return 0;}       
    else if(n===1){return 1;}  

    let ptr1=0;
    let ptr2=1;
    let result=0;
   

    for(let i=2;i<=n;i++){
        //console.log(`${ptr1 , ptr2}`);
        result=ptr1+ptr2;
        ptr1=ptr2;
        ptr2=result;


    }
    //console.log(result);
    return result;
};
console.log(`=================================================`);
console.log(fib(8));