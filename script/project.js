const urlParameters = new URLSearchParams(window.location.search);

/*
log("  +-----------------------------------+", "", MESSAGE, 0);
log("  |        OpenSimulator 2023 =       |", "", MESSAGE, 0);
log("  |   Electrical circuit simulator    |", "", MESSAGE, 0);
log("  | Copyright (C) Vaclav Hajsman 2023 |", "", MESSAGE, 0);
log("  +-----------------------------------+", "", MESSAGE, 0);
*/

log("You are using unstable release. This may result in any kind of unexcepted behaivor, including data loss.", "Environment", WARN, 0);

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

document.onload = (ev) => {
    console.log("Document load complete");
    tab_circuit();
    toolset_change();
}

async function openDir() {
    try {
        const directoryHandle = await window.showDirectoryPicker({
            id: "openSimulator_openDir", 
            mode: "readwrite"
        });

        Dialog.close();
    } catch(error) {
        Dialog.error("Can't open project", `Unable to open project: ${error}`);
        log(error, "directoryHandle", ERROR, 0);
    }

    log("directoryHandle", "Directory open", INFO, 0);
}

if(urlParameters.has("open")) {
    let body = "Please click OK, then pick a directory containing project files (Read-write access).<br><button onclick='openDir()'>OK</button>";
    Dialog.popWithImage("Open a project", body, "/icon/message_file-0.png");
}
