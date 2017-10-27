angular.module('video-player')

  .component('videoPlayer', {
    template: `
      <div class="video-player">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Z6m39NS_6l0" allowFullScreen></iframe>
        </div>
        <div class="video-player-details">
          <h3>TITLE</h3>
          <div>DESCRIPTION</div>
        </div>
      </div>
    `
  });
