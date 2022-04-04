function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        // this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.edgeTo = [];
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
// function showGraph() {
//     for (var i = 0; i < this.vertices; ++i) {
//         console.log('Vertex: ' + i);
//         for (var j = 0; j < this.vertices; ++j) {
//             if (this.adj[i][j] != undefined)
//                 console.log('\tEdge -> ' + this.adj[i][j]);
//         }
//         console.log('\n');
//     }
// }
// a new function to display symbolic names instead of numbers
function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
        console.log(this.vertexList[i] + " -> ");
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    console.log(this.vertexList[j] + ' ');
                }
            }
        }
        console.log();
        visited.pop();
    }
}
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log("Visited vertex: " + v);
    }
    for (var w of this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v !== undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var w of this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}
function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var i = 0; i < this.vertices; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] != undefined && stack[i] != false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
}
function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var w of this.adj[v]) {
        if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}
function run() {
    g = new Graph(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.vertexList = ["CS1", "CS2", "Data Structures",
        "Assembly Language", "Operating Systems",
        "Algorithms"];
    g.showGraph();
    g.topSort();
    // g.showGraph();
    // g.dfs(0);
    // g.bfs(2);
}