preload( state )
================


preload is a native HTML video element method that we have thrown onto each popcorn instance for convenience. Preload provides a hint to the user agent as to how much of the video to preloaded.  If autoplay is set to true, preload is ignored ( autoplay will try and play the video right away ). If an incorrect value is given, it defaults to auto.

* **state** - state takes the form of one of the following values:
  
  * auto - begins loading data as soon as possible
  * metadata - only loads the videos metadata (dimensions, first frame, track list, duration, etc)
  * none - loads no data

Use Cases
----------

* There is a high chance your users are on a very slow connection and want to ensure the rest of the webpage loads quickly ( state = none )
* Begin loading the video ASAP to ensure a smooth playback
* We want to get metadata from the video because we may be performing calculations on the videos duration, size, etc

Examples
---------

* Preload with auto specified [jsFiddle](http://jsfiddle.net/6kGRK/)
* Preload with metadata specified [jsFiddle](http://jsfiddle.net/ZbG3Z/)
* Preload with none specified [jsFiddle](http://jsfiddle.net/gqcrk/)
