window.addEventListener('scroll',() => {
    let navScroll = document.querySelector("#nav");
    navScroll.classList.toggle("fixed", window.scrollY > 10);
})

function navBack(){
    let nav = document.getElementById('nav').classList.toggle("change");
    let getCollaps = document.querySelector(".collapse")
    if (getCollaps.style.display == 'block'){
        getCollaps.style.display = 'none'
    }else{
        getCollaps.style.display = 'block'
    }
}