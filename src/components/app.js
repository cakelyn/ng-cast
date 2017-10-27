angular.module('video-player')

  .component('app', {
    template: `
      <div>
        <nav class="navbar">
          <div class="col-md-6 offset-md-3">
            <search class="navbar"></search>
          </div>
        </nav>
        <div class="row">
          <div class="col-md-7">
            <video-player></video-player>
          </div>
          <div class="col-md-5">
            <video-list></video-list>
          </div>
        </div>
      </div>
    `
  });
