function ol_addRow(data) {
    var tableRow = document.getElementById("outputlog-table");

    var row     = document.createElement("tr");
    var cell1   = document.createElement("td");
    var cell2   = document.createElement("td");
    var cell3   = document.createElement("td");

    cell1.innerHTML = data[0];
    cell2.innerHTML = data[1];
    cell3.innerHTML = data[2];

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
    
        tableRow.appendChild(row);
}