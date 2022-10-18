const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    const joueur = buttons[i].innerHTML;
    const ordi = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    console.log(Math.floor(Math.random() * buttons.length));
    console.log(Math.random() * buttons.length);
    let resultat = "";
    if (joueur === ordi) {
      resultat = "Egalité";
    }
    else if ((joueur === "Pierre" && ordi === "Ciseaux") || (joueur === "Ciseaux" && ordi === "Feuilles") || (joueur === "Feuilles") && (ordi === "Pierre")) {
      resultat = "Gagné";
    }
    else {
      resultat = "Perdu";
    }
    document.querySelector(".resultat").innerHTML = `
    Joueur : ${joueur} </br>
    Robot : ${ordi} <br/>
    Résultat : ${resultat}`
  });
}