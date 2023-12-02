import Queue from "../Queue";
import { GraphEdge, GraphVertex } from "./GraphComponents";

export default class Graph<T=any> {
	vertices: Map<string, GraphVertex<T>>;
	edges: Map<string, GraphEdge[]>;
	adjacencyMap: Map<string, GraphVertex[]>;
	isDirected: boolean;

	constructor(isDirected = false) {
		this.vertices = new Map();
		this.edges = new Map();
		this.adjacencyMap = new Map();
		this.isDirected = isDirected;
	}

	public addVertex(newVertex: GraphVertex): Graph<T> {
		this.vertices.set(newVertex.getKey(), newVertex)

		return this;
	}

	public addEdge(source: GraphVertex, dest: GraphVertex): void {
		const edgeListSource: GraphVertex[] = this.adjacencyMap.get(source.getKey()) ?? [];
		const edgeListDest: GraphVertex[] = this.adjacencyMap.get(dest.getKey()) ?? [];

		const sourceToDestinationEdge = new GraphEdge(source, dest);
		const destinationToSourceEdge = new GraphEdge(dest, source);

		// Set edges on src and dest graph vertexes
		source.edges.push(sourceToDestinationEdge);

		// Set adj map and edges from src to dest
		this.adjacencyMap.set(source.getKey(), [...edgeListSource, dest])
		this.edges.set(source.getKey(), [
			...(this.edges.get(source.getKey()) ?? []),
			sourceToDestinationEdge,
		]);

		// If undirected also map back from dest to src
		if (!this.isDirected) {
			dest.edges.push(destinationToSourceEdge);
			this.adjacencyMap.set(dest.getKey(), [...edgeListDest, source])
			this.edges.set(dest.getKey(), [
				...(this.edges.get(dest.getKey()) ?? []),
				destinationToSourceEdge,
			]);
		}
	}

	// Breadth First Search
	public BFS(start: GraphVertex): GraphVertex<T>[] {
        const queue = new Queue<GraphVertex<T>>(start);
        const result = [];
        const visited: Record<string, boolean> = {};

        let currentVertex;

        visited[start.name] = true;

        while(queue.queueLength()){
            [ ,currentVertex ] = queue.dequeue();
           
			if (!currentVertex) break;

            result.push(currentVertex);
			const neighbors = this.adjacencyMap.get(currentVertex.name)

			neighbors?.forEach(neighbor => {
				if (!visited[neighbor.name]) {
					visited[neighbor.name] = true;
					queue.enqueue(neighbor);
				}
			});
        }

        return result;
	}

	public getVertexByKey(vertexKey: string): GraphVertex | undefined {
		return this.vertices.get(vertexKey);
	}

	static printGraph(g: Graph): void {
		const keys = g.adjacencyMap.keys();

		// Adjacency map is empty but vertices exist in the graph
		if (g.adjacencyMap.size === 0 && g.vertices.entries()) {
			console.log('This Graph has vertices but no connections(edges) between them', [...g.vertices])
			return;
		}

		for (const k of keys) {
			console.log(`${k} -> ${g.adjacencyMap.get(k)?.map(v => v.name)}`)
		}
	}
}