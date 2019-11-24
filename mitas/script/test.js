function formasubmit(Forma) {

var errorIme, errorMail, errorPhone, errorPrezime, errorPoruka;
    errorIme=errorPrezime=errorMail=errorPhone=errorPotvrda=false;

    if (Forma.text1.value.length<1){
        Forma.text1.focus();
        document.getElementById("errorIme").innerHTML="Nesipravno ime";
        errorIme=true;
        
    }
    else{
        document.getElementById("errorIme").innerHTML="";
    }

    
    if (Forma.text2.value.length<1) {
        
        Forma.text2.focus();
        document.getElementById("errorPrezime").innerHTML="Nesipravno Prezime";
        errorPrezime=true;
    }
    else{
        document.getElementById("errorPrezime").innerHTML="";
    }

    if (Forma.mail1.value.length<3) {
       
        Forma.mail1.focus();
        document.getElementById("errorMail").innerHTML="Nesipravan mail";
        errorMail=true;
    }
    else{
        document.getElementById("errorMail").innerHTML="";
    }

    if (Forma.phone1.value.length<9 || isNaN(Forma.phone1.value)==true) {
        
        Forma.phone1.focus();
        document.getElementById("errorPhone").innerHTML="Nesipravan broj";
        errorPhone=true;
    }
else{
    document.getElementById("errorPhone").innerHTML="";
}

if (Forma.textA1.value.length<1) {
        
    Forma.textA1.focus();
    document.getElementById("errorPoruka").innerHTML="Unesite neku poruku";
    errorPoruka=true;
}
else{
    document.getElementById("errorPoruka").innerHTML="";
}


    if ((errorPhone || errorPrezime || errorIme || errorMail || errorPoruka)==true){
        return false;
    }


    return true;
}

function formareset() {
    document.getElementById("errorPoruka").innerHTML="";
    document.getElementById("errorIme").innerHTML="";
    document.getElementById("errorPrezime").innerHTML="";
    document.getElementById("errorPhone").innerHTML="";
    document.getElementById("errorMail").innerHTML="";
    document.getElementById("errorPotvrda").innerHTML="";
    
}

function moreLess() {
    var tekstDugmeta=document.getElementById("dugmePrikaz");
    var tacke=document.getElementById("tacke");
    var tekst=document.getElementById("vise");

    if (tacke.style.display=="none") {
        tacke.style.display="inline";
        tekstDugmeta.innerHTML="PRIKAŽI VIŠE >>";
        tekst.style.display="none";
    }
    else{
        tacke.style.display="none";
        tekstDugmeta.innerHTML="PRIKAŽI MANJE <<";
        tekst.style.display="inline";
    }
}


$('[data-fancybox="images"]').fancybox({
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'close'
    ],
    thumbs : {
      autoStart : true
    }
  });
  