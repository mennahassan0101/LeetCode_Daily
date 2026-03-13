class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    } 
}

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1===null&&list2!==null){
            return list2;
        }
        else if(list2===null&&list1!==null){
            return list1;
        }
        let MergedHead=new ListNode();
        let ptr1=list1;
        let ptr2=list2;
        let curr=MergedHead;

        while(ptr1!==null&&ptr2!==null){// 1-> 2 -> 4
                                        // 1-> 3 -> 5
             if(ptr1.val>=ptr2.val){
                curr.next=ptr2;
                ptr2=ptr2.next;
                curr=curr.next;
            }
            else{
                curr.next=ptr1;
                ptr1=ptr1.next;
                curr=curr.next;                
            }
        
        }
        if(ptr1!==null){
            curr.next=ptr1;
        }
        else if(ptr2!==null){
            curr.next=ptr2;
        }
        return MergedHead.next;
    }
}
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(5);
let sol =new Solution();

function printList(head){
    let curr = head;

    while(curr !== null){
        process.stdout.write(curr.val + " -> ");
        curr = curr.next;
    }

    console.log("null");
}

printList(sol.mergeTwoLists(l1,l2));
