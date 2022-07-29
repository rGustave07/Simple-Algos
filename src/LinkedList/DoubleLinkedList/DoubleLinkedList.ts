import { DoubleLinkedNode, Node } from "../LinkedNode/LinkedNode";
import { DoublyLinkedList } from "../LinkedList";

class DoubleLinkedList<DataType = any> implements DoublyLinkedList<DataType> {
	head: DoubleLinkedNode<DataType> | null;
	tail: DoubleLinkedNode<DataType> | null;
	listLength: number;

	constructor(root?: DataType) {
		if (!root) {
			this.head = null;
			this.tail = null;
			this.listLength = 0;

			return;
		}

		const initializingRoot = new DoubleLinkedNode<DataType>(root);
		
		this.head = initializingRoot;
		this.tail = initializingRoot;

		this.listLength = 1;
	}

	push (value: DataType): DoubleLinkedList<DataType> {
		const freshNode = new DoubleLinkedNode<DataType>(value);

		if (this.listLength === 0) {
			this.head = freshNode;
			this.tail = freshNode;

			this.listLength++;
			return this;
		}

		this.tail?.setNext(freshNode);
		freshNode.setPrev(this.tail);

		this.tail = freshNode;
		this.listLength++;

		return this;
	};

	pop (): DoubleLinkedNode<DataType> | null {
		if (this.listLength === 0) return null;

		if (this.listLength === 1) {
			this.head = null;
			this.tail = null;

			return null;
		}

		const removedNode = this.tail;
		const newTail = ( this.tail?.prev || null ) as DoubleLinkedNode<DataType>;

		newTail?.setNext(null);
		this.tail?.setPrev(null);

		this.tail = newTail;
		this.listLength--;

		return removedNode;
	};

	shift(): DoubleLinkedNode<DataType> | null {
		if (this.listLength === 0 || !this.head) return null;
		if (this.listLength === 1) {
			this.head = null;
			this.tail = null;
			this.listLength = 0;

			return null;
		}

		const oldHead = this.head;
		this.head = oldHead?.next;

		this.head?.setPrev(null);
		oldHead.setNext(null);

		this.listLength--;
		return oldHead;
	};
	unshift: (value: DataType) => DoubleLinkedList<any>;
	get: (idx: number) => Node<DataType> | null;
	set: (newValue: DataType, idx: number) => Node<DataType> | null;
	insert: (value: DataType, idx: number) => DoubleLinkedList<any> | null;
	remove: (idx: number) => DoubleLinkedList<any> | null;
}

export default DoubleLinkedList;

import util from 'util';

const ll = new DoubleLinkedList<number>(1).push(2).push(3);
console.log('Removed node:', ll.pop());
console.log(util.inspect(ll, false, null, true));