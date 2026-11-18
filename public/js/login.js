function logarUsuario() {
    const email = ipt_email.value
    const senha = ipt_senha.value

    const usuariosCadastrados = JSON.parse(localStorage.getItem("tipberg_usuarios_cadastrados")) || [];

    const usuario = {
        nome: ``,
        email: ``,
        senha: ``
    }

    for (let i = 0; i < usuariosCadastrados.length; i++) {
        const usuarioIterado = usuariosCadastrados[i]

        if (usuarioIterado.email == email) {
            if (usuarioIterado.senha == senha) {
                usuario.nome = usuarioIterado.nome
                usuario.email = usuarioIterado.email
                usuario.senha = usuarioIterado.senha
            } else {
                msgRetorno.innerHTML = `A senha está incorreta.`
            }
        }
    }

    if (usuario.nome == ``) {
        msgRetorno.innerHTML = `Usuário não encontrado.`
    } else {
        msgRetorno.innerHTML = `Bem-vindo, ${usuario.nome}!`
    }
}