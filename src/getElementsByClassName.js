// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  node = node || document.body;
  var results = [];
  
  var names = node.className.split(' ');
  if (names.indexOf(className)>=0){
    results.push(node);
  }

  for (let i = 0; i<node.children.length;i++){
    var final = getElementsByClassName(className, node.children[i]);
    results = results.concat(final);
  }
  console.log("Our results = "+ results);
  return results;
};