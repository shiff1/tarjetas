function pintarTarjetas(){
   let desde = parseInt(document.getElementById("txtDesde").value);
   let hasta = parseInt(document.getElementById("txtHasta").value);
   let salto = parseInt(document.getElementById("txtSalto").value);
   let contenido = "";
   let divTarjeta = document.getElementById("divTarjetas");

   for (let i = desde; i <= hasta; i += salto){
      contenido += '<div class="item">' + i + "</div>";
   }
   divTarjeta.innerHTML = contenido;
}

