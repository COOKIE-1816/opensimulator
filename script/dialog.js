let Dialog = {
    dialog: document.getElementById("dialog"),
    dialogTitle: document.getElementById("dialog-title"),
    dialogBody: document.getElementById("dialog-contents"),
    dialogW: document.getElementById("dialog-w"),

    pop: function(title, body) {
        //if(["", undefined, null].findIndex(title) == -1) title = "Unnamed dialog";

        this.dialogTitle.innerHTML = title;
        this.dialogBody.innerHTML = body;

        this.dialogW.style.display = "block";
        this.dialog.showModal();
    },

    close: function() {
        this.dialogW.style.display = "none";
        this.dialog.close();
    },

    popWithImage: function(title, body, imageUrl) {
        let t = body;
        body = `<table><tr><td><img src="${imageUrl}"></td><td>${t}</td></tr></table>`;

        this.pop(title, body);
    },

    error: function(title, body) {
        this.popWithImage(title, body, "/icon/msg_error-0.png");
    }
}

Dialog.close();