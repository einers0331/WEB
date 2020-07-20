function validacion()
{
    var nombre,apellido,direccion,ccusuario,contrasena,email,telefono,conf_contrasena;
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    direccion=document.getElementById("direccion").value;
    ccusuario=document.getElementById("ccusuario").value;
    contrasena=document.getElementById("contrasena").value;
    conf_contrasena=document.getElementById("conf_contrasena").value;
    email=document.getElementById("email").value;
    telefono=document.getElementById("telefono").value;
    expresion1 = /^cll|^cra|^av|^anv|^trans/;
    expresion2= /\W/;
    expresion3=/\w[&#%]/;
if(nombre ==="" ||apellido ==="" ||direccion ==="" ||ccusuario ==="" ||contrasena ==="" ||email ==="" ||telefono ==="")
{
    alert("Todos los campos son obligatorios")
    return false;
}
else if 
(nombre.length > 25){ alert("Ingrese un nombre más corto"); 
return false;}
else if 
(apellido.length > 25){ alert("Ingrese un apellido más corto");
 return false; }
 else if 
 (!direccion.match(expresion1))
 {
     alert("la direccion debe empezar con : cll , cra , av , anv , trans");
  return false; }

  else if 
(ccusuario.length < 10 || ccusuario.length>20  || ccusuario.match(expresion2)){ alert("La ccUsuario debe estar entre 10 y 20 caracteres y sin caracteres extraños");
 return false; }

 else if 
(contrasena.length < 15 || contrasena.length>20 || !contrasena.match(expresion3)){ alert("Su contraseña ebe estar entre 15 y 20 caracteres, contener una mayuscula, numeros y/o los siguientes caracteres [#,/,%,&]");
 return false; }

 else if(contrasena != conf_contrasena){
     alert('Las constraseñas no coinciden');
     return false;
 }

 else if(email.length >120 ){
     alert('Ingrese un email más corto')
     return false;
 }

}