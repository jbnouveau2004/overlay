let overlay = document.querySelector(".overlay");
let ouverture = document.querySelector(".ouverture");
let fermeture = document.querySelector(".fermeture");
let calque = document.querySelector(".calque");


document.body.addEventListener("mouseup", test);

function test(event){
    let test = getComputedStyle(overlay).getPropertyValue("display");

    if (test == 'block' && (!overlay.contains(event.target) || (fermeture.contains(event.target)))){
        overlay.style.display = 'none';
        calque.style.display = 'none';

    }else if(test == 'none' && ouverture.contains(event.target)){
        overlay.style.display = 'block';
        calque.style.display = 'block';
    }

}