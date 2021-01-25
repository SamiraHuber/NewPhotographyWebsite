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

function toggleAboutMeContainer() {
    const el = document.getElementById("more_information");
    const button = document.getElementById("more_button");
    if (el.style.display == "block") {
        el.style.display = "none";
        button.innerHTML = "&#8594; Mehr &uuml;ber mich";
    }
    else {
        el.style.display = "block";
        button.innerHTML = "&#8593; Weniger &uuml;ber mich";
    }
}

function toggleAmIRight() {
    const el = document.getElementById("am_i_right_text");
    const button = document.getElementById("am_i_right");
    if (el.style.display == "block") {
        el.style.display = "none";
        button.innerHTML = "&#8594; Bin ich die richtige f&uuml;r euch?";
    }
    else {
        el.style.display = "block";
        button.innerHTML = "&#8593; Bin ich die richtige f&uuml;r euch?";
    }
}

function toggleQuestionContainer() {
    const el = document.getElementById("more_information");
    const button = document.getElementById("more_button");
    if (el.style.display == "block") {
        el.style.display = "none";
        button.innerHTML = "&#8594; Mehr Hintergrundfakten zum Shooting";
    }
    else {
        el.style.display = "block";
        button.innerHTML = "&#8593; Weniger Hintergrundfakten zum Shooting";
    }
}

