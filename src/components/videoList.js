angular.module('video-player')

  .component('videoList', {
    controller: function() {
      this.test = () => {
        console.log(this.data);
      };
    },

    bindings: {
      data: '<'
    },

    template: `
      <div class="video-list" ng-click="$ctrl.test()">
        <video-list-entry video="video" ng-repeat="video in $ctrl.data"/>
      </div>
    `
  });

// <li ng-repeat="todo in $ctrl.todos">{{todo}}</li>