document.querySelector("#userForm").addEventListener('submit', saveToLocalStorage);

function saveToLocalStorage(e) {
    e.preventDefault();

    let amount = document.querySelector("#amount").value.trim();
    let description = document.querySelector("#description").value.trim();
    let category = document.querySelector("#category").value.trim();

    let totalExpence = {
        amount, description, category
    };

    localStorage.setItem(totalExpence.description, JSON.stringify(totalExpence));

    show(totalExpence);
    clearForm();
}

function show(totalExpence) {
    let ul = document.querySelector("ul");

    let li = document.createElement("li");
    li.textContent = `${totalExpence.amount} - ${totalExpence.category} - ${totalExpence.description}`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Expense';
    deleteButton.onclick = function () {
        localStorage.removeItem(totalExpence.description);
        ul.removeChild(li);
    };

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Expense';
    editButton.onclick = function () {
        localStorage.removeItem(totalExpence.description);
        ul.removeChild(li); // Corrected here from userList to ul
        populateForm(totalExpence);
    };

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    ul.appendChild(li);
}

function clearForm() {
    document.querySelector('#amount').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#category').value = 'fuel';
}

function populateForm(obj) {
    document.querySelector('#amount').value = obj.amount;
    document.querySelector('#description').value = obj.description;
    document.querySelector('#category').value = obj.category;
}
