// walk() calls the function "callback" once for each node
function walk(node, callback) {
  callback(node);                                                   // do something with node
  for (let index = 0; index < node.childNodes.length; index += 1) { // for each child node
    walk(node.childNodes[index], callback);                         // recursively call walk()
  }
}

// walk(document.body, node => {                                // log nodeName of every node
//   console.log(node.nodeName);
// });
