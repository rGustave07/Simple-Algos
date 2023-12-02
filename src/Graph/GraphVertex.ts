import { GraphEdge } from "./";

export default class GraphVertex<T=any> {
	edges: GraphEdge[];
	value: T;
	name: string;

	constructor(name: string, value: T) {
		if (value === undefined) {
			throw new Error("Graph Vertex must have a value");
		}

		this.value = value;
		this.name = name;
		this.edges = [];
	}

	public getKey(): string {
		return this.name;
	}

	public getData(): T {
		return this.value
	}
}