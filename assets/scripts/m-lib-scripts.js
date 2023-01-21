// Auto initialize all Materialize CSS Components
// M.AutoInit();
// event listener -> when user clicks button, it will generate a new field
document.getElementById("addExpenseField").addEventListener("click", function () {
        $("#newExpenseField").append('<div class="input-field col s2">'+
                '<select>' +
                '<option value="" disabled selected>Bucket</option>'+
                '<option value="1">Expenses</option>'+
                '<option value="2">Emergency</option>'+
                '<option value="3">Investment</option>'+
                '<option value="4">Learning</option>'+
                '<option value="5">Fun</option>'+
                '</select>'+
                '<label>Bucket Name</label>'+
                '</div>'+
                '<div class="input-field col s5">'+
                '<i class="material-icons prefix">label_outline</i>'+
                '<input placeholder="Entertainment"'+
                ' id="label_name" type="text" class="validate">'+
                '<label for="label_name">Label Name</label>'+
                '</div>'+
                '<div class="input-field col s5">'+
                '<i class="material-icons prefix">euro_symbol</i>'+
                '<input placeholder="100"'+
                ' id="money_value" type="number" class="validate">'+
                '<label for="money_value">Value</label>'+
                '</div>');
});

$('select').formSelect();