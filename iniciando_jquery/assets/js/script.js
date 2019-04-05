// Estes procedimentos somente vão ser executados quando a pagina estiver totalmente carregada
function carregado(){
    alert("primeira forma | Esta função so sera carregado quando a pagina estiver totalmente carregada!");
}
$(document).ready(carregado);


$(document).ready(function(){
    alert("Segunda forma de executar esta mesma função haha");
});

$(function(){
    alert("Terceira forma de executar esta mesma função")
})


// existem outros frameworks que possuem a mesma sintaxe ($) do jQuery então você pode mudar o $ renomeando-o 
var $j = jQuery.noConflict();
$j(function(){
    alert("Executando mais uma vez");
});
// ou acesando nativamente
jQuery(function(){
    alert("Só mais uma vez !");
})
