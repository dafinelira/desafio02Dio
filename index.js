let userDefeat = 20
let userVictory = 50
let balance = (userVictory - userDefeat)

console.log(balance)

function userNivel(){    

if (balance <= 10){    
    return "Ferro"
}

else if (balance >= 11 && balance <= 20){    
    return "Bronze"
}

else if (balance >= 21 && balance <= 50){    
    return "Prata"
}

else if (balance >= 51 && balance <= 80){    
    return "Ouro"
}

else if (balance >= 81 && balance <= 90){    
    return "Diamante"
}
else if (balance >= 91 && balance <= 100){    
    return "Lendário"
}

else if (balance >= 101){    
    return "Imortal"
}

}

console.log("O Herói tem um saldo de " + balance + " e está no nível " + userNivel())