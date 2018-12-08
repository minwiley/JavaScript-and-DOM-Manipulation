// Using the UFO dataset provided in the form of an array of JavaScript objects,write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."

// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// console.log(data);

// tbody elements, input field and button
var tbody = document.querySelector('tbody');
var datetimeInput = document.querySelector('#datetime');
var cityInput = document.querySelector('#city');
var stateInput = document.querySelector('#state');
var countryInput = document.querySelector('#country');
var shapeInput = document.querySelector('#shape');
var durationMinutesInput = document.querySelector('#durationMinutes');
var commentsInput = document.querySelector('#comments');
var filterBtn = document.querySelector('#filter-btn');

// Add an event listener to the filter button, call handleFilterButton
filterBtn.addEventListener('click', handleFilterButton);

// Set filteredAddress
var filterAddress = data;

// renderTable filterAddress to the tbody
function renderTable() {
  tbody.innerHTML = "";
  
  for (var i = 0; i < filterAddress.length; i++) {
    var address = filterAddress[i];
    var fields = Object.keys(address);
    var row = tbody.insertRow(i);
    
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = address[field];
    }
  }
}


function handleFilterButton() {
  var filterDate = datetimeInput.value.trim().toLowerCase();
  filterAddress = data.filter(function(address) {

    var addressDate = address.datetime.toLowerCase();
    return (addressDate === filterDate);
  });

  renderTable();
}
  // Render the table reload
  renderTable();