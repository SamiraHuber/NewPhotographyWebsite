function toggleInfoContainer() {
    const el = document.getElementById("more_information");
    const button = document.getElementById("more_button");
    if (el.style.display == "block") {
        el.style.display = "none";
        button.innerHTML = "&#8594; Mehr Informationen zum Angebot";
    }
    else {
        el.style.display = "block";
        button.innerHTML = "&#8593; Weniger Informationen zum Angebot";
    }
}

function toggleTippsContainer() {
    const el = document.getElementById("more_tipps");
    const button = document.getElementById("more_info_button");
    if (el.style.display == "block") {
        el.style.display = "none";
        button.innerHTML = "&#8594; Zeig mir Tipps f&uuml;r das Photoshooting";
    }
    else {
        el.style.display = "block";
        button.innerHTML = "&#8593; Weniger Tipps f&uuml;r das Photoshooting";
    }
}

