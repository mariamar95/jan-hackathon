function calculate() {
    var num = document.getElementById("num").value;
    var sixtyPercent = (num * 0.6).toFixed(2);
    var tenPercent = (num * 0.1).toFixed(2);
    document.getElementById("result").innerHTML = "Expenses Bucket: " + sixtyPercent + "<br>" +
        "Emergency Bucket: " + tenPercent + "<br>" + "Investment Bucket: " + tenPercent + "<br>" +
        "Learning Bucket: " + tenPercent + "<br>" + "Fun Bucket: " + tenPercent;
}