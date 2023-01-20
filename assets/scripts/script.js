// Auto initialize all Materialize CSS Components
M.AutoInit();

// Assigns the variables, will eventually be moved to a input from the user.
var chartID = "spending";
var chartName = "Annual Spending Breakdown 2022 - 2023";
var bucketNames = ["Groceries", "Rent", "Travel", "Clothing", "Misc"];
var bucketValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
// Calls the create_chart function.
create_chart(chartID, chartName, bucketNames, bucketValues, barColors)
/**
 * Creates a chart based on the provided attributes.
 * @param chartID The ID assigned to the chart, that will be called in the HTML.
 * @param chartName The name of the chart, that will be displayed above the chart.
 * @param xValues A list of strings, will be the labels of the chart.
 * @param yValues A list of numbers, will be the values of the above labels.
 * @param colors A list of color values, will be assigned to the above labels and values.
 */
function create_chart(chartID, chartName, xValues, yValues, colors) {
    new Chart(chartID, {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: colors,
        data: yValues
        }]
    },
    options: {
        title: {
        display: true,
        text: chartName
        }
    }
    });
}
