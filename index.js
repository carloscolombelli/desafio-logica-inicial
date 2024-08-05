let nomeDoHeroi = "hunter"
let xpdoheroi = 10500

function checkNumberRange(xpdoheroi) {
    switch (true) {
        case (xpdoheroi >= 0 && xpdoheroi <= 1000):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Ferro";
        case (xpdoheroi >= 1001 && xpdoheroi <= 2000):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Bronze";
        case (xpdoheroi >= 2001 && xpdoheroi <= 5000):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Prata";
        case (xpdoheroi >= 5001 && xpdoheroi <= 7000):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Ouro";
        case (xpdoheroi >= 7001 && xpdoheroi <= 8000):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Platina";
        case (xpdoheroi >= 8001 && xpdoheroi <= 9000):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Ascendente";
        case (xpdoheroi >= 9001 && xpdoheroi <= 10000):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Imortal";
        case (xpdoheroi >= 10001):
            return "O heroi de nome " + nomeDoHeroi + " está no nível de Radiante";
        default:
            return "O heroi de nome " + nomeDoHeroi + " tem um nível desconhecido";
    }
}

console.log(checkNumberRange(xpdoheroi));
