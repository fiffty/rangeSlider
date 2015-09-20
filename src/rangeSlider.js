(function($) {
  var rangeSlider = function() {
    var self = this;

    //  Set default options
    self.options = {
      start: 0
    };

    self.init = function(elem, options) {
      // Overwrite default options
      $.extend(self.options, options);

      // Stage DOM elements and other variables
      self.elem = elem;
      self.ul = elem.find('>ul');
      self.li = self.ul.find('>li');
      self.input = elem.find('>input');
      self.i = self.options.start;

      //  Cache DOM elements and other variables
      var options = self.options,
        ul = self.ul,
        li = self.li,
        input = self.input,
        current = self.i,
        length = li.length;

      // Set up initial HTML and CSS state
      elem.css({display: 'block', width: ul.outerWidth()});
      input.val(current);
      input.attr('min', 0);
      input.attr('max', length-1);
      li.css({'z-index': 0});
      li.eq(current).css({'z-index': 1});

      // Set up input listner
      input.on('change mousemove', function() {
        if (current != $(this).val()) {
          current = $(this).val();
          self.to(current);
        }
      });

      return self;
    };

    //  Go to a slide index
    self.to = function(index) {
      var options = self.options,
        elem = self.elem,
        ul = self.ul,
        li = self.li,
        current = self.i,
        target = li.eq(index);

      //  Check if it's out of bounds
      if (!target.length) index = 0;
      if (index < 0) index = li.length - 1;
      target = li.eq(index);

      if (!li.queue('fx').length) {
        li.css({'z-index': 0});
        li.eq(index).css({'z-index': 1});
      };
    };

    //  Move to previous/next slide
    self.next = function() {
      return self.to(self.i + 1);
    };
    self.prev = function() {
      return self.to(self.i - 1);
    };
  };

  //  Create a jQuery plugin
  $.fn.rangeSlider = function(options) {
    var length = this.length;

    //  Enable multiple-slider support
    return this.each(function(index) {
      //  Cache a copy of $(this), so it
      var self = $(this),
        key = 'rangeSlider' + (length > 1 ? '-' + ++index : ''),
        instance = (new rangeSlider).init(self, options);

      //  Invoke an Unslider instance
      self.data(key, instance).data('key', key);
    });
  };
})(jQuery);