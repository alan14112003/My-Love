const btnCon = document.querySelector(".button__btn--con");
const btnHet = document.querySelector(".button__btn--het");

function setWidthHeight() {
    var width, height;
    do { 
        width = getWidthHeight();
        height = Math.round(getWidthHeight());
    } while(width > 692 || height > 90);
    
    btnCon.style = `top: ${width}px; left: ${height}%;`;
}

function getWidthHeight() {
    return Math.random()*1000;
}

btnHet.addEventListener("click" ,function showPage() {
    window.location = "./love.html"
})
