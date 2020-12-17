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

// document.getElementById("main-title").addEventListener('mousemove', (e)=>{
//     console.log(e.clientX, e.clientY)
// })


window.addEventListener("scroll", function(){
    if(window.scrollY !== 0){
        document.getElementById("navbar").style.boxShadow= "-1px 1px 13px -5px rgba(0,0,0,0.75)";
    }else{
        document.getElementById("navbar").style.boxShadow= "none";
    }
  });