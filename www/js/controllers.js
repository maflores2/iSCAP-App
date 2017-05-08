angular.module('app.controllers', [])
  
.controller('iSCAPHomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('scheduleCtrl', ['$scope', '$stateParams', 'Events', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Events) {
    
    $scope.items = Events.items;
}])
   
.controller('mapsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('messageBoardCtrl', ['$scope', '$stateParams', 'MessageBoard', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MessageBoard) {
    
    $scope.items = MessageBoard.items;
}])
   
.controller('hotelInteriorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventCtrl', ['$scope', '$stateParams', 'Events', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Events) {
    
    $scope.eventTitle = $stateParams.eventTitle;
    $scope.customLabel = $stateParams.paper;
    $scope.chair = $stateParams.chair;
    $scope.date = $stateParams.date;
    $scope.startTime = $stateParams.startTime;
    $scope.endTime = $stateParams.endTime;
    $scope.mealType = $stateParams.mealType;
    $scope.room = $stateParams.room;
    $scope.subjectArea = $stateParams.subjectArea;
    $scope.note = $stateParams.note;

}])
 