module.exports = function($) {
    $.fn.dragger = function (options) {
        var settings = $.extend({
            enter: $.noop,
            leave: $.noop,
            over: $.noop,
            drop: $.noop
        }, options);

        return this.each(function () {
            var first = false,
                second = false,
                $this = $(this);

            $this.on({
                dragenter: function (event) {
                    if (first) {
                        second = true;
                        return;
                    } else {
                        first = true;
                        $this.trigger('dragger:enter', event);
                    }
                    event.preventDefault();
                },
                dragleave: function (event) {
                    if (second) {
                        second = false;
                    } else if (first) {
                        first = false;
                    }
                    if (!first && !second) {
                        $this.trigger('dragger:leave', event);
                    }
                    event.preventDefault();
                },
                dragover: function (event) {
                    $this.trigger('dragger:over', event);
                    event.preventDefault();
                },
                drop: function (event) {
                    if (second) {
                        second = false;
                    } else if (first) {
                        first = false;
                    }
                    if (!first && !second) {
                        $this.trigger('dragger:drop', event);
                    }
                    event.preventDefault();
                },
                'dragger:enter': settings.enter,
                'dragger:leave': settings.leave,
                'dragger:over': settings.over,
                'dragger:drop': settings.drop
            });
        });
    };
};