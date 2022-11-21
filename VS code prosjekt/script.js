/* Dette er javascripten til den knappen som drar deg opp */
/* Disse under definerer verdien til de forskjellige, sånn som button og kva on click skal gjøre */
let button = document.getElementById("top")
button.onclick =() => toTop() /* Her kaller den funksjonen toTop når knappen blir trykket på */
window.onscroll = function() {scrolling()}

/* Dette er en funksjon som sjekker hvor langt du har scrolla. */
function scrolling() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
} 

/* Dette er også en funksjon som drar deg til toppen */
function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}