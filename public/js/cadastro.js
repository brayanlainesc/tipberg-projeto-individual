function cadastrarUsuario() {
    const nome = ipt_nome.value
    const email = ipt_email.value
    const senha = ipt_senha.value
    const confSenha = ipt_conf_senha.value

    if (senha != confSenha) {
        msgRetorno.innerHTML = `As senhas não condizem.`
    } else if (senha.length < 8) {
        msgRetorno.innerHTML = `A senha deve ter no mínimo 8 caracteres.`
    } else if (nome == ``) {
        msgRetorno.innerHTML = `O nome de usuário não pode ser vazio.`
    } else if (email == ``) {
        msgRetorno.innerHTML = `O endereço de e-mail não pode ser vazio.`
    } else {
        // Armazendo dados num objeto usuário
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        // Captura a variável de usuários cadastrados no Local Storage (transformando numa lista)
        let usuariosCadastrados = JSON.parse(localStorage.getItem("tipberg_usuarios_cadastrados")) || [];

        // Adiciona o novo usuário à lista
        usuariosCadastrados.push(usuario);

        // Redefine a variável com a lista modificada (transformando em String)
        localStorage.setItem("tipberg_usuarios_cadastrados", JSON.stringify(usuariosCadastrados));

        // Redireciona para a página de login
        window.location.href = "login.html"
    }
}