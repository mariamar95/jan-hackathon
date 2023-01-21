// Auto initialize all Materialize CSS Components
M.AutoInit();
// Source base code: https://codepen.io/sdflkjgnsdlfn/pen/pKZKOr
$("#addExpenseField").click(function(){
    // $("#addExpenseField").addClass("disabled");
    // $("#addExpenseField").hide();    
    $("#new_field").append('<i class="material-icons prefix">money_off</i><select class="icons"><option value="" disabled>Choose your expense type</option><option value="">Electricity</option><option value="">Shopping</option><option value="">Transportation</option><option value="">Hobby</option><option value="">Fun</option><option value="">Studying</option></select>').find("select").formSelect();  
 });