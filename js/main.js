$(function($){

    var url = "index.php";

    $('#btnCancelar, #btnLimpar').on('click', function(){
        $(location).attr('href',url);
    });

    $(".mask-phone").mask("(99) 99999-9999");

});
