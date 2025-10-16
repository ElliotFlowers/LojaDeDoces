
const inputs = document.querySelectorAll(".qtd");
const totalDoces = document.getElementById("totalDoces");
const totalReais = document.getElementById("totalReais");
const btnFinalizar = document.getElementById("btnFinalizar");


function atualizarCarrinho() {
  let qtdTotal = 0;
  let valorTotal = 0;

  inputs.forEach(input => {
    let qtd = Number(input.value);
    let preco = Number(input.dataset.preco);
    qtdTotal += qtd;
    valorTotal += qtd * preco;
  });

  totalDoces.textContent = qtdTotal;
  totalReais.textContent = valorTotal.toFixed(2);
}


inputs.forEach(input => {
  input.addEventListener("input", atualizarCarrinho);
});

// Ki ki Ma Ma
btnFinalizar.addEventListener("click", () => {
  let qtdTotal = 0;
  let valorTotal = 0;

  inputs.forEach(input => {
    let qtd = Number(input.value);
    let preco = Number(input.dataset.preco);
    qtdTotal += qtd;
    valorTotal += qtd * preco;
  });

 
  document.getElementById("resumoDoces").textContent = qtdTotal;
  document.getElementById("resumoReais").textContent = valorTotal.toFixed(2);

  
  const jumpscare = document.getElementById("jumpscare");
  jumpscare.classList.remove("hidden");
  setTimeout(() => {
    jumpscare.classList.add("hidden");
  }, 5000);
});