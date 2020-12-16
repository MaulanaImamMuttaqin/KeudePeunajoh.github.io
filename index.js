function showImage(gambar){
    document.getElementById("produk-menu").style.display = "block";
    document.getElementById("produk-menu").style.animation = "imageShow .3s ease";
}
function removeImage(gambar){
    document.getElementById("produk-menu").style.display = "none";
    document.getElementById("produk-menu").style.animation = "imageRemove .3s ease";
}