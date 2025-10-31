/* ===============================
   RELÓGIO DIGITAL
   =============================== */
function atualizarRelogio() {
  const agora = new Date(); // Cria o objeto Date com o horário atual
  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();

  // Adiciona zero à esquerda
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  // Exibe o horário
  document.getElementById("relogio").textContent = `${horas}:${minutos}:${segundos}`;
}

// Atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

/* ===============================
   CRONÔMETRO
   =============================== */
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
const cronometro = document.getElementById("cronometro");

function atualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  const formatoHoras = horas < 10 ? "0" + horas : horas;
  const formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
  const formatoSegundos = segundos < 10 ? "0" + segundos : segundos;

  cronometro.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

/* --- BOTÕES --- */
document.getElementById("iniciar").addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = setInterval(atualizarCronometro, 1000);
});

document.getElementById("pausar").addEventListener("click", () => {
  clearInterval(intervalo);
});

document.getElementById("resetar").addEventListener("click", () => {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.textContent = "00:00:00";
});
