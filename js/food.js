function showCustomAlert(message) {
    
    document.getElementById("alertMessage").innerText = message;

    const alertBox = document.getElementById("customAlert");
    alertBox.style.display = "flex";

    document.body.style.overflow = "hidden";

    document.getElementById("closeAlert").addEventListener("click", function () {
        alertBox.style.display = "none";

        document.body.style.overflow = "auto";
    });
}

document.getElementById("copyBtn").addEventListener("click", function() {

    const content = document.getElementById("content").innerText;

    const textarea = document.createElement("textarea");
    textarea.value = content;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    showCustomAlert("Recipe copied to clipboard!");
});