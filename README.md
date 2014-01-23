```
node = $ '<div id="#me"></div>'
$('body').append node
v = new Backbone.AnchoredView el: node
v.render().remove()
console.log node[0] is $('#me')[0]
```
