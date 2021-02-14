const Finance = require("./finance");

function calculate() {
    var principal = get("principalamor").value;
    var interest = get("interestamor").value;
    var term = get("termamor").value;
    var finalamount = get("finalamount")

    var finance = new Finance();
    var payment = finance.AM(principal, interest, term)


}

function get(id) {
    return document.getElementById(id);


}