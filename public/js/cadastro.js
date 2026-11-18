function cadastrarUsuario() {
    const nome = ipt_nome.value;
    const email = ipt_email.value;
    const senha = ipt_senha.value;
    const confSenha = ipt_conf_senha.value;

    if (
        nome == "" ||
        email == "" ||
        senha == "" ||
        confSenha == ""
    ) {
        msgRetorno.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        return false;
    }

    fetch("/usuarios/buscarUsuarios")
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    usuariosCadastrados = resposta
                    console.log("busca de usuários: ", usuariosCadastrados)

                    for (let i = 0; i < usuariosCadastrados.length; i++) {
                        const emailIterado = usuariosCadastrados[i].email
                        if (emailIterado == email) {
                            msgRetorno.innerHTML = `Um usuário com o e-mail ${email} já está cadastrado!`;
                            return false;
                        }
                    }
                })
            } else {
                console.error("Nenhum dado encontrado ou erro na API.")
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                msgRetorno.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                setTimeout(() => {
                    window.location = "../login.html";
                }, "2000");
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}