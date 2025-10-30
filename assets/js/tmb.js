// TMB calculator logic (externalized)
function calcularTMB() {
    const peso = parseFloat(document.getElementById("pesoTMB").value);
    const alturaMetros = parseFloat(document.getElementById("alturaTMB").value);
    const idade = parseFloat(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const resultadoTMB = document.getElementById("resultadoTMB");

    if (!peso || !alturaMetros || !idade || !sexo) {
        resultadoTMB.innerHTML = "<p>Por favor, preencha todos os campos.</p>";
        return;
    }

    const altura = alturaMetros * 100; // cm

    let tmb;
    if (sexo === "masculino") {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }

    const multSedentario = 1.25;
    const multModerado  = 1.35;
    const multIntenso   = 1.45;

    const ndcSedentario = tmb * multSedentario;
    const ndcModerado   = tmb * multModerado;
    const ndcIntenso    = tmb * multIntenso;

    const perdaMin = Math.max(tmb, ndcSedentario - 600);
    const perdaMax = Math.max(tmb, ndcSedentario - 500);

    function f(n) { return Number(n).toFixed(2); }

    resultadoTMB.innerHTML = `
        <div class="resultado-card">
            <h3>🔥 Seu Metabolismo Basal (TMB)</h3>
            <p><strong>${f(tmb)} kcal/dia</strong></p>
            <hr style="border:none; border-top:1px solid rgba(0,0,0,0.06); margin:12px 0;">
            <p style="margin:6px 0;"><strong>Necessidade Diária de Calorias (NDC)</strong></p>
            <p style="margin:4px 0;">Nenhuma atividade: <strong>${f(ndcSedentario)} kcal/dia</strong></p>
            <p style="margin:4px 0;">Atividade moderada: <strong>${f(ndcModerado)} kcal/dia</strong></p>
            <p style="margin:4px 0;">Atividade intensa: <strong>${f(ndcIntenso)} kcal/dia</strong></p>

            <hr style="border:none; border-top:1px solid rgba(0,0,0,0.06); margin:12px 0;">
            <p style="margin:6px 0;"><strong>Para perder peso (exemplo)</strong></p>
            <p style="margin:4px 0;">
                Sugestão de ingestão diária: <strong>${Math.round(perdaMin)} — ${Math.round(perdaMax)} kcal/dia</strong>
                <br>
                (Para perder peso de forma segura, reduza de 500 a 600 kcal em relação à sua NDC sedentária, sem nunca consumir menos que o TMB.)
            </p>

            <p style="font-size:13px; color:#555; margin-top:8px;">
                Observação: ajuste a base (NDC) conforme seu nível de atividade real. Consulte um profissional de saúde antes de mudanças drásticas.
            </p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCalcularTMB');
    if (btn) btn.addEventListener('click', calcularTMB);
});
