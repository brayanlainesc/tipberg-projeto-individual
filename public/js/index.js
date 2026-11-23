function mostrarScreenshot(lugar) {
    screenshot_lugar.innerHTML = `
        <div class="screenshot_lugar">
            <img id="img_screenshot_lugar" src="assets/img/conteudo/screenshots/${lugar}.png" alt="Screenshot de ${lugar}">
            <button class="botao-principal" id="btn_fechar_screenshot" onclick="fecharScreenshot()">
                <img src="assets/img/icones/close_icon.png" alt="Fechar screenshot">
            </button>
        </div>
        `
}

function fecharScreenshot() {
    screenshot_lugar.innerHTML = ``
}