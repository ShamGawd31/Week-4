

let dragonHealth = 10;
let userHealth = 5;


while(dragonHealth > 0 || userHealth > 0){
    var damage = window.prompt("How many hits are you going to hit the dragon with? (up to 5)");


    randDamage = Math.floor(Math.random() * damage) + 1;
    if(randDamage > 5){
        dragonHealth = dragonHealth - 1;
    }
    else{
        dragonHealth = dragonHealth - randDamage;
    }

    if(dragonHealth > 0){
        dragRandDamage = Math.floor(Math.random() * 2) + 1;
        userHealth = userHealth - dragRandDamage;
    }

    else{
        document.body.innerHTML = "User Wins! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
        break;
    }

    if(userHealth <= 0){
        document.body.innerHTML = "Dragon Wins! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
        break;
    }


}




