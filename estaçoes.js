function Pesquisa(){
    var elemento =  document.getElementById('Elemento').value;
    if (elemento == janeiro ||ferreiro || dezembro) {
        document.getElementById('result').innerHTML = "Verão:";
    }

    if (elemento == março || bril || maio) {
         document.getElementById('result').innerHTML = "Outono:";
    }

    if (elemento == junho || julho ||agosto) {
        document.getElementById('result').innerHTML = "Inverno:";
   }

   if(elemento == setembro || outubro ||novebro) {
    document.getElementById('result').innerHTML = "Primavera";
   } else {
    document.getElementById('result').innerHTML = "Inverno:";
   }
}  