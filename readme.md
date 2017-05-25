# Jquery Node Dragger

----
If you're frustrated with the way drag event handlers are managed by jQuery, DOM, or other similar libraries that aren't packaged for out-of-the-box Node.js use, this little utility might be for you.


----
## usage
1. npm install jquery-node-dragger --save
2. In your file:
----

    var $ = require('jQuery');
    require('jquery-node-dragger')($);
    $(document).ready(function() {
      $('#div').dragger({
        enter: function (draggerEvent, event) {},
        over: function (draggerEvent, event) {},
        leave: function (draggerEvent, event) {},
        drop: function (draggerEvent, event) {}
      });
    });


## thanks
* [Alex Leon](https://github.com/alien35/)
