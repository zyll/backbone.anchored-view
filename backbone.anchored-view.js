(function() {
  var AnchoredView, Backbone, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone = (typeof require === "function" ? require("backbone") : void 0) || window.Backbone;

  AnchoredView = (function(_super) {
    __extends(AnchoredView, _super);

    function AnchoredView() {
      _ref = AnchoredView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AnchoredView.prototype.setElement = function() {
      Backbone.View.prototype.setElement.apply(this, arguments);
      this.$el.addClass(_.result(this, 'className'));
      return this;
    };

    AnchoredView.prototype.remove = function() {
      this.$el.removeClass(_.result(this, 'className'));
      this.setElement(null);
      return Backbone.View.prototype.remove.apply(this, arguments);
    };

    return AnchoredView;

  })(Backbone.View);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = AnchoredView;
  } else {
    window.AnchoredView = AnchoredView;
  }

}).call(this);
