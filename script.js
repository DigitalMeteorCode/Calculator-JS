let input="";

//Permet d'afficher les valeurs cliqués dans l'output
function showValue(btn) {
    input = input + btn.value;
    document.getElementById("output").innerHTML = input;
}

//Permet de faire le calcul
function quickMath() {
    document.getElementById("output").innerHTML = eval(input);
}

//Reset le calcul en cours
function Reset(btn) {
    document.getElementById("output").innerHTML = "0";
    input = "";
}

//Permet d'effacer le dernier chiffre tapé
function rem1(btn) {
    input = input.replace(input.slice(-1), "");
    document.getElementById("output").innerHTML = input;
}