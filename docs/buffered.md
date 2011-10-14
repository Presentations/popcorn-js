buffered()
=========

buffered() is a native HTML video element method that we have thrown onto each popcorn instance for convenience. buffered() returns a [timeranges object](http://www.w3.org/TR/html5/video.html#normalized-timeranges-object) that describes to the user how much of the video has been loaded.  The function takes no arguements.

* returns - [timeRanges objects](http://www.w3.org/TR/html5/video.html#normalized-timeranges-object)

Use Cases
-----------

* You want to wait until a certain amount of the video has been loaded before beginning playback or allowing the user to interact with the video

Examples
----------

* Show buffered data on page load [jsFiddle](http://jsfiddle.net/TYN7F/1/)
* Play the video when more then half of the video has loaded [jsFiddle](http://jsfiddle.net/9QVKr/)
