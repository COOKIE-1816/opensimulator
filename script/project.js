function tabf(e) {
    var i, tabcontent, tablinks, tabslist
    
    tabcontent = document.getElementsByClassName("tabs");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    
    tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");

            if(tablinks[i].hasAttribute("aria-selected")) {
                tablinks[i].ariaSelected = "false";
            }
        }
    
    e.currentTarget.className += " active";

    for(i = 0; i < 11; i++) {

    }
}

function tab_circuit(e) {
    tabf(e);

    document.getElementById("tab_circuit").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}

function tab_readme(e) {
    tabf(e);

    document.getElementById("tab_readme").style.display = "block";
    document.getElementsByClassName("tablinks")[1].ariaSelected = "true";
}

function tab_libs(e) {
    tabf(e);
    
    document.getElementById("tab_libs").style.display = "block";
    document.getElementsByClassName("tablinks")[2].ariaSelected = "true";
}

function tab_bin(e) {
    tabf(e);

    document.getElementById("tab_bin").style.display = "block";
    document.getElementsByClassName("tablinks")[3].ariaSelected = "true";
    console.log(e);
}
function tab_code(e) {
    tabf(e);

    document.getElementById("tab_code").style.display = "block";
    document.getElementsByClassName("tablinks")[4].ariaSelected = "true";
}

function tab_inc(e) {
    tabf(e);

    document.getElementById("tab_inc").style.display = "block";
    document.getElementsByClassName("tablinks")[5].ariaSelected = "true";
}

function tab_settings(e) {
    tabf(e);

    document.getElementById("tab_settings").style.display = "block";
    document.getElementsByClassName("tablinks")[6].ariaSelected = "true";
}

function tab_export(e) {
    tabf(e);

    document.getElementById("tab_export").style.display = "block";
    document.getElementsByClassName("tablinks")[7].ariaSelected = "true";
}

function tab_svg(e) {
    tabf(e);

    document.getElementById("tab_svg").style.display = "block";
    document.getElementsByClassName("tablinks")[8].ariaSelected = "true";
}

function tab_console(e) {
    tabf(e);

    document.getElementById("tab_console").style.display = "block";
    document.getElementsByClassName("tablinks")[9].ariaSelected = "true";
}

function tab_diagnostic(e) {
    tabf(e);
    document.getElementById("tab_diagnostic").style.display = "block";
    document.getElementsByClassName("tablinks")[10].ariaSelected = "true";
}


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

function toolset_hideAll() {
    for(let i = 0; i < document.getElementsByClassName("toolset-opt").length; i++) {
        document.getElementsByClassName("toolset-opt")[i]
            .style.display = "none";
    }
}

function toolset_change() {
    let toolset = document.getElementById("toolset-select");
    let val = toolset.value;
    let className;

    toolset_hideAll();
        
    if(val == "Part") className = "parts";
    if(val == "Wiring") className = "wiring";
    if(val == "Inspection") className = "inspect";
    if(val == "IC Memory") className = "icmemory";
    if(val == "Sketch and marking") className = "paint";

        for(let i = 0; i < document.getElementsByClassName(`toolset-${className}-opt`).length; i++) {
            document.getElementsByClassName(`toolset-${className}-opt`)[i]
                .style.display = "inline";
        }
}
    
document.onload = (ev) => {
    console.log("Document load complete");
    tab_circuit();
    toolset_change();
}

//Dialog.close();