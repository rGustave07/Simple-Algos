import { SingleLinkedList } from '..';

describe("LinkedLists", () => {
    it('Should allow for values to be pushed and connected', () => {
        const numberList = new SingleLinkedList<number>();
        numberList.push(1).push(2).push(3);

        expect(numberList.head?.value).toBe(1);
        expect(numberList.head?.next?.value).toBe(2);
        expect(numberList.head?.next?.next?.value).toBe(3);
    });

    it('Should allow user to pop off the end of a linked list', () => {
        const numberList = new SingleLinkedList<number>();
        numberList.push(1).push(2).push(3);

        const poppedNode = numberList.pop();
        expect(poppedNode?.value).toBe(3);
    })
});