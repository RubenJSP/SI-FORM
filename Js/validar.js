window.addEventListener("load", function(){
    var div = document.getElementById("msj");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var celular = document.getElementById("celular");
    var mail = document.getElementById("correo");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var btn = document.getElementById("send");
    var textPattern = /[A-Za-z]|\s/g;
    var namePattern = /^([A-Za-z]{2,}\s{0,1})+$/g;
    var numberPattern = /\d+/g;
    var cellPattern = /^\d{10}$/g;
    var mailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    div.style.display = "none";
    btn.disabled = true;
    var name=false,lastname=false,cell=false,correo=false,passMatch=false;
    nombre.onpaste = e => e.preventDefault();
    apellido.onpaste = e => e.preventDefault();
    pass1.onpaste = e => e.preventDefault();
    pass2.onpaste = e => e.preventDefault();
    nombre.addEventListener("keydown", function(e){
       if(!e.key.match(textPattern)){
                e.preventDefault();
       }
    });

    nombre.addEventListener("input", function(e){
        if(!nombre.value.match(namePattern))
            nombre.style.backgroundColor = "#ff9e9e";
        else{
            nombre.style.backgroundColor = "#a6ff9e";
            name = true;
        }
     });
    apellido.addEventListener("input", function(e){
        if(!apellido.value.match(namePattern))
            apellido.style.backgroundColor = "#ff9e9e";
        else{
            apellido.style.backgroundColor = "#a6ff9e";
            lastname = true;
        }
     });

    apellido.addEventListener("input", function(e){
        if(!e.key.match(textPattern)){
            e.preventDefault();
        }
     });

     celular.addEventListener("input", function(e){
        if(!e.key.match(numberPattern) && e.keyCode != 8){
            e.preventDefault();
        }
     });

     celular.addEventListener("input", function(e){
        if(celular.value.length == 10){
            celular.style.backgroundColor = "#a6ff9e";
            cell = true;
        }
        else
            celular.style.backgroundColor = "#ff9e9e";
   
     });

     mail.addEventListener('input', function(){
        if(!mail.value.match(mailPattern))
            mail.style.backgroundColor = "#ff9e9e";
        else{
            correo = true;
            mail.style.backgroundColor = "#a6ff9e";
        }
        
     });
     pass1.addEventListener("input", function(){
        if(pass1.value.length<4)
            pass1.style.backgroundColor = "#ff9e9e";
        else
            pass1.style.backgroundColor = "#a6ff9e";
            
     });
     pass2.addEventListener("input", function(){
        if(pass2.value.length<4)
            pass2.style.backgroundColor = "#ff9e9e";
        else
            pass2.style.backgroundColor = "#a6ff9e";

        if(pass1.value!=pass2.value)
            div.style.display = "block";
        else{
            passMatch = true;
            div.style.display = "none";
        }
     });

     if(name && lastname && cell && correo && passMatch){
         console.log("AAA");
            btn.disabled = false;
     }
})

