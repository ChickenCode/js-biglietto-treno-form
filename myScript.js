var myForm = document.getElementById("form")



myForm.addEventListener("submit", function(event) {
    // Neutralizza il submit del form
    event.preventDefault();

    // Creo la variabile formElements che mi permetterà di "navigare" i vari elementi del mio form 
    var form = event.currentTarget;
    var formElements = form.elements
    
    // Creo variabili per i valori degli elementi in form con nome: "name", "distance" e "age"
    var nome = formElements.name.value;
    var distanza = parseInt(formElements.distance.value);
    var età = formElements.age.value;

    // Creo variabile di calcolo del prezzo del biglietto
    var prezzoBiglietto = distanza * 0.21

    // Parte della Dom manipulation
    document.getElementById("insertName").innerHTML = nome
    if (età === "Minorenne" || età === "Over-65") {
        document.getElementById("offerta").innerHTML = "Sconto " + età
    } 

    else if (età === "Maggiorenne") {
        document.getElementById("offerta").innerHTML =  età;
    }

    document.getElementById("carrozza").innerHTML = Math.ceil(Math.random() * 10);

    document.getElementById("codiceCP").innerHTML = Math.floor(Math.random() * (1000000 - 900000)) + 900000

    if (età === "Minorenne") {
        document.getElementById("prezzo").innerHTML = (prezzoBiglietto * 0.8).toFixed(2) + " €"
    }

    else if (età === "Maggiorenne") {
        document.getElementById("prezzo").innerHTML = prezzoBiglietto.toFixed(2) + " €"
    }

    else if (età === "Over-65") {
        document.getElementById("prezzo").innerHTML = (prezzoBiglietto * 0.6).toFixed(2) + " €"    }
})

    