Convertor={
    convertir: function(medida,unidad,unidad2,tipo){
        var resultado;
        switch(tipo){
            case "L":
                switch(unidad){
                    case "m":
            if(unidad2=="cm"){
                resultado=medida*100;
            }
            break;
            case "km":
            if(unidad2=="m"){
                resultado=medida*1000;
            }
            break;
            case "ft":
            if(unidad2=="m"){
                resultado=medida/3.28;
            }
            break;
            default:
            console.log("Unidad no reconocida.");
            break;
            }
            break;
            case "T":
            switch(unidad){
                case "c":
            if(unidad2=="f"&&tipo=="T"){
                resultado=(medida*9/5)+32;
            }
            break;
            case "k":
            if(unidad2=="f"&&tipo=="T"){
                resultado=(medida*9/5)-459.67;
            }
            break;
            case "k":
            if(unidad2=="c"&&tipo=="T"){
                resultado=medida-273.15;
            }
            break;
            default:
            console.log("Unidad no reconocida");
            break;
            }
            break;
            default:
            console.log("Tipo no reconocido.");
        }
        return resultado;
    }
};