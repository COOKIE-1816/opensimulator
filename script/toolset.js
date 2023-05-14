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