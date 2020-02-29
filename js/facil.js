/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */

$(document).ready(function() {
    toastr.options.closeButton = true
    toastr.options.positionClass = 'toast-bottom-right'
    $('.drag').draggable({
            containment: '#containment-wrapper',
            scroll: false
        })
        /* isla de Tenerife */
    $('.drop').droppable({
        accept: '.drag',
        drop: function() {
            // alert('Traje correcto, es de hombre y de la isla de Tenerife')
            $(this).css('background-color', 'green')
            $(.resultado).html('Droppable!!!')
            toastr.success('Traje correcto, es de la isla de Tenerife')
        }
    })

    $('.drag2').draggable({
            containment: '#containment-wrapper',
            scroll: false
        })
        /* isla de el hierro */
    $('.drop2').droppable({
        accept: '.drag2',
        drop: function() {
            // alert('Traje correcto, es de la isla de El Hierro')
            $(this).css('background', 'green')
            toastr.success('Traje correcto, es de la isla de El Hierro')
        }
    })

    $('.drag3').draggable({
            containment: '#containment-wrapper',
            scroll: false
        })
        /* isla de la gomera */
    $('.drop3').droppable({
        accept: '.drag3',
        drop: function() {
            // alert('Traje correcto, es de la isla de La Gomera')
            $(this).css('background', 'green')
            toastr.success('Traje correcto, es de la isla de La Gomera')
        }
    })

    $('.drag4').draggable({
            containment: '#containment-wrapper',
            scroll: false
        })
        /* isla de la palma */
    $('.drop4').droppable({
        accept: '.drag4',
        drop: function() {
            // alert('Traje correcto, es de la isla de La Palma')
            $(this).css('background', 'green')
            toastr.success('Traje correcto, es de la isla de La Palma')
        }
    })
})