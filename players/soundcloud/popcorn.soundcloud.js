Popcorn.player( "soundcloud", {

  _setup: function( options ) {

    var media = this;

    //  setup our swfobject with the necessary parameters
    var setupSoundcloud = function() {

     console.log( media.id, media.src, media, media.style.width );
      var flashvars = {
        enable_api: true,
        object_id: media.id,
        classid: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        url: media.src
      },

      params = {
        allowscriptaccess: "always",
        wmode: "transparent"
      },

      attributes = {
        id: media.id,
        name: media.id
      };

      swfobject.embedSWF( "http://player.soundcloud.com/player.swf", media.id,
                          media.style.width, media.style.height, "9.0.0", "expressInstall.swf",
                          flashvars, params, attributes );
    };

    //  set up all the sound cloud listeners with popcorn
    var initListeners = function() {

      if ( !window.swfobject ) {
        setTimeout( initListeners, 10 );
        return;
      }

      soundcloud.addEventListener( "onPlayerReady", function( player, data ) {
        options.autoplay && player.api_play();
      });
    }

    //  get the scripts were gonna need
    Popcorn.getScript( "http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js", setupSoundcloud );
    Popcorn.getScript( "lib/soundcloud.player.api.js", initListeners );
  }
});
