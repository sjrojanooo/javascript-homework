//1. append a table to the webpage & add new rows of data for each UFO sighting
// from data.js
var ufoTableData = data;

var tbody = d3.select("tbody");
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]
var date_input = d3.select("#datetime");
var city_input = d3.select("#city");
var state_input = d3.select("#state");
var country_input = d3.select("#country");
var shape_input = d3.select("#shape");

var data_populated = (dataInput) => {
    dataInput.forEach(ufoInfo => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoInfo[column])
        )
    });
}
data_populated(ufoTableData);

