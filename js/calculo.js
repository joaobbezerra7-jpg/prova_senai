
function calcularLote(arrayFormas) {
    

    for (const info of arrayFormas) {
        
        if (info.valor <= 20000) {
            
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} <br> Largura: ${info.larg} <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${info.valor.toFixed(2).replace('.', ',')}<br>
            Valor adicional: Isento <br>
            Valor final: R$ ${info.valor.toFixed(2).replace('.', ',')} <br>`
        }

        else if (info.valor <= 100000) {
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} <br> Largura: ${info.larg} <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${info.valor.toFixed(2).replace('.', ',')}<br>
            Valor adicional: R$ ${(info.valor * 0.05).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.05)).toFixed(2).replace('.', ',')} <br>`
        }

        else if (info.valor <= 500000) {
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} <br> Largura: ${info.larg} <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${(info.valor).toFixed(2).replace('.', ',')}<br>
            Valor adicional: R$ ${(info.valor * 0.1).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.1)).toFixed(2).replace('.', ',')} <br>`
        }

        else if (info.valor < 1000000) {
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} <br> Largura: ${info.larg} <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${(info.valor).toFixed(2).replace('.', ',')}<br>
            Valor adicional: R$ ${(info.valor * 0.15).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.15)).toFixed(2).replace('.', ',')} <br>`
        }

        else{
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} <br> Largura: ${info.larg} <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${info.valor}<br>
            Valor adicional: R$ ${(info.valor * 0.2).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.2)).toFixed(2).replace('.', ',')} <br>`
        }

    }
    

        
        
    
}

export { calcularLote }