// Auto initialize all Materialize CSS Components
M.AutoInit();
// event listener -> when user clicks button, it will generate a new field
document.getElementById("addExpenseField").addEventListener("click", function () {
   $("#newExpenseField").append('<div class="input-field col s12">' +
        '<input type="text" id="newExpField">' +
        '<label for="newExpField">Some Expense</label>' +
        '</div>');
});
//   $('select').formSelect();,