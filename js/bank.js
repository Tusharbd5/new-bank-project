// Handle Deposit Button Event
document.getElementById('deposit-btn').addEventListener('click', function () {

    // get deposit amount
    const depositInput = document.getElementById('deposit-amount');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    const depositNumber = document.getElementById('deposit-number');
    // deposit total add
    const previousDepositText = depositNumber.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositNumber.innerText = newDepositTotal;

    // Total amount add function
    const totalAmount = document.getElementById('total-number');
    const totalAmountText = totalAmount.innerText;
    const previousTotalAmount = parseFloat(totalAmountText);

    const newTotalAmount = previousTotalAmount + newDepositAmount;
    totalAmount.innerText = newTotalAmount;

    // clear text field
    depositInput.value = '';
});

// Handle Withdraw Button With Event Handller
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // The withdraw amount input form
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // Withdraw Amount Text Field
    const withdrawNumber = document.getElementById('withdraw-number');
    const withdrawNumberText = withdrawNumber.innerText;
    const previousWithdrawAmount = parseFloat(withdrawNumberText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawNumber.innerText = newWithdrawTotal;

    // Minus from Total amount
    const balanceTotal = document.getElementById('total-number');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const updateTotalAmount = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = updateTotalAmount;

    // clear the withdraw amount field
    withdrawAmount.value = '';
});