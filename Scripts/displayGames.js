function singleRow(){
    var changeone=document.querySelector('.imgbg1')
    changeone.classList.toggle('imgbg1extra')
    var changethree=document.querySelector('.imgbg')
    changethree.classList.toggle('imgbgextra')
    var one=document.getElementById("cards");
    one.classList.toggle("cardsingle");
    var size=document.querySelectorAll('.singlecard');
    for (const onecard of size) {
        onecard.classList.toggle("singlecardextra");
    }
    var img=document.querySelectorAll('.bgimage');
    for (const bg of img) {
        bg.classList.toggle("bgimageextra");
    }
    var heart=document.querySelectorAll('.heart');
    for (const change of heart) {
        change.classList.toggle("heartextra");
    }
    var name=document.querySelectorAll('.name');
    for (const n of name) {
        n.classList.toggle("nameextra");
    }
    var id=document.querySelectorAll('.id');
    for (const i of id) {
        i.classList.toggle("idextra");
    }
    var general=document.querySelectorAll('.generalinfo');
    for (const g of general) {
        g.classList.toggle("generalinfoextra");
    }
    var date=document.querySelectorAll('.date');
    for (const d of date) {
        d.classList.toggle("dateExtra");
    }
    var genre=document.querySelectorAll('.genre');
    for (const ge of genre) {
        ge.classList.toggle("genreExtra");
    }
    var genret=document.querySelectorAll('.genretype');
    for (const get of genret) {
        get.classList.toggle("genretExtra");
    }
    var glogo=document.querySelectorAll('.gamelogo');
    for (const log of glogo) {
        log.classList.toggle("gamelogoExtra");
    }
    var description = document.querySelectorAll('.description');
    for (const desc of description) {
        desc.classList.toggle("descriptionn");
    }
}