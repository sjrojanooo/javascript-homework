//1. append a table to the webpage & add new rows of data for each UFO sighting
// from data.js
var tableData = data;

//Call <tbody> tag for data placement
var tBody = d3.select("tbody");
var uofoTable = d3.select("table");

//Calling the table class & link to html  table (**where column names are located)
var tClass = d3.select("class", "table table-striped");
ufoTable.attr("class", "table-striped");

//Build Table
    //1.
function builder(ufos){
    ufos.forEach((urows)=>{
        var tRow = tBody.append("tr");
        Object.entries(urows).forEach(([key,value])=>{
            var tCol = tRow.append("td");
            tCol.text(value);
        });
    });
}

builder(tableData);

//Print arrays to console for debugging purposes
console.log(tableData);

var filterButton = d3.select("#filter-btn");

var dateInput = d3.select("#datetime");

filterButton.on("click", function(){
    d3.event.preventDefault();

    tBody.html("");

    var callValue = dateInput.property("value");
    //print input call to console for test/debugging purposes
    console.log(callValue);

    var newTable = tableData.filter(tableData => tableData.datetime == callValue);
    //Print new table to console for debugging purposes
    console.log(newTable);

    builder(newTable);

});