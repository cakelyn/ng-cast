angular.module('video-player')

  .component('videoList', {
    template: `
      <div class="video-list">
        <video-list-entry></video-list-entry>
        <video-list-entry></video-list-entry>
        <video-list-entry></video-list-entry>
        <video-list-entry></video-list-entry>
        <video-list-entry></video-list-entry>
      </div>
    `
  });
