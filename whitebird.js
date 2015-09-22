Promise.prototype.done = function(onFulfilled, onRejected) {
  this
  .then(onFulfilled, onRejected)
  .catch(function(e) {
    setTimeout(function() { throw e; });
  })
  ;
}

var whiteBird = {
  __suffix: 'Async'
};

function promisify(func, context) {
  return function(data) {
    var that = context || this;
    return new Promise(function(res, rej) {
      func.call(that, data, function(err, result) {
        if(err) {
          rej(err);
        } else {
          res(result)
        }
      })
    })
  }
}
whiteBird.promisify = promisify;

function promisifyAll(Parent, suffix) {
  var target = Parent.prototype || Parent;
  var suffix = (typeof suffix === "string") ? suffix : whiteBird.__suffix;
  var props = [];
  Object.getOwnPropertyNames(target).forEach(function(prop) {
    var desc = Object.getOwnPropertyDescriptor(target, prop);
    if(desc != null && desc.get == null && desc.set ==null)
      props.push(prop);
  });


  for(var i = 0, len = props.length; i < len; i++) {
    var prop = props[i]
    if(prop !== "constructor" && target.hasOwnProperty(prop)) {
      target[prop + suffix] = promisify(target[prop]);
    }
  }
  return Parent;
}

whiteBird.promisifyAll = promisifyAll;

module.exports = whiteBird;
