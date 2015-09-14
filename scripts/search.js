var HIDE_LIST = ["9239849", "256150206"];
var FILTER_ENABLED = true;

function getId(searchDiv) {
  infoDiv = searchDiv.querySelectorAll(".info.fl_l")[0];
  subscribeButton = infoDiv.querySelectorAll(".flat_button.search_sub")[0];
  var profile_id = subscribeButton.id.slice(10);  // <button id="search_sub9239849" class="flat_button search_sub" ... >Add to friends</button>
  return profile_id;
}

function clickGood() {
  alert('Good!');
  return false;
}

function clickBad() {
  alert('Bad!');
  return false;
}

function drawRateButtons(node) {
  var btnGood = document.createElement("button");
  btnGood.innerText = "Good";
  btnGood.onclick = clickGood;

  var btnBad = document.createElement("button");
  btnBad.innerText = "Bad";
  btnBad.onclick = clickBad;

  btnGood.style.float = "right";
  btnBad.style.float = "right";

  node.appendChild(btnGood);
  node.appendChild(btnBad);
}

function getHideList() {
  return HIDE_LIST;
}

function getFilterState() {
  return FILTER_ENABLED;
}

function hideNode(node) {
  node.style.display = "none";  // need to play with this, maybe remove div permanently to speed up node disappearing
}

var displayedPeople = document.querySelectorAll(".people_row.three_col_row.clear_fix");
if (displayedPeople.length != 0) {
  for (var i = 0; i < displayedPeople.length - 1; i++) {
    drawRateButtons(displayedPeople[i]);

    var id = getId(displayedPeople[i]);
    var hideList = getHideList();
    if (hideList.indexOf(id) > -1) {  // will be tooo slow to do it each time, need to cache hideList and remove items that have been hidden
      hideNode(displayedPeople[i]);
    }
  }
}