var anagram = function(word) {
  return new Anagram(word);
};

function Anagram(word) {
  
  var target = word.toLowerCase();
  
  var sortWord = function(word){
    return word.toLowerCase().split('').sort().join(''); 
  }

  var itself = function(word){
    if (word.toLowerCase() === target){
      return true
    } else {
      return false
    }
  }

  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  var unHash = function(args){
    var output = [];
    for (var value in args){
      if (typeof args[value] === 'string'){
        addage = (args[value].split(' ')); 
      } else {
        addage = args[value] 
      }  
      output.push(addage)
    }
    return flatten(output)
  }

  this.matches = function(){
    var matched = [];
    
    potential = unHash(arguments)
    for (i = 0; i < potential.length; i++){
      if (sortWord(potential[i]) === sortWord(target) && itself(potential[i]) === false){
        matched.push(potential[i]);
      }
    }
    return matched;
  }
}

module.exports = anagram;