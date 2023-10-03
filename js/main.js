

$('#telefone').mask('(00)00000-0000',{
            placeholder:'(__)(_____ ____)'
})

$('#CPF').mask('000.000.000-00',{
    placeholder:'___.___.___-__'
})

$('#CEP').mask('00000-0000',{
    placeholder:'_____-____'
})


$('form').validate({
rules :{
    nome:{
        required:true
    },  
    email: {
        required:true,
        email:true
    },
    telefone: {
        required:true,
    },     
        CPF: {
            required: true,
        },
        CEP: {
            required: true,
        },
        endereçocompleto : {
            required: false,
        }
    
},

messages:{// AQUI PROFESSOR!//
    nome:'Por favor, insira o seu nome',
    email: 'insira seu email',
    telefone: 'Por favor insira seu telefone', 
    CPF:'por favor insira seu CPF',
    CEP:'Por favor isira um CEPvalido'
},
submitHandler: function(form) {
    console.log(form)
},
invalidHandler: function(evento, validador){
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
    }
}

})