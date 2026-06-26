import { calcularLote } from "./calculo.js"
const form = document.querySelector("#form")
const divResul = document.querySelector("#div-resul")

form.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const objFormDados = new FormData(form);

    let quadra = objFormDados.get('quadra');
    let lot = objFormDados.get('lote');
    let comp = objFormDados.get('comp');
    let larg = objFormDados.get('larg');

    const lotes = {
        quadra,
        lot,
        comp,
        larg,
        area: comp * larg,
        valor: (comp * larg) * 550
        
    }

    const lotesCadastrados = [];

    lotesCadastrados.push(lotes);

    divResul.innerHTML += calcularLote(lotesCadastrados)


   

    form.reset()
})