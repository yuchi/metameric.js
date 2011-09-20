Metameric.js
============

    MM(obj)(method,arg)(method,arg,arg)._(withresult).v

This project is a funny library (just a few lines of code) to build
chainable ...things?

It's *metameric*, every *metamer* is an execution or an access to a part
of the wrapped object.

With `.v` you can access the result of a execution/access.

With `._` you wrap `.v` for further access.

Funny, isn't id?

```javascript
MM(document)('getElementById','my-awesome-div')._('innerHTML','Hallo');
```

