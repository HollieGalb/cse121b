// operators.js

let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function shipCanFire(){
    //return T if the ships health is above 0 & ammo is above 0, or F
    if(shipHealth > 0 && shipAmmo > 0){
        return true;
    }else{
        return false
    }
}

function isHit(){
    //return T if a randomly generated number is greater than .5, F if it's less than .5
    let num = Math.random();
    if (num > .5) {
        return true;
    }else{
        return false;
    }
}

function reloadShip(){
    //lower ship health by 1, and increase ammo by 3
    shipHealth -= 1;
    shipAmmo +=3;
}

function isDestroyed(health){
    //returns T if health is zero or less
    if(shipHealth === 0 || targetHealth === 0){
        return true;
    }else{
        return false;
    }

}