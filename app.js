// from data.js
var tableData = data;
// select tbody tag 
var tbody = d3.select("tbody");
// create function called table 
function table(data) {
    data.forEach((data) => {
        var row = tbody.append('tr');
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}
// iterate tableTable through the table function
table(tableData);


// selecting button from id filter-btn
var button = d3.select("#filter-btn");

button.on("click", function() {
    /// prevent refreshing
    d3.event.preventDefault();
    //select filtered list through summary class
    d3.select(".summary").html("");

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");

    /// filter data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    //loop and append
    filteredData.forEach((date) => {
        var row = tbody.append("tr");
        Object.entries(date).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});