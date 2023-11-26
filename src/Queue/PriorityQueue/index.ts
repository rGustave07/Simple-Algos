import BinaryHeap, { HeapType } from "../../Heap/BinaryHeap/BinaryHeap";
import HeapDataNode from "../../Heap/HeapDataNode";

export default class PriorityQueue<QueueData> {
    private values: BinaryHeap<QueueData>;

    constructor() {
        this.values = new BinaryHeap(HeapType.MAX);
    }

    getValues(): BinaryHeap<QueueData> {
        return this.values;
    }

    enqueue(
        val: QueueData,
        priority: number
    ): void {
        let newNode = new HeapDataNode(priority, val);
        this.values.insert(newNode);
    }

    dequeue(): HeapDataNode<QueueData> | undefined {
        return this.values.extract()
    }
}