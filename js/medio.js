/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
$(document).ready(function() {
    toastr.options.closeButton = true
    toastr.options.positionClass = 'toast-bottom-right'
    $(".drag").draggable({
        containment: "#containment-wrapper",
        scroll: false
    });
    /* isla de Tenerife */
    $(".drop").droppable({
        accept: ".drag",
        drop: function() {
            // alert("Traje correcto, es de hombre y de la isla de Tenerife")
            $(this).css('background', 'green');
            toastr.success("Traje correcto, es de hombre y de la isla de Tenerife")
        }
    });
    $(".drag2").draggable({
        containment: "#containment-wrapper",
        scroll: false
    });
    /* isla de el hierro */
    $(".drop2").droppable({
        accept: ".drag2",
        drop: function() {
            // alert("Traje correcto, es de hombre y de la isla de El Hierro");
            $(this).css('background', 'green');
            toastr.success("Traje correcto, es de hombre y de la isla de El Hierro")
        }
    });

    $(".drag3").draggable({
        containment: "#containment-wrapper",
        scroll: false
    });
    /* isla de la gomera */
    $(".drop3").droppable({
        accept: ".drag3",
        drop: function() {
            // alert("Traje correcto, es de hombre y de la isla de La Gomera");
            $(this).css('background', 'green');
            toastr.success("Traje correcto, es de hombre y de la isla de La Gomera")
        }
    });

    $(".drag4").draggable({
        containment: "#containment-wrapper",
        scroll: false
    });
    /* isla de la palma */
    $(".drop4").droppable({
        accept: ".drag4",
        drop: function() {
            // alert("Traje correcto, es de hombre y de la isla de La Palma");
            $(this).css('background', 'green');
            toastr.success("Traje correcto, es de hombre y de la isla de La Palma")
        }
    });

    $(".drag5").draggable({
        containment: "#containment-wrapper",
        scroll: false
    });
    /* isla de gran canaria */
    $(".drop5").droppable({
        accept: ".drag5",
        drop: function() {
            // alert("Traje correcto, es de hombre y de la isla Gran Canaria");
            $(this).css('background', 'green');
            toastr.success("Traje correcto, es de hombre y de la isla Gran Canaria")
        }
    });

    $(".drag6").draggable({
        containment: "#containment-wrapper",
        scroll: false
    });
    /* isla de fuerteventura */
    $(".drop6").droppable({
        accept: ".drag6",
        drop: function() {
            // alert("Traje correcto, es de hombre y de la isla de Fuerteventura");
            $(this).css('background', 'green');
            toastr.success("Traje correcto, es de hombre y de la isla de Fuerteventura")
        }
    });

    $(".drag7").draggable({
        containment: "#containment-wrapper",
        scroll: false
    });
    /* isla de lanzarote */
    $(".drop7").droppable({
        accept: ".drag7",
        drop: function() {
            // alert("Traje correcto, es de hombre y de la isla de Lanzarote");
            $(this).css('background', 'green');
            toastr.success("Traje correcto, es de hombre y de la isla de Lanzarote")
        }
    });
});