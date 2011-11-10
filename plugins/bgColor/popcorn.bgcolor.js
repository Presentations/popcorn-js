// PLUGIN: Footnote/Text

(function ( Popcorn ) {

  /**
   * Footnote popcorn plug-in
   * Adds text to an element on the page.
   * Options parameter will need a start, end, target and text.
   * Start is the time that you want this plug-in to execute
   * End is the time that you want this plug-in to stop executing
   * Text is the text that you want to appear in the target
   * Target is the id of the document element that the text needs to be
   * attached to, this target element must exist on the DOM
   *
   * @param {Object} options
   *
   * Example:
     var p = Popcorn('#video')
        .footnote({
          start: 5, // seconds
          end: 15, // seconds
          text: 'This video made exclusively for drumbeat.org',
          target: 'footnotediv'
        } )
   *
   */

    Popcorn.plugin( "bgcolor", {

      manifest: {
        about: {
          name: "Popcorn " + name + " Plugin",
          version: "0.2",
          author: "@annasob, @rwaldron",
          website: "annasob.wordpress.com"
        },
        options: {
          start: {
            elem: "input",
            type: "text",
            label: "In"
          },
          end: {
            elem: "input",
            type: "text",
            label: "Out"
          },
          text: {
            elem: "input",
            type: "text",
            label: "Text"
          },
          target: name + "-container"
        }
      },
    _setup: function( options ) {

      var target = document.getElementById( options.target );

      options._container.innerHTML  = options.text;
    },
    /**
     * @member footnote
     * The start function will be executed when the currentTime
     * of the video  reaches the start time provided by the
     * options variable
     */
    start: function( event, options ){
      console.log( "here" );       
      console.log( document.getElementById( options.target ) );
      document.getElementById( options.target ).style.backgroundColor = options.bgcol;
      document.getElementById( options.target ).style.color = options.fontcol;
    },
    /**
     * @member footnote
     * The end function will be executed when the currentTime
     * of the video  reaches the end time provided by the
     * options variable
     */
    end: function( event, options ){
      document.getElementById( options.target ).style.backgroundColor = "";
      document.getElementById( options.target ).style.color = "";
    },
    _teardown: function( options ) {
      document.getElementById( options.target ) && document.getElementById( options.target ).removeChild( options._container );
    }
});

})( Popcorn );
