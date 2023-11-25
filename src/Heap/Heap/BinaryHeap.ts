import HeapDataNode from "../HeapDataNode";

export enum HeapType {
    MAX,
    MIN
}

export default class BinaryHeap<Datatype> {
    public values: HeapDataNode<Datatype>[] = [];
    private type: HeapType;

    constructor(_heapType?: HeapType) {
        this.values = [];
        this.type = _heapType ?? HeapType.MAX;
    }

    private correctPriorityFound_BUBBLE(
        childNode: HeapDataNode<Datatype>,
        parentNode: HeapDataNode<Datatype>
    ): boolean {
        if (this.type === HeapType.MAX) {
            return childNode.priority <= parentNode.priority
        }

        return childNode.priority >= parentNode.priority
    }
    
    // MAX: Sink the parent if the child has a greater priority
    private correctPriorityFound_SINK(
        childNode: HeapDataNode<Datatype>,
        parentNode: HeapDataNode<Datatype>
    ): boolean {
        if (this.type === HeapType.MAX) {
            return childNode.priority >= parentNode.priority
        }

        return childNode.priority <= parentNode.priority
    }

    public insert(element: HeapDataNode<Datatype>): void {
        this.values.push(element);
        this.bubbleUp();
    }

    private bubbleUp(): void {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0 && element){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx]!;

            if (this.correctPriorityFound_BUBBLE(element, parent)) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    public extract(): HeapDataNode<Datatype> | undefined {
        const extractedNode = this.values[0];
        const lastNode = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = lastNode as HeapDataNode<Datatype>;
            this.sinkDown();
        }

        return extractedNode;
    }


    private sinkDown(): void {
        let idx = 0;

        const length = this.values.length;
        const element = this.values[0];

        while (element && true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];

                if (leftChild && this.correctPriorityFound_SINK(leftChild, element)) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    (rightChild && swap === null && this.correctPriorityFound_SINK(rightChild, element)) || 
                    (
                        swap !== null &&
                        rightChild &&
                        leftChild &&
                        this.correctPriorityFound_SINK(rightChild, leftChild)
                    )
                ) {
                   swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap] as HeapDataNode<Datatype>;
            this.values[swap] = element;

            idx = swap;
        }
    }
}