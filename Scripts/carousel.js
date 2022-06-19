var indexValue= 1;
showImage(indexValue);

function btn_slide(e){showImage(indexValue = e);}
function side_slide(e){showImage(indexValue += e);}
function showImage(e){
    var i;
    const img= document.querySelectorAll('.bgimg');
    const sliders = document.querySelectorAll('.slid');
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue=img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.display ="none";
    }
    for(i = 0; i < sliders.length; i++){
        sliders[i].style.background='rgba(255,255,255,0.1)';
    }
    img[indexValue-1].style.display = 'block';
    sliders[indexValue-1].style.background= 'white';


}