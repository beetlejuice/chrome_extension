var myVK = {};
myVK.indexedDB = {};

myVK.indexedDB.db = null;

const dbVersion = 1;

myVK.indexedDB.open = function() {
  // var version = 1;
  var request = indexedDB.open("Users", dbVersion);

  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    event.target.transaction.onerror = myVK.indexedDB.onerror;

    // if (db.objectStoreNames.contains("user")) {
    //   db.deleteObjectStore("user");
    // }

    var store = db.createObjectStore("user", {keyPath: "id"});

    store.createIndex("rating", "rating", {unique: false});
  };

  request.onsuccess = function(event) {
    myVK.indexedDB.db = event.target.result;
    // myVK.indexedDB.getAllUsers();
    console.log("DB open successful!");
  };

  request.onerror = myVK.indexedDB.onerror;
};

// myVK.indexedDB.getUser = function(userId) {
//   var db = myVK.indexedDB.db;
//   var trans = db.transaction(["user"], "readwrite");
//   var store = trans.objectStore("user");

//   var request = store.get(userId);

//   var isUserProcessed = false;

//   request.onsuccess = function(event) {
//     console.log("User read successful!");
//     if (request.result != null) {
//       isUserProcessed = true;
//     }
//   };

//   request.onerror = function(event) {
//     console.log(event.value);
//   };

//   return isUserProcessed; 
// };

myVK.indexedDB.getAllUsers = function() {
  var userIds = [];
  var request = indexedDB.open("Users", dbVersion);

  request.onsuccess = function(event) {
    var db = event.target.result;
    var trans = db.transaction(["user"], "readwrite");
    var store = trans.objectStore("user");

    // Get everything in the store;
    var keyRange = IDBKeyRange.lowerBound(0);
    var cursorRequest = store.openCursor(keyRange);

    cursorRequest.onsuccess = function(event) {
      var result = event.target.result;
      if (!!result == false) return;

      userIds.push(result.id);
      result.continue();
    };

    request.onerror = function(event) {
      console.log(event.value);
    };
  }

  return userIds; 
};

myVK.indexedDB.insertUser = function(userId, userRating) {
  var request = indexedDB.open("Users", dbVersion);
  
  request.onsuccess = function(event) {
    var db = event.target.result;
    var trans = db.transaction(["user"], "readwrite");
    var store = trans.objectStore("user");

    var request = store.put({
      "id": userId,
      "rating": userRating
    });

    request.onsuccess = function(event) {
      console.log("User insert successful!");
    };

    request.onerror = function(event) {
      console.log(event.value);
    };
  }
};

// function getUser(userId) {
//   return myVK.indexedDB.getUser(userId);
// }

function getAllUsers() {
  return myVK.indexedDB.getAllUsers();
}

function insertUser(userId, userRating) {
  myVK.indexedDB.insertUser(userId, userRating);
}

function init() {
  myVK.indexedDB.open();
}

myVK.indexedDB.onerror = function() {
  console.log("Encountered an error");
};

window.addEventListener("DOMContentLoaded", init, false);