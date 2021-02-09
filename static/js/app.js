//Setting our variable to our data.js file
var ufoTableData = data;

//selecting the body element in the html
var tbody = d3.select("tbody");
//labeling the column values for the table s
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
data_populated(data);

var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");
button.on("click", () => {
    d3.event.preventDefault();
    var input_date = input1.property("value");
    var input_city = input2.property("value");
    var input_state = input3.property("value");
    var input_country = input4.property("value");
    var input_shape = input5.property("value");

    var filterDate = data.filter(data => data.datetime === input_date);
    var filterCity = data.filter(data => data.city === input_city);
    var filterState = data.filter(data => data.state === input_state);
    var filterCountry = data.filter(data => data.country === input_country);
    var filterShape = data.filter(data=> data.shape === input_shape);

    var filterData = data.filter(data => data.datetime === input_date && data.city === input_city &&
    data.state === input_state && data.country === input_country && data.country && data.shape === input_shape);

    tbody.html("");

    var filter = {
        filterData, filterCity, filterDate, filterState, filterCountry, filterShape
    }

    if(filter.filterData.length !==0) {
        data_populated(filterData);
    }
    else if (filter.filterData.length === 0 && ((filter.filterCity.length !== 0 || filterDate.length !== 0 ||
    filter.filterState.length !== 0 || filter.filterCountry.length !== 0 || filter.filterShape.length !== 0))){
        data_populated(filterCity) || data_populated(filterDate) || data_populated(filterState)
        || data_populated(filterCountry) || data_populated(filterShape);
    }
    else {
        tbody.append("tr").append("td").text("NO RESULTS!");
    }
})

reset.on("click", () => {
    tbody.html("");
    data_populated(data)
})

