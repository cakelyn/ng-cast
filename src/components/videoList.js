angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      selectVideo: '<'
    },

    controller: function() {
      console.log(this);
    },

    templateUrl: 'src/templates/videoList.html'
  });
