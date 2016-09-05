/** habilita o botao mobile navbar */
$(".button-collapse").sideNav();

/** habilita o parallax */
$(document).ready(function(){
     $('.parallax').parallax();
   });

$('#textarea1').val
$('#textarea1').trigger('autoresize');


$('.btn-finalizar').click(function(response){

   $.ajax({
     url: 'http://outlabs.herokuapp.com/novo-pedido',
     data: {
       mesa: $('#icon_prefix').val(),
       pedido: $('#icon_telephone').val(),
       email: $('#email').val(),
       texto: $('#textarea1').val()
     },
       success: function(resposta){
           $('#icon_prefix').val('');
           $('#icon_telephone').val('');
           $('#email').val('');
           $('#textarea1').val('');
           Materialize.toast(resposta, 2000);

       }, error: function(erro){
           Materialize.toast(erro.responseText, 3000, 'red-text');
       }
   })
});