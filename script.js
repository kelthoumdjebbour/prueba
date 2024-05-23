//script para muestra la fecha y el dia de la semana
const lista = document.getElementById("selector");
    const resultado = document.getElementById("weekDay");

    lista.addEventListener("change", calcularDiaSemana);

    function calcularDiaSemana() {
        let now = new Date(); // que representa la fecha y hora actuales
        let diaSemana = now.getDay();//almacenará valor  que devuelve metodo getDay(día de la semana como un número entero )
        let dia = now.getDate();//almacenará valor  que devuelve metodo getDate(día del (1-31) )
        let mes = now.getMonth() + 1; // (Los meses empiezan desde 0 )Obtiene el mes (0 para enero, 1 para febrero, ..., 11 para diciembre) y le suma 1 para convertirlo a una numeración más intuitiva (1 para enero, 2 para febrero, ..., 12 para diciembre)
        let año = now.getFullYear();//almacenará valor que devuelve metodo getFullYear(año completo )

        const castellano = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const euskera = ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"];
        const ingles = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var idioma = lista.value;

        var mensaje = "";

        switch (idioma) {
            case "castellano":
                mensaje = `${castellano[diaSemana]}: ${dia}/${mes}/${año}`;
                break;
            case "euskera":
                mensaje = `${euskera[diaSemana]}: ${dia}/${mes}/${año}`;
                break;
            case "ingles":
                mensaje = `${ingles[diaSemana]}:${dia}/${mes}/${año}`;
                break;
            default:
                alert("Hay que elegir un valor");
        }

        resultado.textContent = mensaje;
    }
 // script para deshabilitar el botòn 
    const acepto =document.getElementById("privacy");
    const btn1= document.getElementById("btn1");

    acepto.addEventListener("click",function(){
      let checkeado=acepto.checked
       if (checkeado) {
           btn1.disabled=false;
           btn1.style.color="green";
           
           
       } else { 
           btn1.disabled=true;
           btn1.style.color="red";
           
           
       }

    })
