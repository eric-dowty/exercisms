//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  var question      = input
  var questionArray = input.split('')

  if (question === "" || (/^\s+$/).test(question)) { 
    answer = 'Fine. Be that way!'
  } else if (question === question.toUpperCase() && (/[a-z]/i).test(question) ) {
    answer = 'Whoa, chill out!';
  } else if (questionArray.pop() === "?") {
    answer = 'Sure.';
  } else {
    answer = 'Whatever.';
  }

  return answer;

};

module.exports = Bob;
