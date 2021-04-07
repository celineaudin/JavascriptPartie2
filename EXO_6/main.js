//on crée une fonction à laquelle on passe un paramètre qu'on a appelé "image"
function changeImage(image){
//le paramètre devient un argument que l'on concatènne avec notre nouvelle url
  document.getElementById(image).src="/home/celine/EXERCICES/JAVASCRIPT/PARTIE2/" + image + "_2.jpg";
  //"/home/celine/EXERCICES/JAVASCRIPT/PARTIE2/image1_2.jpg
}


function returnImage(image){
  document.getElementById(image).src="/home/celine/EXERCICES/JAVASCRIPT/PARTIE2/" + image + ".jpg";

}
