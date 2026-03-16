/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//          [3,2,2,3]
var removeElement = function(nums, val) {
    let ctr=0;
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]!==val){
            ctr++;
        }  
        else{
            nums.splice(i,1);
        }
    }
    console.log(nums);
    return ctr;
};
console.log(removeElement([3,2,2,3],  3));

