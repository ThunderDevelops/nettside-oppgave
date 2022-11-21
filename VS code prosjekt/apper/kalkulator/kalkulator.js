/* vi lager elemented med iden display og definerer display, med verdien av iden */
let display = document.getElementById("display");

/* Vi definerer en liste med all knappene. */
let buttons = Array.from(document.getElementsByClassName("button"));

/* Denne registrerer at du trykker på nappene og det skjer ting. Som hvis det er C så clearer den displayet. */
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Error!'; /* Viser en feilmelding ved feil input */
                }
                
                break;
            default:
            display.innerText += e.target.innerText;
        } 
    });
});