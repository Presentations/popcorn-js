# SBV parser #

## Purpose ##

The SBV parser allows the user to parse SBV subtitle data in order to populate a subtitle track event.

The user sepcifies the the source of there SBV file in a data-timeline-sources attribute on the video object.  When Popcorn is instantiated it will search each video element for a data-timeline-sources attribute and try and parse the sepcified file.

## Options ##

* **data-timeline-sources** - a media element attribute that specifies the source of the file to be parsed

## Use Case ##

* Parse a SBV file of subtitle data

## Example ##

* Parses a popcorn SBV subtitle file to populate a subtitle track
    &lt;html&gt;
      &lt;head&gt;
        &lt;script src="popcorn-complete.js"&gt;&lt;/script&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;video id="video" data-timeline-sources="data/data.json"
          controls
          width= '250px'
          poster="../../test/poster.png"&gt;

          &lt;source id='mp4'
            src="../../test/trailer.mp4"
            type='video/mp4; codecs="avc1, mp4a"'&gt;

          &lt;source id='ogv'
            src="../../test/trailer.ogv"
            type='video/ogg; codecs="theora, vorbis"'&gt;

          &lt;p&gt;Your user agent does not support the HTML5 Video element.&lt;/p&gt;

        &lt;/video&gt;
      &lt;/body&gt;
    &lt;/html&gt;
