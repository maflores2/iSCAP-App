angular.module('events', [])

// .run(function(){
    
//       // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAyUqldodoQlcTiPwhBn9Zfkw7xQ43YuN4",
//     authDomain: "iscap-firebase.firebaseapp.com",
//     databaseURL: "https://iscap-firebase.firebaseio.com",
//     projectId: "iscap-firebase",
//     storageBucket: "iscap-firebase.appspot.com",
//     messagingSenderId: "357615227248"
//   };
//   firebase.initializeApp(config);
// })


.service('Events', [function(){
    
    
    
    var items = 
    [ {
    "Presenter" : [ {
      "affiliation" : "Pace University",
      "firstName" : "Catherine",
      "lastName" : "Dwyer"
    }, {
      "affiliation" : "Pace University",
      "firstName" : "Ameet",
      "lastName" : "Kanguri"
    } ],
    "chair" : "Chircu, Alina",
    "customLabel" : "CONISAR Paper",
    "date" : "11/06/2016",
    "endTime" : "16: 55: 00",
    "$id" : 1,
    "eventTitle" : "Malvertising - A Rising Threat To The Online Ecosystem",
    "eventType" : "",
    "mealType" : "",
    "note" : "",
    "room" : "Sierra 10",
    "startTime" : "16: 30: 00",
    "subjectArea" : "Security Networks Communications"
  }, {
    "Presenter" : [ {
      "affiliation" : "University of Potsdam",
      "firstName" : "Eldar",
      "lastName" : "Sultanow"
    }, {
      "affiliation" : "Bentley University",
      "firstName" : "Alina",
      "lastName" : "Chircu"
    }, {
      "affiliation" : "Creire",
      "firstName" : "Flavius",
      "lastName" : "Chircu"
    } ],
    "chair" : "Chircu, Alina",
    "customLabel" : "CONISAR Paper",
    "date" : "11/06/2016",
    "endTime" : "17: 20: 00",
    "$id" : 2,
    "eventTitle" : "E-commerce Adoption: A Revelatory Case Study in the German Oncology Pharmaceutical Supply Chain",
    "eventType" : "CONISAR Paper",
    "mealType" : "",
    "note" : "Meet in lobby at 7:45am",
    "room" : "Sierra 10",
    "startTime" : "16: 55: 00",
    "subjectArea" : "ERP Supply Chain"
  }, {
    "Presenter" : [ {
      "affiliation" : "University of Houston-Clear Lake",
      "firstName" : "Wei",
      "lastName" : "Wei"
    }, {
      "affiliation" : "North Dakota State University",
      "firstName" : "Limin",
      "lastName" : "Zhang"
    } ],
    "chair" : "Chircu, Alina",
    "customLabel" : "CONISAR Paper",
    "date" : "11/06/2016",
    "endTime" : "17: 45: 00",
    "$id" : 3,
    "eventTitle" : "Understanding User Behavior on Pinterest: Findings and Insights",
    "eventType" : "CONISAR Paper",
    "mealType" : "",
    "note" : "",
    "room" : "Sierra 10",
    "startTime" : "16: 20: 00",
    "subjectArea" : "Business Intelligence Big Data"
  }, {
    "Presenter" : [ {
      "affiliation" : "University of Houston-Clear Lake",
      "firstName" : "Wei",
      "lastName" : "Wei"
    }, {
      "affiliation" : "University of Houston-Clear Lake",
      "firstName" : "Kwok-Bun",
      "lastName" : "Yue"
    } ],
    "chair" : "Lang, Guido",
    "customLabel" : "EDSIG Paper",
    "date" : "11/06/2016",
    "endTime" : "17: 20: 00",
    "$id" : 4,
    "eventTitle" : "Using Concept Maps to Assess Students’ Meaningful Learning in IS Curriculum",
    "eventType" : "EDSIG Paper",
    "mealType" : "",
    "note" : "",
    "room" : "Sierra 5",
    "startTime" : "16: 55: 00",
    "subjectArea" : "Pedagogy"
  }, {
    "Presenter" : [ {
      "affiliation" : "Robert Morris University",
      "firstName" : "Justin",
      "lastName" : "Frehauf"
    }, {
      "affiliation" : "Robert Morris University",
      "firstName" : "Francis",
      "lastName" : "Hartle"
    }, {
      "affiliation" : "Robert Morris University",
      "firstName" : "Fahad",
      "lastName" : "Al-Khalifa"
    } ],
    "chair" : "Dwyer, Catherine",
    "customLabel" : "CONISAR Paper",
    "date" : "11/07/2016",
    "endTime" : "9: 20: 00",
    "$id" : 5,
    "eventTitle" : "3D Printing: The Future Crime of the Present",
    "eventType" : "CONISAR Paper",
    "mealType" : "",
    "note" : "",
    "room" : "Sierra 5",
    "startTime" : "9: 00: 00",
    "subjectArea" : "Security Networks Communications"
  }, {
    "Presenter" : [ {
      "affiliation" : "Millikin University",
      "firstName" : "Edward",
      "lastName" : "Weber"
    } ],
    "chair" : "Connolly, Amy",
    "customLabel" : "EDSIG Paper",
    "date" : "11/08/2016",
    "endTime" : "9: 25: 00",
    "$id" : 6,
    "eventTitle" : "Performance Learning of AGILE Methodology Using Paired Courses of Systems Analysis and Design and Web/Mobile Programming",
    "eventType" : "EDSIG Paper",
    "mealType" : "",
    "note" : "",
    "room" : "Sierra 10",
    "startTime" : "9: 00: 00",
    "subjectArea" : "Pedagogy"
  }, {
    "Presenter" : [ {
      "affiliation" : "Pace University",
      "firstName" : "Anthony",
      "lastName" : "Joseph"
    } ],
    "chair" : "White, Gwen",
    "customLabel" : "EDSIG Paper",
    "date" : "11/09/2016",
    "endTime" : "8: 55: 00",
    "$id" : 7,
    "eventTitle" : "Big Data Analytics Methodology in the Financial Industry",
    "eventType" : "EDSIG Paper",
    "mealType" : "",
    "note" : "",
    "room" : "Sierra 10",
    "startTime" : "8: 30: 00",
    "subjectArea" : "Data Analytics Big Data"
  } ];
  
  //var ref = firebase.database().ref().child('Schedule');
  //var items = $firebaseArray(ref);
  
  var events = {
      'items': items
  };
  
  return events;

}]);

