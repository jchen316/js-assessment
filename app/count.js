exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let delay;
    const count = ()=> {
      console.log(start);
      start++
      if(start <= end){
        delay = setTimeout( count , 100)
      }
    }
    count();

    return {
			cancel: function() {
				clearTimeout(delay);
			}
		};
    
  }
};
