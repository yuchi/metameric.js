
root = this

MM = Metameric = (object) ->
	wrapper = (method, args...) ->
		_method = object[method]
		result = if typeof _method == 'function' then _method.apply(object,args) else _method
		wrapper.v = result
		return wrapper
	wrapper.__defineGetter__ '_', ->
		MM(@v)

if module? and module.exports?
	module.exports = MM
else
	root.MM = root.Metameric = MM

