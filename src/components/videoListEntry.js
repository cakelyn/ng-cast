angular.module('video-player')

  .component('videoListEntry', {
    template: `
      <div class="video-list-entry media">
        <div class="media-left media-middle">
          <img class="media-object" src="#">
        </div>
        <div class="media-body">
          <div class="video-list-entry-title">TITLE HERE</div>
          <div class="video-list-entry-detail">DESCRIPTION HERE</div>
        </div>
      </div>
    `
  });
