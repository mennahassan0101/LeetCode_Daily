function twoSum(nums, target) {
    let indexes=[];
    let found_target=false; 
    for(let i=0;i<nums.length;i++){

        for(let j=i+1; j<=nums.length-i+1; j++){
            console.log(i,j);
            if(nums[i]+nums[j]===target){
                
                indexes.push(i);
                indexes.push(j);
                found_target=true;
                break;
            }

        }
        if(found_target===true){
            return indexes;
        }
    }
    
}
console.log(twoSum([-1,-2,-3,-4,-5],-8));