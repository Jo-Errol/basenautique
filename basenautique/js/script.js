function includeHTML() {
    var page, elem, file, xhttp;
    page = document.getElementsByTagName("*");
    for (var i = 0; i < page.length; i++) {
        elem = page[i];
        file = elem.getAttribute("includes");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elem.innerHTML = this.responseText;}
                    if (this.status == 404) {elem.innerHTML = "Page not found.";}
                    elem.removeAttribute("includes");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};

$(function() {
    $("#calendar").datepicker({
        altField: "#calendardate"
    });
});

function isChecked(checkbox, valid) {
    var button = document.getElementById(valid);

    if (checkbox.checked === true) {
        button.disabled = "";
    } else {
        button.disabled = "disabled";
    }
};