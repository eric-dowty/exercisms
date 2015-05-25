var Hamming = {

  compute: function(sequenceOne, sequenceTwo){

    var count = 0;
    
    if (sequenceOne.length !== sequenceTwo.length){
      throw "DNA strands must be of equal length."
    }


    for (i = 0; i < sequenceOne.length; i++) { 
      if (sequenceOne[i] !== sequenceTwo[i]){
        count++;
      }
    }
    return count;
  }
  
}

module.exports = Hamming;