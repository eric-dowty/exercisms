var words = function(words){

  var format = function(words){
    return words.replace(/(\s\s+)|\n|\t/g, ' ').split(' ');
  };

  var countWords = function(word){
    count[word] = count[word] || 0;
    count[word] = count[word] + 1;
  };

  var words = format(words);
  var count = {};

  words.forEach(countWords);

  return count;
};

module.exports = words;