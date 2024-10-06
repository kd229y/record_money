// 記帳項目資料
let transactions = [];

// DOM 元素
const balanceEl = document.getElementById('balance');
const transactionsEl = document.getElementById('transactions');
const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');

// 更新總餘額
function updateBalance() {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    balanceEl.innerText = `$${total.toFixed(2)}`;
}

// 顯示記帳項目
function renderTransactions() {
    transactionsEl.innerHTML = ''; // 清空之前的項目
    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${transaction.description} <span>$${transaction.amount.toFixed(2)}</span>
        `;
        transactionsEl.appendChild(li);
    });
}

// 新增記帳項目
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());

    if (description && !isNaN(amount)) {
        const transaction = { description, amount };
        transactions.push(transaction);

        // 清空輸入欄位
        descriptionInput.value = '';
        amountInput.value = '';

        // 更新顯示
        updateBalance();
        renderTransactions();
    }
});
