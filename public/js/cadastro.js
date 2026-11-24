fetch("/paises/listar")
    .then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                const paises = resposta

                let paisSelOptions = `<option disabled selected value="">Selecione um país</option>`
                for (let i = 0; i < paises.length; i++) {
                    const pais = paises[i]

                    paisSelOptions += `
                        <option class="campo-input" value="${pais.id}">${pais.nome}</option>
                    `
                }

                sel_pais_origem.innerHTML = paisSelOptions
            })
        } else {
            console.error("Nenhum dado encontrado ou erro na API.")
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

function cadastrarUsuario() {
    let erroNome = ``;
    let erroEmail = ``;
    let erroSenha = ``;
    let erroAnoNasc = ``;
    let erroPaisOrigem = ``;

    if (ipt_nome.value.length < 3 || ipt_nome.value.length > 45) {
        erroNome += `<span style="color:red">O nome deve ter entre 3 a 45 caracteres.</span><br>`
    }
    if (ipt_email.value.length < 3 || ipt_email.value.length > 100) {
        erroEmail += `<span style="color:red">O e-mail deve ter entre 3 a 100 caracteres.</span><br>`
    }
    if (
        ipt_email.value.indexOf("@") <= 0 ||
        ipt_email.value[(ipt_email.value.indexOf("@") + 1)] == "." ||
        ipt_email.value.indexOf("@") >= ipt_email.value.indexOf(".com")
    ) {
        erroEmail += `<span style="color:red">O e-mail deve ter um domínio válido.</span><br>`
    }
    if (ipt_senha.value.length < 8) {
        erroSenha += `<span style="color:red">A senha deve ter, no mínimo, 8 caracteres.</span><br>`
    }
    if (ipt_senha.value != ipt_conf_senha.value) {
        erroSenha += `<span style="color:red">As senhas inseridas devem ser iguais.</span><br>`
    }
    if (ipt_ano_nasc.value % 1 != 0 || ipt_ano_nasc.value < 1900 || ipt_ano_nasc.value > 2024) {
        erroAnoNasc += `<span style="color:red">Insira um ano válido para o ano de nascimento.</span><br>`
    }
    if (sel_pais_origem.value == "") {
        erroPaisOrigem += `<span style="color:red">Não esqueça de selecionar seu país!</span><br>`
    }

    msg_erro_nome.innerHTML = erroNome;
    msg_erro_email.innerHTML = erroEmail;
    msg_erro_senha.innerHTML = erroSenha;
    msg_erro_ano_nasc.innerHTML = erroAnoNasc;
    msg_erro_pais_origem.innerHTML = erroPaisOrigem;

    const nome = ipt_nome.value
    const email = ipt_email.value
    const senha = ipt_senha.value
    const anoNasc = Number(ipt_ano_nasc.value)
    const paisOrigemId = sel_pais_origem.value

    fetch("/usuarios/listar")
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
            senhaServer: senha,
            anoNascServer: anoNasc,
            paisOrigemIdServer: paisOrigemId
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