(function() {
  var MM, Metameric, root;
  var __slice = Array.prototype.slice;
  root = this;
  MM = Metameric = function(object) {
    var wrapper;
    wrapper = function() {
      var args, method, result;
      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (typeof _method === 'function') {
        result = object[method].apply(object, args);
      } else if (args.length) {
        result = object[method] = args[0];
      } else {
        result = object[method];
      }
      wrapper.v = result;
      return wrapper;
    };
    return wrapper.__defineGetter__('_', function() {
      return MM(this.v);
    });
  };
  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = MM;
  } else {
    root.MM = root.Metameric = MM;
  }
}).call(this);
