import { DoublyLinkedList } from "../LinkedList/LinkedList";
import DoubleLinkedList from "../LinkedList/DoubleLinkedList";

interface QueueInterface<DataType> {
    enqueue: (value: DataType) => QueueLength;
    dequeue: () => DequeuedInterface<DataType>;
}

type DequeuedInterface<DataType=any> = [QueueLength, DataType];
type QueueLength = number;

class Queue<DataType> implements QueueInterface<DataType> {
    private queue: DoublyLinkedList;

    constructor(...args: DataType[]) {
        const constructedQueue = new DoubleLinkedList();

        if (args.length > 0) {
            args.forEach(datum => {
                constructedQueue.push(datum);
            })
        }

        this.queue = constructedQueue;
    };

    enqueue(value: DataType): QueueLength {
        this.queue.unshift(value);

        return this.queue.listLength;
    };

    dequeue(): DequeuedInterface<DataType> {
        const processedNode = this.queue.pop();

        return [this.queue.listLength, processedNode?.value];
    };

    queueLength(): number {
        return this.queue.listLength;
    };
}

export default Queue;