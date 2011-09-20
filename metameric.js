(function() {
  var MM, Metameric, root;
  var __slice = Array.prototype.slice;
  root = this;
  MM = Metameric = function(object) {
    var wrapper;
    wrapper = function() {
      var args, method, result, _method;
      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _method = object[method];
      result = typeof _method === 'function' ? _method.apply(object, args) : _method;
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
