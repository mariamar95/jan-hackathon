// Auto initialize all Materialize CSS Components
M.AutoInit();

// Checks to see if DOM content has finished loading
document.addEventListener("DOMContentLoaded", function () {

    let submitButton = document.getElementById("submit_button");
    let addButton = document.getElementById("add_button");
    let removeButton = document.getElementById("remove_button");
    let resetButton = document.getElementById("reset_button");

    // Checks to see if the submit button has been clicked
    submitButton.addEventListener("click", function () {
        tableSelect = get_user_input().selects_value;
        tableLabels = get_user_input().labels_value;
        tableValue = get_user_input().values_value;
        create_input_table("table_area", tableSelect, tableLabels, tableValue);

        sumBuckets = sum_bucket_values(tableSelect, tableValue);
        colourSort = match_color_to_bucket(sumBuckets.uniqueBuckets);

        // Calls the add_canvas_to_html function.
        add_canvas_to_html("spending", "chart_area");
        // Calls the create_chart function.
        create_chart("spending", "Your Bucket Breakdown", sumBuckets.uniqueBuckets, sumBuckets.uniqueValues, colourSort);

        // Calls the add_canvas_to_html function.
        add_canvas_to_html("sample", "bucket_chart_area");

        sampleColourSort = match_color_to_bucket(["Expenses", "Emergency", "Investment", "Learning", "Fun"]);
        // Calls the create_chart function.
        create_chart("sample", "5 Bucket Theory Breakdown", ["Expenses", "Emergency", "Investment", "Learning", "Fun"], [60, 10, 10, 10, 10], sampleColourSort);
    });

    // Checks to see if the add user input row button has been clicked
    addButton.addEventListener("click", function () {
        add_new_input();
    });

    // Checks to see if the delete last user input row button has been clicked
    removeButton.addEventListener("click", function () {
        remove_last_input();
    });

    // Checks to see if the reset button has been clicked
    resetButton.addEventListener("click", function () {
        reset_fields();
    });
});

/**
 * Assigns the correct colour based on the name of the bucket.
 * @param buckets An array of bucket names entered by ther user.
 * @returns The array of colours that are sorted to match the bucket name.
 */
function match_color_to_bucket(buckets){

    // Create a map that maps the bucket name to the colours
    const colors = new Map();
    colors.set("Expenses", "#b91d47");
    colors.set("Emergency", "#00aba9");
    colors.set("Investment", "#2b5797");
    colors.set("Learning", "#e8c3b9");
    colors.set("Fun", "#1e7145");

    // Add the colors in the same order as the bucket values
    chartColor = [];
    for (var i = 0; i < buckets.length; i++) {
        chartColor.push(colors.get(buckets[i]))
    }

    return chartColor
}

/**
 * Sum the bucket duplicate bucket values, to avoid multiple chart labels with the same name.
 * @param bucketValues An array of bucket names entered by ther user.
 * @param valueValues An array of inputted values, entered by the user.
 * @returns An object that contains the unique bucket and label names.
 */
function sum_bucket_values(bucketValues, valueValues) {

    // Initialise the arrays that will hold the unique values
    uniqueBuckets = [];
    uniqueValues = [];

    // Iterate through both bucket name and value arrays
    for (var i = 0; i < bucketValues.length; i++) {

        // If the bucket name is unique then add both value and bucket name to new arrays
        if (!uniqueBuckets.includes(bucketValues[i])) {
            uniqueBuckets.push(bucketValues[i])
            uniqueValues.push(valueValues[i])

        // If the bucket name is unot unique then update the value of that bucket name
        } else {
            arrayPos = uniqueBuckets.indexOf(bucketValues[i])
            uniqueValues[arrayPos] = String(Number(uniqueValues[arrayPos]) + Number(valueValues[i]));
        }
    }

    // Retrun the unique bucket and unique value arrays
    return {
        uniqueBuckets,
        uniqueValues
    };

}

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

    // Get HTML Collection of bucket names
    selects = document.getElementsByClassName("select_input")

    // Get HTML Collection of labels
    labels = document.getElementsByClassName("label_input")

    // Get HTML Collection of values
    values = document.getElementsByClassName("value_input")

    // Creates the arrays that will store the values
    selects_value = [];
    labels_value = [];
    values_value = [];

    // Transform the selects_value Collection to an array
    Array.from(selects).forEach(function (element) {
        selects_value.push(element.value)
    });

    // Transform the labels_value Collection to an array
    Array.from(labels).forEach(function (element) {
        labels_value.push(element.value)
    });

    // Transform the values_value Collection to an array
    Array.from(values).forEach(function (element) {
        values_value.push(element.value)
    });

    return {
        selects_value,
        labels_value,
        values_value
    };

}

/**
 * Adds a new row to the user input form. Creates a new options element and clones the other inputs in the row.
 */
function add_new_input() {

    // Set the options for the bucket selection, first array index is the selection title.
    bucket_options = ["Bucket", "Expenses", "Emergency", "Investment", "Learning", "Fun"]

    // Get the HTML element for the first row of the form
    const formSection = document.getElementById('form-section').firstElementChild;

    // Copy the first row of the form
    const row = formSection.cloneNode(false);

    // Generate the select column element and children
    selectCol = document.createElement('div');
    select = document.createElement('select');
    label = document.createElement('label');

    // Add select column class names to set length and type
    selectCol.classList.add('input-field');
    selectCol.classList.add('col');
    selectCol.classList.add('s2');

    // Add the select element to the select column element
    selectCol.appendChild(select);

    // Create selection options
    for (var i = 0; i < 6; i++) {

        // Generate the option element
        option = document.createElement("option");

        // If the first option, then set it as the default option to create placeholder text
        if (i < 1) {
            option.setAttribute("value", "")
            option.setAttribute("disabled", "");
            option.setAttribute("selected", "");

            // If not the first option the add the value to option
        } else {
            option.setAttribute("value", bucket_options[i]);
        }

        // Set the text for the selection option
        option.innerText = bucket_options[i];

        // Add the options elements to the select element
        select.appendChild(option)
    }

    // Set select label element text
    label.innerText = "Bucket Name"

    // Add the label element to the select column
    selectCol.appendChild(label);

    // Add the select column element to the row element
    row.appendChild(selectCol);


    // Iterate through the label and value input elements
    var children = formSection.children;
    for (var i = 1; i < children.length; i++) {
        var child = children[i];

        // Clone the label name and value inputs from the HTML
        childCol = child.cloneNode(true);

        // Clears the value from the input section, avoding duplication of user input.
        childCol.children[1].value = '';

        // Removes the valid class, as this will highlight the input field, even if empty.
        childCol.children[1].classList.remove('valid');

        // Add the cloned inputs to the new row
        row.appendChild(childCol);
    }

    // Add the new row to the input form
    document.getElementById('form-section').appendChild(row);

    // Initialise the new Materialize CSS components
    M.AutoInit();
}

/**
 * Remove the last user input row, don't allow the user to delete the first row, as this is used to create new rows.
 */
function remove_last_input() {

    // Get element that contains the user input section
    const formSection = document.getElementById('form-section');

    // Get number of rows in the user input section
    numRows = formSection.children.length;

    // Check if there is still a remaining row, to allow new rows to be created
    if (numRows > 1) {

        // Remove the last row element
        formSection.removeChild(formSection.lastElementChild)
    }

}

/**
 * Resets the user input fields when the rest button is clicked.
 */
function reset_fields() {

    // Get element that contains the user input section
    const formSection = document.getElementById('form-section');

    // Gets the rows of the user input form
    var rows = formSection.children;

    // Iterates through the rows
    for (var row = 0; row < rows.length; row++) {

        // Gets the number of columns in the rows
        numCols = rows[row].children.length

        // Iterates through the columns
        for (var col = 1; col < numCols; col++) {

            // Clears the value of the input columns
            rows[row].children[col].children[1].value = "";

            // Removes the valid class, as this will highlight the input field, even if empty.
            rows[row].children[col].children[1].classList.remove('valid');
        }
    }
}

/**
 * Creates a table to display the user inputs, for each bucket, label and value.
 * @param tableId The ID used for the HTML element that will contain the table.
 * @param labelInputs An array of the label names entered by the user.
 * @param valueInputs An array of the inputted values entered by the user.
 */
function create_input_table(tableId, selectInputs, labelInputs, valueInputs) {

    // Get div that will contain the table element
    const tableArea = document.getElementById(tableId);

    // Remove the previous table if one existed, avoiding duplicates.
    tableArea.innerHTML = "";

    // Generate required table elements
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    const headingRow = document.createElement("tr");
    const bucketHeading = document.createElement("th");
    const labelHeading = document.createElement("th");
    const valueHeading = document.createElement("th");

    // Set the table heading names
    bucketHeading.innerText = "Bucket";
    labelHeading.innerText = "Label";
    valueHeading.innerText = "Value";

    // Add the table heading elements to the table heading row element
    headingRow.appendChild(bucketHeading);
    headingRow.appendChild(labelHeading);
    headingRow.appendChild(valueHeading);

    // Add the table heading row element to the table heading element
    tableHead.appendChild(headingRow);

    // Iterate through rows in the input form
    for (row in labelInputs) {

        // Generate required table row elements
        tableRow = document.createElement("tr");
        bucketData = document.createElement("td");
        labelData = document.createElement("td");
        valueData = document.createElement("td");

        // Set the row values for each column
        bucketData.innerText = selectInputs[row];
        labelData.innerText = labelInputs[row];
        valueData.innerText = valueInputs[row];

        // Add the column data to the table row element
        tableRow.append(bucketData);
        tableRow.append(labelData);
        tableRow.append(valueData);

        // Add the table row element to the table body element
        tableBody.append(tableRow);
    }

    // Add the table head and body elements to the table element
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    // Add the table element to the table area div
    tableArea.appendChild(table);
}