var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
        resetForm();
}
}

function readFormData() {
var formData = {};
formData["firstName"] = document.getElementById("firstName").value;
formData["lastName"] = document.getElementById("lastName").value;
formData["fatherName"] = document.getElementById("fatherName").value;
formData["motherName"] = document.getElementById("motherName").value;
formData["aadharNumber"] = document.getElementById("aadharNumber").value;
formData["phnnumber"] = document.getElementById("phnnumber").value;
formData["course"] = document.getElementById("course").value;
return formData;
}

function insertNewRecord(data) {
var table = document.getElementById("registeredList").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.firstName;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.lastName;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.fatherName;
cell4 = newRow.insertCell(3);
cell4.innerHTML = data.motherName;
cell5 = newRow.insertCell(4);
cell5.innerHTML = data.aadharNumber;
cell6 = newRow.insertCell(5);
cell6.innerHTML = data.phnnumber;
cell7 = newRow.insertCell(6);
cell7.innerHTML = data.course;
cell7 = newRow.insertCell(7);
cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() {
document.getElementById("firstName").value = "";
document.getElementById("lastName").value = "";
document.getElementById("fatherName").value = "";
document.getElementById("motherName").value = "";
document.getElementById("aadharNumber").value = "";
document.getElementById("phnnumber").value = "";
document.getElementById("course").value = "";
selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fatherName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("motherName").value = selectedRow.cells[3].innerHTML;
    document.getElementById("aadharNumber").value = selectedRow.cells[4].innerHTML;
    document.getElementById("phnnumber").value = selectedRow.cells[5].innerHTML;
    document.getElementById("course").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
selectedRow.cells[0].innerHTML = formData.firstName;
selectedRow.cells[1].innerHTML = formData.lastName;
selectedRow.cells[2].innerHTML = formData.fatherName;
selectedRow.cells[3].innerHTML = formData.motherName;
selectedRow.cells[4].innerHTML = formData.aadharNumber;
selectedRow.cells[5].innerHTML = formData.phnnumber;
selectedRow.cells[6].innerHTML = formData.course;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("registeredList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
isValid = true;
if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
} else {
    isValid = true;
    if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
        document.getElementById("fullNameValidationError").classList.add("hide");
}
return isValid;
}