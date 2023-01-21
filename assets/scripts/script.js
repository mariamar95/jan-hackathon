
// Checks to see if DOM content has finished loading
document.addEventListener("DOMContentLoaded", function () {

    let submitButton = document.getElementById("submit_button")
    // Checks to see if any square has been clicked
    submitButton.addEventListener("click", function () {
        console.log(get_user_input());
    });
});

/**
 * Adds the canvas required to show the chart, to the HTML, in a DIV.
 * @param chartID The ID assigned to the chart, that will be displayed in the canvas.
 * @param canvasDiv The ID of the div, that will be the parent of the canvas.
 */
function add_canvas_to_html(chartId, canvasDiv) {
    const canvasArea = document.getElementById(canvasDiv);
    const canvas = document.createElement("canvas");

    canvas.id = chartId;
    canvasArea.appendChild(canvas);
}

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

/**
 * Gets the user input from the labels and the values.
 * @param chartID The ID assigned to the chart, that will be called in the HTML.
 * @returns An object that contains the labels and values from the input form.
 */
function get_user_input() {
    // Get HTML Collection of labels
    labels = document.getElementsByClassName("label_input")

    // Get HTML Collection of values
    values = document.getElementsByClassName("value_input")

    // Creates the arrays that will store the values
    labels_value = []
    values_value = []

    // Transform the labels_value Collection to an array
    Array.from(labels).forEach(function (element) {
        labels_value.push(element.value)
    });

    // Transform the values_value Collection to an array
    Array.from(values).forEach(function (element) {
        values_value.push(element.value)
    });

    return {
        labels_value,
        values_value
    };

}

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

// Calls the add_canvas_to_html function.
add_canvas_to_html(chartID, "chart_area")

// Calls the create_chart function.
create_chart(chartID, chartName, bucketNames, bucketValues, barColors)