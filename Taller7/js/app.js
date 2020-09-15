// function getData(){
//     $.ajax({
//         type: "GET",
//         url: 'https://www.datos.gov.co/resource/xdk5-pm3f.json', 
//         // async: false,
//         dataType: "json",
//         success: function(data){
//             // alert("pepe");
//             $.each(data,function(key, registro) {
//                 var departamento = "";
//                 var municipio = "";
                
//                     $.each(registro, function(key, value) {
//                         //alert(campo + ": " + valor);
//                         if (key == "departamento") { departamento = value; }
//                         if (key == "municipio") { municipio = value; }
                                                    
//                     });
//             }); 
//         $("#select").append('<option value='+departamento+'>'+municipio+'</option>');		 
//         },
//         error: function(data) {
//             alert('error');
//         }
//     });
// }



// function getData(){
//     $.ajax({
//     type: "GET",
//     url: 'https://www.datos.gov.co/resource/xdk5-pm3f.json', 
//     dataType: "json",
//     success: function(data){
//         $.each(data,function(key, registro) {
//         $("#select").append('<option value='+registro.departamento+'>'+registro.departamento+'</option>');
//         });        
//     },
//     error: function(data) {
//         alert('error');
//     }
//     });
// }





// $(document).ready(function()
// {
//     $("#select").click(function(){
//         $.get('https://www.datos.gov.co/resource/xdk5-pm3f.json',function(datos){
//             var info = "< option value =" + datos[0].departamento + ">"+ datos[0].departamento;
//                 // info += " - " + datos[0].phone;
//                 // info += "</br>" + datos[0].website;
//                 $("#select").html(info);
//         });
//     });
// });

















// function getData(){
//     $.ajax({
//     type: "GET",
//     url: 'https://www.datos.gov.co/resource/xdk5-pm3f.json', 
//     dataType: "json",
//     success: function(data){
//         $.each(data,function(key, registro) {
//         $("#select").append('<option value='+registro.id+'>'+registro.nombre+'</option>');
//         });        
//     },
//     error: function(data) {
//         alert('error');
//     }
//     });
// }

