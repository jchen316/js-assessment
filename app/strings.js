exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let output = [];
    let temp = str.split("")
    let counter = 0;

    for(let i = 0; i<temp.length; i++){
      if(temp[i] === temp[i-1]){
        if(counter < amount){
          output.push(temp[i])
          counter++
          continue;
        } else {
          counter++
          continue;
        }
      } 
      
      if(i !== 0 && temp[i] !== temp[i-1]){
        counter = 0;
      }
      else {
  
        output.push(temp[i]);
        counter++
      }
    }
    return output.join("")
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
