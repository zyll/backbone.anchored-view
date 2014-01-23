class Blue extends Backbone.AnchoredView
  render: ->
    @$el.text 'blue'
    @

describe 'an anchored view instancied on an existing el', ->
  beforeEach ->
    @node = $ '<div id="me"></div>'
    $('body').append @node
    @v = new Blue el: @node
    @v.render()

  afterEach ->
    @node.remove()

  it 'render effectively', ->
    expect($('#me').text()).to.be.eql 'blue'

  describe 'when removing', ->
    it 'do not remove the el when removed', ->
      expect($('#me')[0]).to.be.eql @node[0]
    
    it 'do not clean the el when removed', ->
      expect($('#me').text()).to.be.eql 'blue'
