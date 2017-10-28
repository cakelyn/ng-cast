angular.module('video-player')

  .controller('videoPlayerCtrl', function() {

    this.getIframeSrc = videoId => {
      return 'https://www.youtube.com/embed/' + videoId;
    };

  })

  .component('videoPlayer', {

    controller: 'videoPlayerCtrl',

    bindings: {
      video: '<'
    },

    templateUrl: 'src/templates/videoPlayer.html'
  });