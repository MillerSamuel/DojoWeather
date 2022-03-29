var popupElement=document.querySelector('#popup')
function hide(){
    popupElement.remove();
}
function convert(unit){
    if(unit=="farenheit"){
        document.querySelector('#red1').innerText=75+"°";
        document.querySelector('#blue1').innerText=65+"°";
        document.querySelector('#red2').innerText=80+"°";
        document.querySelector('#blue2').innerText=66+"°";
        document.querySelector('#red3').innerText=69+"°";
        document.querySelector('#blue3').innerText=61+"°";
        document.querySelector('#red4').innerText=78+"°";
        document.querySelector('#blue4').innerText=70+"°";
    }
    else{
        document.querySelector('#red1').innerText=24+"°";
        document.querySelector('#blue1').innerText=18+"°";
        document.querySelector('#red2').innerText=27+"°";
        document.querySelector('#blue2').innerText=19+"°";
        document.querySelector('#red3').innerText=21+"°";
        document.querySelector('#blue3').innerText=16+"°";
        document.querySelector('#red4').innerText=26+"°";
        document.querySelector('#blue4').innerText=21+"°";
    }
}