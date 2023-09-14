function tableau()

{

var taille = window.prompt("Veuillez entrer la taille souhaiter :");
var myTableau = [];
myTableau.length = taille;
i = 0;
alert("le tableau contient "+ taille + " éléments");

    do 
    {

        if (myTableau === "0"){
            break;

        }

    myTableau[i++] = [window.prompt("Veuillez entrer une valeur pour la case N°"+i)]

    somme = +somme + +myTableau;

    moyenne = somme / i;

    }while(true)

    alert("Vous avez saisie " + i + " valeur, la somme de ces valeur est : " + somme + " et la moyenne est : " + moyenne);

}

tableau()