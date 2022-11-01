window.addEventListener('scroll',() => {
    let navScroll = document.querySelector("#nav");
    navScroll.classList.toggle("fixed", window.scrollY > 10);
})