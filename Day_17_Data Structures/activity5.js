// ************************ Graph (Optional) **************************


// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }

    // Perform a breadth-first search (BFS) starting from a given vertex
    bfs(startVertex) {
        if (!this.adjacencyList.has(startVertex)) {
            throw new Error('Start vertex not found in the graph');
        }

        const visited = new Set();
        const queue = [];
        const result = [];

        queue.push(startVertex);
        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // Perform BFS and find the shortest path from startVertex to endVertex
    findShortestPath(startVertex, endVertex) {
        if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
            throw new Error('Start or end vertex not found in the graph');
        }

        const visited = new Set();
        const queue = [];
        const predecessors = new Map(); // To reconstruct the path

        queue.push(startVertex);
        visited.add(startVertex);
        predecessors.set(startVertex, null);

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (vertex === endVertex) {
                return this._reconstructPath(predecessors, endVertex);
            }

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    predecessors.set(neighbor, vertex);
                }
            }
        }

        return null; // If there's no path from startVertex to endVertex
    }

    // Helper method to reconstruct the path from the predecessors map
    _reconstructPath(predecessors, endVertex) {
        const path = [];
        let currentVertex = endVertex;

        while (currentVertex !== null) {
            path.unshift(currentVertex);
            currentVertex = predecessors.get(currentVertex);
        }

        return path;
    }

    // Display the graph
    display() {
        for (const [vertex, edges] of this.adjacencyList) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log('Graph representation:');
graph.display();

console.log('BFS starting from vertex A:');
const bfsResult = graph.bfs('A');
console.log(bfsResult); // Output: [ 'A', 'B', 'C', 'D' ] (or any order depending on the graph structure)



// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.


const graph1 = new Graph();
graph1.addVertex('A');
graph1.addVertex('B');
graph1.addVertex('C');
graph1.addVertex('D');
graph1.addVertex('E');
graph1.addEdge('A', 'B');
graph1.addEdge('A', 'C');
graph1.addEdge('B', 'D');
graph1.addEdge('C', 'D');
graph1.addEdge('D', 'E');

console.log('Graph representation:');
graph1.display();

console.log('Shortest path from A to E:');
const shortestPath = graph1.findShortestPath('A', 'E');
console.log(shortestPath); 