import SingleLinkedList from "./SingleLinkedList/SingleLinkedList";
import { Node } from './LinkedNode/LinkedNode';

interface LinkedList<DataType> {
    head: Node<DataType> | null;
    tail: Node<DataType> | null;
    push: (value: DataType) => SingleLinkedList;
    pop: (value: DataType) => Node<DataType> | null;
    shift: () => Node<DataType> | null;
    unshift: (value: DataType) => SingleLinkedList;
    get: (idx: number) => Node<DataType> | null;
    set: (newValue: DataType, idx: number) => Node<DataType> | null;
    insert: (value: DataType, idx: number) => SingleLinkedList | null;
    remove: (idx: number) => SingleLinkedList | null;
}

export interface SinglyLinkedList<DataType = any> extends LinkedList<DataType> {
    reverse: () => SingleLinkedList;
}

export default LinkedList;
