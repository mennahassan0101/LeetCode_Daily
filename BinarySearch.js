// function binary_search(start,end,nums,target){
//     let mid=Math.ceil((start+end)/2);
//     if(start===mid&&nums[mid]!==target){
//         return -1;
//     }
//     if(nums[mid]===target){
//         return mid;
//     }
//     else if(target<nums[mid]){
//         end=mid-1;
//        return binary_search(start,end,nums,target);
//     } 
//     else if(target>nums[mid]){
//         start=mid+1;
//        return binary_search(start,end,nums,target);
//     }       
// }
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */  
    search(nums, target) {
        return this.binary_search(0,nums.length-1,nums,target);
    }
    binary_search(start,end,nums,target){
        let mid=Math.ceil((start+end)/2);
        if(start===mid&&nums[mid]!==target){
            return -1;
        }
        if(nums[mid]===target){
            return mid;
        }
        else if(target<nums[mid]){
            end=mid-1;
        return this.binary_search(start,end,nums,target);
        } 
        else if(target>nums[mid]){
            start=mid+1;
        return this.binary_search(start,end,nums,target);
        }       
    }

}
let sol=new Solution();
console.log(sol.search([-1,0,2,4,6,8],3));
