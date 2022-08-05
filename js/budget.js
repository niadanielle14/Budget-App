"use strict";

// Selecting the elements
const balanceEl = document.querySelector(".balance.value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEL = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList =document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// Selecting the toggle buttons
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// Selecting the input buttons for adding and expense and income
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("#expense-title-input");
const expenseAmount = document.getElementById("#expense-amount-input");

const addIncome = document.querySelector(".add-expense");
const incomeTitle = document.getElementById("#income-title-input");
const  incomeAmount = document.getElementById("#income-amount-input");
// use getElementById when using the input attribute.


// Variables
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete";
const EDIT = "edit";

// Event Listeners for buttons to be clickable. Showing and hiding/active and inactive select buttons
expenseBtn.addEventListener("click", function(){
    show(expenseEl);
    hide([incomeEL, allEl]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
})
incomeBtn.addEventListener("click", function(){
    show(incomeEL);
    hide([expenseEl, allEl]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
})
allBtn.addEventListener("click", function(){
    show(allEl);
    hide([expenseEl, incomeEL]);
    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
})
addExpense.addEventListener("click", function(){
// IF ONE OF THE INPUTS IS EMPTY, RETURN EXIT
    if(!expenseTitle.value || !expenseAmount.value ) return;
    // SAVE THE ENTRY TO ENTRY_LIST
    let expense = {
    type : "expense",
    title : expenseTitle.value,
    amount: parseInt(expenseAmount.value)
    }
    ENTRY_LIST.push(expense);
})
addIncome.addEventListener("click", function(){
// IF ONE OF THE INPUTS IS EMPTY, RETURN EXIT
    if(!incomeTitle.value || !incomeAmount.value ) return;
    // SAVE THE ENTRY TO ENTRY_LIST
    let income = {
        type : "income",
        title : incomeTitle.value,
        amount: parseInt(incomeAmount.value)
    }
    ENTRY_LIST.push(income);
})
//
// incomeList.addEventListener("click", function(){
//
// })
// expenseList.addEventListener("click", function(){
//
// })
// allList.addEventListener("click", function(){
//
// })








// Functions to show, hide, active, and inactive
function show(element){
    element.classList.remove("hide");
}
 function hide(elements ){
    elements.forEach(element => {
        element.classList.add("hide");
    })
 }

function active(element){
    element.classList.add("active");
}
function inactive(elements ){
    elements.forEach(element => {
        element.classList.remove("active");
    })
}







