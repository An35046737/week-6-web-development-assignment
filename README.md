markdown
# SpendWise Budget Tracker

## Week 6 - Make SpendWise Interactive

SpendWise is a personal budget and expense tracking application built using HTML, CSS, and JavaScript.

The goal of this week's project was to make the existing SpendWise dashboard interactive by using JavaScript decision making, arrays, loops, DOM manipulation, and event handling.



## Features

The application allows users to:

- Add expenses.
- Select an expense category.
- View total expenses.
- View the remaining monthly budget.
- View the number of expenses recorded.
- Receive feedback about their budget.
- View expenses in a table.
- Delete expense records.
- See dashboard information update automatically.



## Improvements Made This Week

Several improvements were made to SpendWise:

1. Added an interactive expense form.
2. Added JavaScript to collect user input.
3. Added an array to store multiple expense records.
4. Added loops to process expense records.
5. Added automatic calculation of total expenses.
6. Added automatic calculation of the remaining budget.
7. Added conditional statements for budget warnings.
8. Added DOM manipulation to update the webpage.
9. Added event listeners for form submission and delete buttons.
10. Added responsive styling for smaller screens.



## Conditional Statements

Conditional statements are used to make decisions based on the user's spending.

For example:

javascript
if (total === 0) {
    budgetMessageElement.textContent =
        "No expenses recorded yet.";
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


The application checks the user's total spending and gives different feedback depending on the remaining budget.

This demonstrates decision making using `if`, `else if`, and `else`.



## Arrays

An array is used to store multiple expense records.

javascript
let expenses = [];


Each expense is stored as an object:

javascript
const expense = {
    name: name,
    amount: amount,
    category: category
};


The expense is then added to the array:

javascript
expenses.push(expense);


This makes it possible to store many expenses instead of creating separate variables for every expense.



## Loops

A `for` loop is used to process all expenses stored in the array.

javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}


The loop adds all expense amounts together to calculate the total spending.

Another loop is used to display all expense records in the table.

This makes the application efficient when working with multiple records.



## DOM Manipulation

DOM manipulation is used to update information directly on the webpage.

For example:

javascript
totalExpensesElement.textContent = formatCurrency(total);


The JavaScript changes the HTML content without requiring the user to refresh the page.

The application also creates table rows dynamically:

javascript
const row = document.createElement("tr");


The expense records are then added to the table using:

javascript
expenseTableBody.appendChild(row);


Therefore, users can see their expenses directly on the webpage.


## Event Handling

Event listeners allow the application to respond to user actions.

The expense form uses:

javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // application logic
});


This means that when the user submits the form, JavaScript processes the expense instead of allowing the page to reload.

Delete buttons also use event listeners:

javascript
deleteButton.addEventListener("click", function() {
    deleteExpense(i);
});


This allows users to remove an expense by clicking the Delete button.



## Data Flow

The application follows this process:

1. User enters an expense.
2. User submits the form.
3. JavaScript receives the input.
4. The input is stored as an expense object.
5. The expense object is added to the `expenses` array.
6. JavaScript calculates the total expenses.
7. JavaScript calculates the remaining budget.
8. Conditional statements determine the budget status.
9. The DOM is updated.
10. The expense table displays the updated records.



## Challenges Encountered

One challenge was making sure the dashboard updated whenever an expense was added or deleted.

This was solved by creating an `updateDashboard()` function.

javascript
function updateDashboard() {
    // calculate totals
    // update dashboard
    // display expenses
}


The function is called whenever the expense data changes.

Another challenge was preventing invalid expense information from being added.

This was solved using conditional statements:

javascript
if (name === "" || amount <= 0 || category === "") {
    alert("Please enter valid expense information.");
    return;
}


This prevents empty expense names, invalid amounts, or missing categories from being stored.



## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* JavaScript Arrays
* JavaScript Loops
* Conditional Statements
* Event Listeners



## Project Files

text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md



## Conclusion

The Week 6 version of SpendWise is more interactive than the previous static dashboard.

Users can enter expenses, view their spending, receive budget feedback, and delete records.

The project demonstrates JavaScript fundamentals including conditionals, arrays, loops, functions, DOM manipulation, and event listeners.


