function toggleInfoContainer() {
    const el = document.getElementById("more_information");
    const button = document.getElementById("more_button");
    console.log(el.style.display);
    console.log(el.style.display == "block");
    if (el.style.display == "block") {
        el.style.display = "none";
        button.innerHTML = "&#8594; Mehr Informationen zum Angebot";
    }
    else {
        el.style.display = "block";
        button.innerHTML = "&#8593; Weniger Informationen zum Angebot";
    }
}