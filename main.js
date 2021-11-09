$(document).ready(function () {

    let listaNombres = ['Sara', 'Judith', 'Helen', 'Tamara', 'Candy', 'Laura Contreras', 'Gabrielle', 'Carmen', 'Yuliya', 'Anna Girona', 'Desirée', 'Sonia', 'Joana', 'Ana Casas', 'Alisa', 'Faby', 'Valentina', 'Laura Mayas', 'Rosa', 'Sandra', 'Kristina', 'Gràcia', 'Alexia', 'Marisa',];

    let listaNombresActive = listaNombres;

    /*-------------------------------------------FUNCTION---START-----------------------------------------------*/
    function random() {

        if (listaNombresActive.length >= 1) {

            let num = Math.floor(Math.random() * listaNombresActive.length);
            let name = listaNombresActive[num];
            listaNombresActive.splice(num, 1);
            $('.answer').html("<p class='voluntaria'>" + name + "</p>");
            //$(".coder:contains('" + name + "')").hide();
            $(".coder:contains('" + name + "')").addClass('tachar');
            $(".eliminar:contains('" + name + "')").remove();
        }

        else {
            $('.answer').html("<p class='voluntaria'>Ya no quedan más voluntarias, clica botón 'Reiniciar la sesión'</p>");
        }
    };

    /*-------------------------------------------FUNCTION---REINICIAR-----------------------------------------------*/

    function reiniciar() {

        $(".voluntaria").remove();
        $(".grupo").remove();
        //$(".coder").show();
        $(".coder").removeClass('tachar');

        listaNombresActive = ['Sara', 'Judith', 'Helen', 'Tamara', 'Candy', 'Laura Contreras', 'Gabrielle', 'Carmen', 'Yuliya', 'Anna Girona', 'Desirée', 'Sonia', 'Joana', 'Ana Casas', 'Alisa', 'Faby', 'Valentina', 'Laura Mayas', 'Rosa', 'Sandra', 'Kristina', 'Gràcia', 'Alexia', 'Marisa',];

    };

    /*-------------------------------------------FUNCTION----CREAR-GRUPOS-----------------------------------------------*/

    function crearGrupos() {

        listaNombresActive = ['Sara', 'Judith', 'Helen', 'Tamara', 'Candy', 'Laura Contreras', 'Gabrielle', 'Carmen', 'Yuliya', 'Anna Girona', 'Desirée', 'Sonia', 'Joana', 'Ana Casas', 'Alisa', 'Faby', 'Valentina', 'Laura Mayas', 'Rosa', 'Sandra', 'Kristina', 'Gràcia', 'Alexia', 'Marisa',];

        $(".voluntaria").remove();
        $(".grupo").remove();
        //$(".coder").show();
        $(".coder").removeClass('tachar');

        let grupo1, grupo2, grupo3, grupo4, grupo5, grupo6;

        listaNombresActive = listaNombresActive.map(i => [Math.random(), i]).sort().map(i => i[1]);

        grupo1 = listaNombresActive.slice(0, 4).join(', ');
        grupo2 = listaNombresActive.slice(4, 8).join(', ');
        grupo3 = listaNombresActive.slice(8, 12).join(', ');
        grupo4 = listaNombresActive.slice(12, 16).join(', ');
        grupo5 = listaNombresActive.slice(16, 20).join(', ');
        grupo6 = listaNombresActive.slice(20, 24).join(', ');

        $('.answer').append(`<p class="grupo">Grupo 1: ${grupo1}</p>`);
        $('.answer').append(`<p class="grupo">Grupo 2: ${grupo2}</p>`);
        $('.answer').append(`<p class="grupo">Grupo 3: ${grupo3}</p>`);
        $('.answer').append(`<p class="grupo">Grupo 4: ${grupo4}</p>`);
        $('.answer').append(`<p class="grupo">Grupo 5: ${grupo5}</p>`);
        $('.answer').append(`<p class="grupo">Grupo 6: ${grupo6}</p>`);

    };
    /*------------------------------------------- FUNCTION---ELIMINAR-NOMBRE-------------------------------------------*/

    function eliminarNombre() {


    };


    /*-------------------------------------------START-----------------------------------------------*/

    $('#btn-start').on("click", function () {

        random();

    });

    /*-----------------------------------------REINICIAR-----------------------------------------------*/

    $('#btn-reiniciar').on("click", function () {

        reiniciar();

    });

    /*-----------------------------------------CREAR-GRUPOS-----------------------------------------------*/

    $('#btn-grupos').on("click", function () {

        crearGrupos();

    });

    /*$('ul').on("click", function () {

        eliminarNombre();

    });*/

});
