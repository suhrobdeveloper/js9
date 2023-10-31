alert(
  "Salom! Men 1 dan 10 gacha son o'ylayapman.\nSizning vazifangiz men o'ylagan sonni topish. \nSizda 5 ta urinish mavjud"
);

function afs() {
  num = prompt("Son kiriting: ");
  return num == Math.floor(Math.random() * 10 + 1);
}

for (let i = 1; i < 6; i++) {
  if (afs()) {
    alert("Topding ");
    break;
  } else {
    if (i == 5) {
      alert("yaziklar olsun biror marta ham topolmadiz");
      break;
    } else {
      alert(
        "Topolamdiz. Sizda yana " + (5 - i) + " ta urinish qoldi."
      );
    }
  }
}
