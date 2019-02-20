// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // look at the first character of json...
  var firstChar = json[0];
  // if that character is a [...
  if (firstChar === '[') {
    // do something...
    var result = json.slice(1, -1);
    result = result.split(',');
    for (let i = 0; i < result.length; i++) {
      result[i] = parseJSON(result[i]);
    }
    return result;
  } else if (firstChar === '{') {
    var results = {};
  } 
};

/*
  var results = [];
  for (let i =0;i<json.length;i++){
    if (json[i]==="["){
      results.push(json[i]);
    } else if (json[i]==="{"){
    } else if (json[i]==="]"){
      var corresponding = results.lastIndexOf("]");
      var inside = results.slice(corresponding+1,i+1);
      results = results + parseJSON(inside.join())+parseJSON(json.slice(i+1));
    }
    // else {
    // //all primitives
    // 
  }
  return results;
}
-----
  if that character is a {...
    do something else...
  if that character is a "...
    do something else...
  if typeof parseInt(character) is 'number'...
    do something else...
  for(let i = 0; i<json.length;i++){
    if (json[i]==='['){
    split on ,
    for each one, parseJSON on it and push it to final result array
    } else if (json[i]==='{'){
      var inputs = json.split(","); //["foo":"f"]
      // var obj = {};
      // while nextLetter is not a :, 
      //   store nextLetter
      // skip the :
      // while nextLetters not a ,
      //   store that
      // obj[firstStoredItem]=secondStoredItem;
    }
  }
*/