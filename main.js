$(document).ready(function () {

    $('#tel').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                minlength: 11
            },
            cep: {
                required: true,
                minlength: 8
            },
            endereco: {
                required: true
            }
        }
    })
})