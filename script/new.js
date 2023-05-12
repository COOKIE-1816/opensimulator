function create() {
    document.location.href = `/project.html?new&name=${encodeURIComponent(document.getElementById("text1").value)}`;
}

function open() {
    document.location.href = "/open.html";
}