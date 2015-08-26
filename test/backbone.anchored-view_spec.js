(function() {
  var Blue, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Blue = (function(_super) {
    __extends(Blue, _super);

    function Blue() {
      _ref = Blue.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Blue.prototype.render = function() {
      this.$el.text('blue');
      return this;
    };

    return Blue;

  })(AnchoredView);

  describe('an anchored view instancied on an existing el', function() {
    beforeEach(function() {
      this.node = $('<div id="me"></div>');
      $('body').append(this.node);
      this.v = new Blue({
        el: this.node
      });
      return this.v.render();
    });
    afterEach(function() {
      return this.node.remove();
    });
    it('render effectively', function() {
      return expect($('#me').text()).to.be.eql('blue');
    });
    return describe('when removing', function() {
      it('do not remove the el when removed', function() {
        return expect($('#me')[0]).to.be.eql(this.node[0]);
      });
      return it('do not clean the el when removed', function() {
        return expect($('#me').text()).to.be.eql('blue');
      });
    });
  });

}).call(this);
