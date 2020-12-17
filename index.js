function showImage(gambar){
    document.getElementById("main-title").style.display="none";
    document.getElementById(gambar).style.display = "block";
    document.getElementById(gambar).style.animation = "imageShow .3s ease";
   
}
function removeImage(gambar){
    document.getElementById("main-title").style.display="block";
    document.getElementById(gambar).style.display = "none";
    document.getElementById(gambar).style.animation = "none";
    document.getElementById("main-title").style.animation = "imageShow .3s ease";
}