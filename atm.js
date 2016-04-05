var checkingBalance = document.querySelector("#checkingBalanceDiv");
var checkingAmount  = document.querySelector("#checkingAmount");
var checkDepButton  = document.querySelector("#checkingDepositButton");
var checkWithButton = document.querySelector("#checkingWithdrawalButton");

var savingsBalance  = document.querySelector("#savingsBalanceDiv");
var savingsAmount   = document.querySelector("#savingsAmount");
var savingsDepButton = document.querySelector("#savingsDepositButton");
var savingsWithButton = document.querySelector("#savingsWithdrawalButton");


function checkingDeposit() {
    var balance = checkingBalance.innerHTML;
    balance = parseInt(balance.replace("$", ""));
    var checkingInput = parseInt(checkingAmount.value);
    var total = balance + checkingInput;
    checkingBalance.innerHTML = "$" + total;
    checkingAmount.value = "";
}

function checkingWithdrawal() {
    var savingsBal = savingsBalance.innerHTML;
    savingsBal = parseInt(savingsBal.replace("$", ""));
    var checkingBal = checkingBalance.innerHTML;
    checkingBal = parseInt(checkingBal.replace("$", ""));
    var checkingInput = parseInt(checkingAmount.value);

    if (checkingBal < checkingInput) {
        var overDraftAmount = checkingInput - checkingBal;
        checkingBalance.innerHTML = "$0";
        savingsBalance.innerHTML = "$" + (savingsBal - overDraftAmount);

    } else {
        var total = checkingBal - checkingInput;
        checkingBalance.innerHTML = "$" + total;
        checkingAmount.value = "";
    }
}

function savingsDeposit() {
    var balance = savingsBalance.innerHTML;
    balance = parseInt(balance.replace("$", ""));
    var savingsInput = parseInt(savingsAmount.value);
    var total = balance + savingsInput;
    savingsBalance.innerHTML = "$" + total;
    savingsAmount.value = "";
}

function savingsWithdrawal() {
    var balance = savingsBalance.innerHTML;
    balance = parseInt(balance.replace("$", ""));
    var savingsInput = parseInt(savingsAmount.value);
    var total = balance - savingsInput;
    savingsBalance.innerHTML = "$" + total;
    savingsAmount.value = "";
}


checkWithButton.addEventListener("click", checkingWithdrawal);
checkDepButton.addEventListener("click", checkingDeposit);
savingsWithButton.addEventListener("click", savingsWithdrawal);
savingsDepButton.addEventListener("click", savingsDeposit);


// create a variable for the checking balance and set it to zero
//   var checkBalance = 0;
// // selecting the #chechingBalaneDiv element and storing in variable
//   var checkBalDiv = document.querySelector("#checkingBalanceDiv");
// // selecting the #checkingDepositButton element and storing in var
//   var depBut = document.querySelector("#checkingDepositButton");
//
// // add click event listener to deposit button, tell it to run callback function.
// //depBut.addEventListener("click", function()){
//   // get value from input and convert to string, then store in variable
//   var val = parseFloat(document.querySelector("#checkingAmount").value);
//   // update checkBalance to old balance + input
//   depBut.addEventListener("click", function(){
//   // display dollar sign and balance inside checkBalDiv element
//   checkBalDiv.innerHTML = "$" + checkBalance;
// });
//
// //
// //   var savBalance = 0;
// //   var savBalDiv = document.querySelector("#savingBalanceDiv");
// //   var depBut = document.querySelector("#savingDepositButton");
// //
// //
// // //depBut.addEventListener("click", function)()){
// //   var val = parseFloat(document.querySelector("#savingAmount").value);  depsavBut.addEventListener("click", function(){
// //   savBalDiv.innerHTML = "$" + savBalance;
// //
// });
