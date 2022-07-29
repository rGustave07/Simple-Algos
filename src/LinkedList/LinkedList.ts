import SingleLinkedList from "./SingleLinkedList/SingleLinkedList";
import DoubleLinkedList from "./DoubleLinkedList/DoubleLinkedList";
import { Node } from './LinkedNode/LinkedNode';

type List = SingleLinkedList | DoubleLinkedList

export interface LinkedList<DataType> {
    head: Node<DataType> | null;
    tail: Node<DataType> | null;
    push: (value: DataType) => List;
    pop: (value: DataType) => Node<DataType> | null;
    shift: () => Node<DataType> | null;
    unshift: (value: DataType) => List;
    get: (idx: number) => Node<DataType> | null;
    set: (newValue: DataType, idx: number) => Node<DataType> | null;
    insert: (value: DataType, idx: number) => List | null;
    remove: (idx: number) => List | null;
}

export interface SinglyLinkedList<DataType = any> extends LinkedList<DataType> {
    reverse: () => SingleLinkedList;
}

export interface DoublyLinkedList<DataType = any> extends LinkedList<DataType> {}

export * as DoubleLinkedList from "./DoubleLinkedList";

export default LinkedList;
