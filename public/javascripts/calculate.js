function calculate() {
    var principal = get("principalamor").value;
    var interest = get("interestamor").value;
    var term = get("termamor").value;
    var finalamount = get("finalamount")

    var finance = new Finance();
    var payment = finance.AM(principal, interest, term)
    finalamount.textContent = payment;


}

function calculate1() {
    var rate = get("fvrate").value;
    var cashflow = get("fvcashflow").value;
    var termfv = get("fvterm").value;
    var finalamount1 = get("finalamount1")

    var finance = new Finance();
    var payment = finance.FV(rate, cashflow, termfv)
    finalamount1.textContent = payment;

}

function showcalc() {

    var amorcalc = get("amor");
    var fvcalc = get("fv");
    var cagrcalc = get("cagr");
    hide(amorcalc);
    hide(fvcalc);
    hide(cagrcalc);
    var selectelement = get("calculatorOptions");
    var selectvalue = selectelement.value;
    if (selectvalue == 1) {
        console.log("show amortization");
        show(amorcalc);



    } else if (selectvalue == 2) {
        console.log("show fv");
        show(fvcalc);
    } else {
        console.log("show cagr")
        show(cagrcalc);
    }

}



function get(id) {
    return document.getElementById(id);


}

function show(el) {
    el.style.display = "";


}

function hide(el) {
    el.style.display = "none";
}