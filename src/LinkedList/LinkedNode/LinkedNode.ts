export interface Node<T> {
    value: T;
    next: Node<T> | null;
    setNext: (value: Node<T> | null) => void;
}

class SingleLinkedNode<T> implements Node<T> {
    value: T;
    next: SingleLinkedNode<T> | null

    constructor(value: T) {
        this.value = value
    }

    setNext(value: SingleLinkedNode<T> | null) {
        if (!value) {
            this.next = null;
            return;
        }

        this.next = value;
    }
}

export class DoubleLinkedNode<T> implements Node<T> {
    value: T;
    next: DoubleLinkedNode<T> | null
    prev: DoubleLinkedNode<T> | null

    constructor(value: T) {
        this.value = value
    }

    setNext(value: DoubleLinkedNode<T> | null) {
        if (!value) {
            this.next = null;
            return;
        }

        this.next = value;
    }

    setPrev(value: DoubleLinkedNode<T> | null) {
        if (!value) {
            this.prev = null;
            return;
        }

        this.prev = value;
    }
}

export default SingleLinkedNode;