const form = document.querySelector("form")
const divResul = document.querySelector("div-resul")

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
    }

    const lotesCadastrados = [];

    lotesCadastrados.push(lotes);

    console.log(lotesCadastrados);

    form.reset()
})