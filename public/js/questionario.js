let questoes = []
let alternativas = []
let questaoAtual = 0
let idQuestaoAtual = -1

fetch(`/questoes/listar`)
    .then(function (resposta) {
        if (!resposta.ok) {
            throw new Error('Erro ' + resposta.status)
        }
        return resposta.json()
    })
    .then(function (listaJson) {
        questoes = listaJson
        return fetch(`/questoes/listarAlternativas`)
    })
    .then(function (resposta) {
        if (!resposta.ok) {
            throw new Error('Erro ' + resposta.status)
        }
        return resposta.json()
    })
    .then(function (listaJson) {
        alternativas = listaJson
        carregarQuestao(1)
    })
    .catch(function (erro) { console.error(erro) })

function carregarQuestao(num) {
    questaoAtual = 0
    idQuestaoAtual = -1

    for (let i = 0; i < questoes.length; i++) {
        const questao = questoes[i]

        if (questao.numero == num) {
            const texto = questao.texto
            h2_questao.innerHTML = `Questão ${num} - ${texto}`
            questaoAtual = num
            idQuestaoAtual = questao.id
        }
    }

    if (questaoAtual != 0) {
        for (let i = 0; i < alternativas.length; i++) {
            const alternativa = alternativas[i]

            if (alternativa.questao_id == idQuestaoAtual) {
                document.getElementById(`questionario_alternativa_${alternativa.letra}`).innerHTML = `${alternativa.letra.toUpperCase()} - ${alternativa.texto}`
            }
        }
    } else {
        alert("Fim do questionário!")
    }
}

function responderAlternativa(letra) {
    let alternativaId = -1
    for (let i = 0; i < alternativas.length; i++) {
        const alternativa = alternativas[i]

        if (alternativa.questao_id == idQuestaoAtual && alternativa.letra.toUpperCase() == letra) {
            alternativaId = alternativa.id
        }
    }

    if (alternativaId != -1) {
        fetch(`/questoes/responder/${idQuestaoAtual}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usuarioId: sessionStorage.TIPBERG_AUTH_ID,
                alternativaId: alternativaId
            }),
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    alert("Respondido!");
                    carregarQuestao(questaoAtual + 1)
                } else {
                    throw "Houve um erro ao tentar responder a questão!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    } else if (idQuestaoAtual != -1) {
        alert("Alternativa não encontrada!")
    }
}