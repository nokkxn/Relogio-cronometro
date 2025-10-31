# ⏰ Relógio + Cronômetro — Projeto de Estudo

Um projeto simples e moderno que combina um **Relógio Digital** com um **Cronômetro funcional**, feito apenas com **HTML**, **CSS** e **JavaScript puro**.  
Ideal para praticar manipulação de tempo, eventos e DOM.

---

## 🌐 Deploy no GitHub Pages

👉 **[Acesse o projeto online aqui](https://nokkxn.github.io/Relogio-cronometro/)**  

*(Substitua o link acima pelo seu real do GitHub Pages após publicar.)*

---

## 📁 Estrutura de Pastas

```
Relogio-cronometro/
│
├── index.html      # Estrutura principal do projeto
├── style.css       # Estilos visuais do relógio e cronômetro
└── script.js       # Lógica e funcionamento dos componentes
```

---

## ⚙️ Funcionalidades

✅ **Relógio digital em tempo real**  
✅ **Cronômetro com botões de controle:** Iniciar, Pausar e Resetar  
✅ **Interface estilizada com CSS moderno**  
✅ **Animações suaves e cores vivas**  
✅ **Totalmente responsivo e leve**

---

## 🧠 Como funciona

### 🕒 `Relógio Digital`
Usa a função `Date()` do JavaScript para capturar o horário atual e atualiza o conteúdo a cada segundo com `setInterval()`.

```js
function atualizarRelogio() {
  const agora = new Date();
  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();
  document.getElementById("relogio").textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);
```

---

### ⏱️ `Cronômetro`
Usa variáveis para contar **horas, minutos e segundos**, controladas por `setInterval()` e botões HTML.

- **Iniciar:** começa a contagem  
- **Pausar:** interrompe o intervalo  
- **Resetar:** zera os valores e volta para “00:00:00”

---

## 🎨 Estilo (CSS)

- **Gradiente de fundo** entre amarelo e preto  
- **Sombras e bordas arredondadas** para destacar os elementos  
- **Cores diferenciadas** para cada botão:
  - 🟢 Iniciar → verde escuro  
  - 🟡 Pausar → dourado  
  - 🔴 Resetar → vermelho

---

## 🧩 Tecnologias usadas

| Tecnologia | Função |
|-------------|--------|
| **HTML5** | Estrutura do projeto |
| **CSS3** | Estilos e responsividade |
| **JavaScript (ES6)** | Lógica de tempo e eventos |
| **Flexbox** | Alinhamento dos elementos |

---

## 🧰 Como rodar o projeto localmente

1. Baixe a pasta completa (`index.html`, `style.css`, `script.js`);
2. Abra o arquivo `index.html` em qualquer navegador moderno;
3. O relógio e cronômetro iniciarão automaticamente.

---

## 🚀 Melhorias futuras

- Adicionar **modo escuro/claro**  
- Exibir **data completa (dia, mês e ano)**  
- Criar **som de notificação** ao pausar ou resetar  
- Adicionar **tema customizável**

---

## 👨‍💻 Autor

**Vinicius Lourenço Silva dos Santos**  
💼 Projeto criado como parte dos estudos de **Desenvolvimento Web (JavaScript)**  
📍 *Guarujá - SP, Brasil*
