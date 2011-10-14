controls( flag )
===============

controls is a native HTML video element method that we have thrown onto each popcorn instance for your convenience. If controls is active, the video will be shown with its native set of controls ( play, timebar, volume, ect ).  When controls is not active it will not show any of the controls overlaid over the video.

* **flag** - boolean value specifying whether to show or hide the controls

Use Cases
--------------

* Autoplay the video, showing no controls
* Show controls initially, then on play, hide the controls from the user

Examples
-------------

* Hide controls [jsFiddle]( http://jsfiddle.net/8zZ8s/ )
* Show/hide controls every other second [jsFiddle](http://jsfiddle.net/k2TTY/)
