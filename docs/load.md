load()
============

load() is a native HTML video element method that we have thrown onto each popcorn instance for convenience.  The load() method allows the user to force a reload of the current video, making it play from the beginning.  The function takes no arguements. Once the video has loaded it will take its default state as it was set when the video was instantiated ( if it was muted, if autoplay was set, etc ).

Use cases
----------

* Start the video from the beginning again
* Change a video source mid way through playback

Examples
---------

* Log some data at 1 second then reload the video at 3 seconds [jsFiddle](http://jsfiddle.net/6cBvz/)
* Log some data at 1 second, then change the source of the video and setting it to autoplay [jsFiddle](http://jsfiddle.net/ESMUm/3/)
