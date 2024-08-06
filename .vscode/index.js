let vitorias = 166;
let derrotas = 60;
let rank = vitorias - derrotas;

function checkNumberRange(rank) {
    const niveis = [
        { min: 0, max: 10, nivel: "Ferro" },
        { min: 11, max: 20, nivel: "Bronze" },
        { min: 21, max: 50, nivel: "Prata" },
        { min: 51, max: 80, nivel: "Ouro" },
        { min: 81, max: 90, nivel: "Diamante" },
        { min: 91, max: 100, nivel: "Lendario" },
        { min: 101, max: Infinity, nivel: "Imortal" }
    ];

    let nivel = niveis.find(n => rank >= n.min && rank <= n.max);
    return `O heroi tem saldo de ${rank} vitorias e está no nível ${nivel.nivel}`;
}

console.log(checkNumberRange(rank));
