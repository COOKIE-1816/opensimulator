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
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_libs(e) {
    tabf(e);
    
    document.getElementById("tab_libs").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_bin(e) {
    document.getElementById("tab_bin").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_code(e) {
    document.getElementById("tab_code").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_inc(e) {
    document.getElementById("tab_inc").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_settings(e) {
    document.getElementById("tab_settings").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_export(e) {
    document.getElementById("tab_export").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_svg(e) {
    document.getElementById("tab_svg").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_console(e) {
    document.getElementById("tab_console").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}
function tab_diagnostic(e) {
    document.getElementById("tab_diagnostic").style.display = "block";
    document.getElementsByClassName("tablinks")[0].ariaSelected = "true";
}