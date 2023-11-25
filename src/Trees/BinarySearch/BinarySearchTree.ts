import Queue from "../../Queue/Queue";
import BSTNode from "../BSTNode/BSTNode"

class BinarySearchTree<DataType> {
    root: BSTNode<DataType> | null

    constructor(root: DataType) {
        this.root = new BSTNode(root)
    }

    DFS_InOrder(): DataType[] {
        const visitedNodes: DataType[] = [];

        if (this.root === null) return visitedNodes;

        let current = this.root;

        const traverse = (node: BSTNode<DataType>): void => {
            if (node.left) traverse(node.left);
            visitedNodes.push(node.value);

            if (node.right) traverse(node.right);
        }

        traverse(current);
        return visitedNodes;
    }

    DFS_PostOrder(): DataType[] {
        const visitedNodes: DataType[] = [];

        if (this.root === null) return visitedNodes;

        let current = this.root;

        const traverse = (node: BSTNode<DataType>): void => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            visitedNodes.push(node.value);
        }

        traverse(current);
        return visitedNodes;
    }

    DFS_PreOrder(): DataType[] {
        const visitedNodes: DataType[] = [];

        if (this.root === null) return visitedNodes;

        let current = this.root;

        const traverse = (node: BSTNode<DataType>): void => {
            visitedNodes.push(node.value);

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return visitedNodes;
    }

    BFS(): DataType[] {
        const trackQueue = new Queue<BSTNode<DataType>>();
        const visitedNodes: DataType[] = [];

        if (this.root === null) return visitedNodes;
        const startNode: BSTNode<DataType> = this.root;

        trackQueue.enqueue(startNode);

        while (trackQueue.queueLength() !== 0) {
            const [_, dequeuedNode] = trackQueue.dequeue();
            const left = dequeuedNode.left;
            const right = dequeuedNode.right;
            visitedNodes.push(dequeuedNode.value);

            if (left) {
                trackQueue.enqueue(left);
            }

            if (right) {
                trackQueue.enqueue(right);
            }
        }

        return visitedNodes;
    }

    find(value: DataType, startingNode: BSTNode<DataType> | null = null): BSTNode<DataType> | null {
        if (this.root === null || !startingNode) {
            return null;
        }

        if (value === startingNode.value) {
            return startingNode
        }

        if (value < startingNode.value) {
            if (startingNode.left === null) {
                return null
            }

            return this.find(value, startingNode.left)
        }

        if (value > startingNode.value) {
            if (startingNode.right === null) {
                return null
            }

            return this.find(value, startingNode.right)
        }

        return null;
    }

    recursiveInsert(startingNode: BSTNode<DataType> | null, value: DataType): BSTNode<DataType> | null {
        const newNode = new BSTNode(value);

        if (
            startingNode === null ||
            startingNode.value === value
        ) {
            return newNode;
        };

        if (this.root === null) {
            this.root = newNode;
        }

        if (value < startingNode.value) {
            startingNode.left = this.recursiveInsert(startingNode.left, value);
        }

        if (value > startingNode.value) {
            startingNode.right = this.recursiveInsert(startingNode.right, value);
        }

        return startingNode;
    }

    insert(value: DataType): BinarySearchTree<DataType> | null {
        const newNode = new BSTNode(value);

        if (this.root === null || !this.root) {
            this.root = newNode;
            return this
        }

        let current = this.root;
        while (true) {
            if (value == current.value) return null;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }

                current = current.right;
            }
        }
    }
}

export default BinarySearchTree;
