class Backbone.AnchoredView extends Backbone.View

  setElement: ->
    Backbone.View::setElement.apply @, arguments
    @$el.addClass(_.result @, 'className')
    @

  remove: ->
    @$el.removeClass(_.result @, 'className')
    @setElement null
    Backbone.View::remove.apply @, arguments
