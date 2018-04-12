var searchBar = document.getElementById("serieSearch");
var headers = document.querySelectorAll('h3');
var listItems = document.querySelectorAll('li');


searchBar.onkeyup = function(e){
  var value = e.currentTarget.value;
  if(value === '') {
    for (b = 0; b < listItems.length; b++) {
      listItems[b].hidden = false;
    }
  }
  var filteredSeries = [];
  for (i = 0; i < listItems.length; ++i) {
    var name = headers[i].innerHTML.toLowerCase();
    newName = name.indexOf(value);
    if (newName < 0) {
      listItems[i].hidden = true;
    } else if (newName >= -1) {
      filteredSeries.push(listItems[i]);
    }
    console.log(filteredSeries);
  }
  for (k = 0; k < filteredSeries.length; ++k) {
    filteredSeries[i].hidden = false;
  }
  var filteredSeries = [];
}
var filteredSeries = [];
