exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i<arr.length; i++){
        if(arr[i]=== item){
          return i
        }
    }
    return -1;
  },

  sum: function(arr) {
    let total = 0;
    arr.forEach( (element)=> {
      total = total + element;
    })
    return total;
  },

  remove: function(arr, item) {
    let output  = [];
    for(let i = 0; i<arr.length; i++){
      if(arr[i] !== item){
        output.push(arr[i])
      }
    }
    return output;
  },

  removeWithoutCopy: function(arr, item) {
    for(let i = arr.length; i>0; i--){
      if(arr[i]=== item){
        arr.splice(i, 1)
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
      if(arr[i] === item){
        count++
      }
    }
    return count;
  },

  duplicates: function(arr) {
    let storage = {};
    let output = [];
    for(let i = 0; i<arr.length; i++){
      if(!storage[arr[i]]){
        storage[arr[i]] = 1
      } else {
        storage[arr[i]]++
      }
    }
    for(let key in storage){
      if(storage[key] > 1){
        output.push(parseInt(key))
      }
    }
    return output;
  },

  square: function(arr) {
    return arr.map( (element)=> element* element)
  },

  findAllOccurrences: function(arr, target) {
    let output = []
    for(let i = 0; i<arr.length; i++){
      if(arr[i] === target){
        output.push(i)
      }
    }
    return output;
  }
};
