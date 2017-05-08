angular.module('messageBoard', [])



.service('MessageBoard', [function(){
    

  var items = [ {
    "category" : "Rules",
    "dateTime" : "11:00 AM",
    "link" : "",
    "messageId" : "",
    "messageText" : "No Dogs Allowed (Except Snoopy)",
    "photo" : "",
    "title" : "Rule #1"
  }];
  
  var messageBoard = {
      'items': items
  };
  
  return messageBoard;

}]);
