

  function receivesAFunction(callback) {
    return callback();
  }

  function returnsANamedFunction() {
    return function namedFunction(){

    }
  }

  const returnsAnAnonymousFunction = function() {
    return function(){
      
    }
  }