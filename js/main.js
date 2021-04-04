// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    document.getElementById('btnAddEmployee').addEventListener('click', () => {

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        'use strict';
        window.open('add-employee.html', 'add-employee', 'width=500, height=500');
});
});