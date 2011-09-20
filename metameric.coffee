
root = this

MM = Metameric = (object) ->
	wrapper = (method, args...) ->
		if typeof _method == 'function'
			result = object[method].apply object,args
		else if args.length
			result = object[method] = args[0]
		else
			result = object[method]
		wrapper.v = result
		return wrapper
	wrapper.__defineGetter__ '_', ->
		MM(@v)

if module? and module.exports?
	module.exports = MM
else
	root.MM = root.Metameric = MM

