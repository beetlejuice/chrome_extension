var FILTER_ENABLED = true;

function getId(searchDiv) {
  infoDiv = searchDiv.querySelectorAll(".info.fl_l")[0];
  subscribeButton = infoDiv.querySelectorAll(".flat_button.search_sub")[0];
  var profile_id = subscribeButton.id.slice(10);  // <button id="search_sub9239849" class="flat_button search_sub" ... >Add to friends</button>
  return profile_id;
}

function rateButtonsHandler() {
  id = this.id;

  // Button id format: user9294_ratingGood
  userIdStartIndex = id.indexOf("user") + 4;  // encapsulation violation here
  userIdEndIndex = id.indexOf("_");  // encapsulation violation here
  userId = id.slice(userIdStartIndex, userIdEndIndex);

  userRatingStartIndex = id.indexOf("rating") + 6;  // encapsulation violation here
  userRatingEndIndex = id.length;  // encapsulation violation here
  userRating = id.slice(userRatingStartIndex, userRatingEndIndex);

  insertUser(userId, userRating, refreshUI);
}

function drawRateButtons(node, nodeUserId) {
  var divContainer = document.createElement("div");
  divContainer.className = "rate_block";

  var btnGood = document.createElement("button");
  btnGood.innerText = "Good";
  btnGood.id = "user" + nodeUserId + "_rating" + "Good";
  btnGood.onclick = rateButtonsHandler;

  var btnBad = document.createElement("button");
  btnBad.innerText = "Bad";
  btnBad.id = "user" + nodeUserId + "_rating" + "Bad";
  btnBad.onclick = rateButtonsHandler;

  btnGood.style.float = "right";
  btnBad.style.float = "right";

  node.appendChild(divContainer);
  divContainer.appendChild(btnGood);
  divContainer.appendChild(btnBad);
}

function hideUsers(callback) {
  getAllUsers(callback);
}

function getFilterState() {
  return FILTER_ENABLED;
}

function hideNode(node) {
  node.style.display = "none";  // need to play with this, maybe remove div permanently to speed up node disappearing
}

function filterSearch(hideList) {
  var displayedUsers = document.querySelectorAll(".people_row.three_col_row.clear_fix");
  if (displayedUsers.length != 0) {
    for (var i = 0; i < displayedUsers.length - 1; i++) {
      user = displayedUsers[i];
      var id = getId(user);

      if (user.querySelectorAll(".rate_block").length == 0) {  // another encapsulation violation
        drawRateButtons(user, id);
      }

      if (hideList.indexOf(id) > -1) {  // will be tooo slow to do it each time, need to cache hideList and remove items that have been hidden
        hideNode(user);
      }
    }
  }
}

function refreshUI() {
  hideUsers(filterSearch);  
}

refreshUI();
window.addEventListener("scroll", refreshUI);  // loads CPU a lot..