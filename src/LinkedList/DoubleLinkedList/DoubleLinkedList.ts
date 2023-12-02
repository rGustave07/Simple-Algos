import { DoubleLinkedNode, Node } from "../LinkedNode/LinkedNode";
import { DoublyLinkedList } from "../";

class DoubleLinkedList<DataType = any> implements DoublyLinkedList<DataType> {
	head: DoubleLinkedNode<DataType> | null;
	tail: DoubleLinkedNode<DataType> | null;
	listLength: number;

	constructor(root?: DataType) {
		if (root === undefined || root === null) {
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
			if (this.head) {
				const removedNode = this.head;

				this.head = null;
				this.tail = null;

				this.listLength--;
				return removedNode
			};

			if (this.tail) {
				const removedNode = this.tail;

				this.head = null;
				this.tail = null;

				this.listLength--;
				return removedNode;
			};
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

	unshift(value: DataType): DoubleLinkedList<any> {
		if (!this.head) {
			this.push(value);
			return this;
		} else {
			const newHead = new DoubleLinkedNode(value);

			newHead.setNext(this.head);
			this.head.setPrev(newHead);
			this.head = newHead;
		}

		this.listLength++;
		return this;
	};

	get(idx: number): DoubleLinkedNode<DataType> | null {
		let count: number;

		if (this.head === null || this.head === undefined) return null;
		if (idx < 0 || idx > this.listLength - 1) return null;

		if (idx < Math.floor(this.listLength/2)) {
			let traversalNode: DoubleLinkedNode<DataType> | null = this.head;
			count = 0;

			while (traversalNode) {
				if (idx === count) {
					return traversalNode;
				}

				count++;
				traversalNode = traversalNode.next;
			}

			return null;
		} else {
			let traversalNode: DoubleLinkedNode<DataType> | null = this.tail;
			count = this.listLength - 1;

			while (traversalNode) {
				if (idx === count) {
					return traversalNode;
				}

				count--;
				traversalNode = traversalNode.prev;
			}

			return null;
		}
	};

	set(newValue: DataType, idx: number): Node<DataType> | null {
		const nodeToChange = this.get(idx);

		if (nodeToChange) {
			nodeToChange.value = newValue;
			return nodeToChange;
		}

		return null;
	};

	insert(value: DataType, idx: number): DoubleLinkedList<any> | null {
		if (idx < 0 || idx > this.listLength) return null;

		// User inserts at beginning
		if (idx === 0 || !this.head) {
			return this.unshift(value);
		}

		// User inserts at end
		if (idx === this.listLength - 1) {
			return this.push(value);
		}

		const startOfBridgeNode = this.get(idx);
		if (!startOfBridgeNode) return null;

		const insertionNode = new DoubleLinkedNode(value);
		const endOfBridgeNode = startOfBridgeNode.next;
		if (!endOfBridgeNode) return null;

		// Next and Prev sets for start node, inserted node, and end node.
		// startNode -> <- insertionNode -> <- endNode
		startOfBridgeNode.setNext(insertionNode);
		endOfBridgeNode.setPrev(insertionNode);

		insertionNode.setNext(endOfBridgeNode);
		insertionNode.setPrev(startOfBridgeNode);

		this.listLength++;
		return this;
	};

	remove(idx: number): DoubleLinkedList<any> | null {
		if (idx < 0 || idx > this.listLength) return null;

		if (this.head === (null || undefined) || this.tail === (null || undefined)) {
			return null;
		}

		if (idx === 0) {
			this.shift();
			return this;
		};

		if (idx === this.listLength - 1) {
			this.pop();
			return this;
		}

		const removedNode = this.get(idx);
		const startConnectionNode = removedNode?.prev;
		const endConnectionNode = removedNode?.next;

		if (!startConnectionNode || !endConnectionNode) return null;

		startConnectionNode.setNext(endConnectionNode);
		endConnectionNode.setPrev(startConnectionNode);

		removedNode.setNext(null);
		removedNode.setPrev(null);

		this.listLength--;
		return this;
	};
}

export default DoubleLinkedList;
