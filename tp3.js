/*recuperation des images */
let image=document.querySelectorAll('.p1');
let etape=0
let nombre_image=image.length;

function alternanceActiveImage(){
    /*parcour du tableau */
    for(let i=0;i<nombre_image;i++){
    image[i].classList.remove('active');}
/*classliste permet de recupere des classes */

}
/*recuperation des boutons */
let envoyer=document.querySelector(".second");
let envoie=document.querySelector(".favorite");
/*si on clic sur le bouton change moi les images du fonction */
envoyer.addEventListener("click",function(){
    etape++;
    if(etape >= nombre_image){
        etape=0;
    }

    alternanceActiveImage();
    image[etape].classList.add('active');
})
    envoie.addEventListener("click",function(){
            etape--;
            if(etape<0){
                etape=nombre_image - 1;
            }
           
            alternanceActiveImage();
    image[etape].classList.add('active');
    })

setInterval(()=>{
    etape++;
    if(etape >= nombre_image){
        etape=0;
    }

    alternanceActiveImage();
    image[etape].classList.add('active');
},3000);

