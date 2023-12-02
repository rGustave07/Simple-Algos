import {
    SingleLinkedList,
    SinglyLinkedList 
} from "../LinkedList";

interface StackInterface<DataType> {
    getStackLength(): LengthOfStack;
    peek: () => DataType | null;
    push: (val: DataType) => void;
    pop: () => DataType | null;
}

type LengthOfStack = number;

class Stack<DataType> implements StackInterface<DataType> {
    private stack: SinglyLinkedList;

    constructor(...args: DataType[]) {
        const stackList = new SingleLinkedList();

        // User must enter the data in the order they want the stack to be read
        // E.G: Top of Stack ---> [4, 3, 2, 1] <--- Bottom of Stack
        if (args.length > 0) {
            args.forEach(datum => {
                stackList.push(datum);
            });
        }

        this.stack = stackList;
    }

    getStackLength(): LengthOfStack {
        return this.stack.listLength;
    }

    peek(): DataType | null {
        if (!this.stack || !this.stack.head) {
            return null;
        }

        return this.stack.head.value;
    }

    push(val: DataType): LengthOfStack {
        this.stack.unshift(val);

        return this.stack.listLength;
    }

    pop(): DataType | null {
        const poppedValue = this.stack.shift();

        return poppedValue?.value ?? null;
    }
}

export default Stack;