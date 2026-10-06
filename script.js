javascript
// ================================
// SpendWise JavaScript
// ================================

// Monthly budget
const monthlyBudget = 50000;

// Array used to store multiple expense records
let expenses = [];


// ================================
// Get HTML Elements
// ================================

const expenseForm = document.getElementById("expenseForm");

const expenseNameInput = document.getElementById("expenseName");

const expenseAmountInput = document.getElementById("expenseAmount");

const expenseCategoryInput = document.getElementById("expenseCategory");

const expenseTableBody = document.getElementById("expenseTableBody");

const totalExpensesElement = document.getElementById("totalExpenses");

const remainingBudgetElement = document.getElementById("remainingBudget");

const expenseCountElement = document.getElementById("expenseCount");

const budgetMessageElement = document.getElementById("budgetMessage");

const budgetAmountElement = document.getElementById("budgetAmount");


// Display the monthly budget
budgetAmountElement.textContent = formatCurrency(monthlyBudget);


// ================================
// Format Currency
// ================================

function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString();
}


// ================================
// Add Expense
// ================================

expenseForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = expenseNameInput.value.trim();

    const amount = Number(expenseAmountInput.value);

    const category = expenseCategoryInput.value;


    // Conditional statement for input validation
    if (name === "" || amount <= 0 || category === "") {

        alert("Please enter valid expense information.");

        return;
    }


    // Create an expense object
    const expense = {
        name: name,
        amount: amount,
        category: category
    };


    // Add the object to the expenses array
    expenses.push(expense);


    // Update the dashboard
    updateDashboard();


    // Clear the form
    expenseForm.reset();

});


// ================================
// Update Dashboard
// ================================

function updateDashboard() {

    // Variable for storing total expenses
    let total = 0;


    // Loop through the expenses array
    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

    }


    // Calculate remaining budget
    const remaining = monthlyBudget - total;


    // Update dashboard using DOM manipulation
    totalExpensesElement.textContent = formatCurrency(total);

    remainingBudgetElement.textContent = formatCurrency(remaining);

    expenseCountElement.textContent = expenses.length;


    // Display budget feedback
    updateBudgetMessage(total, remaining);


    // Display all expenses
    displayExpenses();

}


// ================================
// Budget Decision Making
// ================================

function updateBudgetMessage(total, remaining) {

    // Conditional statements evaluate the budget situation

    if (total === 0) {

        budgetMessageElement.textContent =
            "No expenses recorded yet. Start tracking your spending.";

    }

    else if (remaining < 0) {

        budgetMessageElement.textContent =
            "Warning: You have exceeded your monthly budget!";

    }

    else if (remaining <= 5000) {

        budgetMessageElement.textContent =
            "Be careful. You are close to reaching your monthly budget.";

    }

    else {

        budgetMessageElement.textContent =
            "Good job! You are still within your monthly budget.";

    }

}


// ================================
// Display Expenses
// ================================

function displayExpenses() {

    // Clear existing table rows
    expenseTableBody.innerHTML = "";


    // Loop through the array
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];


        // Create a new table row
        const row = document.createElement("tr");


        // Create expense name cell
        const nameCell = document.createElement("td");

        nameCell.textContent = expense.name;


        // Create category cell
        const categoryCell = document.createElement("td");

        categoryCell.textContent = expense.category;


        // Create amount cell
        const amountCell = document.createElement("td");

        amountCell.textContent = formatCurrency(expense.amount);


        // Create action cell
        const actionCell = document.createElement("td");


        // Create delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-btn");


        // Event listener for deleting an expense
        deleteButton.addEventListener("click", function() {

            deleteExpense(i);

        });


        // Add delete button to action cell
        actionCell.appendChild(deleteButton);


        // Add cells to row
        row.appendChild(nameCell);

        row.appendChild(categoryCell);

        row.appendChild(amountCell);

        row.appendChild(actionCell);


        // Add row to table
        expenseTableBody.appendChild(row);

    }

}


// ================================
// Delete Expense
// ================================

function deleteExpense(index) {

    // Remove one expense from the array
    expenses.splice(index, 1);


    // Refresh the dashboard
    updateDashboard();

}


// ================================
// Initial Dashboard
// ================================

updateDashboard();

