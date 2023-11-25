class HeapDataNode<NodeValue> {
    public priority: number;
    public value: NodeValue | undefined;

    constructor(_priority: number, _value: NodeValue) {
        this.priority = _priority;
        this.value = _value;
    };
}

export default HeapDataNode;