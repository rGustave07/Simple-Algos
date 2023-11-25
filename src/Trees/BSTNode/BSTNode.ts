class BSTNode<DataType> {
    value: DataType
    left: BSTNode<DataType> | null
    right: BSTNode<DataType> | null

    constructor(data: DataType) {
        this.value = data;
        this.left = null;
        this.right = null;
    }

    setLeft(value: DataType): void {
        this.left = new BSTNode(value);
    }

    setRight(value: DataType): void {
        this.right = new BSTNode(value);
    }
}

export default BSTNode;
