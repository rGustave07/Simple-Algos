import SingleLinkedList from "./SingleLinkedList";
import DoubleLinkedList from "./DoubleLinkedList";
import Node from './LinkedNode';

type List = SingleLinkedList | DoubleLinkedList

export default interface LinkedList<DataType> {
    head: Node<DataType> | null;
    tail: Node<DataType> | null;
    listLength: number;
    push: (value: DataType) => List;
    pop: () => Node<DataType> | null;
    shift: () => Node<DataType> | null;
    unshift: (value: DataType) => List;
    get: (idx: number) => Node<DataType> | null;
    set: (newValue: DataType, idx: number) => Node<DataType> | null;
    insert: (value: DataType, idx: number) => List | null;
    remove: (idx: number) => List | null;
}

export { SingleLinkedList, DoubleLinkedList }

export interface SinglyLinkedList<DataType = any> extends LinkedList<DataType> {
    reverse: () => SingleLinkedList;
}

export interface DoublyLinkedList<DataType = any> extends LinkedList<DataType> {}
