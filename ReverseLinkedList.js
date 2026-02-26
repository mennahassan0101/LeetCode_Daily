class ListNode{
    constructor(val=0,next=null){
        this.val=val;
        this.next=next;
    }
}
class LinkedList{
    
    constructor(){
        this.head=null;
    }

    append(value){
        const newNode=new ListNode(value);
        if(this.head===null){
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next!==null){
            current=current.next;
        }
        current.next=newNode;
    }  
    display() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.val + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    reverseList(head) {
        let prev=null;
        let current=this.head;
        let next=null;
        while(current!==null){
            next=current.next;
            current.next=prev;

            //move;
            prev=current;
            current=next;
        }    
        this.head=prev;
    }
}
let list=new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.display();
list.reverseList(list.head);
list.display();


