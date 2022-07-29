import SingleLinkedNode from "../LinkedNode";
import { SinglyLinkedList } from "../LinkedList";

class SingleLinkedList<DataType = any> implements SinglyLinkedList<DataType> {
    head: SingleLinkedNode<DataType> | null;
    tail: SingleLinkedNode<DataType> | null;
    listLength: number;

    constructor(root?: DataType) {
        if (!root) {
            this.head = null;
            this.tail = null;
            this.listLength = 0;

            return;
        }

        const initializingRoot = new SingleLinkedNode<DataType>(root)

        this.head = initializingRoot;
        this.tail = initializingRoot;

        this.listLength = 1;
    }

    push(value: DataType): SingleLinkedList {
        const freshNode = new SingleLinkedNode(value);

        if (this.listLength === 0) {
            this.head = freshNode;
            this.tail = freshNode;
            
            this.listLength++;
            return this;
        }

        this.tail?.setNext(freshNode);
        this.tail = freshNode;

        this.listLength++;
        return this;
    }

    pop(): SingleLinkedNode<DataType> | null {
        let current = this.head;
        let newTail = current;
        let removedNode;

        if (this.listLength === 1) {
            removedNode = this.head;
            this.head = null;
            this.tail = null;

            this.listLength--;
            return removedNode;
        }

        if (!this.head && !this.tail) {
            return null;
        }

        while (current?.next) {
            newTail = current;
            current = current.next;
        }

        removedNode = this.tail;

        this.tail = newTail;
        this.tail?.setNext(null);
        this.listLength--;

        return removedNode;
    }

    shift(): SingleLinkedNode<DataType> | null {
        if (!this.head) return null;

        const oldHead = this.head;
        this.head = oldHead.next;

        oldHead.setNext(null);
        this.listLength--;

        if (this.listLength === 0) {
            this.tail = null
        }

        return oldHead;
    }

    unshift(value: DataType): SingleLinkedList {
        if (!this.head) {
            this.push(value)
            return this;
        } else {
            const newHead = new SingleLinkedNode(value);

            newHead.setNext(this.head);
            this.head = newHead;
        }

        this.listLength++;
        return this;
    }

    get(idx: number): SingleLinkedNode<DataType> | null {
        let idxCounter = 0; 
        let traversingNode: SingleLinkedNode<DataType> | null = this.head;

        if (( idx > this.listLength ) || (idx < 0)) return null;
        if (!this.head) return null;

        while (traversingNode) {
            if (idx === idxCounter) {
                return traversingNode;
            }

            traversingNode = traversingNode.next;
            idxCounter++;
        }

        return null;
    }

    set(newValue: DataType, idx: number): SingleLinkedNode<DataType> | null {
        const nodeToChange = this.get(idx);

        if (nodeToChange) {
            nodeToChange.value = newValue;
            return nodeToChange;
        }

        return null;
    }

    insert(value: DataType, idx: number): SingleLinkedList | null {
        // Escape errors early
        if (idx < 0 || idx > this.listLength) return null;

        // Handle case where user inserts to beginning of list
        if (idx === 0 || !this.head) {
            return this.unshift(value)
        }

        // Handle case where user pushes to end of list
        if (idx === this.listLength) {
            return this.push(value);
        }

        // Find the linked node before insert point
        const startOfBridgeNode = this.get(idx - 1);
        console.log(startOfBridgeNode);

        // An unexpected error return null
        if (!startOfBridgeNode) return null;

        const newNode = new SingleLinkedNode(value);
        const endOfBridgeNode = startOfBridgeNode?.next;

        // startOfBridgeNode -> newNode -> endOfBridgeNode
        newNode.setNext(endOfBridgeNode);
        startOfBridgeNode.setNext(newNode);

        this.listLength++;
        return this;
    }

    remove(idx: number): SingleLinkedList | null {
        if (idx > this.listLength || idx < 0) return null;

        if (idx === this.listLength - 1) {
            this.pop();
            return this;
        }

        if (idx === 0 && this.head) {
            this.shift();
            return this;
        }

        const nodeBeforeRemovedNode = this.get(idx - 1);
        const removedNode = nodeBeforeRemovedNode?.next; 

        if (!nodeBeforeRemovedNode || !removedNode) return null;

        // Store the removed nodes next (AKA rest of the lest)
        // and connect the node before removed node to skip removed
        const nextNode = removedNode.next;
        nodeBeforeRemovedNode.setNext(nextNode);

        removedNode.setNext(null);

        this.listLength--;
        return this;
    }

    reverse(): SingleLinkedList {
        if (!this.head || !this.tail) return this;

        let node: SingleLinkedNode<DataType> = this.head;
        this.head = this.tail;
        this.tail = node;

        let next: SingleLinkedNode<DataType> | null = null;
        let prev: SingleLinkedNode<DataType> | null = null;

        for (let i = 0; i < this.listLength; i++) {
            next = node.next;
            node.setNext(prev);
            prev = node;
            node = next as SingleLinkedNode<DataType>;
        }

        return this;
    }
}

export default SingleLinkedList;