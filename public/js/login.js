function logarUsuario() {
    const email = ipt_email.value;
    const senha = ipt_senha.value;

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                sessionStorage.TIPBERG_AUTH_EMAIL = json.email;
                sessionStorage.TIPBERG_AUTH_NOME = json.nome;
                sessionStorage.TIPBERG_AUTH_ID = json.id;

                if (sessionStorage.TIPBERG_QUESTIONARIO == 1) {
                    msgRetorno.innerHTML = `Bem-vindo, ${sessionStorage.TIPBERG_AUTH_NOME}! Redirecionando para a dashboard...`
                    setTimeout(() => {
                        window.location.href = "../dashboard.html"
                    }, 1000)
                } else {
                    msgRetorno.innerHTML = `Bem-vindo, ${sessionStorage.TIPBERG_AUTH_NOME}! Redirecionando para o questionário...`
                    setTimeout(() => {
                        window.location.href = "../questionario.html"
                    }, 1000)
                }
            });
        } else {
            console.log("Houve um erro ao tentar realizar o login!");
            resposta.text().then(texto => {
                console.error(texto)
                msgRetorno.innerHTML = texto
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}