
function calcularLote(arrayFormas) {
    
    // Verifica cada propriedade de cada item (objeto) do array
    for (const info of arrayFormas) {
        
        if (info.valor <= 20000) {
            
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} m <br> Largura: ${info.larg} m <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${info.valor.toFixed(2).replace('.', ',')}<br>
            Valor adicional: Isento <br>
            Valor final: R$ ${info.valor.toFixed(2).replace('.', ',')} <br> <br>`
        }

        else if (info.valor <= 100000) {
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} m <br> Largura: ${info.larg} m <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${info.valor.toFixed(2).replace('.', ',')}<br>
            Valor adicional: R$ ${(info.valor * 0.05).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.05)).toFixed(2).replace('.', ',')} <br> <br>`
        }

        else if (info.valor <= 500000) {
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} m <br> Largura: ${info.larg} m <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${(info.valor).toFixed(2).replace('.', ',')}<br>
            Valor adicional: R$ ${(info.valor * 0.1).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.1)).toFixed(2).replace('.', ',')} <br> <br>`
        }

        else if (info.valor < 1000000) {
            return `Descrição <br> Quadra: ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} m <br> Largura: ${info.larg} m <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${(info.valor).toFixed(2).replace('.', ',')}<br>
            Valor adicional: R$ ${(info.valor * 0.15).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.15)).toFixed(2).replace('.', ',')} <br> <br>`
        }

        else{
            return `Descrição <br> Quadra:  ${info.quadra} <br>
            Lote: ${info.lot} <br> Comprimento: ${info.comp} m <br> Largura: ${info.larg} m <br>
            Área: ${info.area} m² <br>
            Valor do lote: R$ ${(info.valor).toFixed(2).replace('.', ',')}<br>
            Valor adicional: R$ ${(info.valor * 0.2).toFixed(2).replace('.', ',')} <br>
            Valor final: R$ ${(info.valor + (info.valor * 0.2)).toFixed(2).replace('.', ',')} <br> <br>`
        }

    }
    

        
        
    
}

// Exportação da função
export { calcularLote }