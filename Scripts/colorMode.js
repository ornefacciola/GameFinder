function switchingModes() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var top = document.getElementById("topbar");
    top.classList.toggle("light-mode");
    var title = document.getElementById("title");
    title.classList.toggle("light-mode");
    var mode = document.getElementById("color-mode");
    mode.classList.toggle("light-mode1");
    var under = document.getElementById("textunder");
    under.classList.toggle("light-mode1");
    var textitem = document.getElementById("text-item");
    textitem.classList.toggle("light-mode");
    var item = document.getElementById("item");
    item.classList.toggle("light-mode");
    var week = document.getElementById("week");
    week.classList.toggle("light-mode");
    var month = document.getElementById("month");
    month.classList.toggle("light-mode");
    var soon = document.getElementById("soon");
    soon.classList.toggle("light-mode");
    var last = document.getElementById("last");
    last.classList.toggle("light-mode");
    var year = document.getElementById("year");
    year.classList.toggle("light-mode");
    var popular = document.querySelector(".popular-h");
    popular.classList.toggle("light-mode");
    var single = document.querySelectorAll(".singlecard");
    for (const card of single) {
        card.classList.toggle("card-mode");
    }
    var namegames = document.querySelectorAll(".name");
    for (const names of namegames) {
        names.classList.toggle("name-mode");
    }
    var releaseDate = document.querySelectorAll(".date");
    for (const date of releaseDate) {
        date.classList.toggle("name-mode");
    }
    var genre = document.querySelectorAll(".genretype");
    for (const genretype of genre) {
        genretype.classList.toggle("name-mode");
    }
    var logo1 = document.querySelectorAll(".logoitem1");
    for (const logo of logo1) {
        logo.src="../Images/psdark.svg";
    }
    var logo2 = document.querySelectorAll(".logoitem2");
    for (const logo of logo2) {
        logo.src="../Images/xboxdark.svg";
    }
    var logo3 = document.querySelectorAll(".logoitem3");
    for (const logo of logo3) {
        logo.src="../Images/windowsdark.svg";
    }   
    var whitenav = document.querySelector(".nav-container");
    whitenav.classList.toggle("nav-container2");
}



