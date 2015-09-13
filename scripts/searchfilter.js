var HIDE_LIST = ["9239849", "256150206"];

function getId(searchDiv) {
  infoDiv = searchDiv.querySelectorAll(".info.fl_l")[0];
  subscribeButton = infoDiv.querySelectorAll(".flat_button.search_sub")[0];
  var profile_id = subscribeButton.id.slice(10);  // <button id="search_sub9239849" class="flat_button search_sub" ... >Add to friends</button>
  return profile_id;
}

function getHideList() {
  return HIDE_LIST;
}

var displayedPeople = document.querySelectorAll(".people_row.three_col_row.clear_fix");
if (displayedPeople.length != 0) {
  for (var i = 0; i < displayedPeople.length - 1; ++i) {
    var id = getId(displayedPeople[i]);
    var hideList = getHideList();
    if (hideList.indexOf(id) > -1) {  // will be tooo slow to do it each time, need to cache hideList and remove items, that have been hidden
      displayedPeople[i].style.display = "none";
    }
  }
}