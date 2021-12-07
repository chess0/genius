/*let c = Math.floor(5);
function champ() {
    var aleatoire =document.getElementById("nombre").value
    if (aleatoire == c) 
    {
       alert("vous avez juste");
       return false;
    }
    return true;
}*/
let c = Math.floor(Math.random() * 50)
function champ() {
    var aleatoire =document.getElementById("nombre").value
    if (aleatoire == c) {
        alert("Bravo vous avez deviner juste")
    } else {
        alert("ouuuups devinez une nouvelle fois")
    }
    if (aleatoire < c) {
        alert("le nombre est sup a celui que vous avez deviner")
    }
    if (aleatoire > c) {
        alert("le nombre est inf a celui que vous avez deviner")
    }
}
