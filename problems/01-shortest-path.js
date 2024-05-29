/*
One of the most common uses of a breadth-first search is to find a SINGLE
shortest path from one node to another. Refactor your implementation of
breadth-first search and use the technique from the reading. If it is possible
to reach the end node from the start node, return a SINGLE shortest path as an
array of nodes from the start to the end node. Otherwise, return null.

**IMPORTANT TIP:**  Be very careful creating your new path.  If you modify
currentPath, you're not just modifying the local copy.  You are also making a
change to the path in the queue.  You should not push to currentPath because
currentPath is a reference that gives another name to easily access that
array.  Instead, use `Array.concat()` or another method to copy the values into
a new array.

DO NOT USE:
currentPath.push(neighbor)
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

// 1. Create a queue. Create a separate array containing the starting node. Enqueue this array. 
//    The enqueued array is the current path.
// 2. Create a set to store visited nodes
// 3. While the queue is not empty, repeat steps 4-6
// 4. [DO NOT NEED THIS!!]Dequeue the first path, and save it in a variable
// 5. Save the last node in the path in a variable (DO NOT pop it)
// 6. IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
// 7. For each unvisited neighbor of the last node:
//    1. Add it to the visited nodes set
//    2. Copy the saved path, and add the neighbor to the end. Enqueue this new path
// 8. If the queue has become empty without finding the thing, then the thing has not been found. 
//    Return false, an error, or a message as appropriate for the problem you are solving.

function shortestPath(start, end) {
  // Your code here 
  let queue = [[start]];
  let visited = new Set ([]);

  while (queue.length) {
    let currentPath = queue.shift();
    let lastNode = currentPath[currentPath.length-1];
    

    if (lastNode === end) return currentPath;

    for (let neighbor of adjList[lastNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(currentPath.concat([neighbor]));
      }
    }
  }
  return null;
}

console.log(shortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log(shortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log(shortestPath(6, 1)); // -> null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestPath;
