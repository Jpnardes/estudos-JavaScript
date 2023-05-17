// INTRODUÇÃO À VALIDAÇÃO DE FORMULÁRIOS

//USUÁRIO
document.querySelector('input[name="usuario"]').addEventListener('keyup'    , () => {
     if(document.querySelector('input[name="usuario"] + span')!==null){
        document.querySelector('input[name="usuario"] + span').remove()
     }

})

//Senha
document.querySelector('input[name="senha"]').addEventListener('keyup'    , () => {
     if(document.querySelector('input[name="senha"] + span')!==null){
        document.querySelector('input[name="senha"] + span').remove()
     }

})



document.formulario_login.addEventListener('submit', (event) => {

        //buscar valores dos campos 
        let usuario = event.target.usuario.value
        let senha = event.target.senha.value
        let submit = true

        //Remover erros anteriores
        document.querySelectorAll(".error").forEach(e => e.remove())
        // validar usuário
        if(usuario === ""){

            submit = false 

            //erro
            let tmp = document.querySelector('input[name="usuario"]')
            tmp.insertAdjacentHTML('afterend', '<span class="error"> Usuário é obrigatório. </span>')
        }
         

        // validar senha
        if(senha === ""){

            senha = false

            //erro
            let tmp = document.querySelector('input[name="senha"]')
            tmp.insertAdjacentHTML('afterend', '<span class="error"> Senha é obrigatória. </span>')
        }
        // verificar se o formulário pode ser submetido
        if(!submit){
            event.preventDefault()
            
        }

})