$(document).ready(function(){
$('#mostrar').click(function(){
    $("#color").show();
    $("#marca").show();
    $("#estilo").show();
    $("#modelo").show();
    $("#a").show();
    $("#b").show();
    $("#c").show();
    $("#d").show();

});
$('#ocultar').click(function(){
    $("#color").hide();
    $("#marca").hide();
    $("#estilo").hide();
    $("#modelo").hide();
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();

});
});
var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });