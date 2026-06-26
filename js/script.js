// Importação de função e captura de dadps
import { calcularLote } from "./calculo.js"
const form = document.querySelector("#form")
const divResul = document.querySelector("#div-resul")

// Função que acontece após envio dos dados
form.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const objFormDados = new FormData(form);
    // Captura dos Dados
    let quadra = objFormDados.get('quadra');
    let lot = objFormDados.get('lote');
    let comp = objFormDados.get('comp');
    let larg = objFormDados.get('larg');
    // Objeto de armazenamento dos valores
    const lotes = {
        quadra,
        lot,
        comp,
        larg,
        area: comp * larg,
        valor: (comp * larg) * 550
        
    }
    // Array para armazenamento dos objetos
    const lotesCadastrados = [];
    // Adição dos objetos no array
    lotesCadastrados.push(lotes);
    // Lista dinãmica
    divResul.innerHTML += calcularLote(lotesCadastrados)
    // Resetar dados do formulário
    form.reset()
})