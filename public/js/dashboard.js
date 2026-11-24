if (!sessionStorage.TIPBERG_AUTH_EMAIL) {
    btn_questionario.innerHTML = `
        <a class="botao-menu" href="login.html">
            <button class="botao-principal">Entre para responder</button>
        </a>
        `
} else {
    btn_questionario.innerHTML = `
        <button onclick="sairDaConta()" class="botao-secundario">Sair da conta</button>
        `
}

function sairDaConta() {
    sessionStorage.removeItem("TIPBERG_AUTH_EMAIL")
    sessionStorage.removeItem("TIPBERG_AUTH_NOME")
    sessionStorage.removeItem("TIPBERG_AUTH_ID")
    sessionStorage.removeItem("TIPBERG_QUESTIONARIO")

    window.location.href = "../index.html"
}

let minijogos = []
let erasJogadas = []
let participacoesDespedida = []

function obterRankingMinijogos() {
    fetch(`/dashboard/minijogos`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error('Erro ' + resposta.status)
            }
            return resposta.json()
        })
        .then(function (listaJson) {
            minijogos = listaJson
            plotarGraficoMinijogos(minijogos)
        })
        .catch(function (erro) { console.error(erro) })
}

function obterErasJogadas() {
    fetch(`/dashboard/erasJogadas`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error('Erro ' + resposta.status)
            }
            return resposta.json()
        })
        .then(function (listaJson) {
            erasJogadas = listaJson
            plotarGraficoErasJogadas(erasJogadas)
        })
        .catch(function (erro) { console.error(erro) })
}

function obterParticipacoesDespedida() {
    fetch(`/dashboard/despedida`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error('Erro ' + resposta.status)
            }
            return resposta.json()
        })
        .then(function (listaJson) {
            participacoesDespedida = listaJson
            plotarGraficoDespedida(participacoesDespedida)
        })
        .catch(function (erro) { console.error(erro) })
}

function obterQtdRespostas() {
    fetch(`/dashboard/qtdRespostas`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error('Erro ' + resposta.status)
            }
            return resposta.json()
        })
        .then(function (valor) {
            preencherKpiQtdJogadores(valor)
        })
        .catch(function (erro) { console.error(erro) })
}

function obterIdadeJogadores() {
    fetch(`/dashboard/idadeJogadores`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error('Erro ' + resposta.status)
            }
            return resposta.json()
        })
        .then(function (valor) {
            preencherKpiIdadeJogadores(valor)
        })
        .catch(function (erro) { console.error(erro) })
}

function obterPaisJogadores() {
    fetch(`/dashboard/paisJogadores`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error('Erro ' + resposta.status)
            }
            return resposta.json()
        })
        .then(function (valor) {
            preencherKpiPaisJogadores(valor)
        })
        .catch(function (erro) { console.error(erro) })
}

function plotarGraficoMinijogos(lista) {
    let labels = []
    let valores = []

    for (let i = 0; i < lista.length; i++) {
        labels.push(lista[i].texto)
        valores.push(lista[i].qtd_respostas)
    }

    new Chart(document.getElementById('grafico_minijogos'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Votos',
                data: valores,
                backgroundColor: '#FFBB00',
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            color: '#FAFCFF',

            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: '#FAFCFF'
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: '#FAFCFF'
                    },
                    grid: {
                        color: '#FFFFFF33'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0,
                        color: '#FAFCFF'
                    },
                    grid: {
                        color: '#FFFFFF33'
                    }
                }
            }
        }
    })
}

function plotarGraficoErasJogadas(lista) {
    let labels = []
    let valores = []

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].texto == 'A Raíz (antes da Disney, poucas mecânicas)') {
            labels.push('Raíz (2000-2007)')
        } else if (lista[i].texto == 'A Massiva (novos minijogos, festas temáticas)') {
            labels.push('Massiva (2008-2012)')
        } else if (lista[i].texto == 'A Histórica (narrativa complexa, operações)') {
            labels.push('Histórica (2013-2015)')
        } else if (lista[i].texto == 'A Moderna (patrocínios, gráficos novos)') {
            labels.push('Moderna (2016-2017)')
        } else {
            labels.push('Outros')
        }
        valores.push(lista[i].qtd_respostas)
    }

    new Chart(document.getElementById('grafico_eras_jogadas'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Respostas',
                data: valores,
                backgroundColor: '#FFBB00',
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            color: '#FAFCFF',

            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: '#FAFCFF'
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: '#FAFCFF'
                    },
                    grid: {
                        color: '#FFFFFF33'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0,
                        color: '#FAFCFF'
                    },
                    grid: {
                        color: '#FFFFFF33'
                    }
                }
            }
        }
    })
}

function plotarGraficoDespedida(lista) {
    let labels = []
    let valores = []

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].texto == 'Sim, e inclusive joguei Club Penguin Island') {
            labels.push('Participaram e jogaram Club Penguin Island')
        } else if (lista[i].texto == 'Sim, mas depois do fechamento não joguei mais') {
            labels.push('Apenas participaram do evento')
        } else if (lista[i].texto == 'Provavelmente, mas não me lembro tão bem') {
            labels.push('Incertos se participaram')
        } else if (lista[i].texto == 'Não, já tinha parado de jogar há um tempo') {
            labels.push('Não participaram')
        } else {
            labels.push('Outros')
        }
        valores.push(lista[i].qtd_respostas)
    }

    new Chart(document.getElementById('grafico_despedida'), {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: valores,
                backgroundColor: [
                    '#FFB800',
                    '#e75500',
                    '#22A4F3',
                    '#0B388C'
                ],
                borderColor: [
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                    '#ffffff'
                ],
                hoverOffset: 4
            }],
        },
        options: {
            responsive: true,

            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });
}

function preencherKpiQtdJogadores(valor) {
    kpi_qtd_jogadores.innerHTML = `${valor[0].qtd_respostas}`
}

function preencherKpiIdadeJogadores(valor) {
    kpi_idade_jogadores.innerHTML = `${valor[0].idade_jogadores} anos`
}

function preencherKpiPaisJogadores(valor) {
    kpi_pais_jogadores.innerHTML = `${valor[0].pais_jogadores}`
}

obterRankingMinijogos()
obterErasJogadas()
obterParticipacoesDespedida()
obterQtdRespostas()
obterIdadeJogadores()
obterPaisJogadores()

function fecharMsgAviso() {
    mensagem_aviso.innerHTML = ``
}