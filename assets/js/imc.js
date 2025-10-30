// IMC calculator logic (externalized)
let imcHistory = JSON.parse(localStorage.getItem('imcHistory')) || [];

function atualizarHistorico() {
    const historyDiv = document.getElementById("history");
    if (!historyDiv) return;
    historyDiv.innerHTML = "";
    imcHistory.slice(-5).forEach(item => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.textContent = item;
        historyDiv.appendChild(div);
    });
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (!peso || !altura) {
        resultado.innerText = "Por favor, preencha peso e altura corretamente.";
        return;
    }

    const imc = peso / (altura * altura);
    const imcFix = imc.toFixed(2);

    let classificacao = "";
    let dica = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        dica = "Considere aumentar a ingestão calórica com alimentos nutritivos.";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
        dica = "Mantenha hábitos saudáveis para continuar assim!";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
        dica = "Inclua atividades físicas regulares e atenção à alimentação.";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
        dica = "Procure acompanhamento médico ou nutricional para orientação.";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
        dica = "É importante buscar ajuda profissional para reduzir riscos à saúde.";
    } else {
        classificacao = "Obesidade grau III";
        dica = "Procure acompanhamento médico imediatamente para avaliação completa.";
    }

    resultado.innerText = `Seu IMC é ${imcFix} - ${classificacao}\n${dica}`;

    imcHistory.push(`Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imcFix} (${classificacao})`);
    localStorage.setItem('imcHistory', JSON.stringify(imcHistory));

    atualizarHistorico();

    const canvas = document.getElementById('imcChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (window.imcChartInstance) {
        window.imcChartInstance.destroy();
    }
    window.imcChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['IMC'],
            datasets: [{
                label: 'IMC',
                data: [imcFix],
                backgroundColor: imc < 18.5 ? '#1E90FF' :
                                 imc < 25 ? '#32CD32' :
                                 imc < 30 ? '#FFD700' :
                                 imc < 35 ? '#FFA500' : '#FF4500'
            }]
        },
        options: {
            indexAxis: 'y',
            scales: { x: { min: 0, max: 50 } }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCalcular');
    if (btn) btn.addEventListener('click', calcularIMC);
    atualizarHistorico();
});
